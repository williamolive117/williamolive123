import { Button } from "@/components/ui/button";
import { Play, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-card">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Experience Entertainment 
                <span className="text-primary"> on Your Terms</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Stream thousands of premium channels in crystal-clear HD quality. 
                Enjoy reliable, buffer-free entertainment across all your devices.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground">
                <Zap className="h-5 w-5 text-primary" />
                <span>Lightning Fast Streaming</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground">
                <Play className="h-5 w-5 text-primary" />
                <span>20,000+ Premium Channels</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4">
                START SUBSCRIPTION NOW!
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-4">
                Get Free Trial
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20K+</div>
                <div className="text-sm text-muted-foreground">Channels</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-20 bg-gradient-to-r from-primary/30 to-primary/10 rounded-lg flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <div className="h-16 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg"></div>
                  <div className="h-12 bg-gradient-to-r from-primary/15 to-primary/5 rounded-lg"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-16 bg-gradient-to-r from-primary/25 to-primary/10 rounded-lg"></div>
                  <div className="h-20 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Tv className="h-8 w-8 text-primary" />
                  </div>
                  <div className="h-14 bg-gradient-to-r from-primary/15 to-primary/5 rounded-lg"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3">
                <Shield className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-primary/20 rounded-full p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tv = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="15" x="2" y="3" rx="2" ry="2"/>
    <path d="m17 2-5 5-5-5"/>
  </svg>
);

export default HeroSection;