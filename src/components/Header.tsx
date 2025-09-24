import { useState } from "react";
import { Menu, X, Tv } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", type: "route" },
    { name: "Plans", href: "/pricing", type: "route" },
    { name: "Features", href: "#features", type: "anchor" },
    { name: "Devices", href: "/setup-guides", type: "route" },
    { name: "Support", href: "#support", type: "anchor" },
    { name: "FAQ", href: "#faq", type: "anchor" },
  ];



  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Tv className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-foreground">IPTV UK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                item.type === "route" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href 
                        ? 'text-primary font-semibold' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )
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
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-red-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <div className="flex items-center space-x-2">
                {isMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
                <span className="text-sm font-semibold">
                  {isMenuOpen ? "Close" : "Menu"}
                </span>
              </div>
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-4 pt-4 pb-6 mt-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-600/20 rounded-xl shadow-2xl backdrop-blur-lg">
              {/* Menu Header */}
              <div className="mb-4 pb-3 border-b border-red-600/30">
                <h3 className="text-lg font-bold text-white">Navigation</h3>
              </div>
              
              {/* Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item, index) => (
                  item.type === "route" ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group relative flex items-center px-4 py-3 rounded-lg hover:text-red-400 hover:bg-red-600/10 transition-all duration-200 border border-transparent hover:border-red-600/30 ${
                        location.pathname === item.href 
                          ? 'text-red-400 bg-red-600/10 border-red-600/30 font-semibold' 
                          : 'text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full group-hover:bg-red-400 transition-colors duration-200 ${
                          location.pathname === item.href ? 'bg-red-400' : 'bg-red-600'
                        }`}></div>
                        <span className="font-medium text-base group-hover:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                      </div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-red-600 group-hover:w-4 transition-all duration-200"></div>
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group relative flex items-center px-4 py-3 rounded-lg text-white hover:text-red-400 hover:bg-red-600/10 transition-all duration-200 border border-transparent hover:border-red-600/30"
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-red-600 group-hover:bg-red-400 transition-colors duration-200"></div>
                        <span className="font-medium text-base group-hover:translate-x-1 transition-transform duration-200">
                          {item.name}
                        </span>
                      </div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-red-600 group-hover:w-4 transition-all duration-200"></div>
                    </a>
                  )
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="pt-6 mt-4 border-t border-red-600/30">
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Start Free Trial</span>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;