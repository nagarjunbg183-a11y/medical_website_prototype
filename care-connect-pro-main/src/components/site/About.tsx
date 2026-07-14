import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Users, Award, Clock } from "lucide-react";
import { Section } from "./Section";

const pillars = [
  { icon: Target, title: "Our Mission", body: "Deliver accessible, evidence-based healthcare that treats every patient with dignity and precision." },
  { icon: Eye, title: "Our Vision", body: "A world where world-class clinical care is a right — not a privilege — for every community we serve." },
  { icon: ShieldCheck, title: "Why Choose Us", body: "Board-certified specialists, transparent pricing, integrated pharmacy, and 24/7 emergency response." },
];

const stats = [
  { icon: Users, n: "15,000+", l: "Patients served" },
  { icon: Award, n: "25", l: "Years of excellence" },
  { icon: ShieldCheck, n: "42", l: "Expert doctors" },
  { icon: Clock, n: "24/7", l: "Emergency care" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About LuminaHealth"
      title="A modern clinic built around you."
      subtitle="For 25 years, LuminaHealth has combined clinical rigor with a warmer, calmer patient experience. Our team spans cardiology, neurology, pediatrics, and general practice — under one roof."
    >
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-card border border-border hover:border-brand/40 hover:shadow-[var(--shadow-soft)] transition-all"
          >
            <div className="size-12 rounded-xl bg-brand-soft text-brand-dark grid place-items-center mb-6">
              <p.icon className="size-5" />
            </div>
            <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-10 rounded-3xl bg-brand text-primary-foreground">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-start gap-2"
          >
            <s.icon className="size-6 opacity-80" />
            <div className="text-3xl sm:text-4xl font-bold">{s.n}</div>
            <div className="text-xs uppercase tracking-widest opacity-80">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}