import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-serif-custom text-[var(--text-primary)]">
          Habitore
        </h1>
        <p className="text-[var(--text-muted)] tracking-wide uppercase text-sm">
          Curated Essentials for a Mindful Habitat
        </p>
      </div>

      <button className="px-8 py-3 bg-accent text-white rounded shadow-sm hover:opacity-90 transition-opacity">
        Explore Collection
      </button>
    </div>
  );
}

export default App;