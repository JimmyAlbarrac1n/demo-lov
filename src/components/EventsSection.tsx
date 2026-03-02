import { motion } from "framer-motion";
import { PartyPopper, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890";

const EventsSection = () => {
  const handleContact = () => {
    const msg = encodeURIComponent("¡Hola! Me gustaría organizar un evento en Planeta Lov 🎉");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PartyPopper className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-gold">Organiza tu evento</span>{" "}
            <span className="text-foreground">con nosotros</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Si quieres organizar un evento con nosotros, cuéntanos tu idea y nosotros te asesoramos. 
            Hacemos realidad la fiesta que siempre soñaste.
          </p>
          <button
            onClick={handleContact}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            Contáctanos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
