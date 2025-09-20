import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DeviceCompatibility from "@/components/DeviceCompatibility";
import CustomerReviews from "@/components/CustomerReviews";
import WorldChannels from "@/components/WorldChannels";
import HaveQuestions from "@/components/HaveQuestions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <DeviceCompatibility />
        <CustomerReviews />
        <WorldChannels />
        <HaveQuestions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;