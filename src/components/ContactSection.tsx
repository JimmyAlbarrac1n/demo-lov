import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-gold">Encuéntranos</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            className="rounded-lg overflow-hidden border border-border aspect-video"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0!2d-69.93!3d18.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI4JzEyLjAiTiA2OcKwNTUnNDguMCJX!5e0!3m2!1ses!2sdo!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Planeta Lov"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-lg p-6 flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">Ubicación</h3>
                <a
                  href="https://maps.app.goo.gl/RwYBta2pARGXBUqf8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-gold-light transition-colors text-sm"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>

            <div className="glass rounded-lg p-6 flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">Horarios</h3>
                <p className="text-muted-foreground">9:00 PM — 3:00 AM</p>
              </div>
            </div>

            <div className="glass rounded-lg p-6 flex items-start gap-4">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">Días</h3>
                <p className="text-muted-foreground">Viernes y Sábado</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
