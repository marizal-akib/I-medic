'use client'

import { motion } from 'framer-motion'

const content = [
  "One working professional covers everyone at the same address",
  "Fees: signup ×1.5; monthly ×1.3 (up to 6 people). Address verification required",
  "Services still billed per person when used"
]

export default function HouseholdCover() {
  return (
    <section id="household" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Household Cover
          </h2>
          <div className="mt-8 space-y-4 text-lg text-brand-ink80">
            {content.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
