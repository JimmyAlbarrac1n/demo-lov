import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const ArtistCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % artists.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + artists.length) % artists.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
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

        <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={artists[current].img}
              alt={artists[current].name}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-2xl font-display font-semibold text-foreground">{artists[current].name}</p>
          </div>

          {/* Nav */}
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full p-2 text-foreground hover:text-primary transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full p-2 text-foreground hover:text-primary transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            {artists.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistCarousel;
