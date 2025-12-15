import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      
      {/* Large visual 404 */}
      <h1 className="text-[120px] font-serif leading-none text-muted select-none">404</h1>
      
      <div className="space-y-4 -mt-10 relative z-10">
        <h2 className="text-3xl font-serif text-primary">Page not found</h2>
        <p className="text-secondary max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-accent transition-colors"
          >
            <Home size={18} /> Go Home
          </Link>
          <Link 
            to="/shop" 
            className="flex items-center gap-2 px-6 py-3 border border-muted text-primary rounded-md hover:border-primary transition-colors"
          >
            <ArrowLeft size={18} /> Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;