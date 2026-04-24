import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import RoadmapSection from "@/components/RoadmapSection";
import ChangelogSection from "@/components/ChangelogSection";
import GrowthSection from "@/components/GrowthSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen relative"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <ParticleBackground />
      <div style={{ position: "relative", zIndex: 10 }}>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <RoadmapSection />
        <ChangelogSection />
        <GrowthSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
