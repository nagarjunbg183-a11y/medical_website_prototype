import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./Section";

const faqs = [
  { q: "Do you accept insurance?", a: "Yes — we work with BlueCross BlueShield, Aetna, United Healthcare, Cigna, and 15+ other major carriers. We also offer transparent self-pay pricing." },
  { q: "How quickly can I get an appointment?", a: "Most non-urgent visits are booked within 24–48 hours. Same-day appointments are available for primary care and pediatric urgent needs." },
  { q: "Do you offer telemedicine?", a: "Absolutely. Video consultations are available 7 days a week for primary care, mental health, and follow-up visits." },
  { q: "Is prescription delivery really free?", a: "Yes — free 2-hour delivery on all orders above 500rs within a 5km radius of the clinic." },
  { q: "Can I bring my whole family?", a: "Family plans are available covering up to 6 members with combined billing and shared medical records access." },
  { q: "Do you run free health camps?", a: "We host 30+ community camps every year — free screenings, expert consultations, no appointment necessary. See the Health Camps section above." },
];

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Answers to common questions."
      subtitle="Can't find what you're looking for? Message our team via WhatsApp — we usually reply within minutes."
    >
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold hover:text-brand">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}