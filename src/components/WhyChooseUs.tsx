import { motion } from "motion/react";
import { Check } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    { title: "Maintaining your privacy" },
    { title: "Providing professional therapists" },
    { title: "More supporting customer time efficiency" },
    { title: "No need to worry about traffic jams" },
    { title: "We connect customers with professional therapists" },
    { title: "Helping customers find the services they need" },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/whycus.webp"
                alt="Why Choose Us"
                className="w-full h-[500px] object-cover"
              />
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
            <h2 className="text-4xl font-bold text-slate-900">
              Why Choose Us?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Rest alone is sometimes not enough to help the body recover,
              so Canggu Massage is often the solution of choice when the body
              feels sore and tired. Canggu Massage is the best solution for gentle yet
              powerful massage - a certified traditional therapy capable of
              addressing various complaints, from fatigue to catching a cold.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Bali areas like Canggu, Seminyak, Kuta, and Denpasar
              are bustling tourist destinations where your body needs relaxation, so
              the body becomes more relaxed and refreshed. Canggu Massage provides
              professional and certified staff according to therapy expertise.
              You can choose according to what you want.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Therefore Canggu Massage is a 24-hour call service to provide
              24-hour service and therapists come to the customer's location.
              Benefits of choosing us:
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {benefit.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
