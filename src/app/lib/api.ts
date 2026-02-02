export interface Transaction {
  id?: number;
  trx_id?: string;
  tanggal?: string;
  unit?: string;
  keterangan?: string;
  jumlah?: number;
  jenis?: string;
}

export async function getTransactions(): Promise<Transaction[]> {
  const base = (import.meta as any).env?.VITE_API_URL || "";
  const url = base ? `${base}/transactions` : `/api/transactions`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch transactions: ${res.status}`);
  return res.json();
}

export async function postTransaction(payload: Transaction): Promise<Transaction> {
  const base = (import.meta as any).env?.VITE_API_URL || "";
  const url = base ? `${base}/transactions` : `/api/transactions`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Failed to post transaction: ${res.status}`);
  return res.json();
}
