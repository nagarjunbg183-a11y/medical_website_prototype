import { Heart, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const groups = [
  {
    title: "Practice",
    links: [
      { label: "About", href: "#about" },
      { label: "Doctors", href: "#doctors" },
      { label: "Services", href: "#services" },
      { label: "Health Camps", href: "#camps" },
    ],
  },
  {
    title: "Patients",
    links: [
      { label: "Book Appointment", href: "#appointment" },
      { label: "Order Medicines", href: "#medicines" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <span className="grid place-items-center size-9 rounded-xl bg-brand text-primary-foreground">
                <Heart className="size-5" strokeWidth={2.5} />
              </span>
              <span className="font-bold tracking-tight text-lg">
                <span className="text-brand">LUMINA</span>HEALTH
              </span>
            </div>
            <p className="text-sm text-background/60 max-w-sm leading-relaxed mb-6">
              Setting new standards in healthcare through innovation, ethics,
              and compassionate care — since 2000.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="size-9 grid place-items-center rounded-full bg-background/10 hover:bg-brand transition-colors"
                >
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <h6 className="text-xs font-bold uppercase tracking-widest mb-5">
                {g.title}
              </h6>
              <ul className="space-y-3 text-sm text-background/60">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-brand transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/50">
          <span>© {new Date().getFullYear()} LuminaHealth Medical Group. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-background">Privacy Policy</a>
            <a href="#" className="hover:text-background">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-background">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}