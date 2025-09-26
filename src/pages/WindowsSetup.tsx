import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, CheckCircle, Download, Settings, Monitor, Search, ExternalLink, Wifi, AlertTriangle, RefreshCw, Shield, PlayCircle, Store, HardDrive } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WindowsSetup = () => {
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
      question: "Do I need a subscription for IPTV?",
      answer: "Yes, you need an IPTV subscription to access the content. You'll use the login credentials provided by your IPTV service provider to access live TV channels, movies, and on-demand content."
    },
    {
      id: "faq2",
      question: "Can I use IPTV on older Windows versions?",
      answer: "Yes, you can install IPTV apps on older Windows versions (e.g., Windows 7, 8) by downloading the installer directly from the app's official website. Some apps may have different installation methods for legacy systems."
    },
    {
      id: "faq3",
      question: "How can I update my IPTV app on Windows?",
      answer: "Visit the Microsoft Store or the app's official website and follow the prompts to update the app. Most apps will notify you when updates are available."
    },
    {
      id: "faq4",
      question: "Can I use IPTV on multiple devices at once?",
      answer: "This depends on your IPTV provider and subscription plan. Some providers allow multi-screen streaming across different devices simultaneously."
    },
    {
      id: "faq5",
      question: "What internet speed do I need for IPTV on Windows?",
      answer: "For HD streaming, we recommend at least 10 Mbps. For 4K content, 25+ Mbps is ideal. A stable wired internet connection often provides better performance than Wi-Fi."
    },
    {
      id: "faq6",
      question: "Can I use IPTV apps from outside the Microsoft Store?",
      answer: "Yes, many IPTV apps can be downloaded directly from the provider's website, especially for older Windows versions or specialized applications not available in the Microsoft Store."
    }
  ];

  const troubleshootingIssues = [
    {
      issue: "IPTV App Not Showing in Microsoft Store",
      solution: "Ensure that your Windows 10 or 11 is updated to the latest version. Try using an alternative IPTV app or visit the provider's website to download the setup file directly.",
      icon: <Store className="w-6 h-6 text-red-500" />
    },
    {
      issue: "Streaming issues (buffering, lag)",
      solution: "Check your internet connection speed and stability. A wired connection is often more reliable than Wi-Fi. If buffering occurs, reduce streaming quality within the IPTV app settings.",
      icon: <Wifi className="w-6 h-6 text-red-500" />
    },
    {
      issue: "App crashing or freezing",
      solution: "Restart the app and your computer if necessary. If the issue persists, reinstall the app and check for Windows updates. Close other resource-intensive applications.",
      icon: <RefreshCw className="w-6 h-6 text-red-500" />
    },
    {
      issue: "Login problems",
      solution: "Double-check your login credentials for typos. Ensure your subscription is active. If you can't log in, reset your credentials through your IPTV provider's website or contact support.",
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
            Step-by-Step IPTV Setup Guide for Windows PC/Laptop
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-4">
            Windows 10, 11, and Older Operating Systems
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto">
            Learn how to install IPTV applications on your Windows PC or Laptop with this easy-to-follow guide.
          </p>
          
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
            Why Install IPTV on Windows PC/Laptop?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              IPTV offers access to a wide range of live TV channels, sports events, movies, and shows. Installing IPTV on your Windows PC or Laptop is an easy way to enjoy your favorite content in high quality, without the need for a set-top box. With the power and flexibility of Windows, you can enjoy superior streaming performance and multi-tasking capabilities.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Windows PCs and laptops provide excellent platforms for IPTV streaming, offering large screens, powerful processors, and stable internet connections. Whether you're using Windows 10, 11, or an older version, you can access thousands of channels and on-demand content with crystal-clear quality and reliable performance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <Monitor className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Large Screen Experience</h3>
                <p className="text-gray-400">Enjoy IPTV content on large monitors with superior resolution and viewing comfort for extended periods.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <Settings className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Advanced Configuration</h3>
                <p className="text-gray-400">Take advantage of Windows' advanced settings and customization options for optimal streaming performance.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                <HardDrive className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Multi-tasking Power</h3>
                <p className="text-gray-400">Stream IPTV while running other applications, perfect for productivity and entertainment combined.</p>
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
                Before setting up IPTV on your Windows device, you need a valid IPTV subscription. To stream IPTV on your Windows device, you need to subscribe to an IPTV provider and obtain your username and password. Use these credentials to access the IPTV service and enjoy thousands of channels and on-demand content.
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
                <p className="text-gray-400">Select an IPTV provider that offers Windows-compatible apps and fits your content preferences and budget.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2. Sign Up & Choose Plan</h3>
                <p className="text-gray-400">Register with your chosen provider and select a subscription plan (monthly, yearly, etc.) that meets your viewing needs.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">3. Receive Credentials</h3>
                <p className="text-gray-400">After registration, you'll receive your login credentials (username and password) via email to access your IPTV service.</p>
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
            Select Your Windows Version: 10, 11, or Older
          </h2>
          <p className="text-gray-400 text-lg">
            Choose your Windows version and follow the specific installation instructions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              id: 'windows-10',
              title: 'Windows 10',
              description: 'Install IPTV apps on Windows 10 using Microsoft Store or direct downloads',
              icon: <Monitor className="w-8 h-8 text-red-500" />
            },
            {
              id: 'windows-11',
              title: 'Windows 11',
              description: 'Set up IPTV on the latest Windows 11 operating system',
              icon: <Monitor className="w-8 h-8 text-red-500" />
            },
            {
              id: 'older-windows',
              title: 'Older Windows Versions',
              description: 'Install IPTV on Windows 7, 8, and other legacy versions',
              icon: <HardDrive className="w-8 h-8 text-red-500" />
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
                  {platform.id === 'windows-10' && (
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-white">How to Install IPTV on Windows 10</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                          <div>
                            <h5 className="font-semibold text-white">Open the Microsoft Store</h5>
                            <p className="text-gray-400 text-sm">Click the Start Menu and open the Microsoft Store. You can also search for "Microsoft Store" in the search bar.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                          <div>
                            <h5 className="font-semibold text-white">Search for the IPTV App</h5>
                            <p className="text-gray-400 text-sm">In the store's search bar, type in the name of your IPTV provider's app (e.g., IPTV Smarters Pro, Perfect Player, GSE Smart IPTV).</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                          <div>
                            <h5 className="font-semibold text-white">Click Install</h5>
                            <p className="text-gray-400 text-sm">Select the app and click "Get" or "Install" to download it to your Windows 10 system.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                          <div>
                            <h5 className="font-semibold text-white">Launch the IPTV App</h5>
                            <p className="text-gray-400 text-sm">After installation, open the app from the Start menu, desktop shortcut, or taskbar.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                          <div>
                            <h5 className="font-semibold text-white">Log in with IPTV Credentials</h5>
                            <p className="text-gray-400 text-sm">Enter the username and password you received from your IPTV provider.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                          <div>
                            <h5 className="font-semibold text-white">Start Streaming</h5>
                            <p className="text-gray-400 text-sm">Once logged in, browse through available channels or on-demand content and begin streaming on your Windows 10 PC!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {platform.id === 'windows-11' && (
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-white">How to Install IPTV on Windows 11</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                          <div>
                            <h5 className="font-semibold text-white">Open Microsoft Store</h5>
                            <p className="text-gray-400 text-sm">From the Start Menu or taskbar, select Microsoft Store. You can also use the Windows key + search for "Microsoft Store".</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                          <div>
                            <h5 className="font-semibold text-white">Search for IPTV App</h5>
                            <p className="text-gray-400 text-sm">Use the Search bar in the Microsoft Store to find the IPTV app recommended by your provider (e.g., IPTV Smarters Pro, GSE Smart IPTV, Perfect Player).</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                          <div>
                            <h5 className="font-semibold text-white">Install the App</h5>
                            <p className="text-gray-400 text-sm">Click on the app and tap "Get" or "Install" to download it to your Windows 11 system.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                          <div>
                            <h5 className="font-semibold text-white">Open the IPTV App</h5>
                            <p className="text-gray-400 text-sm">After installation, launch the app from the Start menu or by searching for it in the Windows 11 search.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                          <div>
                            <h5 className="font-semibold text-white">Log in</h5>
                            <p className="text-gray-400 text-sm">Enter your IPTV credentials (username and password) provided by your IPTV service.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                          <div>
                            <h5 className="font-semibold text-white">Enjoy Streaming</h5>
                            <p className="text-gray-400 text-sm">Browse the content library and start streaming your favorite shows, movies, and live TV channels on Windows 11!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {platform.id === 'older-windows' && (
                    <div className="space-y-6">
                      <h4 className="text-lg font-bold text-white">How to Install IPTV on Older Windows Versions</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                          <div>
                            <h5 className="font-semibold text-white">Download the IPTV App</h5>
                            <p className="text-gray-400 text-sm">Go to the official website of the IPTV app (e.g., IPTV Smarters Pro, VLC Media Player, Perfect Player), and download the Windows setup file (.exe or .msi).</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                          <div>
                            <h5 className="font-semibold text-white">Run the Setup</h5>
                            <p className="text-gray-400 text-sm">Locate the downloaded file in your Downloads folder and double-click it. Follow the on-screen installation wizard to install the app.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                          <div>
                            <h5 className="font-semibold text-white">Complete Installation</h5>
                            <p className="text-gray-400 text-sm">Accept the terms and conditions, choose installation directory if prompted, and complete the installation process.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                          <div>
                            <h5 className="font-semibold text-white">Open the IPTV App</h5>
                            <p className="text-gray-400 text-sm">After installation, open the app from the desktop shortcut, Start menu, or Programs folder.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                          <div>
                            <h5 className="font-semibold text-white">Log in with Credentials</h5>
                            <p className="text-gray-400 text-sm">Enter your username and password provided by your IPTV provider to authenticate your account.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                          <div>
                            <h5 className="font-semibold text-white">Stream Content</h5>
                            <p className="text-gray-400 text-sm">After logging in, start streaming your favorite content on your older Windows system!</p>
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
              Solutions to common issues you might encounter on Windows systems
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
            Get answers to common questions about IPTV setup on Windows systems
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
            Get your Windows PC or laptop set up with IPTV and start enjoying thousands of channels, movies, and sports with high-quality streaming performance.
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

export default WindowsSetup;