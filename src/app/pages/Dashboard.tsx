import TopBar from "@/app/components/TopBar";
import StatCard from "@/app/components/StatCard";
import {
  TrendingUp,
  DollarSign,
  Wallet,
  PiggyBank,
  ArrowUpRight,
  AlertCircle,
  Plus,
  FileText,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock data
const pendapatanPerUnit = [
  { name: "Simpan Pinjam", pendapatan: 45000000 },
  { name: "Toko Sembako", pendapatan: 32000000 },
  { name: "Air Bersih", pendapatan: 18000000 },
  { name: "Pertanian", pendapatan: 25000000 },
  { name: "Pariwisata", pendapatan: 15000000 },
];

const labaBulanan = [
  { bulan: "Jan", laba: 12000000 },
  { bulan: "Feb", laba: 15000000 },
  { bulan: "Mar", laba: 18000000 },
  { bulan: "Apr", laba: 14000000 },
  { bulan: "Mei", laba: 20000000 },
  { bulan: "Jun", laba: 22000000 },
];

const transaksiTerakhir = [
  {
    id: "TRX001",
    tanggal: "2026-02-02",
    unit: "Simpan Pinjam",
    keterangan: "Pencairan pinjaman",
    jumlah: 5000000,
    jenis: "masuk",
  },
  {
    id: "TRX002",
    tanggal: "2026-02-02",
    unit: "Toko Sembako",
    keterangan: "Pembelian stok barang",
    jumlah: 3500000,
    jenis: "keluar",
  },
  {
    id: "TRX003",
    tanggal: "2026-02-01",
    unit: "Air Bersih",
    keterangan: "Pembayaran bulanan pelanggan",
    jumlah: 2500000,
    jenis: "masuk",
  },
  {
    id: "TRX004",
    tanggal: "2026-02-01",
    unit: "Pertanian",
    keterangan: "Penjualan hasil panen",
    jumlah: 4200000,
    jenis: "masuk",
  },
  {
    id: "TRX005",
    tanggal: "2026-01-31",
    unit: "Pariwisata",
    keterangan: "Pemeliharaan fasilitas",
    jumlah: 1800000,
    jenis: "keluar",
  },
];

const notifikasi = [
  {
    id: 1,
    type: "warning",
    message: "Laporan keuangan bulan Januari belum dibuat",
  },
  {
    id: 2,
    type: "alert",
    message: "Saldo kas unit Air Bersih di bawah minimum",
  },
  {
    id: 3,
    type: "info",
    message: "Unit Pariwisata tidak ada transaksi 7 hari terakhir",
  },
];

export default function Dashboard() {
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
        title="Dashboard"
        subtitle="Ringkasan dan monitoring sistem BUMDes"
      />

      <div className="p-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Aset"
            value={formatCurrency(850000000)}
            icon={PiggyBank}
            trend={{ value: 12.5, isPositive: true }}
            color="green"
          />
          <StatCard
            title="Total Pendapatan"
            value={formatCurrency(135000000)}
            icon={TrendingUp}
            trend={{ value: 8.3, isPositive: true }}
            color="blue"
          />
          <StatCard
            title="Total Laba"
            value={formatCurrency(22000000)}
            icon={DollarSign}
            trend={{ value: 15.2, isPositive: true }}
            color="purple"
          />
          <StatCard
            title="Saldo Kas"
            value={formatCurrency(125000000)}
            icon={Wallet}
            color="orange"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Bar Chart - Pendapatan per Unit */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Pendapatan per Unit Usaha
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pendapatanPerUnit}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value: number) => formatCurrency(value)}
                />
                <Bar dataKey="pendapatan" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart - Laba Bulanan */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Tren Laba Bulanan
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={labaBulanan}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bulan" />
                <YAxis />
                <Tooltip
                  formatter={(value: number) => formatCurrency(value)}
                />
                <Line
                  type="monotone"
                  dataKey="laba"
                  stroke="#16a34a"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transaksi Terakhir */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Transaksi Terakhir
              </h2>
              <button className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1">
                Lihat Semua
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tanggal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unit Usaha
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Keterangan
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {transaksiTerakhir.map((trx) => (
                    <tr key={trx.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {trx.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(trx.tanggal).toLocaleDateString("id-ID")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {trx.unit}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {trx.keterangan}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                        <span
                          className={
                            trx.jenis === "masuk"
                              ? "text-green-600 font-medium"
                              : "text-red-600 font-medium"
                          }
                        >
                          {trx.jenis === "masuk" ? "+" : "-"}
                          {formatCurrency(trx.jumlah)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notifikasi & Quick Actions */}
          <div className="space-y-6">
            {/* Notifikasi */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                Notifikasi
              </h2>
              <div className="space-y-3">
                {notifikasi.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-3 rounded-lg border ${
                      notif.type === "warning"
                        ? "bg-yellow-50 border-yellow-200"
                        : notif.type === "alert"
                        ? "bg-red-50 border-red-200"
                        : "bg-blue-50 border-blue-200"
                    }`}
                  >
                    <p className="text-sm text-gray-700">{notif.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Aksi Cepat
              </h2>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Plus className="w-5 h-5" />
                  <span>Tambah Transaksi</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <FileText className="w-5 h-5" />
                  <span>Lihat Laporan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
