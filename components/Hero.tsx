
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="h-screen w-full p-4 lg:p-6 flex flex-col relative overflow-hidden bg-white">
      {/* Main Content Card */}
      <div className="relative flex-1 w-full rounded-[40px] lg:rounded-[56px] overflow-hidden bg-solfil-orange shadow-2xl flex flex-col items-center justify-center">
        
        {/* Background Image Layer with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
            alt="Construção e Materiais" 
            className="w-full h-full object-cover opacity-20 mix-blend-multiply grayscale scale-110 blur-[1px]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-solfil-orange via-solfil-orange/95 to-solfil-black/40"></div>
        </div>

        {/* Dynamic Circular Lines (Technical & Abstract Aesthetics - Positioned Top-Right) */}
        <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%] z-10 pointer-events-none overflow-visible flex items-center justify-center">
          
          {/* Layer 1: Technical Grid / Large Outer Spin */}
          <div className="absolute w-[180%] h-[180%] animate-spin-slow opacity-30">
            <svg className="w-full h-full text-white" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="49.8" fill="none" stroke="currentColor" strokeWidth="0.03" strokeDasharray="0.2 1" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.01" />
            </svg>
          </div>

          {/* Layer 2: Middle Dashed Circle with Reverse Spin */}
          <div className="absolute w-[130%] h-[130%] animate-spin-slow-reverse opacity-25">
            <svg className="w-full h-full text-white" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48.5" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="10 20" />
              <circle cx="50" cy="50" r="47.8" fill="none" stroke="currentColor" strokeWidth="0.05" />
            </svg>
          </div>

          {/* Layer 3: Floating Glass Core Rings */}
          <div className="absolute w-full h-full flex items-center justify-center animate-float">
             {/* Concentric glass rings */}
             <div className="absolute w-[85vw] h-[85vw] md:w-[55vw] md:h-[55vw] border-[0.3px] border-white/10 rounded-full backdrop-blur-[2px] shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]"></div>
             <div className="absolute w-[65vw] h-[65vw] md:w-[40vw] md:h-[40vw] border-[0.2px] border-white/5 rounded-full"></div>
             <div className="absolute w-[45vw] h-[45vw] md:w-[28vw] md:h-[28vw] border-[0.5px] border-white/30 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)] bg-white/[0.01]"></div>
             
             {/* Dynamic technical lines - Subtle rotation */}
             <div className="absolute w-[50vw] h-[50vw] border-[0.1px] border-white/5 rounded-full rotate-12"></div>
             <div className="absolute w-[50vw] h-[50vw] border-[0.1px] border-white/5 rounded-full -rotate-12"></div>
          </div>

          {/* Layer 4: Ambient Glows */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-white/10 blur-[120px] rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-white/5 blur-[100px] rounded-full animate-pulse-slow delay-700"></div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="relative z-20 container mx-auto px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl space-y-10">
            
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-100">
              <h1 className="text-4xl md:text-7xl lg:text-[100px] font-bold text-white leading-[0.85] tracking-tighter uppercase drop-shadow-2xl">
                CONSTRUÍMOS<br />
                <span className="font-light text-white/80 italic">O FUTURO</span>.
              </h1>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <div className="space-y-8 max-w-md">
                <p className="text-xl md:text-2xl text-white/95 leading-tight font-light tracking-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.1)]">
                  Fornecemos as bases sólidas para os seus projetos. Materiais certificados e aconselhamento especializado para quem exige o melhor.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#sobre" className="bg-white text-solfil-orange px-10 py-5 rounded-2xl font-black text-[10px] hover:bg-solfil-black hover:text-white transition-all shadow-2xl uppercase tracking-[0.3em] group flex items-center gap-4">
                    CONHEÇA-NOS MELHOR
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                 <span className="text-white/50 text-[9px] font-black tracking-[0.4em] uppercase">Setores de Atuação</span>
                 <div className="flex flex-wrap gap-x-6 gap-y-2 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span className="hover:text-solfil-black transition-colors cursor-default">PAVIMENTOS</span>
                    <span className="text-white/30">•</span>
                    <span className="hover:text-solfil-black transition-colors cursor-default">REVESTIMENTOS</span>
                    <span className="text-white/30">•</span>
                    <span className="hover:text-solfil-black transition-colors cursor-default">SANITÁRIOS</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Bottom Label - Albufeira Location */}
        <div className="absolute bottom-12 left-8 md:left-12 z-20 flex items-center gap-4 md:gap-6">
           <div className="w-8 md:w-12 h-[1px] bg-white/40"></div>
           <span className="text-white/60 font-black text-[8px] md:text-[9px] tracking-[0.4em] md:tracking-[0.6em] uppercase whitespace-nowrap [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">ALBUFEIRA • ALGARVE</span>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#produtos" 
          className="absolute bottom-10 right-8 md:bottom-12 md:right-12 z-20 group flex items-center gap-4 transition-all hover:opacity-100"
          aria-label="Descer para produtos"
        >
           <span className="text-white/50 font-black text-[8px] tracking-[0.5em] uppercase group-hover:text-white transition-colors hidden sm:inline">EXPLORAR</span>
           <div className="w-12 h-12 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center text-white/50 group-hover:border-white group-hover:text-white transition-all bg-white/5 backdrop-blur-sm shadow-xl hover:bg-white/10">
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
