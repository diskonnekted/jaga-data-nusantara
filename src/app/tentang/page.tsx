// Sumber: Anggaran Dasar Perkumpulan Jaga Data Nusantara (disahkan di Jakarta, 24 Oktober 2026).
// Kutipan Visi/Misi/Nilai diambil verbatim dari AD Pasal 6, 7, dan 9.
import Image from "next/image";
const misi = [
  "Melaksanakan pemantauan aktif, riset forensik digital, dan verifikasi independen terhadap insiden keamanan siber, kerentanan sistem elektronik, serta kebocoran data nasional.",
  "Mengawasi kepatuhan dan akuntabilitas sektor publik maupun privat terhadap regulasi pelindungan data pribadi, standar tata kelola sistem elektronik, serta penegakan UU PDP.",
  "Mendorong transparansi kebijakan pengawasan digital negara, pengadaan dan penggunaan teknologi intersepsi/pemantauan komunikasi, keterbukaan algoritma, serta akuntabilitas pelaporan berkala oleh penyelenggara sistem elektronik.",
  "Menguatkan literasi, melakukan advokasi pemulihan hak subjek data, dan menyelenggarakan pendampingan bagi warga negara dari segala bentuk eksploitasi dan penyalahgunaan data pribadi.",
  "Membela dan melindungi hak warga negara dari segala bentuk penyalahgunaan data pribadi yang melawan hukum, termasuk doxxing, intimidasi digital, pemerasan, serta eksploitasi data dalam penagihan oleh lembaga keuangan/pinjaman online.",
];

const organ = [
  {
    title: "Musyawarah Nasional",
    bio: "Organ pemegang kedaulatan tertinggi, diselenggarakan sekali dalam tiga tahun: mengesahkan dan mengubah AD/ART, memilih Dewan Pengawas dan Direktur Eksekutif, serta menetapkan arah strategis organisasi.",
  },
  {
    title: "Dewan Pengawas",
    bio: "Menjalankan pengawasan etika, arah kebijakan strategis, dan audit tata kelola keuangan; berwenang menunjuk Kantor Akuntan Publik independen untuk mengaudit keuangan organisasi.",
  },
  {
    title: "Badan Pengurus Eksekutif",
    bio: "Pelaksana operasional harian yang dipimpin Direktur Eksekutif untuk masa bakti tiga tahun, dibantu empat divisi kerja struktural serta Pejabat Pelindung Data (DPO) internal.",
  },
];

const divisi = [
  "Divisi Riset Forensik Digital & Lab Data",
  "Divisi Kebijakan Publik & Advokasi Hukum",
  "Divisi Kampanye, Komunikasi & Edukasi Publik",
  "Divisi Manajemen Operasional & Kepatuhan Organisasi",
];

