'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Hero() {
  return (
    <section className="relative bg-white pt-32 sm:pt-40 pb-32 sm:pb-40 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl font-display leading-[1.1]"
            variants={fadeInUp}
          >
            Healthcare for everyone you love
          </motion.h1>
          <motion.p 
            className="mt-8 text-xl sm:text-2xl leading-relaxed text-slate-600 max-w-3xl mx-auto font-normal"
            variants={fadeInUp}
          >
            Complete family health management with digital records, home visits, and 24/7 care monitoring.
          </motion.p>
          <motion.div 
            className="mt-12 flex items-center justify-center gap-4 flex-wrap"
            variants={fadeInUp}
          >
            <Button size="lg" asChild>
              <Link href="/register">
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/how-it-works">
                Learn More
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
