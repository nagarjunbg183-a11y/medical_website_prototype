import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Calendar, Loader2 } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { doctors } from "./Doctors";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(80),
  mobile: z.string().trim().regex(/^[+()\d\s-]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Invalid email").max(200),
  doctor: z.string().min(1, "Select a doctor"),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
  reason: z.string().trim().min(4, "Give a brief reason").max(500),
});

type FormValues = z.infer<typeof schema>;

export function AppointmentForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (v: FormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Appointment requested", {
      description: `We'll confirm your visit with ${v.doctor} on ${v.date} at ${v.time}.`,
    });
    reset();
  };

  return (
    <Section id="appointment" className="bg-brand-soft/40">
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand mb-3 block">
            Book Appointment
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-4">
            Reserve your visit in under a minute.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Pick your specialist, preferred time, and we'll confirm within 15
            minutes.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              "WhatsApp + Call confirmation",
              "Reschedule up to 2 hours prior",
              "Reminders via WhatsApp and call",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-brand" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-3 bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-[var(--shadow-soft)] grid sm:grid-cols-2 gap-4"
          noValidate
        >
          <Field label="Full Name" error={errors.name?.message}>
            <Input placeholder="Aditi Sharma" {...register("name")} />
          </Field>
          <Field label="Mobile" error={errors.mobile?.message}>
            <Input placeholder="+91 98765 43210" {...register("mobile")} />
          </Field>
          <Field label="Email" error={errors.email?.message} className="sm:col-span-2">
            <Input type="email" placeholder="aditi@example.in" {...register("email")} />
          </Field>
          <Field label="Doctor" error={errors.doctor?.message}>
            <select
              {...register("doctor")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select specialist
              </option>
              {doctors.map((d) => (
                <option key={d.name} value={d.name}>
                  {d.name} — {d.specialization}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Reason for visit" error={errors.reason?.message}>
            <Input placeholder="Annual checkup" {...register("reason")} />
          </Field>
          <Field label="Preferred Date" error={errors.date?.message}>
            <Input type="date" {...register("date")} />
          </Field>
          <Field label="Preferred Time" error={errors.time?.message}>
            <Input type="time" {...register("time")} />
          </Field>
          <div className="sm:col-span-2">
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full h-12 rounded-xl bg-ink hover:bg-ink/90 text-background font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Requesting…
                </>
              ) : (
                <>
                  <Calendar className="size-4" /> Confirm Request
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 inline-block">
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive mt-1.5">{error}</p>}
    </div>
  );
}

// keep Textarea import referenced (used in MedicineForm sibling)
export const _t = Textarea;