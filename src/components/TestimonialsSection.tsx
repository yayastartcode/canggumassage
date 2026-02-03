import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Canggu",
    rating: 5,
    text: "Amazing service! The therapist arrived on time and was very professional. The massage was exactly what I needed after a long week of surfing. Highly recommend Canggu Massage!",
    avatar: "S",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Seminyak",
    rating: 5,
    text: "Best home massage service I've ever experienced. The therapist was skilled, friendly, and really knew how to work out my knots. Will definitely book again!",
    avatar: "M",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "Kuta",
    rating: 5,
    text: "I was skeptical about a home massage service, but Canggu Massage exceeded my expectations. Professional, clean, and incredibly relaxing. The Balinese massage was perfect!",
    avatar: "E",
  },
  {
    id: 4,
    name: "David Smith",
    location: "Denpasar",
    rating: 5,
    text: "The Thai massage was incredible! The therapist was knowledgeable and customized the pressure to my liking. Booking was easy and they were punctual. Great experience!",
    avatar: "D",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    location: "Canggu",
    rating: 5,
    text: "I've tried many massage services in Bali, but Canggu Massage is by far the best. The therapist is certified and it shows in the quality of the massage. Absolutely love it!",
    avatar: "L",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience with Canggu Massage.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16 text-slate-900" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>

                  {/* Name & Location */}
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl px-8 py-6 border border-amber-200">
            <div className="text-left">
              <p className="text-sm text-slate-600 mb-1">Overall Rating</p>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-slate-900">5.0</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="h-12 w-px bg-amber-300"></div>
            <div className="text-left">
              <p className="text-sm text-slate-600 mb-1">Based on</p>
              <p className="text-2xl font-bold text-slate-900">500+ Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
