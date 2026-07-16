import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 md:py-24 scroll-mt-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}
          >
            {eyebrow && (
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand mb-3">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}