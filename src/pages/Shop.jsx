import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react'; // Note: Ensure you import 'Filter' or 'SlidersHorizontal' depending on what you use
import ProductCard from '../components/product/ProductCard';
import FilterSidebar from '../components/product/FilterSidebar';

// --- MOCK DATA ---
const ALL_PRODUCTS = [
  { id: 1, name: "Minimalist Wireless Headphones", category: "Electronics", price: 249.00, rating: 4.8, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Organic Cotton Hoodie", category: "Fashion", price: 85.00, rating: 4.5, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Ceramic Pour-Over Set", category: "Home & Living", price: 45.00, rating: 4.9, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Smart Watch Series 7", category: "Electronics", price: 399.00, rating: 4.7, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=600" },
  { id: 5, name: "Linen Lounge Chair", category: "Home & Living", price: 450.00, rating: 4.6, image: "https://images.unsplash.com/photo-1594051516086-63554ac395aa?auto=format&fit=crop&q=80&w=600" },
  { id: 6, name: "Running Sneakers", category: "Fashion", price: 120.00, rating: 4.4, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600" },
];

const Shop = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // FIXED: State matches the Sidebar (singular category, string)
  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: 0,
    maxPrice: 1000,
    sortBy: 'newest'
  });

  const [filteredProducts, setFilteredProducts] = useState(ALL_PRODUCTS);

  // Logic to apply filters
  useEffect(() => {
    let result = [...ALL_PRODUCTS];

    // 1. Filter by Category (FIXED logic)
    if (filters.category !== 'All') {
      result = result.filter(p => p.category === filters.category);
    }

    // 2. Filter by Price
    result = result.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);

    // 3. Sort
    if (filters.sortBy === 'price_asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price_desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  }, [filters]);

  return (
    <div className="pt-10 pb-20 px-6 max-w-[1400px] mx-auto min-h-screen">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-serif text-primary mb-2">Shop All</h1>
          <p className="text-secondary">Explore our curated collection of essentials.</p>
        </div>
        
        {/* Mobile Filter Toggle */}
        <button 
          onClick={() => setIsMobileFilterOpen(true)}
          className="md:hidden flex items-center gap-2 px-4 py-2 border border-muted rounded text-sm font-medium"
        >
          <Filter size={16} /> Filters
        </button>
      </div>

      <div className="flex gap-12">
        
        {/* --- Desktop Sidebar --- */}
        <div className="hidden md:block w-64 flex-shrink-0 sticky top-28 h-fit">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* --- Mobile Sidebar (Drawer) --- */}
        {isMobileFilterOpen && (
           <div className="fixed inset-0 z-50 flex lg:hidden">
             <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
             <div className="relative bg-background w-80 h-full p-4 shadow-xl animate-in slide-in-from-left">
               {/* FIXED: Prop name matches FilterSidebar definition */}
               <FilterSidebar 
                  filters={filters} 
                  setFilters={setFilters} 
                  isOpen={isMobileFilterOpen}
                  closeMobile={() => setIsMobileFilterOpen(false)} 
                />
             </div>
           </div>
        )}

        {/* --- Product Grid --- */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border border-dashed border-muted rounded-lg">
              <p className="text-secondary text-lg">No products match your filters.</p>
              <button 
                onClick={() => setFilters({ category: 'All', minPrice: 0, maxPrice: 1000, sortBy: 'newest' })}
                className="mt-4 text-accent underline cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Shop;