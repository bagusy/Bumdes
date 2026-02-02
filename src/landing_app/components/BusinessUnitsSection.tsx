import { Palmtree, Droplets, ShoppingCart, Briefcase, Wifi, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function BusinessUnitsSection() {
  const businessUnits = [
    {
      icon: Palmtree,
      name: 'Wisata Desa',
      description: 'Pengelolaan destinasi wisata desa dengan paket wisata alam, budaya, dan kuliner khas desa',
      status: 'Aktif',
      image: 'https://images.unsplash.com/photo-1765087910098-fdf3d75049cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjB0b3VyaXNtJTIwbmF0dXJlJTIwdHJhdmVsfGVufDF8fHx8MTc3MDAxNDI5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'emerald'
    },
    {
      icon: Droplets,
      name: 'Air Bersih',
      description: 'Penyediaan dan distribusi air bersih untuk kebutuhan rumah tangga dan usaha di desa',
      status: 'Aktif',
      image: 'https://images.unsplash.com/photo-1759795075769-0ef64c53b6e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwc3VwcGx5JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzcwMDE0MjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'blue'
    },
    {
      icon: ShoppingCart,
      name: 'Toko Desa',
      description: 'Toko kebutuhan sehari-hari dengan harga terjangkau untuk melayani masyarakat desa',
      status: 'Aktif',
      image: 'https://images.unsplash.com/photo-1672862332798-7af2fb80651e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGdyb2NlcnklMjBzdG9yZSUyMHNob3B8ZW58MXx8fHwxNzcwMDE0MjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'amber'
    },
    {
      icon: Briefcase,
      name: 'Pengembangan UMKM',
      description: 'Pembinaan dan pemasaran produk UMKM lokal untuk meningkatkan ekonomi masyarakat',
      status: 'Aktif',
      image: 'https://images.unsplash.com/photo-1769430838012-8e1270d41f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwY3JhZnRzbWFuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY5OTI2NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'purple'
    },
    {
      icon: Wifi,
      name: 'Jasa Digital',
      description: 'Layanan internet, fotokopi, cetak, dan administrasi digital untuk masyarakat',
      status: 'Aktif',
      image: 'https://images.unsplash.com/photo-1767788543704-d68ce083048e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VydmljZSUyMHRlY2hub2xvZ3klMjBjb21wdXRlcnxlbnwxfHx8fDE3NzAwMTQyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="units" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Unit Usaha Kami
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan yang Kami Kelola
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai unit usaha yang memberikan manfaat langsung kepada masyarakat dan berkontribusi 
            pada pembangunan ekonomi desa
          </p>
        </div>

        {/* Business Units Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {businessUnits.map((unit, index) => {
            const colorClasses = getColorClasses(unit.color);
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
                      {unit.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <unit.icon className={colorClasses.text} size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{unit.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{unit.description}</p>
                  
                  <button className="flex items-center gap-2 text-emerald-600 text-sm font-medium group-hover:gap-3 transition-all">
                    Lihat Detail
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Tertarik bermitra dengan unit usaha kami?</p>
          <button className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}
