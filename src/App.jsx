import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid'; // Import it

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <CategoryGrid />
      </main>
    </div>
  );
}

export default App;