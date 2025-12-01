/**
 * Hero.jsx
 * * The landing section for a multi-category store.
 * * Uses a 'Split Layout' to balance text and visuals.
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full border-b border-muted overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:h-[550px]">
        
        {/* --- Left Content: The Pitch --- */}
        <div className="flex flex-col justify-center items-start space-y-6 py-12 md:py-0 z-10">
          
          <div className="inline-block px-3 py-1 bg-white border border-muted rounded-full text-xs font-medium text-secondary uppercase tracking-wider">
            New Collection 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl text-primary leading-[1.1]">
            Elevate Your <br />
            <span className="italic text-accent">Everyday.</span>
          </h1>
          
          <p className="text-secondary text-lg max-w-md leading-relaxed">
            From cutting-edge tech to timeless fashion. Discover quality essentials for every aspect of your life.
          </p>

          <div className="flex gap-4 pt-2">
            <button className="px-8 py-3.5 bg-primary text-white text-sm font-medium rounded-md hover:bg-accent transition-colors flex items-center gap-2">
              Start Shopping <ArrowRight size={16} />
            </button>
            <button className="px-8 py-3.5 bg-white border border-muted text-primary text-sm font-medium rounded-md hover:border-primary transition-colors">
              View Deals
            </button>
          </div>

          {/* Trust Signals (Important for general retail) */}
          <div className="pt-8 flex gap-6 text-xs text-secondary font-medium">
            <span className="flex items-center gap-1">✦ Free Shipping over $50</span>
            <span className="flex items-center gap-1">✦ 30-Day Returns</span>
          </div>
        </div>

        {/* --- Right Content: The Visuals --- */}
        {/* Using a background image with an overlay for a clean look */}
        <div className="relative h-[400px] md:h-full w-full">
           {/* Decorative abstract shape behind image */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#EBE9E4] to-transparent rounded-full opacity-50 blur-3xl"></div>
           
           {/* Main Hero Image */}
           <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" 
            alt="Store Collection" 
            className="absolute inset-0 w-full h-full object-cover md:object-contain object-center mix-blend-multiply opacity-90"
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;