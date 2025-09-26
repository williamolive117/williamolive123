import { useState } from "react";
import { 
  Check, 
  Star, 
  Shield, 
  Zap, 
  Clock, 
  Users, 
  Tv, 
  Download, 
  HeadphonesIcon,
  CreditCard,
  Play,
  ChevronDown,
  ChevronRight,
  Infinity,
  Gift,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Gamepad2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LifetimeSubscription = () => {
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);

  const toggleFaq = (faqId: string) => {
    setOpenFaqs(prev => 
      prev.includes(faqId) 
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const lifetimePlans = [
    {
      id: "1-device",
      devices: 1,
      price: "£250",
      originalPrice: "£600+",
      savings: "£350+",
      popular: false,
      features: ["1 Device Connection", "18,000+ Live Channels", "60,000+ Movies", "4K/HD Quality", "24/7 Support"]
    },
    {
      id: "2-devices",
      devices: 2,
      price: "£350",
      originalPrice: "£1,200+",
      savings: "£850+",
      popular: true,
      features: ["2 Device Connections", "18,000+ Live Channels", "60,000+ Movies", "4K/HD Quality", "Priority Support"]
    },
    {
      id: "3-devices",
      devices: 3,
      price: "£450",
      originalPrice: "£1,800+",
      savings: "£1,350+",
      popular: false,
      features: ["3 Device Connections", "18,000+ Live Channels", "60,000+ Movies", "4K/HD Quality", "VIP Support"]
    },
    {
      id: "4-devices",
      devices: 4,
      price: "£550",
      originalPrice: "£2,400+",
      savings: "£1,850+",
      popular: false,
      features: ["4 Device Connections", "18,000+ Live Channels", "60,000+ Movies", "4K/HD Quality", "Premium Support"]
    },
    {
      id: "5-devices",
      devices: 5,
      price: "£650",
      originalPrice: "£3,000+",
      savings: "£2,350+",
      popular: false,
      features: ["5 Device Connections", "18,000+ Live Channels", "60,000+ Movies", "4K/HD Quality", "White Glove Support"]
    }
  ];

  const coreFeatures = [
    {
      icon: <Tv className="w-8 h-8 text-red-400" />,
      title: "18,000+ Live Channels",
      description: "Access premium channels from UK, USA, Europe, and worldwide"
    },
    {
      icon: <Play className="w-8 h-8 text-blue-400" />,
      title: "4K Full HD VOD Library",
      description: "60,000+ movies and 8,400+ TV shows in crystal clear quality"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Anti-Buffer Technology",
      description: "Advanced streaming technology ensures smooth, uninterrupted viewing"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-green-400" />,
      title: "Dedicated 24/7 Support",
      description: "Priority lifetime customer support for all technical issues"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Lifetime Guarantee",
      description: "One-time payment covers you for life - no hidden fees ever"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Global Device Support",
      description: "Compatible with all devices: Fire Stick, Smart TV, Android, iOS"
    }
  ];

  const setupSteps = [
    {
      step: 1,
      icon: <CreditCard className="w-12 h-12 text-red-400" />,
      title: "CHOOSE YOUR PLAN",
      description: "Select the number of devices and complete secure payment"
    },
    {
      step: 2,
      icon: <Download className="w-12 h-12 text-blue-400" />,
      title: "RECEIVE YOUR DETAILS",
      description: "Get instant access credentials and setup instructions via email"
    },
    {
      step: 3,
      icon: <Play className="w-12 h-12 text-green-400" />,
      title: "INSTALL & WATCH",
      description: "Follow simple setup guide and start streaming in minutes"
    }
  ];

  const whyLifetimeReasons = [
    "Massive Long-Term Savings - Save thousands compared to monthly subscriptions",
    "Zero Monthly Hassle - Pay once, enjoy forever with no recurring bills",
    "Future-Proof Access - Guaranteed service updates and improvements included",
    "Priority Support - Lifetime customers get premium technical assistance",
    "No Price Increases - Never worry about subscription price hikes again",
    "Complete Peace of Mind - One payment covers all future service costs"
  ];

  const faqs = [
    {
      id: "lifetime-meaning",
      question: "How long is 'Lifetime' exactly?",
      answer: "Lifetime means as long as our service exists and operates. We've been providing IPTV services for over 8 years and continue to grow. Your lifetime access is guaranteed as long as we're in business, with no additional fees required."
    },
    {
      id: "service-changes",
      question: "What happens if the service changes or updates?",
      answer: "All service improvements, new channels, and technology upgrades are automatically included in your lifetime subscription at no extra cost. We continuously enhance our platform, and lifetime customers always get the latest features and improvements."
    },
    {
      id: "maintenance-fees",
      question: "Are there any future maintenance fees or hidden costs?",
      answer: "Absolutely not. Your one-time lifetime payment covers everything - streaming, support, updates, new channels, and all operational costs. There are no maintenance fees, upgrade fees, or any other charges ever."
    },
    {
      id: "device-compatibility",
      question: "Which devices are supported for lifetime access?",
      answer: "Our lifetime subscription works on all major devices including Fire Stick, Smart TVs (Samsung/LG), Android/iOS phones and tablets, MAG boxes, NVIDIA Shield, Xbox, web browsers, and more. Device compatibility is guaranteed for life."
    },
    {
      id: "streaming-quality",
      question: "Is 4K and HD quality guaranteed for lifetime?",
      answer: "Yes, your lifetime subscription includes access to all quality options available - from standard definition to 4K Ultra HD. As we upgrade our streaming infrastructure, lifetime customers automatically benefit from improved quality at no extra cost."
    },
    {
      id: "channel-updates",
      question: "Will new channels be added to my lifetime subscription?",
      answer: "Yes, we regularly add new channels and content to our platform. Lifetime subscribers automatically get access to all new channels, sports packages, movie collections, and content additions without any additional payments."
    },
    {
      id: "technical-support",
      question: "What level of support do lifetime customers receive?",
      answer: "Lifetime customers receive our highest priority support level. This includes 24/7 technical assistance, priority response times, dedicated support channels, and personalized help for setup and troubleshooting - all included for life."
    },
    {
      id: "refund-policy",
      question: "Is there a money-back guarantee for lifetime subscriptions?",
      answer: "Yes, we offer a 7-day money-back guarantee for lifetime subscriptions. If you're not completely satisfied with the service quality or performance within the first 7 days, we'll provide a full refund."
    },
    {
      id: "multiple-locations",
      question: "Can I use my lifetime subscription from different locations?",
      answer: "Yes, your lifetime subscription can be used from anywhere in the world. Whether you're at home, traveling, or relocating, your access remains active. The device limit applies to concurrent streams, not geographical locations."
    },
    {
      id: "transfer-ownership",
      question: "Can I transfer my lifetime subscription to someone else?",
      answer: "Lifetime subscriptions are tied to the original purchaser's account. While we don't typically allow transfers, we can accommodate special circumstances like inheritance or legal ownership changes on a case-by-case basis with proper documentation."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text and Buttons */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-red-600/20 backdrop-blur-sm border border-red-600/30 rounded-full px-6 py-3">
                <Infinity className="w-5 h-5 text-red-600" />
                <span className="text-red-400 font-semibold">Lifetime Deal</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Your <span className="text-red-600">Last Bill</span>: Get Lifetime IPTV Access Today
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Never pay monthly again. Enjoy <span className="text-red-400 font-semibold">18,000+ channels</span> and 
                <span className="text-blue-400 font-semibold"> 4K VOD</span> forever with a one-time payment.
              </h2>

              <div className="space-y-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold w-full sm:w-auto">
                  GET STARTED: LIFETIME ACCESS
                </Button>
                <div>
                  <Button size="lg" variant="outline" className="border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg w-full sm:w-auto">
                    View Plans Below
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">18,000+</div>
                  <div className="text-gray-400 text-sm">Live Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">60,000+</div>
                  <div className="text-gray-400 text-sm">Movies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">Forever</div>
                  <div className="text-gray-400 text-sm">Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Right Column: Device Graphic Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 max-w-md w-full">
                <div className="text-center mb-6">
                  <Badge className="bg-red-600/20 text-red-400 border-red-600/30 px-4 py-2 text-lg">
                    🔥 Limited Time Offer
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-800/50 rounded-2xl">
                    <Smartphone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">Mobile</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-2xl">
                    <Monitor className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">Smart TV</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-2xl">
                    <Tablet className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">Tablets</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-2xl">
                    <Gamepad2 className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">Gaming</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">All Devices Supported</div>
                  <p className="text-gray-400 text-sm">One payment, unlimited streaming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Overview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Included Forever: The Power of <span className="text-red-600">Lifetime IPTV</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Every feature, every channel, every update - all included in your one-time lifetime payment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lifetime */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                The Smart Choice: Why <span className="text-red-600">Lifetime Subscription</span> Pays Off
              </h2>

              <div className="space-y-6">
                {whyLifetimeReasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Check className="w-6 h-6 text-green-400 mt-1" />
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-red-600/20 to-blue-600/20 backdrop-blur-sm border border-red-600/30 rounded-3xl">
                <div className="text-center">
                  <Gift className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Calculate Your Savings
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Monthly subscription: £25/month × 36 months = <span className="text-red-400 font-bold">£900</span>
                  </p>
                  <p className="text-gray-300">
                    Lifetime subscription: <span className="text-green-400 font-bold">£350</span> (2-device plan)
                  </p>
                  <div className="text-3xl font-bold text-green-400 mt-4">
                    You Save £550+
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <Star className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Trust & Value Builder
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-2xl">
                    <span className="text-gray-300">Service Uptime</span>
                    <span className="text-green-400 font-bold">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-2xl">
                    <span className="text-gray-300">Years in Business</span>
                    <span className="text-blue-400 font-bold">8+ Years</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-2xl">
                    <span className="text-gray-300">Happy Customers</span>
                    <span className="text-purple-400 font-bold">50,000+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-2xl">
                    <span className="text-gray-300">Countries Served</span>
                    <span className="text-red-400 font-bold">45+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Plans */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Select Your <span className="text-red-600">Lifetime Plan</span> & Device Connections
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the number of devices you want to connect simultaneously. All plans include the same premium features.
            </p>
            <Badge className="bg-green-600/20 text-green-400 border-green-600/30 px-6 py-3 text-lg">
              🎯 Most Popular: 2-Device Plan
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {lifetimePlans.map((plan) => (
              <Card key={plan.id} className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border ${plan.popular ? 'border-red-600/50 ring-2 ring-red-600/30' : 'border-gray-700/50'} hover:scale-105 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-2 text-sm font-bold">
                      🔥 MOST POPULAR
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white mb-2">
                      {plan.devices} {plan.devices === 1 ? 'Device' : 'Devices'}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-red-400 mb-2">
                      {plan.price}
                    </div>
                    <div className="text-gray-400 line-through text-lg mb-1">
                      {plan.originalPrice}
                    </div>
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                      Save {plan.savings}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full py-4 text-lg font-bold ${plan.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'}`}>
                    GET LIFETIME DEAL
                  </Button>

                  <div className="flex justify-center space-x-2 mt-4 opacity-60">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'%3E%3Crect width='32' height='20' rx='4' fill='%23005faf'/%3E%3Ctext x='16' y='13' font-family='Arial,sans-serif' font-size='8' fill='white' text-anchor='middle'%3EVISA%3C/text%3E%3C/svg%3E" alt="Visa" className="h-6" />
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'%3E%3Crect width='32' height='20' rx='4' fill='%23eb001b'/%3E%3Crect x='16' width='16' height='20' rx='4' fill='%23ff5f00'/%3E%3C/svg%3E" alt="Mastercard" className="h-6" />
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='20' viewBox='0 0 32 20'%3E%3Crect width='32' height='20' rx='4' fill='%23003087'/%3E%3Ctext x='16' y='13' font-family='Arial,sans-serif' font-size='6' fill='white' text-anchor='middle'%3EPayPal%3C/text%3E%3C/svg%3E" alt="PayPal" className="h-6" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Setup Guide */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple Setup: From Payment to <span className="text-red-600">Watching in 5 Minutes</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our streamlined process gets you streaming immediately after purchase
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {setupSteps.map((step) => (
              <div key={step.step} className="text-center">
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="bg-red-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        {step.icon}
                      </div>
                      <Badge className="bg-red-600/20 text-red-400 border-red-600/30 px-4 py-2">
                        Step {step.step}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-green-600/20 backdrop-blur-sm border border-green-600/30 rounded-full px-8 py-4">
              <Clock className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold text-lg">Average Setup Time: 3-5 Minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Risk-Free Trial Option */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-600/30">
            <CardContent className="p-12 text-center">
              <Shield className="w-20 h-20 text-blue-400 mx-auto mb-8" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Not Ready for Forever? <span className="text-blue-400">Try Risk-Free First</span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Experience our premium IPTV service before committing to lifetime access. 
                Test all features, channels, and streaming quality with our trial offer.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-gray-800/50 rounded-3xl p-8">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24-Hour Trial</div>
                  <div className="text-2xl font-bold text-white mb-4">£1.99</div>
                  <p className="text-gray-300 mb-6">
                    Full access to all channels, movies, and features. Perfect for testing service quality.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-bold">
                    GET 24-HOUR TRIAL NOW
                  </Button>
                </div>

                <div className="bg-gray-800/50 rounded-3xl p-8">
                  <div className="text-4xl font-bold text-green-400 mb-2">7-Day Trial</div>
                  <div className="text-2xl font-bold text-white mb-4">£7.99</div>
                  <p className="text-gray-300 mb-6">
                    Extended trial with full technical support. Test on all your devices thoroughly.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-bold">
                    GET 7-DAY TRIAL NOW
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 italic">
                  Trial credits can be applied toward your lifetime subscription purchase
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Long-Form SEO Content */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Technology Behind Lifetime: <span className="text-red-600">Stability, Reliability, and Future Updates</span>
            </h2>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Globe className="w-8 h-8 text-blue-400 mr-3" />
                  Understanding Our Dedicated Server Network
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our lifetime IPTV service is built on a robust infrastructure of dedicated servers strategically located across multiple continents. 
                  This global network ensures optimal streaming performance regardless of your geographical location. Each server cluster is equipped 
                  with enterprise-grade hardware, redundant internet connections, and automated failover systems that guarantee 99.9% uptime.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The distributed architecture means that when you purchase a lifetime subscription, you're not just buying access to channels – 
                  you're investing in a continuously evolving technological ecosystem. Our servers automatically load-balance traffic, 
                  ensuring smooth streaming even during peak viewing times like major sporting events or season premieres.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                  How Our Anti-Buffer Technology Works
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Traditional IPTV services often suffer from buffering issues due to inadequate streaming protocols and server limitations. 
                  Our proprietary anti-buffer technology employs advanced adaptive bitrate streaming, which automatically adjusts video quality 
                  based on your internet connection speed and device capabilities. This intelligent system ensures uninterrupted viewing 
                  while maintaining the highest possible video quality for your connection.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The technology includes predictive caching, which pre-loads content segments before they're needed, and dynamic CDN routing 
                  that automatically connects you to the fastest available server. For lifetime subscribers, these technological improvements 
                  are continuously updated and enhanced without any additional cost, ensuring your viewing experience only gets better over time.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Infinity className="w-8 h-8 text-purple-400 mr-3" />
                  The Value of a Lifetime Commitment vs. Monthly Billing
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The mathematics of lifetime vs. monthly subscriptions extends far beyond simple cost calculations. Monthly billing models 
                  are designed to maximize long-term revenue for service providers, often resulting in customers paying 3-5 times more 
                  over the lifetime of their usage. Our lifetime model represents a fundamental shift in how IPTV services can be delivered 
                  – by securing upfront commitment, we can invest more heavily in infrastructure and service quality improvements.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  From a technological standpoint, lifetime subscriptions allow us to make long-term investments in server infrastructure, 
                  content licensing, and platform development that monthly subscribers indirectly fund through higher overall costs. 
                  This model creates a sustainable ecosystem where lifetime subscribers become stakeholders in the service's continued excellence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Additionally, lifetime subscribers are protected from the industry trend of increasing subscription costs. 
                  While monthly IPTV services have increased prices by an average of 40% over the past three years, our lifetime 
                  subscribers continue enjoying the same comprehensive service without any additional fees, making it not just a 
                  financial decision but a hedge against inflation and industry price volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions About <span className="text-red-600">Lifetime IPTV</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our lifetime subscription service
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <Collapsible key={faq.id} open={openFaqs.includes(faq.id)} onOpenChange={() => toggleFaq(faq.id)}>
                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-gray-700/50">
                  <CollapsibleTrigger className="w-full p-0">
                    <CardHeader className="text-left">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-white pr-4">
                          {faq.question}
                        </CardTitle>
                        <div className="text-red-400 flex-shrink-0">
                          {openFaqs.includes(faq.id) ? (
                            <ChevronDown className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0 pb-6 px-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600/20 to-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-red-600/30 rounded-3xl p-12">
            <Tv className="w-20 h-20 text-red-400 mx-auto mb-8" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ready to Join the <span className="text-red-600">Revolution</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Make your final payment today and enjoy unlimited IPTV access for life. 
              Join thousands of satisfied customers who never worry about monthly bills again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold">
                GET YOUR PLAN TODAY!
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-xl">
                Start With Trial
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                7-Day Guarantee
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-blue-400" />
                Instant Activation
              </div>
              <div className="flex items-center">
                <HeadphonesIcon className="w-5 h-5 mr-2 text-purple-400" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LifetimeSubscription;