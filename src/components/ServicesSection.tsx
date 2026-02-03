import { motion } from "motion/react";

const services = [
  {
    title: "Traditional Massage",
    description:
      "Traditional Massage is perfect for those in need of fatigue relief after a busy day. Uses traditional massage techniques to improve blood circulation and relieve muscle tension.",
    image: "/images/service/tradisionalmesage.jpg",
  },
  {
    title: "Massage + Body Scrub",
    description:
      "Body relaxation + skin scrub to remove dead skin cells and brighten the skin",
    image: "/images/service/massagelulur.jpg",
  },
  {
    title: "Swedish Massage",
    description:
      "European-style massage technique with gentle strokes and slow rhythm. Helps relieve stress, improve circulation, and bring deep relaxation.",
    image: "/images/service/swedishmassage.jpg",
  },
  {
    title: "Deep Tissue Massage",
    description:
      "Massage technique focusing on breaking up adhesions and tension in deeper muscles and connective tissue",
    image: "/images/service/deepmassage.jpg",
  },
  {
    title: "Vitality Massage",
    description:
      "Vitality Massage for women to increase stamina, improve blood circulation, and maintain body fitness. Helps reduce fatigue, stiffness, and maintain vitality naturally.",
    image: "/images/service/vitalitasmassage.jpg",
  },
  {
    title: "Thai Massage + Stretching",
    description:
      "Thai massage can help relieve stress, increase flexibility, reduce muscle tension, improve energy flow, and provide overall relaxation.",
    image: "/images/service/thaimassage.jpg",
  },
  {
    title: "Facial Acupressure + Full Body Massage",
    description:
      "Gentle full body + face massage that calms the mind and body. Suitable for relieving stress, balancing emotions, and helping you sleep soundly",
    image: "/images/service/totokwajah.jpg",
  },
  {
    title: "Shiatsu Massage",
    description:
      "To vitalize energy and relieve muscle tension, as well as enhance relaxation and overall well-being.",
    image: "/images/service/shiatsu.jpg",
  },
  {
    title: "Balinese Massage",
    description:
      "Combining various massage techniques, acupressure, reflexology, and aromatherapy to provide a comprehensive relaxation experience",
    image: "/images/service/balinese.jpg",
  },
  {
    title: "Javanese Massage",
    description:
      "To vitalize energy (qi) and relieve muscle tension, as well as enhance relaxation and overall well-being",
    image: "/images/service/javanese.jpg",
  },
  {
    title: "Indonesian Coin Scraping (Kerokan)",
    description:
      "Relieves and helps relax while releasing wind from the body, making you feel refreshed again",
    image: "/images/service/kerokan.jpg",
  },
  {
    title: "Brazilian Waxing",
    description:
      "A popular hair removal method for the intimate area, including the bikini area and surroundings, using hot wax that is pulled to remove hair from the root.",
    image: "/images/service/brazilianwaxing.jpg",
  },
  {
    title: "Wet Cupping Therapy",
    description:
      "Increases body resistance for better health and helps improve blood circulation",
    image: "/images/service/bekambasah.jpg",
  },
  {
    title: "Sports Massage",
    description:
      "Stretches tense muscles; sports massage can also stimulate inactive muscles and improve soft tissue condition",
    image: "/images/service/sportmassage.jpg",
  },
  {
    title: "Full Body Massage & Reflexology",
    description:
      "Combination of full body massage and reflexology that provides more benefits to your body",
    image: "/images/service/fullbodymassage.jpg",
  },
  {
    title: "Facial Acupressure",
    description: "Enhances facial radiance for a more youthful appearance",
    image: "/images/service/ttkwjh.jpg",
  },
  {
    title: "Acupuncture",
    description:
      "Helps brighten nerves, tighten facial skin, treat melasma, delay aging, and make you look younger",
    image: "/images/service/akupuntur.jpg",
  },
];

const WA_NUMBER = "6285938381332";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Massage Service Options
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hello, I would like to inquire about your Canggu Massage services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
