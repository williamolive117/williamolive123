import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, CheckCircle, Download, Settings, Smartphone, Tablet, Monitor, Tv } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SmartTVSetup = () => {
  const [openFAQs, setOpenFAQs] = useState<{ [key: string]: boolean }>({});

  const toggleFAQ = (faqId: string) => {
    setOpenFAQs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  const tutorialSteps = [
    {
      title: "Step 1: Check Your Smart TV Platform",
      description: "Identify whether your Smart TV runs LG WebOS, Samsung Tizen, Android TV, or other platforms. This determines which IPTV apps are compatible and available for installation.",
      icon: <Tv className="w-8 h-8 text-red-500" />
    },
    {
      title: "Step 2: Access Your TV's App Store",
      description: "Navigate to LG Content Store (WebOS) or Samsung Smart Hub (Tizen). Search for compatible IPTV apps like Smart IPTV, IPTV Smarters Pro, or SS IPTV.",
      icon: <Download className="w-8 h-8 text-red-500" />
    },
    {
      title: "Step 3: Install and Configure IPTV App",
      description: "Download your chosen IPTV application from the official app store. For some apps, you may need to register the app using your TV's MAC address on the provider's website.",
      icon: <Settings className="w-8 h-8 text-red-500" />
    },
    {
      title: "Step 4: Add Your IPTV Playlist",
      description: "Enter your M3U playlist URL or Xtream Codes API details (server URL, username, password) into the app. Test the connection and enjoy your IPTV channels.",
      icon: <CheckCircle className="w-8 h-8 text-red-500" />
    }
  ];

  const faqs = [
    {
      id: "faq1",
      question: "Which IPTV apps work on LG WebOS Smart TVs?",
      answer: "Popular apps for LG WebOS include Smart IPTV, SS IPTV, and IPTV Smarters Pro. Some apps require MAC address registration on the developer's website before use."
    },
    {
      id: "faq2",
      question: "How do I install IPTV on Samsung Tizen Smart TV?",
      answer: "Use Samsung Smart Hub to download compatible apps like Smart IPTV or Tizen IPTV. Some apps may require sideloading using developer mode for newer Tizen versions."
    },
    {
      id: "faq3",
      question: "Do I need separate subscriptions for multiple Smart TVs?",
      answer: "No, most IPTV subscriptions allow multiple device connections. Check your plan details for the number of concurrent streams allowed across all your Smart TVs."
    },
    {
      id: "faq4",
      question: "What internet speed is needed for Smart TV IPTV?",
      answer: "For HD streaming, you need at least 10 Mbps per TV. For 4K content, we recommend 25+ Mbps. Ensure your Smart TV has a stable Wi-Fi or ethernet connection."
    },
    {
      id: "faq5",
      question: "Can I use the same IPTV account on different Smart TV brands?",
      answer: "Yes, your IPTV subscription works across different Smart TV platforms (LG, Samsung, Sony, etc.) as long as you have available device connections in your plan."
    },
    {
      id: "faq6",
      question: "How do I find my Smart TV's MAC address?",
      answer: "Go to Settings > Network > Network Status (Samsung) or Settings > Connection > Wi-Fi Connection > Advanced (LG). The MAC address is usually displayed in the network information."
    },
    {
      id: "faq7",
      question: "Why can't I find IPTV apps in my Smart TV's app store?",
      answer: "App availability varies by region and TV model. Older Smart TVs may have limited app stores. Consider using external devices like Fire Stick or Android TV box as alternatives."
    },
    {
      id: "faq8",
      question: "Do Smart TV IPTV apps support EPG (TV Guide)?",
      answer: "Yes, most modern IPTV apps for Smart TVs support EPG functionality, showing program schedules and descriptions when provided by your IPTV service."
    },
    {
      id: "faq9",
      question: "Can I record shows using Smart TV IPTV apps?",
      answer: "Recording capabilities depend on the specific app and your Smart TV's features. Some apps offer cloud recording or local recording to USB devices connected to your TV."
    },
    {
      id: "faq10",
      question: "What should I do if my Smart TV IPTV app keeps crashing?",
      answer: "Clear the app cache, restart your Smart TV, check for app updates, and ensure your internet connection is stable. Contact support if issues persist."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart TV (LG/Samsung)
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Install on LG WebOS, Samsung Tizen, and other Smart TV platforms with ease.
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
                  <Tv className="w-8 h-8 text-red-500" />
                </div>
                <span className="text-white font-medium">LG WebOS</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-red-500" />
                </div>
                <span className="text-white font-medium">Samsung Tizen</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center">
                  <Tablet className="w-8 h-8 text-red-500" />
                </div>
                <span className="text-white font-medium">Android TV</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">All Smart TV Platforms Supported</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our guide makes it easy to enjoy IPTV on any Smart TV platform, from LG WebOS and Samsung Tizen to Android TV and other systems.
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
            Follow these simple steps to set up IPTV on your Smart TV
          </p>
        </div>

        {/* Demo Content Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Smart TVs have revolutionized home entertainment by integrating streaming capabilities directly into television sets. Modern Smart TVs from LG (WebOS), Samsung (Tizen), Sony (Android TV), and other manufacturers offer dedicated app stores where you can download and install IPTV applications. This native integration eliminates the need for additional hardware while providing seamless access to thousands of live channels and on-demand content through your TV's built-in interface and remote control.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The setup process varies slightly between different Smart TV platforms, but generally involves accessing your TV's app store, searching for compatible IPTV applications, and configuring them with your subscription details. Popular apps like Smart IPTV, SS IPTV, and IPTV Smarters Pro are designed specifically for Smart TV interfaces, offering user-friendly navigation with your standard TV remote. Some platforms may require additional steps like MAC address registration or developer mode activation for certain applications.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Smart TV IPTV offers several advantages including direct integration with your TV's interface, support for high-definition and 4K streaming, electronic program guide (EPG) functionality, and parental control features. Most modern Smart TVs can handle multiple video formats and codecs, ensuring compatibility with various IPTV streams. For optimal performance, ensure your Smart TV is connected to a high-speed internet connection (minimum 10 Mbps for HD, 25+ Mbps for 4K) and keep your TV's firmware updated.
              </p>
              
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-gray-700/50">
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Works on all major Smart TV brands</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">No additional hardware needed</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Native remote control support</span>
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
            Need a Subscription for Smart TV?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Choose the best IPTV subscription plan for your Smart TV and start streaming instantly.
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
                  <li>Smart TV Optimized</li>
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
                  <li>EPG & Recording</li>
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
                  <li>Multi-TV Support</li>
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
            Get answers to common questions about IPTV setup on Smart TVs
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
            Start Streaming on Your Smart TV Today
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get instant access to premium IPTV with native Smart TV apps and seamless remote control integration.
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

export default SmartTVSetup;