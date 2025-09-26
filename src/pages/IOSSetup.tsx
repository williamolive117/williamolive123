import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, CheckCircle, Download, Settings, Monitor, Tv, Search, ExternalLink, Wifi, AlertTriangle, RefreshCw, Shield, PlayCircle, Smartphone, Tablet } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const IOSSetup = () => {
  const [openFAQs, setOpenFAQs] = useState<{ [key: string]: boolean }>({});
  const [openPlatforms, setOpenPlatforms] = useState<{ [key: string]: boolean }>({});

  const toggleFAQ = (faqId: string) => {
    setOpenFAQs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  const togglePlatform = (platformId: string) => {
    setOpenPlatforms(prev => ({
      ...prev,
      [platformId]: !prev[platformId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      id: "faq1",
      question: "Do I need an IPTV subscription?",
      answer: "Yes, a subscription is required to access IPTV services. You will need to sign up with a provider and log in with the credentials provided."
    },
    {
      id: "faq2",
      question: "Can I use IPTV on older iOS devices?",
      answer: "Most recent iOS devices (iPhone, iPad, Apple TV) support IPTV apps. Ensure that your device is running the latest software version for optimal performance."
    },
    {
      id: "faq3",
      question: "How do I update my IPTV app on iOS?",
      answer: "Visit the App Store, search for the app, and click Update if a newer version is available. Apps can also be set to auto-update in your device settings."
    },
    {
      id: "faq4",
      question: "Can I stream IPTV on multiple devices at once?",
      answer: "This depends on your IPTV provider and your subscription plan. Some providers allow multi-screen streaming across different devices simultaneously."
    },
    {
      id: "faq5",
      question: "What internet speed do I need for IPTV on iOS?",
      answer: "For HD streaming, you need at least 10 Mbps. For 4K content on Apple TV, we recommend 25+ Mbps. Ensure you have a stable Wi-Fi connection."
    },
    {
      id: "faq6",
      question: "Why can't I find certain IPTV apps in the App Store?",
      answer: "App availability may vary by region. If you can't find specific apps, try searching for alternative IPTV apps or contact your IPTV provider for recommended apps."
    }
  ];

  const troubleshootingIssues = [
    {
      issue: "IPTV app not showing up in the App Store",
      solution: "Ensure your device's software is up to date. If the app isn't available in your region, try using a VPN or choose an alternative IPTV app.",
      icon: <Search className="w-6 h-6 text-red-500" />
    },
    {
      issue: "Streaming issues (buffering or lag)",
      solution: "Check your internet connection. Ensure your Wi-Fi is stable and speeds are sufficient for streaming (10+ Mbps for HD, 25+ Mbps for 4K).",
      icon: <Wifi className="w-6 h-6 text-red-500" />
    },
    {
      issue: "App crashing or freezing",
      solution: "Restart the app or uninstall/reinstall it. Ensure your iOS is up to date. Close other apps to free up memory if needed.",
      icon: <RefreshCw className="w-6 h-6 text-red-500" />
    },
    {
      issue: "Login issues",
      solution: "Double-check your username and password. If the issue persists, reset your credentials via the IPTV provider or contact their support team.",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Step-by-Step IPTV Setup Guide for iPhone, iPad, and Apple TV
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto">
            Learn how to stream IPTV content on your Apple devices with this easy-to-follow guide.
          </h2>
          
          <Button 
            onClick={() => scrollToSection('installation-guide')}
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
          >
            Get Started with Setup
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose IPTV on iOS Devices?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Apple devices offer an exceptional platform for IPTV streaming, providing seamless integration across your iPhone, iPad, and Apple TV. With the iOS ecosystem's reliability and high-quality displays, you can enjoy live television, sports, and on-demand content with crystal-clear picture quality and smooth performance.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              The App Store provides access to numerous IPTV applications that are optimized for iOS devices. Whether you're watching on your iPhone during your commute, enjoying content on your iPad's larger screen, or streaming on your Apple TV in the living room, the experience remains consistent and user-friendly across all Apple devices.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <PlayCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
                <p className="text-gray-400">Experience HD and 4K streaming with Apple's superior display technology and processing power.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <Monitor className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Seamless Integration</h3>
                <p className="text-gray-400">Use AirPlay to stream from iPhone/iPad to Apple TV, and sync across all your Apple devices.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Secure Platform</h3>
                <p className="text-gray-400">Benefit from Apple's security features and curated App Store for safe IPTV app downloads.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IPTV Subscription Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-red-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Your IPTV Subscription
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Before setting up IPTV on your Apple devices, you'll need an active subscription from a reliable IPTV provider. Once you subscribe, you'll receive login credentials (username and password) that work across all your iOS devices. Choose from various providers offering live TV channels, on-demand movies, and sports streaming.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">1. Choose Provider</h3>
                <p className="text-gray-400">Select an IPTV provider that offers iOS-compatible apps and meets your content preferences.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2. Sign Up</h3>
                <p className="text-gray-400">Sign up and choose a plan that supports multiple devices if you want to use iPhone, iPad, and Apple TV.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">3. Get Credentials</h3>
                <p className="text-gray-400">Receive your login details (username & password) that you'll use on all your Apple devices.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              Find the Best IPTV Providers
            </Button>
          </div>
        </div>
      </section>

      {/* Step-by-Step Installation Guide */}
      <section id="installation-guide" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Select Your Device: iPhone, iPad, or Apple TV
          </h2>
          <p className="text-gray-400 text-lg">
            Choose your Apple device and follow the specific installation instructions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              id: 'iphone',
              title: 'iPhone',
              description: 'Install IPTV apps on your iPhone for mobile streaming',
              icon: <Smartphone className="w-8 h-8 text-red-500" />
            },
            {
              id: 'ipad',
              title: 'iPad',
              description: 'Set up IPTV on your iPad for tablet viewing experience',
              icon: <Tablet className="w-8 h-8 text-red-500" />
            },
            {
              id: 'apple-tv',
              title: 'Apple TV',
              description: 'Stream IPTV on your big screen with Apple TV',
              icon: <Tv className="w-8 h-8 text-red-500" />
            }
          ].map((platform) => (
            <Card key={platform.id} className="bg-gray-900/30 border-gray-700 hover:border-red-500/50 transition-colors">
              <Collapsible open={openPlatforms[platform.id]} onOpenChange={() => togglePlatform(platform.id)}>
                <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-800/50 transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {platform.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{platform.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{platform.description}</p>
                    <ChevronDown className={`w-5 h-5 text-gray-400 mx-auto transition-transform ${openPlatforms[platform.id] ? 'rotate-180' : ''}`} />
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="px-6 pb-6">
                  {platform.id === 'iphone' && (
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-white">How to Install IPTV on iPhone</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                          <div>
                            <h5 className="font-semibold text-white">Open the App Store</h5>
                            <p className="text-gray-400 text-sm">Tap on the App Store icon on your iPhone's home screen to access the store.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                          <div>
                            <h5 className="font-semibold text-white">Search for Your Desired IPTV App</h5>
                            <p className="text-gray-400 text-sm">Use the search function to look for IPTV apps recommended by your provider, such as IPTV Smarters Pro, GSE Smart IPTV, or similar apps.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                          <div>
                            <h5 className="font-semibold text-white">Tap Install</h5>
                            <p className="text-gray-400 text-sm">Tap the "Get" or "Install" button to download the app to your iPhone. You may need to authenticate with Face ID, Touch ID, or your Apple ID password.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                          <div>
                            <h5 className="font-semibold text-white">Open and Log In</h5>
                            <p className="text-gray-400 text-sm">Once installed, open the app and log in with your IPTV credentials (username and password provided by your provider).</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                          <div>
                            <h5 className="font-semibold text-white">Start Watching</h5>
                            <p className="text-gray-400 text-sm">Browse available channels and start streaming live TV or on-demand content on your iPhone!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {platform.id === 'ipad' && (
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-white">How to Install IPTV on iPad</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                          <div>
                            <h5 className="font-semibold text-white">Open the App Store</h5>
                            <p className="text-gray-400 text-sm">Tap on the App Store icon on your iPad's home screen or dock.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                          <div>
                            <h5 className="font-semibold text-white">Search for Your IPTV App</h5>
                            <p className="text-gray-400 text-sm">Search for IPTV apps that are optimized for iPad's larger screen, such as IPTV Smarters Pro, GSE Smart IPTV, or apps recommended by your provider.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                          <div>
                            <h5 className="font-semibold text-white">Tap Install</h5>
                            <p className="text-gray-400 text-sm">Tap "Get" or "Install" to download the app. Authenticate with your Apple ID if prompted.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                          <div>
                            <h5 className="font-semibold text-white">Log In with Credentials</h5>
                            <p className="text-gray-400 text-sm">Launch the app and enter your IPTV login credentials. The iPad's larger screen makes it easier to navigate the login interface.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                          <div>
                            <h5 className="font-semibold text-white">Start Streaming on iPad</h5>
                            <p className="text-gray-400 text-sm">Enjoy IPTV content on your iPad's beautiful display with enhanced viewing experience for movies and live TV.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {platform.id === 'apple-tv' && (
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-white">How to Install IPTV on Apple TV</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                          <div>
                            <h5 className="font-semibold text-white">Open the App Store on Apple TV</h5>
                            <p className="text-gray-400 text-sm">Using your Apple TV remote, navigate to and open the App Store on your Apple TV home screen.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                          <div>
                            <h5 className="font-semibold text-white">Search for the IPTV App</h5>
                            <p className="text-gray-400 text-sm">Use the search function to look for IPTV apps that support Apple TV, such as IPTV Smarters Pro, GSE Smart IPTV, or apps recommended by your provider.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                          <div>
                            <h5 className="font-semibold text-white">Install the App</h5>
                            <p className="text-gray-400 text-sm">Select the app and click "Get" or "Install" to download it to your Apple TV. The app will appear on your home screen once installed.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                          <div>
                            <h5 className="font-semibold text-white">Open and Log In</h5>
                            <p className="text-gray-400 text-sm">Launch the app and enter your IPTV credentials. You can use the remote or your iPhone's keyboard for easier text input.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                          <div>
                            <h5 className="font-semibold text-white">Enjoy IPTV on Your TV</h5>
                            <p className="text-gray-400 text-sm">Start enjoying IPTV content on your big screen with Apple TV's excellent performance and 4K streaming capabilities!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Troubleshooting Your IPTV Setup
            </h2>
            <p className="text-gray-400 text-lg">
              Solutions to common issues you might encounter on iOS devices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {troubleshootingIssues.map((item, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-700 p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    {item.icon}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.issue}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Get answers to common questions about IPTV setup on iOS devices
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Watching IPTV?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get your Apple devices set up with IPTV and start enjoying thousands of channels, movies, and sports across all your iOS devices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download IPTV App Now
            </Button>
            <Button variant="outline" size="lg" className="border-red-500 text-red-400 hover:bg-red-500/10 px-12 py-4 text-lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              Need Help? Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IOSSetup;