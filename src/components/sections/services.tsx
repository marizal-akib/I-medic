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
import Carousel from '@/components/ui/carousel'

const coreServices = [
  {
    name: "Health Record & Care Plan",
    description: "We maintain and update every patient's digital record — tests, medicines, history, progress, and doctor notes — so you never lose track again.",
    icon: DocumentTextIcon,
    gradient: 'linear-gradient(135deg, #8B3FD8 0%, #7532B8 100%)',
    bgColor: 'bg-purple-50/30',
    borderColor: 'border-purple-100',
  },
  {
    name: "Home Care Support",
    description: "Regular visits from trained caregivers and nurses to help with: Vitals check & medication, Injections, IVs, and dressing, Catheter & wound care, Daily living assistance (mobility, bathing, hygiene, meals).",
    icon: HomeIcon,
    gradient: 'linear-gradient(135deg, #E74C3C 0%, #D63E2E 100%)',
    bgColor: 'bg-orange-50/30',
    borderColor: 'border-orange-100',
  },
  {
    name: "Diagnostic Tests at Home",
    description: "Book blood, urine, or other essential tests at your doorstep. Results are uploaded to your secure patient file, reviewed by our medical team, and shared directly with you.",
    icon: BeakerIcon,
    gradient: 'linear-gradient(135deg, #4A90E2 0%, #3D7AC5 100%)',
    bgColor: 'bg-blue-50/30',
    borderColor: 'border-blue-100',
  },
  {
    name: "Hospital & Travel Assistance",
    description: "We help book hospital appointments, arrange medical escorts, manage discharge summaries, and track post-hospital recovery — so you're never alone in the process.",
    icon: BriefcaseIcon,
    gradient: 'linear-gradient(135deg, #27AE60 0%, #229954 100%)',
    bgColor: 'bg-green-50/30',
    borderColor: 'border-green-100',
  },
  {
    name: "Medicine & Medical Supplies Delivery",
    description: "From prescribed medicines to basic health supplies, everything is delivered to your home, with reminders for refills.",
    icon: TruckIcon,
    gradient: 'linear-gradient(135deg, #8B3FD8 0%, #ec4899 100%)',
    bgColor: 'bg-pink-50/30',
    borderColor: 'border-pink-100',
  },
  {
    name: "Lifestyle Companionship",
    description: "For elderly or recovering individuals — friendly support for walks, reading, light gardening, technology learning, and overall well-being.",
    icon: SparklesIcon,
    gradient: 'linear-gradient(135deg, #4A90E2 0%, #06b6d4 100%)',
    bgColor: 'bg-cyan-50/30',
    borderColor: 'border-cyan-100',
  },
]

export default function Services() {
  const serviceCards = coreServices.map((service) => (
    <div 
      key={service.name}
      className={`flex flex-col p-8 bg-white rounded-3xl border ${service.borderColor} shadow-sm hover:shadow-md transition-all duration-300 h-full`}
    >
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div 
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ backgroundImage: service.gradient }}
        >
          <service.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
        </div>
      </div>
      
      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-900 font-display mb-3">
          {service.name}
        </h3>
        <p className="text-base text-slate-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  ))

  return (
    <section id="services" className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display mb-6">
            Complete care at home
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Everything your family needs for health and wellness, delivered with compassion and expertise.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            showDots={true}
            autoPlay={false}
          >
            {serviceCards}
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
