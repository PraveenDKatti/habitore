/**
 * ProductDetails.jsx
 * * Displays full information for a single product.
 * * Features: Image Gallery, Color/Size Selection, Quantity Logic.
 */

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ArrowRight, Truck, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/product';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form States
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Simulate Fetching Data
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on load
    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const data = getProductById(id);
      if (data) {
        setProduct(data);
        if (data.sizes) setSelectedSize(data.sizes[0]);
      } else {
        // Handle not found
        setProduct(null);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;

  return (
    <div className="pt-10 pb-20 px-6 max-w-[1400px] mx-auto min-h-screen">

      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-secondary mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="#" className="hover:text-primary transition-colors">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-primary font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* --- LEFT: Image Gallery --- */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-muted relative">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover animate-in fade-in duration-500"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-md overflow-hidden border transition-all ${selectedImage === idx ? 'border-accent ring-1 ring-accent' : 'border-transparent hover:border-muted'}`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* --- RIGHT: Product Info --- */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-serif text-primary mb-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-medium text-primary">${product.price.toFixed(2)}</span>
            <div className="flex items-center gap-1 border-l border-muted pl-4">
              <Star size={16} fill="#eab308" className="text-yellow-500" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-secondary underline decoration-muted underline-offset-4 cursor-pointer">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <p className="text-secondary leading-relaxed mb-8 border-b border-muted pb-8">
            {product.description}
          </p>

          {/* Selectors */}
          <div className="space-y-6 mb-8">

            {/* Colors */}
            <div>
              <span className="text-sm font-medium text-primary block mb-3">Select Color</span>
              <div className="flex gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`w-8 h-8 rounded-full border border-gray-200 shadow-sm flex items-center justify-center transition-transform ${selectedColor === idx ? 'scale-110 ring-2 ring-accent ring-offset-2' : 'hover:scale-105'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes (Conditional render) */}
            {product.sizes && (
              <div>
                <span className="text-sm font-medium text-primary block mb-3">Select Size</span>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[3rem] px-3 py-2 border rounded-md text-sm font-medium transition-all ${selectedSize === size ? 'border-accent bg-accent text-white' : 'border-muted text-secondary hover:border-primary hover:text-primary'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Quantity */}
            <div className="flex items-center border border-muted rounded-md w-max">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-12 text-center font-medium text-primary">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              className="flex-1 bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-accent transition-all flex items-center justify-center gap-2 shadow-sm"
              onClick={() => addToCart(product, quantity, product.colors[selectedColor], selectedSize)}
            >
              <ShoppingBag size={20} /> Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-4 text-xs font-medium text-secondary">
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-primary" /> Free Delivery over $50
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-primary" /> 2 Year Warranty
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;