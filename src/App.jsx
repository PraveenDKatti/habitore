import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/cart/CartDrawer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';

// Main Layout Wrapper (Holds Navbar/Footer for standard pages)
const MainLayout = () => (
  <div className="min-h-screen flex flex-col bg-background relative">
    <Navbar />
    <CartDrawer />
    <main className="flex-1">
      <Outlet /> {/* Renders the child route (Home, Shop, etc) */}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      
      {/* 1. Standard Routes (With Navbar/Footer) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>

      {/* 2. Authentication Routes (With AuthLayout - Split Screen) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* 3. Checkout Layout (Standalone) */}
      <Route path="/checkout" element={<Checkout />} />

    </Routes>
  );
}

export default App;