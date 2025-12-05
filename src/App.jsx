import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        
        <FeaturedSection 
          title="Trending This Week" 
          subtitle="Top picks across fashion, tech, and living."
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;