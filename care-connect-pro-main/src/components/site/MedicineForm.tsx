import { useMemo, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Upload, Pill, Loader2, Search, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { _t as Textarea } from "./AppointmentForm";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(80),
  mobile: z.string().trim().regex(/^[+()\d\s-]{7,20}$/, "Enter a valid phone number"),
  address: z.string().trim().min(4, "Address required").max(200),
  items: z.array(z.object({ medicine: z.string(), quantity: z.number() })),
  description: z.string().optional(),
  delivery: z.enum(["delivery", "pickup"]),
}).refine(data => data.items.length > 0 || (data.description && data.description.trim().length > 0), {
  message: "Please add medicines to your list or provide a prescription description.",
  path: ["description"],
});

type Values = z.infer<typeof schema>;

const SUGGESTED_MEDICINES = [
  "Dolo 650",
  "Dolo 650 Advance",
  "Crocin Pain Relief",
  "Crocin Advance",
  "Calpol 500",
  "Calpol 650",
  "Paracetamol 500mg",
  "Digene Tablets",
  "Digene Gel",
  "Eno Fruit Salt",
  "Pudin Hara Pearls",
  "Volini Pain Relief Gel",
  "Moov Pain Relief Cream",
  "Vicks Action 500",
  "Benadryl Cough Syrup",
  "Honitus Cough Syrup",
  "Corex LS",
  "Allegra 120mg",
  "Cetirizine 10mg",
  "Okacet",
  "Cheston Cold",
  "Sinarest",
  "Shelcal 500",
  "Supradyn Daily",
  "Zincovit Tablets",
  "Vitamin D3 60K",
  "Vitamin B12 Supplements",
  "Azithromycin 500mg",
  "Amoxicillin 500mg",
  "Augmentin 625 Duo",
  "Metformin 500mg",
  "Glycomet 500",
  "Aspirin",
  "Ecosprin 75",
  "Ibuprofen 400mg",
  "Combiflam",
  "Omeprazole 20mg",
  "Pantoprazole 40mg",
  "Pan 40",
  "Omez",
  "Loratadine",
  "Prednisone",
  "Atorvastatin 10mg",
  "Telmisartan 40mg",
  "Amlodipine 5mg",
  "Losartan",
  "Aciloc 150",
  "Gelusil",
  "Zifi 200",
  "Taxim-O 200",
  "Meftal Spas",
  "Cyclopam",
  "Saridon",
  "Voveran",
  "Thyronorm 50mcg",
  "Eltroxin 50mcg",
  "Neurobion Forte",
  "Becosules",
  "ORS (Oral Rehydration Salts)",
  "Betadine Ointment",
  "Soframycin",
  "Ecosprin AV 75",
  "Janumet 50/500",
  "Galvus Met 50/500",
  "Ascoril LS",
  "Alex Cough Syrup",
  "Montair LC",
  "Telekast L",
  "Drotin DS",
  "Ultracet",
  "Zerodol SP",
];

