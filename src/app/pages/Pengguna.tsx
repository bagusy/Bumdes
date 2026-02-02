import { useState } from "react";
import TopBar from "@/app/components/TopBar";
import { Plus, Search, Edit, Trash2, Key, UserCheck, UserX } from "lucide-react";

const userData = [
  {
    id: 1,
    nama: "Budi Santoso",
    email: "budi@bumdes.id",
    role: "Admin Utama",
    status: "Aktif",
    terakhirLogin: "2026-02-02 10:30",
  },
  {
    id: 2,
    nama: "Siti Aminah",
    email: "siti@bumdes.id",
    role: "Direktur BUMDes",
    status: "Aktif",
    terakhirLogin: "2026-02-02 09:15",
  },
  {
    id: 3,
    nama: "Ahmad Fadli",
    email: "ahmad@bumdes.id",
    role: "Bendahara",
    status: "Aktif",
    terakhirLogin: "2026-02-01 16:45",
  },
  {
    id: 4,
    nama: "Dewi Lestari",
    email: "dewi@bumdes.id",
    role: "Sekretaris",
    status: "Aktif",
    terakhirLogin: "2026-02-02 08:00",
  },
  {
    id: 5,
    nama: "Eko Prasetyo",
    email: "eko@bumdes.id",
    role: "Kepala Unit Usaha",
    status: "Aktif",
    terakhirLogin: "2026-01-30 14:20",
  },
  {
    id: 6,
    nama: "Rahmat Hidayat",
    email: "rahmat@desa.id",
    role: "Pengawas",
    status: "Aktif",
    terakhirLogin: "2026-01-28 10:00",
  },
];

const roleOptions = [
  "Admin Utama",
  "Direktur BUMDes",
  "Bendahara",
  "Sekretaris",
  "Kepala Unit Usaha",
  "Pengawas",
];

export default function Pengguna() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = userData.filter(
    (user) =>
      user.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <TopBar
        title="Pengguna & Hak Akses"
        subtitle="Kelola pengguna dan hak akses sistem"
      />

      <div className="p-8">
        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Total Pengguna</p>
            <p className="text-3xl font-semibold text-gray-900">
              {userData.length}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Pengguna Aktif</p>
            <p className="text-3xl font-semibold text-green-600">
              {userData.filter((u) => u.status === "Aktif").length}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-sm text-gray-600 mb-1">Role Terdaftar</p>
            <p className="text-3xl font-semibold text-gray-900">
              {roleOptions.length}
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari pengguna..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Tambah Pengguna</span>
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nama
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Terakhir Login
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-700 font-medium">
                            {user.nama.charAt(0)}
                          </span>
                        </div>
                        <div className="font-medium text-gray-900">
                          {user.nama}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                          user.status === "Aktif"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(user.terakhirLogin).toLocaleString("id-ID")}
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
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Reset Password"
                        >
                          <Key className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-orange-600 hover:bg-orange-50 rounded transition-colors"
                          title="Nonaktifkan"
                        >
                          <UserX className="w-4 h-4" />
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
              <p className="text-gray-500">Tidak ada data pengguna</p>
            </div>
          )}
        </div>

        {/* Role Permission Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Hak Akses Role
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-gray-900 mb-2">
                Admin Utama & Direktur BUMDes
              </p>
              <p className="text-gray-700">
                Akses penuh ke semua fitur dan data
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-2">Bendahara</p>
              <p className="text-gray-700">
                Akses penuh keuangan, laporan keuangan
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-2">Sekretaris</p>
              <p className="text-gray-700">
                Akses administrasi, dokumen, dan arsip
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-2">
                Kepala Unit Usaha
              </p>
              <p className="text-gray-700">
                Akses data unit usaha yang dikelola
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-2">Pengawas</p>
              <p className="text-gray-700">
                Akses read-only untuk monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
