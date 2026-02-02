import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1661011612365-3a8de3c91cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdmlsbGFnZSUyMGxhbmRzY2FwZSUyMHJpY2UlMjBmaWVsZHxlbnwxfHx8fDE3NzAwMTQxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Pemandangan Desa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-900/70 to-emerald-900/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-white font-medium">Badan Usaha Milik Desa Resmi</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            BUMDes Sejahtera
            <span className="block text-emerald-300 mt-2">Menggerakkan Ekonomi Desa</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Badan Usaha Milik Desa yang berdiri sejak 2020, berkomitmen memajukan perekonomian desa 
            melalui pengelolaan unit usaha yang profesional, transparan, dan berorientasi pada kesejahteraan masyarakat.
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-white">
              <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
              <span className="text-sm">Dikelola Profesional</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
              <span className="text-sm">Transparan & Akuntabel</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
              <span className="text-sm">Berdampak Nyata</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('units')}
              className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group"
            >
              Lihat Unit Usaha
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('hero')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-medium hover:bg-white/20 transition-all"
            >
              Masuk Sistem BUMDes
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
