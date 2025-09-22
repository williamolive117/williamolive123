import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Monitor, MessageCircle, CreditCard } from "lucide-react";
import { useState } from "react";

const PricingSection = () => {
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

  const handleGlobalDeviceSelection = (devices: number) => {
    setGlobalDeviceCount(devices);
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-primary">Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to fit your streaming needs. 
            All plans include our full channel lineup and premium features.
          </p>
          
          {/* Global Device Selection */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Monitor className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
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
                        ? 'bg-primary text-primary-foreground shadow-lg transform scale-105' 
                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border hover:border-primary/50'
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
              
              <p className="text-sm text-muted-foreground mt-4">
                Stream simultaneously on up to <span className="text-primary font-semibold">{globalDeviceCount}</span> device{globalDeviceCount > 1 ? 's' : ''} • Same price for all options
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-primary text-primary-foreground text-center py-2">
                    <Badge className="bg-primary-foreground text-primary border-0">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground line-through mt-1">
                    Was {plan.originalPrice}
                  </div>
                  {/* Device Count Display */}
                  <div className="mt-3 inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                    <Monitor className="h-3 w-3" />
                    <span className="text-sm font-medium">
                      {globalDeviceCount} Device{globalDeviceCount > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Device Info */}
                <div className="border-t border-border pt-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      ✓ Stream on up to <span className="text-primary font-semibold">{globalDeviceCount}</span> device{globalDeviceCount > 1 ? 's' : ''} simultaneously
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Compatible with all major streaming devices
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>

                {/* Payment Methods */}
                <div className="mt-4 space-y-3">
                  {/* Payment Icons */}
                  <div className="flex items-center justify-center space-x-2">
                    <div className="text-xs text-muted-foreground">We accept:</div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    {/* Visa */}
                    <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">VISA</span>
                    </div>
                    {/* Mastercard */}
                    <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">MC</span>
                    </div>
                    {/* PayPal */}
                    <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">PP</span>
                    </div>
                    {/* Apple Pay */}
                    <div className="w-10 h-6 bg-black rounded flex items-center justify-center">
                      <span className="text-white text-xs">🍎</span>
                    </div>
                    {/* Google Pay */}
                    <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center">
                      <span className="text-white text-xs">G</span>
                    </div>
                  </div>

                  {/* WhatsApp Support */}
                  <div className="pt-3 border-t border-border">
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

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              🛡️ 30-Day Money-Back Guarantee
            </h3>
            <p className="text-muted-foreground">
              Not satisfied? Get a full refund within 30 days, no questions asked. 
              We're confident you'll love our service, but your satisfaction is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;