import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DoctorProfile from "@/components/DoctorProfile";
import PatientInfo from "@/components/PatientInfo";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

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
