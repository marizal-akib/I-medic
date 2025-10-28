'use client'

import { motion } from 'framer-motion'
import { 
  DocumentTextIcon,
  HomeIcon,
  BeakerIcon,
  TruckIcon,
  SparklesIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline'

const coreServices = [
  {
    name: "Health Record & Care Plan",
    description: "We maintain and update every patient’s digital record — tests, medicines, history, progress, and doctor notes — so you never lose track again.",
    icon: DocumentTextIcon,
  },
  {
    name: "Home Care Support",
    description: "Regular visits from trained caregivers and nurses to help with: Vitals check & medication, Injections, IVs, and dressing, Catheter & wound care, Daily living assistance (mobility, bathing, hygiene, meals).",
    icon: HomeIcon,
  },
  {
    name: "Diagnostic Tests at Home",
    description: "Book blood, urine, or other essential tests at your doorstep. Results are uploaded to your secure patient file, reviewed by our medical team, and shared directly with you.",
    icon: BeakerIcon,
  },
  {
    name: "Hospital & Travel Assistance",
    description: "We help book hospital appointments, arrange medical escorts, manage discharge summaries, and track post-hospital recovery — so you’re never alone in the process.",
    icon: BriefcaseIcon,
  },
  {
    name: "Medicine & Medical Supplies Delivery",
    description: "From prescribed medicines to basic health supplies, everything is delivered to your home, with reminders for refills.",
    icon: TruckIcon,
  },
  {
    name: "Lifestyle Companionship",
    description: "For elderly or recovering individuals — friendly support for walks, reading, light gardening, technology learning, and overall well-being.",
    icon: SparklesIcon,
  },
]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl lg:text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-brand-ink80">
            I-Medic provides a complete circle of health and care — designed for families, seniors, working professionals, and anyone who needs reliable support at home.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <motion.div 
                key={service.name} 
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300" 
                variants={fadeInUp}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500 text-white mb-4">
                  <service.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <dt className="text-lg font-semibold text-brand-ink">{service.name}</dt>
                <dd className="mt-2 text-base text-brand-ink80">{service.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
