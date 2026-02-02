import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  user: process.env.DB_USER || "bumdes",
  password: process.env.DB_PASSWORD || "bumdes_pass",
  database: process.env.DB_NAME || "bumdesdb",
});

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS transactions (
      id SERIAL PRIMARY KEY,
      trx_id TEXT,
      tanggal DATE,
      unit TEXT,
      keterangan TEXT,
      jumlah BIGINT,
      jenis TEXT
    );
  `);
}

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.get("/api/transactions", async (_req, res) => {
  const { rows } = await pool.query("SELECT * FROM transactions ORDER BY id DESC LIMIT 100");
  res.json(rows);
});

app.post("/api/transactions", async (req, res) => {
  const { trx_id, tanggal, unit, keterangan, jumlah, jenis } = req.body;
  const result = await pool.query(
    "INSERT INTO transactions (trx_id, tanggal, unit, keterangan, jumlah, jenis) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
    [trx_id, tanggal, unit, keterangan, jumlah, jenis]
  );
  res.status(201).json(result.rows[0]);
});

initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize DB", err);
    process.exit(1);
  });
