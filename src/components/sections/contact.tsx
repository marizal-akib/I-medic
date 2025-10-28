'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-ink80">
            How can we support you today?
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="https://wa.me/8801234567890" target="_blank">
                WhatsApp
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:+8801234567890">
                Call Us
              </Link>
            </Button>
          </div>
          <div className="mt-12 text-base text-brand-ink80 space-y-2">
            <p><strong>Hotline:</strong> <a href="tel:+8801234567890" className="hover:text-teal-600">+880 123 456 7890</a></p>
            <p><strong>Email:</strong> <a href="mailto:support@i-medic.com" className="hover:text-teal-600">support@i-medic.com</a></p>
            <p><strong>Working Hours:</strong> 7 AM – 10 PM, Every Day</p>
            <p><strong>Address:</strong> Your Office Address, Khulna, Bangladesh</p>
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
