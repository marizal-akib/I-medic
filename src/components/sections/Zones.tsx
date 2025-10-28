'use client'

import { motion } from 'framer-motion'

const content = [
  "Dhaka core",
  "Khulna core: Sonadanga, Khalishpur, Daulatpur, Khulna Sadar",
  "Bagerhat core: Bagerhat Sadar",
  "Secondary zones served with a travel fee"
]

export default function Zones() {
  return (
    <section id="zones" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Launch locations
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
