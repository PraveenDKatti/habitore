/**
 * FeaturedSection.jsx
 * * Displays a grid of products with a specific theme (e.g., "New Arrivals").
 */

import React from 'react';
import ProductCard from './product/ProductCard';
import { PRODUCTS } from '../data/product';

const FeaturedSection = ({ title, subtitle }) => {
  return (
    <section className="py-16 px-6 max-w-[1400px] mx-auto">
      
      {/* Section Header */}
      <div className="flex items-end justify-between mb-8 border-b border-muted pb-4">
        <div>
          <h2 className="text-2xl md:text-3xl text-primary font-serif">{title}</h2>
          <p className="text-secondary text-sm mt-1">{subtitle}</p>
        </div>
        
        <a href="#" className="hidden sm:block text-sm font-medium text-primary hover:text-accent transition-colors">
          View All Products &rarr;
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Mobile-only 'View All' */}
      <div className="mt-8 text-center sm:hidden">
        <button className="px-6 py-2 border border-muted rounded-full text-sm font-medium hover:border-primary transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FeaturedSection;