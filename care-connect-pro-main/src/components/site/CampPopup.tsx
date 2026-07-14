import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CalendarDays, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import campImg from "@/assets/camp.jpg";

// Simulated admin flag — flip to false to hide the popup entirely.
const ACTIVE_EVENT = {
  enabled: true,
  title: "Free Community Health Screening",
  date: "Sat, Aug 24, 2026",
  time: "8:00 AM – 2:00 PM",
  location: "Downtown Community Center",
  tag: "Free Health Camp",
  image: campImg,
};

export function CampPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!ACTIVE_EVENT.enabled) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("camp-popup-dismissed")) return;
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem("camp-popup-dismissed", "1");
    } catch {}
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-[100] bg-ink/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="camp-popup-title"
            className="fixed inset-x-4 bottom-4 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[101] max-w-lg sm:mx-auto bg-card rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            <button
              onClick={dismiss}
              aria-label="Close event popup"
              className="absolute top-3 right-3 z-10 size-9 rounded-full bg-background/80 backdrop-blur grid place-items-center hover:bg-background"
            >
              <X className="size-4" />
            </button>
            <img
              src={ACTIVE_EVENT.image}
              alt="Community health event"
              width={1024}
              height={640}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-6">
              <span className="inline-block text-[10px] uppercase tracking-widest font-bold text-brand bg-brand-soft px-2 py-1 rounded-full mb-3">
                {ACTIVE_EVENT.tag}
              </span>
              <h3 id="camp-popup-title" className="text-xl font-semibold mb-3">
                {ACTIVE_EVENT.title}
              </h3>
              <div className="space-y-1.5 text-sm text-muted-foreground mb-5">
                <div className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-brand" /> {ACTIVE_EVENT.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-brand" /> {ACTIVE_EVENT.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-brand" /> {ACTIVE_EVENT.location}
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-brand hover:bg-brand-dark rounded-xl"
                  onClick={() => {
                    toast.success("Registered!", {
                      description: "We'll email you event details shortly.",
                    });
                    dismiss();
                  }}
                >
                  Register Free
                </Button>
                <Button variant="outline" className="rounded-xl" onClick={dismiss}>
                  Maybe Later
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}