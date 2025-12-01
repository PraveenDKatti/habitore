import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedSection from './components/FeaturedSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <CategoryGrid />
        
        {/* Pass props to reuse this section later for different categories */}
        <FeaturedSection 
          title="Trending This Week" 
          subtitle="Top picks across fashion, tech, and living."
        />
        
        {/* Spacer for visual breathing room before footer */}
        <div className="h-20"></div>
      </main>
    </div>
  );
}

export default App;