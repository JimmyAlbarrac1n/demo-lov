import { useRef, useEffect, useCallback } from "react";
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

const duplicated = [...artists, ...artists];

const GAP = 24;      // px entre tarjetas (= marginRight)
const SPEED = 0.6;   // px por frame (≈ 36px/segundo a 60fps)

const ArtistCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);          // posición X actual (negativa, scroll hacia izquierda)
  const rafRef = useRef(0);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);

  // Mitad del ancho total del track = ancho de un set completo (4 tarjetas)
  const halfWidth = useCallback(() =>
    trackRef.current ? trackRef.current.scrollWidth / 2 : 0, []);

  const applyPos = useCallback((pos: number) => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(${pos}px)`;
  }, []);

  const tick = useCallback(() => {
    posRef.current -= SPEED;
    // Cuando llegamos al -50% del track, volvemos a 0 de forma invisible
    const hw = halfWidth();
    if (hw > 0 && posRef.current <= -hw) {
      posRef.current += hw;
    }
    applyPos(posRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [halfWidth, applyPos]);

  const startAnim = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const stopAnim = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    startAnim();
    return stopAnim;
  }, [startAnim, stopAnim]);

  // ── Mouse events ──────────────────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragStartPos.current = posRef.current;
    stopAnim();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const delta = e.clientX - dragStartX.current;
    let next = dragStartPos.current + delta;
    // Mantener el loop dentro de los límites del duplicado
    const hw = halfWidth();
    if (next > 0) next -= hw;
    if (next <= -hw) next += hw;
    posRef.current = next;
    applyPos(next);
  };

  const onMouseUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    startAnim();
  };

  // ── Touch events (móvil) ──────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartPos.current = posRef.current;
    stopAnim();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    const delta = e.touches[0].clientX - dragStartX.current;
    let next = dragStartPos.current + delta;
    const hw = halfWidth();
    if (next > 0) next -= hw;
    if (next <= -hw) next += hw;
    posRef.current = next;
    applyPos(next);
  };

  const onTouchEnd = () => {
    if (!dragging.current) return;
    dragging.current = false;
    startAnim();
  };

  return (
    <section className="py-20 bg-background overflow-hidden select-none">
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

      {/* cursor-grab activo cuando está en reposo, cursor-grabbing al arrastrar */}
      <div
        className="relative cursor-grab active:cursor-grabbing"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}   // soltar si el cursor sale del área
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{ willChange: "transform" }}
        >
          {duplicated.map((artist, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 aspect-[3/4] rounded-xl overflow-hidden"
              style={{
                width: `calc(25vw - ${GAP}px)`,
                marginRight: `${GAP}px`,
              }}
            >
              {/* draggable=false evita que el navegador arrastre la imagen */}
              <img
                src={artist.img}
                alt={artist.name}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-lg font-display font-semibold text-foreground">
                {artist.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistCarousel;
