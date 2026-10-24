import { NextRequest, NextResponse } from "next/server";
import { encrypt, encryptBuffer, generateTicketCode } from "@/lib/crypto";
import { insertLaporan, insertLampiran } from "@/lib/db";

export const runtime = "nodejs";

// Rate limiting sederhana berbasis memori (per-IP).
// Untuk produksi skala besar, ganti dengan store terdistribusi (mis. Redis/Upstash).
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 menit
const RATE_LIMIT_MAX = 5; // maksimal 5 laporan per menit per IP
const rateStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }
  entry.count += 1;
  return true;
}

const VALID_TYPES = ["kebocoran", "boros", "privasi"];
const MAX_INSTANSI_LENGTH = 200;
const MAX_DESCRIPTION_LENGTH = 5000;

// Batasan upload bukti.
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_MIME = ["application/pdf", "image/jpeg", "image/png"];

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  // Identifikasi IP untuk rate limiting (bukan disimpan bersama laporan).
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Terlalu banyak permintaan. Coba lagi nanti." },
      { status: 429 }
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Format permintaan tidak valid." },
      { status: 400 }
    );
  }

  const type = sanitize(form.get("type"));
  const instansi = sanitize(form.get("instansi"));
  const description = sanitize(form.get("description"));
  const file = form.get("bukti");

  // Validasi input di sisi server (boundary).
  if (!VALID_TYPES.includes(type)) {
    return NextResponse.json(
      { error: "Jenis laporan tidak valid." },
      { status: 400 }
    );
  }
  if (!instansi || instansi.length > MAX_INSTANSI_LENGTH) {
    return NextResponse.json(
      { error: "Nama instansi wajib diisi (maks 200 karakter)." },
      { status: 400 }
    );
  }
  if (!description || description.length > MAX_DESCRIPTION_LENGTH) {
    return NextResponse.json(
      { error: "Deskripsi wajib diisi (maks 5000 karakter)." },
      { status: 400 }
    );
  }

  // Validasi file bila ada (opsional).
  let fileBuffer: Buffer | null = null;
  let fileMeta: { name: string; type: string; size: number } | null = null;
  if (file && file instanceof File && file.size > 0) {
    if (!ALLOWED_MIME.includes(file.type)) {
      return NextResponse.json(
        { error: "Tipe file tidak didukung. Gunakan PDF, JPG, atau PNG." },
        { status: 400 }
      );
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Ukuran file melebihi 10MB." },
        { status: 400 }
      );
    }
    fileBuffer = Buffer.from(await file.arrayBuffer());
    fileMeta = { name: file.name, type: file.type, size: file.size };
  }

  const ticketCode = generateTicketCode();
  const submittedAt = new Date().toISOString();

  // Enkripsi isi laporan (dan file bila ada) sebelum disimpan.
  // Tidak ada IP, user-agent, atau identitas pelapor yang ikut disimpan.
  try {
    const encrypted = encrypt(JSON.stringify({ type, instansi, description }));
    insertLaporan({ ticketCode, submittedAt, ...encrypted });

    if (fileBuffer && fileMeta) {
      const encFile = encryptBuffer(fileBuffer);
      insertLampiran({
        ticketCode,
        fileName: fileMeta.name,
        mimeType: fileMeta.type,
        sizeBytes: fileMeta.size,
        iv: encFile.iv,
        authTag: encFile.authTag,
        ciphertext: encFile.ciphertext,
      });
    }
  } catch (err) {
    console.error("Gagal memproses laporan:", (err as Error).message);
    return NextResponse.json(
      { error: "Layanan sedang tidak tersedia. Coba lagi nanti." },
      { status: 503 }
    );
  }

  return NextResponse.json(
    {
      message: "Laporan berhasil diterima dan dienkripsi.",
      ticketCode,
    },
    { status: 201 }
  );
}
