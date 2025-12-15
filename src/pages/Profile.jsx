/**
 * Profile.jsx
 * * User Dashboard for managing orders and settings.
 * * Features: Tabbed navigation, Order History list, Address management.
 */

import React, { useState } from 'react';
import { Package, MapPin, Settings, LogOut, ChevronRight, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- MOCK DATA: Past Orders ---
const MOCK_ORDERS = [
  {
    id: "ORD-7782-XY",
    date: "Oct 12, 2025",
    total: 334.00,
    status: "Delivered",
    items: [
      { name: "Minimalist Wireless Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200" },
      { name: "Organic Cotton Hoodie", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=200" }
    ]
  },
  {
    id: "ORD-9921-AB",
    date: "Nov 01, 2025",
    total: 45.00,
    status: "Processing",
    items: [
      { name: "Ceramic Pour-Over Set", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=200" }
    ]
  }
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');

  // --- Render Functions for Tabs ---
  
  const renderOrders = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-serif mb-6">Order History</h2>
      {MOCK_ORDERS.map((order) => (
        <div key={order.id} className="border border-muted rounded-lg p-6 bg-white hover:shadow-sm transition-shadow">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b border-muted gap-4">
            <div>
              <p className="text-xs text-secondary uppercase tracking-wider mb-1">Order ID</p>
              <p className="font-medium text-primary">#{order.id}</p>
            </div>
            <div>
              <p className="text-xs text-secondary uppercase tracking-wider mb-1">Date</p>
              <p className="font-medium text-primary">{order.date}</p>
            </div>
            <div>
              <p className="text-xs text-secondary uppercase tracking-wider mb-1">Total</p>
              <p className="font-medium text-primary">${order.total.toFixed(2)}</p>
            </div>
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {order.status}
              </span>
            </div>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-16 h-20 bg-gray-100 rounded overflow-hidden border border-muted">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="flex items-center justify-center w-20 text-xs text-accent underline cursor-pointer">
              View Details
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAddresses = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-serif mb-6">Saved Addresses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Existing Address */}
        <div className="border border-muted rounded-lg p-6 bg-white relative group">
          <div className="absolute top-4 right-4 text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded">DEFAULT</div>
          <h3 className="font-medium text-primary mb-2">Home</h3>
          <p className="text-secondary text-sm leading-relaxed mb-4">
            Jane Doe<br />
            123 Quiet Lane, Apt 4B<br />
            New York, NY 10012<br />
            United States
          </p>
          <div className="flex gap-4 text-sm font-medium">
            <button className="text-primary hover:text-accent">Edit</button>
            <button className="text-red-500 hover:text-red-600">Remove</button>
          </div>
        </div>

        {/* Add New Button */}
        <button className="border border-dashed border-muted rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-secondary hover:text-primary hover:border-primary transition-colors min-h-[200px]">
          <MapPin size={24} />
          <span className="font-medium">Add New Address</span>
        </button>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6 max-w-lg">
      <h2 className="text-xl font-serif mb-6">Account Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-secondary mb-1">Full Name</label>
          <input type="text" defaultValue="Jane Doe" className="w-full p-3 border border-muted rounded-md focus:border-accent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary mb-1">Email</label>
          <input type="email" defaultValue="jane@example.com" disabled className="w-full p-3 border border-muted rounded-md bg-gray-50 text-gray-500 cursor-not-allowed" />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary mb-1">Current Password</label>
          <input type="password" placeholder="••••••••" className="w-full p-3 border border-muted rounded-md focus:border-accent outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary mb-1">New Password</label>
          <input type="password" placeholder="••••••••" className="w-full p-3 border border-muted rounded-md focus:border-accent outline-none" />
        </div>
        <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-accent transition-colors">
          Save Changes
        </button>
      </form>
    </div>
  );

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 min-h-[80vh]">
      
      {/* Header */}
      <div className="mb-12 border-b border-muted pb-8">
        <h1 className="text-4xl font-serif text-primary mb-2">My Account</h1>
        <p className="text-secondary">Welcome back, Jane.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* --- Sidebar Navigation --- */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            <button 
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'orders' ? 'bg-primary text-white' : 'text-secondary hover:bg-gray-100'}`}
            >
              <Package size={18} /> Orders
            </button>
            <button 
              onClick={() => setActiveTab('addresses')}
              className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'addresses' ? 'bg-primary text-white' : 'text-secondary hover:bg-gray-100'}`}
            >
              <MapPin size={18} /> Addresses
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'settings' ? 'bg-primary text-white' : 'text-secondary hover:bg-gray-100'}`}
            >
              <Settings size={18} /> Settings
            </button>
            
            <div className="h-px bg-muted my-2 hidden lg:block" />
            
            <Link to="/login" className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-red-500 hover:bg-red-50 transition-colors whitespace-nowrap">
              <LogOut size={18} /> Sign Out
            </Link>
          </nav>
        </aside>

        {/* --- Main Content Area --- */}
        <div className="flex-1 min-h-[500px]">
          {activeTab === 'orders' && renderOrders()}
          {activeTab === 'addresses' && renderAddresses()}
          {activeTab === 'settings' && renderSettings()}
        </div>

      </div>
    </div>
  );
};

export default Profile;