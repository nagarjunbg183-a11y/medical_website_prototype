import { motion } from "framer-motion";
import { Languages, Clock, GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";
import d4 from "@/assets/doctor-4.jpg";

export const doctors = [
  {
    name: "Dr. Ananya ",
    photo: d1,
    qualification: "MD, DM (Cardiology)",
    specialization: "Chief Cardiologist",
    experience: 14,
    languages: ["English", "Hindi", "Kannada"],
    timings: "Mon–Fri • 9AM–5PM",
  },
  {
    name: "Dr. Aditya Dalavi ",
    photo: d2,
    qualification: "MS, MCh (Neurosurgery)",
    specialization: "Neurosurgeon",
    experience: 18,
    timings: "Tue–Sat • 10AM–6PM",
  },
  {
    name: "Dr. Punya Gowda",
    photo: d3,
    qualification: "MD (Pediatrics)",
    specialization: "Pediatrician",
    experience: 12,
    languages: ["English", "Gujarati", "Hindi"],
    timings: "Mon–Sat • 8AM–4PM",
  },
  {
    name: "Dr. Adishesha",
    photo: d4,
    qualification: "MD (General Medicine)",
    specialization: "General Physician",
    experience: 8,
    languages: ["English", "Malayalam", "Hindi"],
    timings: "Mon–Fri • 8AM–8PM",
  },
];

export function Doctors() {
  return (
    <Section
      id="doctors"
      eyebrow="Our Specialists"
      title="Meet the doctors caring for you."
      subtitle="Board-certified specialists with decades of combined experience — available in-clinic and via telemedicine."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((d, i) => (
          <motion.article
            key={d.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-[var(--shadow-soft)] transition-all"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={d.photo}
                alt={`Portrait of ${d.name}`}
                loading="lazy"
                width={640}
                height={800}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg leading-tight">{d.name}</h3>
              <p className="text-xs text-brand font-semibold uppercase tracking-wider mt-1">
                {d.specialization}
              </p>
              <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <GraduationCap className="size-3.5 text-brand" />
                  {d.qualification} • {d.experience} yrs exp
                </li>
               
                <li className="flex items-center gap-2">
                  <Clock className="size-3.5 text-brand" />
                  {d.timings}
                </li>
              </ul>
              <Button
                asChild
                size="sm"
                className="w-full mt-5 rounded-lg bg-brand hover:bg-brand-dark"
              >
                <a href="#appointment">Book Appointment</a>
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}