/**
 * FilterSidebar.jsx
 * * Sidebar containing filter options for the Shop page.
 * * Features: Categories (Radio), Price Range (Range/Inputs), and Sort.
 */

import React from 'react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const FilterSidebar = ({ filters, setFilters, isOpen, closeMobile }) => {
  
  const handleCategoryChange = (category) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const handlePriceChange = (e) => {
    setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }));
  };

  const sortOptions = [
    { label: "Newest Arrivals", value: "newest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Best Rating", value: "rating" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={closeMobile} />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:static top-0 left-0 z-50 h-full w-[280px] bg-white lg:bg-transparent border-r lg:border-none border-muted p-6 lg:p-0 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <span className="text-lg font-serif">Filters</span>
          <button onClick={closeMobile}><SlidersHorizontal size={20} /></button>
        </div>
        
        {/* --- Sort By --- */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Sort By</h3>
          <div className="space-y-2">
            {sortOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="radio" 
                  name="sort" 
                  value={option.value}
                  checked={filters.sortBy === option.value}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  className="accent-accent w-4 h-4 cursor-pointer"
                />
                <span className="text-secondary text-sm group-hover:text-primary transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        
        {/* --- Price Filter --- */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Max Price</h3>
          <div className="px-1">
            <input 
              type="range" 
              min="0" 
              max="1000" 
              step="50"
              value={filters.maxPrice}
              onChange={handlePriceChange}
              className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between mt-2 text-xs text-secondary font-medium">
              <span>$0</span>
              <span>${filters.maxPrice}+</span>
            </div>
          </div>
        </div>

        {/* --- Category Filter --- */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center justify-between">
            Categories <ChevronDown size={16} />
          </h3>
          <div className="space-y-2">
            {['All', 'Electronics', 'Fashion', 'Home & Living', 'Beauty'].map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="radio" 
                  name="category"
                  checked={filters.category === cat}
                  onChange={() => handleCategoryChange(cat)}
                  className="accent-accent w-4 h-4 cursor-pointer"
                />
                <span className={`text-sm ${filters.category === cat ? 'text-primary font-medium' : 'text-secondary group-hover:text-primary'}`}>
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

      </aside>
    </>
  );
};

export default FilterSidebar;