import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar } from 'lucide-react';
import { libraries } from '../data/libraries';

const LibraryGlassCards = () => {

  const handleGetDirections = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  const handleBookSpace = () => {
    window.open('https://dubaiculture.gov.ae/en/e-services/Book-Space-in-Library', '_blank');
  };

  const LibraryIllustration = ({ icon, color }: { icon: string; color: string }) => {
    const illustrations: Record<string, React.ReactElement> = {
      mankhool: (
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <linearGradient id="grad-mankhool" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Dubai Frame silhouette */}
          <rect x="110" y="80" width="80" height="140" fill="url(#grad-mankhool)" rx="4"/>
          <rect x="115" y="90" width="70" height="50" fill="none" stroke={color} strokeWidth="3"/>
          <rect x="120" y="150" width="20" height="40" fill={color} opacity="0.5"/>
          <rect x="160" y="150" width="20" height="40" fill={color} opacity="0.5"/>
          {/* BurJuman area buildings */}
          <rect x="70" y="140" width="30" height="80" fill={color} opacity="0.3" rx="2"/>
          <rect x="200" y="150" width="30" height="70" fill={color} opacity="0.4" rx="2"/>
          {/* Sun */}
          <circle cx="240" cy="70" r="25" fill="#fbbf24" opacity="0.6"/>
          {/* Creek water */}
          <path d="M20 240 Q150 230 280 240 L280 280 L20 280 Z" fill="#14b8a6" opacity="0.2"/>
        </svg>
      ),
      rashidiya: (
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <linearGradient id="grad-rashidiya" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Modern residential towers */}
          <rect x="80" y="100" width="35" height="120" fill="url(#grad-rashidiya)" rx="3"/>
          <rect x="130" y="80" width="40" height="140" fill={color} opacity="0.5" rx="3"/>
          <rect x="185" y="110" width="35" height="110" fill={color} opacity="0.4" rx="3"/>
          {/* Windows pattern */}
          {[...Array(8)].map((_, i) => (
            <rect key={i} x="135" y={95 + i * 16} width="10" height="8" fill="white" opacity="0.3"/>
          ))}
          {/* Palm trees */}
          <ellipse cx="50" cy="200" rx="15" ry="30" fill="#10b981" opacity="0.5"/>
          <rect x="48" y="200" width="4" height="50" fill="#065f46" opacity="0.6"/>
          {/* Sun */}
          <circle cx="230" cy="60" r="20" fill="#fbbf24" opacity="0.6"/>
        </svg>
      ),
      safa: (
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <linearGradient id="grad-safa" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Art gallery building */}
          <rect x="90" y="120" width="120" height="100" fill="url(#grad-safa)" rx="8"/>
          {/* Art frames */}
          <rect x="105" y="140" width="30" height="25" fill="white" opacity="0.4" rx="2"/>
          <rect x="145" y="140" width="30" height="25" fill="white" opacity="0.4" rx="2"/>
          <rect x="185" y="140" width="15" height="25" fill="white" opacity="0.4" rx="2"/>
          {/* Abstract art shapes */}
          <circle cx="120" cy="185" r="15" fill="#ec4899" opacity="0.5"/>
          <polygon points="160,175 175,195 145,195" fill="#fbbf24" opacity="0.5"/>
          <rect x="180" y="175" width="20" height="20" fill="#14b8a6" opacity="0.5" rx="2"/>
          {/* Safa Park greenery */}
          <path d="M40 240 Q100 220 150 240 Q200 260 260 240 L260 280 L40 280 Z" fill="#10b981" opacity="0.3"/>
        </svg>
      ),
      twar: (
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <linearGradient id="grad-twar" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Modern geometric buildings */}
          <polygon points="150,60 200,110 150,160 100,110" fill="url(#grad-twar)"/>
          <rect x="110" y="170" width="80" height="60" fill={color} opacity="0.5" rx="4"/>
          {/* Community park elements */}
          <circle cx="60" cy="180" r="25" fill="#10b981" opacity="0.4"/>
          <circle cx="240" cy="190" r="20" fill="#10b981" opacity="0.4"/>
          {/* Sports facility */}
          <rect x="70" y="240" width="160" height="10" fill={color} opacity="0.3" rx="5"/>
          {/* Sun */}
          <circle cx="230" cy="70" r="22" fill="#fbbf24" opacity="0.6"/>
        </svg>
      ),
      hatta: (
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <linearGradient id="grad-hatta" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.5" />
              <stop offset="100%" stopColor={color} stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Hajar Mountains */}
          <polygon points="50,180 100,80 150,140" fill="url(#grad-hatta)"/>
          <polygon points="120,170 180,60 240,150" fill={color} opacity="0.6"/>
          <polygon points="200,170 250,100 280,170" fill={color} opacity="0.4"/>
          {/* Hatta Dam water */}
          <ellipse cx="150" cy="220" rx="100" ry="30" fill="#06b6d4" opacity="0.4"/>
          {/* Heritage fort towers */}
          <rect x="110" y="180" width="15" height="35" fill="#a78bfa" opacity="0.5" rx="2"/>
          <circle cx="117" cy="175" r="8" fill="#a78bfa" opacity="0.6"/>
          {/* Sun behind mountains */}
          <circle cx="180" cy="90" r="28" fill="#fbbf24" opacity="0.5"/>
        </svg>
      ),
      horanz: (
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <linearGradient id="grad-horanz" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Traditional and modern mix */}
          <rect x="70" y="140" width="50" height="80" fill="url(#grad-horanz)" rx="3"/>
          <rect x="140" y="120" width="60" height="100" fill={color} opacity="0.5" rx="3"/>
          <rect x="215" y="150" width="45" height="70" fill={color} opacity="0.4" rx="3"/>
          {/* Mosque dome */}
          <ellipse cx="95" cy="130" rx="30" ry="20" fill="#10b981" opacity="0.5"/>
          <rect x="92" y="120" width="6" height="30" fill="#065f46" opacity="0.6"/>
          {/* Date palms */}
          <ellipse cx="40" cy="190" rx="12" ry="25" fill="#10b981" opacity="0.5"/>
          <rect x="38" y="190" width="4" height="50" fill="#065f46" opacity="0.6"/>
          {/* Sun */}
          <circle cx="240" cy="70" r="25" fill="#fbbf24" opacity="0.6"/>
        </svg>
      ),
      ummsuqeim: (
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <linearGradient id="grad-umm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0.7" />
            </linearGradient>
          </defs>
          {/* Beach and coastal skyline */}
          <rect x="80" y="120" width="40" height="100" fill="url(#grad-umm)" rx="3"/>
          <rect x="135" y="100" width="50" height="120" fill={color} opacity="0.5" rx="3"/>
          <rect x="200" y="130" width="40" height="90" fill={color} opacity="0.4" rx="3"/>
          {/* Beach waves */}
          <path d="M20 240 Q80 230 140 240 T260 240" stroke="#06b6d4" strokeWidth="3" fill="none" opacity="0.4"/>
          <path d="M20 255 Q80 245 140 255 T260 255" stroke="#06b6d4" strokeWidth="3" fill="none" opacity="0.3"/>
          {/* Palm trees */}
          <ellipse cx="45" cy="200" rx="15" ry="28" fill="#10b981" opacity="0.5"/>
          <rect x="43" y="200" width="4" height="45" fill="#065f46" opacity="0.6"/>
          {/* Sun setting */}
          <circle cx="230" cy="180" r="30" fill="#fbbf24" opacity="0.5"/>
        </svg>
      )
    };
    return illustrations[icon];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-teal-50 to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent mb-3">
            Dubai Public Libraries
          </h1>
          <p className="text-gray-700 text-lg font-medium">
            Dubai Culture & Arts Authority
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {libraries.map((library) => (
            <div
              key={library.id}
              className="group relative overflow-hidden rounded-3xl h-full"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Glassmorphism card */}
              <div className={`relative bg-white/40 backdrop-blur-xl border-2 ${library.borderColor} rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] h-full`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${library.gradient} pointer-events-none`}></div>
                
                {/* Card content */}
                <div className="relative flex h-full">
                  {/* Left: Info Section */}
                  <div className="w-1/2 p-5 flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-600 mb-1 tracking-wide uppercase">Library</p>
                        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1">
                          {library.title}
                        </h3>
                        <p className="text-xs text-gray-600 font-medium">{library.subtitle}</p>
                      </div>

                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2 text-xs">
                          <MapPin size={12} style={{ color: library.accentColor }} />
                          <span className="text-gray-700 font-medium">{library.area}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs">
                          <Clock size={12} style={{ color: library.accentColor }} />
                          <span className="text-gray-700">Sun-Thu: 8AM-8PM</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs">
                          <Phone size={12} style={{ color: library.accentColor }} />
                          <span className="text-gray-700">80033222</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-2 min-h-[76px] flex flex-col">
                      <button
                        onClick={() => handleGetDirections(library.lat, library.lng)}
                        className="w-full py-2 px-3 bg-white/60 backdrop-blur-sm hover:bg-white/80 rounded-xl font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 border border-white/40 shadow-lg"
                        style={{ color: library.accentColor }}
                      >
                        <Navigation size={14} />
                        <span>Directions</span>
                      </button>

                      {library.hasBooking && (
                        <button
                          onClick={handleBookSpace}
                          className="w-full py-2 px-3 rounded-xl font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-white"
                          style={{ backgroundColor: library.accentColor }}
                        >
                          <Calendar size={14} />
                          <span>Book Space</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Right: Illustration Section */}
                  <div className="w-1/2 flex items-center justify-center p-4 relative">
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <LibraryIllustration icon={library.icon} color={library.accentColor} />
                    </div>
                    
                    {/* Decorative elements */}
                    <div 
                      className="absolute top-3 right-3 w-16 h-16 rounded-full opacity-20"
                      style={{ backgroundColor: library.accentColor }}
                    ></div>
                  </div>
                </div>

                {/* Vertical dashed line divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/30"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-700 text-sm backdrop-blur-sm bg-white/40 rounded-2xl p-6 border border-white/40">
          <p className="font-medium">All libraries open Sunday through Thursday, 8:00 AM to 8:00 PM</p>
          <p className="mt-2">📧 info@dubaiculture.ae | 📞 80033222</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryGlassCards;