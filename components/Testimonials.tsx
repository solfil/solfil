
import React, { useRef } from 'react';
import { TestimonialItem, Language } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Riya Felix',
    location: 'Loulé',
    quote: 'Profissionais, criativos e fáceis de trabalhar. Do primeiro contacto à entrega final, o processo foi impecável. O resultado final superou as expectativas.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Ricardo Silva',
    location: 'Albufeira',
    quote: 'A Solfil transformou completamente a nossa percepção de fornecimento de obra. A atenção ao detalhe e o apoio técnico foram fundamentais para o sucesso do projeto.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'António Matos',
    location: 'Faro',
    quote: 'Procurávamos qualidade e confiança — e encontraram exatamente isso. Hoje a nossa casa é um reflexo do rigor que a Solfil coloca em tudo o que faz.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  }
];

const Testimonials: React.FC<{ lang: Language }> = ({ lang }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const translations = {
    PT: {
      tag: 'TESTEMUNHOS',
      title1: 'FALAM',
      title2: 'POR NÓS',
      prev: 'Anterior',
      next: 'Próximo'
    },
    EN: {
      tag: 'TESTIMONIALS',
      title1: 'THEY SPEAK',
      title2: 'FOR US',
      prev: 'Previous',
      next: 'Next'
    }
  };

  const t = translations[lang];

  const scroll = (dir: 'l' | 'r') => {
    if (scrollRef.current) {
      const scrollAmount = dir === 'l' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 gap-8">
        <div>
          <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-6 uppercase">{t.tag}</h3>
          <h2 className="text-5xl lg:text-7xl font-light text-solfil-black uppercase tracking-tighter leading-none">
            {t.title1} <span className="font-semibold italic">{t.title2}</span><span className="font-bold text-solfil-orange">.</span>
          </h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('l')} 
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-solfil-black hover:border-solfil-orange hover:text-solfil-orange transition-all"
            aria-label={t.prev}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('r')} 
            className="w-12 h-12 rounded-full bg-solfil-black text-white flex items-center justify-center hover:bg-solfil-orange transition-all shadow-lg"
            aria-label={t.next}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar gap-8 py-20 -my-20 -mx-6 px-6 lg:mx-0 lg:px-0">
        {testimonials.map((test) => (
          <div key={test.id} className="min-w-[320px] md:min-w-[420px] bg-white p-10 rounded-[40px] shadow-sm hover:shadow-[0_20px_50px_rgba(254,80,0,0.15)] hover:-translate-y-3 transition-all duration-700 border border-gray-100 flex flex-col justify-between group">
            <div className="relative pt-4">
               <div className="relative">
                  <svg className="absolute -top-6 -left-2 w-10 h-10 text-solfil-orange/10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.34315 15.3601 2 17.017 2H19.017C20.6738 2 22.017 3.34315 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V5C2.01697 3.34315 3.36011 2 5.01697 2H7.01697C8.67383 2 10.017 3.34315 10.017 5V15C10.017 18.3137 7.33068 21 4.01697 21H2.01697Z" />
                  </svg>
                  <p className="text-solfil-gray text-xl leading-relaxed font-light italic mb-10 relative z-10">"{test.quote}"</p>
               </div>
            </div>
            <div className="flex items-center gap-4 border-t border-gray-50 pt-8">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-solfil-black p-[2px] border border-gray-100">
                <img 
                  src={test.image} 
                  alt={test.name} 
                  className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>
              <div>
                <h4 className="font-bold text-lg text-solfil-black tracking-tight">{test.name}</h4>
                <p className="text-[10px] text-solfil-orange font-black uppercase tracking-widest">{test.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
