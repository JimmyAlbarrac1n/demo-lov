import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            <span className="text-gradient-gold">Ubicación</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Map */}
          <motion.div
            className="md:col-span-2 rounded-lg overflow-hidden border border-border aspect-video"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.59631097595!2d-78.6699295891602!3d-1.2788379999999948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3830012771a61%3A0x341d09ad40ec77db!2sLOV%20Music%20Club!5e0!3m2!1ses-419!2sec!4v1772773128618!5m2!1ses-419!2sec"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Planeta Lov"
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex flex-col items-center justify-center text-center gap-4 glass rounded-lg p-8 h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-10 h-10 text-primary" />
            <h3 className="text-xl font-display font-bold text-foreground">Encuéntranos</h3>
            <p className="text-sm text-muted-foreground">Ambato, Ecuador</p>
            <a
              href="https://maps.google.com/?q=LOV+Music+Club,+Ambato,+Ecuador"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              Ver en Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
