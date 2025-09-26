import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, CheckCircle, Download, Settings, Smartphone, Tablet, Monitor, Tv, Play, Wifi, AlertTriangle, RefreshCw, Search, ExternalLink, Zap, Shield } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SmartTVSetup = () => {
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
      question: "Do I need a subscription to use IPTV?",
      answer: "Yes, IPTV services usually require a subscription. You'll need to contact your IPTV provider to obtain login credentials (username and password) to access the content through any IPTV app."
    },
    {
      id: "faq2",
      question: "Can I use IPTV on older LG or Samsung Smart TVs?",
      answer: "Most newer LG and Samsung models support IPTV apps. For older models, make sure your TV is running the latest software update. If your TV doesn't support modern apps, consider using external devices like Fire Stick or Android TV box."
    },
    {
      id: "faq3",
      question: "How can I update my IPTV app?",
      answer: "Go to your TV's Content Store (LG) or Smart Hub (Samsung), search for the IPTV app, and select Update if a newer version is available. Some apps update automatically when connected to the internet."
    },
    {
      id: "faq4",
      question: "What internet speed do I need for IPTV on Smart TV?",
      answer: "For HD streaming, you need at least 10 Mbps per TV. For 4K content, we recommend 25+ Mbps. A stable ethernet connection is preferred over Wi-Fi for the best streaming experience."
    },
    {
      id: "faq5",
      question: "Why can't I find IPTV apps in my Smart TV's app store?",
      answer: "App availability varies by region and TV model. If you can't find specific IPTV apps, try searching for alternative apps like 'Smart IPTV', 'IPTV Smarters', or 'SS IPTV'. Some apps may require sideloading."
    },
    {
      id: "faq6",
      question: "How do I find my Smart TV's MAC address?",
      answer: "For Samsung: Settings > Network > Network Status. For LG: Settings > Connection > Wi-Fi Connection > Advanced. The MAC address is displayed in the network information section."
    }
  ];

  const troubleshootingIssues = [
    {
      issue: "IPTV app not showing in the store",
      solution: "Ensure your TV's software is up-to-date. If the app still doesn't appear, check if it's available in your region or look for alternative IPTV apps like Smart IPTV or IPTV Smarters.",
      icon: <Search className="w-6 h-6 text-red-500" />
    },
    {
      issue: "Streaming issues like buffering or lag",
      solution: "Ensure you have a stable internet connection (10+ Mbps for HD, 25+ Mbps for 4K). Try restarting your router and check if the app has settings for adjusting streaming quality.",
      icon: <Wifi className="w-6 h-6 text-red-500" />
    },
    {
      issue: "App freezing or crashing",
      solution: "Close and reopen the app. If the problem persists, uninstall and reinstall the app. Also, ensure your Smart TV has the latest firmware update installed.",
      icon: <RefreshCw className="w-6 h-6 text-red-500" />
    },
    {
      issue: "Login Issues",
      solution: "Double-check your login credentials (username and password). If necessary, reset your IPTV password by contacting your service provider or check if your subscription is still active.",
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
            Step-by-Step IPTV Setup Guide for LG WebOS, Samsung Tizen, and Other Smart TVs
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto">
            Follow these easy instructions to install IPTV on your Smart TV and enjoy seamless streaming.
          </h2>
          
          {/* Visual Media Placeholder */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50">
              <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Play className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <span className="text-gray-400 text-lg">IPTV Streaming on Smart TV</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Visual demonstration of IPTV setup and streaming on Smart TVs</p>
            </div>
          </div>

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
            Why Install IPTV on Your Smart TV?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              IPTV (Internet Protocol Television) transforms your Smart TV into a powerful entertainment hub, providing access to thousands of live TV channels, movies, and sports directly through your internet connection. Unlike traditional cable or satellite services, IPTV offers flexibility, convenience, and access to global content from the comfort of your living room.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <Tv className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Live TV Channels</h3>
                <p className="text-gray-400">Stream thousands of live channels from around the world directly on your Smart TV.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <Play className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Movies & Sports</h3>
                <p className="text-gray-400">Enjoy on-demand movies, TV shows, and live sports events in HD and 4K quality.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <Zap className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Convenience</h3>
                <p className="text-gray-400">No additional hardware needed - use your Smart TV's built-in apps and remote control.</p>
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
                To start using IPTV, you'll need an active subscription from a reliable IPTV provider. Once you have your subscription, you will receive your login credentials (username and password). You can find a variety of IPTV service providers online that offer live TV channels, on-demand movies, and sports streaming.
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
                <p className="text-gray-400">Choose an IPTV provider that fits your preferences and viewing needs.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2. Sign Up</h3>
                <p className="text-gray-400">Sign up and choose a plan based on your viewing needs and budget.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">3. Get Credentials</h3>
                <p className="text-gray-400">Receive your login details (username & password) for the IPTV app.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              Find the Best IPTV Providers Now
            </Button>
          </div>
        </div>
      </section>

      {/* Step-by-Step Installation Guide */}
      <section id="installation-guide" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Step-by-Step Installation Guide
          </h2>
          <p className="text-gray-400 text-lg">
            Choose your Smart TV platform and follow the specific instructions
          </p>
        </div>

        {/* Platform Selection */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Select Your Smart TV Platform
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'lg-webos',
                title: 'LG WebOS',
                description: 'For LG Smart TVs with WebOS operating system',
                icon: <Tv className="w-8 h-8 text-red-500" />
              },
              {
                id: 'samsung-tizen',
                title: 'Samsung Tizen',
                description: 'For Samsung Smart TVs with Tizen OS',
                icon: <Monitor className="w-8 h-8 text-red-500" />
              },
              {
                id: 'other-platforms',
                title: 'Other Smart TVs',
                description: 'Android TV, Roku, and other platforms',
                icon: <Tablet className="w-8 h-8 text-red-500" />
              }
            ].map((platform) => (
              <Card key={platform.id} className="bg-gray-900/30 border-gray-700 hover:border-red-500/50 transition-colors cursor-pointer">
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
                    {platform.id === 'lg-webos' && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white">Installing IPTV on LG WebOS</h4>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                            <div>
                              <h5 className="font-semibold text-white">Open the LG Content Store</h5>
                              <p className="text-gray-400 text-sm">On your LG TV, press the Home button on your remote, then select LG Content Store from the menu.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                            <div>
                              <h5 className="font-semibold text-white">Search for the IPTV App</h5>
                              <p className="text-gray-400 text-sm">In the Content Store, use the search function to look for IPTV apps like Smart IPTV, IPTV Smarters, or SS IPTV.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                            <div>
                              <h5 className="font-semibold text-white">Click Install</h5>
                              <p className="text-gray-400 text-sm">After finding the app, click on Install to download it onto your Smart TV.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                            <div>
                              <h5 className="font-semibold text-white">Log in to the IPTV App</h5>
                              <p className="text-gray-400 text-sm">Once installed, open the app and log in with your IPTV credentials (username and password provided by your IPTV provider).</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                            <div>
                              <h5 className="font-semibold text-white">Start Watching IPTV Content</h5>
                              <p className="text-gray-400 text-sm">After logging in, you're all set! Browse through the available channels or on-demand content and start streaming!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {platform.id === 'samsung-tizen' && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white">Installing IPTV on Samsung Tizen</h4>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                            <div>
                              <h5 className="font-semibold text-white">Open the Samsung Smart Hub</h5>
                              <p className="text-gray-400 text-sm">Press the Home button on your remote, and navigate to the Smart Hub.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                            <div>
                              <h5 className="font-semibold text-white">Search for the IPTV App</h5>
                              <p className="text-gray-400 text-sm">In the search bar, type in the name of IPTV apps like Smart IPTV, IPTV Smarters, or SS IPTV.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                            <div>
                              <h5 className="font-semibold text-white">Install the App</h5>
                              <p className="text-gray-400 text-sm">Once you find the IPTV app, click on Install.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                            <div>
                              <h5 className="font-semibold text-white">Log in to the IPTV Service</h5>
                              <p className="text-gray-400 text-sm">Open the app and enter your IPTV login credentials.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                            <div>
                              <h5 className="font-semibold text-white">Start Streaming IPTV Content</h5>
                              <p className="text-gray-400 text-sm">After logging in, explore the IPTV app and start enjoying live TV, movies, or sports.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {platform.id === 'other-platforms' && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white">Installing IPTV on Other Smart TV Platforms</h4>
                        
                        <div className="space-y-6">
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-3">Android TV:</h5>
                            <div className="space-y-2 ml-4">
                              <p className="text-gray-400 text-sm">• Open the Google Play Store</p>
                              <p className="text-gray-400 text-sm">• Search for your IPTV app (e.g., IPTV Smarters, Smart IPTV, etc.)</p>
                              <p className="text-gray-400 text-sm">• Install the app</p>
                              <p className="text-gray-400 text-sm">• Log in to your IPTV account and start watching content</p>
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-3">Roku:</h5>
                            <div className="space-y-2 ml-4">
                              <p className="text-gray-400 text-sm">• Go to the Roku Channel Store</p>
                              <p className="text-gray-400 text-sm">• Search for an IPTV app (e.g., IPTV Smarters or other compatible apps)</p>
                              <p className="text-gray-400 text-sm">• Add the app to your Roku device</p>
                              <p className="text-gray-400 text-sm">• Open the app, log in, and enjoy your IPTV service</p>
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
              Solutions to common issues you might encounter during setup
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

      {/* Compatibility and Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-red-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              IPTV Compatibility & Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Device Compatibility</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Most LG WebOS and Samsung Tizen models from the past few years are compatible with IPTV apps. Check your TV's specifications if you're unsure whether your model supports IPTV streaming applications.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">LG WebOS 3.0 and newer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Samsung Tizen 2016 and newer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Android TV (all versions)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Roku OS 9.0 and newer</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">IPTV Features</h3>
              <div className="space-y-4">
                <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <Zap className="w-5 h-5 text-red-500" />
                    <h4 className="font-semibold text-white">4K Streaming</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Many IPTV apps support 4K streaming if your TV and internet connection allow it.</p>
                </div>
                
                <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <Monitor className="w-5 h-5 text-red-500" />
                    <h4 className="font-semibold text-white">Multi-Screen Support</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Some IPTV services allow you to watch content on multiple screens simultaneously (tablet, phone, and TV).</p>
                </div>
                
                <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <Tv className="w-5 h-5 text-red-500" />
                    <h4 className="font-semibold text-white">Picture-in-Picture Mode</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Some apps support watching IPTV in a smaller window while you browse other content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-red-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Watching IPTV?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get your Smart TV set up with IPTV and start enjoying thousands of channels, movies, and sports right now.
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

export default SmartTVSetup;