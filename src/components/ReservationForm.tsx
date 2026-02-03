import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { getWhatsAppLink } from '@/lib/config'

export function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    service: '',
  })

  const services = [
    'Traditional Massage',
    'Massage + Body Scrub',
    'Swedish Massage',
    'Deep Tissue Massage',
    'Vitality Massage',
    'Thai Massage + Stretching',
    'Facial Acupressure + Full Body Massage',
    'Shiatsu Massage',
    'Balinese Massage',
    'Javanese Massage',
    'Indonesian Coin Scraping (Kerokan)',
    'Brazilian Waxing',
    'Wet Cupping Therapy',
    'Sports Massage',
    'Full Body Massage & Reflexology',
    'Facial Acupressure',
    'Acupuncture',
  ]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Build WhatsApp message
    const message = `Hello, I would like to book a service:\n\nName: ${formData.name}\nAddress: ${formData.address}\nService: ${formData.service}`

    // Open WhatsApp using centralized config
    window.open(getWhatsAppLink(message), '_blank')
  }

  return (
    <section id="reservation-form" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Book Now
          </h2>
          <p className="text-lg text-slate-600">
            Fill out the form below to make a reservation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-lg">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-lg">
                Address
              </label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter your complete address"
                rows={3}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-slate-900 font-semibold mb-2 text-lg">
                Service
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none bg-white transition-all"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full text-lg py-6 bg-green-500 hover:bg-green-600 text-white font-bold"
            >
              Send via WhatsApp
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
