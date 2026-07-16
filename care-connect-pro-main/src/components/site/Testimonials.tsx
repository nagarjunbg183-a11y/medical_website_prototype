import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, MessageSquarePlus, ThumbsUp, User } from "lucide-react";
import { Section } from "./Section";

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date?: string;
  likes: number;
}

const staticReviews: Review[] = [
  { id: "static-1", name: "Priya M.", role: "Patient · Cardiology", rating: 5, text: "Dr. Ananya took the time to explain every test. I've never felt more informed about my own heart health.", likes: 24, date: "Verified" },
  { id: "static-2", name: "Deepak K.", role: "Patient · Pediatrics", rating: 5, text: "Our kids actually look forward to visits. The clinic is bright, calm, and the staff are wonderful with children.", likes: 18, date: "Verified" },
  { id: "static-3", name: "Aisha R.", role: "Patient · General Practice", rating: 5, text: "Same-day appointments, seamless pharmacy delivery — LuminaHealth has genuinely changed how I access care.", likes: 31, date: "Verified" },
  { id: "static-4", name: "Kiran L.", role: "Patient · Orthopedics", rating: 4, text: "Post-op recovery was tracked closely and my questions were answered within the hour, every single time.", likes: 12, date: "Verified" },
  { id: "static-5", name: "Gauri H.", role: "Patient · Neurology", rating: 5, text: "The diagnostic accuracy and follow-through here is best-in-class. I recommend LuminaHealth to everyone.", likes: 45, date: "Verified" },
  { id: "static-6", name: "Rohan P.", role: "Patient · Emergency", rating: 5, text: "Triaged in under 4 minutes on a Sunday night. This is what a modern ER should look like.", likes: 52, date: "Verified" },
];

const STORAGE_KEY = "careconnect_user_reviews";

function getStoredReviews(): Review[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveReviews(reviews: Review[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange?: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  const interactive = !!onChange;

  return (
    <div className="flex gap-1" aria-label="Star rating">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < (hovered || value);
        return (
          <button
            key={i}
            type={interactive ? "button" : undefined}
            onClick={() => onChange?.(i + 1)}
            onMouseEnter={() => interactive && setHovered(i + 1)}
            onMouseLeave={() => interactive && setHovered(0)}
            aria-label={`${i + 1} star`}
            className={interactive ? "cursor-pointer" : "cursor-default"}
            style={{ background: "none", border: "none", padding: "2px" }}
          >
            <Star
              className={`size-5 sm:size-6 transition-colors ${
                filled
                  ? "fill-brand text-brand"
                  : "text-border fill-transparent"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

export function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    setReviews(getStoredReviews());
    const liked = localStorage.getItem("careconnect_liked_reviews");
    if (liked) setLikedIds(new Set(JSON.parse(liked)));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError("Please enter your name.");
    if (rating === 0) return setError("Please select a star rating.");
    if (text.trim().length < 10)
      return setError("Please write at least 10 characters.");

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      role: role.trim() || "Visitor",
      rating,
      text: text.trim(),
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      likes: 0,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    saveReviews(updated);
    setSubmitted(true);
    setName("");
    setRole("");
    setRating(0);
    setText("");
    setError("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleLike = (id: string) => {
    if (likedIds.has(id)) return;
    
    // Update local state first
    const updateLikes = (arr: Review[]) => 
      arr.map((r) => r.id === id ? { ...r, likes: r.likes + 1 } : r);

    const isDynamic = reviews.some(r => r.id === id);
    if (isDynamic) {
        const updated = updateLikes(reviews);
        setReviews(updated);
        saveReviews(updated);
    } else {
        // Technically static likes aren't saved to local storage, we just mark it as liked visually by re-rendering component state, but since static list is constant, we need a separate state or just rely on 'likedIds' for UI toggle if we want persistence of likes on static items.
        // For simplicity, we just add it to likedIds so button updates.
    }

    const newLiked = new Set(likedIds).add(id);
    setLikedIds(newLiked);
    localStorage.setItem(
      "careconnect_liked_reviews",
      JSON.stringify([...newLiked])
    );
  };

  const allReviews = [...reviews, ...staticReviews];

  return (
    <Section
      id="testimonials"
      className="bg-card"
      eyebrow="Testimonials"
      title="Trusted by 15,000+ patients."
      subtitle="Real reviews from real patients across our specialties. Share your experience with us!"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        <AnimatePresence>
          {allReviews.map((r, i) => {
            // Need a derived likes count for static ones, as state updates won't change staticReviews array directly
            const displayLikes = r.likes + (likedIds.has(r.id) && staticReviews.some(sr => sr.id === r.id) ? 1 : 0);

            return (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
                className="p-6 rounded-2xl bg-background border border-border hover:shadow-[var(--shadow-soft)] transition-all flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
                      <User className="size-4 text-brand" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink">
                        {r.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {r.role}
                      </div>
                    </div>
                  </div>
                  {r.date && (
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap bg-muted px-2 py-0.5 rounded-full">
                      {r.date}
                    </span>
                  )}
                </div>

                <StarRating value={r.rating} />

                <p className="text-sm text-ink leading-relaxed flex-1">
                  "{r.text}"
                </p>

                <button
                  onClick={() => handleLike(r.id)}
                  id={`like-review-${r.id}`}
                  aria-label="Like this review"
                  className={`flex items-center gap-1.5 text-xs font-medium mt-1 transition-colors w-fit px-3 py-1.5 rounded-lg ${
                    likedIds.has(r.id)
                      ? "bg-brand-soft text-brand cursor-default"
                      : "bg-muted text-muted-foreground hover:bg-brand-soft hover:text-brand cursor-pointer"
                  }`}
                >
                  <ThumbsUp className="size-3.5" />
                  Helpful ({displayLikes})
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-[var(--shadow-soft)]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-brand-soft">
              <MessageSquarePlus className="size-5 text-brand" />
            </div>
            <h3 className="text-lg font-semibold text-ink">Write a Review</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="review-name"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  Your Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="review-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ravi Kumar"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-ink text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand transition"
                />
              </div>
              <div>
                <label
                  htmlFor="review-role"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  Your Role / Department
                </label>
                <input
                  id="review-role"
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Patient · Cardiology"
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-ink text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                Your Rating <span className="text-destructive">*</span>
              </label>
              <StarRating value={rating} onChange={setRating} />
            </div>

            <div>
              <label
                htmlFor="review-text"
                className="block text-sm font-medium text-ink mb-1.5"
              >
                Your Review / Suggestion{" "}
                <span className="text-destructive">*</span>
              </label>
              <textarea
                id="review-text"
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Tell us about your experience or share a suggestion..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-ink text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand transition resize-none"
              />
              <div className="text-xs text-muted-foreground mt-1 text-right">
                {text.length} characters
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-sm text-destructive bg-destructive/10 px-4 py-2 rounded-lg"
                >
                  {error}
                </motion.p>
              )}
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-sm text-brand bg-brand-soft px-4 py-2 rounded-lg font-medium"
                >
                  ✅ Thank you! Your review has been posted.
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              id="submit-review-btn"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-primary-foreground font-semibold text-sm hover:bg-brand-dark active:scale-95 transition-all duration-200 shadow-md"
            >
              <Send className="size-4" />
              Submit Review
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}