
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const logoUrl = "https://raw.githubusercontent.com/solfil/solfil/solfil-assets/assets/logo.png";

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      
      if (elem) {
        const offset = 80;
        const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const translations = {
    PT: {
      links: [
        { name: 'PRODUTOS', href: '#produtos' },
        { name: 'SOBRE', href: '#sobre' },
        { name: 'MARCAS', href: '#marcas' },
        { name: 'GALERIA', href: '#galeria' },
        { name: 'CONTACTOS', href: '#contactos' },
      ],
      cta: 'ORÇAMENTO',
    },
    EN: {
      links: [
        { name: 'PRODUCTS', href: '#produtos' },
        { name: 'ABOUT', href: '#sobre' },
        { name: 'BRANDS', href: '#marcas' },
        { name: 'GALLERY', href: '#galeria' },
        { name: 'CONTACTS', href: '#contactos' },
      ],
      cta: 'QUOTE',
    }
  };

  const t = translations[lang];

  const LanguageToggle = ({ isMobile = false }) => (
    <div 
      className={`relative flex items-center bg-black/5 border border-black/10 p-1 rounded-full cursor-pointer transition-all duration-300 hover:border-black/30 select-none ${isMobile ? 'scale-150' : 'scale-100'}`}
      onClick={() => setLang(lang === 'PT' ? 'EN' : 'PT')}
      role="button"
      aria-label="Alternar Idioma"
    >
      <div 
        className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-solfil-orange rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          lang === 'EN' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      <div className={`relative z-10 w-9 h-6 flex items-center justify-center text-[10px] lg:text-[11px] font-black transition-colors duration-300 ${lang === 'PT' ? 'text-white' : 'text-black/40'}`}>
        PT
      </div>
      <div className={`relative z-10 w-9 h-6 flex items-center justify-center text-[10px] lg:text-[11px] font-black transition-colors duration-300 ${lang === 'EN' ? 'text-white' : 'text-black/40'}`}>
        EN
      </div>
    </div>
  );

  return (
    <>
      <div className={`fixed left-0 right-0 px-6 md:px-12 transition-all duration-700 ease-out ${
        isOpen ? 'top-0 z-[10001]' : (scrolled ? 'top-4 z-[50]' : 'top-6 md:top-[60px] z-[50]')
      }`}>
        <header 
          className={`mx-auto max-w-6xl transition-all duration-700 ease-in-out will-change-transform border ${
            isOpen 
            ? 'bg-white/95 border-black/5 py-4 px-6 rounded-[40px] backdrop-blur-xl shadow-none' 
            : (scrolled 
                ? 'bg-white/50 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-white/40 py-2.5 pl-6 pr-2.5 rounded-full' 
                : 'bg-white/40 backdrop-blur-sm border-white/50 py-3.5 md:py-5 pl-8 md:pl-10 pr-3.5 md:pr-6 rounded-full shadow-lg')
          }`}
        >
          <div className="flex justify-between items-center relative">
            
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')} 
              className={`relative transition-all duration-500 hover:opacity-80 flex items-center ${isOpen ? 'z-[10010]' : 'z-[210]'}`}
              aria-label="Solfil Home"
            >
              <img 
                src={logoUrl} 
                alt="Solfil" 
                className={`h-5 sm:h-6 md:h-8 w-auto object-contain brightness-0 transition-all duration-700 ${scrolled ? 'scale-90' : 'scale-100'}`}
              />
            </a>

            <nav className="hidden lg:flex items-center gap-x-8">
              {t.links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[11px] font-bold tracking-[0.15em] transition-all duration-300 uppercase text-black/60 hover:text-black relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-solfil-orange transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              <div className="h-3 w-px bg-black/10 mx-1"></div>

              <LanguageToggle />

              <a 
                href="#contactos" 
                onClick={(e) => handleLinkClick(e, '#contactos')} 
                className="ml-2 px-8 py-3 rounded-full text-[10.5px] font-black uppercase tracking-[0.2em] transition-all bg-black text-white hover:bg-solfil-orange hover:text-white shadow-md active:scale-95"
              >
                {t.cta}
              </a>
            </nav>

            <button 
              className={`lg:hidden relative h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                isOpen ? 'z-[10010] text-black bg-black/5' : 'text-black bg-black/5 hover:bg-black/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            >
              {isOpen ? (
                <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              ) : (
                <div className="w-5 h-3 flex flex-col justify-between items-end">
                  <span className="h-[1.5px] bg-black transition-all duration-300 w-5"></span>
                  <span className="h-[1.5px] bg-black transition-all duration-300 w-3"></span>
                  <span className="h-[1.5px] bg-black transition-all duration-300 w-4"></span>
                </div>
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Overlay Menu */}
      <div 
        className={`fixed inset-0 z-[10000] bg-white/95 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full pt-32 pb-12 px-10">
          <nav className="flex flex-col gap-6 items-center">
            {t.links.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className={`text-2xl font-light tracking-tighter text-black/80 hover:text-solfil-orange transition-all duration-500 uppercase ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto flex flex-col items-center gap-12">
            <div className={`transition-all duration-1000 delay-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
              <LanguageToggle isMobile />
            </div>
            
            <a 
              href="#contactos" 
              onClick={(e) => handleLinkClick(e, '#contactos')}
              className={`w-full max-w-xs py-5 rounded-3xl bg-solfil-orange text-white text-center font-black text-xs uppercase tracking-[0.3em] shadow-2xl transition-all duration-700 delay-700 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
