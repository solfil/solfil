
import React, { useState } from 'react';

interface Brand {
  name: string;
  logo: string;
}

interface BrandCategory {
  id: string;
  title: string;
  brands: Brand[];
}

const brandCategories: BrandCategory[] = [
  {
    id: 'rev-pav',
    title: 'Revestimentos e pavimentos',
    brands: [
      { name: 'CORTES', logo: 'https://logo.clearbit.com/cortes.es?size=200' },
      { name: 'KERION', logo: 'https://logo.clearbit.com/kerion.pt?size=200' },
      { name: 'ARGENTA', logo: 'https://logo.clearbit.com/argentaceramica.com?size=200' },
      { name: 'ETILE', logo: 'https://logo.clearbit.com/etile.es?size=200' },
      { name: 'GRESPANIA', logo: 'https://logo.clearbit.com/grespania.com?size=200' },
      { name: 'GRESART', logo: 'https://logo.clearbit.com/gresart.pt?size=200' },
      { name: 'METROPOL', logo: 'https://logo.clearbit.com/metropol-ceramica.com?size=200' },
      { name: 'GRES ARAGÓN', logo: 'https://logo.clearbit.com/gresaragon.com?size=200' },
      { name: 'CLIPER', logo: 'https://logo.clearbit.com/cliper.pt?size=200' },
      { name: 'INTERMATEX', logo: 'https://logo.clearbit.com/intermatex.com?size=200' },
      { name: 'KERABEN', logo: 'https://logo.clearbit.com/keraben.com?size=200' },
    ]
  },
  {
    id: 'mob-banho',
    title: 'Mobiliário de casa de banho',
    brands: [
      { name: 'ROCA', logo: 'https://logo.clearbit.com/roca.pt?size=200' },
      { name: 'SANINDUSA', logo: 'https://logo.clearbit.com/sanindusa.pt?size=200' },
      { name: 'BANHOAZUL', logo: 'https://logo.clearbit.com/banhoazul.pt?size=200' },
    ]
  },
  {
    id: 'loucas-san',
    title: 'Louças sanitárias',
    brands: [
      { name: 'GEBERIT', logo: 'https://logo.clearbit.com/geberit.pt?size=200' },
      { name: 'VALADARES', logo: 'https://logo.clearbit.com/valadares.pt?size=200' },
    ]
  },
  {
    id: 'torneiras',
    title: 'Torneiras',
    brands: [
      { name: 'GROHE', logo: 'https://logo.clearbit.com/grohe.pt?size=200' },
      { name: 'ASM', logo: 'https://logo.clearbit.com/asm-taps.com?size=200' },
      { name: 'BRUMA', logo: 'https://logo.clearbit.com/bruma.pt?size=200' },
    ]
  },
  {
    id: 'toalheiros',
    title: 'Toalheiros',
    brands: [
      { name: 'IRSAP', logo: 'https://logo.clearbit.com/irsap.com?size=200' },
      { name: 'FOURSTEEL', logo: 'https://logo.clearbit.com/foursteel.com?size=200' },
    ]
  },
  {
    id: 'flutuante',
    title: 'Flutuante e vinílico',
    brands: [
      { name: 'QUICK-STEP', logo: 'https://logo.clearbit.com/quick-step.pt?size=200' },
      { name: 'TARKETT', logo: 'https://logo.clearbit.com/tarkett.com?size=200' },
    ]
  },
  {
    id: 'mosaico',
    title: 'Mosaico piscina',
    brands: [
      { name: 'EZARRI', logo: 'https://logo.clearbit.com/ezarri.com?size=200' },
      { name: 'HISBALIT', logo: 'https://logo.clearbit.com/hisbalit.es?size=200' },
    ]
  },
  {
    id: 'resguardo',
    title: 'Resguardo de duche',
    brands: [
      { name: 'PROVEX', logo: 'https://logo.clearbit.com/provex.eu?size=200' },
      { name: 'PROFILTEK', logo: 'https://logo.clearbit.com/profiltek.com?size=200' },
    ]
  },
];

const BrandCard: React.FC<{ brand: Brand }> = ({ brand }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group flex flex-col items-center justify-center p-8 bg-white rounded-[32px] border border-gray-100 hover:border-solfil-orange/20 transition-all duration-500 hover:shadow-2xl hover:shadow-solfil-orange/5 min-h-[160px]">
      <div className="h-16 w-full flex items-center justify-center mb-4 overflow-hidden relative">
        {!hasError ? (
          <img 
            src={brand.logo} 
            alt={brand.name} 
            className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        ) : (
          <span className="text-solfil-black font-black text-xs tracking-[0.2em] group-hover:text-solfil-orange transition-colors">
            {brand.name}
          </span>
        )}
      </div>
      <div className="w-0 h-[1px] bg-solfil-orange group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

const Brands: React.FC = () => {
  const [activeTab, setActiveTab] = useState(brandCategories[0].id);

  const activeCategory = brandCategories.find(c => c.id === activeTab);

  return (
    <div className="container mx-auto px-6">
      {/* Header da Secção */}
      <div className="mb-16 lg:mb-24">
        <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-6 uppercase">MARCAS</h3>
        <h2 className="text-5xl lg:text-7xl font-light text-solfil-black uppercase tracking-tighter leading-none">
          EM QUEM <span className="font-semibold italic">CONFIAMOS</span><span className="font-bold text-solfil-orange">.</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Sidebar de Categorias */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <nav className="flex lg:flex-col overflow-x-auto no-scrollbar lg:overflow-visible gap-2 pb-4 lg:pb-0">
            {brandCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  whitespace-nowrap lg:whitespace-normal text-left px-6 py-5 rounded-2xl lg:rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between group
                  ${activeTab === cat.id 
                    ? 'bg-solfil-orange text-white shadow-lg shadow-solfil-orange/20 translate-x-2' 
                    : 'bg-white text-solfil-gray hover:bg-gray-100 border border-gray-100'
                  }
                `}
              >
                {cat.title}
                <svg className={`w-4 h-4 transition-transform duration-300 hidden lg:block ${activeTab === cat.id ? 'translate-x-1 opacity-100' : 'opacity-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </nav>
        </aside>

        {/* Grelha de Marcas */}
        <main className="flex-1 min-h-[400px]">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 animate-in fade-in slide-in-from-right-4 duration-500">
            {activeCategory?.brands.map((brand, idx) => (
              <BrandCard key={`${brand.name}-${idx}`} brand={brand} />
            ))}
          </div>

          {/* Mensagem de Vazio se necessário */}
          {activeCategory?.brands.length === 0 && (
            <div className="flex items-center justify-center h-full border-2 border-dashed border-gray-100 rounded-[40px]">
              <p className="text-solfil-gray font-light italic">Catálogo em atualização para esta categoria.</p>
            </div>
          )}
        </main>
      </div>

      {/* Rodapé da Secção */}
      <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-solfil-gray text-sm font-light leading-relaxed max-w-md text-center md:text-left">
          Parcerias sólidas com as marcas mais conceituadas do mercado mundial, garantindo que o seu projeto utilize apenas materiais de excellence comprovada.
        </p>
        <button className="flex items-center gap-4 text-solfil-black font-black text-[10px] tracking-[0.4em] uppercase hover:text-solfil-orange transition-colors group">
          APRESENTAÇÃO GERAL SOLFIL (PDF)
          <div className="w-10 h-10 rounded-full bg-solfil-black text-white flex items-center justify-center group-hover:bg-solfil-orange transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Brands;
