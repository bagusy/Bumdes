import { Target, CheckCircle2, Lightbulb } from 'lucide-react';

export function VisionMissionSection() {
  const missions = [
    'Mengembangkan potensi ekonomi lokal desa secara optimal dan berkelanjutan',
    'Meningkatkan pendapatan asli desa melalui pengelolaan unit usaha yang profesional',
    'Menciptakan lapangan kerja dan memberdayakan masyarakat desa',
    'Mendistribusikan manfaat ekonomi secara merata kepada seluruh lapisan masyarakat',
    'Menjadi mitra strategis pemerintah desa dalam pembangunan ekonomi'
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white shadow-sm rounded-full text-sm font-medium text-emerald-700 mb-4">
            Visi & Misi
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Arah dan Tujuan BUMDes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Komitmen kami dalam membangun desa yang mandiri dan sejahtera
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="text-white" size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
            
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-6 border border-emerald-200">
              <p className="text-gray-800 leading-relaxed font-medium">
                "Menjadi BUMDes yang profesional, mandiri, dan berdaya saing tinggi dalam 
                menggerakkan perekonomian desa menuju masyarakat yang sejahtera dan berkelanjutan."
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Misi</h3>
            
            <div className="space-y-4">
              {missions.map((mission, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-emerald-600" size={20} />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2020</div>
                <div className="text-sm text-gray-600">Tahun Berdiri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">5</div>
                <div className="text-sm text-gray-600">Unit Usaha Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Tenaga Kerja</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Milik Desa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
