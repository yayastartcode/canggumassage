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
      question: "Berapa lama proses pengendalian hama dilakukan?",
      answer:
        "Proses pengendalian hama biasanya memakan waktu 1-3 jam tergantung pada luas area dan tingkat infestasi. Untuk treatment khusus seperti fumigasi, bisa memakan waktu lebih lama. Tim kami akan memberikan estimasi waktu yang lebih akurat setelah melakukan inspeksi awal.",
    },
    {
      question: "Apakah layanan ini aman untuk anak-anak dan hewan peliharaan?",
      answer:
        "Ya, kami menggunakan produk yang aman dan telah terdaftar secara resmi. Namun, untuk keamanan maksimal, kami menyarankan anak-anak dan hewan peliharaan untuk menjauh dari area treatment selama 2-4 jam setelah aplikasi. Tim kami akan memberikan instruksi keamanan yang lengkap sebelum dan setelah treatment.",
    },
    {
      question:
        "Bagaimana jika hama muncul kembali setelah layanan pest control?",
      answer:
        "Kami memberikan garansi layanan untuk setiap treatment yang dilakukan. Jika hama muncul kembali dalam periode garansi, kami akan melakukan re-treatment tanpa biaya tambahan. Durasi garansi bervariasi tergantung jenis layanan yang dipilih, biasanya 1-3 bulan untuk treatment standar.",
    },
    {
      question:
        "Apakah PT. Solusi Jitu Pest melayani perusahaan atau hanya rumah tinggal?",
      answer:
        "Kami melayani baik residensial (rumah tinggal) maupun komersial (kantor, gudang, pabrik, hotel, restoran, dll). Kami memiliki tim dan peralatan khusus untuk menangani berbagai skala proyek, dari rumah kecil hingga bangunan komersial besar.",
    },
    {
      question: "Bagaimana cara memesan layanan pest control?",
      answer:
        "Anda dapat memesan layanan kami dengan mengisi form reservasi di website ini, menghubungi kami melalui WhatsApp, atau telepon langsung. Tim customer service kami akan menghubungi Anda untuk konfirmasi jadwal dan melakukan konsultasi awal mengenai masalah hama yang Anda hadapi.",
    },
  ];

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/jghm5.jpg)",
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
            Pertanyaan Seputar Jasa Pengendalian Hama
            <br />
            Rumah dan Kantor
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
