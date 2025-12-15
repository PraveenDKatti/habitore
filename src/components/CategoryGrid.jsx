import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

const categories = [
  {
    id: 1,
    title: "Electronics", // Changed title to match your Data exact spelling
    subtitle: "Laptops, Audio & Smart Home",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800",
    size: "large",
    link: "/shop?category=Electronics" // NEW LINK
  },
  {
    id: 2,
    title: "Fashion",
    subtitle: "Summer Collection",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&q=80&w=600",
    size: "small",
    link: "/shop?category=Fashion" // NEW LINK
  },
  {
    id: 3,
    title: "Home & Living",
    subtitle: "Furniture & Decor",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600",
    size: "small",
    link: "/shop?category=Home%20%26%20Living" // Encoded URL for "Home & Living"
  },
  {
    id: 4,
    title: "Beauty",
    subtitle: "Skincare Essentials",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&q=80&w=600",
    size: "small",
    link: "/shop?category=Beauty" // NEW LINK
  },
  {
    id: 5,
    title: "Women's Style", 
    subtitle: "Trending Now",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800",
    size: "wide",
    link: "/shop?category=Fashion" // Map to Fashion as well
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto">
      {/* ... Header ... */}

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            to={cat.link} // Use React Router Link
            className={`
              group relative overflow-hidden rounded-lg bg-gray-100
              ${cat.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
              ${cat.size === 'wide' ? 'md:col-span-2' : ''}
              ${cat.size === 'small' ? 'md:col-span-1' : ''}
              min-h-[200px] md:min-h-0
            `}
          >
            {/* ... Image and Text remains same ... */}
             <img 
              src={cat.image} 
              alt={cat.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* ... Overlay and Text ... */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-xs font-medium text-white/80 uppercase tracking-wider mb-1">
                {cat.subtitle}
              </p>
              <h3 className="text-xl md:text-2xl text-white font-serif">
                {cat.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;