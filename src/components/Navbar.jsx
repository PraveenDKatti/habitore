/**
 * Navbar.jsx (Updated)
 * * Adapted for General E-commerce (Amazon-style scope, elegant UI).
 * * Categories now cover Tech, Fashion, Home, and Essentials.
 */

import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define broad categories for a general store
  const navLinks = [
    { name: "Deals", href: "#" }, // High priority for general retail
    { name: "Electronics", href: "#" },
    { name: "Fashion", href: "#" },
    { name: "Home & Living", href: "#" },
    { name: "Beauty", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-muted">
      
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Trigger */}
        <button 
          className="md:hidden text-primary hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="text-2xl font-serif font-medium tracking-tight cursor-pointer">
          Habitore
        </div>

        {/* Desktop Links (Mapped from array) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-primary hover:underline underline-offset-4 decoration-accent transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-primary">
          {/* Search is crucial for general stores, let's keep it accessible */}
          <button className="hover:text-accent transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          
          <button className="hidden sm:block hover:text-accent transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>

          <button className="relative hover:text-accent transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-muted p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
           {navLinks.map((link) => (
             <a key={link.name} href={link.href} className="text-lg font-serif text-primary">
               {link.name}
             </a>
           ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;