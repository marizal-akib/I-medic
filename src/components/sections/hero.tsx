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
    <section className="bg-brand-soft py-20 sm:py-28">
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
            Smart home care + health record for your family
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-brand-ink80"
            variants={fadeInUp}
          >
            We organise your medical history, run only needed tests, and send nurses or assistants to your home in Khulna & Bagerhat.
          </motion.p>
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            variants={fadeInUp}
          >
            <Button size="lg" asChild>
              <Link href="https://wa.me/880XXXXXXXXXX">
                WhatsApp Book Now
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="tel:+880XXXXXXXXXX">
                Call
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="#plans">
                Learn Plans
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
