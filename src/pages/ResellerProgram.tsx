import { useState } from "react";
import { 
  Users, 
  CreditCard, 
  Settings, 
  TrendingUp, 
  Shield, 
  Clock,
  Star,
  CheckCircle,
  Smartphone,
  Tv,
  Monitor,
  Gamepad2,
  Tablet,
  Chrome,
  PlayCircle,
  Wifi,
  MessageCircle,
  Phone,
  Mail,
  Award,
  Target,
  BarChart3,
  Zap,
  Globe,
  HeadphonesIcon,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ResellerProgram = () => {
  const pricingPlans = [
    {
      name: "Starter",
      credits: 100,
      price: "£299",
      popular: false,
      description: "Perfect for new resellers",
      features: ["100 Credits Included", "Basic Dashboard", "Email Support", "Getting Started Guide"],
      color: "from-gray-600/20 to-gray-800/10",
      borderColor: "border-gray-600/30"
    },
    {
      name: "Professional",
      credits: 200,
      price: "£549",
      popular: true,
      description: "Most popular choice",
      features: ["200 Credits Included", "Advanced Dashboard", "WhatsApp Support", "Priority Assistance", "Marketing Materials"],
      color: "from-red-600/20 to-red-800/10",
      borderColor: "border-red-600/30"
    },
    {
      name: "Business",
      credits: 300,
      price: "£799",
      popular: false,
      description: "For growing businesses",
      features: ["300 Credits Included", "White-Label Panel", "Dedicated Support", "Custom Branding", "API Access"],
      color: "from-blue-600/20 to-blue-800/10",
      borderColor: "border-blue-600/30"
    },
    {
      name: "Enterprise",
      credits: 500,
      price: "£1,199",
      popular: false,
      description: "For established resellers",
      features: ["500 Credits Included", "Full Customization", "24/7 Phone Support", "Training Sessions", "Revenue Analytics"],
      color: "from-purple-600/20 to-purple-800/10",
      borderColor: "border-purple-600/30"
    },
    {
      name: "Ultimate",
      credits: 1000,
      price: "£2,199",
      popular: false,
      description: "Maximum earning potential",
      features: ["1000 Credits Included", "Enterprise Features", "Dedicated Account Manager", "Custom Integration", "Volume Discounts"],
      color: "from-green-600/20 to-green-800/10",
      borderColor: "border-green-600/30"
    }
  ];

  const devices = [
    { name: "Android TV", icon: Smartphone },
    { name: "Fire Stick", icon: PlayCircle },
    { name: "Smart TV", icon: Tv },
    { name: "iPad", icon: Tablet },
    { name: "Windows PC", icon: Monitor },
    { name: "MAG Box", icon: Settings },
    { name: "Xbox", icon: Gamepad2 },
    { name: "Web Player", icon: Chrome },
    { name: "iPhone", icon: Smartphone },
    { name: "Samsung TV", icon: Tv },
    { name: "Apple TV", icon: PlayCircle },
    { name: "Android Phone", icon: Smartphone },
    { name: "LG TV", icon: Tv },
    { name: "PlayStation", icon: Gamepad2 },
    { name: "MacBook", icon: Monitor },
    { name: "Roku", icon: PlayCircle },
    { name: "NVIDIA Shield", icon: Settings },
    { name: "Chromecast", icon: Chrome },
    { name: "Fire TV Cube", icon: PlayCircle },
    { name: "Mi Box", icon: Settings },
    { name: "Kodi", icon: PlayCircle },
    { name: "VLC Player", icon: PlayCircle },
    { name: "Perfect Player", icon: PlayCircle },
    { name: "TiviMate", icon: Tv },
    { name: "IPTV Smarters", icon: Smartphone }
  ];

  const faqItems = [
    {
      question: "What is the minimum purchase requirement to become a reseller?",
      answer: "The minimum purchase is our Starter plan with 100 credits for £299. This gives you everything needed to start your IPTV reselling business immediately."
    },
    {
      question: "How long are credits valid for?",
      answer: "Credits never expire! Once purchased, you can use them whenever you need to create customer accounts. This gives you complete flexibility in managing your business."
    },
    {
      question: "What devices are supported for end customers?",
      answer: "We support 25+ devices including Android, iOS, Smart TVs, Fire Stick, MAG boxes, gaming consoles, and web browsers. Your customers can watch on virtually any device."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments. Payment processing is secure and instant for most methods."
    },
    {
      question: "Can I customize the reseller panel with my own branding?",
      answer: "Yes! Starting with our Business plan, you get white-label options including custom logos, colors, and domain names to match your brand identity."
    },
    {
      question: "Do you provide marketing materials for resellers?",
      answer: "Absolutely! We provide banners, flyers, social media templates, and promotional videos that you can customize with your contact information."
    },
    {
      question: "How quickly can customer accounts be activated?",
      answer: "Account activation is instant! Once you use credits to create an account, your customer receives their login details immediately and can start watching right away."
    },
    {
      question: "What kind of support do resellers receive?",
      answer: "Resellers get priority support through WhatsApp, email, and phone. Enterprise customers get dedicated account managers and 24/7 support."
    },
    {
      question: "Can I offer custom pricing to my customers?",
      answer: "Yes! You set your own retail prices and keep 100% of the profit margin. We only charge you the credit cost - everything else is your profit."
    },
    {
      question: "Is there technical training available?",
      answer: "Yes, we provide comprehensive training including video tutorials, live webinars, and one-on-one sessions for Enterprise customers."
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Purchase Credits",
      description: "Buy credits in bulk with significant savings. Choose from our flexible plans based on your business needs.",
      icon: CreditCard,
      color: "text-blue-400"
    },
    {
      step: 2,
      title: "Create Accounts",
      description: "Use credits to activate customer subscriptions instantly. Each plan duration costs different credit amounts.",
      icon: Users,
      color: "text-green-400"
    },
    {
      step: 3,
      title: "Manage Subscriptions",
      description: "Use our powerful reseller panel to manage all accounts, monitor usage, and handle customer support.",
      icon: Settings,
      color: "text-red-400"
    }
  ];

  const benefits = [
    {
      title: "Highest Profit Margins",
      description: "Keep up to 70% profit on every subscription you sell",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "Easy Control Panel",
      description: "User-friendly dashboard to manage all your customers",
      icon: Monitor,
      color: "text-blue-400"
    },
    {
      title: "Instant Activation",
      description: "Customer accounts are activated immediately",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "24/7 Reseller Support",
      description: "Dedicated support team exclusively for resellers",
      icon: HeadphonesIcon,
      color: "text-purple-400"
    },
    {
      title: "Scalable Business",
      description: "Grow from 100 to 1000+ customers with our flexible plans",
      icon: BarChart3,
      color: "text-red-400"
    },
    {
      title: "White-Label Options",
      description: "Brand the service as your own with custom branding",
      icon: Award,
      color: "text-orange-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Header & Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-6">
                <Users className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">Reseller Program</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Become an <span className="text-red-600">IPTV Reseller</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                Wholesale IPTV Pricing & Plans
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Start your own IPTV business with our reseller program. Enjoy high earning potential, 
                easy setup, and ongoing support from our dedicated team.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-600/20 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-white font-semibold">High Earning Potential</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-white font-semibold">Easy Setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600/20 p-2 rounded-lg">
                    <HeadphonesIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-white font-semibold">Ongoing Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Support
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-600/20 to-blue-600/20 backdrop-blur-sm border border-red-600/30 rounded-3xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Trusted by 500+ Resellers
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Join our growing network of successful IPTV resellers worldwide
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-red-400">70%</div>
                      <div className="text-gray-400 text-sm">Profit Margin</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">24/7</div>
                      <div className="text-gray-400 text-sm">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">25+</div>
                      <div className="text-gray-400 text-sm">Devices</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Reseller <span className="text-red-600">Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect credit package for your business. All plans include our powerful 
              reseller dashboard and dedicated support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`bg-gradient-to-br ${plan.color} backdrop-blur-sm border ${plan.borderColor} hover:scale-105 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-red-500' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-4">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white">{plan.price}</div>
                    <div className="text-red-400 text-lg font-semibold">{plan.credits} Credits</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 pt-4">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-800 hover:bg-gray-700'} text-white font-semibold`}
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-800/50 text-sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Credits Work Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How <span className="text-red-600">Credits</span> Work
            </h2>
            <p className="text-lg text-gray-300">
              Simple credit-based system. The longer the subscription plan, the more credits required.
            </p>
          </div>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Credit Usage Table</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-white">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-4 px-4 font-semibold text-red-400">Reseller Package</th>
                      <th className="text-center py-4 px-4 font-semibold text-red-400">1 Month</th>
                      <th className="text-center py-4 px-4 font-semibold text-red-400">3 Months</th>
                      <th className="text-center py-4 px-4 font-semibold text-red-400">6 Months</th>
                      <th className="text-center py-4 px-4 font-semibold text-red-400">12 Months</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700/50 hover:bg-gray-700/30">
                      <td className="py-4 px-4 font-semibold">Reseller Cost (Credits)</td>
                      <td className="text-center py-4 px-4 text-green-400 font-bold">1 Credit</td>
                      <td className="text-center py-4 px-4 text-blue-400 font-bold">3 Credits</td>
                      <td className="text-center py-4 px-4 text-orange-400 font-bold">6 Credits</td>
                      <td className="text-center py-4 px-4 text-purple-400 font-bold">12 Credits</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-red-600/10 border border-red-600/30 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-600/20 p-1 rounded">
                    <Star className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">
                      <strong className="text-white">Important:</strong> Each subscription consumes credits depending on duration. 
                      The longer the plan, the more credits required. You set your own retail prices and keep all profit margins.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How It <span className="text-red-600">Works</span>
            </h2>
            <p className="text-lg text-gray-300">
              Get started in 3 simple steps and begin earning immediately
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.step} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gray-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className="bg-red-600/20 text-red-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Features & <span className="text-red-600">Benefits</span>
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need to build and scale your IPTV business successfully
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-900/50 p-3 rounded-lg">
                        <IconComponent className={`w-6 h-6 ${benefit.color}`} />
                      </div>
                      <CardTitle className="text-lg text-white">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Devices Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Supported <span className="text-red-600">Devices</span>
            </h2>
            <p className="text-lg text-gray-300">
              Your customers can watch on 25+ popular devices and platforms
            </p>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {devices.map((device, index) => {
              const IconComponent = device.icon;
              return (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 aspect-square">
                  <CardContent className="flex flex-col items-center justify-center h-full p-4">
                    <IconComponent className="w-8 h-8 text-red-400 mb-2" />
                    <span className="text-white text-xs text-center font-medium">{device.name}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 backdrop-blur-sm border border-red-600/30 rounded-2xl p-8 max-w-3xl mx-auto">
              <Globe className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Universal Compatibility
              </h3>
              <p className="text-gray-300">
                Your customers can enjoy seamless streaming across all major platforms and devices. 
                No technical knowledge required - we provide setup guides for everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Reseller Program Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our <span className="text-red-600">Reseller Program</span>
            </h2>
            <p className="text-lg text-gray-300">
              The most profitable and reliable IPTV reseller program in the industry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600/20 p-3 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Highest Reseller Profit Margins</h3>
                  <p className="text-gray-300">Keep up to 70% profit on every sale. Our competitive wholesale pricing ensures maximum earning potential for your business.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-3 rounded-lg flex-shrink-0">
                  <Monitor className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Easy-to-Use Control Panel</h3>
                  <p className="text-gray-300">Intuitive dashboard to manage customers, track revenue, generate reports, and handle all aspects of your business efficiently.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-600/20 p-3 rounded-lg flex-shrink-0">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Instant Account Activation</h3>
                  <p className="text-gray-300">Customer accounts are activated immediately after purchase. No waiting, no delays - your customers start watching instantly.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-3 rounded-lg flex-shrink-0">
                  <HeadphonesIcon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">24/7 Dedicated Reseller Support</h3>
                  <p className="text-gray-300">Priority support exclusively for resellers. Get help with technical issues, sales questions, and business growth strategies.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-600/20 p-3 rounded-lg flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Scalable Plans to Grow Your Business</h3>
                  <p className="text-gray-300">Start small and scale up as your business grows. From 100 credits to 1000+, we have plans for every business size.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-600/20 to-blue-600/20 backdrop-blur-sm border border-red-600/30 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Industry Leading Performance
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                    <div className="text-gray-400 text-sm">Active Resellers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">50K+</div>
                    <div className="text-gray-400 text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">£2M+</div>
                    <div className="text-gray-400 text-sm">Reseller Earnings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Business <span className="text-red-600">Opportunity</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              The IPTV market is booming with millions of cord-cutters seeking affordable streaming solutions. 
              Position yourself at the forefront of this revolution and build a profitable business that grows month after month.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-600/20 p-2 rounded-lg">
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Earning Potential</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  With our competitive wholesale pricing, successful resellers earn £1,000-£5,000+ monthly. 
                  The more customers you acquire, the higher your profits grow exponentially.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 100 customers = £2,000-£3,000/month potential</li>
                  <li>• 500 customers = £10,000-£15,000/month potential</li>
                  <li>• 1000+ customers = £20,000+/month potential</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Market Demand</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Traditional cable TV subscriptions are declining rapidly while streaming demand skyrockets. 
                  IPTV offers the perfect solution at fraction of cable costs.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 15% annual growth in streaming market</li>
                  <li>• 80% cost savings vs traditional TV</li>
                  <li>• Growing demand for flexible viewing options</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 backdrop-blur-sm border border-red-600/30 rounded-3xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Success Stories from Our Resellers
              </h3>
              <blockquote className="text-lg text-gray-300 italic mb-6">
                "I started with 100 credits 6 months ago and now manage over 800 customers. 
                The support team is incredible and the profit margins allow me to run this as my full-time business."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JM</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">James Mitchell</div>
                  <div className="text-gray-400 text-sm">IPTV Reseller since 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Support Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              24/7 <span className="text-red-600">Dedicated Support</span>
            </h2>
            <p className="text-xl text-gray-300">
              You focus on sales, we handle the rest. Our expert support team is always available to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-green-600/10 border-green-600/30">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">WhatsApp Support</h3>
                <p className="text-gray-300 text-sm">
                  Instant responses to urgent technical issues and customer queries
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-600/10 border-blue-600/30">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Phone Support</h3>
                <p className="text-gray-300 text-sm">
                  Direct phone line for Enterprise resellers with complex issues
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-600/10 border-red-600/30">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Email Support</h3>
                <p className="text-gray-300 text-sm">
                  Detailed technical support and business development guidance
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 backdrop-blur-sm border border-purple-600/30 rounded-2xl p-8">
            <HeadphonesIcon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              We Handle Technical Support
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Focus on growing your business while our technical team handles customer setup issues, 
              troubleshooting, and device compatibility questions. You get the credit, we do the work.
            </p>
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
              Everything you need to know about our reseller program
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

      {/* Final Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-red-600/20 to-blue-600/20 backdrop-blur-sm border border-red-600/30 rounded-3xl p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your <span className="text-red-600">IPTV Business</span>?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of successful resellers earning thousands monthly with our proven system. 
                Start today and build your profitable IPTV business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold">
                  Sign Up Now
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-12 py-4 text-xl">
                  Request Custom Quote
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700/50">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">5min</div>
                  <div className="text-gray-400 text-sm">Setup Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">70%</div>
                  <div className="text-gray-400 text-sm">Profit Margin</div>
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

export default ResellerProgram;