'use client'

import { motion } from 'framer-motion'

const steps = [
  { name: "Book on WhatsApp", description: "Start with a simple chat." },
  { name: "Home visit", description: "For consent, vitals, and planning." },
  { name: "Tests if needed", description: "Only necessary tests are run." },
  { name: "Care team on schedule", description: "Your team arrives as planned." },
  { name: "Updates to your phone", description: "Monthly summaries and updates." },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28 bg-brand-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            How It Works
          </h2>
        </div>
        <div className="mx-auto mt-16 flow-root sm:mt-24">
          <div className="-m-4 flex flex-wrap justify-center">
            {steps.map((step, stepIdx) => (
              <motion.div 
                key={step.name} 
                className="w-full lg:w-1/5 p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stepIdx * 0.1 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mx-auto h-12 w-12 rounded-full bg-brand-sky">
                    <div className="text-lg font-bold text-brand">{stepIdx + 1}</div>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand-ink">{step.name}</h3>
                  <p className="mt-1 text-sm text-brand-ink80">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
