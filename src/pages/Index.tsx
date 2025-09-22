import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DeviceCompatibility from "@/components/DeviceCompatibility";
import FreeTrial from "@/components/FreeTrial";
import CustomerReviews from "@/components/CustomerReviews";
import HowToBuy from "@/components/HowToBuy";
import WorldChannels from "@/components/WorldChannels";
import HaveQuestions from "@/components/HaveQuestions";
import ContentSection from "@/components/ContentSection";
import LatestBlogPosts from "@/components/LatestBlogPosts";
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
        <FreeTrial />
        <CustomerReviews />
        <HowToBuy />
        <WorldChannels />
        <HaveQuestions />
        <ContentSection />
        <LatestBlogPosts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;