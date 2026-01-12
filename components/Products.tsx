
import React from 'react';

const productCategories = [
  { 
    id: '1', 
    title: 'Pavimentos & Azulejos', 
    description: 'Transforme a sua casa num refúgio de elegância com os nossos azulejos e pavimentos exclusivos.',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: '2', 
    title: 'Sanitários', 
    description: 'Design sofisticado e funcionalidade de alta qualidade para ambientes requintados.',
    image: 'https://sanindusa.com/media/resized/Colecao-Sanlife-600.jpg' 
  },
  { 
    id: '3', 
    title: 'Torneiras', 
    description: 'Elevando a estética com torneiras exclusivas, a fusão perfeita de forma e função.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: '4', 
    title: 'Mobiliário de casa de banho', 
    description: 'Estilo ímpar, mobiliário de casa de banho exclusivo, elevando o conforto e funcionalidade diária.',
    image: 'https://sanindusa.com/media/Sanlife-Amb-4-65c3cb6fd699c.jpg' 
  },
  { 
    id: '5', 
    title: 'Mosaico piscinas', 
    description: 'Estilo artisticamente refinado e durabilidade superior em cada peça.',
    image: 'https://images.unsplash.com/photo-1560015534-cee980ba7e13?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: '6', 
    title: 'Banheiras e bases de duche', 
    description: 'Conforto personalizado para banhos extraordinários.',
    image: 'https://www.roca.pt/RocaResourceServlet/resources/getTransformation?idObject=%7B8AC68E71-AA87-4335-B462-2F2A6B61EDBF%7D&trName=TF_Web_Big' 
  },
  { 
    id: '7', 
    title: 'Toalheiros', 
    description: 'Elegância funcional, adicione um toque de luxo ao seu espaço.',
    image: 'https://images.unsplash.com/photo-1604709177595-ee9c2580e9a3?auto=format&fit=crop&q=80&w=1200' 
  },
  { 
    id: '8', 
    title: 'Cozinhas por Medida', 
    description: 'O coração da sua casa com design personalizado e materiais de alta durabilidade.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    id: '9', 
    title: 'Isolamentos Técnicos', 
    description: 'Eficiência energética e conforto acústico com soluções de última geração.',
    image: 'https://images.unsplash.com/photo-1585140501042-759c15bd0ca0?auto=format&fit=crop&q=80&w=1200'
  },
  { 
    id: '10', 
    title: 'Materiais Estruturais', 
    description: 'Cimento, tijolo e aço: a base sólida e certificada para qualquer construção.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200'
  },
];

const Products: React.FC = () => {
  return (
    <div id="produtos" className="container mx-auto px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="relative">
          <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-6 uppercase">O NOSSO CATÁLOGO</h3>
          <h2 className="text-5xl md:text-7xl font-light text-solfil-black uppercase tracking-tighter leading-none">
            PRODUTOS<span className="font-bold text-solfil-orange">.</span>
          </h2>
        </div>
        <div className="max-w-xl">
           <p className="text-solfil-gray text-lg md:text-xl font-light leading-relaxed mb-4">
            Explore as nossas principais categorias de materiais. Uma seleção focada em design, durabilidade e excelência técnica para todos os seus projetos.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="space-y-8">
        {/* Primeira Fila: 3 itens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.slice(0, 3).map((prod) => (
            <ProductCard key={prod.id} prod={prod} />
          ))}
        </div>
        
        {/* Segunda Fila: 3 itens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.slice(3, 6).map((prod) => (
            <ProductCard key={prod.id} prod={prod} />
          ))}
        </div>

        {/* Terceira Fila: 4 itens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.slice(6).map((prod) => (
            <ProductCard key={prod.id} prod={prod} />
          ))}
        </div>
      </div>

      {/* CTA Final Refinado */}
      <div className="mt-32 pb-10 flex flex-col items-center text-center">
         <p className="text-solfil-gray/50 text-[10px] font-bold uppercase tracking-[0.5em] mb-10">TRABALHAMOS COM OS MELHORES PARCEIROS</p>
         
         <a href="#marcas" className="group flex flex-col items-center cursor-pointer">
            <div className="relative mb-6">
              <span className="text-sm font-black tracking-[0.5em] uppercase text-solfil-black transition-colors duration-300">
                CONHEÇA AS MARCAS
              </span>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-solfil-orange transition-all duration-500 ease-out group-hover:w-full"></div>
            </div>
            
            <div className="mt-4">
              <svg 
                className="w-5 h-5 text-solfil-orange/30 transition-all duration-500 ease-in-out group-hover:translate-y-3 group-hover:text-solfil-orange" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
         </a>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ prod: any }> = ({ prod }) => (
  <div className="group relative bg-white/40 backdrop-blur-md rounded-[32px] overflow-hidden flex flex-col transition-all duration-500 border border-white/60 hover:border-solfil-orange/30 hover:bg-white/80 hover:-translate-y-2 select-none shadow-sm hover:shadow-2xl hover:shadow-solfil-orange/10">
    <div className="relative aspect-[16/9] overflow-hidden bg-solfil-black">
      <img 
        src={prod.image} 
        alt={prod.title} 
        className="w-full h-full object-cover transition-all duration-1000 grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          (e.target as HTMLImageElement).style.opacity = '0';
        }}
      />
      {/* Glow overlay discreto no hover */}
      <div className="absolute inset-0 bg-solfil-orange/5 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-700 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
    </div>
    <div className="p-8 relative z-10 flex-1 flex flex-col">
      <div className="w-8 h-1 bg-solfil-orange/20 mb-4 group-hover:w-16 group-hover:bg-solfil-orange transition-all duration-500 ease-out"></div>
      <h3 className="text-2xl font-bold text-solfil-black leading-tight tracking-tight mb-3 transition-colors duration-300 group-hover:text-solfil-orange">
        {prod.title}
      </h3>
      <p className="text-solfil-gray text-sm font-light leading-relaxed">
        {prod.description}
      </p>
      {/* Linha de brilho inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-solfil-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  </div>
);

export default Products;
