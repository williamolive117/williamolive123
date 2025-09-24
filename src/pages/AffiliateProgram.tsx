import { 
  Users, 
  DollarSign, 
  Share2, 
  TrendingUp, 
  Clock, 
  CreditCard,
  Star,
  CheckCircle,
  MessageCircle,
  Download,
  Target,
  Award,
  HeadphonesIcon,
  FileText,
  BookOpen,
  Globe,
  Smartphone,
  Mail,
  Facebook,
  Twitter,
  Link,
  Banknote,
  Calendar,
  Shield,
  Zap,
  Gift
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AffiliateProgram = () => {
  const steps = [
    {
      step: 1,
      title: "Sign Up",
      description: "Create a free IPTV affiliate account in just 2 minutes. No fees, no commitments.",
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-600/20"
    },
    {
      step: 2,
      title: "Start Promoting",
      description: "Share your referral link via email, WhatsApp, Facebook, Twitter, blogs, or websites.",
      icon: Share2,
      color: "text-green-400",
      bgColor: "bg-green-600/20"
    },
    {
      step: 3,
      title: "Get Commission",
      description: "Earn 10% commission on every sale and withdraw via PayPal or bank transfer.",
      icon: DollarSign,
      color: "text-red-400",
      bgColor: "bg-red-600/20"
    }
  ];

  const earningExamples = [
    {
      title: "Low Traffic",
      customers: "2 customers/day",
      calculation: "2 × 30 days × £8 commission",
      earning: "£480",
      subtitle: "per month",
      color: "from-blue-600/20 to-blue-800/10",
      borderColor: "border-blue-600/30",
      icon: Target
    },
    {
      title: "Medium Traffic",
      customers: "10 customers/day",
      calculation: "10 × 30 days × £8 commission",
      earning: "£2,400",
      subtitle: "per month",
      color: "from-green-600/20 to-green-800/10",
      borderColor: "border-green-600/30",
      icon: TrendingUp,
      popular: true
    },
    {
      title: "High Traffic",
      customers: "25 customers/day",
      calculation: "25 × 30 days × £8 commission",
      earning: "£6,000",
      subtitle: "per month",
      color: "from-red-600/20 to-red-800/10",
      borderColor: "border-red-600/30",
      icon: Award
    }
  ];

  const programFeatures = [
    {
      title: "24/7 Support",
      description: "Get help via chat, WhatsApp, and email whenever you need assistance",
      icon: HeadphonesIcon,
      color: "text-blue-400"
    },
    {
      title: "Free Promotional Materials",
      description: "Access banners, screenshots, videos, and marketing content at no cost",
      icon: Download,
      color: "text-green-400"
    },
    {
      title: "Flexible Payments",
      description: "Receive payments through PayPal or direct bank transfer",
      icon: CreditCard,
      color: "text-purple-400"
    },
    {
      title: "Service Quality",
      description: "Offer customers a 72-hour free trial to boost conversion rates",
      icon: Shield,
      color: "text-orange-400"
    },
    {
      title: "Marketing Guides",
      description: "Access tutorials, tips, and proven marketing strategies",
      icon: BookOpen,
      color: "text-red-400"
    },
    {
      title: "Real-Time Tracking",
      description: "Monitor your referrals, clicks, and earnings in real-time",
      icon: TrendingUp,
      color: "text-yellow-400"
    }
  ];

  const faqItems = [
    {
      question: "How do I join the affiliate program?",
      answer: "Simply sign up for a free account by clicking 'Become an Affiliate' button. Fill in your basic information and you'll be approved instantly. No fees or commitments required."
    },
    {
      question: "How much commission can I earn?",
      answer: "You earn 10% commission for each customer you refer who purchases our IPTV service. With average subscription prices of £80, that's £8 per successful referral."
    },
    {
      question: "How long do cookies last?",
      answer: "Our cookies last for 30 days. This means if someone clicks your referral link and purchases within 30 days, you'll still get the commission even if they don't buy immediately."
    },
    {
      question: "What is the minimum payout threshold?",
      answer: "The minimum payout is $100 (or equivalent in GBP). Once you reach this amount, you can request a withdrawal which will be processed within 5-7 business days."
    },
    {
      question: "How and when do I get paid?",
      answer: "Payments are made via PayPal or bank transfer on a monthly basis. All commissions earned in a month are paid out by the 15th of the following month, provided you've reached the minimum payout."
    },
    {
      question: "Do you provide marketing materials?",
      answer: "Yes! We provide a complete marketing toolkit including banners, screenshots, promotional videos, email templates, and social media content - all completely free."
    },
    {
      question: "Can I promote on social media?",
      answer: "Absolutely! You can promote on Facebook, Twitter, Instagram, YouTube, TikTok, and any other social media platform. We provide platform-specific content to help you succeed."
    },
    {
      question: "Is there a limit to how much I can earn?",
      answer: "No limits! The more customers you refer, the more you earn. Our top affiliates earn over £10,000 per month. Your earning potential is completely unlimited."
    },
    {
      question: "Can I track my performance and earnings?",
      answer: "Yes, you get access to a comprehensive dashboard where you can track clicks, conversions, earnings, and payment history in real-time 24/7."
    },
    {
      question: "What kind of support do affiliates receive?",
      answer: "Affiliates receive priority support through multiple channels including dedicated WhatsApp line, email support, and access to our affiliate success managers for personalized guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600/20 to-blue-600/20 backdrop-blur-sm border border-red-600/30 rounded-3xl p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Share2 className="w-16 h-16 text-red-400" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-6 h-6 text-green-400" />
                        <span className="text-white font-semibold">10% Commission</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-6 h-6 text-blue-400" />
                        <span className="text-white font-semibold">30-Day Cookies</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Banknote className="w-6 h-6 text-purple-400" />
                        <span className="text-white font-semibold">$100 Min Payout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text on Right */}
            <div>
              <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-6">
                <Gift className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">Affiliate Program</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                IPTV Affiliate <span className="text-red-600">Marketing Program</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8">
                Earn 10% commission on every customer you refer
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our lucrative affiliate program and start earning money by promoting our premium IPTV service. 
                No experience needed - we provide everything you need to succeed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold">
                  Become an Affiliate
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
                  Learn More
                </Button>
              </div>

              <div className="text-center sm:text-left">
                <button className="text-gray-400 hover:text-red-400 transition-colors underline">
                  Already an Affiliate? Log in here →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to Start <span className="text-red-600">IPTV Affiliate Marketing Program</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Getting started is simple! Follow these 3 easy steps and begin earning commissions today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.step} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 relative">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className={`w-10 h-10 ${step.color}`} />
                    </div>
                    <div className="bg-red-600/20 text-red-400 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-2xl text-white mb-4">{step.title}</CardTitle>
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

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 backdrop-blur-sm border border-green-600/30 rounded-2xl p-8 max-w-3xl mx-auto">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Start Earning in Minutes
              </h3>
              <p className="text-gray-300">
                Once approved, you'll get instant access to your affiliate dashboard with tracking links, 
                promotional materials, and real-time earnings reports. No waiting period required!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Affiliate <span className="text-red-600">Program Details</span>
            </h2>
            <p className="text-lg text-gray-300">
              Transparent terms and conditions with industry-leading benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-green-600/10 border-green-600/30 hover:bg-green-600/15 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl text-white">Commission Rate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">10%</div>
                <p className="text-gray-300 text-sm">per successful referral</p>
                <div className="mt-4 p-3 bg-green-600/10 rounded-lg">
                  <p className="text-green-300 text-sm">
                    Average earning: <strong>£8 per sale</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-600/10 border-blue-600/30 hover:bg-blue-600/15 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white">Cookie Duration</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">30</div>
                <p className="text-gray-300 text-sm">days tracking window</p>
                <div className="mt-4 p-3 bg-blue-600/10 rounded-lg">
                  <p className="text-blue-300 text-sm">
                    Extended time for <strong>higher conversions</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-600/10 border-purple-600/30 hover:bg-purple-600/15 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Banknote className="w-8 h-8 text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-white">Minimum Payout</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">$100</div>
                <p className="text-gray-300 text-sm">withdrawal threshold</p>
                <div className="mt-4 p-3 bg-purple-600/10 rounded-lg">
                  <p className="text-purple-300 text-sm">
                    Just <strong>13 referrals</strong> to reach payout
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">Additional Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600/20 p-2 rounded-lg flex-shrink-0">
                      <Calendar className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Monthly Payments</h4>
                      <p className="text-gray-300 text-sm">Reliable payments by 15th of each month</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600/20 p-2 rounded-lg flex-shrink-0">
                      <Shield className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">No Hidden Fees</h4>
                      <p className="text-gray-300 text-sm">100% transparent commission structure</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-600/20 p-2 rounded-lg flex-shrink-0">
                      <Globe className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Global Program</h4>
                      <p className="text-gray-300 text-sm">Accept affiliates from worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-600/20 p-2 rounded-lg flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Performance Bonuses</h4>
                      <p className="text-gray-300 text-sm">Extra rewards for top performers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Earning Potential Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Earn <span className="text-red-600">Maximum Profit</span>
            </h2>
            <p className="text-lg text-gray-300">
              Real earning potential based on your traffic and promotion efforts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {earningExamples.map((example, index) => {
              const IconComponent = example.icon;
              return (
                <Card 
                  key={index}
                  className={`bg-gradient-to-br ${example.color} backdrop-blur-sm border ${example.borderColor} hover:scale-105 transition-all duration-300 relative ${example.popular ? 'ring-2 ring-green-500' : ''}`}
                >
                  {example.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1">
                      Most Common
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gray-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">
                      {example.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 font-semibold">
                      {example.customers}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-white mb-2">{example.earning}</div>
                      <div className="text-gray-300 font-medium">{example.subtitle}</div>
                    </div>
                    
                    <div className="p-4 bg-black/20 rounded-lg mb-6">
                      <p className="text-gray-300 text-sm">
                        {example.calculation}
                      </p>
                    </div>

                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                      Start Earning This
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 backdrop-blur-sm border border-red-600/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <TrendingUp className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Unlimited Earning Potential
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                These are just examples. Our top affiliates earn over £10,000 per month! 
                Your income potential is only limited by your marketing efforts.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">No Limits</div>
                  <div className="text-gray-400 text-sm">on earnings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">£10K+</div>
                  <div className="text-gray-400 text-sm">top earners monthly</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">passive income</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our <span className="text-red-600">Affiliate Program</span>?
            </h2>
            <p className="text-lg text-gray-300">
              Industry-leading features and support to maximize your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gray-900/50 p-3 rounded-lg flex-shrink-0">
                        <IconComponent className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white mb-2">{feature.title}</CardTitle>
                        <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-600/30 rounded-3xl p-8 text-center max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">Premium Quality</div>
                  <div className="text-gray-300 text-sm">High conversion rates</div>
                </div>
                <div>
                  <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">24/7 Support</div>
                  <div className="text-gray-300 text-sm">Always here to help</div>
                </div>
                <div>
                  <Download className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">Free Materials</div>
                  <div className="text-gray-300 text-sm">Everything you need</div>
                </div>
                <div>
                  <CreditCard className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">Easy Payments</div>
                  <div className="text-gray-300 text-sm">PayPal & bank transfer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-red-600/20 to-blue-600/20 backdrop-blur-sm border border-red-600/30 rounded-3xl p-12">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Become an <span className="text-red-600">Affiliate Partner</span> Today
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of successful affiliates earning consistent monthly income. 
                Start promoting today and see your first commission within days!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold">
                  Join Now & Start Earning
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-12 py-4 text-xl">
                  View Demo Dashboard
                </Button>
              </div>

              <div className="mb-6">
                <button className="text-gray-400 hover:text-red-400 transition-colors underline">
                  Already an Affiliate? Log in here →
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700/50">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">2min</div>
                  <div className="text-gray-400 text-sm">Setup Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">10%</div>
                  <div className="text-gray-400 text-sm">Commission</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">30d</div>
                  <div className="text-gray-400 text-sm">Cookie Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need to know about our affiliate program
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

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 backdrop-blur-sm border border-green-600/30 rounded-2xl p-8">
              <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Our affiliate support team is available 24/7 to help you succeed. 
                Get personalized assistance with your marketing strategy.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Contact Affiliate Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffiliateProgram;