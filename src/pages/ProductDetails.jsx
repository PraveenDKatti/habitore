import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Catches the ID from URL (e.g., /product/123)

  return (
    <div className="pt-10 pb-20 px-6 max-w-[1400px] mx-auto min-h-[60vh]">
      <div className="text-sm text-secondary mb-6">
        Home / Shop / <span className="text-primary">Product #{id}</span>
      </div>
      
      <h1 className="text-4xl font-serif text-primary mb-4">Product View: {id}</h1>
      <p className="text-secondary">
        This is where the full details, gallery, and "Add to Cart" logic will go.
      </p>
    </div>
  );
};

export default ProductDetails;