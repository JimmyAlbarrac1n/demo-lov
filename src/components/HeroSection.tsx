import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/Flow_delpmaspu_.mp4";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasPlayed && window.scrollY > 0) {
        setHasPlayed(true);
        if (videoRef.current) {
          // Reproducir el video y manejar cualquier error de políticas del navegador automáticamente
          videoRef.current.play().catch(() => { });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasPlayed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={heroVideo}
          muted
          playsInline
          // loop no está presente, por lo tanto el video se detendrá al finalizar
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
