import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Star, Gem, ChevronDown, MessageCircle } from "lucide-react";
import packGolden from "@/assets/pack-golden.jpg";
import packVip from "@/assets/pack-vip.jpg";
import packPlatinum from "@/assets/pack-platinum.jpg";

const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number

const packs = [
  {
    id: "golden",
    name: "Pack Golden",
    price: "120$",
    icon: Crown,
    image: packGolden,
    highlight: true,
    items: [
      "Botella Jäger o Bombay",
      "6 Pack de Coronas",
      "10 entradas a zona Golden",
    ],
  },
  {
    id: "vip",
    name: "Pack VIP",
    price: "80$",
    icon: Star,
    image: packVip,
    highlight: false,
    items: [
      "Botella de Espuela o Ron Punta Cana",
      "6 Pack Heineken",
      "10 pases VIP",
    ],
  },
  {
    id: "platinum",
    name: "Pack Platinum",
    price: "¡GRATIS!",
    subtitle: "Solo con tu reserva",
    icon: Gem,
    image: packPlatinum,
    highlight: false,
    items: [
      "Botella Gratis",
      "10 pases para zona Platinum",
    ],
  },
];

const PackCard = ({ pack }: { pack: typeof packs[0] }) => {
  const [open, setOpen] = useState(false);
  const Icon = pack.icon;

  const handleReserve = () => {
    const msg = encodeURIComponent(`¡Hola! Me interesa reservar el ${pack.name} en Planeta Lov 🎉`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <motion.div
      className={`rounded-lg overflow-hidden border transition-all ${
        pack.highlight ? "border-primary shadow-gold" : "border-border"
      } bg-card`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="p-6 text-center">
        <Icon className={`w-10 h-10 mx-auto mb-3 ${pack.highlight ? "text-primary" : "text-muted-foreground"}`} />
        <h3 className="text-2xl font-display font-bold text-foreground">{pack.name}</h3>
        <p className={`text-3xl font-display font-bold mt-2 ${pack.highlight ? "text-gradient-gold" : "text-primary"}`}>
          {pack.price}
        </p>
        {pack.subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{pack.subtitle}</p>
        )}

        {/* Items preview */}
        <ul className="mt-4 space-y-2">
          {pack.items.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 flex items-center gap-1 mx-auto text-sm text-primary hover:text-gold-light transition-colors"
        >
          {open ? "Menos info" : "Más info"}
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Expandable */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="rounded-lg overflow-hidden mb-4">
                <img src={pack.image} alt={pack.name} className="w-full h-48 object-cover" />
              </div>
              <button
                onClick={handleReserve}
                className="w-full py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                ¡Reserva Ya!
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const PacksSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">
            <span className="text-gradient-gold">Vive la experiencia</span>
          </h2>
          <p className="text-xl text-muted-foreground">Festeja con nosotros</p>
          <div className="w-16 h-[2px] bg-gradient-gold mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {packs.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PacksSection;
