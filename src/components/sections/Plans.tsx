'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckIcon } from '@heroicons/react/24/solid'

const carePrograms = {
  smartCare: {
    name: "SmartCare — Stay Connected, Stay Monitored",
    signup: "BDT 199",
    monthly: "BDT 149",
    features: [
      "Includes health record creation, personalized care plan, digital reminders, and on-call guidance.",
      "Basic health screening only if needed (BDT 1,200 split into three easy payments).",
      "All services available as pay-per-use add-ons."
    ],
  },
  activeCare: {
    name: "ActiveCare — For Those Who Need Regular Check-Ins",
    plans: [
      {
        name: "Active Lite",
        price: "BDT 2,500/month",
        details: "1 nurse visit + 1 phone check",
      },
      {
        name: "Active Weekly",
        price: "BDT 4,000/month",
        details: "weekly visit + monthly doctor note",
      },
      {
        name: "Active Rehab",
        price: "BDT 7,500/month",
        details: "2 visits/week + detailed progress tracking",
      },
    ],
    footer: "Each plan includes follow-ups, care reminders, and access to health reports anytime."
  },
  totalCare: {
    name: "TotalCare — For Intensive, Daily, or Long-Term Support",
    plans: [
      {
        name: "Daily Lite",
        price: "BDT 14,000–18,000/month",
        details: "1 daily visit",
      },
      {
        name: "Daily Plus",
        price: "BDT 26,000–32,000/month",
        details: "2 daily visits or extended shifts",
      },
      {
        name: "Intensive",
        price: "Custom",
        details: "Custom care schedule for complex or bed-bound patients.",
      },
    ],
    footer: "Every TotalCare patient is assigned a care coordinator for supervision and family updates."
  }
};

export default function Plans() {
  return (
    <section id="plans" className="py-20 sm:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Our Care Programs
          </h2>
        </div>
        
        <div className="mt-16 space-y-16">
          {/* SmartCare */}
          <motion.div 
            className="p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-brand-ink font-display">{carePrograms.smartCare.name}</h3>
            <div className="flex items-baseline gap-x-2 mt-4">
              <span className="text-4xl font-bold tracking-tight text-brand-ink">{carePrograms.smartCare.monthly}</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">/month</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">Signup: {carePrograms.smartCare.signup}</p>
            <ul role="list" className="mt-6 space-y-3 text-sm text-brand-ink80">
              {carePrograms.smartCare.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-5 w-5 flex-none text-teal-500" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full mt-8">
              <Link href="https://wa.me/8801234567890" target="_blank">Get Started with SmartCare</Link>
            </Button>
          </motion.div>

          {/* ActiveCare */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-brand-ink font-display text-center mb-8">{carePrograms.activeCare.name}</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {carePrograms.activeCare.plans.map((plan) => (
                <div key={plan.name} className="flex flex-col rounded-2xl bg-white p-8 shadow-md border border-gray-100">
                  <h4 className="text-xl font-bold text-brand-ink font-display">{plan.name}</h4>
                  <p className="mt-2 font-semibold text-brand-ink80">{plan.price}</p>
                  <p className="mt-4 text-sm text-brand-ink80">{plan.details}</p>
                  <div className="mt-6 flex-grow flex items-end">
                    <Button asChild className="w-full" variant="secondary">
                      <Link href="https://wa.me/8801234567890" target="_blank">Book {plan.name}</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-600">{carePrograms.activeCare.footer}</p>
          </motion.div>

          {/* TotalCare */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-brand-ink font-display text-center mb-8">{carePrograms.totalCare.name}</h3>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {carePrograms.totalCare.plans.map((plan) => (
                <div key={plan.name} className="flex flex-col rounded-2xl bg-white p-8 shadow-md border border-gray-100">
                  <h4 className="text-xl font-bold text-brand-ink font-display">{plan.name}</h4>
                  <p className="mt-2 font-semibold text-brand-ink80">{plan.price}</p>
                  <p className="mt-4 text-sm text-brand-ink80">{plan.details}</p>
                   <div className="mt-6 flex-grow flex items-end">
                    <Button asChild className="w-full" variant="secondary">
                      <Link href="https://wa.me/8801234567890" target="_blank">Discuss {plan.name}</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-600">{carePrograms.totalCare.footer}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
