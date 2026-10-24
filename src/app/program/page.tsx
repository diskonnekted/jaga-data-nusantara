// Sumber: AD Pasal 12 (4 pilar aksi) + Rancangan Program Kerja Strategis 3 Tahun JDN.
const pilar = [
  {
    no: "01",
    title: "Data Incident & Breach Watchdog",
    unit: "Divisi Riset Forensik Digital & Lab Data",
    desc: "Pemantauan insiden kebocoran data nasional secara real-time, verifikasi forensik etis atas kegagalan sistem elektronik, dan penerbitan peringatan keamanan bagi publik.",
    items: [
      "Dasbor Data Breach Tracker Indonesia",
      "Rekayasa balik APK pinjol/finansial untuk mendeteksi pemanenan data non-konsensual",
      "Protokol responsible disclosure sebelum publikasi Security Advisory",
    ],
  },
  {
    no: "02",
    title: "Surveillance & Platform Transparency Monitor",
    unit: "Divisi Riset Forensik Digital × Divisi Kebijakan Publik & Advokasi Hukum",
    desc: "Pemantauan pengadaan dan penggunaan teknologi pengawasan massal oleh lembaga negara, perizinan akses gawai berlebihan, serta dorongan laporan transparansi berkala dari penyelenggara sistem elektronik.",
    items: [
      "Pelacakan spyware tingkat tinggi (Pegasus, Predator, QuaDream, FinFisher)",
      "Audit perizinan akses berlebihan aplikasi finansial/pinjol",
      "Advokasi transparency report operator telekomunikasi dan PSE",
    ],
  },
  {
    no: "03",
    title: "Riset Kebijakan & Litigasi Strategis",
    unit: "Divisi Kebijakan Publik & Advokasi Hukum",
    desc: "Transformasi bukti forensik menjadi intervensi hukum formal: kajian kebijakan, sengketa keterbukaan informasi, gugatan perwakilan kelompok, hingga uji materiil peraturan yang mengancam privasi warga.",
    items: [
      "Pemantauan kepatuhan notifikasi 3×24 jam (Pasal 46 UU PDP)",
      "Sengketa KIP atas dokumen pengadaan teknologi pengawasan negara",
      "Perlindungan Anti-SLAPP bagi peneliti, jurnalis, dan pembela HAM",
      "Desk advokasi penegakan pidana Pasal 65–67 UU PDP",
    ],
  },
  {
    no: "04",
    title: "Klinik Hak Privasi & Ketahanan Digital",
    unit: "Divisi Kampanye, Komunikasi & Edukasi Publik",
    desc: "Posko aduan dan layanan tanggap darurat bagi korban doxxing, intimidasi digital, dan teror penagihan pinjol, serta penguatan kapasitas keamanan digital masyarakat sipil.",
    items: [
      "Asistensi take-down request dan sanitasi higiene digital",
      "Pendampingan hukum pro-bono bagi kelompok rentan, jurnalis, dan aktivis",
      "Pelatihan keamanan siber OMS dan modul edukasi kedaulatan data",
    ],
  },
];

const timeline = [
  {
    tahun: "Tahun I",
    tema: "Fondasi & Infrastruktur Teknis",
  },
  {
    tahun: "Tahun II",
    tema: "Litigasi Strategis & Pemantauan Transparansi",
  },
  {
    tahun: "Tahun III",
    tema: "Konsolidasi Gerakan & Institusionalisasi Regional",
  },
];

export default function ProgramPage() {
  return (
    <div>
      {/* Lead */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Rubrik Program</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Empat Pilar Aksi
          </h1>
          <p className="mt-6 max-w-2xl text-[19px] leading-[1.3] text-secondary md:text-[20px]">
            Program JDN disusun sebagai pertahanan berlapis: dari verifikasi forensik
            teknis, pemantauan pengawasan negara, advokasi hukum, hingga pemulihan
            hak korban di tingkat masyarakat.
          </p>
        </div>
      </section>

      {/* Four pillars: ruled horizontal listings */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <ul className="border-t border-rule">
            {pilar.map((p) => (
              <li
                key={p.no}
                className="grid gap-4 border-b border-rule py-8 md:grid-cols-12 md:gap-x-8"
              >
                <p className="kicker text-accent md:col-span-1">{p.no}</p>
                <div className="md:col-span-4">
                  <h2 className="font-display text-2xl font-bold leading-snug">{p.title}</h2>
                  <p className="kicker mt-3 text-secondary">{p.unit}</p>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[17px] leading-[1.3] text-secondary">{p.desc}</p>
                  <ul className="mt-4">
                    {p.items.map((item, i) => (
                      <li
                        key={i}
                        className="border-t border-rule py-2 text-[17px] leading-[1.3] first:border-t-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roadmap */}
      <section>
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Linimasa</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Roadmap Tiga Tahun
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-[1.3] text-secondary">
            Eskalasi berurutan: infrastruktur internal pada Tahun I, intervensi hukum dan
            pengawasan platform pada Tahun II, konsolidasi gerakan sipil pada Tahun III.
            Detail luaran tersedia di{" "}
            <a href="/laporan" className="underline underline-offset-4 hover:text-accent">
              rubrik Luaran &amp; Publikasi
            </a>
            .
          </p>
          <ol className="mt-10 grid md:grid-cols-3">
            {timeline.map((t, i) => (
              <li
                key={t.tahun}
                className={`py-6 md:py-0 ${
                  i > 0 ? "border-t border-rule md:border-t-0" : ""
                } ${i > 0 ? "md:border-l md:border-rule" : ""} ${
                  i === 2 ? "md:pl-10" : i > 0 ? "md:pl-10 md:pr-10" : "md:pr-10"
                }`}
              >
                <p className="kicker text-accent">{t.tahun}</p>
                <h3 className="mt-3 font-display text-xl font-bold leading-tight">{t.tema}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
