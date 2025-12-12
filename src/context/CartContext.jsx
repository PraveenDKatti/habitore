/**
 * CartContext.jsx
 * * Provides global access to the shopping cart state.
 * * Manages adding items, removing items, calculating totals, and toggling the drawer.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // State for items in cart
  const [cartItems, setCartItems] = useState([]);
  
  // State for opening/closing the UI drawer
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from LocalStorage on boot
  useEffect(() => {
    const savedCart = localStorage.getItem('habitore-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save to LocalStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('habitore-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // --- Actions ---

  const addToCart = (product, quantity, color, size) => {
    setCartItems(prev => {
      // Create a unique ID for this variant (e.g., ID 1 + Black + Size M)
      const variantId = `${product.id}-${color || 'def'}-${size || 'def'}`;
      
      const existingItem = prev.find(item => item.variantId === variantId);

      if (existingItem) {
        // If exact item exists, just bump quantity
        return prev.map(item => 
          item.variantId === variantId 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        return [...prev, { 
          ...product, 
          variantId, 
          quantity, 
          selectedColor: color, 
          selectedSize: size 
        }];
      }
    });
    // Auto-open drawer when adding
    setIsCartOpen(true);
  };

  const removeFromCart = (variantId) => {
    setCartItems(prev => prev.filter(item => item.variantId !== variantId));
  };

  const updateQuantity = (variantId, newQty) => {
    if (newQty < 1) return;
    setCartItems(prev => prev.map(item => 
      item.variantId === variantId ? { ...item, quantity: newQty } : item
    ));
  };

  // --- Derived State (Calculated automatically) ---
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};