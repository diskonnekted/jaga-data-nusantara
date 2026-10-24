"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/laporan", label: "Laporan" },
  { href: "/berita", label: "Berita" },
  { href: "/program", label: "Program" },
  { href: "/tentang", label: "Tentang" },
  { href: "/partisipasi", label: "Partisipasi" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href: string) =>
    `kicker flex min-h-[44px] items-center px-3 ${
      pathname === href
        ? "text-accent"
        : "text-ink hover:bg-ink hover:text-ground"
    }`;

  return (
    <header className="border-b-4 border-ink">
      <div className="mx-auto max-w-sheet px-4">
        {/* Masthead */}
        <div className="flex flex-col items-center gap-1 py-6 md:py-8">
          <p className="kicker text-accent">Edisi Oktober 2026 · Jakarta</p>
          <Link
            href="/"
            aria-label="Jaga Data Nusantara — ke Beranda"
            className="flex items-center gap-3 md:gap-4"
          >
            <Image
              src="/jdn-mark.png"
              alt="Logo Jaga Data Nusantara"
              width={312}
              height={334}
              priority
              className="h-12 w-auto md:h-16"
            />
            <span className="flex flex-col">
              <span className="font-display text-4xl font-black leading-none tracking-tight md:text-6xl">
                JDN
              </span>
              <span className="kicker mt-1 text-secondary">Jaga Data Nusantara</span>
            </span>
          </Link>
        </div>

        {/* Nav row on a quiet rule */}
        <div className="flex items-center justify-between border-t border-rule">
          <nav aria-label="Navigasi utama" className="hidden md:block">
            <ul className="flex flex-wrap">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={linkClass(link.href)}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="btn btn-ghost kicker md:hidden"
          >
            {open ? "Tutup" : "Menu"}
          </button>
        </div>

        {open && (
          <nav aria-label="Navigasi utama" id="menu-mobile" className="border-t border-rule md:hidden">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href} className="border-b border-rule last:border-b-0">
                  <Link
                    href={link.href}
                    className={linkClass(link.href)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
