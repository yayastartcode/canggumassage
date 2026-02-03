import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Is the massage service available 24 hours?",
      answer: "Yes, our service is available 24 hours every day including holidays. You can book anytime according to your needs.",
    },
    {
      question: "How do I book a massage service?",
      answer: "Simply contact us via WhatsApp, choose the service type you want, and our therapist will come to your location.",
    },
    {
      question: "What areas are served?",
      answer: "We serve the Bali area including Canggu, Seminyak, Kuta, Denpasar, and surrounding areas.",
    },
    {
      question: "Are the therapists certified?",
      answer: "Yes, all our therapists are professional and certified according to their respective therapy expertise.",
    },
    {
      question: "How long is the massage duration?",
      answer: "Massage duration varies depending on the service type chosen, starting from 60 minutes to 120 minutes.",
    },
  ];

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/heromom.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-slate-800/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-wide">
            FAQS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Questions About Our
            <br />
            24-Hour Home Massage Service
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border-0 shadow-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-slate-50 transition-colors [&[data-state=open]]:bg-slate-50">
                  <span className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
