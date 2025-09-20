import { MessageCircle, Phone, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HaveQuestions = () => {
  const whatsappNumber = "+447123456789"; // Replace with your actual WhatsApp number
  const whatsappMessage = "Hi! I'm interested in your IPTV service and have some questions.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const supportFeatures = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Knowledgeable specialists"
    },
    {
      icon: Phone,
      title: "Instant Response",
      description: "Quick problem resolution"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/80 to-black relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Container */}
        <div className="relative">
          {/* Red Background Container with Rounded Corners */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl shadow-2xl shadow-red-600/30 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 px-8 md:px-12 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side - Content */}
                <div className="text-white">
                  <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Customer Support</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Have <span className="text-white/90">Questions?</span>
                  </h2>
                  
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Our dedicated support team is here to help you 24/7. Get instant assistance with setup, 
                    technical issues, or any questions about our IPTV service.
                  </p>

                  {/* Support Features */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {supportFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                        <feature.icon className="w-5 h-5 text-white flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm text-white">{feature.title}</div>
                          <div className="text-xs text-white/80">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/90 font-medium">Support team is online now</span>
                    </div>
                    <p className="text-sm text-white/80 mt-2">
                      Average response time: Less than 2 minutes
                    </p>
                  </div>
                </div>

                {/* Right Side - WhatsApp Button */}
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <MessageCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Get Instant Help
                      </h3>
                      <p className="text-white/80 mb-6">
                        Chat with our support team on WhatsApp for immediate assistance with your IPTV service.
                      </p>
                    </div>

                    {/* WhatsApp Button */}
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-block w-full"
                    >
                      <Button 
                        className="w-full bg-black hover:bg-gray-900 text-white border-0 rounded-xl py-6 text-lg font-bold shadow-xl shadow-black/50 group-hover:shadow-2xl group-hover:shadow-black/70 transition-all duration-300 group-hover:scale-105"
                        size="lg"
                      >
                        <div className="flex items-center justify-center space-x-3">
                          {/* WhatsApp Icon */}
                          <svg className="w-6 h-6 fill-green-500" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
                          </svg>
                          <span>Contact WhatsApp Support</span>
                        </div>
                        
                        {/* Button glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Button>
                    </a>

                    {/* Additional Contact Methods */}
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-sm text-white/80 mb-4">Or contact us through:</p>
                      <div className="flex justify-center space-x-6">
                        <div className="text-center">
                          <div className="text-xs text-white/70">Email</div>
                          <div className="text-sm text-white font-medium">support@iptvuk.com</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-white/70">Live Chat</div>
                          <div className="text-sm text-white font-medium">Available 24/7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveQuestions;