import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUsSection } from "@/components/AboutUsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ReservationForm } from "@/components/ReservationForm";
import { FAQSection } from "@/components/FAQSection";
import { ContactMap } from "@/components/ContactMap";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <Hero />

        <AboutUsSection />
        <WhyChooseUs />

        <ServicesSection />
        <TestimonialsSection />

        <ReservationForm />

        <FAQSection />

        <ContactMap />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
