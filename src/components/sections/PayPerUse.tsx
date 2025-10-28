'use client'

import { motion } from 'framer-motion'

const items = [
  "HCA 30–45 min: BDT 300–500",
  "Nurse 45 min: BDT 700–900",
  "IV/complex dressing: +300–500 · Catheter: 800–1,200",
  "Home phlebotomy: BDT 500–800 + lab fees",
  "Travel: core 60–120, secondary 120–200",
  "After-hours: 1.5× · Same-day: +200–400"
]

export default function PayPerUse() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-brand-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Pay-per-use menu
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
                  <span className="text-brand mr-3">›</span>
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
