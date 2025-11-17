'use client'

import { motion } from 'framer-motion'
import { 
  DevicePhoneMobileIcon,
  HomeIcon,
  BeakerIcon,
  UserGroupIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

const steps = [
  { 
    number: 1,
    title: "Book an Assessment",
    description: "Contact us through WhatsApp, phone, or any channel you prefer for your initial assessment.",
    icon: DevicePhoneMobileIcon,
    gradient: 'linear-gradient(135deg, #8B3FD8 0%, #7532B8 100%)',
  },
  { 
    number: 2,
    title: "Initial Home Visit",
    description: "Our team visits for consent, vital checks, and creates your personalized care plan.",
    icon: HomeIcon,
    gradient: 'linear-gradient(135deg, #E74C3C 0%, #D63E2E 100%)',
  },
  { 
    number: 3,
    title: "Tests If Needed",
    description: "We arrange diagnostic tests only when necessary, all from the comfort of home.",
    icon: BeakerIcon,
    gradient: 'linear-gradient(135deg, #4A90E2 0%, #3D7AC5 100%)',
  },
  { 
    number: 4,
    title: "Care Team Assigned",
    description: "Your dedicated care team begins regular visits based on your custom schedule.",
    icon: UserGroupIcon,
    gradient: 'linear-gradient(135deg, #27AE60 0%, #229954 100%)',
  },
  { 
    number: 5,
    title: "Regular Updates",
    description: "Family receives real-time updates and comprehensive monthly summary reports.",
    icon: DocumentTextIcon,
    gradient: 'linear-gradient(135deg, #8B3FD8 0%, #ec4899 100%)',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-display mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Getting started with I-Medic is simple. Here's your journey to better healthcare.
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-purple-200 via-brand-blue-200 to-brand-green-200" 
               style={{ marginLeft: '10%', marginRight: '10%' }} />
          
          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Card */}
                <div className="flex flex-col items-center text-center">
                  {/* Number Badge */}
                  <div 
                    className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg mb-4"
                    style={{ backgroundImage: step.gradient }}
                  >
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mb-4">
                    <step.icon className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div 
                  className="absolute left-6 top-16 bottom-0 w-0.5 -translate-x-1/2"
                  style={{ backgroundImage: step.gradient, opacity: 0.3 }}
                />
              )}
              
              {/* Number Badge */}
              <div 
                className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-xl shadow-lg"
                style={{ backgroundImage: step.gradient }}
              >
                <span className="text-xl font-bold text-white">{step.number}</span>
              </div>
              
              {/* Card Content */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <step.icon className="w-8 h-8 text-slate-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
