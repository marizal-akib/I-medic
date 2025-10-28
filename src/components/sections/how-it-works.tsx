'use client'

import { motion } from 'framer-motion'

const steps = [
  { 
    name: "Book on WhatsApp or Call",
    description: "1️⃣"
  },
  { 
    name: "Home visit for consent, vitals, and care plan setup",
    description: "2️⃣"
  },
  { 
    name: "Tests arranged only if needed",
    description: "3️⃣"
  },
  { 
    name: "Assigned care team starts visits",
    description: "4️⃣"
  },
  { 
    name: "Family receives regular updates and monthly summary reports",
    description: "5️⃣"
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            How It Works
          </h2>
        </div>
        <div className="mx-auto mt-16 flow-root sm:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, stepIdx) => (
              <motion.div 
                key={step.name} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: stepIdx * 0.1 }}
              >
                <div className="flex items-center justify-center mx-auto h-16 w-16 rounded-full bg-teal-100 text-3xl">
                  {step.description}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-ink">{step.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
