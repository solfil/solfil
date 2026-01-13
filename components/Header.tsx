
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

  // Lock scroll when menu is open
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
      setScrolled(window.scrollY > 50);
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

  // Internal Language Toggle Component for reuse
  const LanguageToggle = ({ isMobile = false }) => (
    <div 
      className={`relative flex items-center bg-white/5 border border-white/10 p-1 rounded-full cursor-pointer transition-all duration-300 hover:border-white/20 select-none ${isMobile ? 'scale-125' : 'scale-100'}`}
      onClick={() => setLang(lang === 'PT' ? 'EN' : 'PT')}
      role="button"
      aria-label="Alternar Idioma"
    >
      {/* Moving Background Knob */}
      <div 
        className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-solfil-orange rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_2px_10px_rgba(254,80,0,0.4)] ${
          lang === 'EN' ? 'translate-x-full' : 'translate-x-0'
        }`}
      />
      
      <div className={`relative z-10 w-9 h-6 flex items-center justify-center text-[9px] font-black transition-colors duration-300 ${lang === 'PT' ? 'text-white' : 'text-white/40'}`}>
        PT
      </div>
      <div className={`relative z-10 w-9 h-6 flex items-center justify-center text-[9px] font-black transition-colors duration-300 ${lang === 'EN' ? 'text-white' : 'text-white/40'}`}>
        EN
      </div>
    </div>
  );

  return (
    <>
      {/* FLOATING ULTRA-GLASS CAPSULE */}
      <div className={`fixed left-0 right-0 px-4 md:px-8 transition-all duration-700 ease-out ${
        isOpen ? 'top-0 z-[10001]' : (scrolled ? 'top-4 md:top-6 z-[50]' : 'top-8 lg:top-12 z-[50]')
      }`}>
        <header 
          className={`mx-auto max-w-7xl transition-all duration-1000 ease-in-out will-change-transform border ${
            isOpen 
            ? 'bg-black/20 border-white/5 py-4 px-4 rounded-[40px] backdrop-blur-3xl shadow-none' 
            : (scrolled 
                ? 'bg-black/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-white/10 py-[13px] px-8 rounded-full' 
                : 'bg-white/10 backdrop-blur-3xl border-white/20 py-[21px] px-10 rounded-full shadow-2xl')
          }`}
        >
          <div className="flex justify-between items-center relative">
            
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')} 
              className={`relative transition-all duration-500 hover:opacity-80 flex items-center px-1 ${isOpen ? 'z-[10010]' : 'z-[210]'}`}
              aria-label="Solfil Home"
            >
              <img 
                src={logoUrl} 
                alt="Solfil" 
                className={`h-6 md:h-7 lg:h-8 w-auto object-contain brightness-0 invert transition-all duration-700 ${scrolled ? 'scale-95' : 'scale-100'}`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-x-10">
              {t.links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[10px] font-bold tracking-[0.25em] transition-all duration-300 uppercase text-white/90 hover:text-solfil-black relative group"
                >
                  {link.name}
                  {/* Underline is now white as requested */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              
              <div className="h-4 w-px bg-white/10 mx-2"></div>

              {/* Glass Language Toggle Switch */}
              <LanguageToggle />

              <a 
                href="#contactos" 
                onClick={(e) => handleLinkClick(e, '#contactos')} 
                className="ml-4 px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all bg-white text-solfil-black hover:bg-solfil-orange hover:text-white shadow-xl active:scale-95"
              >
                {t.cta}
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className={`lg:hidden relative p-3 rounded-full transition-all duration-300 ${
                isOpen ? 'z-[10010] text-white bg-white/10' : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            >
              {isOpen ? (
                <svg className="w-6 h-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              ) : (
                <div className="w-6 h-5 flex flex-col justify-between items-end">
                  <span className="h-0.5 bg-current w-6 transition-all"></span>
                  <span className="h-0.5 bg-current w-4 transition-all"></span>
                  <span className="h-0.5 bg-current w-5 transition-all"></span>
                </div>
              )}
            </button>
          </div>
        </header>
      </div>

      {/* OVERLAY MOBILE MENU */}
      <div 
        className={`fixed inset-0 bg-solfil-black/60 backdrop-blur-3xl lg:hidden transition-all duration-700 ease-in-out transform will-change-transform ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 10000 }}
      >
        <div className="flex flex-col h-[100dvh] w-full pt-40 pb-12 px-10 relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[100%] h-[100%] bg-solfil-orange/10 blur-[150px] rounded-full pointer-events-none"></div>

          <nav className="flex flex-col space-y-6 flex-1 justify-center relative z-10">
            {t.links.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-4xl md:text-5xl font-light text-white/90 hover:text-solfil-orange transition-all uppercase tracking-tighter flex items-center gap-6 group ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + idx * 70}ms` }}
              >
                <span className={`w-0 h-px bg-solfil-orange transition-all duration-700 ${isOpen ? 'w-10' : 'w-0'}`}></span>
                {link.name}
              </a>
            ))}
          </nav>

          <div className={`mt-auto space-y-10 relative z-10 transition-all duration-1000 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-between border-t border-white/10 pt-10">
              <div className="flex items-center gap-10">
                {/* Mobile version of the Glass Toggle */}
                <LanguageToggle isMobile />
              </div>
            </div>

            <a 
              href="#contactos" 
              onClick={(e) => handleLinkClick(e, '#contactos')}
              className="block w-full bg-solfil-orange text-white py-6 rounded-[28px] text-center font-bold tracking-[0.3em] text-[10px] uppercase shadow-2xl active:scale-95 transition-all"
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
