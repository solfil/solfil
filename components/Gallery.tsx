
import React, { useState } from 'react';
import { Language } from '../types';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
  gridClass: string;
}

const galleryImages: GalleryImage[] = [
  { 
    id: 1, 
    url: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Estrutura Industrial', 
    category: 'ESTRUTURA',
    gridClass: 'col-span-2 row-span-1 aspect-video lg:aspect-auto'
  },
  { 
    id: 2, 
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Betão e Ferro', 
    category: 'MATERIAIS',
    gridClass: 'col-span-2 lg:col-span-4 row-span-2 aspect-square lg:aspect-auto'
  },
  { 
    id: 3, 
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Obra Residencial', 
    category: 'PROJETOS',
    gridClass: 'col-span-2 row-span-2 aspect-[3/4] lg:aspect-auto'
  },
  { 
    id: 4, 
    url: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Fachada Moderna', 
    category: 'REVESTIMENTOS',
    gridClass: 'col-span-2 row-span-2 aspect-[3/5] lg:aspect-auto'
  },
  { 
    id: 5, 
    url: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Pavimentos Cerâmicos', 
    category: 'PAVIMENTOS',
    gridClass: 'col-span-1 lg:col-span-1 row-span-1 aspect-square lg:aspect-auto'
  },
  { 
    id: 6, 
    url: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=1200', 
    alt: 'Equipamentos Sanitários', 
    category: 'BANHOS',
    gridClass: 'col-span-3 lg:col-span-3 row-span-1 aspect-video lg:aspect-auto'
  },
];

const Gallery: React.FC<{ lang: Language }> = ({ lang }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const translations = {
    PT: {
      tag: 'GALERIA',
      title1: 'IMAGENS QUE',
      title2: 'INSPIRAM',
      prev: 'Anterior',
      next: 'Próximo'
    },
    EN: {
      tag: 'GALLERY',
      title1: 'IMAGES THAT',
      title2: 'INSPIRE',
      prev: 'Previous',
      next: 'Next'
    }
  };

  const t = translations[lang];

  const openLightbox = (img: GalleryImage) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-12 lg:mb-20">
        <div>
          <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-6 uppercase">{t.tag}</h3>
          <h2 className="text-5xl lg:text-7xl font-light text-solfil-black uppercase tracking-tighter leading-none">
            {t.title1} <span className="font-semibold italic">{t.title2}</span><span className="font-bold text-solfil-orange">.</span>
          </h2>
        </div>
        
        <div className="hidden md:flex gap-4">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-solfil-black hover:border-solfil-orange hover:text-solfil-orange transition-all" aria-label={t.prev}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-full bg-solfil-black text-white flex items-center justify-center hover:bg-solfil-orange transition-all shadow-lg" aria-label={t.next}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-8 grid-rows-none lg:grid-rows-3 gap-4 lg:gap-6 min-h-[800px]">
        {galleryImages.map((img) => (
          <div 
            key={img.id} 
            onClick={() => openLightbox(img)}
            className={`${img.gridClass} group relative rounded-[24px] lg:rounded-[40px] overflow-hidden bg-solfil-black cursor-pointer shadow-sm transition-all duration-700 hover:shadow-[0_20px_50px_rgba(254,80,0,0.15)] hover:-translate-y-3`}
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = '0';
              }}
            />
            <div className="absolute inset-0 bg-solfil-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
               <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
               </div>
            </div>
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
               <span className="bg-solfil-orange text-white text-[8px] font-black tracking-[0.4em] px-4 py-2 rounded-full uppercase">
                 {img.category}
               </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-solfil-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-4 bg-white/5 rounded-full"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="max-w-6xl w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[85vh] overflow-hidden rounded-[32px] lg:rounded-[48px] shadow-2xl bg-solfil-black">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt} 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
            </div>
            <div className="mt-8 text-center space-y-3">
              <span className="text-solfil-orange text-[10px] font-black tracking-[0.5em] uppercase">{selectedImage.category}</span>
              <h4 className="text-white text-2xl lg:text-4xl font-light tracking-tighter uppercase">{selectedImage.alt}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
