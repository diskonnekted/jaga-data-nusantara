// Kurasi berita keamanan siber dari RSS The Hacker News & BleepingComputer (ditarik 24 Oktober 2026).
// Ringkasan adalah TERJEMAHAN REDAKSI dari liputan asli — bukan laporan verifikasi JDN. Sumber & tautan asli disertakan.
import Link from "next/link";
import { kebocoran, kerentanan, riset, type Artikel } from "./data";

export const metadata = {
  title: "Berita & Artikel",
  description:
    "Kurasi berita keamanan siber terkini — kebocoran data dan kerentanan — diterjemahkan ke Bahasa Indonesia dengan keterangan sumber lengkap, termasuk laporan riset terbitan JDN.",
};

function BarisArtikel({ a }: { a: Artikel }) {
  return (
    <article className="grid gap-2 border-b border-rule py-7 md:grid-cols-12 md:gap-x-8">
      <p className="kicker text-secondary md:col-span-3">
        {a.tanggal} · {a.sumber}
      </p>
      <div className="md:col-span-9">
        <h3 className="font-display text-2xl font-black leading-tight tracking-tight md:text-3xl">
          <Link href={`/berita/${a.slug}`} className="hover:text-accent">
            {a.judul}
          </Link>
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] leading-[1.3] text-secondary">{a.ringkasan}</p>
        <p className="mt-3 text-[15px]">
          <Link
            href={`/berita/${a.slug}`}
            className="text-accent underline underline-offset-4 hover:text-ink"
          >
            Baca detail →
          </Link>
          <span aria-hidden="true" className="text-secondary">
            {" "}
            ·{" "}
          </span>
          <a
            href={a.tautan}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:text-ink"
          >
            {a.tautan.startsWith("/")
              ? "Berkas laporan (TXT) ↗"
              : `Berita asli (EN) di ${a.sumber} ↗`}
          </a>
        </p>
      </div>
    </article>
  );
}

export default function BeritaPage() {
  return (
    <div>
      {/* Lead */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Rubrik Berita</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Berita &amp; Artikel
          </h1>
          <p className="mt-6 max-w-2xl text-[19px] leading-[1.3] text-secondary md:text-[20px]">
            Kurasi liputan keamanan siber terkini dari situs keamanan ternama — kebocoran data,
            kerentanan kritis, dan peringatan tindak lanjutnya — diterjemahkan oleh redaksi Jaga
            Data Nusantara beserta keterangan sumber lengkap, termasuk laporan riset terbitan
            redaksi sendiri.
          </p>
          <p className="kicker mt-6 text-secondary">Kurasi redaksi · 24 Oktober 2026</p>
        </div>
      </section>

      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Insiden</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Kebocoran Data Terkini
          </h2>
          <ul className="mt-10 border-t border-rule">
            {kebocoran.map((a) => (
              <li key={a.tautan}>
                <BarisArtikel a={a} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Eksploitasi &amp; Tambalan</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Kerentanan Terkini
          </h2>
          <ul className="mt-10 border-t border-rule">
            {kerentanan.map((a) => (
              <li key={a.tautan}>
                <BarisArtikel a={a} />
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-[17px] leading-[1.3]">
            Terdampak salah satu insiden atau kerentanan di atas?{" "}
            <Link
              href="/partisipasi"
              className="text-accent underline underline-offset-4 hover:text-ink"
            >
              Laporkan melalui Kanal Pengaduan
            </Link>{" "}
            — laporan diverifikasi oleh tim riset forensik digital kami.
          </p>
        </div>
      </section>

      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Publikasi Riset</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Riset &amp; Laporan JDN
          </h2>
          <ul className="mt-10 border-t border-rule">
            {riset.map((a) => (
              <li key={a.slug}>
                <BarisArtikel a={a} />
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-[17px] leading-[1.3]">
            Laporan pada bagian ini diterbitkan langsung oleh Divisi Riset Forensik Digital &amp;
            Lab Data JDN dan ditampilkan utuh pada halaman detailnya.
          </p>
        </div>
      </section>

      {/* Catatan redaksi — kolofon di atas footer */}
      <section>
        <div className="mx-auto max-w-sheet px-4 py-8 md:py-10">
          <p className="kicker text-secondary">Catatan Redaksi</p>
          <p className="mt-2 max-w-2xl text-[15px] leading-[1.3] text-secondary">
            Entri di halaman ini adalah ringkasan terjemahan dari liputan pihak ketiga — bukan
            hasil verifikasi lab riset JDN. Tautan ke berita asli disediakan pada setiap entri;
            klaim dan angka merujuk pada sumber tersebut. Laporan berlabel Riset &amp; Laporan
            merupakan publikasi riset JDN sendiri.
          </p>
        </div>
      </section>
    </div>
  );
}
