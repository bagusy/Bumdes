import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "@/app/components/TopBar";
import { ArrowLeft, Upload, Save, Plus } from "lucide-react";

export default function KasMasuk() {
  const [formData, setFormData] = useState({
    tanggal: "",
    unitUsaha: "",
    kategori: "",
    nominal: "",
    keterangan: "",
    bukti: null as File | null,
  });

  const unitUsahaOptions = [
    "Simpan Pinjam",
    "Toko Sembako",
    "Air Bersih",
    "Pertanian Organik",
    "Pariwisata Desa",
  ];

  const kategoriOptions = [
    "Penjualan",
    "Angsuran Pinjaman",
    "Bunga",
    "Modal Masuk",
    "Hibah",
    "Lain-lain",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <TopBar
        title="Kas Masuk"
        subtitle="Catat transaksi pemasukan keuangan"
      />

      <div className="p-8">
        <Link
          to="/keuangan"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Keuangan</span>
        </Link>

        <div className="max-w-3xl">
          {/* Form Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Form Kas Masuk
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tanggal */}
              <div>
                <label
                  htmlFor="tanggal"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tanggal Transaksi <span className="text-red-600">*</span>
                </label>
                <input
                  id="tanggal"
                  type="date"
                  value={formData.tanggal}
                  onChange={(e) =>
                    setFormData({ ...formData, tanggal: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Unit Usaha */}
              <div>
                <label
                  htmlFor="unitUsaha"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Unit Usaha <span className="text-red-600">*</span>
                </label>
                <select
                  id="unitUsaha"
                  value={formData.unitUsaha}
                  onChange={(e) =>
                    setFormData({ ...formData, unitUsaha: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Pilih unit usaha</option>
                  {unitUsahaOptions.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>

              {/* Kategori */}
              <div>
                <label
                  htmlFor="kategori"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kategori <span className="text-red-600">*</span>
                </label>
                <select
                  id="kategori"
                  value={formData.kategori}
                  onChange={(e) =>
                    setFormData({ ...formData, kategori: e.target.value })
                  }
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                >
                  <option value="">Pilih kategori</option>
                  {kategoriOptions.map((kat) => (
                    <option key={kat} value={kat}>
                      {kat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Nominal */}
              <div>
                <label
                  htmlFor="nominal"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nominal <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    Rp
                  </span>
                  <input
                    id="nominal"
                    type="number"
                    value={formData.nominal}
                    onChange={(e) =>
                      setFormData({ ...formData, nominal: e.target.value })
                    }
                    placeholder="0"
                    className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Keterangan */}
              <div>
                <label
                  htmlFor="keterangan"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Keterangan <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="keterangan"
                  value={formData.keterangan}
                  onChange={(e) =>
                    setFormData({ ...formData, keterangan: e.target.value })
                  }
                  rows={4}
                  placeholder="Tuliskan keterangan transaksi..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Upload Bukti */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Bukti Transaksi
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">
                    Klik untuk upload atau drag & drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, PDF (max. 5MB)
                  </p>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        bukti: e.target.files?.[0] || null,
                      })
                    }
                    className="hidden"
                  />
                </div>
                {formData.bukti && (
                  <p className="text-sm text-green-600 mt-2">
                    File terpilih: {formData.bukti.name}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Transaksi</span>
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Simpan & Tambah Baru</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
