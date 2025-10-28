'use client'

import { motion } from 'framer-motion'
import { UsersIcon } from '@heroicons/react/24/outline'

export default function HouseholdCover() {
  return (
    <section id="household" className="py-20 sm:py-28 bg-teal-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <UsersIcon className="h-12 w-12 text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Household Cover Add-On
          </h2>
          <p className="mt-4 text-lg text-brand-ink80">
            One family member can register the whole household.
          </p>
          <div className="mt-8 text-lg text-brand-ink font-semibold">
            <p>Signup ×1.5, Monthly ×1.3 (covers up to 6 people).</p>
          </div>
          <p className="mt-4 text-base text-brand-ink80">
            Shared care file, reminders, and progress updates for all members.
            <br />
            Pay-per-use applies individually per service.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
