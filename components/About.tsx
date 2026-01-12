
import React from 'react';

const stats = [
  { label: 'Anos de Experiência', value: '25+' },
  { label: 'Obras Fornecidas', value: '10K+' },
  { label: 'Marcas Parceiras', value: '150+' },
  { label: 'Satisfação Garantida', value: '100%' },
];

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Coluna Esquerda: Imagem e Estatísticas */}
        <div className="space-y-12 lg:sticky lg:top-32">
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden aspect-[4/3] bg-solfil-black shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&q=80&w=1000" 
                alt="Obra Industrial" 
                className="w-full h-full object-cover opacity-70 grayscale"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Badge Flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[32px] shadow-xl hidden md:block max-w-[260px] border border-gray-50">
               <div className="flex items-center gap-4 mb-2">
                  <div className="w-8 h-8 bg-solfil-orange rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-[9px] text-solfil-black uppercase tracking-[0.2em]">LÍDER REGIONAL</span>
               </div>
               <p className="text-[11px] font-light text-solfil-gray leading-relaxed">Referência em fornecimento para construção no Algarve.</p>
            </div>
          </div>

          {/* Estatísticas - Agora à Esquerda conforme o anexo */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="group">
                <div className="text-5xl font-light text-solfil-black mb-3 tracking-tighter transition-colors group-hover:text-solfil-orange">
                  {s.value}
                </div>
                <div className="text-solfil-gray text-[10px] font-bold uppercase tracking-[0.3em] leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna Direita: Texto */}
        <div className="space-y-10">
          <div>
            <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-8 uppercase">SOBRE NÓS</h3>
            <h2 className="text-5xl md:text-6xl font-light leading-[1.05] mb-12 text-solfil-black uppercase tracking-tighter">
              QUALIDADE QUE<br /><span className="font-semibold italic">ERGUE O FUTURO</span><span className="font-bold text-solfil-orange">.</span>
            </h2>
            
            <div className="space-y-8 text-solfil-gray font-light leading-relaxed text-lg lg:text-xl">
              <p>
                A Solfil disponibiliza uma oferta completa de materiais de construção, acompanhando todas as fases da obra. Desde os materiais estruturais essenciais como cimento, tijolos, blocos, ferro, telhas, chaminés, areias e britas até às soluções de isolamento térmico e acústico, atualmente indispensáveis para o cumprimento das exigências das certificações energéticas.
              </p>
              <p>
                A nossa gama estende-se ainda aos pavimentos e revestimentos interiores e exteriores, bem como a um vasto conjunto de equipamentos sanitários, torneiras e mobiliário para casas de banho, garantindo soluções funcionais e esteticamente adequadas a cada projeto.
              </p>
              <p>
                Todos os produtos comercializados pela Solfil são certificados, assegurando qualidade, conformidade e total confiança na escolha dos nossos clientes.
              </p>
              <p className="font-medium text-solfil-black border-l-2 border-solfil-orange pl-8 py-2">
                Damos especial importância à segurança, tanto nos produtos como nos nossos procedimentos de trabalho. Orgulhamo-nos do rigor com que operamos e garantimos entregas seguras, eficientes e um serviço sempre profissional e eficaz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
