
import React, { useState } from 'react';

interface LocationInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  note?: string;
  hours: {
    week: string;
    saturday: string;
    sunday: string;
  };
}

const locations: LocationInfo[] = [
  {
    name: 'Vale de Parra',
    address: 'Estrada Nacional 125, Vale de Parra\n8200-427 Albufeira, Portugal',
    phone: '+351 289 591 144',
    email: 'vparra@solfil.pt',
    note: 'Local de levantamento de material de exterior',
    hours: {
      week: '08h00 - 13h00 | 14h00 - 18h00',
      saturday: '08h00 - 13h00',
      sunday: 'Fechado'
    }
  },
  {
    name: 'Ferreiras',
    address: 'Sítio das Ferreiras\n8200-555 Albufeira, Portugal',
    phone: '+351 289 571 535',
    email: 'ferreiras@solfil.pt',
    hours: {
      week: '08h00 - 13h00 | 14h00 - 18h00',
      saturday: '08h00 - 13h00',
      sunday: 'Fechado'
    }
  }
];

const Footer: React.FC = () => {
  const [activeLoc, setActiveLoc] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const logoPath = 'https://raw.githubusercontent.com/solfil/solfil/main/assets/logo.png'; 

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
        <div className="mb-20 pb-16 border-b border-white/5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-solfil-orange font-black tracking-[0.4em] text-xs mb-4 uppercase">NEWSLETTER</h3>
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter uppercase leading-none">
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
                      <span className="text-sm font-bold uppercase tracking-widest">Inscrição efetuada com sucesso!</span>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl">
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="O seu melhor e-mail..."
                        className="flex-1 bg-transparent rounded-2xl px-6 py-4 text-sm focus:outline-none transition-all font-light placeholder:text-white/30"
                      />
                      <button 
                        type="submit"
                        className="bg-solfil-orange text-white px-8 py-4 rounded-[24px] font-black text-xs hover:bg-white hover:text-solfil-black transition-all shadow-xl uppercase tracking-[0.2em] active:scale-95"
                      >
                        ENVIAR
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid - Optimized 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20 mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-8">
             <div className="flex flex-col items-start">
               <img 
                 src={logoPath} 
                 alt="Solfil" 
                 className="h-10 w-auto object-contain brightness-0 invert" 
                 loading="lazy"
               />
             </div>
             <p className="text-white/60 leading-relaxed font-light text-base max-w-sm">
               Qualidade e rigor no fornecimento de materiais de construção desde 1998. O seu parceiro de confiança no Algarve.
             </p>
             <div className="pt-4 space-y-4">
               <h4 className="text-solfil-orange font-black tracking-[0.4em] text-xs uppercase">SOCIAL</h4>
               <div className="flex space-x-4">
                 {['FB', 'IG', 'LI'].map(social => (
                   <div key={social} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-solfil-orange hover:text-white cursor-pointer transition-all group">
                     <span className="text-[11px] font-bold text-white/50 group-hover:text-white">{social}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Column 2: Locations (with Tabs) - Optimized Space */}
          <div className="space-y-8">
            <h4 className="font-semibold mb-6 text-xs tracking-[0.4em] text-solfil-orange uppercase">Onde Estamos</h4>
            
            {/* Tabs Selector */}
            <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10 mb-8 max-w-xs">
              {locations.map((loc, idx) => (
                <button
                  key={loc.name}
                  onClick={() => setActiveLoc(idx)}
                  className={`flex-1 py-3 rounded-xl text-[11px] font-black tracking-[0.2em] uppercase transition-all ${
                    activeLoc === idx ? 'bg-solfil-orange text-white shadow-lg' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {loc.name}
                </button>
              ))}
            </div>

            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="space-y-3">
                <p className="text-[11px] font-black text-solfil-orange/60 uppercase tracking-widest">Morada</p>
                <p className="text-white/80 font-light text-base leading-relaxed whitespace-pre-line">{locations[activeLoc].address}</p>
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-black text-solfil-orange/60 uppercase tracking-widest">Contactos</p>
                <p className="text-white font-bold text-lg">{locations[activeLoc].phone}</p>
                <p className="text-white/50 font-light text-base">{locations[activeLoc].email}</p>
              </div>
              
              {/* Nota Informativa com maior destaque */}
              {locations[activeLoc].note && (
                <div className="pt-2">
                  <div className="bg-solfil-orange/5 border border-solfil-orange/20 p-5 rounded-2xl flex items-start gap-4">
                    <svg className="w-6 h-6 text-solfil-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium text-white/90 italic leading-relaxed">
                      {locations[activeLoc].note}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Column 3: Hours - Optimized Space */}
          <div className="space-y-8">
            <h4 className="font-semibold mb-10 text-xs tracking-[0.4em] text-solfil-orange uppercase">Horários de Funcionamento</h4>
            
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="space-y-5">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Segunda a Sexta</span>
                  <span className="text-base font-medium text-white">{locations[activeLoc].hours.week}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Sábado</span>
                  <span className="text-base font-medium text-white">{locations[activeLoc].hours.saturday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">Domingo</span>
                  <span className="text-base font-bold text-red-500 uppercase tracking-widest">{locations[activeLoc].hours.sunday}</span>
                </div>
              </div>

              <div className="pt-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col gap-2">
                  <p className="text-[11px] font-black text-solfil-orange uppercase tracking-widest">Linha de Apoio Directo</p>
                  <p className="text-white font-bold text-2xl">{locations[activeLoc].phone}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">Chamada para rede fixa nacional</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[11px] font-bold tracking-[0.3em] uppercase">
           <p>SOLFIL © {new Date().getFullYear()}. ERGUER O FUTURO COM RIGOR.</p>
           <div className="flex flex-wrap justify-center gap-6 md:gap-12">
             <a href="#" className="hover:text-solfil-orange transition-colors">Privacidade</a>
             <a href="#" className="hover:text-solfil-orange transition-colors">Termos de Uso</a>
             <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" className="hover:text-solfil-orange transition-colors flex items-center gap-2">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
