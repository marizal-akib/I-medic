'use client'

import { motion } from 'framer-motion'

const items = [
  "WhatsApp reply ≤10 min (07:00–22:00)",
  "Nurse dispatch ≤4 h (core)",
  "Lab report uploaded ≤24 h after receipt",
  "Missed SLA → 10–20% credit on that line"
]

export default function SLAs() {
  return (
    <section id="slas" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Service levels
          </h2>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl2 shadow-k-soft p-8">
            <ul role="list" className="space-y-4 text-brand-ink80">
              {items.map((item, index) => (
                <motion.li 
                  key={item}
                  className="flex"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="text-brand mr-3">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
