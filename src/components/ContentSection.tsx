import { Play, Shield, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContentSection = () => {
  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "20,000+", label: "Live Channels", icon: Play },
    { number: "50+", label: "Countries", icon: Globe }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/80 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-medium text-sm">Why Choose Us</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              The UK's Most <span className="text-red-600">Trusted IPTV</span> Service
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                For over five years, we've been at the forefront of premium IPTV streaming in the United Kingdom, 
                delivering unparalleled entertainment experiences to households across England, Scotland, Wales, and 
                Northern Ireland. Our commitment to excellence has made us the preferred choice for discerning viewers 
                who demand nothing but the best in digital entertainment.
              </p>
              
              <p>
                What sets us apart from the competition is our unwavering dedication to quality and reliability. 
                We've invested heavily in cutting-edge infrastructure, partnering with tier-one data centers and 
                premium content providers to ensure that your streaming experience is always smooth, buffer-free, 
                and available whenever you want it. Our 99.9% uptime guarantee isn't just a promise – it's a 
                testament to our technical excellence.
              </p>
              
              <p>
                From the latest Premier League matches and Champions League finals to exclusive BBC iPlayer content, 
                Sky Sports coverage, and international channels from around the globe, we bring you a comprehensive 
                library of over 20,000 live channels and 80,000+ on-demand titles. Whether you're catching up on 
                EastEnders, watching the latest Netflix originals, or exploring documentaries from Discovery Channel, 
                we've got your entertainment needs covered 24/7.
              </p>
              
              <p>
                Our customer-first approach means you'll always have access to our dedicated UK-based support team, 
                ready to assist you with setup, troubleshooting, or any questions about your service. We believe 
                in transparent pricing with no hidden fees, easy cancellation policies, and a 30-day money-back 
                guarantee because we're confident you'll love what we offer.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-red-600/30 hover:shadow-2xl hover:shadow-red-600/40 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Your Journey Today
              </Button>
              
              <div className="text-sm text-gray-400 sm:mt-4">
                Join 50,000+ satisfied UK customers
              </div>
            </div>
          </div>

          {/* Right Side - Stats & Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Container */}
              <div className="bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Trusted by Thousands
                    </h3>
                    <p className="text-gray-300">
                      See why we're the UK's #1 choice
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:bg-gray-800/70 transition-colors duration-300"
                      >
                        <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                          <stat.icon className="w-5 h-5 text-red-400" />
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-xs text-gray-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* UK Flag and Pride */}
                  <div className="bg-gradient-to-r from-blue-900/50 to-red-900/50 border border-gray-700/50 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-3">🇬🇧</div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Proudly Serving the UK
                    </h4>
                    <p className="text-sm text-gray-300">
                      Local support, British content, and a service built specifically for UK viewers.
                    </p>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <div className="inline-flex items-center space-x-1 bg-green-600/20 border border-green-600/30 rounded-full px-3 py-1">
                      <Shield className="w-3 h-3 text-green-400" />
                      <span className="text-green-400 text-xs font-medium">SSL Secured</span>
                    </div>
                    <div className="inline-flex items-center space-x-1 bg-blue-600/20 border border-blue-600/30 rounded-full px-3 py-1">
                      <Users className="w-3 h-3 text-blue-400" />
                      <span className="text-blue-400 text-xs font-medium">24/7 Support</span>
                    </div>
                    <div className="inline-flex items-center space-x-1 bg-purple-600/20 border border-purple-600/30 rounded-full px-3 py-1">
                      <Play className="w-3 h-3 text-purple-400" />
                      <span className="text-purple-400 text-xs font-medium">HD Quality</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg shadow-green-600/50">
                5★ Rated
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg shadow-red-600/50">
                UK #1 Choice
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                🏆 Award-Winning Service
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Recognized by industry experts and loved by customers across the UK. Our commitment to 
                excellence has earned us numerous accolades and, more importantly, the trust of thousands 
                of satisfied subscribers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="text-3xl mb-3">🥇</div>
                <h4 className="font-semibold text-white mb-2">Best Value 2024</h4>
                <p className="text-sm text-gray-400">Streaming Awards UK</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="text-3xl mb-3">⭐</div>
                <h4 className="font-semibold text-white mb-2">5-Star Service</h4>
                <p className="text-sm text-gray-400">Trustpilot Excellence</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-semibold text-white mb-2">Secure & Reliable</h4>
                <p className="text-sm text-gray-400">Industry Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;