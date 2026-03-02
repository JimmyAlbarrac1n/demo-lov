import { motion } from "framer-motion";
import { Clock, Calendar, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const SCHEDULE = [
  { day: "Viernes", hours: "9:00 PM — 3:00 AM", active: new Date().getDay() === 5 },
  { day: "Sábado", hours: "9:00 PM — 3:00 AM", active: new Date().getDay() === 6 },
];

const ScheduleSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const dayOfWeek = currentTime.getDay();
  const hour = currentTime.getHours();
  const isOpenNow = (dayOfWeek === 5 || dayOfWeek === 6) && (hour >= 21 || hour < 3);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("es-DO", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            <span className="text-gradient-gold">Horarios</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-gold mx-auto mb-6" />

          {/* Live status */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card"
            animate={{ scale: isOpenNow ? [1, 1.02, 1] : 1 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isOpenNow ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" : "bg-muted-foreground"
              }`}
            />
            <span className="text-sm font-body font-medium text-foreground">
              {isOpenNow ? "¡Abierto ahora!" : "Cerrado"}
            </span>
            <span className="text-xs text-muted-foreground ml-1">{formatTime(currentTime)}</span>
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {SCHEDULE.map((item, i) => {
            const isToday = dayOfWeek === (i === 0 ? 5 : 6);
            return (
              <motion.div
                key={item.day}
                className={`relative rounded-lg p-8 text-center border transition-all ${
                  isToday
                    ? "border-primary bg-card shadow-gold"
                    : "border-border bg-card/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4 }}
              >
                {isToday && (
                  <motion.div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Sparkles className="w-3 h-3" />
                    Hoy
                  </motion.div>
                )}
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">{item.day}</h3>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="font-body">{item.hours}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
