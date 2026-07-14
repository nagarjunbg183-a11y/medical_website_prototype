import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Section } from "./Section";

const reviews = [
  { name: "Priya M.", role: "Patient · Cardiology", rating: 5, text: "Dr. Ananya took the time to explain every test. I've never felt more informed about my own heart health." },
  { name: "Deepak K.", role: "Patient · Pediatrics", rating: 5, text: "Our kids actually look forward to visits. The clinic is bright, calm, and the staff are wonderful with children." },
  { name: "Aisha R.", role: "Patient · General Practice", rating: 5, text: "Same-day appointments, seamless pharmacy delivery — LuminaHealth has genuinely changed how I access care." },
  { name: "Kiran L.", role: "Patient · Orthopedics", rating: 4, text: "Post-op recovery was tracked closely and my questions were answered within the hour, every single time." },
  { name: "Gauri H.", role: "Patient · Neurology", rating: 5, text: "The diagnostic accuracy and follow-through here is best-in-class. I recommend LuminaHealth to everyone." },
  { name: "Rohan P.", role: "Patient · Emergency", rating: 5, text: "Triaged in under 4 minutes on a Sunday night. This is what a modern ER should look like." },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      className="bg-card"
      eyebrow="Testimonials"
      title="Trusted by 15,000+ patients."
      subtitle="Real reviews from real patients across our specialties."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className="p-6 rounded-2xl bg-background border border-border hover:shadow-[var(--shadow-soft)] transition-all"
          >
            <div className="flex gap-0.5 mb-4" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`size-4 ${s < r.rating ? "fill-brand text-brand" : "text-border"}`}
                />
              ))}
            </div>
            <blockquote className="text-sm text-ink leading-relaxed mb-5">
              "{r.text}"
            </blockquote>
            <figcaption>
              <div className="text-sm font-semibold">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}