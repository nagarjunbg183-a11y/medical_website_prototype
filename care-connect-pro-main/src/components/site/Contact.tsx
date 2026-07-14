import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

const CLINIC_ADDRESS = "No. 12, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038";
const GMAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(CLINIC_ADDRESS)}&output=embed`;
const GMAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_ADDRESS)}`;
const WHATSAPP = "https://wa.me/919876543210?text=Hi%20LuminaHealth%2C%20I%27d%20like%20to%20book%20an%20appointment.";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Visit our medical center."
      subtitle="Walk in, call, or message — our care team is available around the clock."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {[
            { icon: MapPin, label: "Address", value: CLINIC_ADDRESS },
            { icon: Phone, label: "Phone", value: "+91 98765 43210 · 24/7" },
            { icon: Mail, label: "Email", value: "hello@luminahealth.in" },
            { icon: Clock, label: "Working Hours", value: "Mon–Sat 7AM–10PM · Sun 8AM–6PM" },
          ].map((c) => (
            <div
              key={c.label}
              className="flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-brand/40 transition-colors"
            >
              <div className="size-11 rounded-xl bg-brand-soft text-brand-dark grid place-items-center shrink-0">
                <c.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="text-sm font-medium mt-1 break-words">{c.value}</div>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button asChild size="lg" className="h-12 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-xl">
              <a href={GMAPS_DIRECTIONS} target="_blank" rel="noreferrer">
                <Navigation className="size-4" /> Get Directions
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)] min-h-[420px] bg-card"
        >
          <iframe
            title="LuminaHealth location map"
            src={GMAPS_EMBED}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[420px] border-0"
          />
        </motion.div>
      </div>
    </Section>
  );
}