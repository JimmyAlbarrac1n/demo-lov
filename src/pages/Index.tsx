import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArtistCarousel from "@/components/ArtistCarousel";
import AboutSection from "@/components/AboutSection";
import PacksSection from "@/components/PacksSection";
import EventsSection from "@/components/EventsSection";
import PromotersSection from "@/components/PromotersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="inicio">
        <HeroSection />
      </div>
      <div id="artistas">
        <ArtistCarousel />
      </div>
      <AboutSection />
      <div id="packs">
        <PacksSection />
      </div>
      <div id="eventos">
        <EventsSection />
      </div>
      <PromotersSection />
      <div id="contacto">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
