import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

// Placeholder for Shop page (will build this later)
const ShopPlaceholder = () => (
  <div className="h-[50vh] flex items-center justify-center text-xl font-serif">
    Shop Category Page (Coming Soon)
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar stays constant */}
      <Navbar />
      
      <main className="flex-1">
        <Routes>
          {/* URL: / */}
          <Route path="/" element={<Home />} />
          
          {/* URL: /shop */}
          <Route path="/shop" element={<ShopPlaceholder />} />
          
          {/* URL: /product/123 */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      {/* Footer stays constant */}
      <Footer />
    </div>
  );
}

export default App;