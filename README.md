# Jaga Data Nusantara (JDN)

Situs resmi **Perkumpulan Jaga Data Nusantara (JDN)** — organisasi masyarakat sipil nirlaba, non-partisan, dan independen di bidang keamanan digital, pemantauan insiden kebocoran data, dan advokasi privasi. [jagadata.id](https://jagadata.id) · [jadantara.org](https://jadantara.org) · `pengaduan@jagadata.id`

> Pengawas Kebocoran, Pembela Privasi.

## Fitur

- **Rubrik Berita & Artikel** — kurasi terjemahan berita keamanan siber (kebocoran data & kerentanan) dengan keterangan sumber lengkap; setiap entri punya halaman detail yang menampilkan ringkasan utuh + tautan ke berita asli.
- **Riset & Laporan JDN** — laporan riset terbitan sendiri (mis. *Laporan Situasi keamanan Siber Daerah — Jawa Tengah*), ditampilkan utuh dengan berkas lampiran yang bisa diunduh.
- **Laporan** — profil layanan posko aduan dan alur pelaporan insiden.
- **Program, Tentang, Partisipasi** — AD/ART sebagai sumber konten primer (visi, misi, organ, nilai, syarat keanggotaan).
- **Manifesto Kedaulatan Digital Indonesia** — dokumen yayasan yang tersemat dan bisa dibaca langsung di halaman Tentang.

## Tumpuan Teknologi

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 3.4 — gaya editorial *newsprint* (Source Serif 4 / EB Garamond, garis-garis, tanpa radius/bayangan)
- pm2 + Node 24 LTS pada produksi

## Menjalankan Lokal

```bash
npm ci
cp .env.example .env.local   # isi ENCRYPT_KEY sesuai petunjuk di berkas
npm run dev                  # http://localhost:3000
```

## Build Produksi

```bash
npm run build
PORT=3039 npm run start      # di server produksi dijalankan via pm2
```

Pada server: `pm2 start npm --name jadantara -- run start` dengan `PORT=3039`, lalu `pm2 save` dan entri crontab `@reboot pm2 resurrect`.

## Struktur

```
src/app/
├── berita/          # daftar + detail (data.ts = sumber tunggal entri; isi-laporan.tsx = laporan JDN utuh)
├── laporan/         # posko aduan & alur pelaporan
├── program/         # 4 pilar aksi
├── tentang/         # visi, misi, organ, nilai + manifesto tersemat
├── partisipasi/     # keanggotaan & relawan
├── icon.png         # favicon (file-convention)
└── opengraph-image  # kartu berbagi dengan lockup logo
public/              # logo, manifesto PDF, lampiran laporan (.txt)
```

Konten `/berita` bersumber dari `src/app/berita/data.ts`; entri berpijar pada sinopsis sumber pihak ketiga yang diterjemahkan utuh (bukan salinan artikel), sedangkan kategori *Riset & Laporan* adalah publikasi JDN sendiri.

## Kontribusi

Commit langsung ke `main`. Rujukan konten organisasi: Anggaran Dasar & Anggaran Rumah Tangga JDN.

© 2026 Perkumpulan Jaga Data Nusantara.
