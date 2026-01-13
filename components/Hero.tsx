
import React from 'react';
import { Language } from '../types';

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const translations = {
    PT: {
      title1: 'CONSTRUÍMOS',
      title2: 'O FUTURO',
      desc: 'Fornecemos as bases sólidas para os seus projetos. Materiais certificados e aconselhamento especializado para quem exige o melhor.',
      cta: 'CONHEÇA-NOS MELHOR',
      sectors: 'Setores de Atuação',
      sector1: 'PAVIMENTOS',
      sector2: 'REVESTIMENTOS',
      sector3: 'SANITÁRIOS',
      explore: 'EXPLORAR',
      location: 'ALBUFEIRA • ALGARVE'
    },
    EN: {
      title1: 'BUILDING',
      title2: 'THE FUTURE',
      desc: 'We provide the solid foundations for your projects. Certified materials and specialized advice for those who demand the best.',
      cta: 'LEARN MORE ABOUT US',
      sectors: 'Business Sectors',
      sector1: 'FLOORING',
      sector2: 'COATINGS',
      sector3: 'SANITARY WARE',
      explore: 'EXPLORE',
      location: 'ALBUFEIRA • ALGARVE'
    }
  };

  const t = translations[lang];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id.replace('#', ''));
    if (elem) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-full p-4 lg:p-6 flex flex-col relative overflow-hidden bg-white">
      <div className="relative flex-1 w-full rounded-[40px] lg:rounded-[56px] overflow-hidden bg-solfil-orange shadow-2xl flex flex-col pt-48 md:pt-48 lg:pt-64 pb-40 lg:pb-24">
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
            alt="Construção" 
            className="w-full h-full object-cover opacity-20 mix-blend-multiply grayscale scale-110 blur-[1px]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-solfil-orange via-solfil-orange/95 to-solfil-black/40"></div>
        </div>

        {/* Elementos Decorativos */}
        <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%] z-10 pointer-events-none overflow-visible flex items-center justify-center">
          <div className="absolute w-[180%] h-[180%] animate-spin-slow opacity-30">
            <svg className="w-full h-full text-white" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="49.8" fill="none" stroke="currentColor" strokeWidth="0.05" strokeDasharray="0.3 1.5" />
            </svg>
          </div>
          <div className="absolute w-full h-full flex items-center justify-center animate-float">
             <div className="absolute w-[85vw] h-[85vw] md:w-[55vw] md:h-[55vw] border-[1px] border-white/20 rounded-full backdrop-blur-[1px]"></div>
          </div>
        </div>
        
        {/* Conteúdo Principal */}
        <div className="relative z-20 container mx-auto px-6 md:px-16 lg:px-24 h-full flex flex-col justify-between">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10">
            
            {/* Bloco Esquerdo: Título e Descrição */}
            <div className="max-w-3xl space-y-6 md:space-y-12">
              <div className="space-y-2 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-100">
                <h1 className="text-[2.6rem] sm:text-5xl md:text-7xl lg:text-[92px] font-bold text-white leading-[0.85] tracking-tighter uppercase drop-shadow-2xl">
                  {t.title1}<br />
                  <span className="font-normal text-white/80 italic">{t.title2}</span>.
                </h1>
              </div>
              
              <div className="space-y-6 md:space-y-8 max-w-sm md:max-w-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <p className="text-lg md:text-2xl text-white/95 leading-tight font-normal tracking-tight">
                  {t.desc}
                </p>
                <a 
                  href="#sobre" 
                  onClick={(e) => handleScrollTo(e, '#sobre')}
                  className="bg-white text-solfil-orange px-8 md:px-10 py-4 md:py-5 rounded-[20px] font-black text-[9px] md:text-[10px] hover:bg-solfil-black hover:text-white transition-all shadow-2xl uppercase tracking-[0.3em] group flex items-center justify-center gap-4 w-full md:w-fit"
                >
                  {t.cta}
                </a>
              </div>
            </div>

            {/* Bloco Direito (ou inferior no Mobile): Info e Setores */}
            <div className="flex flex-col gap-4 border-l border-white/20 pl-6 lg:pl-0 lg:border-l-0 lg:border-r lg:pr-8 lg:items-end lg:text-right animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
               <div className="space-y-3">
                  <div className="flex items-center gap-3">
                     <span className="text-white font-black text-[8px] tracking-[0.35em] uppercase opacity-70">{t.location}</span>
                     <div className="w-6 h-[1px] bg-white/40"></div>
                  </div>
                  
                  <div className="space-y-1.5">
                     <span className="text-white/40 text-[8px] font-black tracking-[0.4em] uppercase block">{t.sectors}</span>
                     <div className="flex flex-wrap lg:justify-end items-center gap-x-2.5 gap-y-1 text-white text-[10px] font-bold uppercase tracking-[0.15em]">
                        <span className="hover:text-solfil-black transition-colors cursor-default">{t.sector1}</span>
                        <span className="text-white/20 text-[14px] leading-none">•</span>
                        <span className="hover:text-solfil-black transition-colors cursor-default">{t.sector2}</span>
                        <span className="text-white/20 text-[14px] leading-none">•</span>
                        <span className="hover:text-solfil-black transition-colors cursor-default">{t.sector3}</span>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* Rodapé do Hero: Explorar */}
        <a 
          href="#produtos" 
          onClick={(e) => handleScrollTo(e, '#produtos')}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 group flex flex-col items-center gap-3 transition-all"
        >
           <span className="text-white/40 font-black text-[7px] tracking-[0.5em] uppercase group-hover:text-white transition-colors">{t.explore}</span>
           <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 group-hover:border-white group-hover:text-white group-hover:bg-white/10 transition-all backdrop-blur-sm">
             <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
             </svg>
           </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
