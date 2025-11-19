import { useState } from 'react';
import LibraryGlassCards from './components/LibraryGlassCards';
import LibraryMap from './components/LibraryMap';

function App() {
  const [view, setView] = useState<'cards' | 'map'>('cards');

  return (
    <div className="min-h-screen">
      {/* Top right bar with logo and navigation */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        {/* Navigation */}
        <div className="flex gap-2 bg-white/80 backdrop-blur-lg rounded-full p-2 shadow-lg border border-gray-200">
          <button
            onClick={() => setView('cards')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              view === 'cards'
                ? 'bg-gradient-to-r from-purple-600 to-teal-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Cards View
          </button>
          <button
            onClick={() => setView('map')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              view === 'map'
                ? 'bg-gradient-to-r from-purple-600 to-teal-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Map View
          </button>
        </div>

        {/* Logo */}
        <img
          src="/dubai_culture.svg"
          alt="Dubai Culture & Arts Authority"
          className="h-16 w-auto"
        />
      </div>

      {/* Content */}
      {view === 'cards' ? <LibraryGlassCards /> : <LibraryMap />}
    </div>
  );
}

export default App;
