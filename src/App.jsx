import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/cart/CartDrawer';

// Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Shop from './pages/Shop';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar stays constant */}
      <Navbar />
      
      <CartDrawer />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Route for shop */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      {/* Footer stays constant */}
      <Footer />
    </div>
  );
}

export default App;