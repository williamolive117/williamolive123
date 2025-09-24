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
      
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-left max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Choose Your Perfect <span className="text-red-600">IPTV Plan</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Flexible streaming solutions designed for UK viewers
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl">
            Experience unlimited entertainment with our premium IPTV service. Choose from flexible monthly or yearly plans, 
            all featuring crystal-clear HD/4K streaming, 20,000+ channels, and 24/7 customer support. No contracts, 
            no hidden fees - just pure entertainment at your fingertips.
          </p>
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            START WATCHING NOW!
          </Button>
        </div>
      </section>

      {/* Deal of the Day Section */}
      <section className="py-16 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-red-600/20 to-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-transparent to-black/80 flex items-center justify-center">
                  <div className="text-center">
                    <Timer className="w-16 h-16 text-red-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-white text-lg font-semibold">Special Offer</p>
                    <p className="text-red-400 text-sm">Limited Time Only</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-red-600/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-yellow-400/30 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Right Side - Deal Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">Deal of the Day</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                <span className="text-red-600">30% OFF</span>
              </h2>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                3 Months Subscription
              </h3>
              
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-bold text-red-600">£24.99</span>
                <span className="text-2xl text-gray-400 line-through">£49.99</span>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-green-400">
                  <Gift className="w-5 h-5" />
                  <span className="font-semibold">Extra Offer: Get 1 Month Free!</span>
                </div>
                <p className="text-gray-300 text-sm mt-1">
                  Total: 4 months of premium IPTV for the price of 3
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get This Deal
              </Button>
              
              <p className="text-gray-400 text-sm">
                🕒 Offer expires in 24 hours • Limited quantities available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited-Time Deal Banner */}
      <section className="py-12 bg-gradient-to-r from-yellow-600/20 via-orange-600/20 to-red-600/20 border-y border-yellow-500/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Banner Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-600/30 to-red-600/50 rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/30 to-red-600/40 flex items-center justify-center">
                  <div className="text-center">
                    <AlertTriangle className="w-20 h-20 text-yellow-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-white text-xl font-bold">2-YEAR DEAL</p>
                    <p className="text-yellow-400 text-lg">Maximum Savings</p>
                  </div>
                </div>
                {/* Warning stripes effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent transform -skew-x-12 animate-pulse"></div>
              </div>
            </div>

            {/* Right Side - Deal Text */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-yellow-400 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  LIMITED-TIME DEAL
                </h2>
                <AlertTriangle className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400">
                2-Year Plan, Only $179.99
              </h3>
              
              <p className="text-lg text-gray-300">
                Starting from <span className="text-white font-semibold">$179.99</span> for 1 Connection.
              </p>
              
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4">
                <p className="text-yellow-300 font-medium">
                  Act fast—our generosity has a time limit! 🙃
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Save over 60% compared to monthly billing
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-3 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get 2-Year Deal Now
              </Button>
            </div>
          </div>
        </div>
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