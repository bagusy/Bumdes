import { Building2, Shield, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function AboutSection() {
  const highlights = [
    {
      icon: Building2,
      title: 'Dimiliki oleh Desa',
      description: 'Kepemilikan penuh oleh pemerintah desa dan masyarakat'
    },
    {
      icon: Users,
      title: 'Dikelola Profesional',
      description: 'Manajemen modern dengan SDM terlatih dan kompeten'
    },
    {
      icon: Shield,
      title: 'Transparan & Akuntabel',
      description: 'Laporan keuangan dan operasional terbuka untuk publik'
    },
    {
      icon: TrendingUp,
      title: 'Berorientasi Kesejahteraan',
      description: 'Keuntungan untuk pembangunan dan kemajuan desa'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752760023440-6e912553de03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdmlsbGFnZSUyMGNvbW11bml0eSUyMHdvcmtpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NzAwMTQxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kegiatan Masyarakat Desa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Shield className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">4+</p>
                  <p className="text-sm text-gray-600">Tahun Beroperasi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
              Tentang BUMDes
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Membangun Ekonomi Desa yang Berkelanjutan
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              BUMDes Sejahtera didirikan pada tahun 2020 berdasarkan Peraturan Desa Nomor 5 Tahun 2020 
              sebagai wadah pemberdayaan ekonomi masyarakat Desa Maju Makmur.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dengan visi menjadi motor penggerak ekonomi desa, kami mengelola berbagai unit usaha yang 
              memberikan manfaat langsung kepada masyarakat, menciptakan lapangan kerja, dan meningkatkan 
              Pendapatan Asli Desa (PADes).
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
