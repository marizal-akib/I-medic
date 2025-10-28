'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-brand-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl font-display">
            Get in touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-brand-ink80">
            Ready to get started? Book a consultation via WhatsApp or give us a call.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="https://wa.me/880XXXXXXXXXX">
                Book on WhatsApp
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:+880XXXXXXXXXX">
                Call Us
              </Link>
            </Button>
          </div>
          <div className="mt-10 text-sm text-brand-ink80">
            <p>Hotline: +880 XXXXXXXXXX</p>
            <p>Email: <a href="mailto:info@i-medic.com.bd" className="font-semibold text-brand hover:text-brand-dark">info@i-medic.com.bd</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
