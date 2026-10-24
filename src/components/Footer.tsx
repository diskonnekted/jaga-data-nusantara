import Link from "next/link";
import Image from "next/image";

const rubrik = [
  { href: "/", label: "Beranda" },
  { href: "/laporan", label: "Laporan" },
  { href: "/berita", label: "Berita & Artikel" },
  { href: "/program", label: "Program" },
];

const lembaga = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/partisipasi", label: "Kanal Pengaduan" },
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-ink">
      <div className="mx-auto max-w-sheet px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:divide-x md:divide-rule">
          <div className="md:col-span-6 md:pr-10">
            <div className="mt-3 flex items-center gap-3">
              <Image
                src="/jdn-mark.png"
                alt="Logo Jaga Data Nusantara"
                width={312}
                height={334}
                className="h-11 w-auto md:h-14"
              />
              <span className="flex flex-col">
                <span className="font-display text-3xl font-black leading-none tracking-tight">
                  JDN
                </span>
                <span className="kicker mt-1 text-secondary">Jaga Data Nusantara</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-[19px] leading-[1.3] text-secondary">
              Organisasi independen yang berkomitmen untuk transparansi, akuntabilitas, dan
              pemberdayaan masyarakat melalui data.
            </p>
          </div>

          <nav aria-label="Rubrik" className="md:col-span-2 md:px-6">
            <p className="kicker text-secondary">Rubrik</p>
            <ul className="mt-4 space-y-2">
              {rubrik.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[17px] leading-[1.2] hover:text-accent hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Lembaga" className="md:col-span-2 md:px-6">
            <p className="kicker text-secondary">Lembaga</p>
            <ul className="mt-4 space-y-2">
              {lembaga.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[17px] leading-[1.2] hover:text-accent hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2 md:pl-6">
            <p className="kicker text-secondary">Direktori</p>
            <ul className="mt-4 space-y-2 text-[17px] leading-[1.2]">
              <li>
                <a href="mailto:pengaduan@jagadata.id" className="hover:text-accent hover:underline underline-offset-4">
                  pengaduan@jagadata.id
                </a>
              </li>
              <li className="text-secondary">
                Jakarta, Indonesia
              </li>
            </ul>
            {/* ponytail: kanal langganan belum ada endpoint; jangan tampilkan form yang tidak mengirim apa pun */}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-rule pt-4 md:flex-row md:items-center md:justify-between">
          <p className="kicker text-secondary">© {new Date().getFullYear()} Jaga Data Nusantara</p>
          <p className="kicker text-secondary">Vol. I · Edisi Oktober 2026</p>
        </div>
      </div>
    </footer>
  );
}
