import { Users, UserCircle, Briefcase, Calculator } from 'lucide-react';

export function OrganizationSection() {
  const organizationStructure = [
    {
      level: 1,
      positions: [
        {
          icon: Users,
          title: 'Penasihat',
          name: 'Kepala Desa Maju Makmur',
          color: 'purple'
        }
      ]
    },
    {
      level: 2,
      positions: [
        {
          icon: UserCircle,
          title: 'Direktur',
          name: 'Pengelola Utama BUMDes',
          color: 'emerald'
        }
      ]
    },
    {
      level: 3,
      positions: [
        {
          icon: Briefcase,
          title: 'Sekretaris',
          name: 'Administrasi & Kearsipan',
          color: 'blue'
        },
        {
          icon: Calculator,
          title: 'Bendahara',
          name: 'Keuangan & Akuntansi',
          color: 'amber'
        }
      ]
    }
  ];

  const units = [
    { name: 'Unit Wisata Desa', manager: 'Manajer Unit Wisata' },
    { name: 'Unit Air Bersih', manager: 'Manajer Unit Air' },
    { name: 'Unit Toko Desa', manager: 'Manajer Unit Toko' },
    { name: 'Unit UMKM', manager: 'Manajer Unit UMKM' },
    { name: 'Unit Jasa Digital', manager: 'Manajer Unit Digital' }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      purple: { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-700' },
      emerald: { bg: 'bg-emerald-100', border: 'border-emerald-300', text: 'text-emerald-700' },
      blue: { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700' },
      amber: { bg: 'bg-amber-100', border: 'border-amber-300', text: 'text-amber-700' }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="organization" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Struktur Organisasi
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pengurus BUMDes Sejahtera
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Struktur organisasi yang profesional untuk mengelola BUMDes secara efektif dan akuntabel
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Organization Chart */}
          <div className="space-y-8 mb-12">
            {organizationStructure.map((level, levelIndex) => (
              <div key={levelIndex} className="flex flex-col items-center">
                <div className={`grid ${level.positions.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-6 w-full max-w-3xl`}>
                  {level.positions.map((position, posIndex) => {
                    const colorClasses = getColorClasses(position.color);
                    return (
                      <div
                        key={posIndex}
                        className={`bg-white rounded-xl p-6 border-2 ${colorClasses.border} shadow-lg hover:shadow-xl transition-shadow`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-14 h-14 ${colorClasses.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <position.icon className={colorClasses.text} size={28} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg mb-1">{position.title}</h3>
                            <p className="text-sm text-gray-600">{position.name}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Connector Line */}
                {levelIndex < organizationStructure.length - 1 && (
                  <div className="w-0.5 h-8 bg-gray-300 my-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm text-gray-600">Unit-Unit Usaha</span>
            </div>
          </div>

          {/* Business Units */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {units.map((unit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white rounded-lg p-4 border border-emerald-200 hover:border-emerald-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-white" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm truncate">{unit.name}</h4>
                    <p className="text-xs text-gray-600">{unit.manager}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tata Kelola Organisasi</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Struktur organisasi BUMDes mengacu pada Peraturan Menteri Desa PDTT Nomor 4 Tahun 2015 
                  tentang Pendirian, Pengurusan dan Pengelolaan, dan Pembubaran Badan Usaha Milik Desa. 
                  Pengurus BUMDes dipilih melalui musyawarah desa dan bertanggung jawab kepada pemerintah desa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
