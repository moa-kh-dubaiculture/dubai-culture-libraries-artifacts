import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Filter } from 'lucide-react';
import { libraries } from '../data/libraries';
import type { Library } from '../types/library';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to update map view when filter changes
const MapUpdater = ({ libraries }: { libraries: Library[] }) => {
  const map = useMap();

  useEffect(() => {
    if (libraries.length > 0) {
      const bounds = L.latLngBounds(libraries.map(lib => [lib.lat, lib.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [libraries, map]);

  return null;
};

const LibraryMap = () => {
  const [filterArea, setFilterArea] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const areas = ['all', ...new Set(libraries.map(lib => lib.area))];

  const filteredLibraries = filterArea === 'all'
    ? libraries
    : libraries.filter(lib => lib.area === filterArea);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-50 to-teal-50 p-6">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dubai Public Libraries</h1>
          <p className="text-gray-600">Dubai Culture & Arts Authority</p>
        </div>

        {/* Filter Bar */}
        <div className="mb-4 flex gap-3 items-center">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
          >
            <Filter size={18} className="text-purple-600" />
            <span className="text-sm font-medium">Filter by Area</span>
          </button>
          
          {showFilters && (
            <div className="flex gap-2 flex-wrap">
              {areas.map(area => (
                <button
                  key={area}
                  onClick={() => setFilterArea(area)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    filterArea === area
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {area === 'all' ? 'All Areas' : area}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Map Container */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden relative">
          <MapContainer
            center={[25.2, 55.3]}
            zoom={10}
            style={{ height: '100%', width: '100%' }}
            className="rounded-2xl"
          >
            <TileLayer
              attribution=''
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapUpdater libraries={filteredLibraries} />
            {filteredLibraries.map((library) => (
              <Marker key={library.id} position={[library.lat, library.lng]}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-bold text-base mb-1">{library.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{library.area}</p>
                    <div className="space-y-1 text-xs text-gray-700 mb-3">
                      <p>Sun-Thu: 8:00AM - 8:00PM</p>
                      <p>☎ 80033222</p>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${library.lat},${library.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-purple-600 to-teal-500 px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      Get Directions
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Stats footer */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Showing {filteredLibraries.length} of {libraries.length} libraries
        </div>
      </div>
    </div>
  );
};

export default LibraryMap;