export default function TentangPage() {
  return (
    <div>
      {/* Lead */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Rubrik Tentang</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Perkumpulan Jaga Data Nusantara
          </h1>
          <p className="mt-6 max-w-2xl text-[19px] leading-[1.3] text-secondary md:text-[20px]">
            Lembaga Swadaya Masyarakat nirlaba, non-partisan, dan independen yang berbasis pada
            keahlian teknologi informasi, forensik digital, serta hukum hak asasi manusia.
          </p>
          <p className="kicker mt-6 text-secondary">
            Berbadan hukum perkumpulan · Didirikan di Jakarta, 24 Oktober 2026
          </p>
        </div>
      </section>

      {/* Story spread with reserved grayscale image slot */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-4 md:gap-0">
            <div className="md:col-span-3 md:border-r md:border-rule md:pr-10">
              <p className="kicker text-accent">Latar Belakang</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
                Mengapa Kami Didirikan
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-[19px] leading-[1.3]">
                <p>
                  Indonesia menghadapi krisis kerentanan digital yang sistemik: kebocoran
                  berulang basis data strategis—dari data kependudukan hingga data pemilu—
                  penggunaan piranti pengawas (spyware) tanpa akuntabilitas peradilan, hingga
                  doxxing dan eksploitasi data finansial oleh pinjaman online ilegal.
                </p>
                <p>
                  Pengesahan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi
                  menuntut pengawasan independen terhadap kepatuhan penyelenggara sistem
                  elektronik, baik sektor publik maupun privat.
                </p>
                <p>
                  Jaga Data Nusantara hadir untuk mengisi ruang itu: gerakan masyarakat sipil
                  yang independen, berbasis bukti teknis, dan berintegritas hukum.
                </p>
              </div>
            </div>

            <aside className="md:pl-10">
              <div className="placeholder-rule p-6">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Image
                    src="/jdn-mark.png"
                    alt="Logo Jaga Data Nusantara (JDN)"
                    width={312}
                    height={334}
                    className="h-24 w-auto md:h-28"
                  />
                  <p className="font-display text-xl font-black leading-tight tracking-tight">
                    Jaga Data Nusantara
                  </p>
                  <p className="kicker text-secondary">Perkumpulan JDN · Jakarta</p>
                </div>
              </div>
              <p className="kicker mt-3 text-secondary">Kantor Pusat · Jakarta</p>
              <p className="mt-4 text-[15px] leading-[1.3] text-secondary">
                Pendiri: Arif Susilo bersama para pemrakarsa.
              </p>
              <p className="mt-2 text-[15px] leading-[1.3] text-secondary">
                Landasan: UU 17/2013 jo. UU 16/2017 · Permenkumham 13/2021 · UU 27/2022 (UU PDP).
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Manifesto PDF — dokumen pendukung di /public */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Dokumen Yayasan</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Manifesto Kedaulatan Digital Indonesia
          </h2>
          <iframe
            src="/Manifesto_Kedaulatan_Digital_Indonesia.pdf"
            title="Manifesto Kedaulatan Digital Indonesia (PDF)"
            loading="lazy"
            className="mt-8 w-full border border-rule"
            style={{ height: "75vh", minHeight: "480px" }}
          />
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-[15px] leading-[1.3] text-secondary">
              Pembaca PDF peramban tidak tampil di perangkat Anda? Unduh berkasnya untuk dibaca
              mandiri.
            </p>
            <a
              className="btn btn-ghost shrink-0"
              href="/Manifesto_Kedaulatan_Digital_Indonesia.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unduh Manifesto (PDF) ↗
            </a>
          </div>
        </div>
      </section>

      {/* Visi as italic quotation (Pasal 6), Misi as numbered ruled list (Pasal 7) */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-0">
            <div className="md:border-r md:border-rule md:pr-10">
              <p className="kicker text-accent">Visi</p>
              <blockquote className="mt-4">
                <p className="text-[24px] italic leading-[1.35] md:text-[28px]">
                  Terwujudnya tata kelola ekosistem digital Indonesia yang aman, berkeadilan,
                  transparan, serta menjunjung tinggi hak privasi konstitusional, kesetaraan
                  gender, dan kedaulatan data setiap warga negara.
                </p>
                <footer className="kicker mt-4 text-secondary">
                  Pasal 6 · Anggaran Dasar JDN
                </footer>
              </blockquote>
            </div>

            <div className="md:pl-10">
              <p className="kicker text-accent">Misi</p>
              <ul className="mt-4 border-t border-rule">
                {misi.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 border-b border-rule py-4 text-[17px] leading-[1.3]"
                  >
                    <span aria-hidden="true" className="kicker mt-1 text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organs: horizontal listings, no detached cards */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Kelembagaan</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Organ &amp; Divisi
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-[1.3] text-secondary">
            Laporan keuangan tahunan diaudit Kantor Akuntan Publik independen dan ikhtisarnya
            dipublikasikan secara terbuka di situs web resmi Perkumpulan.
          </p>
          <ul className="mt-10 border-t border-rule">
            {organ.map((o, i) => (
              <li
                key={o.title}
                className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-x-8"
              >
                <p className="kicker text-accent md:col-span-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl font-bold leading-snug md:col-span-4">
                  {o.title}
                </h3>
                <p className="text-[17px] leading-[1.3] text-secondary md:col-span-6">{o.bio}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div>
              <p className="kicker text-secondary">Empat Divisi Kerja Struktural</p>
              <ul className="mt-3 border-t border-rule">
                {divisi.map((d) => (
                  <li
                    key={d}
                    className="border-b border-rule py-3 font-display text-lg font-bold leading-snug"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:border-l md:border-rule md:pl-10">
              <p className="kicker text-secondary">Pelindung Data (DPO)</p>
              <p className="mt-3 text-[17px] leading-[1.3]">
                Badan Pengurus Eksekutif mengangkat seorang Pejabat Pelindung Data (Data
                Protection Officer) internal yang independen untuk mengawasi pemrosesan data
                laporan warga dan bukti riset, memberi advis kepatuhan privasi, serta memastikan
                penerapan protokol keamanan data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai dasar: 4 columns, ruled rows after a section rule (Pasal 9) */}
      <section>
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Prinsip</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Nilai-Nilai Dasar
          </h2>
          <ul className="mt-10 grid border-t border-rule md:grid-cols-4 md:border-t-4 md:border-ink">
            {[
              {
                t: "Independensi & Integritas Ilmiah",
                d: "Seluruh analisis dan temuan forensik berdasarkan metodologi teruji yang objektif, dapat dipertanggungjawabkan, dan bebas dari intervensi politik maupun komersial.",
              },
              {
                t: "Transparansi & Akuntabilitas Publik",
                d: "Terbuka dalam tata kelola program, pengelolaan keuangan, dan sumber pendanaan, serta menjalani audit institusional secara berkala.",
              },
              {
                t: "Keberpihakan pada Hak Subjek Data",
                d: "Mengutamakan keselamatan, kesetaraan, martabat, pemulihan psikologis, dan keadilan bagi warga yang menjadi korban kegagalan pelindungan data.",
              },
              {
                t: "Keterbukaan & Budaya Open Source",
                d: "Mendorong piranti lunak transparan yang dapat diaudit publik demi kepentingan umum dan penguatan keamanan digital nasional.",
              },
            ].map((item, i) => (
              <li
                key={item.t}
                className={`py-6 md:py-10 ${i > 0 ? "border-t border-rule md:border-t-0" : ""} ${
                  i > 0 ? "md:border-l md:border-rule" : ""
                } ${
                  i === 3 ? "md:pl-10" : i > 0 ? "md:pl-10 md:pr-10" : "md:pr-10"
                }`}
              >
                <p className="kicker text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-xl font-bold leading-tight">{item.t}</h3>
                <p className="mt-3 text-[17px] leading-[1.3] text-secondary">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
