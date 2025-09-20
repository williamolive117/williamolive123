import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smartphone, Tv, Monitor } from "lucide-react";

const DeviceCompatibility = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const devices = [
    {
      name: "Amazon Fire Stick",
      icon: "🔥",
      description: "Stream directly on your Fire TV",
      compatibility: "Full Support"
    },
    {
      name: "Smart TV",
      icon: "📺",
      description: "Samsung, LG, Sony & more",
      compatibility: "Native Apps"
    },
    {
      name: "Android Devices",
      icon: "📱",
      description: "Phones, tablets, and TV boxes",
      compatibility: "Android 5.0+"
    },
    {
      name: "iOS Devices",
      icon: "📱",
      description: "iPhone, iPad, and Apple TV",
      compatibility: "iOS 12+"
    },
    {
      name: "MAG Box",
      icon: "📦",
      description: "Dedicated IPTV set-top boxes",
      compatibility: "All Models"
    },
    {
      name: "NVIDIA Shield",
      icon: "🛡️",
      description: "Premium Android TV experience",
      compatibility: "Optimized"
    },
    {
      name: "Xbox Console",
      icon: "🎮",
      description: "Xbox One & Series X/S",
      compatibility: "Via Browser"
    },
    {
      name: "Web Player",
      icon: "🌐",
      description: "Any modern web browser",
      compatibility: "All Platforms"
    }
  ];

  const itemsPerSlide = 4;
  const maxSlide = Math.ceil(devices.length / itemsPerSlide) - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const getVisibleDevices = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return devices.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section id="devices" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Stream on <span className="text-primary">Any Device</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our service works seamlessly across all your favorite devices. 
            No matter where you are or what device you're using, your entertainment follows you.
          </p>
        </div>

        {/* Device Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full flex-shrink-0">
                {getVisibleDevices().map((device, index) => (
                  <div
                    key={`${currentSlide}-${index}`}
                    className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                  >
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {device.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {device.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {device.description}
                    </p>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {device.compatibility}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border border-border hover:border-primary rounded-full p-2 hover:bg-card transition-colors duration-200"
            aria-label="Previous devices"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border border-border hover:border-primary rounded-full p-2 hover:bg-card transition-colors duration-200"
            aria-label="Next devices"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxSlide + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentSlide === index ? 'bg-primary' : 'bg-muted'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Universal Compatibility</h3>
            <p className="text-muted-foreground">Works on virtually any device with internet connection</p>
          </div>
          <div className="text-center">
            <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Multi-Device Streaming</h3>
            <p className="text-muted-foreground">Stream on up to 5 devices simultaneously</p>
          </div>
          <div className="text-center">
            <Tv className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Easy Setup</h3>
            <p className="text-muted-foreground">Quick installation guides for all supported devices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceCompatibility;