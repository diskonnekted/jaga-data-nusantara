Untuk membuat website yang profesional, modern, dan memiliki kredibilitas tinggi menggunakan AI App Builder seperti **Trae** (atau v0, Bolt.new, Lovable), Anda perlu memberikan prompt yang sangat terstruktur. AI coding bekerja paling optimal dengan instruksi dalam **Bahasa Inggris** untuk logika teknis, namun kita akan instruksikan agar **teks di dalam website (UI) menggunakan Bahasa Indonesia**.

Berikut adalah panduan dan kumpulan prompt lengkap untuk Trae.

### 💡 Tips Sebelum Memulai di Trae
1. Pilih mode **Web App / React + Tailwind CSS** (ini standar terbaik untuk UI modern).
2. Jangan minta semuanya sekaligus dalam satu prompt raksasa. Gunakan **Master Prompt** dulu untuk kerangka utama, lalu gunakan **Prompt Per Halaman** untuk mendetailkan.

---

### 1. MASTER PROMPT (Untuk Generate Kerangka Utama & Design System)
*Copy-paste ini ke Trae pada chat pertama untuk membangun fondasi website.*

**Prompt:**
> "Build a modern, professional, and trustworthy multi-page web application for a Civil Society Organization (MGO) named 'Jaga Data Nusantara' (JDN). JDN is an independent watchdog and think-tank that accompanies the government in managing Big Data, oversees data privacy, and evaluates government IT projects for efficiency and public benefit.
> 
> **Tech Stack:** React, Next.js (App Router), Tailwind CSS, Lucide React for icons, and Framer Motion for subtle animations.
> 
> **Design System & Vibe:**
> - **Vibe:** Think-tank, transparent, tech-forward, authoritative but accessible. Similar to modern NGOs like Transparency International or tech policy institutes. NOT a bureaucratic government site.
> - **Color Palette:** Deep Navy Blue (Trust/Authority), Cyan/Teal (Tech/Data), Clean White/Light Gray backgrounds, and a subtle Alert Orange for 'Oversight/Warning' elements.
> - **Typography:** Clean sans-serif (Inter or Plus Jakarta Sans).
> - **Layout:** Responsive, plenty of whitespace, glassmorphism accents for data cards, subtle grid backgrounds to represent 'data'.
> 
> **Global Navigation Bar:**
> - Logo: Text 'Jaga Data Nusantara' with a shield/data-node icon.
> - Links: Beranda, Tentang Kami, Program & Kajian, Indeks & Laporan, Lapor & Partisipasi.
> - CTA Button: 'Unduh Laporan Terbaru' (Outline style).
> 
> **Global Footer:**
> - Brief description of JDN, Quick Links, Social Media icons, Newsletter subscription, and Copyright.
> 
> Please generate the main layout, routing structure, and the **Home Page (Beranda)** first. Ensure all UI text is in formal Indonesian."

---

### 2. PROMPT PER HALAMAN (Untuk Refinement / Detailing)
*Setelah kerangka utama jadi, buka chat baru atau lanjutkan chat di Trae dengan prompt berikut untuk setiap halaman.*

#### A. Halaman Beranda (Home)
**Prompt:**
> "Refine the Home Page (Beranda) for Jaga Data Nusantara. Make it highly engaging. Include these sections:
> 1. **Hero Section:** Bold headline 'Mengawal Kedaulatan Data, Mengawasi Teknologi Pemerintahan'. Subheadline explaining our role as an independent MGO. Two buttons: 'Lihat Indeks Evaluasi' (Primary) and 'Tentang Kami' (Secondary). Add a subtle abstract data-flow animation in the background.
> 2. **Core Pillars (3 Cards with Icons):** 
>    - 'Pendampingan Big Data' (Icon: Database/Network)
>    - 'Pengawasan Data & Privasi' (Icon: Shield/Lock)
>    - 'Evaluasi Proyek IT' (Icon: Chart/Check-circle)
> 3. **Live Impact Stats:** A sleek counter section showing: '15+ Proyek IT Dievaluasi', '5 Policy Brief Terbit', '100% Independen'.
> 4. **Latest Insights:** A grid of 3 recent blog posts or policy briefs with thumbnail, title, date, and 'Baca Kajian' link.
> Ensure smooth scroll animations and modern card hover effects."

