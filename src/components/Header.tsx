import { useState } from "react";
import { Menu, X, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Plans", href: "#pricing" },
    { name: "Features", href: "#features" },
    { name: "Devices", href: "#devices" },
    { name: "Support", href: "#support" },
    { name: "FAQ", href: "#faq" },
  ];

  // Channel logos for carousel - easily configurable
  const channelLogos = [
    { name: "BBC", logo: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 BBC" },
    { name: "Sky Sports", logo: "⚽ SKY" },
    { name: "Netflix", logo: "🎬 NET" },
    { name: "Amazon Prime", logo: "📺 APV" },
    { name: "Disney+", logo: "🏰 DIS" },
    { name: "HBO Max", logo: "🎭 HBO" },
    { name: "ESPN", logo: "🏈 ESPN" },
    { name: "Discovery", logo: "🔬 DISC" },
    { name: "National Geographic", logo: "🌍 NAT" },
    { name: "History Channel", logo: "🏛️ HIST" },
    { name: "Comedy Central", logo: "😂 COM" },
    { name: "MTV", logo: "🎵 MTV" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Tv className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-foreground">IPTV UK</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Channel Logos Carousel */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50 py-4 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-sm text-gray-400">Available Channels:</span>
          </div>
          
          {/* Scrolling Logo Container */}
          <div className="relative">
            <div 
              className="flex space-x-8 whitespace-nowrap"
              style={{
                animation: 'scroll 30s linear infinite',
                animationDirection: 'normal'
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {/* First set of logos */}
              {channelLogos.map((channel, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg px-4 py-2 hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <span className="text-white text-sm font-medium whitespace-nowrap">
                    {channel.logo}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless scrolling */}
              {channelLogos.map((channel, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg px-4 py-2 hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <span className="text-white text-sm font-medium whitespace-nowrap">
                    {channel.logo}
                  </span>
                </div>
              ))}
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
    </header>
  );
};

export default Header;