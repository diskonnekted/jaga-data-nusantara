import crypto from "crypto";

// Enkripsi laporan pengaduan menggunakan AES-256-GCM (authenticated encryption).
// Kunci diambil dari environment variable REPORT_ENCRYPTION_KEY (hex 64 karakter = 32 byte).

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12; // 96-bit IV direkomendasikan untuk GCM
const KEY_LENGTH = 32; // 256-bit

function getKey(): Buffer {
  const rawKey = process.env.REPORT_ENCRYPTION_KEY;
  if (!rawKey) {
    throw new Error("REPORT_ENCRYPTION_KEY belum diset di environment.");
  }
  const key = Buffer.from(rawKey, "hex");
  if (key.length !== KEY_LENGTH) {
    throw new Error(
      `REPORT_ENCRYPTION_KEY harus 32 byte (64 karakter hex), ditemukan ${key.length} byte.`
    );
  }
  return key;
}

export interface EncryptedPayload {
  iv: string;
  authTag: string;
  ciphertext: string;
}

export function encrypt(plaintext: string): EncryptedPayload {
  const key = getKey();
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  const encrypted = Buffer.concat([
    cipher.update(plaintext, "utf8"),
    cipher.final(),
  ]);
  const authTag = cipher.getAuthTag();

  return {
    iv: iv.toString("hex"),
    authTag: authTag.toString("hex"),
    ciphertext: encrypted.toString("hex"),
  };
}

export interface EncryptedBuffer {
  iv: string;
  authTag: string;
  ciphertext: Buffer;
}

export function encryptBuffer(data: Buffer): EncryptedBuffer {
  const key = getKey();
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return {
    iv: iv.toString("hex"),
    authTag: authTag.toString("hex"),
    ciphertext: encrypted,
  };
}

export function decryptBuffer(payload: EncryptedBuffer): Buffer {
  const key = getKey();
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    key,
    Buffer.from(payload.iv, "hex")
  );
  decipher.setAuthTag(Buffer.from(payload.authTag, "hex"));

  return Buffer.concat([
    decipher.update(payload.ciphertext),
    decipher.final(),
  ]);
}

export function decrypt(payload: EncryptedPayload): string {
  const key = getKey();
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    key,
    Buffer.from(payload.iv, "hex")
  );
  decipher.setAuthTag(Buffer.from(payload.authTag, "hex"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(payload.ciphertext, "hex")),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
}

// Menghasilkan kode tiket anonim yang dapat dilacak pelapor tanpa mengungkap identitas.
export function generateTicketCode(): string {
  const bytes = crypto.randomBytes(4).toString("hex").toUpperCase();
  return `JDN-${bytes}`;
}
