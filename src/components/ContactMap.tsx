import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import { getWhatsAppLink, formatWhatsAppNumber } from "@/lib/config";

export function ContactMap() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Lokasi Kami
          </h2>
          <p className="text-lg text-slate-600">
            Kunjungi kantor kami atau hubungi untuk konsultasi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9287843804473!2d107.65555599999999!3d-6.899120900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e791b8aa49a7%3A0xd666c5903884f24e!2sJl.%20Utama%20No.26b%2C%20Pasirlayung%2C%20Kec.%20Cibeunying%20Kidul%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040192!5e0!3m2!1sen!2sid!4v1766319459557!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Alamat Kantor
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Jl. Utama No.26b, Pasirlayung
                    <br />
                    Kec. Cibeunying Kidul
                    <br />
                    Kota Bandung, Jawa Barat 40192
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Hubungi Kami
                  </h3>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    {formatWhatsAppNumber()}
                  </a>
                  <p className="text-slate-600 mt-2 text-sm">
                    Klik untuk chat via WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-slate-100 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">
                Jam Operasional
              </h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-medium">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-medium">08:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span className="font-medium text-red-600">Tutup</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
