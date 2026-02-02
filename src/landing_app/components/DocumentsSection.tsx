import { FileText, Download, Shield, CheckCircle } from 'lucide-react';

export function DocumentsSection() {
  const documents = [
    {
      category: 'Dokumen Pendirian',
      icon: FileText,
      items: [
        { name: 'SK Pendirian BUMDes', year: '2020', size: '2.4 MB' },
        { name: 'Anggaran Dasar (AD)', year: '2020', size: '1.8 MB' },
        { name: 'Anggaran Rumah Tangga (ART)', year: '2020', size: '1.5 MB' }
      ]
    },
    {
      category: 'Laporan Keuangan',
      icon: Shield,
      items: [
        { name: 'Laporan Keuangan 2025', year: '2025', size: '3.2 MB' },
        { name: 'Laporan Keuangan 2024', year: '2024', size: '2.9 MB' },
        { name: 'Laporan Keuangan 2023', year: '2023', size: '2.7 MB' }
      ]
    },
    {
      category: 'Laporan Kegiatan',
      icon: CheckCircle,
      items: [
        { name: 'Laporan Tahunan 2025', year: '2025', size: '5.1 MB' },
        { name: 'Laporan Tahunan 2024', year: '2024', size: '4.8 MB' }
      ]
    }
  ];

  return (
    <section id="documents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Dokumen & Transparansi
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Keterbukaan Informasi Publik
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Akses dokumen resmi dan laporan BUMDes sebagai wujud transparansi dan akuntabilitas kepada masyarakat
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-200">
            <Shield className="text-emerald-600" size={20} />
            <span className="text-sm font-medium text-emerald-700">Teraudit</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
            <CheckCircle className="text-blue-600" size={20} />
            <span className="text-sm font-medium text-blue-700">Akuntabel</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg border border-purple-200">
            <FileText className="text-purple-600" size={20} />
            <span className="text-sm font-medium text-purple-700">Transparan</span>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {documents.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <category.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg">{category.category}</h3>
                </div>
              </div>

              {/* Documents List */}
              <div className="p-4">
                <div className="space-y-3">
                  {category.items.map((doc, docIndex) => (
                    <div
                      key={docIndex}
                      className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer border border-gray-200 hover:border-emerald-300"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm truncate mb-1">
                          {doc.name}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                          <span>{doc.year}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                      <button className="ml-3 w-9 h-9 bg-emerald-100 group-hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                        <Download className="text-emerald-600 group-hover:text-white" size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-lg mb-3">Komitmen Transparansi</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  BUMDes Sejahtera berkomitmen penuh terhadap transparansi dan akuntabilitas publik. 
                  Seluruh dokumen dan laporan keuangan dapat diakses oleh masyarakat sebagai bentuk 
                  keterbukaan informasi sesuai dengan peraturan perundang-undangan yang berlaku.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="text-emerald-600" size={16} />
                    <span>Laporan Berkala</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="text-emerald-600" size={16} />
                    <span>Audit Independen</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="text-emerald-600" size={16} />
                    <span>Akses Publik</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Butuh dokumen lain atau informasi lebih lanjut?</p>
          <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
            Hubungi Sekretariat
          </button>
        </div>
      </div>
    </section>
  );
}
