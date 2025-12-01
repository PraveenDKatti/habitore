import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Placeholder for the next section: Categories */}
        <div className="py-20 text-center">
            <p className="text-secondary text-sm">Scroll down for Categories...</p>
        </div>
      </main>
    </div>
  );
}

export default App;