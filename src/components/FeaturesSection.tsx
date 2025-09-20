import { Shield, Zap, Globe, Clock, Users, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Crystal-Clear HD Streaming",
      description: "Enjoy premium quality streaming with up to 4K resolution on all your favorite channels."
    },
    {
      icon: Globe,
      title: "Massive Channel Library", 
      description: "Access over 20,000 premium channels from around the world, including UK, US, and international content."
    },
    {
      icon: Zap,
      title: "Reliable and Stable Service",
      description: "99.9% uptime guarantee with enterprise-grade servers ensuring uninterrupted entertainment."
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Round-the-clock dedicated support team ready to help you with any questions or issues."
    },
    {
      icon: Users,
      title: "Multi-Device Compatible",
      description: "Stream on up to 5 devices simultaneously across all major platforms and operating systems."
    },
    {
      icon: Award,
      title: "Premium Sports & Movies",
      description: "Exclusive access to live sports, latest movies, TV series, and premium entertainment content."
    }
  ];

  return (
    <section id="features" className="py-24 bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">IPTV UK?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the ultimate streaming service with cutting-edge technology, 
            premium content, and unmatched reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-lg p-3 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;