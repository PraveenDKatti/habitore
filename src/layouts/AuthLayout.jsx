/**
 * AuthLayout.jsx
 * * A split-screen layout for authentication pages.
 * * Left: Editorial Image. Right: The Form.
 */

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-background">
      
      {/* --- Left Column: Editorial Image (Hidden on mobile) --- */}
      <div className="hidden lg:flex w-1/2 relative bg-primary">
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        {/* Changed image to a broader 'lifestyle' shot (Fashion + Architecture) */}
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" 
          alt="Habitore Lifestyle" 
          className="w-full h-full object-cover opacity-90"
        />
        
        <div className="absolute bottom-10 left-10 z-20 text-white">
          <h2 className="text-4xl font-serif mb-2">Habitore</h2>
          
          {/* --- UPDATED QUOTE --- */}
          {/* Fits the "Modern Department Store" vibe better */}
          <p className="text-white/90 max-w-md text-lg leading-relaxed font-light">
            "Elevate your everyday. From the clothes you wear to the technology you use, discover quality in every detail."
          </p>

        </div>
      </div>

      {/* --- Right Column: The Form --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 relative">
        
        {/* Back to Home Button */}
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> Back to Store
        </Link>

        {/* Dynamic Content (Login or Register) goes here */}
        <div className="w-full max-w-md">
          <Outlet /> 
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;