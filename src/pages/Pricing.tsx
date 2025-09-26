import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star, Monitor, MessageCircle, Shield, Zap, Globe, Users, Clock, Headphones, Timer, Gift, AlertTriangle, Calendar, Tv } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [globalDeviceCount, setGlobalDeviceCount] = useState<number>(1);

  const plans = [
    {
      id: "1month",
      name: "1-Month Trial",
      price: "£12.99",
      originalPrice: "£19.99",
      period: "/month",
      description: "Perfect for trying out our service",
      popular: false,
      features: [
        "20,000+ Premium Channels",
        "HD & 4K Quality",
        "24/7 Support",
        "Multi-device Support",
        "7-day Money Back Guarantee"
      ]
    },
    {
      id: "3month",
      name: "3-Month Plan",
      price: "£29.99",
      originalPrice: "£38.97",
      period: "/3 months",
      description: "Most popular choice for new customers",
      popular: true,
      features: [
        "Everything in 1-Month Plan",
        "Save 23% compared to monthly",
        "Priority Customer Support",
        "Premium Sports Channels",
        "VOD Library Access"
      ]
    },
    {
      id: "6month",
      name: "6-Month Plan",
      price: "£54.99",
      originalPrice: "£77.94",
      period: "/6 months",
      description: "Great value for regular streamers",
      popular: false,
      features: [
        "Everything in 3-Month Plan",
        "Save 29% compared to monthly",
        "Exclusive Premium Channels",
        "Advanced EPG Features",
        "Catch-up TV Services"
      ]
    },
    {
      id: "12month",
      name: "12-Month Plan",
      price: "£99.99",
      originalPrice: "£155.88",
      period: "/year",
      description: "Best value for serious streamers",
      popular: false,
      features: [
        "Everything in 6-Month Plan",
        "Save 36% compared to monthly",
        "VIP Customer Support",
        "Premium Adult Channels",
        "Free Setup & Configuration"
      ]
    }
  ];

  const deviceOptions = [
    { devices: 1, label: "1 Device", price: 0 },
    { devices: 2, label: "2 Devices", price: 0 },
    { devices: 3, label: "3 Devices", price: 0 },
    { devices: 4, label: "4 Devices", price: 0 },
    { devices: 5, label: "5 Devices", price: 0 }
  ];

  const allIncludedFeatures = [
    { name: "Premium Channels", value: "20,000+", icon: Tv },
    { name: "VOD Library", value: "15,000+ Movies & Shows", icon: Monitor },
    { name: "HD & 4K Quality", value: "Ultra High Definition", icon: Zap },
    { name: "Sports & PPV Events", value: "All Premium Sports", icon: Users },
    { name: "Simultaneous Connections", value: "Up to 5 Devices", icon: Monitor },
    { name: "24/7 Customer Support", value: "Always Available", icon: Headphones },
    { name: "Catch-up TV", value: "30 Days Playback", icon: Clock },
    { name: "Multi-Device Support", value: "All Platforms", icon: Globe },
    { name: "Premium Adult Channels", value: "18+ Content Available", icon: Shield },
    { name: "Multi-room Setup", value: "Whole House Coverage", icon: Users },
    { name: "EPG & TV Guide", value: "7-Day Electronic Guide", icon: Calendar },
    { name: "Anti-Freeze Technology", value: "Buffer-Free Streaming", icon: Zap }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely fantastic service! Crystal clear picture quality and never any buffering. The channel selection is incredible.",
      location: "London, UK"
    },
    {
      name: "Mike Thompson", 
      rating: 5,
      text: "Been using this service for 8 months now. Customer support is top-notch and the sports coverage is unmatched.",
      location: "Manchester, UK"
    },
    {
      name: "Emma Wilson",
      rating: 5,
      text: "Great value for money! The installation was super easy and the quality is better than my old cable service.",
      location: "Birmingham, UK"
    }
  ];

  const faqs = [
    {
      question: "What is IPTV and how does it work?",
      answer: "IPTV (Internet Protocol Television) delivers television content over the internet instead of traditional cable or satellite. You simply need a stable internet connection and a compatible device to stream thousands of channels in HD and 4K quality."
    },
    {
      question: "Do I need special equipment to use your IPTV service?",
      answer: "No special equipment needed! Our service works on Smart TVs, Android/iOS devices, Fire Stick, MAG boxes, and more. We provide easy setup guides for all supported devices."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "There are no long-term contracts. You can cancel your subscription at any time. We also offer a 30-day money-back guarantee if you're not completely satisfied."
    },
    {
      question: "What internet speed do I need for IPTV?",
      answer: "For HD streaming, we recommend at least 10 Mbps per stream. For 4K content, 25+ Mbps is ideal. Most UK broadband connections easily support multiple simultaneous streams."
    },
    {
      question: "Can I use the service on multiple devices?",
      answer: "Yes! Depending on your plan, you can stream on 1-5 devices simultaneously. All plans support installation on unlimited devices, but concurrent streaming is limited by your selected plan."
    },
    {
      question: "Do you offer sports and premium movie channels?",
      answer: "Absolutely! We include premium sports channels, PPV events, and the latest movies. Our channel lineup includes Sky Sports, BT Sport, and premium movie channels."
    },
    {
      question: "Is customer support available 24/7?",
      answer: "Yes, our dedicated support team is available 24/7 through WhatsApp, email, and live chat to help with any technical issues or questions you may have."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including Visa, Mastercard, PayPal, Apple Pay, and Google Pay for your convenience."
    }
  ];

  const handleGlobalDeviceSelection = (devices: number) => {
    setGlobalDeviceCount(devices);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Header />
      
      {/* Hero Section - Two Column Layout */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Deal of the Day */}
            <div className="order-1 lg:order-1">
              <div className="bg-gradient-to-br from-red-600/90 via-red-500/95 to-red-700/90 backdrop-blur-sm border border-red-500/50 rounded-3xl p-8 shadow-2xl shadow-red-600/25 relative overflow-hidden">
                
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                <div className="absolute top-8 right-8 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-12 left-8 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Header Badge */}
                  <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full">
                    <Timer className="w-5 h-5 animate-pulse" />
                    <span className="font-bold text-lg tracking-wide">DEAL OF THE DAY</span>
                  </div>
                  
                  {/* Discount Percentage */}
                  <h2 className="text-6xl md:text-7xl font-black text-white leading-tight">
                    <span className="block">30%</span>
                    <span className="block">OFF</span>
                  </h2>
                  
                  {/* Subscription Offer */}
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      3 Months Subscription
                    </h3>
                    
                    {/* Price Slash */}
                    <div className="flex items-baseline space-x-4">
                      <span className="text-4xl md:text-5xl font-black text-white">£24.99</span>
                      <div className="space-y-1">
                        <span className="text-xl text-white/70 line-through block">£49.99</span>
                        <span className="text-green-300 text-sm font-semibold">Save £25.00</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bonus Details */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                    <div className="flex items-center space-x-3 text-green-300 mb-2">
                      <Gift className="w-5 h-5" />
                      <span className="font-bold text-base">BONUS: Get 1 Month FREE!</span>
                    </div>
                    <p className="text-white/90 text-sm">
                      Total value: <span className="font-bold">4 months</span> for the price of 3
                    </p>
                  </div>
                  
                  {/* Countdown Timer */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                    <div className="text-white text-sm font-medium mb-1">⏰ LIMITED TIME</div>
                    <div className="text-white text-xs">24 HOURS LEFT</div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    size="lg" 
                    className="bg-white hover:bg-gray-100 text-red-600 px-10 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full"
                  >
                    CLAIM THIS DEAL
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content */}
            <div className="order-2 lg:order-2 space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Find the Perfect <span className="text-red-600">IPTV Plan</span> for You
                </h1>
                
                <h2 className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Flexible pricing, instant activation, and premium 4K streaming — choose a plan that fits your lifestyle.
                </h2>
                
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore All Plans
                </Button>
              </div>
              
              {/* Additional Hero Features */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-red-400 mb-1">20,000+</div>
                  <div className="text-gray-400 text-sm">Channels</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-blue-400 mb-1">4K HDR</div>
                  <div className="text-gray-400 text-sm">Quality</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
                <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-400 mb-1">Instant</div>
                  <div className="text-gray-400 text-sm">Setup</div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-red-600/5 rounded-full blur-3xl"></div>
      </section>

      {/* Enhanced Limited-Time Deal Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-orange-600/20 to-red-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.1),transparent_70%)]"></div>
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Deal Card */}
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/90 to-gray-900/80 backdrop-blur-xl border-2 border-yellow-500/50 rounded-3xl shadow-2xl shadow-yellow-600/20 overflow-hidden">
            
            {/* Urgent Header Banner */}
            <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              <div className="flex items-center justify-center space-x-3 relative z-10">
                <AlertTriangle className="w-6 h-6 text-white animate-bounce" />
                <span className="text-white font-black text-xl md:text-2xl tracking-wider">
                  🚨 LIMITED-TIME EXCLUSIVE DEAL 🚨
                </span>
                <AlertTriangle className="w-6 h-6 text-white animate-bounce" />
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                {/* Deal highlight */}
                <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-400/50 text-yellow-300 px-6 py-3 rounded-full mb-6">
                  <Timer className="w-5 h-5 animate-pulse" />
                  <span className="font-bold text-lg">MAXIMUM SAVINGS EVENT</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
                  <span className="text-yellow-400">2-YEAR</span> MEGA DEAL
                </h2>
                
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-center">
                    <div className="text-5xl md:text-7xl font-black text-yellow-400">$179<span className="text-3xl">.99</span></div>
                    <div className="text-gray-400 text-lg line-through">$599.99</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full text-xl font-bold transform -rotate-12">
                      70% OFF
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-8">
                  Starting from <span className="text-white font-bold text-2xl">$179.99</span> for 1 Connection
                </p>
              </div>

              {/* Deal Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-2">💎</div>
                  <h3 className="text-white font-bold text-lg mb-2">Premium Features</h3>
                  <p className="text-gray-400 text-sm">20,000+ channels, 4K quality, unlimited devices</p>
                </div>
                
                <div className="bg-green-500/10 border border-green-400/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className="text-white font-bold text-lg mb-2">Huge Savings</h3>
                  <p className="text-gray-400 text-sm">Save $420 compared to monthly subscriptions</p>
                </div>
                
                <div className="bg-red-500/10 border border-red-400/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="text-white font-bold text-lg mb-2">Instant Access</h3>
                  <p className="text-gray-400 text-sm">Setup within minutes, no waiting periods</p>
                </div>
              </div>

              {/* Urgency Message */}
              <div className="bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20 border-2 border-red-500/30 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-center">
                  <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse flex-shrink-0" />
                  <div>
                    <p className="text-red-300 font-bold text-lg mb-1">
                      Act fast—our generosity has a time limit! 🙃
                    </p>
                    <p className="text-orange-300 text-sm">
                      This exclusive pricing expires when the timer hits zero • Only 127 spots remaining
                    </p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse flex-shrink-0" />
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:from-red-700 hover:via-orange-600 hover:to-yellow-600 text-white px-16 py-6 text-2xl font-black rounded-2xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-2 border-yellow-400/50"
                >
                  🔥 SECURE 2-YEAR DEAL NOW 🔥
                </Button>
                
                <p className="text-gray-400 text-sm mt-4">
                  ⏰ <span className="text-red-400 font-semibold">48 hours left</span> • 
                  🔥 <span className="text-orange-400 font-semibold">127 remaining</span> • 
                  💳 <span className="text-green-400 font-semibold">Instant activation</span>
                </p>
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="h-2 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500"></div>
          </div>
        </div>
        
        {/* Background floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
      </section>

      {/* Pricing Table Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="text-red-600">Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Flexible pricing options designed to fit your streaming needs. 
              All plans include our full channel lineup and premium features.
            </p>
            
            {/* Global Device Selection */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Monitor className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-white">
                    Select Number of Devices
                  </h3>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {deviceOptions.map((option) => (
                    <button
                      key={option.devices}
                      onClick={() => handleGlobalDeviceSelection(option.devices)}
                      className={`
                        relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 min-w-[100px]
                        ${globalDeviceCount === option.devices 
                          ? 'bg-red-600 text-white shadow-lg transform scale-105' 
                          : 'bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600 hover:border-red-600'
                        }
                      `}
                    >
                      <span className="font-semibold">{option.devices}</span>
                      <span className="ml-1 text-xs opacity-90">Device{option.devices > 1 ? 's' : ''}</span>
                      {globalDeviceCount === option.devices && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-2 h-2 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                <p className="text-sm text-gray-400 mt-4">
                  Stream simultaneously on up to <span className="text-red-600 font-semibold">{globalDeviceCount}</span> device{globalDeviceCount > 1 ? 's' : ''} • Same price for all options
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800/50 border-gray-700 ${
                  plan.popular ? 'ring-2 ring-red-600 shadow-lg shadow-red-600/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-red-600 text-white text-center py-2">
                      <Badge className="bg-white text-red-600 border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-600">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <div className="text-sm text-gray-500 line-through mt-1">
                      Was {plan.originalPrice}
                    </div>
                    <div className="mt-3 inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-3 py-1 rounded-full">
                      <Monitor className="h-3 w-3" />
                      <span className="text-sm font-medium">
                        {globalDeviceCount} Device{globalDeviceCount > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-red-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-700 pt-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-400">
                        ✓ Stream on up to <span className="text-red-600 font-semibold">{globalDeviceCount}</span> device{globalDeviceCount > 1 ? 's' : ''} simultaneously
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Compatible with all major streaming devices
                      </p>
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>

                  {/* Payment Methods & WhatsApp */}
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-xs text-gray-400">We accept:</div>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">VISA</span>
                      </div>
                      <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">MC</span>
                      </div>
                      <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">PP</span>
                      </div>
                      <div className="w-10 h-6 bg-black rounded flex items-center justify-center">
                        <span className="text-white text-xs">🍎</span>
                      </div>
                      <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center">
                        <span className="text-white text-xs">G</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-700">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-green-600 hover:bg-green-700 border-green-600 text-white hover:text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Support
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Feature Comparison Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Every Plan Includes <span className="text-red-600">Everything</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              All our plans include the exact same premium features. The only difference is the price and subscription length.
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-600/20 text-green-400 px-4 py-2 rounded-full">
              <Check className="w-4 h-4" />
              <span className="font-semibold">Same Features • Different Prices • More Savings</span>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {allIncludedFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600/20 p-3 rounded-lg">
                      <feature.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{feature.name}</h3>
                      <p className="text-gray-300 text-sm">{feature.value}</p>
                      <div className="flex items-center mt-2">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-green-400 text-xs font-medium">Included in ALL plans</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Price Comparison Table */}
          <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Choose Your <span className="text-red-600">Savings Level</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {plans.map((plan, index) => (
                <div key={plan.id} className={`text-center p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-600 bg-red-600/10 shadow-lg shadow-red-600/20' 
                    : 'border-gray-600 bg-gray-900/50 hover:border-red-600/50'
                }`}>
                  {plan.popular && (
                    <Badge className="bg-red-600 text-white mb-4">
                      <Star className="w-3 h-3 mr-1" />
                      Best Value
                    </Badge>
                  )}
                  <h4 className="text-lg font-bold text-white mb-2">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-red-600">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <div className="text-sm text-gray-400 line-through mb-4">
                    Was {plan.originalPrice}
                  </div>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    }`}
                    size="sm"
                  >
                    Choose Plan
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    {index === 0 && 'Perfect for trying'}
                    {index === 1 && 'Save 23%'}
                    {index === 2 && 'Save 29%'}
                    {index === 3 && 'Save 36%'}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-400 text-lg mb-2">
                🎯 <span className="text-white font-semibold">Same premium features</span> • Different subscription lengths
              </p>
              <p className="text-gray-500 text-sm">
                All plans include 20,000+ channels, 4K quality, 24/7 support, and multi-device access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our <span className="text-red-600">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of satisfied customers across the UK
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <Shield className="w-8 h-8 text-green-500" />
              <div className="text-left">
                <p className="text-white font-semibold">Trusted by 50,000+ customers</p>
                <p className="text-gray-400 text-sm">4.9/5 average rating • 30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Money-Back Guarantee Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-green-900/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600/10 via-gray-800/50 to-green-600/10 border border-green-500/30 rounded-3xl p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600/20 rounded-full mb-6">
                <Shield className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-green-400">7-Day</span> Money-Back Guarantee
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're so confident you'll love our service, we offer a full refund within 7 days—no questions asked.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Try Our Service</h3>
                <p className="text-gray-400">Subscribe and test all features for up to 7 days</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Not Satisfied?</h3>
                <p className="text-gray-400">Contact us within 7 days if you're not happy</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Full Refund</h3>
                <p className="text-gray-400">Get 100% of your money back, no questions asked</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-green-500/20 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Why We Offer This Guarantee
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">We believe in the quality of our service</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Over 99% of customers are satisfied</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Risk-free trial for your peace of mind</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Fast refund processing (2-3 business days)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 shadow-2xl">
                    <Shield className="w-16 h-16 text-white mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">100% Secure</h4>
                    <p className="text-green-100 mb-4">Your satisfaction is guaranteed</p>
                    <div className="text-sm text-green-200">
                      ⭐ Trusted by 50,000+ customers<br/>
                      🔒 Secure payment processing<br/>
                      🏆 Award-winning support team
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400 text-lg">
                Questions about our guarantee? 
                <Button variant="link" className="text-green-400 hover:text-green-300 p-1 h-auto">
                  Contact our support team
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & Key Features Content Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Trust Signals Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-red-600">IPTV UK?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join over 50,000 satisfied customers who trust us for their entertainment needs
            </p>
          </div>

          {/* Trust Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-2xl p-6 mb-4">
                <div className="text-4xl font-black text-green-400 mb-2">50K+</div>
                <p className="text-white font-semibold">Happy Customers</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6 mb-4">
                <div className="text-4xl font-black text-blue-400 mb-2">99.9%</div>
                <p className="text-white font-semibold">Uptime Guarantee</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6 mb-4">
                <div className="text-4xl font-black text-purple-400 mb-2">20K+</div>
                <p className="text-white font-semibold">Premium Channels</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-500/30 rounded-2xl p-6 mb-4">
                <div className="text-4xl font-black text-red-400 mb-2">24/7</div>
                <p className="text-white font-semibold">Expert Support</p>
              </div>
            </div>
          </div>

          {/* Key Trust Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Security & Reliability */}
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Secure & Reliable</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>SSL encrypted connections</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>99.9% server uptime</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>Anti-freeze technology</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>Automatic failover servers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Premium Quality */}
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Premium Quality</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>4K Ultra HD streaming</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>Crystal clear audio</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>No buffering or lag</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>Multiple bitrate options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Customer Support */}
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-red-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Headphones className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Award-Winning Support</h3>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>24/7 live chat support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>Expert technical team</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>Setup assistance included</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    <span>Multi-language support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Special Guarantees */}
          <div className="bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50 border border-gray-700 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Our <span className="text-red-600">Exclusive</span> Guarantees
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-600/20 p-4 rounded-xl mb-4">
                  <Shield className="w-8 h-8 text-green-400 mx-auto" />
                </div>
                <h4 className="text-white font-semibold mb-2">Money-Back Guarantee</h4>
                <p className="text-gray-400 text-sm">7-day full refund policy</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600/20 p-4 rounded-xl mb-4">
                  <Zap className="w-8 h-8 text-blue-400 mx-auto" />
                </div>
                <h4 className="text-white font-semibold mb-2">Instant Activation</h4>
                <p className="text-gray-400 text-sm">Setup within 5 minutes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600/20 p-4 rounded-xl mb-4">
                  <Globe className="w-8 h-8 text-purple-400 mx-auto" />
                </div>
                <h4 className="text-white font-semibold mb-2">Global Access</h4>
                <p className="text-gray-400 text-sm">Works worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600/20 p-4 rounded-xl mb-4">
                  <Users className="w-8 h-8 text-red-400 mx-auto" />
                </div>
                <h4 className="text-white font-semibold mb-2">Multi-Device</h4>
                <p className="text-gray-400 text-sm">Up to 5 connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our IPTV service
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-gray-800/50 border border-gray-700 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-red-600 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600/20 via-black to-red-600/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join the <span className="text-red-600">Revolution?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start streaming today with instant access to 20,000+ channels, 4K quality, 
            and 24/7 support. No contracts, no hidden fees.
          </p>
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            GET YOUR PLAN TODAY!
          </Button>
          <p className="text-gray-400 text-sm mt-4">
            🛡️ 30-day money-back guarantee • ⚡ Instant activation • 🔒 Secure payment
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;