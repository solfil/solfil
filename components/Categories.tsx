
import React from 'react';
import { CategoryItem } from '../types';

const categories: CategoryItem[] = [
  { id: '1', title: 'Bohemian', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600' },
  { id: '2', title: 'Contemporary', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600' },
  { id: '3', title: 'Minimalist', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=600' },
  { id: '4', title: 'Luxury', image: 'https://images.unsplash.com/photo-1616486341353-c5833ad8f01c?auto=format&fit=crop&q=80&w=600' },
  { id: '5', title: 'Modern', image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=600' },
];

const Categories: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">STYLE CATEGORIES</h2>
        <p className="text-slate-500 max-w-2xl text-lg">
          Explore a curated range of interior design styles—from clean minimalism to bold luxury. Find the aesthetic that speaks to you.
        </p>
      </div>

      <div className="flex overflow-x-auto no-scrollbar gap-6 pb-8 -mx-6 px-6 lg:mx-0 lg:px-0">
        {categories.map((cat) => (
          <div key={cat.id} className="min-w-[280px] md:min-w-[320px] group cursor-pointer">
            <div className="aspect-[3/4] rounded-[32px] overflow-hidden mb-4">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-center font-semibold text-lg">{cat.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
