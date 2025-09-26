import { useState } from "react";
import { 
  Smartphone, 
  Tv, 
  Monitor, 
  Gamepad2, 
  Tablet, 
  Chrome, 
  PlayCircle, 
  Settings,
  ChevronDown,
  ChevronUp,
  Mail,
  MessageCircle,
  Phone,
  Clock,
  CheckCircle,
  Download,
  Shield,
  Users,
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SetupGuides = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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

  const faqItems = [
    {
      question: "How long does the setup process typically take?",
      answer: "Most devices can be set up in 5-10 minutes following our step-by-step guides. The time may vary depending on your device and internet connection speed."
    },
    {
      question: "Do I need technical knowledge to install IPTV?",
      answer: "Not at all! Our guides are designed for beginners. We provide video tutorials and detailed written instructions that anyone can follow."
    },
    {
      question: "What if my device is not listed in the setup guides?",
      answer: "Contact our support team and we'll help you set up IPTV on your specific device. We support a wide range of devices and can provide custom installation assistance."
    },
    {
      question: "Can I use the same account on multiple devices?",
      answer: "Yes, depending on your subscription plan. You can use your IPTV account on 2-5 devices simultaneously based on the plan you choose."
    },
    {
      question: "What internet speed do I need for IPTV?",
      answer: "For HD content, we recommend at least 10 Mbps. For 4K streaming, 25+ Mbps is ideal. A stable connection is more important than raw speed."
    },
    {
      question: "Is there a mobile app for IPTV?",
      answer: "Yes! We support various IPTV player apps for Android and iOS devices. Our setup guides will show you which apps work best for your device."
    },
    {
      question: "What should I do if I encounter buffering issues?",
      answer: "Check your internet connection, close other streaming applications, and try switching to a different server. Our support team can help optimize your settings."
    },
    {
      question: "Are the setup guides updated regularly?",
      answer: "Yes, we regularly update our guides to reflect the latest app versions and device firmware updates to ensure compatibility."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-6">
            <Settings className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-medium">Device Setup</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            IPTV Setup <span className="text-red-600">Guides</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete installation guides for all popular devices and platforms. Get your IPTV service 
            running in minutes with our step-by-step tutorials and expert support.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl px-6 py-3">
              <span className="text-red-400 font-bold text-lg">8+</span>
              <span className="text-gray-400 text-sm ml-2">Device Types</span>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl px-6 py-3">
              <span className="text-red-400 font-bold text-lg">HD</span>
              <span className="text-gray-400 text-sm ml-2">Video Guides</span>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl px-6 py-3">
              <span className="text-red-400 font-bold text-lg">24/7</span>
              <span className="text-gray-400 text-sm ml-2">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guides Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-black bg-opacity-5" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "50px 50px"
          }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Choose Your <span className="text-red-600">Device</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Select your device below to access detailed installation instructions, 
              video tutorials, and troubleshooting tips.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationGuides.map((guide, index) => {
              const IconComponent = guide.icon;
              const CardWrapper = (guide.id === 'android' || guide.id === 'firestick' || guide.id === 'smart-tv') ? Link : 'div';
              const cardProps = guide.id === 'android' ? { to: '/android-setup' } : 
                                guide.id === 'firestick' ? { to: '/firestick-setup' } :
                                guide.id === 'smart-tv' ? { to: '/smart-tv-setup' } : {};
              
              return (
                <CardWrapper key={guide.id} {...cardProps}>
                  <Card
                    className={`bg-gradient-to-br ${guide.color} backdrop-blur-sm border ${guide.borderColor} hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10 group relative overflow-hidden cursor-pointer h-full`}
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
                        View Guide
                      </Button>

                      <div className="mt-3 text-center">
                        <span className="text-xs text-gray-500">
                          5-10 min setup • HD Video Tutorial
                        </span>
                      </div>
                    </CardContent>

                    <div className="absolute top-3 right-3 w-6 h-6 bg-red-600/20 rounded-full flex items-center justify-center">
                      <span className="text-red-400 text-xs font-bold">{index + 1}</span>
                    </div>
                  </Card>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete <span className="text-red-600">Setup</span> Instructions
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need to know about installing and configuring IPTV on your devices
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600/20 p-2 rounded-lg">
                    <Download className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Step 1: Download the App</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Each device requires a specific IPTV player application. Our guides will direct you to the 
                  official app stores or trusted sources to download the recommended applications for your device. 
                  We only recommend verified, safe applications with excellent performance records.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <Settings className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Step 2: Configure Settings</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  After installation, you'll need to configure the app with your IPTV service details. 
                  This includes entering your server URL, username, and password. Our detailed guides show 
                  you exactly where to find these settings and how to input them correctly for optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-600/20 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Step 3: Test & Optimize</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Once configured, we'll guide you through testing your connection and optimizing settings 
                  for the best streaming experience. This includes adjusting video quality, enabling EPG 
                  (Electronic Program Guide), and setting up parental controls if needed.
                </p>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 backdrop-blur-sm border border-red-600/30 rounded-2xl p-8 text-center">
              <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Secure & Reliable Setup
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                All our recommended applications are verified for security and performance. 
                We prioritize your privacy and ensure you're using the most reliable software available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-300">
              Common questions about IPTV setup and installation
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-800/50 border-gray-700 rounded-lg px-6 data-[state=open]:bg-gray-800/70"
              >
                <AccordionTrigger className="text-left text-white hover:text-red-400 hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Us for Setup Support Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Contact Us for <span className="text-red-600">Setup Support</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Need personal assistance? Our expert support team is here to help you get set up quickly and easily.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Describe your setup issue and we'll get back to you within 2 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your device and the setup issue you're experiencing..."
                      rows={5}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Options & Support Info */}
            <div className="space-y-8">
              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Support Options</h3>
                
                <Card className="bg-green-600/10 border-green-600/30 hover:bg-green-600/20 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-600/20 p-3 rounded-lg">
                        <MessageCircle className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">WhatsApp Support</h4>
                        <p className="text-green-400 text-sm">+44 20 1234 5678</p>
                        <p className="text-gray-400 text-sm">Instant responses • 24/7 available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-600/10 border-blue-600/30 hover:bg-blue-600/20 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600/20 p-3 rounded-lg">
                        <Chrome className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">Live Chat</h4>
                        <p className="text-blue-400 text-sm">Available on website</p>
                        <p className="text-gray-400 text-sm">Real-time assistance • Screen sharing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-red-600/10 border-red-600/30 hover:bg-red-600/20 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-600/20 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-red-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">Email Support</h4>
                        <p className="text-red-400 text-sm">support@iptvuk.com</p>
                        <p className="text-gray-400 text-sm">Detailed responses • 2-hour turnaround</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Support Stats */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Our Support Performance
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">2hrs</div>
                    <div className="text-gray-400 text-sm">Average Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                    <div className="text-gray-400 text-sm">Setup Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-gray-400 text-sm">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">15K+</div>
                    <div className="text-gray-400 text-sm">Customers Helped</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SetupGuides;