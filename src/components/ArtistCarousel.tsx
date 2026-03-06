import { motion } from "framer-motion";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";
import artist4 from "@/assets/artist-4.jpg";

const artists = [
  { img: artist1, name: "Noche de DJ" },
  { img: artist2, name: "Live Performance" },
  { img: artist3, name: "Artistas Invitados" },
  { img: artist4, name: "Sessions en Vivo" },
];

// Duplicamos el array para crear un loop visual perfecto sin saltos
const duplicated = [...artists, ...artists];

const ArtistCarousel = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient-gold">Artistas</span>{" "}
          <span className="text-foreground">que nos acompañan</span>
        </motion.h2>
        <div className="w-16 h-[2px] bg-gradient-gold mx-auto mb-12" />
      </div>

      {/* Wrapper con máscaras de fade premium en los bordes */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {/*
          Track del marquee.
          - will-change + translateZ(0): activa la GPU para eliminar el micro-freeze
            que ocurría porque el navegador recalculaba el layout entre ciclos.
          - La animación va de translateX(0) a translateX(-50%) porque el array
            está duplicado: al llegar al 50% el loop visual es perfecto.
        */}
        <div
          className="flex gap-6"
          style={{
            animation: "marquee 22s linear infinite",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        >
          {duplicated.map((artist, i) => (
            <div
              key={i}
              // calc(25vw - 18px): 4 tarjetas caben exactamente en la pantalla.
              // 18px = (gap-6 × 3 gaps) / 4 items = 72px / 4 = 18px por tarjeta.
              className="relative flex-shrink-0 aspect-[3/4] rounded-xl overflow-hidden"
              style={{ width: "calc(25vw - 18px)" }}
            >
              <img
                src={artist.img}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-lg font-display font-semibold text-foreground">
                {artist.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0) translateZ(0); }
          100% { transform: translateX(-50%) translateZ(0); }
        }
      `}</style>
    </section>
  );
};

export default ArtistCarousel;
