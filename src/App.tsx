import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServicesSection } from "@/components/ServicesSection";
import { ReservationForm } from "@/components/ReservationForm";
import { FAQSection } from "@/components/FAQSection";
import { ContactMap } from "@/components/ContactMap";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <Hero />

        <WhyChooseUs />

        <ServicesSection />

        <ReservationForm />

        <FAQSection />

        <ContactMap />
      </main>

      <Footer />
    </div>
  );
}

export default App;
