
import React, { useState } from 'react';

interface LocationInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

const locations: LocationInfo[] = [
  {
    name: 'Vale de Parra',
    address: 'Estrada Nacional 125, Vale de Parra\n8200-427 Albufeira, Portugal',
    phone: '+351 289 591 144',
    email: 'vparra@solfil.pt',
    hours: 'Seg-Sex: 08h00-13h00 | 14h00-18h00\nSáb: 08h00-13h00'
  },
  {
    name: 'Ferreiras',
    address: 'Sítio das Ferreiras\n8200-555 Albufeira, Portugal',
    phone: '+351 289 571 535',
    email: 'ferreiras@solfil.pt',
    hours: 'Seg-Sex: 08h00-13h00 | 14h00-18h00\nSáb: 08h00-13h00'
  }
];

const Footer: React.FC = () => {
  const [activeLocIndex, setActiveLocIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const logoPath = 'https://github.com/solfil/solfil/blob/main/logo.png?raw=true'; 

  const activeLoc = locations[activeLocIndex];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-solfil-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Newsletter Section */}
        <div className="mb-24 pb-16 border-b border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-4 uppercase">NEWSLETTER</h3>
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter uppercase leading-none">
                RECEBA AS NOSSAS <span className="font-semibold italic">NOVIDADES.</span>
              </h2>
            </div>
            <div>
              <div className="max-w-lg lg:ml-auto">
                <form onSubmit={handleSubscribe} className="relative">
                  {subscribed ? (
                    <div className="bg-solfil-orange/20 border border-solfil-orange/30 p-6 rounded-[28px] flex items-center gap-4 animate-in fade-in zoom-in duration-300 backdrop-blur-md">
                      <div className="w-10 h-10 rounded-full bg-solfil-orange flex items-center justify-center shadow-lg shadow-solfil-orange/20">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest">Inscrição efetuada com sucesso!</span>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl">
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="O seu melhor e-mail..."
                        className="flex-1 bg-transparent rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-solfil-orange/50 transition-all font-light placeholder:text-white/30"
                      />
                      <button 
                        type="submit"
                        className="bg-solfil-orange text-white px-8 py-4 rounded-[24px] font-black text-[10px] hover:bg-white hover:text-solfil-black transition-all shadow-xl uppercase tracking-[0.2em] flex items-center justify-center gap-3 group active:scale-95"
                      >
                        SUBSCREVER
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  )}
                </form>
                <p className="mt-4 text-[9px] text-white/30 font-medium uppercase tracking-widest text-center lg:text-right px-6">
                  Ao subscrever, aceita a nossa política de privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid - 3 columns, middle is larger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* Column 1: Brand Info & Socials (Width: 3/12) */}
          <div className="lg:col-span-3 space-y-8">
             <div className="flex flex-col items-start origin-left">
               <img 
                 src={logoPath} 
                 alt="Solfil" 
                 className="h-9 md:h-10 w-auto object-contain" 
                 style={{ filter: 'brightness(0) invert(1)' }}
                 loading="lazy"
                 decoding="async"
               />
             </div>
             <p className="text-white/60 leading-relaxed font-light text-sm">
               A erguer o país com os melhores materiais de construção desde 1998. Qualidade e confiança em cada obra.
             </p>
             <div className="pt-4 space-y-4">
               <h4 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] uppercase">SOLFIL SOCIAL</h4>
               <div className="flex space-x-3">
                 {['FB', 'IG', 'LI'].map(social => (
                   <div key={social} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-solfil-orange hover:text-white cursor-pointer transition-all group">
                     <span className="text-[9px] font-bold text-white/50 group-hover:text-white transition-colors">{social}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Column 2: Onde Estamos (Width: 6/12 - LARGEST) */}
          <div className="lg:col-span-6">
            <h4 className="font-semibold mb-10 text-[10px] tracking-[0.4em] text-solfil-orange uppercase text-center lg:text-left">Onde Estamos</h4>
            
            <div className="max-w-2xl mx-auto lg:ml-0">
              {/* Tab Toggles */}
              <div className="flex p-1 bg-white/5 rounded-full border border-white/10 mb-8 max-w-sm">
                {locations.map((loc, idx) => (
                  <button
                    key={loc.name}
                    onClick={() => setActiveLocIndex(idx)}
                    className={`flex-1 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 ${
                      activeLocIndex === idx ? 'bg-solfil-orange text-white shadow-lg' : 'text-white/40 hover:text-white/60'
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div key={activeLocIndex} className="grid md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-top-2 duration-500">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[9px] font-black text-solfil-orange/60 uppercase tracking-widest">Morada</p>
                    <p className="text-white/80 font-light text-sm leading-relaxed whitespace-pre-line">{activeLoc.address}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-solfil-orange/60 uppercase tracking-widest">Telefone</p>
                      <p className="text-white font-bold text-sm">{activeLoc.phone}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-solfil-orange/60 uppercase tracking-widest">E-mail</p>
                      <p className="text-white font-bold text-sm truncate">{activeLoc.email}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 md:border-l md:border-white/5 md:pl-10">
                  <div className="space-y-2">
                    <p className="text-[9px] font-black text-solfil-orange uppercase tracking-widest">Horário de Funcionamento</p>
                    <p className="text-white/60 font-light text-xs leading-relaxed whitespace-pre-line bg-white/5 p-4 rounded-2xl border border-white/5">{activeLoc.hours}</p>
                  </div>
                  <button className="w-full py-4 border border-white/10 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-solfil-black transition-all">
                    VER NO MAPA
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Menu Rápido (Width: 3/12) */}
          <div className="lg:col-span-3 lg:text-right">
            <h4 className="font-semibold mb-10 text-[10px] tracking-[0.4em] text-solfil-orange uppercase">Menu Rápido</h4>
            <ul className="space-y-5 text-white/80 font-bold text-[10px] tracking-[0.3em]">
              <li><a href="#produtos" className="hover:text-solfil-orange transition-colors uppercase">PRODUTOS</a></li>
              <li><a href="#sobre" className="hover:text-solfil-orange transition-colors uppercase">SOBRE</a></li>
              <li><a href="#marcas" className="hover:text-solfil-orange transition-colors uppercase">MARCAS</a></li>
              <li><a href="#galeria" className="hover:text-solfil-orange transition-colors uppercase">GALERIA</a></li>
              <li><a href="#contactos" className="hover:text-solfil-orange transition-colors uppercase">CONTACTOS</a></li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[9px] font-bold tracking-[0.3em] uppercase">
           <p>SOLFIL © {new Date().getFullYear()}. TODOS OS DIREITOS RESERVADOS.</p>
           <div className="flex flex-wrap justify-center gap-6 md:gap-10">
             <a href="#" className="hover:text-solfil-orange transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-solfil-orange transition-colors">Termos e Condições</a>
             <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-solfil-orange transition-colors flex items-center gap-2">
               <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
               </svg>
               LIVRO DE RECLAMAÇÕES
             </a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
