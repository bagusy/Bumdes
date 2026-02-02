import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

  const quickLinks = [
    { label: 'Tentang Kami', id: 'about' },
    { label: 'Unit Usaha', id: 'units' },
    { label: 'Visi & Misi', id: 'vision' },
    { label: 'Struktur Organisasi', id: 'organization' }
  ];

  const services = [
    { label: 'Wisata Desa', id: 'units' },
    { label: 'Air Bersih', id: 'units' },
    { label: 'Toko Desa', id: 'units' },
    { label: 'Pengembangan UMKM', id: 'units' }
  ];

  const resources = [
    { label: 'Galeri Kegiatan', id: 'gallery' },
    { label: 'Dokumen', id: 'documents' },
    { label: 'Kontak', id: 'contact' },
    { label: 'Login Admin', id: 'hero' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">BUMDes Sejahtera</h3>
                <p className="text-xs text-gray-400">Desa Maju Makmur</p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed mb-6">
              Badan Usaha Milik Desa yang profesional, transparan, dan berorientasi pada 
              kesejahteraan masyarakat desa.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Unit Usaha</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.id)}
                    className="text-sm hover:text-emerald-400 transition-colors"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  Jl. Raya Desa Maju Makmur No. 45<br />
                  Kec. Sejahtera, Kab. Maju
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-emerald-500 flex-shrink-0" />
                <span className="text-sm">(0274) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-emerald-500 flex-shrink-0" />
                <span className="text-sm">info@bumdes-sejahtera.desa.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-center md:text-left">
            <p>© {currentYear} BUMDes Sejahtera - Desa Maju Makmur. Seluruh hak cipta dilindungi.</p>
            <p className="text-gray-500 text-xs mt-1">
              Dibawah naungan Pemerintah Desa Maju Makmur, Kabupaten Maju
            </p>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Very Bottom - Legal */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-gray-500">
            <button className="hover:text-emerald-400 transition-colors">Kebijakan Privasi</button>
            <span className="hidden md:inline">•</span>
            <button className="hover:text-emerald-400 transition-colors">Syarat & Ketentuan</button>
            <span className="hidden md:inline">•</span>
            <button className="hover:text-emerald-400 transition-colors">Panduan Penggunaan</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
