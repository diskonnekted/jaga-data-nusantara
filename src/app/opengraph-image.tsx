import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Simbol logo final (public/jdn-mark.png, 312×334, transparan berwarna) + wordmark teks dirender sebagai lockup.
const NOMINAL = { w: 312, h: 334 };
export const alt = "Jaga Data Nusantara (JDN)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const buf = await readFile(join(process.cwd(), "public", "jdn-mark.png"));
  const logo = `data:image/png;base64,${buf.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f3efe5",
          color: "#191916",
          padding: "64px 72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* baris atas: kicker + domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "4px solid #191916",
            borderBottom: "1px solid #9b978e",
            padding: "18px 0",
            fontSize: 24,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            fontWeight: 650,
          }}
        >
          <span style={{ color: "#a3231d" }}>Edisi Oktober 2026 · Jakarta</span>
          <span style={{ color: "#494843" }}>jagadata.id</span>
        </div>

        {/* masthead: simbol + wordmark */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
            <img
              src={logo}
              width={NOMINAL.w}
              height={NOMINAL.h}
              style={{ width: 172, height: 194 }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 124,
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                JDN
              </div>
              <div
                style={{
                  marginTop: 16,
                  fontSize: 26,
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  fontWeight: 650,
                  color: "#494843",
                }}
              >
                Jaga Data Nusantara
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 40,
              color: "#494843",
              lineHeight: 1.3,
            }}
          >
            Transparansi, akuntabilitas, dan pemberdayaan masyarakat melalui data.
          </div>
        </div>

        {/* baris bawah */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #9b978e",
            paddingTop: 18,
            fontSize: 24,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            fontWeight: 650,
            color: "#494843",
          }}
        >
          <span>Laporan · Program · Partisipasi</span>
          <span style={{ color: "#a3231d" }}>Vol. I</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
