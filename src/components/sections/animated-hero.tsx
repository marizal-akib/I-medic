'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { heroFeatures } from '@/data/hero-features'

export default function AnimatedHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const currentFeature = heroFeatures[activeIndex]
  const IconComponent = currentFeature.icon

  // Auto-rotation logic
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroFeatures.length)
    }, currentFeature.duration)

    return () => clearInterval(interval)
  }, [isPaused, activeIndex, currentFeature.duration])

  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Background Gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className={`absolute inset-0 bg-gradient-to-br ${currentFeature.bgGradient}`}
        />
      </AnimatePresence>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orb 1 - Top Left */}
        <motion.div
          key={`orb1-${activeIndex}`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] 
            ${currentFeature.gradient} opacity-20 blur-3xl rounded-full`}
        />

        {/* Orb 2 - Bottom Right */}
        <motion.div
          key={`orb2-${activeIndex}`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -120, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className={`absolute bottom-1/4 right-1/4 w-[700px] h-[700px] 
            ${currentFeature.gradient} opacity-15 blur-3xl rounded-full hidden sm:block`}
        />

        {/* Orb 3 - Center (Behind Icon) */}
        <motion.div
          key={`orb3-${activeIndex}`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[500px] h-[500px] ${currentFeature.gradient} opacity-10 blur-[120px] rounded-full hidden lg:block`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        {/* Animated Icon */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`icon-${activeIndex}`}
            initial={{ 
              scale: 0.8, 
              opacity: 0, 
              y: 20,
              rotate: -10 
            }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              rotate: 0
            }}
            exit={{ 
              scale: 0.8, 
              opacity: 0, 
              y: -20,
              rotate: 10 
            }}
            transition={{ 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1] // Apple's easing
            }}
            className="relative mb-8 sm:mb-12 flex justify-center"
          >
            {/* Icon with continuous breathing */}
            <motion.div
              animate={{ 
                scale: [1, 1.08, 1],
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.2
              }}
              className={`${currentFeature.iconColor} drop-shadow-2xl relative`}
            >
              <IconComponent size={80} className="sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px]" strokeWidth={1.5} />
              
              {/* Glow Effect Layer 1 */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute inset-0 ${currentFeature.gradient} 
                  blur-[60px] opacity-40 -z-10`}
              />
              
              {/* Glow Effect Layer 2 - Slower pulse */}
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className={`absolute inset-0 ${currentFeature.gradient} 
                  blur-[80px] opacity-20 -z-20`}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Animated Headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`headline-${activeIndex}`}
            initial={{ 
              opacity: 0, 
              y: 30,
              filter: 'blur(10px)'
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              filter: 'blur(0px)'
            }}
            exit={{ 
              opacity: 0, 
              y: -30,
              filter: 'blur(10px)'
            }}
            transition={{ 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1 // Slightly after icon
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black 
              text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            {currentFeature.headline}
          </motion.h1>
        </AnimatePresence>

        {/* Animated Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`subtitle-${activeIndex}`}
            initial={{ 
              opacity: 0, 
              y: 20,
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            exit={{ 
              opacity: 0, 
              y: -20,
            }}
            transition={{ 
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2 // After headline
            }}
            className="text-lg sm:text-xl lg:text-2xl text-slate-600 
              max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12"
          >
            {currentFeature.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* CTA Buttons */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`buttons-${activeIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary Button - Animated Gradient */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={currentFeature.ctaPrimaryLink}
                className="group relative px-8 py-4 rounded-xl 
                  font-bold overflow-hidden inline-flex items-center justify-center
                  bg-gradient-to-r from-brand-purple-500 to-brand-blue-500 shadow-lg
                  transition-all duration-300 w-full sm:w-auto min-w-[180px]"
                style={{
                  backgroundImage: activeIndex === 0 ? 'linear-gradient(135deg, #8B3FD8 0%, #4A90E2 100%)' :
                                   activeIndex === 1 ? 'linear-gradient(135deg, #E74C3C 0%, #dc2626 100%)' :
                                   activeIndex === 2 ? 'linear-gradient(135deg, #4A90E2 0%, #06b6d4 100%)' :
                                   activeIndex === 3 ? 'linear-gradient(135deg, #27AE60 0%, #14b8a6 100%)' :
                                   'linear-gradient(135deg, #8B3FD8 0%, #ec4899 50%, #E74C3C 100%)'
                }}
              >
                {/* Animated shine effect */}
                <span className="absolute inset-0 -translate-x-full 
                  group-hover:translate-x-full transition-transform duration-700 ease-out
                  bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                
                <span className="relative z-10 flex items-center gap-2 text-white font-bold text-base">
                  {currentFeature.ctaPrimary}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </motion.div>

            {/* Secondary Button - Outline with backdrop */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={currentFeature.ctaSecondaryLink}
                className="relative px-8 py-4 rounded-xl font-semibold
                  border-2 border-slate-900/20 text-slate-900 backdrop-blur-sm
                  hover:border-slate-900/40 hover:bg-white/60
                  transition-all duration-300
                  inline-flex items-center justify-center w-full sm:w-auto min-w-[180px]
                  shadow-lg shadow-slate-900/5"
              >
                {currentFeature.ctaSecondary}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="flex gap-2 justify-center mt-12 sm:mt-16">
          {heroFeatures.map((feature, idx) => (
            <motion.button
              key={feature.id}
              onClick={() => setActiveIndex(idx)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative h-1.5 rounded-full transition-all duration-500 overflow-hidden
                ${idx === activeIndex 
                  ? 'w-10' 
                  : 'w-1.5 bg-slate-900/20 hover:bg-slate-900/40'
                }`}
              aria-label={`Go to ${feature.headline}`}
            >
              {idx === activeIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute inset-0 ${currentFeature.gradient}`}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

