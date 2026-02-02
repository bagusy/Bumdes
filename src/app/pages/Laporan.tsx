import { useState } from "react";
import TopBar from "@/app/components/TopBar";
import { Download, Calendar } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Mock data untuk monitoring
const kinerjaBulanan = [
  { bulan: "Jan", pendapatan: 120000000, laba: 35000000, target: 100000000 },
  { bulan: "Feb", pendapatan: 135000000, laba: 42000000, target: 100000000 },
  { bulan: "Mar", pendapatan: 145000000, laba: 48000000, target: 100000000 },
  { bulan: "Apr", pendapatan: 128000000, laba: 38000000, target: 100000000 },
  { bulan: "Mei", pendapatan: 158000000, laba: 52000000, target: 100000000 },
  { bulan: "Jun", pendapatan: 165000000, laba: 55000000, target: 100000000 },
];

const laporanBulanan = [
  {
    bulan: "Februari 2026",
    status: "Selesai",
    totalPendapatan: 135000000,
    totalBeban: 93000000,
    labaBersih: 42000000,
    tanggalSelesai: "2026-03-05",
  },
  {
    bulan: "Januari 2026",
    status: "Selesai",
    totalPendapatan: 120000000,
    totalBeban: 85000000,
    labaBersih: 35000000,
    tanggalSelesai: "2026-02-04",
  },
  {
    bulan: "Desember 2025",
    status: "Selesai",
    totalPendapatan: 145000000,
    totalBeban: 95000000,
    labaBersih: 50000000,
    tanggalSelesai: "2026-01-03",
  },
];

export default function Laporan() {
  const [periode, setPeriode] = useState("6bulan");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen">
      <TopBar
        title="Laporan & Monitoring"
        subtitle="Pantau kinerja dan laporan BUMDes"
      />

      <div className="p-8">
        {/* Info Banner */}
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Mode Read-Only:</strong> Halaman ini khusus untuk monitoring
            dan pelaporan. Data dapat diunduh tetapi tidak dapat diubah.
          </p>
        </div>

        {/* Filter & Export */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">
              Periode:
            </label>
            <select
              value={periode}
              onChange={(e) => setPeriode(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="3bulan">3 Bulan Terakhir</option>
              <option value="6bulan">6 Bulan Terakhir</option>
              <option value="1tahun">1 Tahun Terakhir</option>
            </select>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Unduh Laporan</span>
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Total Pendapatan</p>
            <p className="text-2xl font-semibold text-gray-900">
              {formatCurrency(851000000)}
            </p>
            <p className="text-xs text-green-600 mt-2">+18.5% YoY</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Total Laba</p>
            <p className="text-2xl font-semibold text-gray-900">
              {formatCurrency(270000000)}
            </p>
            <p className="text-xs text-green-600 mt-2">+22.3% YoY</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Margin Laba</p>
            <p className="text-2xl font-semibold text-gray-900">31.7%</p>
            <p className="text-xs text-green-600 mt-2">+2.1% YoY</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Total Aset</p>
            <p className="text-2xl font-semibold text-gray-900">
              {formatCurrency(850000000)}
            </p>
            <p className="text-xs text-green-600 mt-2">+12.8% YoY</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Grafik Kinerja */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Grafik Kinerja Bulanan
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={kinerjaBulanan}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bulan" />
                <YAxis />
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pendapatan"
                  stroke="#16a34a"
                  name="Pendapatan"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="laba"
                  stroke="#2563eb"
                  name="Laba"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#f59e0b"
                  name="Target"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Grafik Perbandingan */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Perbandingan Pendapatan vs Laba
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={kinerjaBulanan}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bulan" />
                <YAxis />
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Legend />
                <Bar dataKey="pendapatan" fill="#16a34a" name="Pendapatan" />
                <Bar dataKey="laba" fill="#2563eb" name="Laba" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Laporan Bulanan */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Ringkasan Laporan Bulanan
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Periode
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Pendapatan
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Beban
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Laba Bersih
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {laporanBulanan.map((laporan, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">
                            {laporan.bulan}
                          </div>
                          <div className="text-xs text-gray-500">
                            Selesai: {new Date(laporan.tanggalSelesai).toLocaleDateString("id-ID")}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {formatCurrency(laporan.totalPendapatan)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {formatCurrency(laporan.totalBeban)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                      <span className="font-medium text-green-600">
                        {formatCurrency(laporan.labaBersih)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {laporan.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Lihat Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
