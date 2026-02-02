import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1752760023440-6e912553de03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjB2aWxsYWdlJTIwbWVldGluZyUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzcwMDE0MzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Rapat Koordinasi BUMDes',
      category: 'Organisasi'
    },
    {
      url: 'https://images.unsplash.com/photo-1623210412831-e29c8c5b81cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBjb21tdW5pdHklMjBhY3Rpdml0eSUyMGZlc3RpdmFsfGVufDF8fHx8MTc3MDAxNDM2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Festival Desa Tahunan',
      category: 'Kegiatan'
    },
    {
      url: 'https://images.unsplash.com/photo-1622572771591-6ca7813cc39d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMG1hcmtldCUyMGluZG9uZXNpYSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MDAxNDM2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pasar Tradisional Desa',
      category: 'Unit Usaha'
    },
    {
      url: 'https://images.unsplash.com/photo-1606750571914-10f69f4ce7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzcwMDE0MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Kegiatan Pertanian',
      category: 'Pemberdayaan'
    },
    {
      url: 'https://images.unsplash.com/photo-1616992873922-94702fd40c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjB3b3Jrc2hvcCUyMHRyYWluaW5nJTIwc2VtaW5hcnxlbnwxfHx8fDE3NzAwMTQzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pelatihan UMKM',
      category: 'Pemberdayaan'
    },
    {
      url: 'https://images.unsplash.com/photo-1644660628851-c4ab4d05b6f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwaW5kb25lc2lhJTIwZW50cmVwcmVuZXVyfGVufDF8fHx8MTc3MDAxNDM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pelaku UMKM Binaan',
      category: 'Unit Usaha'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white shadow-sm rounded-full text-sm font-medium text-emerald-700 mb-4">
            Galeri Kegiatan
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dokumentasi Aktivitas BUMDes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Momen dan kegiatan BUMDes dalam memberdayakan ekonomi dan masyarakat desa
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(image.url)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ikuti kegiatan dan perkembangan BUMDes</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
              Lihat Semua Foto
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Video Kegiatan
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] w-full">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
