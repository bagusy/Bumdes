import { useState } from "react";
import TopBar from "@/app/components/TopBar";
import { Package, Plus, Search, Edit, Trash2, TrendingDown } from "lucide-react";

const asetData = [
  {
    id: 1,
    nama: "Kendaraan Operasional",
    kategori: "Kendaraan",
    nilaiPerolehan: 150000000,
    tahunPerolehan: 2024,
    penyusutan: 15000000,
    nilaiSaatIni: 135000000,
    penanggungJawab: "Unit Usaha Umum",
  },
  {
    id: 2,
    nama: "Komputer & Printer",
    kategori: "Elektronik",
    nilaiPerolehan: 25000000,
    tahunPerolehan: 2025,
    penyusutan: 5000000,
    nilaiSaatIni: 20000000,
    penanggungJawab: "Sekretariat",
  },
  {
    id: 3,
    nama: "Mesin Pengolah Padi",
    kategori: "Mesin",
    nilaiPerolehan: 75000000,
    tahunPerolehan: 2023,
    penyusutan: 22500000,
    nilaiSaatIni: 52500000,
    penanggungJawab: "Unit Pertanian",
  },
  {
    id: 4,
    nama: "Infrastruktur Air Bersih",
    kategori: "Infrastruktur",
    nilaiPerolehan: 200000000,
    tahunPerolehan: 2023,
    penyusutan: 40000000,
    nilaiSaatIni: 160000000,
    penanggungJawab: "Unit Air Bersih",
  },
  {
    id: 5,
    nama: "Peralatan Toko",
    kategori: "Peralatan",
    nilaiPerolehan: 15000000,
    tahunPerolehan: 2024,
    penyusutan: 3000000,
    nilaiSaatIni: 12000000,
    penanggungJawab: "Unit Toko Sembako",
  },
];

export default function Inventaris() {
  const [searchTerm, setSearchTerm] = useState("");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const filteredData = asetData.filter(
    (aset) =>
      aset.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      aset.kategori.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalNilaiAset = asetData.reduce(
    (sum, aset) => sum + aset.nilaiSaatIni,
    0
  );
  const totalPenyusutan = asetData.reduce(
    (sum, aset) => sum + aset.penyusutan,
    0
  );

  return (
    <div className="min-h-screen">
      <TopBar
        title="Inventaris & Aset"
        subtitle="Kelola inventaris dan aset BUMDes"
      />

      <div className="p-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">Total Aset</p>
            </div>
            <p className="text-3xl font-semibold text-gray-900">
              {asetData.length}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <Package className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">Total Nilai Aset</p>
            </div>
            <p className="text-2xl font-semibold text-gray-900">
              {formatCurrency(totalNilaiAset)}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-100 rounded-lg">
                <TrendingDown className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-sm text-gray-600">Total Penyusutan</p>
            </div>
            <p className="text-2xl font-semibold text-gray-900">
              {formatCurrency(totalPenyusutan)}
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari aset..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Tambah Aset</span>
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nama Aset
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nilai Perolehan
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tahun
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Penyusutan
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nilai Saat Ini
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Penanggung Jawab
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((aset) => (
                  <tr key={aset.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">
                        {aset.nama}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {aset.kategori}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {formatCurrency(aset.nilaiPerolehan)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">
                      {aset.tahunPerolehan}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 text-right">
                      {formatCurrency(aset.penyusutan)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right font-medium">
                      {formatCurrency(aset.nilaiSaatIni)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {aset.penanggungJawab}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Hapus"
                        >
                          <Trash2 className="w-4 h-4" />
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
              <p className="text-gray-500">Tidak ada data aset</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
