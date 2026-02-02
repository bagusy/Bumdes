import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import TopBar from "@/app/components/TopBar";
import { ArrowLeft, TrendingUp, DollarSign, Target, Users } from "lucide-react";
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
} from "recharts";

// Mock data
const unitDetail = {
  id: 1,
  nama: "Simpan Pinjam",
  jenis: "Keuangan",
  modalAwal: 100000000,
  pendapatan: 45000000,
  status: "Aktif",
  deskripsi:
    "Unit usaha simpan pinjam yang melayani kebutuhan pembiayaan masyarakat desa dengan bunga rendah dan prosedur mudah.",
  pengelola: "Budi Santoso",
  jumlahAnggota: 125,
  targetBulanan: 50000000,
};

const keuanganBulanan = [
  { bulan: "Jan", pendapatan: 38000000, pengeluaran: 25000000, laba: 13000000 },
  { bulan: "Feb", pendapatan: 42000000, pengeluaran: 27000000, laba: 15000000 },
  { bulan: "Mar", pendapatan: 45000000, pengeluaran: 28000000, laba: 17000000 },
  { bulan: "Apr", pendapatan: 40000000, pengeluaran: 26000000, laba: 14000000 },
  { bulan: "Mei", pendapatan: 48000000, pengeluaran: 29000000, laba: 19000000 },
  { bulan: "Jun", pendapatan: 45000000, pengeluaran: 28000000, laba: 17000000 },
];

const transaksiTerakhir = [
  {
    id: 1,
    tanggal: "2026-02-02",
    jenis: "Masuk",
    keterangan: "Pencairan pinjaman - Ahmad",
    jumlah: 5000000,
  },
  {
    id: 2,
    tanggal: "2026-02-02",
    jenis: "Masuk",
    keterangan: "Angsuran pinjaman - Siti",
    jumlah: 1500000,
  },
  {
    id: 3,
    tanggal: "2026-02-01",
    jenis: "Keluar",
    keterangan: "Biaya operasional",
    jumlah: 800000,
  },
  {
    id: 4,
    tanggal: "2026-02-01",
    jenis: "Masuk",
    keterangan: "Bunga pinjaman",
    jumlah: 2500000,
  },
  {
    id: 5,
    tanggal: "2026-01-31",
    jenis: "Masuk",
    keterangan: "Simpanan wajib anggota",
    jumlah: 3750000,
  },
];

export default function UnitUsahaDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("profil");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const realisasi = (unitDetail.pendapatan / unitDetail.targetBulanan) * 100;

  return (
    <div className="min-h-screen">
      <TopBar title={unitDetail.nama} subtitle={`Detail Unit Usaha`} />

      <div className="p-8">
        {/* Back Button */}
        <Link
          to="/unit-usaha"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Daftar Unit Usaha</span>
        </Link>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">Modal Awal</p>
            </div>
            <p className="text-2xl font-semibold text-gray-900">
              {formatCurrency(unitDetail.modalAwal)}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">Pendapatan</p>
            </div>
            <p className="text-2xl font-semibold text-gray-900">
              {formatCurrency(unitDetail.pendapatan)}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600">Realisasi Target</p>
            </div>
            <p className="text-2xl font-semibold text-gray-900">
              {realisasi.toFixed(1)}%
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600">Jumlah Anggota</p>
            </div>
            <p className="text-2xl font-semibold text-gray-900">
              {unitDetail.jumlahAnggota}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {["profil", "keuangan", "target", "riwayat"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-green-600 text-green-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Profil Tab */}
            {activeTab === "profil" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Unit Usaha
                  </label>
                  <p className="text-gray-900">{unitDetail.nama}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Usaha
                  </label>
                  <p className="text-gray-900">{unitDetail.jenis}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi
                  </label>
                  <p className="text-gray-900">{unitDetail.deskripsi}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pengelola
                  </label>
                  <p className="text-gray-900">{unitDetail.pengelola}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {unitDetail.status}
                  </span>
                </div>
              </div>
            )}

            {/* Keuangan Tab */}
            {activeTab === "keuangan" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Tren Keuangan Bulanan
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={keuanganBulanan}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="bulan" />
                      <YAxis />
                      <Tooltip
                        formatter={(value: number) => formatCurrency(value)}
                      />
                      <Line
                        type="monotone"
                        dataKey="pendapatan"
                        stroke="#16a34a"
                        name="Pendapatan"
                      />
                      <Line
                        type="monotone"
                        dataKey="pengeluaran"
                        stroke="#dc2626"
                        name="Pengeluaran"
                      />
                      <Line
                        type="monotone"
                        dataKey="laba"
                        stroke="#2563eb"
                        name="Laba"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">
                      Total Pendapatan
                    </p>
                    <p className="text-xl font-semibold text-green-700">
                      {formatCurrency(258000000)}
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">
                      Total Pengeluaran
                    </p>
                    <p className="text-xl font-semibold text-red-700">
                      {formatCurrency(163000000)}
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Total Laba</p>
                    <p className="text-xl font-semibold text-blue-700">
                      {formatCurrency(95000000)}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Target Tab */}
            {activeTab === "target" && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Bulanan
                    </label>
                    <p className="text-2xl font-semibold text-gray-900">
                      {formatCurrency(unitDetail.targetBulanan)}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Realisasi Bulan Ini
                    </label>
                    <p className="text-2xl font-semibold text-green-600">
                      {formatCurrency(unitDetail.pendapatan)}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {realisasi.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-green-600 h-3 rounded-full transition-all"
                      style={{ width: `${Math.min(realisasi, 100)}%` }}
                    ></div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    {realisasi >= 100
                      ? "🎉 Target tercapai! Pertahankan kinerja ini."
                      : `Butuh ${formatCurrency(
                          unitDetail.targetBulanan - unitDetail.pendapatan
                        )} lagi untuk mencapai target bulan ini.`}
                  </p>
                </div>
              </div>
            )}

            {/* Riwayat Tab */}
            {activeTab === "riwayat" && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Transaksi Terakhir
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Tanggal
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Jenis
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Keterangan
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          Jumlah
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {transaksiTerakhir.map((trx) => (
                        <tr key={trx.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">
                            {new Date(trx.tanggal).toLocaleDateString("id-ID")}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                trx.jenis === "Masuk"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {trx.jenis}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {trx.keterangan}
                          </td>
                          <td className="px-4 py-3 text-sm text-right font-medium">
                            <span
                              className={
                                trx.jenis === "Masuk"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }
                            >
                              {trx.jenis === "Masuk" ? "+" : "-"}
                              {formatCurrency(trx.jumlah)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}