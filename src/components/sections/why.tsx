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
    title: 'Unified Health Records',
    description: 'One secure health record shared among your family.',
    icon: DocumentTextIcon,
    gradient: 'linear-gradient(135deg, #8B3FD8 0%, #7532B8 100%)',
    bgColor: 'bg-purple-50/50',
    borderColor: 'border-purple-100',
  },
  {
    title: 'Flexible Pricing',
    description: 'Only pay for what you use — flexible and transparent pricing.',
    icon: HeartIcon,
    gradient: 'linear-gradient(135deg, #E74C3C 0%, #D63E2E 100%)',
    bgColor: 'bg-orange-50/50',
    borderColor: 'border-orange-100',
  },
  {
    title: 'Personalized Care',
    description: 'Care plans designed by medical professionals just for you.',
    icon: HomeModernIcon,
    gradient: 'linear-gradient(135deg, #4A90E2 0%, #3D7AC5 100%)',
    bgColor: 'bg-blue-50/50',
    borderColor: 'border-blue-100',
  },
  {
    title: 'Home Visits',
    description: 'Trained carers, nurses, and phlebotomists visit your home.',
    icon: BeakerIcon,
    gradient: 'linear-gradient(135deg, #27AE60 0%, #229954 100%)',
    bgColor: 'bg-green-50/50',
    borderColor: 'border-green-100',
  },
  {
    title: 'Care Coordination',
    description: 'We organize tests, track recovery, and remind you about follow-ups.',
    icon: BellAlertIcon,
    gradient: 'linear-gradient(135deg, #8B3FD8 0%, #ec4899 100%)',
    bgColor: 'bg-pink-50/50',
    borderColor: 'border-pink-100',
  },
  {
    title: '24/7 WhatsApp Access',
    description: 'Real-time care updates through WhatsApp, anytime, anywhere.',
    icon: DevicePhoneMobileIcon,
    gradient: 'linear-gradient(135deg, #4A90E2 0%, #06b6d4 100%)',
    bgColor: 'bg-cyan-50/50',
    borderColor: 'border-cyan-100',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const // Apple's easing
    }
  }
}

export default function Why() {
  return (
    <section id="why" className="py-20 sm:py-32 bg-gradient-to-b from-white to-purple-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display mb-6 leading-tight">
            Because health deserves to be <span className="text-brand-purple-600">cared for</span>, not just treated.
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Comprehensive healthcare that puts your family first, with the convenience and care you deserve.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <div className={`h-full ${benefit.bgColor} ${benefit.borderColor} border rounded-3xl p-8 text-center transition-all duration-300`}>
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl"
                    style={{ backgroundImage: benefit.gradient }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-600 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
