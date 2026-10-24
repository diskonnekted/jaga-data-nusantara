// Data kurasi berita — sumber RSS The Hacker News & BleepingComputer (ditarik 24 Oktober 2026).
// ringkasan = TERJEMAHAN LENGKAP sinopsis sumber (feed memberhentikan sinopsis dengan "[...]"),
// bukan salinan artikel penuh. Klaim & angka merujuk sumber.
// Kategori "Riset & Laporan" = publikasi riset JDN sendiri; tautan menunjuk berkas laporan di /public.
export type Artikel = {
  slug: string;
  kategori: "Kebocoran Data" | "Kerentanan" | "Riset & Laporan";
  tanggal: string;
  sumber: string;
  judul: string;
  ringkasan: string;
  tautan: string;
};

export const kebocoran: Artikel[] = [
  {
    slug: "capcom-kebocoran-11-7-juta-akun",
    kategori: "Kebocoran Data",
    tanggal: "Kamis, 22 Oktober 2026",
    sumber: "BleepingComputer",
    judul: "Capcom Konfirmasi Kebocoran Data Lebih dari 11,7 Juta Akun",
    ringkasan:
      "Raksasa gim Jepang Capcom memastikan bahwa peretas membobol layanan keanggotaannya, CAPCOM ID, sehingga lebih dari 11,7 juta alamat surel pelanggan beserta informasi terkait terekspos.",
    tautan:
      "https://www.bleepingcomputer.com/news/security/capcom-confirms-data-breach-affecting-117-million-accounts/",
  },
  {
    slug: "railway-imbau-rotasi-secret",
    kategori: "Kebocoran Data",
    tanggal: "Kamis, 22 Oktober 2026",
    sumber: "BleepingComputer",
    judul: "Railway Mengimbau Pengembang Merotasi Secret Pasca Dugaan Kebocoran",
    ringkasan:
      "Platform cloud Railway menerbitkan peringatan mendesak kepada penggunanya setelah mendeteksi aktivitas mencurigakan pada sistemnya yang menyimpan variabel lingkungan (environment variables) pelanggan. Para pengembang diimbau segera merotasi secret yang tersimpan di platform.",
    tautan:
      "https://www.bleepingcomputer.com/news/security/railway-warns-devs-to-rotate-secrets-after-potential-breach/",
  },
  {
    slug: "quest-diagnostics-rekam-pasien-terekspos",
    kategori: "Kebocoran Data",
    tanggal: "Jumat, 23 Oktober 2026",
    sumber: "BleepingComputer",
    judul: "Rekam Pasien Terekspos setelah Sistem Laboratorium Quest Diagnostics Dijebol",
    ringkasan:
      "Perusahaan laboratorium klinis asal Amerika, Quest Diagnostics, mengungkap bahwa rekam pasien telah terekspos setelah seorang aktor ancaman memperoleh akses tanpa izin ke sistem Quanum LSM miliknya.",
    tautan:
      "https://www.bleepingcomputer.com/news/security/quest-diagnostics-confirms-data-breach-exposed-patient-records/",
  },
  {
    slug: "peretasan-firewall-vpn-70-ribuan-kredensial",
    kategori: "Kebocoran Data",
    tanggal: "Jumat, 23 Oktober 2026",
    sumber: "The Hacker News",
    judul: "Kampanye Skala Besar Sasarkan Firewall dan VPN Korporasi, 70.000+ Kredensial Terekspos",
    ringkasan:
      "Para peneliti keamanan siber mengungkap detail kampanye berskala besar yang menyasar perangkat tepi jaringan yang terekspos, seperti firewall Fortinet FortiGate dan Palo Alto Networks GlobalProtect. Artefak investigasi menunjukkan para pelaku telah memperoleh akses ke berbagai organisasi di seluruh dunia dan berupaya memperdalam kompromi terhadap sejumlah korban; lebih dari 70.000 kredensial dilaporkan terekspos.",
    tautan:
      "https://thehackernews.com/2026/10/hackers-breach-enterprise-firewalls-and.html",
  },
];

