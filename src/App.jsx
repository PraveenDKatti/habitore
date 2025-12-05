import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar stays constant */}
      <Navbar />
      
      <main className="flex-1">
        <Routes>
          {/* URL: / */}
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {/* Footer stays constant */}
      <Footer />
    </div>
  );
}

export default App;