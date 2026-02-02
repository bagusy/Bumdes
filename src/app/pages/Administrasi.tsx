import { useState } from "react";
import TopBar from "@/app/components/TopBar";
import {
  Folder,
  FileText,
  Upload,
  Download,
  Eye,
  Trash2,
  Search,
  Plus,
} from "lucide-react";

const dokumenData = [
  {
    id: 1,
    nama: "AD-ART BUMDes 2024.pdf",
    kategori: "AD/ART",
    tanggal: "2024-01-15",
    ukuran: "2.5 MB",
    uploadBy: "Admin",
  },
  {
    id: 2,
    nama: "SK Pengurus BUMDes 2024-2026.pdf",
    kategori: "SK Pengurus",
    tanggal: "2024-01-20",
    ukuran: "1.8 MB",
    uploadBy: "Sekretaris",
  },
  {
    id: 3,
    nama: "Notulen Musdes Januari 2026.pdf",
    kategori: "Notulen Musyawarah",
    tanggal: "2026-01-10",
    ukuran: "1.2 MB",
    uploadBy: "Sekretaris",
  },
  {
    id: 4,
    nama: "Surat Masuk 001-2026.pdf",
    kategori: "Surat Masuk",
    tanggal: "2026-01-15",
    ukuran: "850 KB",
    uploadBy: "Admin",
  },
  {
    id: 5,
    nama: "Surat Keluar 005-2026.pdf",
    kategori: "Surat Keluar",
    tanggal: "2026-01-28",
    ukuran: "720 KB",
    uploadBy: "Sekretaris",
  },
];

const kategoriDokumen = [
  { nama: "AD/ART", count: 1, icon: FileText, color: "blue" },
  { nama: "SK Pengurus", count: 1, icon: FileText, color: "green" },
  { nama: "Notulen Musyawarah", count: 1, icon: FileText, color: "purple" },
  { nama: "Surat Masuk", count: 1, icon: FileText, color: "orange" },
  { nama: "Surat Keluar", count: 1, icon: FileText, color: "red" },
];

export default function Administrasi() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKategori, setSelectedKategori] = useState<string | null>(null);

  const filteredData = dokumenData.filter((dok) => {
    const matchSearch =
      dok.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dok.kategori.toLowerCase().includes(searchTerm.toLowerCase());
    const matchKategori = selectedKategori
      ? dok.kategori === selectedKategori
      : true;
    return matchSearch && matchKategori;
  });

  return (
    <div className="min-h-screen">
      <TopBar
        title="Administrasi & Dokumen"
        subtitle="Kelola dokumen dan arsip digital BUMDes"
      />

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Kategori */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Kategori</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedKategori(null)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    !selectedKategori
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Folder className="w-4 h-4" />
                    <span className="text-sm">Semua Dokumen</span>
                  </span>
                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                    {dokumenData.length}
                  </span>
                </button>

                {kategoriDokumen.map((kategori) => {
                  const Icon = kategori.icon;
                  return (
                    <button
                      key={kategori.nama}
                      onClick={() => setSelectedKategori(kategori.nama)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        selectedKategori === kategori.nama
                          ? "bg-green-50 text-green-700"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{kategori.nama}</span>
                      </span>
                      <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                        {kategori.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Upload Dokumen</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search & Actions */}
            <div className="mb-6 flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari dokumen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Document List */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nama Dokumen
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Kategori
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tanggal Upload
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ukuran
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Upload By
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredData.map((dok) => (
                      <tr key={dok.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <span className="text-sm text-gray-900">
                              {dok.nama}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {dok.kategori}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {new Date(dok.tanggal).toLocaleDateString("id-ID")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {dok.ukuran}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {dok.uploadBy}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                              title="Lihat"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors"
                              title="Unduh"
                            >
                              <Download className="w-4 h-4" />
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
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">Tidak ada dokumen ditemukan</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
