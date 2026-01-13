
import React, { useState } from 'react';
import { Language } from '../types';

interface LocationInfo {
  name: string;
  address: string;
  mapUrl: string;
  phone: string;
  phoneRaw: string;
  email: string;
  note?: { PT: string, EN: string };
  hours: {
    week: string;
    saturday: string;
    sunday: { PT: string, EN: string };
  };
}

const locations: LocationInfo[] = [
  {
    name: 'Vale de Parra',
    address: 'Estrada Nacional 125, Vale de Parra\n8200-427 Albufeira, Portugal',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Solfil+Vale+de+Parra+Albufeira',
    phone: '+351 289 591 144',
    phoneRaw: '351289591144',
    email: 'vparra@solfil.pt',
    note: { 
      PT: 'O levantamento de material de exterior é sempre no nosso escritório de Vale de Parra', 
      EN: 'Pick-up of outdoor materials is always at our Vale de Parra office' 
    },
    hours: { week: '08h00 - 13h00 | 14h00 - 18h00', saturday: '08h00 - 13h00', sunday: { PT: 'Fechado', EN: 'Closed' } }
  },
  {
    name: 'Ferreiras',
    address: 'Sítio das Ferreiras\n8200-555 Albufeira, Portugal',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Solfil+Ferreiras+Albufeira',
    phone: '+351 289 571 535',
    phoneRaw: '351289571535',
    email: 'ferreiras@solfil.pt',
    hours: { week: '08h00 - 13h00 | 14h00 - 18h00', saturday: '08h00 - 13h00', sunday: { PT: 'Fechado', EN: 'Closed' } }
  }
];

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeLoc, setActiveLoc] = useState(0);
  const [newsEmail, setNewsEmail] = useState('');
  const [newsStatus, setNewsStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const logoUrl = "https://raw.githubusercontent.com/solfil/solfil/solfil-assets/assets/logo.png";

  const t = {
    PT: {
      newsTag: 'NEWSLETTER',
      newsTitle1: 'RECEBA AS NOSSAS',
      newsTitle2: 'NOVIDADES.',
      newsPlace: 'O seu melhor e-mail...',
      newsBtn: 'ENVIAR',
      newsSuccess: 'Obrigado por se subscrever!',
      where: 'Onde Estamos',
      addrLabel: 'Morada (Ver no Mapa)',
      contactLabel: 'Contactos',
      hoursTitle: 'Horários de Funcionamento',
      weekLabel: 'Segunda a Sexta',
      satLabel: 'Sábado',
      sunLabel: 'Domingo',
      socialPoints: 'REDES SOCIAIS',
      priv: 'Privacidade',
      terms: 'Termos de Uso',
      book: 'LIVRO DE RECLAMAÇÕES'
    },
    EN: {
      newsTag: 'NEWSLETTER',
      newsTitle1: 'STAY UPDATED WITH OUR',
      newsTitle2: 'LATEST NEWS.',
      newsPlace: 'Your best email...',
      newsBtn: 'SEND',
      newsSuccess: 'Thank you for subscribing!',
      where: 'Our Locations',
      addrLabel: 'Address (View on Map)',
      contactLabel: 'Contacts',
      hoursTitle: 'Opening Hours',
      weekLabel: 'Monday to Friday',
      satLabel: 'Saturday',
      sunLabel: 'Sunday',
      socialPoints: 'SOCIAL MEDIA',
      priv: 'Privacy',
      terms: 'Terms of Use',
      book: 'COMPLAINTS BOOK'
    }
  }[lang];

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    
    setNewsStatus('loading');
    try {
      const response = await fetch('https://formsubmit.co/ajax/tpacheco@aorubro.pt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ 
          email: newsEmail, 
          _subject: 'Nova Subscrição Newsletter - Solfil',
          _captcha: "false",
          _template: 'table'
        })
      });
      
      const result = await response.json();
      
      if (response.ok && result.success === "true") {
        setNewsStatus('success');
        setNewsEmail('');
        setTimeout(() => setNewsStatus('idle'), 5000);
      } else {
        throw new Error('Newsletter error');
      }
    } catch (err) {
      setNewsStatus('error');
      setTimeout(() => setNewsStatus('idle'), 4000);
    }
  };

  return (
    <footer className="bg-solfil-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="mb-20 pb-16 border-b border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-solfil-orange font-black tracking-[0.4em] text-xs mb-4 uppercase">{t.newsTag}</h3>
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase leading-none">
                {t.newsTitle1} <span className="font-semibold italic">{t.newsTitle2}</span>
              </h2>
            </div>
            <div>
              {newsStatus === 'success' ? (
                <div className="bg-solfil-orange/20 border border-solfil-orange/30 p-4 rounded-[32px] text-center animate-in zoom-in duration-300">
                  <p className="text-solfil-orange font-bold text-sm tracking-widest uppercase">{t.newsSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleNewsSubmit} className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 border border-white/10 rounded-[32px] transition-all focus-within:border-solfil-orange/50">
                  <input 
                    type="email" 
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder={t.newsPlace} 
                    className="flex-1 bg-transparent px-6 py-4 text-sm focus:outline-none font-normal" 
                  />
                  <button 
                    disabled={newsStatus === 'loading'}
                    className="bg-solfil-orange text-white px-8 py-4 rounded-[24px] font-black text-xs hover:bg-white hover:text-solfil-black disabled:opacity-50 transition-all uppercase tracking-[0.2em]"
                  >
                    {newsStatus === 'loading' ? '...' : t.newsBtn}
                  </button>
                </form>
              )}
              {newsStatus === 'error' && <p className="text-red-500 text-[10px] mt-2 text-center uppercase font-bold animate-pulse">Erro. Tente novamente.</p>}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="space-y-8">
             <img src={logoUrl} alt="Solfil" className="h-10 brightness-0 invert" />
             <p className="text-white/60 leading-relaxed font-normal text-base max-w-sm">
               {lang === 'PT' ? 'Qualidade e rigor no fornecimento de materiais de construção desde 1998.' : 'Quality and precision in construction material supply since 1998.'}
             </p>
             <div className="pt-4 space-y-4">
               <h4 className="text-solfil-orange font-black tracking-[0.4em] text-xs uppercase">{t.socialPoints}</h4>
               <div className="flex space-x-4">
                 {[
                   { id: 'FB', url: 'https://facebook.com/solfilpt' },
                   { id: 'IG', url: 'https://instagram.com/solfilpt' }
                 ].map(social => (
                   <a 
                    key={social.id} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-solfil-orange hover:text-white hover:border-solfil-orange cursor-pointer transition-all group hover:-translate-y-1 shadow-sm hover:shadow-[0_10px_20px_rgba(254,80,0,0.3)]"
                   >
                     <span className="text-[11px] font-bold text-white/50 group-hover:text-white transition-colors">{social.id}</span>
                   </a>
                 ))}
               </div>
             </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-semibold text-xs tracking-[0.4em] text-solfil-orange uppercase">{t.where}</h4>
            <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10 mb-8 max-w-xs">
              {locations.map((loc, idx) => (
                <button key={idx} onClick={() => setActiveLoc(idx)} className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase transition-all ${activeLoc === idx ? 'bg-solfil-orange text-white' : 'text-white/40'}`}>{loc.name}</button>
              ))}
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[11px] font-black text-solfil-orange/60 uppercase tracking-widest">{t.addrLabel}</p>
                <a 
                  href={locations[activeLoc].mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white/80 font-normal text-base leading-relaxed whitespace-pre-line hover:text-solfil-orange transition-colors group"
                >
                  {locations[activeLoc].address}
                  <svg className="inline-block ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-black text-solfil-orange/60 uppercase tracking-widest">{t.contactLabel}</p>
                <a href={`tel:${locations[activeLoc].phoneRaw}`} className="block text-white font-bold text-lg hover:text-solfil-orange transition-colors">
                  {locations[activeLoc].phone}
                </a>
                <a href={`mailto:${locations[activeLoc].email}`} className="block text-white/50 font-normal text-base hover:text-solfil-orange transition-colors">
                  {locations[activeLoc].email}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="font-semibold text-xs tracking-[0.4em] text-solfil-orange uppercase">{t.hoursTitle}</h4>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[11px] font-bold text-white/40 uppercase">{t.weekLabel}</span>
                <span className="text-sm">{locations[activeLoc].hours.week}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[11px] font-bold text-white/40 uppercase">{t.satLabel}</span>
                <span className="text-sm">{locations[activeLoc].hours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[11px] font-bold text-white/40 uppercase">{t.sunLabel}</span>
                <span className="text-sm text-red-500 font-bold">{locations[activeLoc].hours.sunday[lang]}</span>
              </div>
            </div>

            {locations[activeLoc].note && (
              <div className="mt-8 p-6 bg-solfil-orange/10 border border-solfil-orange/20 rounded-[24px] animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-solfil-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-solfil-orange text-xs font-bold leading-relaxed tracking-tight">
                    {locations[activeLoc].note[lang]}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[9px] font-black tracking-[0.4em] uppercase">
           <div className="text-left">
             SOLFIL, SA @ 2026 DESENVOLVIDO PELA <a href="https://www.aorubro.pt" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-solfil-orange transition-colors">AORUBRO</a>
           </div>
           <div className="flex gap-6">
             <a href="#" className="hover:text-solfil-orange transition-colors">{t.priv}</a>
             <a href="#" className="hover:text-solfil-orange transition-colors">{t.terms}</a>
             <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-solfil-orange transition-colors">{t.book}</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;