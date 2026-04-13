import dynamic from "next/dynamic";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Services      = dynamic(() => import("@/components/Services"));
const DoctorProfile = dynamic(() => import("@/components/DoctorProfile"));
const PatientInfo   = dynamic(() => import("@/components/PatientInfo"));
const Testimonials  = dynamic(() => import("@/components/Testimonials"));
const Appointment   = dynamic(() => import("@/components/Appointment"));
const Contact       = dynamic(() => import("@/components/Contact"));
const Footer        = dynamic(() => import("@/components/Footer"));
const FloatingButtons = dynamic(() => import("@/components/FloatingButtons"), { ssr: false });

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DoctorProfile />
        <PatientInfo />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </LanguageProvider>
  );
}
