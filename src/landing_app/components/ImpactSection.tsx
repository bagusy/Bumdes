import { TrendingUp, Users, Building2, DollarSign, Target, Award } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  const stats = [
    {
      icon: Building2,
      value: 5,
      suffix: '',
      label: 'Unit Usaha Aktif',
      description: 'Beroperasi dengan baik',
      color: 'emerald'
    },
    {
      icon: Users,
      value: 52,
      suffix: '+',
      label: 'Tenaga Kerja Desa',
      description: 'Masyarakat yang diberdayakan',
      color: 'blue'
    },
    {
      icon: DollarSign,
      value: 250,
      suffix: 'jt+',
      label: 'Kontribusi ke PADes',
      description: 'Pendapatan Asli Desa per tahun',
      color: 'amber'
    },
    {
      icon: Target,
      value: 1200,
      suffix: '+',
      label: 'Masyarakat Terlayani',
      description: 'Keluarga yang merasakan manfaat',
      color: 'purple'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'BUMDes Terbaik Kabupaten',
      year: '2024',
      description: 'Penghargaan dari Dinas PMD'
    },
    {
      icon: TrendingUp,
      title: 'Pertumbuhan Omzet 45%',
      year: '2025',
      description: 'Dibanding tahun sebelumnya'
    },
    {
      icon: Users,
      title: 'Kemitraan Strategis',
      year: '2025',
      description: 'Dengan 15+ mitra bisnis'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; from: string; to: string }> = {
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', from: 'from-emerald-500', to: 'to-emerald-600' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', from: 'from-blue-500', to: 'to-blue-600' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-600', from: 'from-amber-500', to: 'to-amber-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', from: 'from-purple-500', to: 'to-purple-600' }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="impact" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white shadow-sm rounded-full text-sm font-medium text-emerald-700 mb-4">
            Dampak & Kontribusi
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kontribusi Nyata untuk Desa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Angka-angka yang menunjukkan dampak positif BUMDes terhadap perekonomian dan kesejahteraan masyarakat desa
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const colorClasses = getColorClasses(stat.color);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses.from} ${colorClasses.to} rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                
                <div className={`text-4xl font-bold ${colorClasses.text} mb-2`}>
                  {isVisible ? <Counter end={stat.value} suffix={stat.suffix} /> : '0'}
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-1">{stat.label}</h4>
                <p className="text-xs text-gray-600">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pencapaian & Prestasi</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="text-emerald-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Target Pencapaian 2026</h3>
              <p className="text-emerald-100">Komitmen kami untuk terus berkembang dan memberikan manfaat lebih besar</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Unit Usaha Baru</span>
                  <span className="text-sm">60%</span>
                </div>
                <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Peningkatan Omzet</span>
                  <span className="text-sm">75%</span>
                </div>
                <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Tenaga Kerja</span>
                  <span className="text-sm">85%</span>
                </div>
                <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
