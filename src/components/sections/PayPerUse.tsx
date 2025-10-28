'use client'

import { motion } from 'framer-motion'

const services = [
  { name: "HCA Visit (30–45 min)", price: "BDT 300–500" },
  { name: "Nurse Visit (45 min)", price: "BDT 700–900" },
  { name: "IV/Complex Dressing", price: "+ BDT 300–500" },
  { name: "Catheter Care", price: "BDT 800–1,200" },
  { name: "Home Phlebotomy", price: "BDT 500–800 (+ lab fees)" },
  { name: "Travel Assistance", price: "BDT 60–200 (depends on area)" },
  { name: "After-hours", price: "× 1.5 rate" },
  { name: "Same-day Request", price: "+ BDT 200–400" },
];

export default function PayPerUse() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Pay-Per-Use Menu
          </h2>
          <p className="mt-4 text-lg text-gray-600">Transparent pricing for individual services:</p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <motion.div 
            className="bg-gray-50 rounded-2xl shadow-md border border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <table className="w-full text-left">
              <tbody className="divide-y divide-gray-200">
                {services.map((service, index) => (
                  <motion.tr 
                    key={service.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <td className="py-4 px-6 font-medium text-brand-ink">{service.name}</td>
                    <td className="py-4 px-6 text-brand-ink80 text-right">{service.price}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
