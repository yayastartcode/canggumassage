import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import { getWhatsAppLink, formatWhatsAppNumber } from "@/lib/config";

const locations = [
  "Canggu",
  "Kuta",
  "Denpasar",
  "Seminyak",
];

export function ContactMap() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Service Area</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Enjoy the massage experience without leaving your home. We are ready to visit you anywhere and anytime, especially in the Canggu and surrounding areas. Our service is available 24 hours a day. Book directly through WhatsApp without needing to download additional apps.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Location</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {locations.map((loc, i) => (
                <span key={i} className="text-slate-700">{loc}</span>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Contact Us</h3>
                  <a
                    href={getWhatsAppLink("Hello, I would like to inquire about your Canggu Massage services")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    {formatWhatsAppNumber()}
                  </a>
                  <p className="text-slate-600 mt-2 text-sm">Click to chat via WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">Operating Hours</h4>
              <p className="text-2xl font-bold text-blue-600">24 Hours</p>
              <p className="text-slate-600 text-sm mt-1">Every day, including holidays</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
