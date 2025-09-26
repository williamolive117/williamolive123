import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, CheckCircle, Download, Settings, Smartphone, Tablet, Monitor, Gamepad2 } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FireStickSetup = () => {
  const [openFAQs, setOpenFAQs] = useState<{ [key: string]: boolean }>({});

  const toggleFAQ = (faqId: string) => {
    setOpenFAQs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  const tutorialSteps = [
    {
      title: "Step 1: Enable Apps from Unknown Sources",
      description: "Navigate to Settings > My Fire TV > Developer Options and turn on 'Apps from Unknown Sources'. This allows installation of third-party IPTV apps.",
      icon: <Settings className="w-8 h-8 text-red-500" />
    },
    {
      title: "Step 2: Download Downloader App",
      description: "Go to the Amazon App Store and search for 'Downloader' by AFTVnews. Install this free app which will help you download IPTV applications.",
      icon: <Download className="w-8 h-8 text-red-500" />
    },
    {
      title: "Step 3: Install IPTV Smarters Pro",
      description: "Open Downloader app, enter the IPTV Smarters Pro APK URL, and download the application. Once downloaded, click Install when prompted.",
      icon: <Monitor className="w-8 h-8 text-red-500" />
    },
    {
      title: "Step 4: Configure Your IPTV Subscription",
      description: "Launch IPTV Smarters Pro, select 'Login with Xtream Codes API', and enter your subscription details (server URL, username, and password).",
      icon: <CheckCircle className="w-8 h-8 text-red-500" />
    }
  ];

  const faqs = [
    {
      id: "faq1",
      question: "How do I install the app on my Fire TV Stick?",
      answer: "You can install IPTV apps using the Downloader app from Amazon App Store, or by sideloading APK files using ADB commands."
    },
    {
      id: "faq2",
      question: "Do I need a separate subscription for each Fire TV device?",
      answer: "No, most IPTV subscriptions allow multiple device connections. Check your plan details for the number of concurrent streams allowed."
    },
    {
      id: "faq3",
      question: "What apps are compatible with IPTV on Fire TV?",
      answer: "Popular apps include IPTV Smarters Pro, TiviMate, Perfect Player, and VLC Media Player. Most Android-based IPTV apps work on Fire TV devices."
    },
    {
      id: "faq4",
      question: "Is there a trial period?",
      answer: "Yes, we offer a 24-hour trial for £1.99 so you can test the service quality and compatibility with your Fire TV device before committing."
    },
    {
      id: "faq5",
      question: "Can I use the same account on multiple Fire TV devices?",
      answer: "Yes, depending on your subscription plan. Most plans support 2-5 concurrent connections, allowing you to use the same account across multiple devices."
    },
    {
      id: "faq6",
      question: "What internet speed do I need for Fire TV streaming?",
      answer: "For HD streaming, you need at least 10 Mbps. For 4K content, we recommend 25+ Mbps for the best viewing experience."
    },
    {
      id: "faq7",
      question: "How do I update IPTV apps on Fire TV?",
      answer: "Since sideloaded apps don't auto-update, you'll need to manually download and install newer versions using the same process as initial installation."
    },
    {
      id: "faq8",
      question: "Can I record shows on Fire TV?",
      answer: "Recording capabilities depend on the IPTV app you choose. Apps like TiviMate offer recording features, while others focus on live streaming only."
    },
    {
      id: "faq9",
      question: "What if the app keeps buffering?",
      answer: "Check your internet connection, try different servers in the app settings, or contact our 24/7 support team for optimized server recommendations."
    },
    {
      id: "faq10",
      question: "Is my Fire TV compatible with IPTV?",
      answer: "All Fire TV Stick models (Lite, 4K, 4K Max), Fire TV Cube, and Fire TV Edition smart TVs are compatible with IPTV applications."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Complete Guide for Fire TV Stick
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Follow our simple step-by-step guide to install IPTV on Fire TV Stick, Fire TV Cube, and Fire TV devices with ease.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Device Visual Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/50 rounded-3xl p-12 border border-gray-700/50">
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-red-500" />
                </div>
                <span className="text-white font-medium">Fire TV Stick</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-8 h-8 text-red-500" />
                </div>
                <span className="text-white font-medium">Fire TV Cube</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Tablet className="w-8 h-8 text-red-500" />
                </div>
                <span className="text-white font-medium">Fire TV Edition</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">All Fire TV Devices Supported</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our guide makes it easy to enjoy IPTV on any Amazon Fire TV device, from the basic Fire TV Stick to the premium Fire TV Cube.
            </p>
          </div>
        </div>
      </section>

      {/* Tutorial Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Step-by-Step Installation Guide
          </h2>
          <p className="text-gray-400 text-lg">
            Follow these simple steps to set up IPTV on your Fire TV device
          </p>
        </div>

        {/* Demo Content Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Setting up IPTV on your Amazon Fire TV device opens up a world of entertainment possibilities. Fire TV Stick, Fire TV Cube, and Fire TV Edition smart TVs all provide excellent platforms for streaming IPTV content with their powerful processors and user-friendly interfaces. The Amazon Fire OS, based on Android, offers great compatibility with various IPTV applications while maintaining the security and stability you expect from Amazon devices.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The installation process involves enabling developer options, using the Downloader app to sideload IPTV applications, and configuring your subscription credentials. Popular IPTV apps like IPTV Smarters Pro, TiviMate, and Perfect Player work seamlessly on Fire TV devices, providing intuitive navigation using the Fire TV remote and offering features like EPG (Electronic Program Guide), recording capabilities, and multi-screen viewing.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Before starting the setup, ensure your Fire TV device is connected to a stable internet connection with at least 10 Mbps for HD streaming and 25+ Mbps for 4K content. All Fire TV models from 2017 onwards are compatible with modern IPTV applications. Our comprehensive guide covers everything from basic installation to advanced configuration, including optimizing video quality, setting up parental controls, and troubleshooting common issues.
              </p>
              
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-gray-700/50">
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Works on all Fire TV models</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">No rooting or jailbreaking required</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Remote control friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {tutorialSteps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-4">
                  {step.icon}
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                  <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Step {index + 1} Visual Guide</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Subscription Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-red-800/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Subscription for Fire TV?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Choose the best IPTV subscription plan for your Fire TV device and start streaming instantly.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-gray-900/50 border-gray-700 hover:border-red-500/50 transition-colors">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">1 Month</h3>
                <div className="text-4xl font-bold text-red-500 mb-4">£9.99</div>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li>18,000+ Live Channels</li>
                  <li>60,000+ Movies & Shows</li>
                  <li>4K & HD Quality</li>
                  <li>24/7 Support</li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-red-500 hover:border-red-400 transition-colors relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">6 Months</h3>
                <div className="text-4xl font-bold text-red-500 mb-4">£39.99</div>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li>18,000+ Live Channels</li>
                  <li>60,000+ Movies & Shows</li>
                  <li>4K & HD Quality</li>
                  <li>Priority Support</li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-red-500/50 transition-colors">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">12 Months</h3>
                <div className="text-4xl font-bold text-red-500 mb-4">£69.99</div>
                <ul className="text-gray-400 space-y-2 mb-6">
                  <li>18,000+ Live Channels</li>
                  <li>60,000+ Movies & Shows</li>
                  <li>4K & HD Quality</li>
                  <li>VIP Support</li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Link to="/pricing">
            <Button variant="outline" size="lg" className="border-red-500 text-red-400 hover:bg-red-500/10">
              View All Plans
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Get answers to common questions about IPTV setup on Fire TV devices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq) => (
            <Card key={faq.id} className="bg-gray-900/30 border-gray-700">
              <Collapsible open={openFAQs[faq.id]} onOpenChange={() => toggleFAQ(faq.id)}>
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-800/50 transition-colors">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-white pr-4">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFAQs[faq.id] ? 'rotate-180' : ''}`} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-red-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Streaming on Your Fire TV Device Today
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get instant access to premium IPTV with easy setup and 24/7 support for all Fire TV devices.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg">
            Buy Subscription Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FireStickSetup;