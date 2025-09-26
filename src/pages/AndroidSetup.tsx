import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Smartphone, 
  Tablet, 
  Tv, 
  Download, 
  Settings, 
  Play, 
  CheckCircle, 
  ArrowRight,
  Star,
  Shield,
  Zap,
  HeadphonesIcon
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AndroidSetup = () => {
  const tutorialSteps = [
    {
      stepNumber: 1,
      title: "Download the IPTV App",
      description: "Visit Google Play Store and search for 'IPTV Smarters Pro' or your preferred IPTV player. Download and install the app on your Android device.",
      image: "📱",
      tips: "IPTV Smarters Pro is our recommended app for the best streaming experience on Android devices."
    },
    {
      stepNumber: 2,
      title: "Open the App and Add Playlist",
      description: "Launch the IPTV app and select 'Add New User' or 'Login with Xtream Codes API'. Choose the login method that matches your subscription type.",
      image: "🔐",
      tips: "Most IPTV services use Xtream Codes API for easier setup and better channel organization."
    },
    {
      stepNumber: 3,
      title: "Enter Your IPTV Credentials",
      description: "Input your server URL, username, and password provided in your IPTV subscription email. Make sure to enter the details exactly as provided.",
      image: "⚙️",
      tips: "Keep your login details safe and don't share them with others. Each account has connection limits."
    },
    {
      stepNumber: 4,
      title: "Configure Video Settings",
      description: "Optimize your streaming experience by adjusting video quality, buffer settings, and player preferences based on your internet speed.",
      image: "🎬",
      tips: "Set buffer to 'Medium' or 'High' for stable streaming, especially on slower connections."
    },
    {
      stepNumber: 5,
      title: "Start Watching Your Channels",
      description: "Browse through your channel list, add favorites, and enjoy premium IPTV streaming on your Android device with full HD and 4K quality.",
      image: "📺",
      tips: "Use the EPG (Electronic Program Guide) to see what's playing and schedule recordings."
    }
  ];

  const subscriptionPlans = [
    {
      name: "1 Month Trial",
      price: "£12.99",
      originalPrice: "£19.99",
      period: "/month",
      features: ["20,000+ Channels", "HD & 4K Quality", "24/7 Support", "Multi-device Support"],
      popular: false
    },
    {
      name: "6 Month Plan",
      price: "£54.99",
      originalPrice: "£77.94",
      period: "/6 months",
      features: ["Save 29% vs Monthly", "Premium Channels", "Advanced EPG", "Priority Support"],
      popular: true
    },
    {
      name: "12 Month Plan",
      price: "£99.99",
      originalPrice: "£155.88",
      period: "/year",
      features: ["Save 36% vs Monthly", "VIP Support", "All Premium Content", "Free Setup"],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How do I install the app on my Android phone?",
      answer: "Download IPTV Smarters Pro from Google Play Store, install it, then enter your subscription credentials to start streaming."
    },
    {
      question: "Do I need a separate subscription for each Android device?",
      answer: "No, one subscription works on multiple devices depending on your plan. Most plans support 1-5 simultaneous connections."
    },
    {
      question: "What apps are compatible with IPTV on Android?",
      answer: "IPTV Smarters Pro, TiviMate, Perfect Player, and GSE Smart IPTV are all excellent choices for Android devices."
    },
    {
      question: "Is there a trial period?",
      answer: "Yes, we offer a 24-hour trial for £1.99 and a 7-day money-back guarantee on all subscription plans."
    },
    {
      question: "Can I use the same account on phone and TV box?",
      answer: "Yes, your subscription works across all supported devices including phones, tablets, Android TV boxes, and smart TVs."
    },
    {
      question: "What internet speed do I need?",
      answer: "For HD streaming: 10+ Mbps per stream. For 4K content: 25+ Mbps recommended. Most UK broadband easily supports multiple streams."
    },
    {
      question: "Do I need to root my Android device?",
      answer: "No rooting required. Our IPTV service works perfectly on standard Android devices without any modifications."
    },
    {
      question: "Can I record shows on Android?",
      answer: "Yes, apps like TiviMate and IPTV Smarters Pro support recording features with compatible IPTV services."
    },
    {
      question: "What if the app doesn't work?",
      answer: "Contact our 24/7 support team via WhatsApp or email. We provide step-by-step assistance for all Android setup issues."
    },
    {
      question: "How do I update my subscription?",
      answer: "Login to your account dashboard or contact support to upgrade/downgrade your plan anytime without losing access."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Android Badge */}
          <div className="inline-flex items-center space-x-3 bg-green-600/10 border border-green-500/30 text-green-400 px-6 py-3 rounded-full mb-8">
            <Smartphone className="w-5 h-5" />
            <span className="font-bold text-lg">ANDROID SETUP GUIDE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Setup Guide for <span className="text-green-500">Android Devices</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Follow our simple step-by-step guide to install IPTV on Android phones, tablets, and Android TV boxes with ease.
          </h2>
          
          {/* Android Devices Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-2">
                <Smartphone className="w-8 h-8 text-green-400" />
              </div>
              <span className="text-gray-400 text-sm">Phones</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-2">
                <Tablet className="w-8 h-8 text-green-400" />
              </div>
              <span className="text-gray-400 text-sm">Tablets</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mb-2">
                <Tv className="w-8 h-8 text-green-400" />
              </div>
              <span className="text-gray-400 text-sm">TV Boxes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Device Visual Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center">
          {/* Large Featured Visual */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-br from-green-600/20 via-green-500/10 to-green-600/20 rounded-3xl p-12 border border-green-500/20">
              <div className="flex justify-center items-center space-x-12">
                <div className="text-center">
                  <div className="w-24 h-40 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl border-2 border-green-500/50 flex items-center justify-center mb-4 shadow-lg">
                    <div className="w-16 h-28 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Play className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                  <span className="text-green-400 font-semibold">Android Phone</span>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl border-2 border-green-500/50 flex items-center justify-center mb-4 shadow-lg">
                    <div className="w-24 h-14 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <span className="text-green-400 font-semibold">Android Tablet</span>
                </div>
                
                <div className="text-center">
                  <div className="w-28 h-20 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border-2 border-green-500/50 flex items-center justify-center mb-4 shadow-lg">
                    <div className="w-20 h-12 bg-green-500/20 rounded flex items-center justify-center">
                      <Tv className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <span className="text-green-400 font-semibold">Android TV Box</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our guide makes it easy to enjoy IPTV on any Android device. Compatible with all major Android versions and optimized for the best streaming experience.
          </p>
        </div>
      </section>

      {/* Tutorial Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Step-by-Step Installation Guide
          </h2>
          <p className="text-gray-400 text-lg">
            Follow these simple steps to set up IPTV on your Android device
          </p>
        </div>

        <div className="space-y-16">
          {tutorialSteps.map((step, index) => (
            <div key={step.stepNumber} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.stepNumber}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="bg-green-600/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-green-300 text-sm">
                      <strong>Pro Tip:</strong> {step.tips}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Content */}
              <div className="flex-1 max-w-sm">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{step.image}</div>
                    <div className="w-full h-32 bg-green-600/10 rounded-xl border border-green-500/30 flex items-center justify-center">
                      <span className="text-green-400 font-semibold">Step {step.stepNumber} Visual</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Subscription Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Subscription for Android?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the best IPTV subscription plan for your Android device and start streaming instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {subscriptionPlans.map((plan, index) => (
              <Card key={index} className={`bg-gray-800/50 border-gray-700/50 relative ${plan.popular ? 'ring-2 ring-green-500/50' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-3xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <div className="text-gray-500 line-through text-sm">
                      Was {plan.originalPrice}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
            >
              View All Plans
            </Button>
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
            Get answers to common questions about Android IPTV setup
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`} className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-green-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600/20 via-green-500/30 to-green-600/20 rounded-3xl p-12 text-center border border-green-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Streaming on Your Android Device Today
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get instant access to premium IPTV with easy setup and 24/7 support. Join thousands of satisfied customers streaming in HD and 4K quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl font-bold"
              >
                Buy Subscription Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 text-xl"
              >
                Start Free Trial
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center space-x-8 mt-8 pt-8 border-t border-green-500/20">
              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <HeadphonesIcon className="w-5 h-5" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Star className="w-5 h-5" />
                <span className="text-sm">5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AndroidSetup;