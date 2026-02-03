import { motion } from "motion/react";
import { Award } from "lucide-react";

export function AboutUsSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-4xl font-bold text-slate-900">
            Meet Our Founder
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Profile Photo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                <img
                  src="/images/founder-photo.jpeg"
                  alt="Founder of Canggu Massage"
                  className="w-full h-80 object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector(".fallback-icon")) {
                      const fallback = document.createElement("div");
                      fallback.className = "fallback-icon flex flex-col items-center justify-center h-80 bg-slate-100 rounded-xl";
                      fallback.innerHTML = `
                        <svg class="w-24 h-24 text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p class="text-slate-500">Add your photo here</p>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>

            {/* Certificate */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl transform -rotate-2"></div>
              <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                <img
                  src="/images/certificate.jpeg"
                  alt="Indonesian Professional Certificate Authority"
                  className="w-full h-auto object-contain rounded-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector(".fallback-cert")) {
                      const fallback = document.createElement("div");
                      fallback.className = "fallback-cert flex flex-col items-center justify-center min-h-[300px] bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-dashed border-amber-300";
                      fallback.innerHTML = `
                        <svg class="w-16 h-16 text-amber-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <p class="text-amber-700 font-semibold text-center">Indonesian Professional Certificate Authority</p>
                        <p class="text-amber-600 text-sm text-center">Add your certificate image here</p>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                I Wayan Rinten
              </h3>
              <p className="text-xl text-blue-600 font-medium">
                Founder & Lead Therapist
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed">
                Welcome to Canggu Massage. My Name is I Wayan Rinten I am a certified professional massage therapist
                with years of experience in traditional and modern massage techniques.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                My passion is to help people relax, relieve stress, and improve their
                overall well-being through the healing power of touch. I have been trained
                in various massage modalities including Traditional Balinese Massage,
                Swedish Massage, Thai Massage, and Reflexology.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I hold a professional certification from the Indonesian Professional
                Certificate Authority (BNSP), ensuring that you receive the highest
                quality service from a qualified practitioner.
              </p>
            </div>

            {/* Stats/Info */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-1">3+</div>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-1">100+</div>
                <p className="text-sm text-slate-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-1">15+</div>
                <p className="text-sm text-slate-600">Services</p>
              </div>
            </div>

            {/* Certification Badge */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Certified Professional
                  </h4>
                  <p className="text-sm text-slate-600">
                    Certified by Indonesian Professional Certificate Authority (BNSP)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
