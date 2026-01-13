
import React from 'react';
import { Language } from '../types';

const About: React.FC<{ lang: Language }> = ({ lang }) => {
  const translations = {
    PT: {
      tag: 'SOBRE NÓS',
      title1: 'QUALIDADE QUE',
      title2: 'ERGUE O FUTURO',
      badge: 'LÍDER REGIONAL',
      badgeDesc: 'Referência em fornecimento para construção no Algarve.',
      p1: 'A Solfil disponibiliza uma oferta completa de materiais de construção, acompanhando todas as fases da obra. Desde os materiais estruturais essenciais como cimento, tijolos, blocos, ferro, telhas, chaminés, areias e britas até às soluções de isolamento térmico e acústico, atualmente indispensáveis para o cumprimento das exigências das certificações energéticas.',
      p2: 'A nossa gama estende-se ainda aos pavimentos e revestimentos interiores e exteriores, bem como a um vasto conjunto de equipamentos sanitários, torneiras e mobiliário para casas de banho, garantindo soluções funcionais e esteticamente adequadas a cada projeto.',
      p3: 'Todos os produtos comercializados pela Solfil são certificados, assegurando qualidade, conformidade e total confiança na escolha dos nossos clientes.',
      p4: 'Damos especial importância à segurança, tanto nos produtos como nos nossos procedimentos de trabalho. Orgulhamo-nos do rigor com que operamos e garantimos entregas seguras, eficientes e um serviço sempre profissional e eficaz.',
      stats: [
        { label: 'Anos de Experiência', value: '25+' },
        { label: 'Obras Fornecidas', value: '10K+' },
        { label: 'Marcas Parceiras', value: '150+' },
        { label: 'Satisfação Garantida', value: '100%' },
      ]
    },
    EN: {
      tag: 'ABOUT US',
      title1: 'QUALITY THAT',
      title2: 'BUILDS THE FUTURE',
      badge: 'REGIONAL LEADER',
      badgeDesc: 'Reference in construction supply across the Algarve.',
      p1: 'Solfil provides a complete range of construction materials, supporting every stage of the building process. From essential structural materials such as cement, bricks, blocks, iron, tiles, chimneys, sand, and gravel, to thermal and acoustic insulation solutions, now vital for meeting energy certification requirements.',
      p2: 'Our range also extends to indoor and outdoor flooring and wall coverings, as well as a wide range of sanitary equipment, taps, and bathroom furniture, ensuring functional and aesthetically pleasing solutions for every project.',
      p3: 'All products marketed by Solfil are certified, ensuring quality, compliance, and total confidence for our clients.',
      p4: 'We place special emphasis on safety, both in our products and our working procedures. We take pride in the rigor with which we operate, guaranteeing safe, efficient deliveries and a professional, effective service.',
      stats: [
        { label: 'Years of Experience', value: '25+' },
        { label: 'Projects Supplied', value: '10K+' },
        { label: 'Partner Brands', value: '150+' },
        { label: 'Guaranteed Satisfaction', value: '100%' },
      ]
    }
  };

  const t = translations[lang];

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="space-y-12 lg:sticky lg:top-32">
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden aspect-[4/3] bg-solfil-black shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction" 
                className="w-full h-full object-cover opacity-70 grayscale"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[32px] shadow-xl hidden md:block max-w-[260px] border border-gray-50">
               <div className="flex items-center gap-4 mb-2">
                  <div className="w-8 h-8 bg-solfil-orange rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-[9px] text-solfil-black uppercase tracking-[0.2em]">{t.badge}</span>
               </div>
               <p className="text-[11px] font-normal text-solfil-gray leading-relaxed">{t.badgeDesc}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 pt-8">
            {t.stats.map((s, idx) => (
              <div key={idx} className="group">
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

        <div className="space-y-10">
          <div>
            <h3 className="text-solfil-orange font-black tracking-[0.4em] text-[10px] mb-8 uppercase">{t.tag}</h3>
            <h2 className="text-5xl md:text-6xl font-light leading-[1.05] mb-12 text-solfil-black uppercase tracking-tighter">
              {t.title1}<br /><span className="font-semibold italic">{t.title2}</span><span className="font-bold text-solfil-orange">.</span>
            </h2>
            
            <div className="space-y-8 text-solfil-gray font-normal leading-relaxed text-lg lg:text-xl">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
              <p className="font-medium text-solfil-black border-l-2 border-solfil-orange pl-8 py-2">
                {t.p4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
