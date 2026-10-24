"use client";

import { useState, useRef } from "react";
import { Upload, X, Loader2, Send, FileText } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

// Sumber: ART Bab I — klasifikasi keanggotaan (3 kategori) & prosedur verifikasi.
const joinOptions = [
  {
    title: "Anggota Biasa",
    desc: "Terbuka bagi profesional dan masyarakat umum yang peduli pelindungan data. Pendaftaran menyerahkan KTP, CV, dan pernyataan bebas benturan kepentingan; verifikasi latar belakang hingga 14 hari kerja, ditetapkan lewat SK Direktur Eksekutif dengan persetujuan Dewan Pengawas.",
    href: "mailto:pengaduan@jagadata.id?subject=Pendaftaran%20Anggota%20Biasa",
    label: "Kirim Berkas",
  },
  {
    title: "Anggota Kehormatan",
    desc: "Dianugerahkan kepada tokoh publik, akademisi, atau praktisi dengan kontribusi luar biasa bagi kedaulatan digital dan hak privasi warga, melalui keputusan Munas atau Rapat Dewan Pengawas bersama Badan Pengurus Eksekutif.",
    href: "mailto:pengaduan@jagadata.id?subject=Keanggotaan%20Kehormatan",
    label: "Hubungi",
  },
];

export default function PartisipasiPage() {
  const [formData, setFormData] = useState({ type: "", instansi: "", description: "" });
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [ticketCode, setTicketCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const ALLOWED_MIME = ["application/pdf", "image/jpeg", "image/png"];

  const validateAndSetFile = (f: File | undefined) => {
    if (!f) return;
    if (!ALLOWED_MIME.includes(f.type)) {
      setErrorMsg("Tipe file tidak didukung. Gunakan PDF, JPG, atau PNG.");
      setStatus("error");
      return;
    }
    if (f.size > MAX_FILE_SIZE) {
      setErrorMsg("Ukuran file melebihi 10MB.");
      setStatus("error");
      return;
    }
    setErrorMsg("");
    if (status === "error") setStatus("idle");
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const payload = new FormData();
      payload.append("type", formData.type);
      payload.append("instansi", formData.instansi);
      payload.append("description", formData.description);
      if (file) payload.append("bukti", file);

      const res = await fetch("/api/laporan", {
        method: "POST",
        body: payload,
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gagal mengirim laporan.");
      }

      setTicketCode(data.ticketCode);
      setStatus("success");
      setFormData({ type: "", instansi: "", description: "" });
      setFile(null);
    } catch (err) {
      setErrorMsg((err as Error).message);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full border border-ink bg-ground px-3 py-3 font-display text-[15px] leading-[1.2] text-ink placeholder:text-secondary";

  return (
    <div>
      {/* Lead */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Rubrik Partisipasi</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Lapor &amp; Partisipasi
          </h1>
          <p className="mt-6 max-w-2xl text-[19px] leading-[1.3] text-secondary md:text-[20px]">
            Bergabung bersama kami dalam mengawal tata kelola IT pemerintah.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-4 md:gap-0">
          {/* Whistleblower form */}
          <div className="md:col-span-3 md:border-r md:border-rule md:pr-10">
            <h2 className="font-display text-3xl font-black leading-tight tracking-tight md:text-4xl">
              Kanal Pengaduan
            </h2>
            <p className="mt-4 max-w-2xl text-[19px] leading-[1.3] text-secondary">
              Laporkan kebocoran data, proyek IT boros, atau pelanggaran privasi. Identitas
              Anda dijamin kerahasiaannya.
            </p>
            <div className="mt-6 max-w-2xl border-l-4 border-accent bg-ground p-4">
              <p className="kicker text-accent">Anonim &amp; Terenkripsi</p>
              <p className="mt-1 text-[17px] leading-[1.3] text-secondary">
                Laporan dienkripsi (AES-256) di server. Kami tidak menyimpan IP atau identitas
                Anda.
              </p>
            </div>

            {status === "success" ? (
              <div className="mt-10 border-t-4 border-ink pt-10 text-center">
                <p className="kicker text-accent">Terkirim</p>
                <h3 className="mt-2 font-display text-3xl font-black leading-tight tracking-tight">
                  Laporan Terkirim &amp; Terenkripsi
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-[19px] leading-[1.3] text-secondary">
                  Simpan kode tiket anonim berikut untuk melacak laporan Anda:
                </p>
                <p className="mt-6 inline-block border border-ink px-6 py-4 font-display text-3xl font-black leading-none tracking-[0.2em]">
                  {ticketCode}
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => setStatus("idle")}
                    className="btn btn-ghost"
                    type="button"
                  >
                    Kirim Laporan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 max-w-2xl space-y-6">
                <div>
                  <label htmlFor="jenis-laporan" className="kicker mb-2 block text-secondary">
                    Jenis Laporan
                  </label>
                  <select
                    id="jenis-laporan"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className={inputClass}
                    required
                  >
                    <option value="">Pilih jenis laporan…</option>
                    <option value="kebocoran">Kebocoran data</option>
                    <option value="boros">Proyek IT boros</option>
                    <option value="privasi">Pelanggaran privasi</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="instansi" className="kicker mb-2 block text-secondary">
                    Instansi Terkait
                  </label>
                  <input
                    id="instansi"
                    type="text"
                    value={formData.instansi}
                    onChange={(e) => setFormData({ ...formData, instansi: e.target.value })}
                    placeholder="Nama instansi pemerintah…"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="deskripsi" className="kicker mb-2 block text-secondary">
                    Deskripsi Kejadian
                  </label>
                  <textarea
                    id="deskripsi"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={6}
                    placeholder="Jelaskan secara detail…"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <span className="kicker mb-2 block text-secondary" id="label-bukti">
                    Upload Bukti (Opsional)
                  </span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="sr-only"
                    aria-labelledby="label-bukti"
                    onChange={(e) => validateAndSetFile(e.target.files?.[0])}
                  />
                  {file ? (
                    <div className="flex items-center gap-4 border border-rule p-4">
                      <FileText className="h-8 w-8 flex-shrink-0 text-ink" strokeWidth={1.5} />
                      <div className="min-w-0 flex-1">
                        <p className="kicker truncate text-ink">{file.name}</p>
                        <p className="mt-1 text-[15px] leading-[1.2] text-secondary">
                          {(file.size / 1024).toFixed(0)} KB
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-ink hover:bg-ink hover:text-ground"
                        aria-label="Hapus file"
                      >
                        <X className="h-5 w-5" strokeWidth={1.5} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                      }}
                      onDragLeave={(e) => {
                        e.preventDefault();
                        setDragActive(false);
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragActive(false);
                        validateAndSetFile(e.dataTransfer.files?.[0]);
                      }}
                      className={`w-full border border-dashed border-rule px-6 py-10 text-center transition-none ${
                        dragActive ? "bg-ink text-ground" : "text-ink hover:border-ink"
                      }`}
                    >
                      <Upload className="mx-auto h-8 w-8" strokeWidth={1.5} />
                      <p className="kicker mt-3">Klik atau seret file ke area ini</p>
                      <p className="mt-1 text-[15px] leading-[1.2] text-secondary">
                        PDF, JPG, PNG (maks 10MB)
                      </p>
                    </button>
                  )}
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="border border-rule border-l-4 border-l-accent p-4"
                  >
                    <p className="kicker text-accent">Gagal</p>
                    <p className="mt-1 text-[17px] leading-[1.3]">{errorMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-solid w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />{" "}
                      Mengenkripsi &amp; mengirim…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" /> Kirim Laporan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar: join + directory */}
          <aside className="md:pl-10">
            <p className="kicker text-accent">Ikut Serta</p>
            <ul className="mt-4 border-t border-rule">
              {joinOptions.map((opt) => (
                <li key={opt.title} className="border-b border-rule py-5">
                  <h3 className="font-display text-lg font-bold leading-tight">{opt.title}</h3>
                  <p className="mt-2 text-[17px] leading-[1.3] text-secondary">{opt.desc}</p>
                  <a
                    href={opt.href}
                    className="kicker mt-3 inline-flex min-h-[44px] items-center text-accent underline underline-offset-4"
                  >
                    {opt.label} →
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="kicker text-accent">Kontak</p>
              <ul className="mt-4 space-y-3 text-[17px] leading-[1.3]">
                <li>
                  <a
                    href="mailto:pengaduan@jagadata.id"
                    className="underline-offset-4 hover:text-accent hover:underline"
                  >
                    pengaduan@jagadata.id
                  </a>
                </li>
                <li className="text-secondary">
                  Kantor pusat berkedudukan di Jakarta. Data laporan diproses dengan enkripsi
                  ujung-ke-ujung dan minimasi retensi.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
