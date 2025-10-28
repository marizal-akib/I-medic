'use client'

import { motion } from 'framer-motion'
import { ReceiptPercentIcon } from '@heroicons/react/24/outline'

const promises = [
  "Clear line-item bills: membership, visit time, lab, travel, and medicine.",
  "Official receipts for all third-party services.",
  "No hidden charges or unnecessary tests — ever."
];

export default function PricingPromise() {
  return (
    <section id="promise" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <ReceiptPercentIcon className="h-12 w-12 text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Transparent Pricing & Promise
          </h2>
          <div className="mt-8 space-y-4">
            {promises.map((promise, index) => (
              <motion.p 
                key={promise} 
                className="text-lg text-brand-ink80"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {promise}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
