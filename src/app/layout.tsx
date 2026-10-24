import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Jaga Data Nusantara",
    template: "%s | Jaga Data Nusantara",
  },
  description:
    "Organisasi independen untuk transparansi, akuntabilitas, dan pemberdayaan masyarakat melalui data. Laporkan penyalahgunaan kewenangan dan penyelewengan secara aman dan anonim.",
  keywords: ["Anti-Korupsi", "Jaga Data Nusantara", "JDN", "Aduan", "Anonim", "Whistleblower"],
  openGraph: {
    title: "Jaga Data Nusantara",
    description: "Laporkan korupsi secara anonim dan aman.",
    url: "https://jagadata.id",
    siteName: "Jaga Data Nusantara",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    locale: "id_ID",
    type: "website",
  },
  metadataBase: new URL("https://jagadata.id"),
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // suppressHydrationWarning: ekstensi browser menyuntik atribut ke <html> sebelum hidrasi
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-ground font-reading text-ink antialiased">
        <a
          href="#konten-utama"
          className="kicker sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-ground"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="konten-utama">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
