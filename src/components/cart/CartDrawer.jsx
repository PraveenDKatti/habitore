/**
 * CartDrawer.jsx
 * * A slide-over panel showing cart contents.
 * * Uses fixed positioning and z-index to overlay on top of the site.
 */

import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  // If closed, don't render anything (or use CSS translate for animation)
  // Here we use CSS translate for smooth animation
  return (
    <>
      {/* Backdrop (Dark overlay) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-muted">
            <h2 className="text-xl font-serif font-medium flex items-center gap-2">
              <ShoppingBag size={20} /> Your Bag
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <ShoppingBag size={48} className="text-gray-200" />
                <p className="text-secondary">Your bag is empty.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-accent font-medium hover:underline"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.variantId} className="flex gap-4 animate-in fade-in slide-in-from-right-4">
                  {/* Image */}
                  <div className="w-20 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-primary line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-secondary mt-1">
                        {item.selectedColor && <span className="mr-2 capitalize">Color: {item.selectedColor}</span>} 
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-muted rounded-md h-8">
                        <button 
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="px-2 h-full hover:bg-gray-50 text-secondary"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="px-2 h-full hover:bg-gray-50 text-secondary"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Price & Delete */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        <button 
                          onClick={() => removeFromCart(item.variantId)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer (Total & Checkout) */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-muted bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-secondary">Subtotal</span>
                <span className="text-xl font-serif font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 mb-4 text-center">Shipping & taxes calculated at checkout.</p>
              <button className="w-full py-4 bg-primary text-white font-medium rounded-md hover:bg-accent transition-colors flex items-center justify-center gap-2">
                Checkout Now <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;