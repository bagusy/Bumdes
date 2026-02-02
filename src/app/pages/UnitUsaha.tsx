import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "@/app/components/TopBar";
import {
  Plus,
  Search,
  Eye,
  Edit,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

// Mock data
const unitUsahaData = [
  {
    id: 1,
    nama: "Simpan Pinjam",
    jenis: "Keuangan",
    modalAwal: 100000000,
    pendapatan: 45000000,
    status: "Aktif",
    pertumbuhan: 12.5,
  },
  {
    id: 2,
    nama: "Toko Sembako",
    jenis: "Perdagangan",
    modalAwal: 50000000,
    pendapatan: 32000000,
    status: "Aktif",
    pertumbuhan: 8.3,
  },
  {
    id: 3,
    nama: "Air Bersih",
    jenis: "Pelayanan",
    modalAwal: 200000000,
    pendapatan: 18000000,
    status: "Aktif",
    pertumbuhan: 5.2,
  },
  {
    id: 4,
    nama: "Pertanian Organik",
    jenis: "Pertanian",
    modalAwal: 75000000,
    pendapatan: 25000000,
    status: "Aktif",
    pertumbuhan: 15.8,
  },
  {
    id: 5,
    nama: "Pariwisata Desa",
    jenis: "Jasa",
    modalAwal: 150000000,
    pendapatan: 15000000,
    status: "Tidak Aktif",
    pertumbuhan: -2.5,
  },
];

export default function UnitUsaha() {
  const [searchTerm, setSearchTerm] = useState("");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const filteredData = unitUsahaData.filter(
    (unit) =>
      unit.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.jenis.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <TopBar
        title="Unit Usaha"
        subtitle="Kelola dan monitor semua unit usaha BUMDes"
      />

      <div className="p-8">
        {/* Header Actions */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari unit usaha..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Tambah Unit Usaha</span>
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Total Unit Usaha</p>
            <p className="text-3xl font-semibold text-gray-900">5</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Unit Aktif</p>
            <p className="text-3xl font-semibold text-green-600">4</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Total Modal</p>
            <p className="text-2xl font-semibold text-gray-900">
              {formatCurrency(575000000)}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Total Pendapatan</p>
            <p className="text-2xl font-semibold text-gray-900">
              {formatCurrency(135000000)}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nama Unit Usaha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jenis Usaha
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Modal Awal
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pendapatan
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pertumbuhan
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
                {filteredData.map((unit) => (
                  <tr key={unit.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">
                        {unit.nama}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {unit.jenis}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {formatCurrency(unit.modalAwal)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                      {formatCurrency(unit.pendapatan)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span
                        className={`inline-flex items-center gap-1 text-sm font-medium ${
                          unit.pertumbuhan >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {unit.pertumbuhan >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {Math.abs(unit.pertumbuhan)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                          unit.status === "Aktif"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {unit.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          to={`/unit-usaha/${unit.id}`}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Lihat Detail"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Tidak ada data unit usaha</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
