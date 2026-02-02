import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "@/app/components/TopBar";
import { ArrowLeft, Download, FileText, Calendar } from "lucide-react";

export default function LaporanKeuangan() {
  const [bulan, setBulan] = useState("2");
  const [tahun, setTahun] = useState("2026");
  const [jenis, setJenis] = useState("laba-rugi");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Mock data Laba Rugi
  const labaRugi = {
    pendapatan: [
      { item: "Pendapatan Simpan Pinjam", jumlah: 45000000 },
      { item: "Pendapatan Toko Sembako", jumlah: 32000000 },
      { item: "Pendapatan Air Bersih", jumlah: 18000000 },
      { item: "Pendapatan Pertanian", jumlah: 25000000 },
      { item: "Pendapatan Pariwisata", jumlah: 15000000 },
    ],
    beban: [
      { item: "Beban Gaji & Upah", jumlah: 35000000 },
      { item: "Beban Operasional", jumlah: 15000000 },
      { item: "Beban Pemeliharaan", jumlah: 8000000 },
      { item: "Beban Listrik & Air", jumlah: 3000000 },
      { item: "Beban Lain-lain", jumlah: 2000000 },
    ],
  };

  const totalPendapatan = labaRugi.pendapatan.reduce(
    (sum, item) => sum + item.jumlah,
    0
  );
  const totalBeban = labaRugi.beban.reduce((sum, item) => sum + item.jumlah, 0);
  const labaRugiTotal = totalPendapatan - totalBeban;

  return (
    <div className="min-h-screen">
      <TopBar
        title="Laporan Keuangan"
        subtitle="Lihat dan unduh laporan keuangan"
      />

      <div className="p-8">
        <Link
          to="/keuangan"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Keuangan</span>
        </Link>

        {/* Filter */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jenis Laporan
              </label>
              <select
                value={jenis}
                onChange={(e) => setJenis(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="laba-rugi">Laba Rugi</option>
                <option value="neraca">Neraca</option>
                <option value="arus-kas">Arus Kas</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bulan
              </label>
              <select
                value={bulan}
                onChange={(e) => setBulan(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={String(i + 1)}>
                    {new Date(2026, i).toLocaleString("id-ID", {
                      month: "long",
                    })}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tahun
              </label>
              <select
                value={tahun}
                onChange={(e) => setTahun(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>
            <div className="flex items-end gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>PDF</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>Excel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Laporan Content */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          {/* Header Laporan */}
          <div className="text-center mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              BUMDes Desa Maju Bersama
            </h1>
            <h2 className="text-xl text-gray-700 mb-1">
              Laporan {jenis === "laba-rugi" ? "Laba Rugi" : jenis === "neraca" ? "Neraca" : "Arus Kas"}
            </h2>
            <p className="text-gray-600">
              Periode:{" "}
              {new Date(parseInt(tahun), parseInt(bulan) - 1).toLocaleString(
                "id-ID",
                { month: "long", year: "numeric" }
              )}
            </p>
          </div>

          {/* Laba Rugi Table */}
          {jenis === "laba-rugi" && (
            <div className="space-y-8">
              {/* Pendapatan */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                  PENDAPATAN
                </h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {labaRugi.pendapatan.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2 text-gray-700">{item.item}</td>
                        <td className="py-2 text-right text-gray-900">
                          {formatCurrency(item.jumlah)}
                        </td>
                      </tr>
                    ))}
                    <tr className="font-semibold border-t-2 border-gray-300">
                      <td className="py-3 text-gray-900">Total Pendapatan</td>
                      <td className="py-3 text-right text-gray-900">
                        {formatCurrency(totalPendapatan)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Beban */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                  BEBAN
                </h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {labaRugi.beban.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2 text-gray-700">{item.item}</td>
                        <td className="py-2 text-right text-gray-900">
                          {formatCurrency(item.jumlah)}
                        </td>
                      </tr>
                    ))}
                    <tr className="font-semibold border-t-2 border-gray-300">
                      <td className="py-3 text-gray-900">Total Beban</td>
                      <td className="py-3 text-right text-gray-900">
                        {formatCurrency(totalBeban)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Total */}
              <div className="pt-6 border-t-2 border-gray-900">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-lg font-semibold text-gray-900">
                    LABA BERSIH
                  </span>
                  <span
                    className={`text-2xl font-bold ${
                      labaRugiTotal >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {formatCurrency(labaRugiTotal)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-12">Dibuat oleh,</p>
              <p className="font-medium text-gray-900">Bendahara BUMDes</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-12">Disetujui oleh,</p>
              <p className="font-medium text-gray-900">Direktur BUMDes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
