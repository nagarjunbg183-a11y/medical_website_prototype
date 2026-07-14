import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import campImg from "@/assets/camp.jpg";

export const camps = [
  {
    type: "Free Health Camp",
    title: "Free Community Health Screening",
    date: "Sat, Aug 24, 2026",
    time: "8:00 AM – 2:00 PM",
    location: "Downtown Community Center",
    color: "bg-brand text-primary-foreground",
  },
  {
    type: "Bone Density Camp",
    title: "Osteoporosis Screening Day",
    date: "Sun, Sep 8, 2026",
    time: "9:00 AM – 4:00 PM",
    location: "LuminaHealth Main Campus",
    color: "bg-ink text-background",
  },
  {
    type: "Diabetes Camp",
    title: "Diabetes Awareness & HbA1c Testing",
    date: "Fri, Sep 20, 2026",
    time: "10:00 AM – 5:00 PM",
    location: "Riverside Health Pavilion",
    color: "bg-accent text-accent-foreground",
  },
  {
    type: "Blood Donation Camp",
    title: "Blood Donation Drive",
    date: "Sat, Oct 5, 2026",
    time: "8:00 AM – 6:00 PM",
    location: "LuminaHealth Main Campus",
    color: "bg-destructive text-destructive-foreground",
  },
];

export function HealthCamps() {
  return (
    <Section
      id="camps"
      eyebrow="Community"
      title="Free health camps & wellness drives."
      subtitle="We run 30+ community health camps every year. Free screenings, expert consultations, and no appointment necessary."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 rounded-3xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)]"
        >
          <img
            src={campImg}
            alt="Community health screening camp with doctors"
            loading="lazy"
            width={1024}
            height={640}
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Featured This Month</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Join our flagship community screening on Aug 24 — includes free
              cardiac, glucose, and BP checkups.
            </p>

          </div>
        </motion.div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {camps.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`${c.color} rounded-2xl p-6 flex flex-col justify-between min-h-[180px]`}
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
                  {c.type}
                </span>
                <h4 className="font-semibold text-lg mt-1 leading-tight">{c.title}</h4>
              </div>
              <div className="space-y-1.5 text-xs opacity-90 mt-4">
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-3.5" /> {c.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-3.5" /> {c.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5" /> {c.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}