#### B. Halaman Tentang Kami (About Us)
**Prompt:**
> "Create the 'Tentang Kami' (About Us) page. It needs to establish deep trust and credibility. Include:
> 1. **Our Story:** A section explaining why JDN was founded (the need for independent IT oversight in Indonesia).
> 2. **Visi & Misi:** Visi: 'Mewujudkan kedaulatan data bangsa dan tata kelola IT pemerintahan yang akuntabel.' Misi: 3 bullet points with custom check icons.
> 3. **Organisasi (Team Grid):** A section for 'Dewan Pembina & Pengurus'. Use placeholder profile cards with Name, Title (e.g., Ketua Umum, Dewan Pakar Keamanan Siber), and a short bio.
> 4. **Kode Etik (Code of Ethics):** A highlighted callout box emphasizing our core values: Independensi (Independence), Berbasis Data (Evidence-based), dan Menjaga Kerahasiaan (Confidentiality).
> Use a clean, editorial layout with alternating text and image/illustration blocks."

#### C. Halaman Program & Kajian (Programs)
**Prompt:**
> "Design the 'Program & Kajian' page. This explains how we work. Use a tabbed interface or an accordion layout for the 3 main programs:
> 1. **Tab 1: Pendampingan Strategis Big Data.** Explain how we help government design data architecture and interoperability.
> 2. **Tab 2: Pengawasan Privasi & Keamanan.** Explain our monitoring of UU PDP (Data Privacy Law) compliance and cybersecurity posture.
> 3. **Tab 3: Audit & Evaluasi Proyek IT.** Detail our 'Value for Money' assessment. Mention that we evaluate Efficiency, Effectiveness, Target Accuracy, and Public Benefit.
> Below the tabs, add a section called 'Metodologi Kami' showing a 4-step process graphic: 1. Pengumpulan Data -> 2. Analisis Teknis -> 3. Uji Publik -> 4. Publikasi Policy Brief. Use Lucide icons for the steps."

#### D. Halaman Indeks & Laporan (Reports & Dashboard) - *Fitur Unggulan*
**Prompt:**
> "Create the 'Indeks & Laporan' page. This is our most important page showing our IT evaluation results.
> 1. **Hero:** 'Raport Digital Pemerintahan'.
> 2. **Featured Evaluation (Mock UI):** Create a beautiful dashboard card evaluating a mock government app (e.g., 'Aplikasi Layanan Warga X'). Show a Radar Chart or Bar Chart evaluating 5 dimensions: Efisiensi Anggaran, Kualitas Teknis, Tepat Sasaran, Keamanan Data, Keberlanjutan. Give it an overall score (e.g., 65/100 - 'Kurang Optimal') with color coding (Red/Yellow/Green).
> 3. **Evaluation List:** A list/grid of other evaluated projects with their final scores, tags (e.g., 'Boros Anggaran', 'Aman', 'Perlu Perbaikan'), and a 'Download PDF' button.
> 4. **Publications:** A section to download 'Whitepaper' and 'Policy Brief' PDFs.
> Make the data visualization look premium and easy to understand for the general public."

#### E. Halaman Lapor & Partisipasi (Contact & Whistleblowing)
**Prompt:**
> "Design the 'Lapor & Partisipasi' page. This is for public engagement and whistleblowing.
> 1. **Kanal Pengaduan (Whistleblower System):** A secure-looking form for citizens to report data leaks, inefficient IT projects, or privacy violations. Fields: 'Jenis Laporan' (Dropdown: Kebocoran Data, Proyek IT Boros, Pelanggaran Privasi), 'Instansi Terkait', 'Deskripsi Kejadian', and an 'Upload Bukti' (drag & drop). Add a reassuring text: 'Identitas Pelapor Dijamin Kerahasiaannya'.
> 2. **Bergabung dengan Kami:** Cards for 'Jadi Relawan Jaga Data' and 'Pakar/Kontributor'.
> 3. **Contact Info:** Standard contact form, email (pengaduan@jagadata.id), office address, and a stylized map placeholder.
> Ensure the form has a clean, accessible UI with clear validation states."

---

### 🛠️ Instruksi Tambahan untuk Anda (User) saat menggunakan Trae:

1. **Jika AI membuat desain terlalu kaku/korporat:** 
   *Ketik:* "Make the design more civic-tech and modern. Add subtle gradients, use glassmorphism for the data cards, and increase the border-radius to make it look friendlier but professional."
2. **Jika AI lupa menggunakan Bahasa Indonesia:**
   *Ketik:* "Ensure ALL visible UI text, buttons, headings, and placeholders are strictly in formal Indonesian. Only keep technical terms in English."
3. **Untuk Chart/Grafik di Halaman Laporan:**
   *Ketik:* "Use `recharts` library to build the Radar Chart and Bar Chart for the IT Evaluation dashboard. Make it responsive and use the brand colors (Navy and Cyan)."

Dengan prompt yang terstruktur ini, Trae akan menghasilkan website yang tidak hanya terlihat cantik, tetapi secara fungsional dan naratif sangat sesuai dengan visi mulia **Jaga Data Nusantara** sebagai *watchdog* dan mitra strategis pemerintah.