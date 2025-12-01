/**
 * ProductCard.jsx
 * * The reusable atomic unit for displaying a product.
 * * Features: Hover effects, 'Quick Add' button, and rating display.
 */

import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden border border-transparent hover:border-muted hover:shadow-lg transition-all duration-300">
      
      {/* --- Image Area --- */}
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        {/* Badge (Sale or New) */}
        {product.badge && (
          <span className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur text-primary text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
            {product.badge}
          </span>
        )}

        {/* Wishlist Button (Appears on Hover) */}
        <button className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:text-white">
          <Heart size={16} />
        </button>

        {/* Image (With subtle zoom on hover) */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick Add Button (Slides up on hover) */}
        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full py-3 bg-primary text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-accent transition-colors shadow-lg rounded-sm">
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </div>

      {/* --- Product Details --- */}
      <div className="p-4">
        {/* Category / Brand */}
        <p className="text-xs text-secondary mb-1 capitalize">{product.category}</p>
        
        {/* Title (Truncated to 2 lines) */}
        <h3 className="text-sm font-medium text-primary leading-snug mb-2 line-clamp-2 min-h-[2.5em] group-hover:text-accent transition-colors">
          {product.name}
        </h3>

        {/* Price & Rating Row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {product.oldPrice && (
               <span className="text-xs text-secondary line-through">${product.oldPrice}</span>
            )}
            <span className="text-base font-semibold text-primary">${product.price}</span>
          </div>

          {/* Rating Stars */}
          <div className="flex items-center gap-1">
            <Star size={12} fill="#eab308" className="text-yellow-500" />
            <span className="text-xs text-secondary font-medium">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;