'use client'

import { motion } from 'framer-motion'
import {
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  HeartIcon,
  HomeModernIcon,
  BeakerIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'One secure health record shared among your family.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Only pay for what you use — flexible and transparent pricing.',
    icon: HeartIcon,
  },
  {
    name: 'Personalized care plans designed by medical professionals.',
    icon: HomeModernIcon,
  },
  {
    name: 'Trained carers, nurses, and phlebotomists who visit your home.',
    icon: BeakerIcon,
  },
  {
    name: 'We organize your tests, track your recovery, and remind you about follow-ups.',
    icon: BellAlertIcon,
  },
  {
    name: '24/7 access to your care updates through WhatsApp.',
    icon: DevicePhoneMobileIcon,
  },
]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Why() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl lg:text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Because health deserves to be cared for, not just treated.
          </h2>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {benefits.map((benefit) => (
              <motion.div key={benefit.name} className="relative pl-12" variants={fadeInUp}>
                <dt className="inline font-semibold text-lg text-brand-ink">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500">
                    <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {benefit.name}
                </dt>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
