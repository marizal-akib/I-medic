'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

export default function Hero() {
  return (
    <section className="bg-brand-soft pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-brand-ink sm:text-6xl font-display"
            variants={fadeInUp}
          >
            We take care of those who you care for.
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-brand-ink80"
            variants={fadeInUp}
          >
            I-Medic makes family healthcare simple — from digital health records to home visits, medication management, and continuous monitoring. We bridge medical support and human care with compassion and technology.
          </motion.p>
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            variants={fadeInUp}
          >
            <Button size="lg" asChild>
              <Link href="https://wa.me/8801234567890" target="_blank">
                Contact on WhatsApp
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/programs">
                View Care Programs
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
