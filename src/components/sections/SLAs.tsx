'use client'

import { motion } from 'framer-motion'
import { ClockIcon, RocketLaunchIcon, DocumentArrowUpIcon, CurrencyBangladeshiIcon } from '@heroicons/react/24/outline'

const commitments = [
  { 
    name: "WhatsApp Reply", 
    detail: "within 10 minutes",
    subDetail: "(7 AM–10 PM)",
    icon: ClockIcon,
    gradient: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-50 to-purple-100/50',
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600'
  },
  { 
    name: "Nurse/Carer Dispatch", 
    detail: "within 4 hours",
    subDetail: "",
    icon: RocketLaunchIcon,
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100/50',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600'
  },
  { 
    name: "Lab Reports", 
    detail: "uploaded within 24 hours",
    subDetail: "of receipt",
    icon: DocumentArrowUpIcon,
    gradient: 'from-teal-500 to-teal-600',
    bgGradient: 'from-teal-50 to-teal-100/50',
    iconBg: 'bg-gradient-to-br from-teal-500 to-teal-600'
  },
  { 
    name: "Missed SLA", 
    detail: "10–20% credit",
    subDetail: "to customer",
    icon: CurrencyBangladeshiIcon,
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-50 to-orange-100/50',
    iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600'
  },
];

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
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
}

export default function SLAs() {
  return (
    <section id="slas" className="py-20 sm:py-32 bg-gradient-to-b from-white to-slate-50">
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
            Our Service Commitments
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We stand by our promises with clear service level agreements
          </p>
        </motion.div>

        {/* Commitments Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {commitments.map((commitment) => (
            <motion.div 
              key={commitment.name}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.2 }}
              className="group relative"
            >
              {/* Gradient Background with Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${commitment.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Card Content */}
              <div className="relative h-full bg-white rounded-3xl p-8 text-center shadow-lg border border-slate-100 group-hover:border-transparent transition-all duration-300">
                {/* Icon with Glow Effect */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div 
                      className={`${commitment.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <commitment.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Glow Effect on Hover */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${commitment.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10`}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display leading-tight">
                  {commitment.name}
                </h3>
                
                {/* Details */}
                <p className="text-lg font-semibold text-slate-700 mb-1">
                  {commitment.detail}
                </p>
                {commitment.subDetail && (
                  <p className="text-sm text-slate-500">
                    {commitment.subDetail}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-600 text-base">
            Our commitment to quality service is backed by measurable guarantees
          </p>
        </motion.div>
      </div>
    </section>
  )
}
