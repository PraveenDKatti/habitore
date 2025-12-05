/**
 * Footer.jsx
 * * The closing section of the application.
 * * Features: Newsletter capture, quick links, and social trust signals.
 * * Design: High contrast (Dark background) for a premium look.
 */

import React from 'react';
import { Facebook, Instagram, Twitter, Mail, ArrowRight, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* --- Top Section: Newsletter & Brand --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-b border-white/10 pb-16">
          <div>
            <h3 className="text-3xl font-serif mb-4">Habitore</h3>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Elevating your everyday with curated essentials. 
              Join our community for exclusive access to new drops and sustainable stories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h4 className="text-lg font-medium mb-2">Subscribe to the newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Enjoy 10% off your first order.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/10 rounded-md focus:outline-none focus:border-accent text-sm text-white placeholder:text-gray-500 transition-colors"
                />
              </div>
              <button type="button" className="px-6 py-3 bg-white text-black font-medium text-sm rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                Join <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* --- Middle Section: Links --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home & Living</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Habitore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Payments --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Habitore Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {/* Simple text or icons for payment methods */}
            <span className="flex items-center gap-1"><CreditCard size={14}/> Secure Payment</span>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;