import { motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Baby,
  Bone,
  Stethoscope,
  Microscope,
  Eye,
  Activity,
} from "lucide-react";
import { Section } from "./Section";

const services = [
  { icon: HeartPulse, title: "Cardiology", body: "Advanced cardiac screening and personalized heart-health management with continuous monitoring." },
  { icon: Brain, title: "Neurology", body: "Expert neurological care from headaches and sleep disorders to complex nervous-system treatments." },
  { icon: Baby, title: "Pediatrics", body: "Gentle, specialized care for the youngest members of your family in a nurturing environment." },
  { icon: Bone, title: "Orthopedics", body: "Joint, spine, and sports-injury care with minimally-invasive surgical options." },
  { icon: Stethoscope, title: "General Practice", body: "Same-day primary care visits, preventive checkups, and ongoing chronic-condition management." },
  { icon: Microscope, title: "Diagnostics", body: "In-house MRI, CT, ultrasound, and lab work with AI-assisted reporting within hours." },
  { icon: Eye, title: "Ophthalmology", body: "Comprehensive vision care, LASIK evaluations, and pediatric eye examinations." },
  { icon: Activity, title: "Emergency Care", body: "24/7 emergency response with rapid triage and direct connection to on-call specialists." },
];

export function Services() {
  return (
    <Section
      id="services"
      className="bg-card"
      eyebrow="Services"
      title="Comprehensive care under one roof."
      subtitle="Eight specialties, one seamless patient journey. Every service is coordinated by your primary care team."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            whileHover={{ y: -4 }}
            className="p-6 rounded-2xl bg-background border border-border hover:border-brand/40 hover:shadow-[var(--shadow-soft)] transition-all group"
          >
            <div className="size-11 rounded-xl bg-brand-soft text-brand-dark grid place-items-center mb-5 group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
              <s.icon className="size-5" />
            </div>
            <h3 className="text-base font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}