'use client'

import { useState } from 'react'
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
  const [activeTab, setActiveTab] = useState<'smart' | 'active' | 'total'>('smart')

  const tabs = [
    { id: 'smart' as const, name: 'SmartCare', color: 'purple', activeBg: '#8B3FD8' },
    { id: 'active' as const, name: 'ActiveCare', color: 'blue', activeBg: '#3D7AC5' },
    { id: 'total' as const, name: 'TotalCare', color: 'green', activeBg: '#229954' },
  ]

  return (
    <section id="plans" className="py-20 sm:py-32 bg-gradient-to-b from-white to-blue-50/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display mb-6">
            Our Care Programs
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Flexible plans designed to match your family's unique healthcare needs.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl bg-white p-1.5 shadow-md border border-slate-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                style={activeTab === tab.id ? { backgroundColor: tab.activeBg } : {}}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* SmartCare Content */}
          {activeTab === 'smart' && (
            <div className="max-w-3xl mx-auto">
              <div className="p-8 bg-white rounded-3xl shadow-lg border border-purple-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
                    {carePrograms.smartCare.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-x-2 mt-4">
                    <span className="text-5xl font-bold tracking-tight text-slate-900">
                      {carePrograms.smartCare.monthly}
                    </span>
                    <span className="text-base font-semibold text-slate-600">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">One-time signup: {carePrograms.smartCare.signup}</p>
                </div>
                
                <ul role="list" className="mt-8 space-y-4">
                  {carePrograms.smartCare.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-6 flex-none text-brand-purple-500" />
                      <span className="text-slate-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full mt-8" variant="purple">
                  <Link href="https://wa.me/8801234567890" target="_blank">
                    Get Started with SmartCare
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* ActiveCare Content */}
          {activeTab === 'active' && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-display text-center mb-8">
                {carePrograms.activeCare.name}
              </h3>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {carePrograms.activeCare.plans.map((plan) => (
                  <div key={plan.name} className="flex flex-col rounded-3xl bg-white p-8 shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-xl font-bold text-slate-900 font-display">{plan.name}</h4>
                    <p className="mt-3 text-2xl font-bold text-brand-blue-600">{plan.price}</p>
                    <p className="mt-4 text-slate-600 leading-relaxed flex-grow">{plan.details}</p>
                    <Button asChild className="w-full mt-6" variant="blue">
                      <Link href="https://wa.me/8801234567890" target="_blank">
                        Book {plan.name}
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-slate-600">{carePrograms.activeCare.footer}</p>
            </div>
          )}

          {/* TotalCare Content */}
          {activeTab === 'total' && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-display text-center mb-8">
                {carePrograms.totalCare.name}
              </h3>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {carePrograms.totalCare.plans.map((plan) => (
                  <div key={plan.name} className="flex flex-col rounded-3xl bg-white p-8 shadow-md border border-green-100 hover:shadow-lg transition-all duration-300">
                    <h4 className="text-xl font-bold text-slate-900 font-display">{plan.name}</h4>
                    <p className="mt-3 text-2xl font-bold text-brand-green-600">{plan.price}</p>
                    <p className="mt-4 text-slate-600 leading-relaxed flex-grow">{plan.details}</p>
                    <Button asChild className="w-full mt-6" variant="green">
                      <Link href="https://wa.me/8801234567890" target="_blank">
                        Discuss {plan.name}
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-slate-600">{carePrograms.totalCare.footer}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
