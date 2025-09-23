import { Smartphone, Tv, Monitor, Gamepad2, Tablet, Chrome, PlayCircle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InstallationGuides = () => {
  const installationGuides = [
    {
      id: "android",
      title: "Android Devices",
      icon: Smartphone,
      description: "Setup IPTV on Android phones, tablets,",
      subtitle: "and Android TV boxes with ease.",
      color: "from-green-600/20 to-green-800/10",
      borderColor: "border-green-600/30",
      iconColor: "text-green-400"
    },
    {
      id: "firestick",
      title: "Amazon Fire Stick",
      icon: PlayCircle,
      description: "Complete guide for Fire TV Stick,",
      subtitle: "Fire TV Cube, and Fire TV devices.",
      color: "from-orange-600/20 to-orange-800/10",
      borderColor: "border-orange-600/30",
      iconColor: "text-orange-400"
    },
    {
      id: "smart-tv",
      title: "Smart TV (LG/Samsung)",
      icon: Tv,
      description: "Install on LG WebOS, Samsung Tizen,",
      subtitle: "and other Smart TV platforms.",
      color: "from-blue-600/20 to-blue-800/10",
      borderColor: "border-blue-600/30",
      iconColor: "text-blue-400"
    },
    {
      id: "ios",
      title: "iOS Devices",
      icon: Tablet,
      description: "Setup guide for iPhone, iPad,",
      subtitle: "and Apple TV streaming devices.",
      color: "from-gray-600/20 to-gray-800/10",
      borderColor: "border-gray-600/30",
      iconColor: "text-gray-400"
    },
    {
      id: "windows",
      title: "Windows PC/Laptop",
      icon: Monitor,
      description: "Install IPTV applications on Windows",
      subtitle: "10, 11, and older operating systems.",
      color: "from-cyan-600/20 to-cyan-800/10",
      borderColor: "border-cyan-600/30",
      iconColor: "text-cyan-400"
    },
    {
      id: "mag-box",
      title: "MAG Box",
      icon: Settings,
      description: "Configuration for MAG 254, 256,",
      subtitle: "322, and other MAG IPTV boxes.",
      color: "from-purple-600/20 to-purple-800/10",
      borderColor: "border-purple-600/30",
      iconColor: "text-purple-400"
    },
    {
      id: "gaming",
      title: "Gaming Consoles",
      icon: Gamepad2,
      description: "Setup on Xbox Series X/S, PS4,",
      subtitle: "PS5, and Nintendo Switch systems.",
      color: "from-red-600/20 to-red-800/10",
      borderColor: "border-red-600/30",
      iconColor: "text-red-400"
    },
    {
      id: "web-browser",
      title: "Web Browser",
      icon: Chrome,
      description: "Stream directly via Chrome, Firefox,",
      subtitle: "Safari, and other web browsers.",
      color: "from-indigo-600/20 to-indigo-800/10",
      borderColor: "border-indigo-600/30",
      iconColor: "text-indigo-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900/80 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-black bg-opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "50px 50px"
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-6">
            <Settings className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-medium">Setup Guides</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Easy <span className="text-red-600">Installation</span> Guides
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Step-by-step tutorials for every device and platform. Get up and running in minutes 
            with our comprehensive installation guides and video walkthroughs.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl px-4 py-2">
              <span className="text-red-400 font-bold">8+</span>
              <span className="text-gray-400 text-sm ml-1">Platforms</span>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl px-4 py-2">
              <span className="text-red-400 font-bold">Video</span>
              <span className="text-gray-400 text-sm ml-1">Tutorials</span>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl px-4 py-2">
              <span className="text-red-400 font-bold">24/7</span>
              <span className="text-gray-400 text-sm ml-1">Support</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {installationGuides.map((guide, index) => {
            const IconComponent = guide.icon;
            return (
              <Card
                key={guide.id}
                className={`bg-gradient-to-br ${guide.color} backdrop-blur-sm border ${guide.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10 group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-900/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${guide.iconColor}`} />
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {guide.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 text-sm leading-relaxed">
                    {guide.description}<br />
                    {guide.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <Button
                    className="w-full bg-gray-800/80 hover:bg-red-600 text-white border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 group-hover:shadow-lg"
                    size="sm"
                  >
                    <PlayCircle className="w-4 h-4 mr-2" />
                    View Tutorial
                  </Button>

                  <div className="mt-3 text-center">
                    <span className="text-xs text-gray-500">
                      5-10 min setup • HD Video Guide
                    </span>
                  </div>
                </CardContent>

                <div className="absolute top-3 right-3 w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                  <span className="text-red-400 text-xs font-bold">{index + 1}</span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 backdrop-blur-sm border border-red-600/30 rounded-3xl p-8 max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Settings className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help with Installation?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our technical support team is available 24/7 to help you with setup and installation. 
                Get personal assistance via WhatsApp, email, or live chat.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/30"
                size="lg"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                WhatsApp Support
              </Button>
              
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-6 py-3 rounded-xl font-semibold"
                size="lg"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Live Chat
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-red-600/20">
              <div>
                <div className="text-red-400 font-bold text-lg">5min</div>
                <div className="text-gray-400 text-xs">Response Time</div>
              </div>
              <div>
                <div className="text-red-400 font-bold text-lg">98%</div>
                <div className="text-gray-400 text-xs">Success Rate</div>
              </div>
              <div>
                <div className="text-red-400 font-bold text-lg">24/7</div>
                <div className="text-gray-400 text-xs">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuides;