import { Package, CreditCard, CheckCircle, ShoppingCart, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowToBuy = () => {
  const steps = [
    {
      id: 1,
      icon: Package,
      title: "CHOOSE YOUR PREFERRED PACKAGE",
      description: "Select the perfect plan that fits your streaming needs and budget. All packages include access to 20,000+ premium channels.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      features: ["Multiple plan options", "All device types supported", "Flexible duration"]
    },
    {
      id: 2,
      icon: CreditCard,
      title: "MAKE PAYMENT",
      description: "Complete your purchase securely using any major payment method. Your transaction is protected with bank-level encryption.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
      features: ["Secure payment gateway", "Multiple payment methods", "Instant processing"]
    },
    {
      id: 3,
      icon: CheckCircle,
      title: "RECEIVE YOUR ACCESS",
      description: "Get your login credentials instantly via email and start streaming immediately. Setup takes less than 5 minutes on any device.",
      image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=400&h=300&fit=crop&crop=center",
      features: ["Instant email delivery", "Quick setup guide", "24/7 support included"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-6">
            <ShoppingCart className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-medium">Easy Process</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How to Buy Your <span className="text-red-600">IPTV Account</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Getting started with our premium IPTV service is simple and quick. 
            Follow these three easy steps to begin streaming today.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-gray-300 text-sm">Setup in 5 minutes</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-gray-300 text-sm">Secure payment</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300 text-sm">Instant activation</span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative bg-gradient-to-br from-gray-900/60 to-black/40 backdrop-blur-sm border border-gray-800/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              {/* Step Number Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/50">
                  <span className="text-white font-bold text-lg">{step.id}</span>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center group-hover:bg-red-600/20 group-hover:border-red-600/40 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-red-400 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress Indicator */}
                <div className="flex items-center space-x-2">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        num <= step.id ? 'bg-red-600' : 'bg-gray-700'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of satisfied customers and start enjoying premium IPTV streaming today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Package className="w-5 h-5 mr-2" />
                Choose Your Package
              </Button>
              
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;