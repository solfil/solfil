
import React from 'react';

const services = [
  { title: 'Residential Interiors', icon: '🏠' },
  { title: 'Commercial Spaces', icon: '🏢' },
  { title: 'Exterior Decoration', icon: '🌳' },
  { title: 'Remodeling', icon: '🛠️' },
  { title: 'Renovations', icon: '🏗️' },
  { title: 'Colour Consultation', icon: '🎨' },
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-slate-800 rounded-[48px] overflow-hidden">
        <div className="grid lg:grid-cols-2 items-stretch">
          
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-6">OUR SERVICES</h2>
            <p className="text-slate-400 text-lg mb-12">
              Tailored design solutions for every space. From concept to completion, we offer a full range of interior design services—blending creativity and functionality to bring your vision to life.
            </p>

            <div className="space-y-2">
              {services.map((service, idx) => (
                <div 
                  key={service.title}
                  className="group flex items-center justify-between p-5 rounded-2xl hover:bg-white/10 transition-all cursor-pointer border-b border-white/10 last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{service.icon}</span>
                    <span className="text-white text-xl font-medium">{service.title}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative p-12">
            <div className="h-full rounded-[32px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000" 
                alt="Service showcase" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
