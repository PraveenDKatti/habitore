import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();
  
  // Search State
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to Shop page with query param
      navigate(`/shop?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // Clear input
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Deals", href: "/shop" },
    { name: "Electronics", href: "/shop" },
    { name: "Fashion", href: "/shop" },
    { name: "Home & Living", href: "/shop" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-muted">
      
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Mobile Toggle & Logo */}
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <Link to="/" className="text-2xl font-serif font-medium tracking-tight">
            Habitore
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-secondary whitespace-nowrap">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search Bar (Centered/Expanded) */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-sm relative group">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-4 pr-10 bg-white/50 border border-muted rounded-full text-sm focus:outline-none focus:border-accent focus:bg-white transition-all"
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-accent">
            <Search size={18} />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center gap-5 text-primary">
          {/* Mobile Search Icon (Toggles a simpler view or goes to shop) */}
          <button className="md:hidden text-primary">
            <Search size={20} />
          </button>

          <Link to="/account" className="hidden sm:block hover:text-accent transition-colors">
            <User size={20} strokeWidth={1.5} />
          </Link>

          <button 
            className="relative hover:text-accent transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
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
           {/* Mobile Search Input */}
           <form onSubmit={handleSearch} className="relative">
             <input 
               type="text" 
               placeholder="Search..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full py-3 pl-4 pr-10 bg-white border border-muted rounded-md"
             />
             <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
               <Search size={18} />
             </button>
           </form>
           
           {navLinks.map((link) => (
             <Link key={link.name} to={link.href} className="text-lg font-serif text-primary" onClick={() => setIsMobileMenuOpen(false)}>
               {link.name}
             </Link>
           ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;