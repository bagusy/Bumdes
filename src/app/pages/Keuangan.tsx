import { Link } from "react-router-dom";
import TopBar from "@/app/components/TopBar";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function Keuangan() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const menuKeuangan = [
    {
      title: "Kas Masuk",
      description: "Catat dan kelola semua transaksi pemasukan",
      icon: TrendingUp,
      path: "/keuangan/kas-masuk",
      color: "green",
      stats: formatCurrency(85000000),
    },
    {
      title: "Kas Keluar",
      description: "Catat dan kelola semua transaksi pengeluaran",
      icon: TrendingDown,
      path: "/keuangan/kas-keluar",
      color: "red",
      stats: formatCurrency(63000000),
    },
    {
      title: "Laporan Keuangan",
      description: "Lihat laporan laba rugi, neraca, dan arus kas",
      icon: FileText,
      path: "/keuangan/laporan",
      color: "blue",
      stats: "3 Laporan",
    },
  ];

  return (
    <div className="min-h-screen">
      <TopBar
        title="Keuangan"
        subtitle="Kelola transaksi dan laporan keuangan BUMDes"
      />

      <div className="p-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Kas Masuk</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {formatCurrency(85000000)}
                </p>
              </div>
            </div>
            <p className="text-xs text-green-600">+12.5% dari bulan lalu</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-red-100 rounded-lg">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Kas Keluar</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {formatCurrency(63000000)}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600">+5.3% dari bulan lalu</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Wallet className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Saldo Kas</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {formatCurrency(125000000)}
                </p>
              </div>
            </div>
            <p className="text-xs text-blue-600">Posisi per hari ini</p>
          </div>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuKeuangan.map((menu) => {
            const Icon = menu.icon;
            const colorClasses = {
              green: "bg-green-50 border-green-200 hover:bg-green-100",
              red: "bg-red-50 border-red-200 hover:bg-red-100",
              blue: "bg-blue-50 border-blue-200 hover:bg-blue-100",
            };
            const iconColors = {
              green: "text-green-600",
              red: "text-red-600",
              blue: "text-blue-600",
            };

            return (
              <Link
                key={menu.path}
                to={menu.path}
                className={`block border-2 rounded-lg p-6 transition-all ${
                  colorClasses[menu.color as keyof typeof colorClasses]
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 bg-white rounded-lg shadow-sm ${
                      iconColors[menu.color as keyof typeof iconColors]
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {menu.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{menu.description}</p>
                <p className="text-lg font-medium text-gray-900">
                  {menu.stats}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Quick Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Informasi Penting
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>
                Semua transaksi kas harus dicatat dengan bukti yang sah
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>
                Laporan keuangan bulanan harus diselesaikan paling lambat
                tanggal 5 bulan berikutnya
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>
                Untuk transaksi di atas Rp 10.000.000 wajib mendapat persetujuan
                direktur
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
