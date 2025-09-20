import { Globe, Tv, MapPin } from "lucide-react";

const WorldChannels = () => {
  const channelMarkers = [
    { id: 1, country: "UK", channels: "2,500+", flag: "🇬🇧", left: "10%", top: "25%" },
    { id: 2, country: "USA", channels: "3,200+", flag: "🇺🇸", left: "25%", top: "35%" },
    { id: 3, country: "Germany", channels: "1,800+", flag: "🇩🇪", left: "50%", top: "28%" },
    { id: 4, country: "France", channels: "1,600+", flag: "🇫🇷", left: "47%", top: "32%" },
    { id: 5, country: "Spain", channels: "1,200+", flag: "🇪🇸", left: "45%", top: "38%" },
    { id: 6, country: "Italy", channels: "1,100+", flag: "🇮🇹", left: "52%", top: "40%" },
    { id: 7, country: "Canada", channels: "900+", flag: "🇨🇦", left: "22%", top: "20%" },
    { id: 8, country: "Australia", channels: "800+", flag: "🇦🇺", left: "85%", top: "75%" },
    { id: 9, country: "Brazil", channels: "1,500+", flag: "🇧🇷", left: "35%", top: "65%" },
    { id: 10, country: "India", channels: "2,000+", flag: "🇮🇳", left: "70%", top: "45%" },
    { id: 11, country: "Japan", channels: "1,300+", flag: "🇯🇵", left: "82%", top: "35%" },
    { id: 12, country: "Russia", channels: "1,700+", flag: "🇷🇺", left: "65%", top: "22%" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black/90 to-gray-900/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-6">
            <Globe className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-medium">Global Coverage</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Channels from Every Corner <br />
            of the <span className="text-red-600">World</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Access premium channels from over 50 countries. From local UK favorites to international entertainment, 
            sports, news, and movies - all in stunning HD quality.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl px-6 py-4 min-w-[160px]">
              <div className="text-3xl font-bold text-red-600">20,000+</div>
              <div className="text-gray-300 text-sm">Live Channels</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl px-6 py-4 min-w-[160px]">
              <div className="text-3xl font-bold text-red-600">50+</div>
              <div className="text-gray-300 text-sm">Countries</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl px-6 py-4 min-w-[160px]">
              <div className="text-3xl font-bold text-red-600">30+</div>
              <div className="text-gray-300 text-sm">Languages</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl px-6 py-4 min-w-[160px]">
              <div className="text-3xl font-bold text-red-600">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime</div>
            </div>
          </div>
        </div>

        {/* World Map with Channel Markers */}
        <div className="relative max-w-6xl mx-auto">
          {/* Map Container */}
          <div className="relative bg-gradient-to-br from-gray-900/60 to-black/40 backdrop-blur-sm border border-gray-800/30 rounded-3xl p-8 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-blue-600/5 rounded-3xl"></div>
            
            {/* World Map SVG Background */}
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-2xl overflow-hidden">
              {/* World Map Image/Pattern */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M20 20h60v60H20z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px',
                  backgroundPosition: 'center'
                }}
              ></div>

              {/* Animated pulse rings */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2">
                  <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>

              {/* Channel Markers */}
              {channelMarkers.map((marker, index) => (
                <div
                  key={marker.id}
                  className="absolute group cursor-pointer animate-fade-in-up"
                  style={{ 
                    left: marker.left, 
                    top: marker.top,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Marker Pin */}
                  <div className="relative">
                    <div className="w-6 h-6 bg-red-600 rounded-full shadow-lg shadow-red-600/50 border-2 border-white/20 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Pulse effect */}
                    <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-30 group-hover:opacity-60"></div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-20">
                    <div className="text-white text-sm font-medium flex items-center space-x-2">
                      <span className="text-lg">{marker.flag}</span>
                      <span>{marker.country}</span>
                    </div>
                    <div className="text-red-400 text-xs">{marker.channels} Channels</div>
                    
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90"></div>
                  </div>
                </div>
              ))}

              {/* Central Globe Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full shadow-2xl shadow-red-600/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Tv className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-red-600 rounded-full animate-pulse opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Bottom Legend */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span>Available Channels</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>Coverage Areas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                <span>Expanding Globally</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WorldChannels;