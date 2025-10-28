'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const items = [
  "One shared health file for your household",
  "Only pay for what you use",
  "Home tests and home visits",
  "Hospital booking + medicine delivery",
  "Weekly/monthly updates to your phone"
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

export default function Why() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Why I-Medic
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
            {items.map((item) => (
              <motion.div key={item} className="relative pl-9" variants={fadeInUp}>
                <dt className="inline font-semibold text-brand-ink">
                  <CheckCircleIcon className="absolute left-1 top-1 h-5 w-5 text-brand" aria-hidden="true" />
                  {item}
                </dt>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
