/**
 * Navbar.jsx (Updated)
 * * Adapted for General E-commerce (Amazon-style scope, elegant UI).
 * * Categories now cover Tech, Fashion, Home, and Essentials.
 */

import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();

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

        {/* Changed Logo div to Link */}
        <Link to="/" className="text-2xl font-serif font-medium tracking-tight cursor-pointer">
          Habitore
        </Link>

        {/* anchor which causes a full page refresh */}
        {/* Change Nav Items to Link for instant, app-like navigation*/}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href} // Make sure your navLinks array uses valid paths like '/shop' or '/'
              className="hover:text-primary hover:underline underline-offset-4 decoration-accent transition-all"
            >
              {link.name}
            </Link>
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

          <button
            className="relative hover:text-accent transition-colors"
            onClick={() => setIsCartOpen(true)} // 3. Add Click Event
          >
            <ShoppingBag size={20} strokeWidth={1.5} />

            {/* 4. Conditional Rendering of Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-muted p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lg font-serif text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;