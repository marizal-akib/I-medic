'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
  viewport: { once: true }
}

export default function DarkCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-health opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue opacity-20 blur-[120px] rounded-full"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          {...fadeIn}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display tracking-tight leading-tight">
            Start caring for your family&apos;s health today
          </h2>
          <p className="mt-6 text-xl text-slate-300 leading-relaxed">
            Join thousands of families who trust I-Medic for comprehensive healthcare management.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link href="/register">
                Get Started Free
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
              <Link href="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


