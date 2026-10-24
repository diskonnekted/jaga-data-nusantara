import Link from "next/link";

// ponytail: daftar publikasi masih rencana (Progra Strategis Tahun I) — label SAMPEL mencegah
// dianggap publikasi nyata; ganti ke endpoint indeks publik saat tersedia.
const samples = [
  {
    id: 1,
    title: "Laporan Situasi Awal Pelindungan Data Indonesia",
    category: "Kajian",
  },
  {
    id: 2,
    title: "Pemantau Insiden Kebocoran Data Nasional (Breach Tracker)",
    category: "Riset",
  },
  {
    id: 3,
    title: "Kertas Posisi Kebijakan Penegakan UU PDP",
    category: "Policy Brief",
  },
];

const faq = [
  {
    q: "Bagaimana cara mengirim laporan?",
    a: "Buka kanal pengaduan di halaman Partisipasi, isi formulir anonim, lalu simpan kode tiket yang diberikan untuk melacak laporan Anda.",
  },
  {
    q: "Apakah identitas saya disimpan?",
    a: "Formulir pengaduan tidak meminta identitas. Berkas laporan disimpan terenkripsi di server kami.",
  },
  {
    q: "Bagaimana laporan dievaluasi?",
    a: "Laporan diverifikasi oleh tim riset forensik digital kami sebelum ditindaklanjuti. Temuan yang terverifikasi diterbitkan sebagai peringatan keamanan (security advisory), kajian, atau diteruskan ke tim hukum untuk advokasi dan litigasi strategis.",
  },
];

const rubrikLinks = [
  { href: "/laporan", label: "Rubrik Laporan" },
  { href: "/berita", label: "Rubrik Berita" },
  { href: "/program", label: "Rubrik Program" },
  { href: "/tentang", label: "Rubrik Tentang" },
  { href: "/partisipasi", label: "Rubrik Partisipasi" },
];

