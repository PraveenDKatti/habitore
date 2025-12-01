/**
 * CategoryGrid.jsx
 * * Displays top-level categories in a modern masonry/bento grid.
 * * crucial for directing users to specific niches immediately after the Hero.
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Modern Tech",
    subtitle: "Laptops, Audio & Smart Home",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800",
    size: "large", // Spans 2 columns
    link: "#"
  },
  {
    id: 2,
    title: "Men's Fashion",
    subtitle: "Summer Collection",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&q=80&w=600",
    size: "small",
    link: "#"
  },
  {
    id: 3,
    title: "Home & Living",
    subtitle: "Furniture & Decor",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600",
    size: "small",
    link: "#"
  },
  {
    id: 4,
    title: "Beauty & Care",
    subtitle: "Skincare Essentials",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&q=80&w=600",
    size: "small",
    link: "#"
  },
  {
    id: 5,
    title: "Women's Style",
    subtitle: "Trending Now",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800",
    size: "wide", // Spans wide on bottom
    link: "#"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto">
      
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl text-primary mb-2">Shop by Category</h2>
          <p className="text-secondary">Curated collections for every need.</p>
        </div>
        <a href="#" className="hidden md:flex items-center gap-1 text-sm font-medium text-accent hover:underline">
          View All Categories <ArrowUpRight size={16} />
        </a>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
        
        {categories.map((cat, index) => (
          <a 
            key={cat.id} 
            href={cat.link}
            className={`
              group relative overflow-hidden rounded-lg bg-gray-100
              ${cat.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
              ${cat.size === 'wide' ? 'md:col-span-2' : ''}
              ${cat.size === 'small' ? 'md:col-span-1' : ''}
              min-h-[200px] md:min-h-0
            `}
          >
            {/* Background Image with Zoom Effect */}
            <img 
              src={cat.image} 
              alt={cat.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient (Darker at bottom for text readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-xs font-medium text-white/80 uppercase tracking-wider mb-1">
                {cat.subtitle}
              </p>
              <h3 className="text-xl md:text-2xl text-white font-serif">
                {cat.title}
              </h3>
              
              {/* Fake 'Button' that appears on hover */}
              <div className="h-0 overflow-hidden group-hover:h-8 transition-all duration-300 mt-0 group-hover:mt-3">
                 <span className="text-sm font-medium text-white underline underline-offset-4">
                   Shop Now
                 </span>
              </div>
            </div>
          </a>
        ))}

      </div>

      {/* Mobile-only View All Link */}
      <div className="mt-8 md:hidden text-center">
        <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
          View All Categories <ArrowUpRight size={16} />
        </a>
      </div>

    </section>
  );
};

export default CategoryGrid;