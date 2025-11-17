'use client'

import { motion } from 'framer-motion'
import { Heart, Calendar, FileText, Shield, Users, Phone, Activity, Clock } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Tailored health plans designed specifically for your family members and their unique needs.'
  },
  {
    icon: Calendar,
    title: 'Easy Scheduling',
    description: 'Book appointments, home visits, and consultations with just a few taps.'
  },
  {
    icon: FileText,
    title: 'Digital Health Records',
    description: 'Access complete medical history, prescriptions, and test results anytime, anywhere.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Bank-level encryption ensures your family\'s health data stays safe and confidential.'
  },
  {
    icon: Users,
    title: 'Family Management',
    description: 'Manage health records and care for all family members from a single account.'
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Round-the-clock access to healthcare professionals for emergencies and consultations.'
  },
  {
    icon: Activity,
    title: 'Health Monitoring',
    description: 'Track vitals, medications, and health metrics with automated reminders.'
  },
  {
    icon: Clock,
    title: 'Medication Reminders',
    description: 'Never miss a dose with smart notifications and medication tracking.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
}

export default function FeatureGrid() {
  return (
    <section className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-display tracking-tight">
            Everything you need for family health
          </h2>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Comprehensive healthcare management tools designed for modern families.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-blue transition-all duration-300 hover-lift"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


