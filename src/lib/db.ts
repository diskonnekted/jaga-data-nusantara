import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

// Koneksi SQLite singleton. Database disimpan di data/laporan.db.
// Di produksi, arahkan ke volume persisten dan batasi izin file.

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (db) return db;

  const dir = path.join(process.cwd(), "data");
  fs.mkdirSync(dir, { recursive: true });

  db = new Database(path.join(dir, "laporan.db"));
  db.pragma("journal_mode = WAL");

  // Tabel laporan: hanya menyimpan data terenkripsi + metadata non-identitas.
  db.exec(`
    CREATE TABLE IF NOT EXISTS laporan (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ticket_code TEXT NOT NULL UNIQUE,
      submitted_at TEXT NOT NULL,
      iv TEXT NOT NULL,
      auth_tag TEXT NOT NULL,
      ciphertext TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS lampiran (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ticket_code TEXT NOT NULL,
      file_name TEXT NOT NULL,
      mime_type TEXT NOT NULL,
      size_bytes INTEGER NOT NULL,
      iv TEXT NOT NULL,
      auth_tag TEXT NOT NULL,
      ciphertext BLOB NOT NULL,
      FOREIGN KEY (ticket_code) REFERENCES laporan(ticket_code)
    );
  `);

  return db;
}

export interface LaporanRecord {
  ticketCode: string;
  submittedAt: string;
  iv: string;
  authTag: string;
  ciphertext: string;
}

export interface LampiranRecord {
  ticketCode: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  iv: string;
  authTag: string;
  ciphertext: Buffer;
}

export function insertLaporan(record: LaporanRecord): void {
  getDb()
    .prepare(
      `INSERT INTO laporan (ticket_code, submitted_at, iv, auth_tag, ciphertext)
       VALUES (@ticketCode, @submittedAt, @iv, @authTag, @ciphertext)`
    )
    .run(record);
}

export function insertLampiran(record: LampiranRecord): void {
  getDb()
    .prepare(
      `INSERT INTO lampiran (ticket_code, file_name, mime_type, size_bytes, iv, auth_tag, ciphertext)
       VALUES (@ticketCode, @fileName, @mimeType, @sizeBytes, @iv, @authTag, @ciphertext)`
    )
    .run(record);
}
