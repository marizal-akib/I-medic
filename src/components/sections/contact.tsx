'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display">
            Get in touch
          </h2>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            We're here to help you and your family. Reach out anytime.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" variant="default" asChild>
              <Link href="https://wa.me/8801234567890" target="_blank">
                WhatsApp
              </Link>
            </Button>
            <Button size="lg" variant="outline-purple" asChild>
              <Link href="tel:+8801234567890">
                Call Us
              </Link>
            </Button>
          </div>
          <div className="mt-16 text-base text-slate-600 space-y-3">
            <p><strong className="text-slate-900">Hotline:</strong> <a href="tel:+8801234567890" className="hover:text-brand-blue transition-colors">+880 123 456 7890</a></p>
            <p><strong className="text-slate-900">Email:</strong> <a href="mailto:support@i-medic.com" className="hover:text-brand-blue transition-colors">support@i-medic.com</a></p>
            <p><strong className="text-slate-900">Working Hours:</strong> 7 AM – 10 PM, Every Day</p>
            <p><strong className="text-slate-900">Address:</strong> Your Office Address, Khulna, Bangladesh</p>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              {/* Add Facebook SVG icon here */}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              {/* Add Instagram SVG icon here */}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">YouTube</span>
              {/* Add YouTube SVG icon here */}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
