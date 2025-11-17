'use client'

import { motion } from 'framer-motion'
import { 
  UserIcon, 
  HeartIcon, 
  BeakerIcon, 
  TruckIcon,
  ClockIcon,
  BoltIcon 
} from '@heroicons/react/24/outline'

const services = [
  { 
    name: "HCA Visit", 
    duration: "30–45 min",
    price: "BDT 300–500",
    icon: UserIcon,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100"
  },
  { 
    name: "Nurse Visit", 
    duration: "45 min",
    price: "BDT 700–900",
    icon: HeartIcon,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-100"
  },
  { 
    name: "IV/Complex Dressing", 
    duration: "",
    price: "+ BDT 300–500",
    icon: BeakerIcon,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100"
  },
  { 
    name: "Catheter Care", 
    duration: "",
    price: "BDT 800–1,200",
    icon: HeartIcon,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-100"
  },
  { 
    name: "Home Phlebotomy", 
    duration: "+ lab fees",
    price: "BDT 500–800",
    icon: BeakerIcon,
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-100"
  },
  { 
    name: "Travel Assistance", 
    duration: "depends on area",
    price: "BDT 60–200",
    icon: TruckIcon,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100"
  },
  { 
    name: "After-hours", 
    duration: "",
    price: "× 1.5 rate",
    icon: ClockIcon,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100"
  },
  { 
    name: "Same-day Request", 
    duration: "",
    price: "+ BDT 200–400",
    icon: BoltIcon,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100"
  },
];

export default function PayPerUse() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-gradient-to-b from-purple-50/30 to-white">
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
            Pay-Per-Use Menu
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Transparent pricing for individual services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`${service.bgColor} ${service.borderColor} border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md`}
                >
                  <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>
              
              {/* Service Name */}
              <h3 className="text-lg font-bold text-slate-900 text-center mb-2 font-display">
                {service.name}
              </h3>
              
              {/* Duration/Notes */}
              {service.duration && (
                <p className="text-sm text-slate-500 text-center mb-3">
                  {service.duration}
                </p>
              )}
              
              {/* Price */}
              <p className="text-xl font-bold text-slate-900 text-center">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600 text-base">
            All prices are estimates and may vary based on specific requirements. Contact us for a detailed quote.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
