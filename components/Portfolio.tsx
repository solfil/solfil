
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Images Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-[32px] overflow-hidden aspect-[4/5]">
               <img 
                 src="https://images.unsplash.com/photo-1616486341353-c5833ad8f01c?auto=format&fit=crop&q=80&w=600" 
                 className="w-full h-full object-cover" 
                 loading="lazy"
                 decoding="async"
               />
            </div>
            <div className="rounded-[32px] overflow-hidden aspect-square">
               <img 
                 src="https://images.unsplash.com/photo-1617806118233-f8e137453f9c?auto=format&fit=crop&q=80&w=600" 
                 className="w-full h-full object-cover" 
                 loading="lazy"
                 decoding="async"
               />
            </div>
          </div>
          <div className="flex items-center">
             <div className="rounded-[32px] overflow-hidden aspect-[4/6] w-full">
               <img 
                 src="https://images.unsplash.com/photo-1618221469555-7f3ad97540c6?auto=format&fit=crop&q=80&w=600" 
                 className="w-full h-full object-cover" 
                 loading="lazy"
                 decoding="async"
               />
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-5 space-y-8">
           <h2 className="text-5xl lg:text-6xl font-bold leading-tight uppercase">DESIGNS THAT<br />TELL YOUR STORY</h2>
           <p className="text-lg text-slate-500 leading-relaxed">
             Explore our portfolio of completed projects each a reflection of the lifestyle, taste, and vision of its owners. From intimate corners to bold statement spaces, every design in our gallery is crafted with purpose, passion, and heart.
           </p>
           <button className="bg-black text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
             Explore Our Works
           </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