export function MedicineForm() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [confirmingData, setConfirmingData] = useState<Values | null>(null);
  
  // Temporary state for the search bar before adding to cart
  const [tempMed, setTempMed] = useState("");
  const [tempQty, setTempQty] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { delivery: "delivery", items: [], description: "" },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  const filteredSuggestions = useMemo(() => {
    if (!tempMed.trim()) return SUGGESTED_MEDICINES.slice(0, 10); // Show top 10 as default suggestions
    const query = tempMed.trim().toLowerCase();
    const startsWith = SUGGESTED_MEDICINES.filter((medicine) =>
      medicine.toLowerCase().startsWith(query)
    );
    const contains = SUGGESTED_MEDICINES.filter((medicine) =>
      medicine.toLowerCase().includes(query) && !medicine.toLowerCase().startsWith(query)
    );
    return [...startsWith, ...contains];
  }, [tempMed]);

  const showFilteredSuggestions = showSuggestions;

  const handleAddItem = () => {
    if (!tempMed.trim()) {
      toast.error("Please enter a medicine name.");
      return;
    }
    append({ medicine: tempMed.trim(), quantity: tempQty });
    toast.success(`${tempMed} added to list.`);
    setTempMed("");
    setTempQty(1);
    setShowSuggestions(false);
  };

  const fetchAddressFromCoords = async (latitude: number, longitude: number) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&accept-language=en`,
      { headers: { "Accept": "application/json" } }
    );
    if (!response.ok) throw new Error("Reverse geocoding failed");
    const data = await response.json();
    return data.display_name ?? `${latitude}, ${longitude}`;
  };

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const address = await fetchAddressFromCoords(latitude, longitude);
          setValue("address", address, { shouldValidate: true });
          toast.success("Location set from current position.");
        } catch (error) {
          console.error(error);
          toast.error("Unable to fetch address from location.");
        } finally {
          setLocationLoading(false);
        }
      },
      (error) => {
        console.error(error);
        toast.error("Unable to retrieve your location.");
        setLocationLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
    if (selected && fields.length === 0) {
      toast.info("Prescription uploaded! You can describe it below or search for medicines to add to your list.", { duration: 5000 });
    }
  };

  const onSubmit = (v: Values) => {
    setConfirmingData(v);
  };

  const handleConfirmOrder = async () => {
    if (!confirmingData) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Your order is confirmed ok", {
      description: `Your order has been confirmed for ${confirmingData.delivery === "delivery" ? "home delivery" : "clinic pickup"}.`,
    });
    reset();
    setFile(null);
    setConfirmingData(null);
  };

  return (
    <Section
      id="medicines"
      eyebrow="Pharmacy"
      title="Order medicines with 2-hour delivery."
      subtitle="Upload a prescription or search directly — our licensed pharmacists verify every order."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-3 gap-6" noValidate>
        {/* Left Column: Details, Search, Upload */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card p-6 sm:p-8 rounded-3xl border border-border shadow-[var(--shadow-soft)] grid sm:grid-cols-2 gap-4">
            <Field label="Patient Name" error={errors.name?.message}>
              <Input placeholder="Ravi Kumar" {...register("name")} />
            </Field>
            
            <Field label="Mobile" error={errors.mobile?.message}>
              <Input placeholder="+91 98765 43210" {...register("mobile")} />
            </Field>
            
            <Field label="Delivery Address" error={errors.address?.message} className="sm:col-span-2">
              <div className="flex gap-2">
                <Input
                  className="flex-1"
                  placeholder="No. 12, 100 Feet Road, Indiranagar, Bengaluru"
                  {...register("address")}
                />
                <button
                  type="button"
                  onClick={useCurrentLocation}
                  disabled={locationLoading}
                  className="whitespace-nowrap rounded-md bg-brand-soft/50 px-3 py-2 text-xs font-semibold text-brand transition hover:bg-brand-soft disabled:cursor-not-allowed disabled:opacity-60 border border-brand/20"
                >
                  {locationLoading ? "Locating…" : "Use my location"}
                </button>
              </div>
            </Field>
            
            <Field label="Fulfillment" className="sm:col-span-2">
              <div className="flex gap-6 h-10 items-center">
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-brand transition-colors">
                  <input type="radio" value="delivery" className="accent-brand size-4" {...register("delivery")} />
                  Home Delivery
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-brand transition-colors">
                  <input type="radio" value="pickup" className="accent-brand size-4" {...register("delivery")} />
                  Clinic Pickup
                </label>
              </div>
            </Field>

            <div className="sm:col-span-2 border-t border-border pt-4 mt-2">
              <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                Search & Add Medicine
              </Label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    className="pl-9 w-full"
                    placeholder="Search paracetamol, vitamin D…"
                    value={tempMed}
                    onChange={(e) => setTempMed(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddItem();
                      }
                    }}
                  />
                  {showFilteredSuggestions && (
                    <div className="absolute top-full left-0 right-0 z-20 mt-2 rounded-xl border border-border bg-card p-2 shadow-[var(--shadow-soft)] max-h-56 overflow-y-auto">
                      {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((medicine) => (
                          <button
                            type="button"
                            key={medicine}
                            onClick={() => {
                              setTempMed(medicine);
                              setShowSuggestions(false);
                            }}
                            className="w-full text-left rounded-lg px-4 py-2.5 text-sm font-medium text-ink hover:bg-brand-soft hover:text-brand-dark transition-colors flex items-center gap-2"
                          >
                            <Pill className="size-3.5 opacity-50" />
                            {medicine}
                          </button>
                        ))
                      ) : (
                        <p className="px-4 py-3 text-sm text-muted-foreground text-center italic">No matching medicines found.</p>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input 
                    type="number" 
                    min={1} 
                    max={50} 
                    value={tempQty}
                    onChange={(e) => setTempQty(parseInt(e.target.value) || 1)}
                    className="w-20"
                  />
                  <Button type="button" onClick={handleAddItem} variant="secondary" className="gap-1 px-4">
                    <Plus className="size-4" /> Add
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-3xl border border-border shadow-[var(--shadow-soft)] overflow-hidden">
            <motion.label
              whileHover={{ backgroundColor: "var(--brand-soft)" }}
              className="p-8 cursor-pointer flex flex-col justify-between transition-colors border-b border-border/50"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Upload className="size-5 text-brand" />
                  <h3 className="text-lg font-semibold text-brand">Prescription Upload (Optional)</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Snap or upload your doctor's prescription — we'll match and verify.
                </p>
              </div>
              <div className="mt-4">
                <div className="border border-dashed border-brand/40 bg-background rounded-xl p-3 text-center text-xs font-medium text-brand uppercase tracking-widest">
                  {file ? file.name : "Choose File (PNG, JPG, PDF)"}
                </div>
              </div>
              <input
                type="file"
                accept="image/*,.pdf"
                className="sr-only"
                onChange={handleFileChange}
              />
            </motion.label>
            
            <div className="p-6 bg-background">
              <Field label="Prescription Description / Notes" error={errors.description?.message}>
                <Textarea 
                  placeholder="E.g. Please provide 2 strips of the first medicine in the prescription..."
                  className="resize-none min-h-[80px]"
                  {...register("description")}
                />
              </Field>
            </div>
          </div>
        </div>

        {/* Right Column: Selected Medicines Cart */}
        <div className="bg-card p-6 rounded-3xl border border-border shadow-md flex flex-col min-h-[400px]">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-1">
            <ShoppingBag className="size-5 text-brand" /> Your List
          </h3>
          <p className="text-xs text-muted-foreground mb-6">Review your medicines before ordering</p>
          
          <div className="flex-1 overflow-y-auto mb-4 border border-border/50 rounded-xl p-3 bg-surface/50">
            {fields.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-70 p-4 text-center">
                <Pill className="size-8 mb-2" />
                <p className="text-sm font-medium">List is empty</p>
                <p className="text-xs mt-1">Search and add medicines, or just upload a prescription.</p>
              </div>
            ) : (
              <ul className="space-y-2">
                <AnimatePresence>
                  {fields.map((field, index) => (
                    <motion.li
                      key={field.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center justify-between p-3 bg-background border border-border rounded-lg group"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-sm truncate">{field.medicine}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Qty: {field.quantity}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}
          </div>

          {errors.description && fields.length === 0 && (
            <p className="text-sm text-destructive mb-4 p-3 bg-destructive/10 rounded-lg border border-destructive/20 font-medium">
              {errors.description.message}
            </p>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-brand hover:bg-brand-dark font-bold text-base shadow-lg shadow-brand/20"
          >
            {loading ? (
              <>
                <Loader2 className="size-5 animate-spin mr-2" /> Placing order…
              </>
            ) : (
              "Place Order"
            )}
          </Button>
        </div>
      </form>
      
      <AlertDialog open={!!confirmingData} onOpenChange={(open) => !open && setConfirmingData(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Order Details</AlertDialogTitle>
            <AlertDialogDescription>
              Is every medicine included in your list? Please verify before placing the order.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmOrder} className="bg-brand hover:bg-brand-dark">
              Confirm Order
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
      <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive mt-1.5 font-medium">{error}</p>}
    </div>
  );
}