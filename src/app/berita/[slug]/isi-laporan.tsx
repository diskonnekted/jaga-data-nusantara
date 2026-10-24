// Isi utuh Laporan Situasi Keamanan Siber Daerah Jawa Tengah (sumber: public/laporan-jateng.txt).
// Teks mengikuti berkas laporan — tanpa tambahan klaim, angka, atau kutipan di luar dokumen.
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-6 text-[17px] leading-[1.4]">{children}</p>
);

const Bagian = ({ n, judul }: { n: string; judul: string }) => (
  <div className="border-b-4 border-ink pb-5">
    <p className="kicker text-accent">Bagian {n}</p>
    <h2 className="mt-2 font-display text-2xl font-black leading-tight tracking-tight md:text-3xl">
      {judul}
    </h2>
  </div>
);

const Sub = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-10 font-display text-xl font-bold leading-snug tracking-tight md:text-2xl">
    {children}
  </h3>
);

const Tabel = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="mt-6 overflow-x-auto">
    <table className="w-full min-w-[560px] border-collapse text-left text-[15px] leading-[1.35]">
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h} className="kicker border-b-2 border-ink py-2 pr-6 align-bottom">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r[0]}>
            {r.map((c, i) => (
              <td
                key={i}
                className={`border-b border-rule py-3 pr-6 align-top${i === 0 ? " font-semibold" : " text-secondary"}`}
              >
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Pre = ({ children }: { children: React.ReactNode }) => (
  <pre className="mt-6 overflow-x-auto border border-rule p-4 font-mono text-[12px] leading-[1.5] text-secondary">
    {children}
  </pre>
);

export function IsiLaporan() {
  return (
    <div className="mt-12 max-w-2xl space-y-14">
      <Bagian n="1" judul="Ringkasan Eksekutif &amp; Profil Institusional Penerbit" />
      <div>
        <P>
          Publikasi laporan situasi keamanan siber ini diterbitkan oleh Perkumpulan Jaga Data
          Nusantara (JDN) sebagai wujud pelaksanaan riset awal independen dalam memetakan serta
          menyoroti urgensi perlindungan aset digital publik di wilayah Jawa Tengah. Di tengah
          eskalasi ancaman siber terhadap platform pemerintahan lokal, perlindungan terhadap domain
          publik bukan sekadar masalah teknis operasional, melainkan imperatif strategis untuk
          menjaga kedaulatan informasi publik dan integritas layanan digital masyarakat.
        </P>
        <Sub>Mandat Kelembagaan JDN</Sub>
        <P>
          Perkumpulan Jaga Data Nusantara (JDN) didirikan oleh Arif Susilo bersama para pemrakarsa
          sebagai lembaga swadaya masyarakat nirlaba, non-partisan, dan independen yang bergerak di
          bidang keahlian teknologi informasi dan advokasi hak asasi manusia. Berdasarkan Anggaran
          Dasar (AD) Pasal 4, JDN memiliki misi untuk melakukan pemantauan aktif, riset forensik
          digital, serta verifikasi independen terhadap insiden kebocoran data dan ancaman siber di
          Indonesia.
        </P>
        <P>
          Dalam struktur operasional harian sebagaimana diatur dalam Anggaran Rumah Tangga (ART)
          Pasal 2, Divisi Riset Forensik Digital &amp; Lab Data memegang mandat spesifik untuk
          mengelola dasbor pemantau insiden (Data Incident &amp; Breach Watchdog), melaksanakan
          audit keamanan siber etis, serta menganalisis ancaman teknis dan rekayasa data. Seluruh
          operasional forensik dan riset JDN diwajibkan menerapkan prinsip Privacy by Design serta
          mematuhi Kode Etik Peneliti dan Pengawas Data (Pasal 1 &amp; Pasal 3 ART), yang melarang
          keras monetisasi, penyalahgunaan, maupun pemerasan berkedok audit keamanan.
        </P>
        <Tabel
          head={["Prinsip Operasional Forensik JDN", "Implementasi Pengawasan Publik"]}
          rows={[
            [
              "Enkripsi Menyeluruh (End-to-End Encryption)",
              "Menerapkan enkripsi ujung-ke-ujung pada seluruh gawai dan kanal komunikasi kerja internal guna mengantisipasi intersepsi ilegal.",
            ],
            [
              "Penyimpanan Terisolasi (Air-Gapped Repository)",
              "Mengamankan berkas temuan sensitif dalam repositori berenkripsi tinggi atau penyimpanan lokal terisolasi (air-gapped) dengan hak akses terbatas.",
            ],
            [
              "Minimasi Retensi & Pemusnahan Berkala",
              "Membatasi durasi penyimpanan sampel data sensitif dan melakukan pemusnahan secara aman setelah analisis forensik selesai.",
            ],
            [
              "Pengawasan Kepatuhan Internal (DPO)",
              "Menunjuk Data Protection Officer (DPO) untuk menjamin proses audit selaras dengan prinsip pemrosesan data dalam UU No. 27/2022 tentang Pelindungan Data Pribadi (UU PDP).",
            ],
            [
              "Pengungkapan Bertanggung Jawab (Responsible Disclosure)",
              "Menyampaikan temuan kerentanan kepada pengelola sistem melalui kanal resmi sebelum menerbitkan peringatan keamanan (security advisory) anonim untuk publik.",
            ],
          ]}
        />
      </div>
      <div>
        <Sub>Sintesis Eksekutif</Sub>
        <P>
          Hasil evaluasi komprehensif JDN menunjukkan bahwa situs web instansi pemerintah daerah di
          Jawa Tengah berada dalam kondisi rentan dan menjadi sasaran empuk eksploitasi industri
          perjudian daring melalui teknik SEO poisoning dan backlink hijacking. Evaluasi utama
          laporan ini mencakup:
        </P>
        <ul className="mt-4 list-disc pl-5 text-[17px] leading-[1.4]">
          <li className="mt-2">
            <strong>Eksploitasi Masif Domain Publik (.go.id &amp; .desa.id):</strong> Peretas
            memanfaatkan tingginya otoritas domain (Domain Authority) pemerintah untuk menanamkan
            konten dan tautan promosi judi online guna meningkatkan peringkat pencarian mesin
            pencari.
          </li>
          <li className="mt-2">
            <strong>Celah Konfigurasi dan Kelemahan Teknis Dasar:</strong> Ditemukan dominasi
            kerentanan akibat ketiadaan Security Headers modern, pengungkapan informasi sistem
            (information disclosure), kerentanan Cross-Site Scripting (XSS), serta berkas cadangan
            sensitif yang terbengkalai.
          </li>
          <li className="mt-2">
            <strong>Pergeseran Target ke Tingkat Tapak (Desa):</strong> Terjadi pergeseran tren
            serangan ke domain .desa.id yang disebabkan oleh minimnya pemeliharaan perangkat lunak,
            penggunaan CMS tanpa pembaruan (unpatched CMS), dan keterbatasan SDM pengelola lokal.
          </li>
          <li className="mt-2">
            <strong>Keterbatasan Operasional CSIRT Daerah:</strong> Kesiapan Tim Tanggap Insiden
            Siber (Computer Security Incident Response Team / CSIRT) di daerah masih terhambat oleh
            pola kerja yang reaktif, keterbatasan analis tersertifikasi, dan belum digalakkannya
            threat hunting secara aktif.
          </li>
        </ul>
        <P>
          Pemahaman mengenai mandat kelembagaan JDN dan prinsip audit etis yang melandasinya
          menjadi fondasi penting dalam menelaah analisis teknis mengenai anatomi dan modus
          operandi serangan siber yang dipaparkan pada bagian selanjutnya.
        </P>
      </div>

      <Bagian n="2" judul="Anatomi dan Modus Operandi Serangan Siber di Jawa Tengah" />
      <div>
        <P>
          Infrastruktur dan domain web milik pemerintah daerah menjadi target utama eksploitasi
          industri perjudian daring karena memiliki reputasi domain yang sangat dipercaya oleh mesin
          pencari. Penetrasi ilegal ini tidak hanya merusak citra kelembagaan, tetapi juga secara
          langsung mengikis kepercayaan publik terhadap Sistem Pemerintahan Berbasis Elektronik
          (SPBE). Sebagaimana ditegaskan oleh Direktur Aplikasi Pemerintah Digital (APD)
          Komdigi/Kominfo, Yessi Arnaz, keamanan ruang digital pemerintah merupakan fondasi utama
          keberlangsungan layanan SPBE, cermin profesionalisme aparatur, dan kunci dalam menjaga
          kepercayaan masyarakat.
        </P>
        <Sub>Eksploitasi Domain Authority (.go.id) melalui SEO Poisoning &amp; Backlink Hijacking</Sub>
        <P>
          Mekanisme peretasan yang terjadi pada domain .go.id umumnya tidak bertujuan untuk melakukan
          pemadaman total (total defacement), melainkan secara terselubung menanamkan artikel,
          halaman tersembunyi, atau URL khusus yang mempromosikan judi online. Pelaku mengeksploitasi
          tingginya nilai Domain Authority (DA) dan trafik milik situs pemerintah agar kata kunci
          perjudian (seperti judi slot, kasino daring, dan QRIS slot) menduduki peringkat atas
          (search engine ranking) pada mesin pencari Google.
        </P>
        <P>Secara analitis, siklus serangan siber ini dapat dipetakan ke dalam tahapan Attack Lifecycle:</P>
        <ol className="mt-4 list-decimal pl-5 text-[17px] leading-[1.4]">
          <li className="mt-2">
            <strong>Akses Awal (Initial Access):</strong> Pelaku mengidentifikasi celah Unauthenticated
            Arbitrary File Upload atau memanfaatkan kerentanan pada CMS/plugin lama yang tidak
            diperbarui.
          </li>
          <li className="mt-2">
            <strong>Penanaman Akses (Persistence Mechanisms):</strong> Mengunggah berkas penjelajah
            web (web shell) atau membuat folder direktori terselubung untuk mempertahankan akses
            jarak jauh.
          </li>
          <li className="mt-2">
            <strong>Penghindaran Deteksi (Defense Evasion):</strong> Menyembunyikan direktori judi
            dari navigasi visual situs web (hidden URLs) serta menerapkan penyamaran skrip (code
            obfuscation) agar tidak terdeteksi oleh administrator internal.
          </li>
          <li className="mt-2">
            <strong>Dampak Layanan (Impact &amp; SEO Manipulation):</strong> Mesin pencari
            mengindeks ribuan URL promosi judi yang secara otomatis mengarahkan trafik masyarakat ke
            situs perjudian eksternal.
          </li>
        </ol>
        <Pre>{`[Peretas / Threat Actor]
       │
       ▼ (Initial Access via Unpatched CMS / Arbitrary File Upload)
[Infrastruktur Peladen Web Pemda (.go.id)]
       │
       ├─► Persistence: Web Shell & Injeksi Direktori Tersembunyi
       ├─► Defense Evasion: Obfuscation & Hidden URLs (Tidak Terlihat di UI Utama)
       │
       ▼ (Indexing & High Domain Authority Exploitation)
[Hasil Pencarian Mesin Pencari / Google] ──► Redirect / Link Aktif ke Situs Judi Slot QRIS`}</Pre>
        <P>
          Pakar keamanan siber dari CISSReC, Pratama Persadha, menjelaskan bahwa peretas dengan mudah
          menembus situs pemerintah dan membuat URL khusus pada domain yang diretas sedemikian rupa
          sehingga sulit dilacak dan tidak disadari oleh pemilik sistem internal. Motif serangan ini
          bersifat dinamis; selain memanfaatkan tingginya trafik pelayanan publik, pelaku
          mengeksploitasi kelemahan sistem web yang tidak dipelihara untuk menaikkan peringkat iklan
          judi online yang diakses publik setiap hari.
        </P>
        <Sub>Dokumentasi Kasus Empiris Insiden Siber di Jawa Tengah</Sub>
        <P>
          Berdasarkan rekam jejak pemantauan data empiris, pengujian Indicators of Compromise (IoCs),
          dan aduan masyarakat, beberapa insiden keamanan siber yang terjadi pada situs web
          pemerintah daerah di Jawa Tengah tercatat dalam matriks berikut:
        </P>
        <Tabel
          head={["Instansi / Situs", "Bentuk Eksploitasi / Indikasi", "Dampak Layanan Publik"]}
          rows={[
            [
              "DLHK Provinsi Jawa Tengah (dlhk.jatengprov.go.id/app)",
              "Insiden web defacement dan penanaman halaman visual promosi judi online.",
              "Menurunkan kredibilitas portal informasi lingkungan dan mengganggu akses aplikasi internal OPD.",
            ],
            [
              "Dindikbud Kab. Purbalingga (dindikbud.purbalinggakab.go.id)",
              "Penyusupan direktori kasino daring (online casino directory hijacking).",
              "Mengubah fungsi indeks direktori edukasi menjadi sarana promosi perjudian eksternal.",
            ],
            [
              "PINDAH Jateng (pindah.jatengprov.go.id)",
              "Penanaman artikel bermuatan kata kunci judi slot dan tautan aktif (active backlinks injection).",
              "Mengarahkan pengunjung portal ke situs perjudian luar dan mencemari indeks pencarian resmi Pemprov Jateng.",
            ],
            [
              "BKSDA Jawa Tengah (ksdajateng.id)",
              "Injeksi promosi Slot QRIS (berdasarkan aduan portal LaporGub! No. LGWP75925923).",
              "Tautan tombol \"Situs\" pada profil Google Maps resmi BKSDA Jateng membajak navigasi warga dan mengarahkannya ke halaman judi slot QRIS.",
            ],
          ]}
        />
        <Sub>Pergeseran Pola Serangan ke Domain Desa (.desa.id)</Sub>
        <P>
          Berdasarkan kerangka pemantauan Kementerian Komdigi dan BSSN, teridentifikasi adanya
          pergeseran pola serangan yang kian marak mengincar domain tingkat desa (.desa.id).
          Rentannya domain desa disebabkan oleh beberapa faktor mendasar di tingkat tapak:
        </P>
        <ul className="mt-4 list-disc pl-5 text-[17px] leading-[1.4]">
          <li className="mt-2">
            <strong>Penggunaan CMS Unpatched:</strong> Banyak situs web desa dibangun menggunakan
            Content Management System (CMS) sumber terbuka atau plugin kustom yang tidak pernah
            diperbarui (unpatched), sehingga menyimpan celah keamanan lama yang mudah dieksploitasi
            peretas.
          </li>
          <li className="mt-2">
            <strong>Minimnya Pemeliharaan Perangkat Lunak:</strong> Tidak adanya alokasi anggaran dan
            jadwal pemeliharaan berkala membuat situs desa terbengkalai setelah selesai dibangun.
          </li>
          <li className="mt-2">
            <strong>Keterbatasan SDM Pengelola:</strong> Kurangnya kapasitas dan literasi teknis
            personel pengelola di tingkat desa menyebabkan insiden penyusupan tidak terdeteksi dalam
            jangka waktu yang lama.
          </li>
        </ul>
        <P>
          Bukti-bukti insiden empiris ini menegaskan perlunya evaluasi teknis yang terukur berbasis
          metodologi akademis dan standar internasional sebagaimana diuraikan pada bagian
          berikutnya.
        </P>
      </div>

      <Bagian n="3" judul="Kajian Akademis &amp; Evaluasi Kerentanan Teknis (Vulnerability Assessment)" />
      <div>
        <P>
          Untuk mengidentifikasi akar penyebab kerentanan sistemik pada situs pemerintah daerah
          secara terukur, diperlukan pendekatan metodologis ilmiah yang diakui secara internasional.
          Pengujian keamanan berbasis kerangka kerja standar memberikan panduan sistematis dalam
          membedah kelemahan konfigurasi dan kode pada peladen web publik.
        </P>
        <Sub>Metodologi Evaluasi Standar NIST SP 800-115 dan OWASP</Sub>
        <P>
          Kajian akademis yang dilakukan oleh peneliti dari Universitas Kristen Satya Wacana (UKSW)
          dan jurnal JSINBIS Universitas Diponegoro (Undip) memberikan gambaran komprehensif mengenai
          tingkat kerentanan situs pemerintah daerah di Jawa Tengah, seperti pada studi kasus situs
          resmi Pemkab Semarang (semarangkab.go.id) dan Web Desa Gunung Tumpeng (gunungtumpeng.id).
        </P>
        <P>
          Evaluasi teknis tersebut menerapkan tahapan pengujian standar NIST SP 800-115 (Technical
          Guide to Information Security Testing and Assessment) yang dikombinasikan dengan
          metodologi pengujian celah keamanan OWASP Top 10. Tahapan audit meliputi Target
          Identification, Vulnerability Scanning, Exploitation Analysis, hingga Reporting.
        </P>
        <Sub>Analisis Celah Keamanan Dominan (Dominant Vulnerabilities)</Sub>
        <P>
          Dari hasil analisis forensik dan studi akademis pada peladen web pemda, ditemukan beberapa
          celah keamanan utama yang dominan dimanfaatkan oleh peretas:
        </P>
        <ul className="mt-4 list-disc pl-5 text-[17px] leading-[1.4]">
          <li className="mt-2">
            <strong>Ketiadaan Security Headers Modern dan keterkaitannya dengan SEO Poisoning:</strong>{" "}
            Mayoritas peladen web tidak mengonfigurasi HTTP Security Headers kunci seperti HTTP
            Strict Transport Security (HSTS), Content-Security-Policy (CSP), X-Frame-Options, dan
            X-Content-Type-Options. Ketiadaan header CSP secara langsung membuka celah bagi serangan
            DOM-based Cross-Site Scripting (XSS) dan script injection. Penyerang memanfaatkan tidak
            adanya batasan eksekusi skrip ini untuk menyuntikkan skrip jahat (malicious scripts) dan
            iframe tersembunyi yang mendistribusikan backlink perjudian daring secara otomatis.
          </li>
          <li className="mt-2">
            <strong>Pengungkapan Informasi &amp; Miskonfigurasi Peladen (Security Misconfiguration):</strong>{" "}
            Peladen web secara terbuka menampilkan versi perangkat lunak, OS, dan struktur direktori
            (directory listing). Pengungkapan spanduk peladen (server banner exposure) ini memudahkan
            penyerang memetakan kerentanan spesifik pada versi sistem yang digunakan.
          </li>
          <li className="mt-2">
            <strong>Kerentanan Cross-Site Scripting (XSS) &amp; Invalidation Input:</strong> Minimnya
            sanitasi dan validasi masukan pada formulir pencarian atau kolom input aplikasi web
            memungkinkan eksekusi skrip berbahaya dari jarak jauh untuk membelokkan lalu lintas
            pengguna.
          </li>
          <li className="mt-2">
            <strong>Keberadaan Berkas Cadangan Publik (Exposed Backup Files):</strong> Ditemukan
            berkas cadangan situs web dan basis data dengan ekstensi sensitif (.bak, .sql, .zip)
            yang tersimpan di direktori publik peladen dan dapat diunduh bebas. Berkas ini memuat
            informasi konfigurasi, kredensial basis data, serta struktur kode internal.
          </li>
        </ul>
        <P>
          Sebagai panduan praktis bagi administrator sistem Diskominfo, berikut adalah konfigurasi
          rekomendasi penataan dasar baseline CSP header pada peladen web (seperti Nginx):
        </P>
        <Pre>{`# Contoh Rekomendasi Baseline Content-Security-Policy (CSP) Header
add_header Content-Security-Policy "default-src 'self'; script-src 'self' https://trustedscripts.example.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-ancestors 'none'; object-src 'none'; base-uri 'self';" always;
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;`}</Pre>
        <P>
          Temuan kerentanan teknis pada level aplikasi dan peladen ini berbanding lurus dengan
          kesiapan kapasitas kelembagaan dalam merespons dan memitigasi insiden siber secara cepat.
        </P>
      </div>

      <Bagian n="4" judul="Evaluasi Kelembagaan &amp; Kesiapan Tanggap Insiden (CSIRT Daerah)" />
      <div>
        <P>
          Keberadaan Tim Tanggap Insiden Siber (Computer Security Incident Response Team / CSIRT)
          atau Tim Tanggap Insiden Siber (TTIS) merupakan garda terdepan dalam mempertahankan
          kedaulatan digital daerah. CSIRT bertanggung jawab memberikan respons cepat, penanggulangan,
          serta pemulihan saat terjadi gangguan atau serangan siber pada infrastruktur pemerintah.
        </P>
        <Sub>Pemetaan Peluncuran CSIRT di Wilayah Jawa Tengah</Sub>
        <P>
          Pemerintah Provinsi Jawa Tengah bersama BSSN secara bertahap terus mendorong pembentukan
          CSIRT di seluruh Kabupaten/Kota. Salah satu langkah teranyar adalah peluncuran Kendalkab-CSIRT
          pada 19 Desember 2024 di Pendapa Tumenggung Bahurekso oleh Pemkab Kendal berkolaborasi
          dengan BSSN RI dan Diskominfo Provinsi Jawa Tengah.
        </P>
        <Pre>{`             [Badan Siber dan Sandi Negara (BSSN)]
                                │
                                ▼ (Koordinasi & Pembinaan Teknis Nasional)
             [Diskominfo Provinsi Jawa Tengah / Prov-CSIRT]
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
[Kendalkab-CSIRT]        [Batangkab-CSIRT]      [SemarangKota-CSIRT]
(Diresmikan 19/12/2024)   (csirt.batangkab.go.id)  (Salatiga, Kebumen, dll)`}</Pre>
        <P>
          Direktur Keamanan Siber dan Sandi Pemerintah Daerah BSSN, Danang Jaya, menegaskan bahwa
          CSIRT berfungsi sebagai penyedia pertolongan pertama (first responder) atas insiden siber.
          Ketika situs web OPD mengalami tampilan aneh atau tidak dapat diakses akibat diretas, CSIRT
          bertugas memberikan bantuan teknis langsung. Pelaksana Tugas (Plt) Kepala Diskominfo Jateng,
          Dadang Somatri, dan Bupati Kendal, Dico M. Ganinduto, menekankan bahwa pembentukan CSIRT
          bertujuan menyatuan penanganan insiden satu pintu demi memberikan jaminan keamanan dan
          kenyamanan masyarakat dalam mengakses layanan publik. Pembentukan CSIRT serupa juga telah
          dilakukan di berbagai daerah seperti Batangkab-CSIRT (csirt.batangkab.go.id),
          SemarangKota-CSIRT, Salatiga-CSIRT, Kebumen, Magelang, dan daerah lainnya.
        </P>
        <Sub>Analisis Kendala Struktural dan Kesenjangan Operasional</Sub>
        <P>
          Meskipun peluncuran CSIRT daerah terus diakselerasi, analisis kritis JDN menemukan adanya
          kesenjangan operasional mendasar yang dihadapi tim di lapangan:
        </P>
        <ul className="mt-4 list-disc pl-5 text-[17px] leading-[1.4]">
          <li className="mt-2">
            <strong>Keterbatasan SDM Analis Siber Tersertifikasi:</strong> Sebagian besar Diskominfo
            daerah mengalami krisis personel teknis yang memiliki kualifikasi spesialis forensik
            digital, pengujian penetrasi (penetration testing), dan analisis malware tersertifikasi.
          </li>
          <li className="mt-2">
            <strong>Pola Kerja Reaktif vs Proaktif (Belum Threat Hunting):</strong> Sebagaimana
            dikritisi oleh Pratama Persadha (CISSReC), CSIRT di daerah umumnya masih bersifat
            reaktif—baru bertindak apabila insiden telah terekspos, viral, atau menjadi aduan publik
            (seperti kasus LaporGub!). CSIRT belum melakukan threat hunting (pencarian ancaman secara
            aktif di internal sistem) maupun memanfaatkan Cyber Threat Intelligence (CTI) untuk
            memantau ancaman di forum-forum underground.
          </li>
          <li className="mt-2">
            <strong>Minimnya Pengujian Penetrasi (Penetration Testing) Berkala:</strong> Kegiatan
            audit keamanan teknis dan uji penetrasi belum dijadikan agenda rutin tahunan sebelum dan
            sesudah aplikasi dipublikasikan secara resmi.
          </li>
          <li className="mt-2">
            <strong>Aplikasi Terbengkalai dan Zombie Servers:</strong> Banyak OPD membuat subdomain
            aplikasi khusus untuk program sementara yang kemudian ditinggalkan tanpa pemeliharaan
            (zombie servers). Subdomain terbengkalai ini menjadi pintu masuk utama peretas untuk
            menanamkan skrip judi online tanpa terdeteksi oleh pengelola utama (sebagaimana terlihat
            pada kasus peretasan massal 37 subdomain di Kabupaten Indragiri Hulu sebagaimana tercatat
            dalam laporan riset Freedom House).
          </li>
        </ul>
        <P>
          Kesenjangan tata kelola dan operasional ini memerlukan perumusan solusi konkret dan
          rekomendasi strategis yang dapat diterapkan secara bertahap oleh pemerintah daerah.
        </P>
      </div>

      <Bagian n="5" judul="Matriks Rekomendasi dan Langkah Perbaikan Jaga Data Nusantara (JDN)" />
      <div>
        <P>
          Pemulihan dan penguatan keamanan siber daerah memerlukan pendekatan komprehensif yang
          mengombinasikan tindakan teknis jangka pendek, reformasi tata kelola jangka panjang,
          sentralisasi audit log, serta pengawasan independen oleh masyarakat sipil.
        </P>
        <Sub>Rekomendasi Pembenahan Teknis (Technical Remediation)</Sub>
        <P>
          Diskominfo Provinsi dan Kabupaten/Kota se-Jawa Tengah direkomendasikan untuk segera
          mengambil langkah perbaikan teknis berikut:
        </P>
        <ol className="mt-4 list-decimal pl-5 text-[17px] leading-[1.4]">
          <li className="mt-2">
            <strong>Konfigurasi HTTP Security Headers:</strong> Wajib mengaktifkan
            Content-Security-Policy (CSP), HSTS, X-Frame-Options, dan X-Content-Type-Options pada
            peladen web guna menolak eksekusi skrip injeksi dan framing ilegal.
          </li>
          <li className="mt-2">
            <strong>Manajemen Patching Berkala:</strong> Menerapkan jadwal pembaruan rutin untuk
            kernel sistem operasi, CMS, framework, dan plugin aplikasi.
          </li>
          <li className="mt-2">
            <strong>Pembersihan Berkas Cadangan &amp; Restriksi Direktori:</strong> Menutup akses
            directory listing serta menghapus seluruh berkas cadangan sensitif (.bak, .sql, .zip)
            dari direktori web publik.
          </li>
          <li className="mt-2">
            <strong>Inventarisasi &amp; Eliminasi Zombie Subdomains:</strong> Melakukan audit
            inventarisasi terhadap seluruh subdomain OPD, menonaktifkan aplikasi yang tidak lagi
            digunakan, serta melakukan SEO index monitoring secara teratur untuk mendeteksi dini
            adanya penanaman kata kunci judi online.
          </li>
          <li className="mt-2">
            <strong>Sentralisasi Log dan Retensi Audit Trail (Technical Log Retention):</strong>{" "}
            Mengisolasikan dan mengumpulkan seluruh log peladen web dan sistem operasi ke peladen
            terpusat (SIEM atau Syslog Server). Kebijakan retensi log minimum disimpan selama 3
            hingga 6 bulan guna memastikan ketersediaan jejak audit (audit trail) saat analisis
            forensik pasca-insiden dilakukan oleh CSIRT.
          </li>
        </ol>
        <Sub>Rekomendasi Tata Kelola, Kebijakan, dan Kepatuhan Hukum</Sub>
        <ul className="mt-4 list-disc pl-5 text-[17px] leading-[1.4]">
          <li className="mt-2">
            <strong>Penerapan Secure SDLC:</strong> Mewajibkan penerapan prinsip Secure Software
            Development Life Cycle dalam setiap proses pengadaan dan pengembangan aplikasi di
            lingkungan OPD.
          </li>
          <li className="mt-2">
            <strong>Mandat Penetration Testing:</strong> Menjadikan pengujian penetrasi etis sebagai
            syarat wajib sebelum aplikasi dipublikasikan (go-live) dan dilakukan secara berkala
            minimum satu kali setahun.
          </li>
          <li className="mt-2">
            <strong>Kepatuhan Terhadap UU PDP (UU No. 27/2022):</strong> Memastikan seluruh proses
            pemrosesan data publik mematuhi prinsip pelindungan data pribadi, menegakkan pengelolaan
            log sebagai bukti kepatuhan, serta menerapkan kewajiban notifikasi tertulis kegagalan
            pelindungan data maksimal 3x24 jam kepada lembaga pengawas PDP dan subjek data yang
            terdampak.
          </li>
        </ul>
        <Sub>Matriks Aksi Perbaikan Keamanan Siber</Sub>
        <Tabel
          head={["Kategori Intervensi", "Tindakan Prioritas", "Penanggung Jawab / Target Utama"]}
          rows={[
            [
              "Teknis (Pendek)",
              "Konfigurasi HTTP Security Headers (CSP, HSTS), pembersihan berkas cadangan (.sql/.bak), dan penutupan zombie subdomains.",
              "Tim Teknis Diskominfo & Admin Web OPD",
            ],
            [
              "Teknis (Menengah)",
              "Pelaksanaan pemindaian kerentanan rutin, penerapan sentralisasi log (SIEM), threat hunting, dan SEO index monitoring.",
              "CSIRT Kabupaten/Kota & Analis Siber",
            ],
            [
              "Tata Kelola",
              "Penegakan Secure SDLC, uji penetrasi wajib sebelum go-live, dan pemutakhiran inventarisasi aset digital.",
              "Diskominfo & Pengembang Aplikasi Pihak Ke-3",
            ],
            [
              "Kepatuhan Hukum",
              "Pemenuhan standar pemrosesan data UU PDP dan penyusunan SOP Notifikasi Insiden Kebocoran Data (3x24 jam).",
              "Kepala Diskominfo & Data Protection Officer (DPO)",
            ],
          ]}
        />
        <Sub>Peran Strategis dan Komitmen Perkumpulan JDN</Sub>
        <P>
          Sesuai dengan mandat pilar organisasinya (Pilar 1: Data Incident &amp; Breach Watchdog dan
          Pilar 3: Riset Kebijakan &amp; Litigasi Strategis), Perkumpulan Jaga Data Nusantara (JDN)
          berkomitmen untuk:
        </P>
        <ul className="mt-4 list-disc pl-5 text-[17px] leading-[1.4]">
          <li className="mt-2">
            Menyelenggarakan pemantauan independen dan menerbitkan security advisory secara berkala
            kepada pengelola sistem melalui skema Responsible Disclosure.
          </li>
          <li className="mt-2">
            Menyediakan pendampingan teknis-etis dan evaluasi kepatuhan privasi (Privacy by Design)
            bagi institusi publik.
          </li>
          <li className="mt-2">
            Melakukan advokasi hak-hak digital masyarakat dan memfasilitasi keterbukaan informasi
            atas insiden siber yang berdampak pada data pribadi warga, guna memastikan akuntabilitas
            pengendali data publik sesuai dengan UU No. 27/2022 tentang Pelindungan Data Pribadi.
          </li>
        </ul>
        <P>
          Upaya memulihkan dan memperkuat keamanan siber di wilayah Jawa Tengah membutuhkan komitmen
          kolektif serta kolaborasi erat antara pemerintah daerah, BSSN, akademisi, dan organisasi
          masyarakat sipil. Hanya melalui sinergi yang transparan, terukur, dan berkelanjutan,
          kedaulatan digital serta perlindungan atas hak-hak informasi publik masyarakat Indonesia
          dapat diwujudkan secara nyata.
        </P>
      </div>
    </div>
  );
}
