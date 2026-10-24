// Detail berita: sinopsis sumber ditampilkan utuh (terjemahan redaksi) + atribusi & tautan berita asli.
import Link from "next/link";
import { notFound } from "next/navigation";
import { kebocoran, kerentanan, riset, type Artikel } from "../data";
import { IsiLaporan } from "./isi-laporan";

const semua = [...kebocoran, ...kerentanan, ...riset];

export function generateStaticParams() {
  return semua.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = semua.find((x) => x.slug === slug);
  if (!a) return {};
  return { title: a.judul, description: a.ringkasan };
}

export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = semua.find((x) => x.slug === slug);
  if (!a) notFound();

  // Entri Riset & Laporan = publikasi JDN sendiri (tautan lokal ke berkas laporan), bukan terjemahan liputan pihak ketiga.
  const jdn = a.tautan.startsWith("/");
  const lainnya = semua.filter((x) => x.slug !== a.slug).slice(0, 4);

  return (
    <div>
      {/* Lead artikel */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">
            <Link href="/berita" className="hover:text-ink">
              ← Rubrik Berita
            </Link>{" "}
            · {a.kategori}
          </p>
          <h1 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
            {a.judul}
          </h1>
          <p className="kicker mt-6 text-secondary">
            {a.tanggal} · {jdn ? "Publikasi riset JDN" : `Sumber asli: ${a.sumber}`}
          </p>
        </div>
      </section>

      {/* Isi + kotak sumber */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-4 md:gap-0">
            <article className="md:col-span-3 md:border-r md:border-rule md:pr-10">
              <p className="max-w-2xl text-[19px] leading-[1.35] md:text-[20px]">{a.ringkasan}</p>
              {jdn ? (
                <IsiLaporan />
              ) : (
                <div className="mt-10 max-w-2xl border-t border-rule pt-6">
                  <p className="text-[17px] leading-[1.3]">
                    Teks di atas adalah terjemahan lengkap atas sinopsis yang diterbitkan sumber.
                    Analisis lanjutan, kutipan pihak-pihak terkait, dan pembaruan perkembangan
                    tersedia pada berita aslinya:
                  </p>
                  <p className="mt-5">
                    <a
                      className="btn btn-solid"
                      href={a.tautan}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Baca berita asli di {a.sumber} (EN) ↗
                    </a>
                  </p>
                </div>
              )}
              {jdn ? (
                <div className="mt-12 max-w-2xl border-t border-rule pt-6">
                  <p className="text-[17px] leading-[1.3]">
                    Laporan ini adalah publikasi riset asli JDN. Lampiran berkas mentah tersedia
                    untuk diunduh sebagai dokumen mandiri:
                  </p>
                  <p className="mt-5">
                    <a className="btn btn-solid" href={a.tautan} target="_blank" rel="noopener noreferrer">
                      Unduh laporan lengkap (TXT) ↗
                    </a>
                  </p>
                </div>
              ) : null}
            </article>

            <aside className="md:pl-10">
              <p className="kicker text-accent">Ikhtisar</p>
              <dl className="mt-4 border-t border-rule text-[15px] leading-[1.3]">
                <div className="flex justify-between gap-4 border-b border-rule py-2">
                  <dt className="text-secondary">Rubrik</dt>
                  <dd className="text-right">{a.kategori}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-rule py-2">
                  <dt className="text-secondary">Tanggal</dt>
                  <dd className="text-right">{a.tanggal}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-rule py-2">
                  <dt className="text-secondary">Sumber</dt>
                  <dd className="text-right">{a.sumber}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-rule py-2">
                  <dt className="text-secondary">{jdn ? "Penerbit" : "Terjemahan"}</dt>
                  <dd className="text-right">Redaksi JDN</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* Berita lainnya */}
      <section className="border-b-4 border-ink">
        <div className="mx-auto max-w-sheet px-4 py-14 md:py-20">
          <p className="kicker text-accent">Lanjutan Baca</p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Berita Lainnya
          </h2>
          <ul className="mt-10 border-t border-rule">
            {lainnya.map((b) => (
              <li
                key={b.slug}
                className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-x-8"
              >
                <p className="kicker text-secondary md:col-span-3">
                  {b.tanggal} · {b.sumber}
                </p>
                <h3 className="font-display text-xl font-bold leading-snug md:col-span-9">
                  <Link href={`/berita/${b.slug}`} className="hover:text-accent">
                    {b.judul}
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
          <p className="mt-10">
            <Link
              href="/berita"
              className="text-accent underline underline-offset-4 hover:text-ink"
            >
              ← Semua berita &amp; artikel
            </Link>
          </p>
        </div>
      </section>

      {/* Kolofon */}
      <section>
        <div className="mx-auto max-w-sheet px-4 py-8 md:py-10">
          <p className="kicker text-secondary">Catatan Redaksi</p>
          <p className="mt-2 max-w-2xl text-[15px] leading-[1.3] text-secondary">
            {jdn
              ? "Laporan riset ini merupakan publikasi asli Perkumpulan Jaga Data Nusantara (JDN). Klaim, angka, dan kutipan merujuk pada berkas laporan yang diterbitkan redaksi pada /laporan-jateng.txt."
              : "Entri di halaman ini adalah ringkasan terjemahan dari liputan pihak ketiga — bukan hasil verifikasi lab riset JDN. Tautan ke berita asli disediakan pada setiap entri; klaim dan angka merujuk pada sumber tersebut."}
          </p>
        </div>
      </section>
    </div>
  );
}
