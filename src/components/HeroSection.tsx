import { motion } from "framer-motion";
import heroVideo from "@/assets/Flow_delpmaspu_.mp4";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    // min-h-svh: usa el "small viewport height" para que en móvil
    // el video llene la pantalla correctamente (evita el bug del 100vh
    // donde la barra del navegador come parte de la pantalla).
    <section className="relative w-full aspect-video sm:aspect-auto sm:min-h-svh flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay   // arranca automáticamente al cargar la página
          muted      // necesario para que autoPlay funcione en todos los navegadores
          playsInline // necesario para iOS (evita el player a pantalla completa en iPhone)
          // sin 'loop': el video se pausa en el último fotograma
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
