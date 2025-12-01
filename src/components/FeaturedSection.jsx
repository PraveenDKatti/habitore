/**
 * FeaturedSection.jsx
 * * Displays a grid of products with a specific theme (e.g., "New Arrivals").
 */

import React from 'react';
import ProductCard from './product/ProductCard';

// Mock Data - In a real app, this comes from your API/Service
const PRODUCTS = [
  {
    id: 1,
    name: "Minimalist Wireless Headphones - Noise Cancelling",
    category: "Electronics",
    price: 249.00,
    oldPrice: 299.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Organic Cotton Oversized Hoodie in Beige",
    category: "Fashion",
    price: 85.00,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=600",
    badge: "New"
  },
  {
    id: 3,
    name: "Matte Black Ceramic Pour-Over Set",
    category: "Home",
    price: 45.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=600",
    badge: null
  },
  {
    id: 4,
    name: "Smart Watch Series 7 - Midnight Aluminum",
    category: "Electronics",
    price: 399.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=600",
    badge: "Sale"
  }
];

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