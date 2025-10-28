'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const content = [
  "Line-item bills: membership, visit time, add-ons, travel, labs (receipt), medicines (bill), small logistics fee",
  "No hidden extras"
]

export default function PricingPromise() {
  return (
    <section id="promise" className="py-20 sm:py-28 bg-brand-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Pricing promise
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {content.map((item) => (
              <motion.div 
                key={item} 
                className="relative pl-9"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt className="inline font-semibold text-brand-ink">
                  <CheckCircleIcon className="absolute left-1 top-1 h-5 w-5 text-brand" aria-hidden="true" />
                  {item}
                </dt>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
