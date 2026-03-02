import { motion } from "framer-motion";
import { Users, Wine, Ticket, DollarSign, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890";

const benefits = [
  { icon: Wine, text: "Botellas" },
  { icon: Ticket, text: "Pases gratis" },
  { icon: DollarSign, text: "Pagos en efectivo" },
];

const PromotersSection = () => {
  const handleContact = () => {
    const msg = encodeURIComponent("¡Hola! Quiero ser parte del grupo de promotores de Planeta Lov 💼");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-gold">¿Quieres ser promotor?</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-gold mx-auto mb-8" />

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                className="glass rounded-lg px-8 py-6 flex flex-col items-center gap-3 min-w-[150px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Icon className="w-8 h-8 text-primary" />
                <span className="text-foreground font-semibold">{text}</span>
              </motion.div>
            ))}
          </div>

          <button
            onClick={handleContact}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PromotersSection;
