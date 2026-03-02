import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-gold">Quiénes</span>{" "}
            <span className="text-foreground">Somos</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-gold mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Somos el destino exclusivo para quienes buscan una experiencia nocturna inigualable. 
            En <span className="text-primary font-semibold">Planeta Lov</span>, cada noche es una celebración 
            donde la música, el ambiente y la elegancia se fusionan para crear momentos inolvidables.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
