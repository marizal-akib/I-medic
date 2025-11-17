'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

interface CarouselProps {
  children: React.ReactNode[]
  itemsPerView?: {
    mobile: number
    tablet: number
    desktop: number
  }
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  gap?: number
}

export default function Carousel({
  children,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  gap = 32,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop)

  // Determine items to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerView.mobile)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerView.tablet)
      } else {
        setItemsToShow(itemsPerView.desktop)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [itemsPerView])

  const totalSlides = Math.ceil(children.length / itemsToShow)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, nextSlide])

  const visibleItems = children.slice(
    currentIndex * itemsToShow,
    (currentIndex + 1) * itemsToShow
  )

  return (
    <div className="relative w-full px-8 lg:px-16">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-8"
            style={{
              gridTemplateColumns: `repeat(${itemsToShow}, 1fr)`,
            }}
          >
            {visibleItems}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="w-5 h-5 lg:w-6 lg:h-6 text-slate-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:scale-110 transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
            disabled={currentIndex === totalSlides - 1}
          >
            <ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6 text-slate-700" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-brand-purple-500'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

