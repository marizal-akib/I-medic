'use client'

import { motion } from 'framer-motion'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const services = [
  "Health record + care plan",
  "Home support: vitals, dressing, injections/IV, catheter, medication help, mobility, daily living",
  "Tests at home: blood/urine; results to your phone",
  "Hospital & travel help: booking, escort, discharge follow-up",
  "Medicine & supplies: delivery, blister packs",
  "Lifestyle companionship: walks, reading, light gardening, tech learning"
]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-brand-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            What we do
          </h2>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((service) => (
              <motion.div key={service} className="relative pl-9" variants={fadeInUp}>
                <dt className="inline font-semibold text-brand-ink">
                  <CheckBadgeIcon className="absolute left-1 top-1 h-5 w-5 text-brand" aria-hidden="true" />
                  {service}
                </dt>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
