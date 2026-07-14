import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Doctors } from "@/components/site/Doctors";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { MedicineForm } from "@/components/site/MedicineForm";
import { HealthCamps } from "@/components/site/HealthCamps";
import { CampPopup } from "@/components/site/CampPopup";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    // Scroll to top on load and remove hash to prevent jumping
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <main>
        <Hero />
        <Doctors />
        <AppointmentForm />
        <MedicineForm />
        <Services />
        <HealthCamps />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CampPopup />
    </div>
  );
}