const pillars = [
  {
    no: "001",
    title: "Pengawasan Kebocoran Data",
    body: "Basis data pemantau insiden kebocoran data nasional, verifikasi forensik etis, dan penerbitan peringatan keamanan bagi publik.",
  },
  {
    no: "002",
    title: "Transparansi Pengawasan Digital",
    body: "Audit penggunaan teknologi pengawasan massal dan spyware, izin akses aplikasi yang berlebihan, serta dorongan laporan transparansi berkala PSE.",
  },
  {
    no: "003",
    title: "Riset Kebijakan & Litigasi Strategis",
    body: "Kajian hukum dan policy brief, sengketa Keterbukaan Informasi Publik, gugatan class action, uji materiil, serta pelaporan Pasal 65–67 UU PDP.",
  },
  {
    no: "004",
    title: "Klinik Hak Privasi",
    body: "Posko tanggap doxxing, intimidasi digital, dan penagihan pinjol; pendampingan hukum pro-bono serta edukasi ketahanan digital bagi warga.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Lead spread: broad headline + narrow action/summary column (3:1) */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-4 md:gap-0">
            <div className="md:col-span-3 md:border-r md:border-rule md:pr-10">
              <p className="kicker text-accent">Rubrik Utama</p>
              <h1 className="mt-4 font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
                <span className="float-left mr-3 mt-1 font-display text-6xl leading-[0.75] md:text-8xl">
                  P
                </span>
                engawas Kebocoran, Pembela Privasi
              </h1>
              <p className="clear-both mt-6 max-w-2xl text-[19px] leading-[1.3] text-secondary md:text-[20px]">
                Perkumpulan Jaga Data Nusantara (JDN) adalah organisasi masyarakat sipil
                nirlaba, non-partisan, dan independen yang berbasis keahlian teknologi
                informasi, forensik digital, dan hukum HAM. Kami mengawasi kebocoran data dan
                pengawasan digital, menegakkan UU PDP, serta mendampingi warga.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/laporan" className="btn btn-solid" aria-label="Lihat laporan publik">
                  Lihat Laporan
                </Link>
                <Link href="/partisipasi" className="btn btn-ghost" aria-label="Laporkan masalah">
                  Laporkan Sekarang
                </Link>
              </div>
            </div>

            <aside className="md:pl-10">
              <div className="border-b border-rule pb-6">
                <p className="kicker text-secondary">Edisi Terkini</p>
                <p className="mt-2 font-display text-6xl font-black leading-none">2026</p>
                <p className="kicker mt-2 text-secondary">Vol. I · No. 12 · Oktober</p>
                <p className="mt-4 text-[17px] leading-[1.3] text-secondary">
                  Laporan verifikasi independen, analisis kebijakan publik, dan investigasi
                  mendalam tentang pelindungan data dan pengawasan digital.
                </p>
              </div>
              <div className="pt-6">
                <p className="kicker text-secondary">Rubrik</p>
                <ul className="mt-3 space-y-2">
                  {rubrikLinks.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="text-[17px] leading-[1.2] underline-offset-4 hover:text-accent hover:underline"
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Pillars: horizontal listings with section numbers and vertical dividers */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Empat Pilar Aksi</p>
          <div className="mt-8 grid md:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={p.no}
                className={`py-6 md:py-0 ${
                  i > 0 ? "border-t border-rule md:border-t-0" : ""
                } ${i > 0 ? "md:border-l md:border-rule" : ""} ${
                  i === 3 ? "md:pl-10" : i > 0 ? "md:pl-10 md:pr-10" : "md:pr-10"
                }`}
              >
                <p className="kicker text-accent">{p.no}</p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-[17px] leading-[1.3] text-secondary">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story spread: editorial story + narrow column of short entries */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-4 md:gap-0">
            <div className="md:col-span-3 md:border-r md:border-rule md:pr-10">
              <p className="kicker text-accent">Dampak Nyata</p>
              <h2 className="mt-3 font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                Data yang Menggerakkan Perubahan
              </h2>
              <p className="mt-6 max-w-2xl text-[19px] leading-[1.3]">
                Kami menerima laporan dari berbagai daerah di Indonesia. Tim kami bekerja lintas
                disiplin—forensik digital, hukum HAM, dan kebijakan publik—dan setiap laporan
                diverifikasi secara independen sebelum ditindaklanjuti: diterbitkan sebagai
                peringatan keamanan atau kajian, atau diteruskan ke jalur hukum.
              </p>
              <p className="mt-4 max-w-2xl text-[17px] leading-[1.3] text-secondary">
                Setiap temuan berpijak pada metodologi yang objektif dan dapat
                dipertanggungjawabkan. Kami membangun jejaring dengan organisasi masyarakat
                sipil dan komunitas keamanan agar hasil verifikasi ditindaklanjuti oleh pihak
                yang berwenang.
              </p>
            </div>

            <aside className="md:pl-10">
              <p className="kicker text-secondary">Rencana Publikasi</p>
              <ul className="mt-4">
                {samples.map((report, i) => (
                  <li
                    key={report.id}
                    className={`border-b border-rule py-4 ${i === 0 ? "pt-0" : ""}`}
                  >
                    <p className="kicker text-accent">{report.category} · Sampel</p>
                    <h3 className="mt-1 font-display text-lg font-bold leading-snug">
                      <Link
                        href="/laporan"
                        className="underline-offset-4 hover:text-accent hover:underline"
                      >
                        {report.title}
                      </Link>
                    </h3>
                  </li>
                ))}
              </ul>
              <Link
                href="/laporan"
                className="kicker mt-5 inline-block text-accent underline underline-offset-4"
                aria-label="Lihat semua laporan"
              >
                Lihat Semua →
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Final spread: questions beside closing invitation */}
      <section>
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-4 md:gap-0">
            <div className="md:col-span-3 md:border-r md:border-rule md:pr-10">
              <p className="kicker text-accent">Pertanyaan</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-4xl">
                Sering Ditanyakan
              </h2>
              <div className="mt-6 border-t border-rule">
                {faq.map((item) => (
                  <details key={item.q} className="group border-b border-rule">
                    <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span aria-hidden="true" className="kicker text-accent">
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>
                    </summary>
                    <p className="max-w-2xl pb-5 text-[17px] leading-[1.3] text-secondary">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <aside className="md:pl-10">
              <p className="kicker text-accent">Ikut Serta</p>
              <h2 className="mt-2 font-display text-3xl font-black leading-tight tracking-tight">
                Posko Aduhan &amp; Ketahanan Digital
              </h2>
              <p className="mt-3 text-[17px] leading-[1.3] text-secondary">
                Laporkan kebocoran data, doxxing, atau teror penagihan pinjol melalui kanal
                terenkripsi—atau bergabung sebagai anggota pendukung.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/partisipasi" className="btn btn-solid">
                  Kirim Laporan
                </Link>
                <Link href="/program" className="btn btn-ghost">
                  Lihat Program
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