export const kerentanan: Artikel[] = [
  {
    slug: "cacat-brotli-dibalik-rce-nodejs",
    kategori: "Kerentanan",
    tanggal: "Sabtu, 24 Oktober 2026",
    sumber: "The Hacker News",
    judul:
      "Cacat Dekoder Brotli di Balik RCE Node.js Juga Menimpa Bun, Python, dan Perangkat Lunak Populer Lain",
    ringkasan:
      "Cacat korupsi memori pada dekoder Brotli milik Google menular ke banyak program yang membongkar data terkompresi Brotli — di antaranya Bun, paket Python brotli dan brotlicffi, serta proxy Envoy. Tercatat sebagai CVE-2026-111497, kerentanan ini memungkinkan data terkompresi yang dirancang khusus menimpa memori di luar akhir buffer dan mengorupsi memori program — kondisi yang mendasari serangan eksekusi kode jarak jauh (RCE) pada Node.js.",
    tautan: "https://thehackernews.com/2026/10/brotli-decoder-flaw-behind-nodejs-rce.html",
  },
  {
    slug: "cisa-tandai-collabora-velocloud-dieksploitasi",
    kategori: "Kerentanan",
    tanggal: "Sabtu, 24 Oktober 2026",
    sumber: "The Hacker News",
    judul: "CISA Tandai Dua Kerentanan Kritis Collabora Online dan Arista VeloCloud Dieksploitasi Aktif",
    ringkasan:
      "Badan Keamanan Siber dan Infrastruktur AS (CISA) pada hari Jumat menambahkan dua kerentanan yang berdampak pada Collabora Online Built-in CODE Server dan Arista VeloCloud Orchestrator (VCO) ke daftar Known Exploited Vulnerabilities (KEV), dengan mengutip laporan eksploitasi aktif di dunia nyata. Kerentanan berkeparahan kritis itu antara lain tercatat sebagai CVE-2026-110447 dengan skor CVSS 9,2.",
    tautan: "https://thehackernews.com/2026/10/cisa-flags-two-actively-exploited.html",
  },
  {
    slug: "kerentanan-pillow-rce-eps",
    kategori: "Kerentanan",
    tanggal: "Jumat, 23 Oktober 2026",
    sumber: "The Hacker News",
    judul: "Kerentanan Kritis di Pustaka Gambar Pillow Bisa Jalankan Perintah Lewat Gambar Khusus",
    ringkasan:
      "Pillow, pustaka gambar yang paling banyak digunakan untuk Python, dapat dipaksa menjalankan perintah sistem operasi di server hanya dengan menentukan nama berkas yang dibukanya. Cacat yang tercatat sebagai CVE-2026-112900 ini ada pada cara Pillow menangani gambar EPS: nama berkas diteruskan ke Ghostscript — program terpisah yang dijalankan untuk mengubah gambar menjadi piksel — tanpa diperiksa terlebih dahulu.",
    tautan: "https://thehackernews.com/2026/10/critical-flaw-in-pythons-popular-pillow.html",
  },
  {
    slug: "php-mitigasi-rce-tanpa-tambalan",
    kategori: "Kerentanan",
    tanggal: "Jumat, 23 Oktober 2026",
    sumber: "BleepingComputer",
    judul: "PHP Umumkan Mitigasi Kerentanan RCE Baru yang Belum Punya Tambalan",
    ringkasan:
      "Tim keamanan PHP membagikan langkah mitigasi untuk kerentanan eksekusi kode jarak jauh (RCE) baru yang tambalannya belum tersedia. Kerentanan ini memengaruhi sistem yang berjalan dengan konfigurasi non-bawaan (non-default).",
    tautan:
      "https://www.bleepingcomputer.com/news/security/php-shares-mitigation-for-new-and-unpatched-rce-vulnerability/",
  },
];

// Publikasi riset JDN sendiri — tautan lokal ke berkas laporan, bukan liputan pihak ketiga.
export const riset: Artikel[] = [
  {
    slug: "laporan-keamanan-siber-jateng",
    kategori: "Riset & Laporan",
    tanggal: "Sabtu, 24 Oktober 2026",
    sumber: "Riset JDN",
    judul:
      "Laporan Situasi Keamanan Siber Daerah: Kerentanan Sistemik, Injeksi Perjudian Daring, dan Kesiapan Tanggap Insiden pada Situs Web Pemerintah Daerah di Jawa Tengah",
    ringkasan:
      "Hasil evaluasi komprehensif JDN menunjukkan bahwa situs web instansi pemerintah daerah di Jawa Tengah berada dalam kondisi rentan dan menjadi sasaran empuk eksploitasi industri perjudian daring melalui teknik SEO poisoning dan backlink hijacking — dengan kesiapan CSIRT daerah yang masih reaktif.",
    tautan: "/laporan-jateng.txt",
  },
];
