// Sumber: Rancangan Program Kerja Strategis 3 Tahun JDN (disahkan Jakarta, 24 Oktober 2026).
// Semua luaran berstatus rencana — perkumpulan baru disahkan, belum ada publikasi terbit.
const fase = [
  {
    no: "I",
    title: "Fondasi & Infrastruktur",
    items: [
      "Isolasi Lab Forensik Data terenkripsi (air-gapped) dan SOP karantina bukti digital.",
      "Peluncuran dasbor publik Data Breach Tracker Indonesia.",
      "Pembukaan Desk Advokasi & Posko Tanggap Darurat korban doxxing, KBGO, dan pinjol ilegal.",
      "Laporan Situasi Awal Hak-Hak Digital dan Pelanggaran Privasi Data Indonesia.",
    ],
  },
  {
    no: "II",
    title: "Litigasi & Transparansi",
    items: [
      "Advokasi transparency report pertama operator seluler utama.",
      "Gugatan perwakilan kelompok (class action) pertama atas kelalaian pengendali data.",
      "Audit publik kepatuhan notifikasi kebocoran 3×24 jam (Pasal 46 UU PDP).",
      "Perlindungan Anti-SLAPP dan perluasan posko aduan ke 5 simpul daerah.",
    ],
  },
  {
    no: "III",
    title: "Konsolidasi Gerakan",
    items: [
      "Sertifikasi Tata Kelola Data bagi 50 organisasi masyarakat sipil.",
      "Kertas Evaluasi 3 Tahun Implementasi UU PDP untuk reviu kebijakan.",
      "Inisiasi Jaringan Advokasi Hak Digital Asia Tenggara.",
      "Audit keuangan terbuka oleh KAP independen dan Musyawarah Nasional.",
    ],
  },
];

const target = [
  "Verifikasi 100% laporan kebocoran data nasional yang masuk",
  "Rekayasa balik minimal 50 APK pinjol/finansial per tahun",
  "Minimal 12 Security Advisory dan 6 Policy Brief per tahun",
  "Minimal 300 aduan doxxing/pinjol/KBGO ditangani per tahun",
  "Minimal 500 personel OMS dan jurnalis dilatih keamanan siber",
];

const publikasi = [
  { type: "Dasbor", title: "Data Breach Tracker Indonesia", status: "Rencana Tahun I" },
  { type: "Laporan Tahunan", title: "Situasi Hak-Hak Digital dan Pelanggaran Privasi Data Indonesia", status: "Rencana Tahun I" },
  { type: "Security Advisory", title: "Verifikasi Forensik Insiden Kebocoran Data (berkelanjutan)", status: "Rencana Tahun I" },
  { type: "Audit", title: "Pemantauan Spyware Tingkat Tinggi (Pegasus, Predator, QuaDream)", status: "Rencana Tahunan" },
  { type: "Policy Brief", title: "Kepatuhan Notifikasi 3×24 Jam Pasal 46 UU PDP", status: "Rencana Tahun II" },
  { type: "Evaluasi", title: "Kertas Evaluasi 3 Tahun Implementasi UU PDP", status: "Rencana Tahun III" },
];

export default function LaporanPage() {
  return (
    <div>
      {/* Lead */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Rubrik Laporan</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Luaran &amp; Publikasi
          </h1>
          <p className="mt-6 max-w-2xl text-[19px] leading-[1.3] text-secondary md:text-[20px]">
            Luaran riset forensik, audit, dan litigasi JDN selama tiga tahun pertama,
            sesuai Rancangan Program Kerja Strategis. Perkumpulan disahkan pada 24 Oktober
            2026 — seluruh luaran berstatus rencana hingga terbit.
          </p>
        </div>
      </section>

      {/* Roadmap spread: phases left, targets right */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Peta Jalan</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Tiga Tahun Pertama
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-4 md:gap-0">
            <div className="md:col-span-3 md:border-r md:border-rule md:pr-10">
              <ul className="border-t border-rule">
                {fase.map((f) => (
                  <li key={f.no} className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-x-8">
                    <p className="kicker text-accent md:col-span-1">Th {f.no}</p>
                    <h3 className="font-display text-xl font-bold leading-snug md:col-span-3">
                      {f.title}
                    </h3>
                    <ul className="md:col-span-8">
                      {f.items.map((item, i) => (
                        <li
                          key={i}
                          className="border-t border-rule py-3 text-[17px] leading-[1.3] text-secondary first:border-t-0 first:pt-0"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="md:pl-10">
              <p className="kicker text-secondary">Indikator Keberhasilan</p>
              <ul className="mt-4 border-t border-rule">
                {target.map((t, i) => (
                  <li
                    key={i}
                    className="border-b border-rule py-3 text-[17px] leading-[1.3]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Publication plans: ruled rows */}
      <section>
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Publikasi Terencana</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Yang Akan Terbit
          </h2>
          <ul className="mt-8 border-t border-rule">
            {publikasi.map((pub) => (
              <li
                key={pub.title}
                className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-x-8"
              >
                <p className="kicker text-accent md:col-span-3">{pub.type}</p>
                <h3 className="font-display text-xl font-bold leading-snug md:col-span-7">
                  {pub.title}
                </h3>
                <p className="kicker text-secondary md:col-span-2">{pub.status}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.3] text-secondary">
            Ikhtisar laporan keuangan tahunan yang telah diaudit Kantor Akuntan Publik
            independen akan dipublikasikan terbuka di situs ini, sesuai Anggaran Dasar
            Bab VII.
          </p>
        </div>
      </section>
    </div>
  );
}
