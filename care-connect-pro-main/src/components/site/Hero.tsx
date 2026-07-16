import { motion } from "framer-motion";
import { Calendar, Pill, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-6 pb-14 sm:py-20 md:py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,var(--brand-soft)_0%,transparent_70%)]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-3 bg-brand-soft text-brand-dark text-xs font-bold rounded-full mb-6 tracking-wider uppercase">
            Next-Gen Patient Care
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-balance mb-5 sm:mb-6">
            Precision medicine{" "}
            <span className="text-brand">tailored to you.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Combining world-class expertise with advanced diagnostic technology
            to deliver a seamless healthcare experience — from diagnosis to
            recovery.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto h-12 px-6 rounded-xl bg-ink text-background hover:bg-ink/90 hover:scale-105 transition-transform">
              <a href="#appointment">
                <Calendar className="size-4" />
                Book Appointment
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-6 rounded-xl border-border hover:scale-105 transition-transform">
              <a href="#medicines">
                <Pill className="size-4" />
                Order Medicines
              </a>
            </Button>
            <Button asChild size="lg" variant="destructive" className="w-full sm:w-auto h-12 px-6 rounded-xl relative overflow-hidden hover:scale-105 transition-transform">
              <a href="tel:911" aria-label="Emergency">
                <span className="absolute inset-0 -z-10 bg-destructive animate-pulse opacity-60" />
                <Phone className="size-4" />
                Emergency
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "15k+", l: "Patients" },
              { n: "42", l: "Specialists" },
              { n: "24/7", l: "Support" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-xl sm:text-2xl md:text-3xl font-bold text-ink">{s.n}</dt>
                <dd className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-border">
            <img
              src={heroImg}
              alt="Bright modern medical clinic interior with natural light"
              width={1200}
              height={1500}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card p-5 sm:p-6 rounded-2xl shadow-xl border border-border max-w-[220px]"
          >
            <div className="text-3xl font-bold text-brand">98.4%</div>
            <div className="text-[11px] text-muted-foreground uppercase tracking-widest mt-1">
              Patient Satisfaction
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-brand text-primary-foreground p-3 sm:p-4 rounded-2xl shadow-xl max-w-[200px] hidden sm:block"
          >
            <div className="text-sm font-semibold">Accredited Since</div>
            <div className="text-2xl font-bold mt-1">1998</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}