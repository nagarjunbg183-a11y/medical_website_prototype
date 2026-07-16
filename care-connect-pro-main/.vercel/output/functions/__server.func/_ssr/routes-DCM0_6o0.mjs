import { o as __toESM } from "../_runtime.mjs";
import { at as require_react, n as useFieldArray, r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, p as Slot, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { A as HeartPulse, B as Baby, C as Menu, D as Linkedin, E as LoaderCircle, F as ChevronDown, H as Activity, I as Calendar, L as CalendarDays, M as Facebook, N as Eye, O as Instagram, P as Clock, R as Brain, S as MessageCircle, T as Mail, V as Award, _ as Pill, a as Upload, b as Microscope, c as ThumbsUp, d as Star, f as ShoppingBag, g as Plus, h as Search, i as User, j as GraduationCap, k as Heart, l as Target, m as Send, n as X, o as Twitter, p as ShieldCheck, r as Users, s as Trash2, t as Youtube, u as Stethoscope, v as Phone, w as MapPin, x as MessageSquarePlus, y as Navigation, z as Bone } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as string, i as object, n as array, r as number, t as _enum } from "../_libs/zod.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { a as Overlay2, c as Title2, d as DialogContent$1, f as DialogDescription$1, g as DialogTrigger$1, h as DialogTitle$1, i as Description2, l as Dialog$1, m as DialogPortal$1, n as Cancel, o as Portal2, p as DialogOverlay$1, r as Content2$1, s as Root2$1, t as Action, u as DialogClose } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DCM0_6o0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var loginSchema = object({ identifier: string().trim().min(1, "Please enter your phone number or email").refine((val) => {
	const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
	const isPhone = /^[+()\d\s-]{7,20}$/.test(val);
	return isEmail || isPhone;
}, "Please enter a valid email or phone number") });
var signupSchema = loginSchema.extend({ name: string().trim().min(2, "Please enter your full name").max(50) });
function LoginModal({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [mode, setMode] = (0, import_react.useState)("login");
	const [step, setStep] = (0, import_react.useState)("identifier");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [otp, setOtp] = (0, import_react.useState)("");
	const { register: registerLogin, handleSubmit: handleSubmitLogin, reset: resetLogin, formState: { errors: loginErrors } } = useForm({ resolver: u(loginSchema) });
	const { register: registerSignup, handleSubmit: handleSubmitSignup, reset: resetSignup, formState: { errors: signupErrors } } = useForm({ resolver: u(signupSchema) });
	const onSendOtp = async (data) => {
		setLoading(true);
		await new Promise((r) => setTimeout(r, 1e3));
		setLoading(false);
		toast.success(`OTP sent to ${data.identifier}`);
		setStep("otp");
	};
	const onVerifyOtp = async (e) => {
		e.preventDefault();
		if (otp.length < 4) {
			toast.error("Please enter a valid OTP");
			return;
		}
		setLoading(true);
		await new Promise((r) => setTimeout(r, 1e3));
		setLoading(false);
		toast.success(mode === "login" ? "Successfully logged in!" : "Account created successfully!");
		setOpen(false);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md p-0 overflow-hidden border-none shadow-2xl rounded-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-8 pb-6 bg-gradient-to-b from-brand-soft/50 to-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-2xl font-bold text-center",
					children: step === "otp" ? "Verify OTP" : mode === "login" ? "Welcome Back" : "Create an Account"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-center text-muted-foreground mt-2",
					children: step === "otp" ? "Enter the OTP sent to your device to verify your identity." : mode === "login" ? "Sign in to access your appointments and medicine orders." : "Join us to easily book consultations and order medicines."
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-8 pb-8",
				children: step === "identifier" ? mode === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmitLogin(onSendOtp),
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "login-identifier",
									className: "text-sm font-semibold text-ink",
									children: "Phone Number or Email ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "login-identifier",
										placeholder: "Enter email or phone",
										className: `pl-4 h-12 rounded-xl border-border bg-background focus-visible:ring-brand ${loginErrors.identifier ? "border-destructive focus-visible:ring-destructive" : ""}`,
										...registerLogin("identifier")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute right-3 top-1/2 -translate-y-1/2 flex gap-1.5 text-muted-foreground/50",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs",
												children: "/"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
										]
									})]
								}),
								loginErrors.identifier && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-destructive font-medium mt-1",
									children: loginErrors.identifier.message
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full h-12 rounded-xl bg-brand hover:bg-brand-dark text-base font-semibold shadow-lg shadow-brand/20 transition-all",
							disabled: loading,
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin mr-2" }), " Sending OTP..."] }) : "Continue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"New to LuminaHealth?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: toggleMode,
										className: "font-semibold text-brand hover:text-brand-dark transition-colors",
										children: "Create an account"
									})
								]
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmitSignup(onSendOtp),
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "signup-name",
									className: "text-sm font-semibold text-ink",
									children: "Full Name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "signup-name",
										placeholder: "Enter your full name",
										className: `pl-4 h-12 rounded-xl border-border bg-background focus-visible:ring-brand ${signupErrors.name ? "border-destructive focus-visible:ring-destructive" : ""}`,
										...registerSignup("name")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" })
									})]
								}),
								signupErrors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-destructive font-medium mt-1",
									children: signupErrors.name.message
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "signup-identifier",
									className: "text-sm font-semibold text-ink",
									children: "Phone Number or Email ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "signup-identifier",
										placeholder: "Enter email or phone",
										className: `pl-4 h-12 rounded-xl border-border bg-background focus-visible:ring-brand ${signupErrors.identifier ? "border-destructive focus-visible:ring-destructive" : ""}`,
										...registerSignup("identifier")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute right-3 top-1/2 -translate-y-1/2 flex gap-1.5 text-muted-foreground/50",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs",
												children: "/"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
										]
									})]
								}),
								signupErrors.identifier && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-destructive font-medium mt-1",
									children: signupErrors.identifier.message
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full h-12 rounded-xl bg-brand hover:bg-brand-dark text-base font-semibold shadow-lg shadow-brand/20 transition-all",
							disabled: loading,
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin mr-2" }), " Sending OTP..."] }) : "Create Account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"Already have an account?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: toggleMode,
										className: "font-semibold text-brand hover:text-brand-dark transition-colors",
										children: "Log in"
									})
								]
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: onVerifyOtp,
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "otp",
								className: "text-sm font-semibold text-ink",
								children: "Enter OTP"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "otp",
								type: "text",
								placeholder: "123456",
								maxLength: 6,
								value: otp,
								onChange: (e) => setOtp(e.target.value.replace(/\D/g, "")),
								className: "h-12 rounded-xl border-border text-center text-lg tracking-widest font-medium"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full h-12 rounded-xl bg-brand hover:bg-brand-dark text-base font-semibold shadow-lg shadow-brand/20 transition-all",
							disabled: loading || otp.length < 4,
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin mr-2" }), " Verifying..."] }) : "Verify & Continue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setStep("identifier"),
								className: "text-sm text-muted-foreground hover:text-brand font-medium transition-colors",
								children: "Change Email or Phone"
							})
						})
					]
				})
			})]
		})]
	});
}
var links = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#doctors",
		label: "Doctors"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#medicines",
		label: "Medicines"
	},
	{
		href: "#testimonials",
		label: "Reviews"
	},
	{
		href: "#leave-review",
		label: "Leave Review"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 w-full transition-all", scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-background/40 backdrop-blur-sm"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2 shrink-0",
					"aria-label": "LuminaHealth home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid place-items-center size-9 rounded-xl bg-brand text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "size-5",
							strokeWidth: 2.5
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold tracking-tight text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "LUMINA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: "HEALTH"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: (e) => {
							if (l.href.startsWith("#")) {
								e.preventDefault();
								const id = l.href.slice(1);
								document.getElementById(id)?.scrollIntoView({
									behavior: "smooth",
									block: "start"
								});
							}
						},
						className: "hover:text-brand transition-colors story-link",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginModal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							className: "hidden sm:inline-flex rounded-full px-5 h-10 font-semibold text-brand hover:bg-brand-soft hover:text-brand-dark transition-colors",
							children: "Log In"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex rounded-full px-5 h-10 bg-brand hover:bg-brand-dark text-primary-foreground shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#appointment",
								onClick: (e) => {
									e.preventDefault();
									document.getElementById("appointment")?.scrollIntoView({
										behavior: "smooth",
										block: "start"
									});
								},
								children: "Book Consultation"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "hidden sm:inline-flex rounded-full px-5 h-10 bg-brand hover:bg-brand-dark text-primary-foreground shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#camps",
								onClick: (e) => {
									e.preventDefault();
									document.getElementById("camps")?.scrollIntoView({
										behavior: "smooth",
										block: "start"
									});
								},
								children: "Camp Details"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden grid place-items-center size-10 rounded-lg border border-border",
							onClick: () => setOpen((v) => !v),
							"aria-label": "Toggle menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: { duration: .25 },
			className: "lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "px-4 py-4 grid grid-cols-2 gap-2",
				children: [
					links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: (e) => {
							if (l.href.startsWith("#")) {
								e.preventDefault();
								const id = l.href.slice(1);
								document.getElementById(id)?.scrollIntoView({
									behavior: "smooth",
									block: "start"
								});
							}
							setOpen(false);
						},
						className: "px-3 py-2 rounded-lg text-sm font-medium text-ink hover:bg-brand-soft",
						children: l.label
					}, l.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginModal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "col-span-2 mt-4 rounded-full h-11 border-brand/30 text-brand hover:bg-brand-soft hover:text-brand-dark transition-colors font-semibold",
						children: "Log In"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "col-span-2 mt-2 bg-brand hover:bg-brand-dark rounded-full h-11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#appointment",
							onClick: (e) => {
								e.preventDefault();
								document.getElementById("appointment")?.scrollIntoView({
									behavior: "smooth",
									block: "start"
								});
								setOpen(false);
							},
							children: "Book Consultation"
						})
					})
				]
			})
		}) })]
	});
}
var hero_clinic_default = "/assets/hero-clinic-DiA7DUuj.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative pt-10 pb-20 sm:py-24 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,var(--brand-soft)_0%,transparent_70%)]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block py-1.5 px-3 bg-brand-soft text-brand-dark text-xs font-bold rounded-full mb-6 tracking-wider uppercase",
						children: "Next-Gen Patient Care"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-balance mb-6",
						children: [
							"Precision medicine",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand",
								children: "tailored to you."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base sm:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed",
						children: "Combining world-class expertise with advanced diagnostic technology to deliver a seamless healthcare experience — from diagnosis to recovery."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "h-12 px-6 rounded-xl bg-ink text-background hover:bg-ink/90 hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#appointment",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" }), "Book Appointment"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "h-12 px-6 rounded-xl border-border hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#medicines",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { className: "size-4" }), "Order Medicines"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "destructive",
								className: "h-12 px-6 rounded-xl relative overflow-hidden hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:911",
									"aria-label": "Emergency",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -z-10 bg-destructive animate-pulse opacity-60" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
										"Emergency"
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-12 grid grid-cols-3 gap-6 max-w-md",
						children: [
							{
								n: "15k+",
								l: "Patients"
							},
							{
								n: "42",
								l: "Specialists"
							},
							{
								n: "24/7",
								l: "Support"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-2xl sm:text-3xl font-bold text-ink",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-[11px] uppercase tracking-widest text-muted-foreground mt-1",
							children: s.l
						})] }, s.l))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .96
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .7,
					delay: .1
				},
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_clinic_default,
							alt: "Bright modern medical clinic interior with natural light",
							width: 1200,
							height: 1500,
							className: "w-full aspect-[4/5] object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5,
							delay: .4
						},
						className: "absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card p-5 sm:p-6 rounded-2xl shadow-xl border border-border max-w-[220px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl font-bold text-brand",
							children: "98.4%"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted-foreground uppercase tracking-widest mt-1",
							children: "Patient Satisfaction"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: -20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .5,
							delay: .6
						},
						className: "absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-brand text-primary-foreground p-4 rounded-2xl shadow-xl max-w-[200px] hidden sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: "Accredited Since"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-bold mt-1",
							children: "1998"
						})]
					})
				]
			})]
		})]
	});
}
function Section({ id, eyebrow, title, subtitle, children, className, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("py-20 sm:py-24 scroll-mt-24", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6",
			children: [(eyebrow || title || subtitle) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .5 },
				className: cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center"),
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block text-xs font-bold uppercase tracking-widest text-brand mb-3",
						children: eyebrow
					}),
					title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl sm:text-4xl font-semibold tracking-tight text-balance",
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed",
						children: subtitle
					})
				]
			}), children]
		})
	});
}
var pillars = [
	{
		icon: Target,
		title: "Our Mission",
		body: "Deliver accessible, evidence-based healthcare that treats every patient with dignity and precision."
	},
	{
		icon: Eye,
		title: "Our Vision",
		body: "A world where world-class clinical care is a right — not a privilege — for every community we serve."
	},
	{
		icon: ShieldCheck,
		title: "Why Choose Us",
		body: "Board-certified specialists, transparent pricing, integrated pharmacy, and 24/7 emergency response."
	}
];
var stats = [
	{
		icon: Users,
		n: "15,000+",
		l: "Patients served"
	},
	{
		icon: Award,
		n: "25",
		l: "Years of excellence"
	},
	{
		icon: ShieldCheck,
		n: "42",
		l: "Expert doctors"
	},
	{
		icon: Clock,
		n: "24/7",
		l: "Emergency care"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "about",
		eyebrow: "About LuminaHealth",
		title: "A modern clinic built around you.",
		subtitle: "For 25 years, LuminaHealth has combined clinical rigor with a warmer, calmer patient experience. Our team spans cardiology, neurology, pediatrics, and general practice — under one roof.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-3 gap-6 mb-16",
			children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: i * .1
				},
				className: "p-8 rounded-2xl bg-card border border-border hover:border-brand/40 hover:shadow-[var(--shadow-soft)] transition-all",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-12 rounded-xl bg-brand-soft text-brand-dark grid place-items-center mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold mb-3",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground leading-relaxed",
						children: p.body
					})
				]
			}, p.title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-10 rounded-3xl bg-brand text-primary-foreground",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 10
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .4,
					delay: i * .08
				},
				className: "flex flex-col items-start gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-6 opacity-80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-3xl sm:text-4xl font-bold",
						children: s.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest opacity-80",
						children: s.l
					})
				]
			}, s.l))
		})]
	});
}
var services = [
	{
		icon: HeartPulse,
		title: "Cardiology",
		body: "Advanced cardiac screening and personalized heart-health management with continuous monitoring."
	},
	{
		icon: Brain,
		title: "Neurology",
		body: "Expert neurological care from headaches and sleep disorders to complex nervous-system treatments."
	},
	{
		icon: Baby,
		title: "Pediatrics",
		body: "Gentle, specialized care for the youngest members of your family in a nurturing environment."
	},
	{
		icon: Bone,
		title: "Orthopedics",
		body: "Joint, spine, and sports-injury care with minimally-invasive surgical options."
	},
	{
		icon: Stethoscope,
		title: "General Practice",
		body: "Same-day primary care visits, preventive checkups, and ongoing chronic-condition management."
	},
	{
		icon: Microscope,
		title: "Diagnostics",
		body: "In-house MRI, CT, ultrasound, and lab work with AI-assisted reporting within hours."
	},
	{
		icon: Eye,
		title: "Ophthalmology",
		body: "Comprehensive vision care, LASIK evaluations, and pediatric eye examinations."
	},
	{
		icon: Activity,
		title: "Emergency Care",
		body: "24/7 emergency response with rapid triage and direct connection to on-call specialists."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "services",
		className: "bg-card",
		eyebrow: "Services",
		title: "Comprehensive care under one roof.",
		subtitle: "Eight specialties, one seamless patient journey. Every service is coordinated by your primary care team.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
			children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-40px"
				},
				transition: {
					duration: .4,
					delay: i % 4 * .08
				},
				whileHover: { y: -4 },
				className: "p-6 rounded-2xl bg-background border border-border hover:border-brand/40 hover:shadow-[var(--shadow-soft)] transition-all group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-11 rounded-xl bg-brand-soft text-brand-dark grid place-items-center mb-5 group-hover:bg-brand group-hover:text-primary-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold mb-2",
						children: s.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground leading-relaxed",
						children: s.body
					})
				]
			}, s.title))
		})
	});
}
var doctors = [
	{
		name: "Dr. Ananya ",
		photo: "/assets/doctor-1-BWb-9QE7.jpg",
		qualification: "MD, DM (Cardiology)",
		specialization: "Chief Cardiologist",
		experience: 14,
		languages: [
			"English",
			"Hindi",
			"Kannada"
		],
		timings: "Mon–Fri • 9AM–5PM"
	},
	{
		name: "Dr. Aditya Dalavi ",
		photo: "/assets/doctor-2-gDbgdxcL.jpg",
		qualification: "MS, MCh (Neurosurgery)",
		specialization: "Neurosurgeon",
		experience: 18,
		timings: "Tue–Sat • 10AM–6PM"
	},
	{
		name: "Dr. Punya Gowda",
		photo: "/assets/doctor-3-WBYT7ODf.jpg",
		qualification: "MD (Pediatrics)",
		specialization: "Pediatrician",
		experience: 12,
		languages: [
			"English",
			"Gujarati",
			"Hindi"
		],
		timings: "Mon–Sat • 8AM–4PM"
	},
	{
		name: "Dr. Adishesha",
		photo: "/assets/doctor-4-DMca2z3B.jpg",
		qualification: "MD (General Medicine)",
		specialization: "General Physician",
		experience: 8,
		languages: [
			"English",
			"Malayalam",
			"Hindi"
		],
		timings: "Mon–Fri • 8AM–8PM"
	}
];
function Doctors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "doctors",
		eyebrow: "Our Specialists",
		title: "Meet the doctors caring for you.",
		subtitle: "Board-certified specialists with decades of combined experience — available in-clinic and via telemedicine.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
			children: doctors.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: i * .08
				},
				className: "group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-[var(--shadow-soft)] transition-all",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/5] overflow-hidden bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: d.photo,
						alt: `Portrait of ${d.name}`,
						loading: "lazy",
						width: 640,
						height: 800,
						className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-lg leading-tight",
							children: d.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-brand font-semibold uppercase tracking-wider mt-1",
							children: d.specialization
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-3.5 text-brand" }),
									d.qualification,
									" • ",
									d.experience,
									" yrs exp"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-brand" }), d.timings]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "w-full mt-5 rounded-lg bg-brand hover:bg-brand-dark",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#appointment",
								children: "Book Appointment"
							})
						})
					]
				})]
			}, d.name))
		})
	});
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var schema$1 = object({
	name: string().trim().min(2, "Name too short").max(80),
	mobile: string().trim().regex(/^[+()\d\s-]{7,20}$/, "Enter a valid phone number"),
	email: string().trim().email("Invalid email").max(200),
	doctor: string().min(1, "Select a doctor"),
	date: string().min(1, "Choose a date"),
	time: string().min(1, "Choose a time"),
	reason: string().trim().min(4, "Give a brief reason").max(500)
});
function AppointmentForm() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: u(schema$1) });
	const onSubmit = async (v) => {
		setLoading(true);
		await new Promise((r) => setTimeout(r, 900));
		setLoading(false);
		toast.success("Appointment requested", { description: `We'll confirm your visit with ${v.doctor} on ${v.date} at ${v.time}.` });
		reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "appointment",
		className: "bg-brand-soft/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-5 gap-10 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				className: "lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold uppercase tracking-widest text-brand mb-3 block",
						children: "Book Appointment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-4",
						children: "Reserve your visit in under a minute."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-relaxed mb-6",
						children: "Pick your specialist, preferred time, and we'll confirm within 15 minutes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 text-sm text-muted-foreground",
						children: [
							"WhatsApp + Call confirmation",
							"Reschedule up to 2 hours prior",
							"Reminders via WhatsApp and call"
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 rounded-full bg-brand" }), f]
						}, f))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: .1
				},
				onSubmit: handleSubmit(onSubmit),
				className: "lg:col-span-3 bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-[var(--shadow-soft)] grid sm:grid-cols-2 gap-4",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Full Name",
						error: errors.name?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Aditi Sharma",
							...register("name")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Mobile",
						error: errors.mobile?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "+91 98765 43210",
							...register("mobile")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Email",
						error: errors.email?.message,
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "email",
							placeholder: "aditi@example.in",
							...register("email")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Doctor",
						error: errors.doctor?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							...register("doctor"),
							className: "flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring outline-none",
							defaultValue: "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select specialist"
							}), doctors.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: d.name,
								children: [
									d.name,
									" — ",
									d.specialization
								]
							}, d.name))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Reason for visit",
						error: errors.reason?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Annual checkup",
							...register("reason")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Preferred Date",
						error: errors.date?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "date",
							...register("date")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
						label: "Preferred Time",
						error: errors.time?.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "time",
							...register("time")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							disabled: loading,
							className: "w-full h-12 rounded-xl bg-ink hover:bg-ink/90 text-background font-semibold",
							children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Requesting…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" }), " Confirm Request"] })
						})
					})
				]
			})]
		})
	});
}
function Field$1({ label, error, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 inline-block",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive mt-1.5",
				children: error
			})
		]
	});
}
var _t = Textarea;
var AlertDialog = Root2$1;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props
})] }));
AlertDialogContent.displayName = Content2$1.displayName;
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	ref,
	className: cn("text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
var schema = object({
	name: string().trim().min(2, "Name required").max(80),
	mobile: string().trim().regex(/^[+()\d\s-]{7,20}$/, "Enter a valid phone number"),
	address: string().trim().min(4, "Address required").max(200),
	items: array(object({
		medicine: string(),
		quantity: number()
	})),
	description: string().optional(),
	delivery: _enum(["delivery", "pickup"])
}).refine((data) => data.items.length > 0 || data.description && data.description.trim().length > 0, {
	message: "Please add medicines to your list or provide a prescription description.",
	path: ["description"]
});
var SUGGESTED_MEDICINES = [
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
	"Zerodol SP"
];
function MedicineForm() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [file, setFile] = (0, import_react.useState)(null);
	const [locationLoading, setLocationLoading] = (0, import_react.useState)(false);
	const [showSuggestions, setShowSuggestions] = (0, import_react.useState)(false);
	const [confirmingData, setConfirmingData] = (0, import_react.useState)(null);
	const [tempMed, setTempMed] = (0, import_react.useState)("");
	const [tempQty, setTempQty] = (0, import_react.useState)(1);
	const { register, handleSubmit, reset, setValue, control, formState: { errors } } = useForm({
		resolver: u(schema),
		defaultValues: {
			delivery: "delivery",
			items: [],
			description: ""
		}
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: "items"
	});
	const filteredSuggestions = (0, import_react.useMemo)(() => {
		if (!tempMed.trim()) return SUGGESTED_MEDICINES.slice(0, 10);
		const query = tempMed.trim().toLowerCase();
		const startsWith = SUGGESTED_MEDICINES.filter((medicine) => medicine.toLowerCase().startsWith(query));
		const contains = SUGGESTED_MEDICINES.filter((medicine) => medicine.toLowerCase().includes(query) && !medicine.toLowerCase().startsWith(query));
		return [...startsWith, ...contains];
	}, [tempMed]);
	const showFilteredSuggestions = showSuggestions;
	const handleAddItem = () => {
		if (!tempMed.trim()) {
			toast.error("Please enter a medicine name.");
			return;
		}
		append({
			medicine: tempMed.trim(),
			quantity: tempQty
		});
		toast.success(`${tempMed} added to list.`);
		setTempMed("");
		setTempQty(1);
		setShowSuggestions(false);
	};
	const fetchAddressFromCoords = async (latitude, longitude) => {
		const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&accept-language=en`, { headers: { "Accept": "application/json" } });
		if (!response.ok) throw new Error("Reverse geocoding failed");
		return (await response.json()).display_name ?? `${latitude}, ${longitude}`;
	};
	const useCurrentLocation = () => {
		if (!navigator.geolocation) {
			toast.error("Geolocation is not supported by your browser.");
			return;
		}
		setLocationLoading(true);
		navigator.geolocation.getCurrentPosition(async (position) => {
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
		}, (error) => {
			console.error(error);
			toast.error("Unable to retrieve your location.");
			setLocationLoading(false);
		}, {
			enableHighAccuracy: true,
			timeout: 15e3,
			maximumAge: 6e4
		});
	};
	const handleFileChange = (e) => {
		const selected = e.target.files?.[0] ?? null;
		setFile(selected);
		if (selected && fields.length === 0) toast.info("Prescription uploaded! You can describe it below or search for medicines to add to your list.", { duration: 5e3 });
	};
	const onSubmit = (v) => {
		setConfirmingData(v);
	};
	const handleConfirmOrder = async () => {
		if (!confirmingData) return;
		setLoading(true);
		await new Promise((r) => setTimeout(r, 900));
		setLoading(false);
		toast.success("Your order is confirmed ok", { description: `Your order has been confirmed for ${confirmingData.delivery === "delivery" ? "home delivery" : "clinic pickup"}.` });
		reset();
		setFile(null);
		setConfirmingData(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "medicines",
		eyebrow: "Pharmacy",
		title: "Order medicines with 2-hour delivery.",
		subtitle: "Upload a prescription or search directly — our licensed pharmacists verify every order.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit(onSubmit),
			className: "grid lg:grid-cols-3 gap-6",
			noValidate: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card p-6 sm:p-8 rounded-3xl border border-border shadow-[var(--shadow-soft)] grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Patient Name",
							error: errors.name?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "Ravi Kumar",
								...register("name")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Mobile",
							error: errors.mobile?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "+91 98765 43210",
								...register("mobile")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Delivery Address",
							error: errors.address?.message,
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									className: "flex-1",
									placeholder: "No. 12, 100 Feet Road, Indiranagar, Bengaluru",
									...register("address")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: useCurrentLocation,
									disabled: locationLoading,
									className: "whitespace-nowrap rounded-md bg-brand-soft/50 px-3 py-2 text-xs font-semibold text-brand transition hover:bg-brand-soft disabled:cursor-not-allowed disabled:opacity-60 border border-brand/20",
									children: locationLoading ? "Locating…" : "Use my location"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Fulfillment",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-6 h-10 items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm cursor-pointer hover:text-brand transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										value: "delivery",
										className: "accent-brand size-4",
										...register("delivery")
									}), "Home Delivery"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm cursor-pointer hover:text-brand transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										value: "pickup",
										className: "accent-brand size-4",
										...register("delivery")
									}), "Clinic Pickup"]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 border-t border-border pt-4 mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block",
								children: "Search & Add Medicine"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											className: "pl-9 w-full",
											placeholder: "Search paracetamol, vitamin D…",
											value: tempMed,
											onChange: (e) => setTempMed(e.target.value),
											onFocus: () => setShowSuggestions(true),
											onBlur: () => setTimeout(() => setShowSuggestions(false), 200),
											onKeyDown: (e) => {
												if (e.key === "Enter") {
													e.preventDefault();
													handleAddItem();
												}
											}
										}),
										showFilteredSuggestions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-full left-0 right-0 z-20 mt-2 rounded-xl border border-border bg-card p-2 shadow-[var(--shadow-soft)] max-h-56 overflow-y-auto",
											children: filteredSuggestions.length > 0 ? filteredSuggestions.map((medicine) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => {
													setTempMed(medicine);
													setShowSuggestions(false);
												},
												className: "w-full text-left rounded-lg px-4 py-2.5 text-sm font-medium text-ink hover:bg-brand-soft hover:text-brand-dark transition-colors flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { className: "size-3.5 opacity-50" }), medicine]
											}, medicine)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "px-4 py-3 text-sm text-muted-foreground text-center italic",
												children: "No matching medicines found."
											})
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										min: 1,
										max: 50,
										value: tempQty,
										onChange: (e) => setTempQty(parseInt(e.target.value) || 1),
										className: "w-20"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										onClick: handleAddItem,
										variant: "secondary",
										className: "gap-1 px-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add"]
									})]
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card rounded-3xl border border-border shadow-[var(--shadow-soft)] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.label, {
						whileHover: { backgroundColor: "var(--brand-soft)" },
						className: "p-8 cursor-pointer flex flex-col justify-between transition-colors border-b border-border/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-brand",
									children: "Prescription Upload (Optional)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Snap or upload your doctor's prescription — we'll match and verify."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border border-dashed border-brand/40 bg-background rounded-xl p-3 text-center text-xs font-medium text-brand uppercase tracking-widest",
									children: file ? file.name : "Choose File (PNG, JPG, PDF)"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*,.pdf",
								className: "sr-only",
								onChange: handleFileChange
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 bg-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Prescription Description / Notes",
							error: errors.description?.message,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_t, {
								placeholder: "E.g. Please provide 2 strips of the first medicine in the prescription...",
								className: "resize-none min-h-[80px]",
								...register("description")
							})
						})
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card p-6 rounded-3xl border border-border shadow-md flex flex-col min-h-[400px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-xl font-semibold flex items-center gap-2 mb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5 text-brand" }), " Your List"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mb-6",
						children: "Review your medicines before ordering"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 overflow-y-auto mb-4 border border-border/50 rounded-xl p-3 bg-surface/50",
						children: fields.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full flex flex-col items-center justify-center text-muted-foreground opacity-70 p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { className: "size-8 mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "List is empty"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs mt-1",
									children: "Search and add medicines, or just upload a prescription."
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								initial: {
									opacity: 0,
									scale: .95
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: .9
								},
								className: "flex items-center justify-between p-3 bg-background border border-border rounded-lg group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium text-sm truncate",
										children: field.medicine
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: ["Qty: ", field.quantity]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => remove(index),
									className: "p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors",
									"aria-label": "Remove item",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							}, field.id)) })
						})
					}),
					errors.description && fields.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive mb-4 p-3 bg-destructive/10 rounded-lg border border-destructive/20 font-medium",
						children: errors.description.message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						disabled: loading,
						className: "w-full h-12 rounded-xl bg-brand hover:bg-brand-dark font-bold text-base shadow-lg shadow-brand/20",
						children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin mr-2" }), " Placing order…"] }) : "Place Order"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
			open: !!confirmingData,
			onOpenChange: (open) => !open && setConfirmingData(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Confirm Order Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "Is every medicine included in your list? Please verify before placing the order." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
				onClick: handleConfirmOrder,
				className: "bg-brand hover:bg-brand-dark",
				children: "Confirm Order"
			})] })] })
		})]
	});
}
function Field({ label, error, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive mt-1.5 font-medium",
				children: error
			})
		]
	});
}
var camp_default = "/assets/camp-C827N11R.jpg";
var camps = [
	{
		type: "Free Health Camp",
		title: "Free Community Health Screening",
		date: "Sat, Aug 24, 2026",
		time: "8:00 AM – 2:00 PM",
		location: "Downtown Community Center",
		color: "bg-brand text-primary-foreground"
	},
	{
		type: "Bone Density Camp",
		title: "Osteoporosis Screening Day",
		date: "Sun, Sep 8, 2026",
		time: "9:00 AM – 4:00 PM",
		location: "LuminaHealth Main Campus",
		color: "bg-ink text-background"
	},
	{
		type: "Diabetes Camp",
		title: "Diabetes Awareness & HbA1c Testing",
		date: "Fri, Sep 20, 2026",
		time: "10:00 AM – 5:00 PM",
		location: "Riverside Health Pavilion",
		color: "bg-accent text-accent-foreground"
	},
	{
		type: "Blood Donation Camp",
		title: "Blood Donation Drive",
		date: "Sat, Oct 5, 2026",
		time: "8:00 AM – 6:00 PM",
		location: "LuminaHealth Main Campus",
		color: "bg-destructive text-destructive-foreground"
	}
];
function HealthCamps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "camps",
		eyebrow: "Community",
		title: "Free health camps & wellness drives.",
		subtitle: "We run 30+ community health camps every year. Free screenings, expert consultations, and no appointment necessary.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-5 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				className: "lg:col-span-2 rounded-3xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: camp_default,
					alt: "Community health screening camp with doctors",
					loading: "lazy",
					width: 1024,
					height: 640,
					className: "w-full h-56 object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-semibold mb-2",
						children: "Featured This Month"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground leading-relaxed mb-4",
						children: "Join our flagship community screening on Aug 24 — includes free cardiac, glucose, and BP checkups."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-3 grid sm:grid-cols-2 gap-4",
				children: camps.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .4,
						delay: i * .08
					},
					className: `${c.color} rounded-2xl p-6 flex flex-col justify-between min-h-[180px]`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] uppercase tracking-widest font-bold opacity-80",
						children: c.type
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-semibold text-lg mt-1 leading-tight",
						children: c.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 text-xs opacity-90 mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5" }),
									" ",
									c.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }),
									" ",
									c.time
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
									" ",
									c.location
								]
							})
						]
					})]
				}, c.title))
			})]
		})
	});
}
var ACTIVE_EVENT = {
	enabled: true,
	title: "Free Community Health Screening",
	date: "Sat, Aug 24, 2026",
	time: "8:00 AM – 2:00 PM",
	location: "Downtown Community Center",
	tag: "Free Health Camp",
	image: camp_default
};
function CampPopup() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: dismiss,
		className: "fixed inset-0 z-[100] bg-ink/60 backdrop-blur-sm"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 40,
			scale: .96
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 40,
			scale: .96
		},
		transition: {
			type: "spring",
			damping: 22,
			stiffness: 260
		},
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "camp-popup-title",
		className: "fixed inset-x-4 bottom-4 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[101] max-w-lg sm:mx-auto bg-card rounded-3xl overflow-hidden shadow-2xl border border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: dismiss,
				"aria-label": "Close event popup",
				className: "absolute top-3 right-3 z-10 size-9 rounded-full bg-background/80 backdrop-blur grid place-items-center hover:bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: ACTIVE_EVENT.image,
				alt: "Community health event",
				width: 1024,
				height: 640,
				className: "w-full h-40 sm:h-48 object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block text-[10px] uppercase tracking-widest font-bold text-brand bg-brand-soft px-2 py-1 rounded-full mb-3",
						children: ACTIVE_EVENT.tag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						id: "camp-popup-title",
						className: "text-xl font-semibold mb-3",
						children: ACTIVE_EVENT.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 text-sm text-muted-foreground mb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4 text-brand" }),
									" ",
									ACTIVE_EVENT.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-brand" }),
									" ",
									ACTIVE_EVENT.time
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-brand" }),
									" ",
									ACTIVE_EVENT.location
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1 bg-brand hover:bg-brand-dark rounded-xl",
							onClick: () => {
								toast.success("Registered!", { description: "We'll email you event details shortly." });
								dismiss();
							},
							children: "Register Free"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							className: "rounded-xl",
							onClick: dismiss,
							children: "Maybe Later"
						})]
					})
				]
			})
		]
	})] }) });
}
var reviews = [
	{
		name: "Priya M.",
		role: "Patient · Cardiology",
		rating: 5,
		text: "Dr. Ananya took the time to explain every test. I've never felt more informed about my own heart health."
	},
	{
		name: "Deepak K.",
		role: "Patient · Pediatrics",
		rating: 5,
		text: "Our kids actually look forward to visits. The clinic is bright, calm, and the staff are wonderful with children."
	},
	{
		name: "Aisha R.",
		role: "Patient · General Practice",
		rating: 5,
		text: "Same-day appointments, seamless pharmacy delivery — LuminaHealth has genuinely changed how I access care."
	},
	{
		name: "Kiran L.",
		role: "Patient · Orthopedics",
		rating: 4,
		text: "Post-op recovery was tracked closely and my questions were answered within the hour, every single time."
	},
	{
		name: "Gauri H.",
		role: "Patient · Neurology",
		rating: 5,
		text: "The diagnostic accuracy and follow-through here is best-in-class. I recommend LuminaHealth to everyone."
	},
	{
		name: "Rohan P.",
		role: "Patient · Emergency",
		rating: 5,
		text: "Triaged in under 4 minutes on a Sunday night. This is what a modern ER should look like."
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "testimonials",
		className: "bg-card",
		eyebrow: "Testimonials",
		title: "Trusted by 15,000+ patients.",
		subtitle: "Real reviews from real patients across our specialties.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
			children: reviews.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .4,
					delay: i % 3 * .08
				},
				className: "p-6 rounded-2xl bg-background border border-border hover:shadow-[var(--shadow-soft)] transition-all",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-0.5 mb-4",
						"aria-label": `${r.rating} out of 5 stars`,
						children: Array.from({ length: 5 }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-4 ${s < r.rating ? "fill-brand text-brand" : "text-border"}` }, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "text-sm text-ink leading-relaxed mb-5",
						children: [
							"\"",
							r.text,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold",
						children: r.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: r.role
					})] })
				]
			}, r.name))
		})
	});
}
var STORAGE_KEY = "careconnect_user_reviews";
function getStoredReviews() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function saveReviews(reviews) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}
function StarRating({ value, onChange }) {
	const [hovered, setHovered] = (0, import_react.useState)(0);
	const interactive = !!onChange;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-1",
		"aria-label": "Star rating",
		children: Array.from({ length: 5 }).map((_, i) => {
			const filled = i < (hovered || value);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: interactive ? "button" : void 0,
				onClick: () => onChange?.(i + 1),
				onMouseEnter: () => interactive && setHovered(i + 1),
				onMouseLeave: () => interactive && setHovered(0),
				"aria-label": `${i + 1} star`,
				className: interactive ? "cursor-pointer" : "cursor-default",
				style: {
					background: "none",
					border: "none",
					padding: "2px"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-6 transition-colors ${filled ? "fill-brand text-brand" : "text-border fill-transparent"}` })
			}, i);
		})
	});
}
function ReviewForm() {
	const [reviews, setReviews] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("");
	const [rating, setRating] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [likedIds, setLikedIds] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	(0, import_react.useEffect)(() => {
		setReviews(getStoredReviews());
		const liked = localStorage.getItem("careconnect_liked_reviews");
		if (liked) setLikedIds(new Set(JSON.parse(liked)));
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name.trim()) return setError("Please enter your name.");
		if (rating === 0) return setError("Please select a star rating.");
		if (text.trim().length < 10) return setError("Please write at least 10 characters.");
		const updated = [{
			id: Date.now().toString(),
			name: name.trim(),
			role: role.trim() || "Visitor",
			rating,
			text: text.trim(),
			date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
				day: "numeric",
				month: "short",
				year: "numeric"
			}),
			likes: 0
		}, ...reviews];
		setReviews(updated);
		saveReviews(updated);
		setSubmitted(true);
		setName("");
		setRole("");
		setRating(0);
		setText("");
		setError("");
		setTimeout(() => setSubmitted(false), 4e3);
	};
	const handleLike = (id) => {
		if (likedIds.has(id)) return;
		const updated = reviews.map((r) => r.id === id ? {
			...r,
			likes: r.likes + 1
		} : r);
		setReviews(updated);
		saveReviews(updated);
		const newLiked = new Set(likedIds).add(id);
		setLikedIds(newLiked);
		localStorage.setItem("careconnect_liked_reviews", JSON.stringify([...newLiked]));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "leave-review",
		className: "bg-surface",
		eyebrow: "Share Your Experience",
		title: "Leave a Review or Suggestion",
		subtitle: "Your feedback helps us serve you better. Share your experience or suggestion below.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-2xl mx-auto mb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .45 },
					className: "rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2.5 rounded-xl bg-brand-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "size-5 text-brand" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold text-ink",
							children: "Write a Review"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "review-name",
									className: "block text-sm font-medium text-ink mb-1.5",
									children: ["Your Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "review-name",
									type: "text",
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: "e.g. Ravi Kumar",
									className: "w-full px-4 py-2.5 rounded-xl border border-border bg-background text-ink text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand transition"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "review-role",
									className: "block text-sm font-medium text-ink mb-1.5",
									children: "Your Role / Department"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "review-role",
									type: "text",
									value: role,
									onChange: (e) => setRole(e.target.value),
									placeholder: "e.g. Patient · Cardiology",
									className: "w-full px-4 py-2.5 rounded-xl border border-border bg-background text-ink text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand transition"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm font-medium text-ink mb-2",
								children: ["Your Rating ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-destructive",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, {
								value: rating,
								onChange: setRating
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "review-text",
									className: "block text-sm font-medium text-ink mb-1.5",
									children: [
										"Your Review / Suggestion",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-destructive",
											children: "*"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "review-text",
									rows: 4,
									value: text,
									onChange: (e) => setText(e.target.value),
									placeholder: "Tell us about your experience or share a suggestion...",
									className: "w-full px-4 py-3 rounded-xl border border-border bg-background text-ink text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand transition resize-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground mt-1 text-right",
									children: [text.length, " characters"]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: -6
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -6
								},
								className: "text-sm text-destructive bg-destructive/10 px-4 py-2 rounded-lg",
								children: error
							}), submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: -6
								},
								animate: {
									opacity: 1,
									y: 0
								},
								exit: {
									opacity: 0,
									y: -6
								},
								className: "text-sm text-brand bg-brand-soft px-4 py-2 rounded-lg font-medium",
								children: "✅ Thank you! Your review has been posted."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								id: "submit-review-btn",
								className: "flex items-center gap-2 px-6 py-3 rounded-xl bg-brand text-primary-foreground font-semibold text-sm hover:bg-brand-dark active:scale-95 transition-all duration-200 shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), "Submit Review"]
							})
						]
					})]
				})
			}),
			reviews.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "text-center text-lg font-semibold text-ink mb-6",
				children: [
					"Visitor Reviews (",
					reviews.length,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: reviews.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .95
					},
					transition: {
						duration: .35,
						delay: i % 3 * .06
					},
					className: "p-6 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-soft)] transition-all flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-9 rounded-full bg-brand-soft flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4 text-brand" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold text-ink",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: r.role
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground whitespace-nowrap",
								children: r.date
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, { value: r.rating }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-ink leading-relaxed flex-1",
							children: [
								"\"",
								r.text,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleLike(r.id),
							id: `like-review-${r.id}`,
							"aria-label": "Like this review",
							className: `flex items-center gap-1.5 text-xs font-medium mt-1 transition-colors w-fit px-3 py-1.5 rounded-lg ${likedIds.has(r.id) ? "bg-brand-soft text-brand cursor-default" : "bg-muted text-muted-foreground hover:bg-brand-soft hover:text-brand cursor-pointer"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "size-3.5" }),
								"Helpful (",
								r.likes,
								")"
							]
						})
					]
				}, r.id)) })
			})] }),
			reviews.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				className: "text-center py-10 text-muted-foreground text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "size-10 mx-auto mb-3 text-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No visitor reviews yet. Be the first to share your experience!" })]
			})
		]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var faqs = [
	{
		q: "Do you accept insurance?",
		a: "Yes — we work with BlueCross BlueShield, Aetna, United Healthcare, Cigna, and 15+ other major carriers. We also offer transparent self-pay pricing."
	},
	{
		q: "How quickly can I get an appointment?",
		a: "Most non-urgent visits are booked within 24–48 hours. Same-day appointments are available for primary care and pediatric urgent needs."
	},
	{
		q: "Do you offer telemedicine?",
		a: "Absolutely. Video consultations are available 7 days a week for primary care, mental health, and follow-up visits."
	},
	{
		q: "Is prescription delivery really free?",
		a: "Yes — free 2-hour delivery on all orders above 500rs within a 5km radius of the clinic."
	},
	{
		q: "Can I bring my whole family?",
		a: "Family plans are available covering up to 6 members with combined billing and shared medical records access."
	},
	{
		q: "Do you run free health camps?",
		a: "We host 30+ community camps every year — free screenings, expert consultations, no appointment necessary. See the Health Camps section above."
	}
];
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "faq",
		eyebrow: "FAQ",
		title: "Answers to common questions.",
		subtitle: "Can't find what you're looking for? Message our team via WhatsApp — we usually reply within minutes.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
			type: "single",
			collapsible: true,
			className: "max-w-3xl mx-auto",
			children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
				value: `item-${i}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
					className: "text-left text-base font-semibold hover:text-brand",
					children: f.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
					className: "text-muted-foreground leading-relaxed",
					children: f.a
				})]
			}, f.q))
		})
	});
}
var CLINIC_ADDRESS = "No. 12, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038";
var GMAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(CLINIC_ADDRESS)}&output=embed`;
var GMAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_ADDRESS)}`;
var WHATSAPP = "https://wa.me/919876543210?text=Hi%20LuminaHealth%2C%20I%27d%20like%20to%20book%20an%20appointment.";
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Contact",
		title: "Visit our medical center.",
		subtitle: "Walk in, call, or message — our care team is available around the clock.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				className: "space-y-4",
				children: [[
					{
						icon: MapPin,
						label: "Address",
						value: CLINIC_ADDRESS
					},
					{
						icon: Phone,
						label: "Phone",
						value: "+91 98765 43210 · 24/7"
					},
					{
						icon: Mail,
						label: "Email",
						value: "hello@luminahealth.in"
					},
					{
						icon: Clock,
						label: "Working Hours",
						value: "Mon–Sat 7AM–10PM · Sun 8AM–6PM"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 p-5 rounded-2xl bg-card border border-border hover:border-brand/40 transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-11 rounded-xl bg-brand-soft text-brand-dark grid place-items-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-medium mt-1 break-words",
							children: c.value
						})]
					})]
				}, c.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "h-12 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), " WhatsApp"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "h-12 rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: GMAPS_DIRECTIONS,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" }), " Get Directions"]
						})
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: 20
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				className: "rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)] min-h-[420px] bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "LuminaHealth location map",
					src: GMAPS_EMBED,
					width: "100%",
					height: "100%",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					className: "w-full h-full min-h-[420px] border-0"
				})
			})]
		})
	});
}
var groups = [
	{
		title: "Practice",
		links: [
			{
				label: "About",
				href: "#about"
			},
			{
				label: "Doctors",
				href: "#doctors"
			},
			{
				label: "Services",
				href: "#services"
			},
			{
				label: "Health Camps",
				href: "#camps"
			}
		]
	},
	{
		title: "Patients",
		links: [
			{
				label: "Book Appointment",
				href: "#appointment"
			},
			{
				label: "Order Medicines",
				href: "#medicines"
			},
			{
				label: "Testimonials",
				href: "#testimonials"
			},
			{
				label: "FAQ",
				href: "#faq"
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				label: "Contact",
				href: "#contact"
			},
			{
				label: "Careers",
				href: "#"
			},
			{
				label: "Press",
				href: "#"
			},
			{
				label: "Blog",
				href: "#"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-background pt-16 pb-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center size-9 rounded-xl bg-brand text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
									className: "size-5",
									strokeWidth: 2.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold tracking-tight text-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand",
									children: "LUMINA"
								}), "HEALTH"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-background/60 max-w-sm leading-relaxed mb-6",
							children: "Setting new standards in healthcare through innovation, ethics, and compassionate care — since 2000."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-3",
							children: [
								Facebook,
								Instagram,
								Twitter,
								Linkedin,
								Youtube
							].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Social link",
								className: "size-9 grid place-items-center rounded-full bg-background/10 hover:bg-brand transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "size-4" })
							}, i))
						})
					]
				}), groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
					className: "text-xs font-bold uppercase tracking-widest mb-5",
					children: g.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3 text-sm text-background/60",
					children: g.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "hover:text-brand transition-colors",
						children: l.label
					}) }, l.label))
				})] }, g.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" LuminaHealth Medical Group. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-background",
							children: "Privacy Policy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-background",
							children: "Terms & Conditions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-background",
							children: "Accessibility"
						})
					]
				})]
			})]
		})
	});
}
function Index() {
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
		if (window.location.hash) window.history.replaceState(null, "", window.location.pathname);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-surface text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Doctors, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentForm, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedicineForm, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HealthCamps, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewForm, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampPopup, {})
		]
	});
}
//#endregion
export { Index as component };
