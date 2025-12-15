import React, { useState, useEffect } from 'react';
import { Filter, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom'; // NEW IMPORT
import ProductCard from '../components/product/ProductCard';
import FilterSidebar from '../components/product/FilterSidebar';
import {PRODUCTS} from '../data/product'

const Shop = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams(); // Hook to read URL
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  
  // Get Search Query from URL (e.g. ?q=hoodie)
  const searchQuery = searchParams.get('q') || '';

  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: 0,
    maxPrice: 1000,
    sortBy: 'newest'
  });

  useEffect(() => {
    let result = [...PRODUCTS];

    // 1. Apply Search Query (if it exists)
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.category.toLowerCase().includes(lowerQuery)
      );
    }

    // 2. Filter by Category
    if (filters.category !== 'All') {
      result = result.filter(p => p.category === filters.category);
    }

    // 3. Filter by Price
    result = result.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);

    // 4. Sort
    if (filters.sortBy === 'price_asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price_desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  }, [filters, searchQuery]); // Re-run when filters OR search query changes

  // Clear search helper
  const clearSearch = () => {
    setSearchParams({}); // Remove ?q= from URL
  };

  return (
    <div className="pt-10 pb-20 px-6 max-w-[1400px] mx-auto min-h-screen">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-serif text-primary mb-2">
            {searchQuery ? `Search results for "${searchQuery}"` : 'Shop All'}
          </h1>
          <p className="text-secondary">
            {filteredProducts.length} items found
          </p>
        </div>
        
        <button 
          onClick={() => setIsMobileFilterOpen(true)}
          className="md:hidden flex items-center gap-2 px-4 py-2 border border-muted rounded text-sm font-medium"
        >
          <Filter size={16} /> Filters
        </button>
      </div>

      {/* Active Search Badge (User can clear it) */}
      {searchQuery && (
        <div className="mb-6 flex items-center gap-2">
          <span className="text-sm text-secondary">Active Filter:</span>
          <button 
            onClick={clearSearch}
            className="flex items-center gap-1 px-3 py-1 bg-primary text-white text-xs rounded-full hover:bg-accent transition-colors"
          >
            "{searchQuery}" <X size={12} />
          </button>
        </div>
      )}

      <div className="flex gap-12">
        {/* Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0 sticky top-28 h-fit">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Mobile Drawer */}
        {isMobileFilterOpen && (
           <div className="fixed inset-0 z-50 flex lg:hidden">
             <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
             <div className="relative bg-background w-80 h-full p-4 shadow-xl animate-in slide-in-from-left">
               <FilterSidebar 
                  filters={filters} 
                  setFilters={setFilters} 
                  isOpen={isMobileFilterOpen}
                  closeMobile={() => setIsMobileFilterOpen(false)} 
                />
             </div>
           </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border border-dashed border-muted rounded-lg">
              <p className="text-secondary text-lg">
                No results found for "{searchQuery}".
              </p>
              <button 
                onClick={clearSearch}
                className="mt-4 text-accent underline cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;