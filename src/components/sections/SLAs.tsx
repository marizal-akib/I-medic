'use client'

import { motion } from 'framer-motion'
import { ClockIcon, RocketLaunchIcon, DocumentArrowUpIcon,CurrencyBangladeshiIcon } from '@heroicons/react/24/outline'

const commitments = [
  { 
    name: "WhatsApp reply", 
    detail: "within 10 minutes (7 AM–10 PM)",
    icon: ClockIcon 
  },
  { 
    name: "Nurse/Carer dispatch", 
    detail: "within 4 hours",
    icon: RocketLaunchIcon
  },
  { 
    name: "Lab reports", 
    detail: "uploaded within 24 hours of receipt",
    icon: DocumentArrowUpIcon
  },
  { 
    name: "Missed SLA", 
    detail: "10–20% credit to customer",
    icon: CurrencyBangladeshiIcon
  },
];

export default function SLAs() {
  return (
    <section id="slas" className="py-20 sm:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Our Service Commitments (SLAs)
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment, index) => (
            <motion.div 
              key={commitment.name}
              className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <commitment.icon className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-ink">{commitment.name}</h3>
              <p className="mt-2 text-brand-ink80">{commitment.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
