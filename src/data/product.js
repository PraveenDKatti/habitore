/**
 * products.js
 * * Acts as the single source of truth for the application.
 * * Contains all product details, variants, and metadata.
 */

export const PRODUCTS = [
  {
    id: 1,
    name: "Minimalist Wireless Headphones",
    category: "Electronics",
    price: 249.00,
    oldPrice: 299.00,
    rating: 4.8,
    reviews: 124,
    description: "Experience pure sound with our noise-cancelling minimalist headphones. Crafted with premium materials for all-day comfort and up to 40 hours of battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=800"
    ],
    colors: ["#1a1a1a", "#e5e5e5", "#3b82f6"],
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Organic Cotton Oversized Hoodie",
    category: "Fashion",
    price: 85.00,
    rating: 4.5,
    reviews: 89,
    description: "Ethically sourced organic cotton hoodie. Features a relaxed fit, drop shoulders, and a kangaroo pocket. Perfect for layering in any season.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=800"
    ],
    colors: ["#e5e5e5", "#BC6C4E", "#333333"],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "New"
  },
  {
    id: 3,
    name: "Ceramic Pour-Over Set",
    category: "Home & Living",
    price: 45.00,
    rating: 4.9,
    reviews: 42,
    description: "Brew the perfect cup with this hand-thrown ceramic pour-over set. Includes the dripper and matching carafe.",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=800",
    images: [
        "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=800"
    ],
    colors: ["#2A2A2A"],
    badge: null
  },
  {
    id: 4,
    name: "Smart Watch Series 7",
    category: "Electronics",
    price: 399.00,
    rating: 4.7,
    reviews: 215,
    description: "Stay connected with the latest smart technology. Monitors health, sleep, and notifications seamlessly.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800"],
    colors: ["#000000", "#Silver"],
    badge: "Sale"
  },
  {
    id: 5,
    name: "Linen Lounge Chair",
    category: "Home & Living",
    price: 450.00,
    rating: 4.6,
    reviews: 18,
    description: "Mid-century modern inspired lounge chair. Upholstered in premium linen with a solid oak frame.",
    image: "https://images.unsplash.com/photo-1594051516086-63554ac395aa?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1594051516086-63554ac395aa?auto=format&fit=crop&q=80&w=800"],
    colors: ["#EBE9E4", "#8F9E83"],
    badge: null
  },
  {
    id: 6,
    name: "Running Sneakers",
    category: "Fashion",
    price: 120.00,
    rating: 4.4,
    reviews: 56,
    description: "Lightweight performance sneakers designed for the urban runner. Breathable mesh and high-response sole.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"],
    colors: ["#FFFFFF", "#FF0000"],
    sizes: ["7", "8", "9", "10", "11"],
    badge: null
  }
];

// Helper to get a single product (simulates an API call)
export const getProductById = (id) => {
  return PRODUCTS.find(product => product.id === Number(id));
};