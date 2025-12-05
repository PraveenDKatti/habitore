import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedSection from '../components/FeaturedSection';

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryGrid />
      
      <FeaturedSection 
        title="Trending This Week" 
        subtitle="Top picks across fashion, tech, and living."
      />
    </>
  );
};

export default Home;