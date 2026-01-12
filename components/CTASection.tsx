
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 mb-24">
      <div className="relative rounded-[48px] overflow-hidden h-[400px] flex items-center justify-center text-center">
        <img 
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1500" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          alt="Modern villa"
          loading="lazy"
          decoding="async"
        />
        <div className="relative z-10 px-6 space-y-6">
           <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Your Dream Space<br />Starts Here</h2>
           <p className="text-white/80 text-lg max-w-xl mx-auto">Let's bring your vision to life with expert design, flawless execution, and a touch of creativity.</p>
           <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-2xl">
              Talk to us now
           </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
