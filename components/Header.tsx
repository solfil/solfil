
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      menuLabel: 'Abrir Menu',
      closeLabel: 'Fechar Menu'
    },
    EN: {
      links: [
        { name: 'PRODUCTS', href: '#produtos' },
        { name: 'ABOUT', href: '#sobre' },
        { name: 'BRANDS', href: '#marcas' },
        { name: 'GALLERY', href: '#galeria' },
        { name: 'CONTACTS', href: '#contactos' },
      ],
      cta: 'GET A QUOTE',
      menuLabel: 'Open Menu',
      closeLabel: 'Close Menu'
    }
  };

  const t = translations[lang];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-[45] transition-opacity duration-700 pointer-events-none ${scrolled ? 'opacity-0' : 'opacity-100'}`}></div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg py-4 border-b border-gray-100' 
        : 'bg-transparent py-6 lg:py-10'
      }`}>
        <div className="container mx-auto px-6 md:px-8 lg:px-16 flex justify-between items-center">
          <a href="#home" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <img 
              src={logoUrl} 
              alt="Solfil" 
              className={`transition-all duration-500 ${scrolled ? 'h-6 md:h-7' : 'h-8 md:h-9'} w-auto object-contain ${!scrolled ? 'brightness-0 invert' : ''}`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-x-10">
            {t.links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[10px] font-bold tracking-[0.3em] transition-all uppercase whitespace-nowrap relative group ${
                  scrolled 
                  ? 'text-solfil-black hover:text-solfil-orange' 
                  : 'text-white hover:text-solfil-orange [text-shadow:0px_1px_3px_rgba(0,0,0,0.3)]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-solfil-orange transition-all duration-300 group-hover:w-full`}></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-8">
            <div className={`relative flex items-center p-1 rounded-full border transition-all duration-500 ${
              scrolled ? 'bg-gray-100 border-gray-200' : 'bg-white/10 border-white/20 backdrop-blur-md'
            }`}>
              <div 
                className={`absolute h-7 w-10 bg-solfil-orange rounded-full transition-transform duration-300 shadow-sm ${
                  lang === 'PT' ? 'translate-x-0' : 'translate-x-10'
                }`}
              />
              <button 
                onClick={() => setLang('PT')}
                className={`relative z-10 w-10 h-7 text-[9px] font-black transition-colors duration-300 ${
                  lang === 'PT' ? 'text-white' : (scrolled ? 'text-solfil-gray' : 'text-white/60')
                }`}
              >
                PT
              </button>
              <button 
                onClick={() => setLang('EN')}
                className={`relative z-10 w-10 h-7 text-[9px] font-black transition-colors duration-300 ${
                  lang === 'EN' ? 'text-white' : (scrolled ? 'text-solfil-gray' : 'text-white/60')
                }`}
              >
                EN
              </button>
            </div>
            
            <a href="#contactos" className={`px-7 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] transition-all h-10 flex items-center justify-center whitespace-nowrap shadow-lg ${
              scrolled 
              ? 'bg-solfil-black text-white hover:bg-solfil-orange shadow-solfil-black/10' 
              : 'bg-white text-solfil-orange hover:bg-solfil-black hover:text-white shadow-black/20'
            }`}>
              {t.cta}
            </a>
          </div>

          <button 
            className={`lg:hidden p-3 rounded-2xl transition-all flex items-center justify-center ${
              scrolled ? 'text-solfil-black bg-gray-100' : 'text-white bg-white/10 backdrop-blur-md border border-white/20'
            }`} 
            onClick={() => setIsOpen(true)}
            aria-label={t.menuLabel}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-solfil-black z-[100] lg:hidden transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-6 md:p-12 overflow-hidden">
            <div className="flex justify-between items-center mb-10 flex-shrink-0">
              <img src={logoUrl} alt="Solfil" className="h-7 brightness-0 invert" />
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-3 text-white/50 hover:text-white transition-colors bg-white/5 rounded-full border border-white/10"
                aria-label={t.closeLabel}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col space-y-4 md:space-y-6 pt-2 mb-10 overflow-y-auto no-scrollbar flex-1">
              {t.links.map((link, idx) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`text-3xl md:text-5xl font-light text-white/70 hover:text-solfil-orange transition-all uppercase tracking-tighter ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: `${idx * 75}ms` }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10 space-y-6 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 p-1 rounded-full bg-white/5 border border-white/10">
                   <button 
                    onClick={() => { setLang('PT'); setIsOpen(false); }} 
                    className={`px-6 py-3 rounded-full text-[10px] font-black transition-all ${lang === 'PT' ? 'bg-solfil-orange text-white shadow-lg' : 'text-white/40'}`}
                   >
                    PT
                   </button>
                   <button 
                    onClick={() => { setLang('EN'); setIsOpen(false); }} 
                    className={`px-6 py-3 rounded-full text-[10px] font-black transition-all ${lang === 'EN' ? 'bg-solfil-orange text-white shadow-lg' : 'text-white/40'}`}
                   >
                    EN
                   </button>
                </div>
              </div>
              
              <a 
                href="#contactos" 
                onClick={() => setIsOpen(false)} 
                className="bg-solfil-orange text-white w-full py-5 rounded-2xl font-bold tracking-[0.2em] uppercase text-xs shadow-2xl shadow-solfil-orange/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center"
              >
                {t.cta}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
