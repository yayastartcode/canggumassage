import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Bug, Rat, Shield, Warehouse, Droplets, Sparkles } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Bug,
      title: 'Insect Control',
      subtitle: '(Serangga)',
      description: 'Pengendalian hama serangga secara efektif dengan metode yang aman dan terpercaya untuk melindungi lingkungan Anda.',
    },
    {
      icon: Rat,
      title: 'Rodent Control',
      subtitle: '(Tikus)',
      description: 'Solusi komprehensif untuk mengatasi masalah tikus dengan teknologi modern dan ramah lingkungan.',
    },
    {
      icon: Shield,
      title: 'Termite Control',
      subtitle: '(Rayap)',
      description: 'Perlindungan menyeluruh terhadap rayap untuk menjaga struktur bangunan dan properti Anda.',
    },
    {
      icon: Warehouse,
      title: 'Fumigation',
      subtitle: '(Hama Gudang)',
      description: 'Fumigasi profesional untuk mengendalikan hama gudang dan melindungi stok barang Anda.',
    },
    {
      icon: Droplets,
      title: 'Disinfection',
      subtitle: '',
      description: 'Layanan disinfeksi menyeluruh untuk menciptakan lingkungan yang bersih, sehat, dan bebas kuman.',
    },
    {
      icon: Sparkles,
      title: 'Hama Lainnya',
      subtitle: '',
      description: 'Solusi pengendalian untuk berbagai jenis hama lainnya yang mengganggu kenyamanan rumah atau kantor Anda.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">
              Layanan Kami
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Targeted Solutions.
              <br />
              Total Protection.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:max-w-md"
          >
            <p className="text-slate-600 mb-6">
              Kami menyediakan solusi pengendalian hama yang tepat sasaran dan perlindungan menyeluruh untuk rumah, kantor, dan properti komersial Anda dengan layanan profesional dan terpercaya.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Lihat Semua Layanan
            </Button>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-sm text-slate-500 mb-4">{service.subtitle}</p>
              )}

              {/* Description */}
              <p className="text-slate-600 mb-6">{service.description}</p>

              {/* Learn More Link */}
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2 group">
                Learn More
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
