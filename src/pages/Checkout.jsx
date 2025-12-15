/**
 * Checkout.jsx
 * * Layout: Forms Left | Order Summary Right (Standard).
 * * Features: Accordion-style Payment Toggles (Card, UPI, COD).
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Lock, CreditCard, Banknote, Smartphone, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Payment Method State ('card', 'upi', 'cod')
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Calculations
  const shippingCost = cartTotal > 50 ? 0 : 15;
  const tax = cartTotal * 0.08;
  const finalTotal = cartTotal + shippingCost + tax;

  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      alert(`Order Placed via ${paymentMethod.toUpperCase()}!`);
      navigate('/');
    }, 2000);
  };

  if (cartItems.length === 0) return null;

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* --- LEFT COLUMN: Forms & Action (Main Interaction) --- */}
      <div className="w-full lg:w-[58%] px-6 lg:px-20 py-10 order-2 lg:order-1">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="text-2xl font-serif font-medium text-primary">Habitore</Link>
          <Link to="/cart" className="text-xs text-secondary hover:text-primary flex items-center gap-1">
            <ChevronLeft size={14} /> Back to Cart
          </Link>
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-secondary mb-8">
          <span className="text-primary font-medium">Information</span>
          <span>&gt;</span>
          <span className="text-primary font-medium">Shipping</span>
          <span>&gt;</span>
          <span className="font-medium text-black">Payment</span>
        </div>

        <form onSubmit={handlePayment} className="max-w-xl">
          
          {/* 1. Contact & Shipping Group */}
          <section className="mb-10">
            <h3 className="text-lg font-medium mb-4">Contact & Shipping</h3>
            <div className="space-y-4">
              <input type="email" placeholder="Email Address" className="w-full p-3 bg-white border border-muted rounded-md focus:border-accent outline-none transition-colors" required />
              
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="p-3 bg-white border border-muted rounded-md focus:border-accent outline-none transition-colors" required />
                <input type="text" placeholder="Last Name" className="p-3 bg-white border border-muted rounded-md focus:border-accent outline-none transition-colors" required />
              </div>
              
              <input type="text" placeholder="Street Address" className="w-full p-3 bg-white border border-muted rounded-md focus:border-accent outline-none transition-colors" required />
              
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="City" className="p-3 bg-white border border-muted rounded-md focus:border-accent outline-none transition-colors" required />
                <input type="text" placeholder="State" className="p-3 bg-white border border-muted rounded-md focus:border-accent outline-none transition-colors" required />
                <input type="text" placeholder="ZIP" className="p-3 bg-white border border-muted rounded-md focus:border-accent outline-none transition-colors" required />
              </div>
            </div>
          </section>

          {/* 2. Payment Toggles (The Accordion) */}
          <section className="mb-10">
            <h3 className="text-lg font-medium mb-4">Payment Method</h3>
            
            <div className="border border-muted rounded-lg overflow-hidden">
              
              {/* OPTION A: Credit Card */}
              <div className={`border-b border-muted transition-colors ${paymentMethod === 'card' ? 'bg-gray-50' : 'bg-white'}`}>
                <label className="flex items-center gap-3 p-4 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={paymentMethod === 'card'} 
                    onChange={() => setPaymentMethod('card')}
                    className="accent-accent w-4 h-4"
                  />
                  <div className="flex items-center gap-2 flex-1">
                    <CreditCard size={18} className="text-secondary" />
                    <span className="font-medium text-sm">Credit / Debit Card</span>
                  </div>
                  {/* Icons */}
                  <div className="flex gap-1 opacity-60">
                    <div className="w-8 h-5 bg-white border border-muted rounded"></div>
                    <div className="w-8 h-5 bg-white border border-muted rounded"></div>
                  </div>
                </label>

                {/* Expanded Card Form */}
                {paymentMethod === 'card' && (
                  <div className="p-4 pt-0 pl-11 animate-in slide-in-from-top-2">
                    <div className="space-y-3">
                      <input type="text" placeholder="Card Number" className="w-full p-3 bg-white border border-muted rounded-md focus:border-accent outline-none" />
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder="MM / YY" className="p-3 bg-white border border-muted rounded-md focus:border-accent outline-none" />
                        <input type="text" placeholder="CVC" className="p-3 bg-white border border-muted rounded-md focus:border-accent outline-none" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* OPTION B: UPI */}
              <div className={`border-b border-muted transition-colors ${paymentMethod === 'upi' ? 'bg-gray-50' : 'bg-white'}`}>
                <label className="flex items-center gap-3 p-4 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={paymentMethod === 'upi'} 
                    onChange={() => setPaymentMethod('upi')}
                    className="accent-accent w-4 h-4"
                  />
                  <div className="flex items-center gap-2">
                    <Smartphone size={18} className="text-secondary" />
                    <span className="font-medium text-sm">UPI / VPA</span>
                  </div>
                </label>

                {/* Expanded UPI Form */}
                {paymentMethod === 'upi' && (
                  <div className="p-4 pt-0 pl-11 animate-in slide-in-from-top-2">
                      <input type="text" placeholder="username@upi" className="w-full p-3 bg-white border border-muted rounded-md focus:border-accent outline-none" />
                      <p className="text-xs text-secondary mt-2">Open your UPI app to approve the request.</p>
                  </div>
                )}
              </div>

              {/* OPTION C: COD */}
              <div className={`transition-colors ${paymentMethod === 'cod' ? 'bg-gray-50' : 'bg-white'}`}>
                <label className="flex items-center gap-3 p-4 cursor-pointer">
                  <input 
                    type="radio" 
                    name="payment" 
                    checked={paymentMethod === 'cod'} 
                    onChange={() => setPaymentMethod('cod')}
                    className="accent-accent w-4 h-4"
                  />
                  <div className="flex items-center gap-2">
                    <Banknote size={18} className="text-secondary" />
                    <span className="font-medium text-sm">Cash on Delivery</span>
                  </div>
                </label>

                  {/* Expanded COD Message */}
                  {paymentMethod === 'cod' && (
                  <div className="p-4 pt-0 pl-11 animate-in slide-in-from-top-2">
                      <div className="flex items-start gap-2 bg-white p-3 rounded border border-muted">
                        <CheckCircle size={16} className="text-accent mt-0.5" />
                        <p className="text-xs text-secondary">
                            Pay securely with cash upon delivery.
                        </p>
                      </div>
                  </div>
                )}
              </div>

            </div>
          </section>

          {/* Pay Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-primary text-white font-medium rounded-md hover:bg-accent hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            {loading ? 'Processing...' : (
              paymentMethod === 'cod' ? 'Place Order' : `Pay $${finalTotal.toFixed(2)}`
            )}
          </button>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-secondary">
             <Lock size={12} /> SSL Encrypted Payment
          </div>

        </form>
      </div>

      {/* --- RIGHT COLUMN: Order Summary (Passive Info) --- */}
      <div className="w-full lg:w-[42%] bg-[#F9F8F4] border-l border-muted px-6 lg:px-12 py-10 order-1 lg:order-2">
        <div className="max-w-md lg:sticky lg:top-10">
          
          {/* Items List */}
          <div className="space-y-4 mb-8">
            {cartItems.map((item) => (
              <div key={item.variantId} className="flex items-center gap-4">
                <div className="relative w-16 h-20 border border-muted rounded bg-white overflow-hidden">
                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full z-10">
                    {item.quantity}
                  </span>
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-primary line-clamp-2">{item.name}</h4>
                  <p className="text-xs text-secondary">{item.selectedSize} / {item.selectedColor}</p>
                </div>
                <span className="text-sm font-medium text-primary">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="h-px bg-muted w-full my-6"></div>

          {/* Cost Breakdown */}
          <div className="space-y-2 text-sm text-primary">
            <div className="flex justify-between">
              <span className="text-secondary">Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Shipping</span>
              <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Taxes (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          <div className="h-px bg-muted w-full my-6"></div>

          {/* Final Total */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Total</span>
            <div className="flex items-end gap-2">
              <span className="text-xs text-secondary mb-1">USD</span>
              <span className="text-2xl font-serif font-medium">${finalTotal.toFixed(2)}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Checkout;