import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DetectionPanel from "@/components/DetectionPanel";
import StatsOverview from "@/components/StatsOverview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DetectionPanel />
        <StatsOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
