import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, "Please enter your phone number or email")
    .refine((val) => {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      const isPhone = /^[+()\d\s-]{7,20}$/.test(val);
      return isEmail || isPhone;
    }, "Please enter a valid email or phone number"),
});

const signupSchema = loginSchema.extend({
  name: z.string().trim().min(2, "Please enter your full name").max(50),
});

type LoginValues = z.infer<typeof loginSchema>;
type SignupValues = z.infer<typeof signupSchema>;

export function LoginModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [step, setStep] = useState<"identifier" | "otp">("identifier");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    reset: resetLogin,
    formState: { errors: loginErrors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    reset: resetSignup,
    formState: { errors: signupErrors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSendOtp = async (data: LoginValues | SignupValues) => {
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast.success(`OTP sent to ${data.identifier}`);
    setStep("otp");
  };

  const onVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) {
      toast.error("Please enter a valid OTP");
      return;
    }
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    toast.success(mode === "login" ? "Successfully logged in!" : "Account created successfully!");
    setOpen(false);
    
    // Reset state after closing
    setTimeout(() => {
      setStep("identifier");
      setMode("login");
      resetLogin();
      resetSignup();
      setOtp("");
    }, 300);
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    resetLogin();
    resetSignup();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-none shadow-2xl rounded-3xl">
        <div className="p-8 pb-6 bg-gradient-to-b from-brand-soft/50 to-transparent">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {step === "otp" ? "Verify OTP" : mode === "login" ? "Welcome Back" : "Create an Account"}
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground mt-2">
              {step === "otp" 
                ? "Enter the OTP sent to your device to verify your identity."
                : mode === "login"
                  ? "Sign in to access your appointments and medicine orders." 
                  : "Join us to easily book consultations and order medicines."}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-8 pb-8">
          {step === "identifier" ? (
            mode === "login" ? (
              <form onSubmit={handleSubmitLogin(onSendOtp)} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="login-identifier" className="text-sm font-semibold text-ink">
                    Phone Number or Email ID
                  </Label>
                  <div className="relative">
                    <Input
                      id="login-identifier"
                      placeholder="Enter email or phone"
                      className={`pl-4 h-12 rounded-xl border-border bg-background focus-visible:ring-brand ${
                        loginErrors.identifier ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                      {...registerLogin("identifier")}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1.5 text-muted-foreground/50">
                      <Mail className="size-4" />
                      <span className="text-xs">/</span>
                      <Phone className="size-4" />
                    </div>
                  </div>
                  {loginErrors.identifier && (
                    <p className="text-xs text-destructive font-medium mt-1">
                      {loginErrors.identifier.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-brand hover:bg-brand-dark text-base font-semibold shadow-lg shadow-brand/20 transition-all"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-5 animate-spin mr-2" /> Sending OTP...
                    </>
                  ) : (
                    "Continue"
                  )}
                </Button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground">
                    New to LuminaHealth?{" "}
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="font-semibold text-brand hover:text-brand-dark transition-colors"
                    >
                      Create an account
                    </button>
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmitSignup(onSendOtp)} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="text-sm font-semibold text-ink">
                    Full Name
                  </Label>
                  <div className="relative">
                    <Input
                      id="signup-name"
                      placeholder="Enter your full name"
                      className={`pl-4 h-12 rounded-xl border-border bg-background focus-visible:ring-brand ${
                        signupErrors.name ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                      {...registerSignup("name")}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50">
                      <User className="size-4" />
                    </div>
                  </div>
                  {signupErrors.name && (
                    <p className="text-xs text-destructive font-medium mt-1">
                      {signupErrors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-identifier" className="text-sm font-semibold text-ink">
                    Phone Number or Email ID
                  </Label>
                  <div className="relative">
                    <Input
                      id="signup-identifier"
                      placeholder="Enter email or phone"
                      className={`pl-4 h-12 rounded-xl border-border bg-background focus-visible:ring-brand ${
                        signupErrors.identifier ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                      {...registerSignup("identifier")}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1.5 text-muted-foreground/50">
                      <Mail className="size-4" />
                      <span className="text-xs">/</span>
                      <Phone className="size-4" />
                    </div>
                  </div>
                  {signupErrors.identifier && (
                    <p className="text-xs text-destructive font-medium mt-1">
                      {signupErrors.identifier.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-brand hover:bg-brand-dark text-base font-semibold shadow-lg shadow-brand/20 transition-all"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="size-5 animate-spin mr-2" /> Sending OTP...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="font-semibold text-brand hover:text-brand-dark transition-colors"
                    >
                      Log in
                    </button>
                  </p>
                </div>
              </form>
            )
          ) : (
            <form onSubmit={onVerifyOtp} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-sm font-semibold text-ink">
                  Enter OTP
                </Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  className="h-12 rounded-xl border-border text-center text-lg tracking-widest font-medium"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-xl bg-brand hover:bg-brand-dark text-base font-semibold shadow-lg shadow-brand/20 transition-all"
                disabled={loading || otp.length < 4}
              >
                {loading ? (
                  <>
                    <Loader2 className="size-5 animate-spin mr-2" /> Verifying...
                  </>
                ) : (
                  "Verify & Continue"
                )}
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep("identifier")}
                  className="text-sm text-muted-foreground hover:text-brand font-medium transition-colors"
                >
                  Change Email or Phone
                </button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
