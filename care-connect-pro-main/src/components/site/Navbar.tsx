import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginModal } from "./LoginModal";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#doctors", label: "Doctors" },
  { href: "#services", label: "Services" },
  { href: "#medicines", label: "Medicines" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60"
          : "bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 shrink-0" aria-label="LuminaHealth home">
          <span className="grid place-items-center size-9 rounded-xl bg-brand text-primary-foreground">
            <Heart className="size-5" strokeWidth={2.5} />
          </span>
          <span className="font-bold tracking-tight text-lg">
            <span className="text-brand">LUMINA</span>
            <span className="text-ink">HEALTH</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                if (l.href.startsWith("#")) {
                  e.preventDefault();
                  const id = l.href.slice(1);
                  const el = document.getElementById(id);
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="hover:text-brand transition-colors story-link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LoginModal>
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex rounded-full px-5 h-10 font-semibold text-brand hover:bg-brand-soft hover:text-brand-dark transition-colors">
              Log In
            </Button>
          </LoginModal>
          <Button asChild size="sm" className="hidden sm:inline-flex rounded-full px-5 h-10 bg-brand hover:bg-brand-dark text-primary-foreground shadow-sm">
            <a
              href="#appointment"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("appointment");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Book Consultation
            </a>
          </Button>
         <Button asChild size="sm" className="hidden sm:inline-flex rounded-full px-5 h-10 bg-brand hover:bg-brand-dark text-primary-foreground shadow-sm">
            <a
              href="#camps"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("camps");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Camp Details
            </a>
          </Button>
          <button
            className="lg:hidden grid place-items-center size-10 rounded-lg border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <nav className="px-4 py-4 grid grid-cols-2 gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    if (l.href.startsWith("#")) {
                      e.preventDefault();
                      const id = l.href.slice(1);
                      const el = document.getElementById(id);
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    setOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-ink hover:bg-brand-soft"
                >
                  {l.label}
                </a>
              ))}
              <LoginModal>
                <Button variant="outline" className="col-span-2 mt-4 rounded-full h-11 border-brand/30 text-brand hover:bg-brand-soft hover:text-brand-dark transition-colors font-semibold">
                  Log In
                </Button>
              </LoginModal>
              <Button asChild className="col-span-2 mt-2 bg-brand hover:bg-brand-dark rounded-full h-11">
                <a
                  href="#appointment"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("appointment");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    setOpen(false);
                  }}
                >
                  Book Consultation
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}