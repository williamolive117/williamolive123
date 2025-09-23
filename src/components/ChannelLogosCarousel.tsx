import { Tv } from "lucide-react";

const ChannelLogosCarousel = () => {
  // Channel logos for carousel - easily configurable from backend
  const channelLogos = [
    { name: "BBC One", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 BBC ONE", color: "from-red-900 to-red-700" },
    { name: "Sky Sports", logo: "⚽ SKY SPORTS", color: "from-blue-900 to-blue-700" },
    { name: "Netflix", logo: "🎬 NETFLIX", color: "from-red-800 to-red-600" },
    { name: "Amazon Prime", logo: "📺 PRIME VIDEO", color: "from-blue-800 to-blue-600" },
    { name: "Disney+", logo: "🏰 DISNEY+", color: "from-blue-900 to-purple-700" },
    { name: "HBO Max", logo: "🎭 HBO MAX", color: "from-purple-900 to-purple-700" },
    { name: "ESPN", logo: "🏈 ESPN", color: "from-red-900 to-yellow-700" },
    { name: "Discovery", logo: "🔬 DISCOVERY", color: "from-teal-900 to-teal-700" },
    { name: "National Geographic", logo: "🌍 NAT GEO", color: "from-yellow-900 to-orange-700" },
    { name: "History Channel", logo: "🏛️ HISTORY", color: "from-amber-900 to-amber-700" },
    { name: "Comedy Central", logo: "😂 COMEDY", color: "from-orange-900 to-orange-700" },
    { name: "MTV", logo: "🎵 MTV", color: "from-pink-900 to-pink-700" },
    { name: "CNN", logo: "📰 CNN", color: "from-red-900 to-red-700" },
    { name: "Fox News", logo: "🦊 FOX NEWS", color: "from-blue-900 to-blue-700" },
    { name: "Cartoon Network", logo: "🎪 CARTOON", color: "from-orange-900 to-yellow-700" },
    { name: "Nickelodeon", logo: "🧽 NICK", color: "from-orange-900 to-orange-700" }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900/80 to-black py-12 overflow-hidden border-t border-gray-800/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-4">
            <Tv className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-medium">Premium Content</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Featured <span className="text-red-600">Channel Partners</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access premium content from the world's leading broadcasters and streaming services
          </p>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div 
            className="flex space-x-6 whitespace-nowrap py-4"
            style={{
              animation: 'scroll 40s linear infinite',
              animationDirection: 'normal'
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {/* First set of logos */}
            {channelLogos.map((channel, index) => (
              <div
                key={`first-${index}`}
                className={`flex-shrink-0 bg-gradient-to-br ${channel.color} backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[160px]`}
              >
                <div className="text-center">
                  <div className="text-white text-lg font-bold whitespace-nowrap tracking-wide">
                    {channel.logo}
                  </div>
                  <div className="text-white/70 text-xs mt-1 font-medium">
                    HD • Live • On-Demand
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {channelLogos.map((channel, index) => (
              <div
                key={`second-${index}`}
                className={`flex-shrink-0 bg-gradient-to-br ${channel.color} backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[160px]`}
              >
                <div className="text-center">
                  <div className="text-white text-lg font-bold whitespace-nowrap tracking-wide">
                    {channel.logo}
                  </div>
                  <div className="text-white/70 text-xs mt-1 font-medium">
                    HD • Live • On-Demand
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600 mb-1">20,000+</div>
              <div className="text-gray-400 text-sm">Live Channels</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600 mb-1">80,000+</div>
              <div className="text-gray-400 text-sm">VOD Titles</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600 mb-1">4K</div>
              <div className="text-gray-400 text-sm">Ultra HD</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-red-600 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for the scrolling animation */}
      <style>
        {`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        `}
      </style>
    </section>
  );
};

export default ChannelLogosCarousel;