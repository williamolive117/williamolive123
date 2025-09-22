import { Play, Clock, Star, Shield, Zap, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreeTrial = () => {
  const trialFeatures = [
    {
      icon: Play,
      title: "Full Access",
      description: "20,000+ premium channels included"
    },
    {
      icon: Clock,
      title: "7 Days Free",
      description: "No commitment, cancel anytime"
    },
    {
      icon: Shield,
      title: "No Risk",
      description: "Zero charges during trial period"
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Start streaming in under 5 minutes"
    }
  ];

  const testimonialAvatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b043?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/80 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
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
            <div className="inline-flex items-center space-x-3 bg-green-600/10 backdrop-blur-sm border border-green-600/20 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">Limited Time Offer</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start Your <span className="text-red-600">Free Trial</span> Today
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the full power of our premium IPTV service with a completely free 7-day trial. 
              No hidden fees, no commitments - just pure streaming excellence.
            </p>

            {/* Trial Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {trialFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 hover:bg-gray-900/60 transition-all duration-300">
                  <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex -space-x-2">
                  {testimonialAvatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Customer ${index + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-gray-800 object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-white font-semibold text-sm ml-2">4.9/5</span>
                  </div>
                  <p className="text-gray-400 text-xs">From 10,000+ happy customers</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                "Started with the free trial and never looked back. The quality is incredible!" 
                <span className="text-gray-400">- Sarah M.</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-red-600/30 hover:shadow-2xl hover:shadow-red-600/40 transition-all duration-300 hover:scale-105 group"
                size="lg"
              >
                <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                GET FREE TRIAL
              </Button>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span>Starts instantly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>No payment required</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl shadow-red-600/50">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    Premium Streaming Experience
                  </h3>
                  
                  <p className="text-gray-300 mb-8">
                    Test our service with zero risk and discover why thousands choose us for their entertainment needs.
                  </p>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">7</div>
                      <div className="text-xs text-gray-400">Days Free</div>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">20K+</div>
                      <div className="text-xs text-gray-400">Channels</div>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">4K</div>
                      <div className="text-xs text-gray-400">HD Quality</div>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">24/7</div>
                      <div className="text-xs text-gray-400">Support</div>
                    </div>
                  </div>

                  {/* Trial Badge */}
                  <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium text-sm">Trial Active</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg shadow-green-600/50 animate-pulse">
                100% FREE
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-full text-sm shadow-lg">
                💳 No Card Required
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">
              🛡️ What Happens After Your Free Trial?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold text-white mb-2">Day 7</h4>
                <p className="text-sm">We'll send you a friendly reminder about your trial ending</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Your Choice</h4>
                <p className="text-sm">Continue with a paid plan or cancel with no charges</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">No Surprises</h4>
                <p className="text-sm">Complete transparency with no hidden fees or auto-billing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;