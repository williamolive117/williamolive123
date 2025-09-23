import { Users, TrendingUp, DollarSign, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const AffiliateProgram = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900/95 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-6">
              <Users className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-medium">Partnership Opportunity</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Join Our <span className="text-red-600">IPTV Affiliate Program</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Earn generous commissions by promoting the UK's leading IPTV service. 
                Get access to exclusive marketing materials, dedicated support, and competitive payouts.
              </p>
              
              <p className="text-lg text-gray-400">
                Perfect for content creators, tech bloggers, and anyone passionate about premium entertainment. 
                Start earning today with our proven affiliate program.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-red-600/30 hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <DollarSign className="w-6 h-6 mr-2" />
                Become an Affiliate
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-red-600/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                size="lg"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>

            {/* Benefits Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">40%</div>
                <div className="text-gray-400 text-sm">Commission Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">90 Days</div>
                <div className="text-gray-400 text-sm">Cookie Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">24h</div>
                <div className="text-gray-400 text-sm">Payout Time</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm border border-red-600/30 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-red-600/20 rounded-2xl flex items-center justify-center">
                  <Star className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Why Choose Our Program?
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">High Commissions</h4>
                    <p className="text-gray-400 text-sm">Earn up to 40% on every successful referral with our industry-leading rates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Marketing Support</h4>
                    <p className="text-gray-400 text-sm">Access professional banners, videos, and promotional materials</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Dedicated Manager</h4>
                    <p className="text-gray-400 text-sm">Personal account manager to help maximize your earnings</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Real-Time Tracking</h4>
                    <p className="text-gray-400 text-sm">Monitor clicks, conversions, and earnings with our advanced dashboard</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-red-600/20 text-center">
                <p className="text-gray-400 text-sm mb-2">Join 500+ successful affiliates</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white text-sm font-medium mt-1">4.9/5 Partner Satisfaction</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-red-400" />
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600/10 to-red-800/10 backdrop-blur-sm border border-red-600/30 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-gray-300 mb-4">
              <span className="font-bold text-white">Ready to get started?</span> Join our affiliate program today and start earning with the UK's most trusted IPTV service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-red-600/30"
              >
                Apply Now - It's Free
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-8 py-3 rounded-xl"
              >
                Download Media Kit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateProgram;