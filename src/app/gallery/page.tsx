'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

// Sample gallery images data
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/home-care-1.jpg",
    alt: "Nurse providing home care to elderly patient",
    category: "Home Care",
    title: "Compassionate Home Nursing",
    description: "Our trained nurses provide professional care in the comfort of your home."
  },
  {
    id: 2,
    src: "/images/gallery/hospital-1.jpg",
    alt: "I-Medic team at partner hospital",
    category: "Hospital",
    title: "Hospital Partnership",
    description: "Working closely with leading hospitals across Bangladesh."
  },
  {
    id: 3,
    src: "/images/gallery/community-1.jpg",
    alt: "Community health awareness program",
    category: "Community",
    title: "Health Awareness Program",
    description: "Educating communities about preventive healthcare."
  },
  {
    id: 4,
    src: "/images/gallery/team-1.jpg",
    alt: "I-Medic healthcare team",
    category: "Team",
    title: "Our Healthcare Heroes",
    description: "Meet the dedicated professionals who make I-Medic possible."
  },
  {
    id: 5,
    src: "/images/gallery/home-care-2.jpg",
    alt: "Physiotherapy session at home",
    category: "Home Care",
    title: "Home Physiotherapy",
    description: "Professional physiotherapy services in your home environment."
  },
  {
    id: 6,
    src: "/images/gallery/hospital-2.jpg",
    alt: "Medical consultation at hospital",
    category: "Hospital",
    title: "Expert Medical Consultations",
    description: "Coordinating specialist consultations for our members."
  },
  {
    id: 7,
    src: "/images/gallery/community-2.jpg",
    alt: "Free health checkup camp",
    category: "Community",
    title: "Free Health Checkups",
    description: "Regular health screening camps in local communities."
  },
  {
    id: 8,
    src: "/images/gallery/team-2.jpg",
    alt: "Care coordinators meeting",
    category: "Team",
    title: "Care Coordination Team",
    description: "Our care coordinators ensure seamless service delivery."
  },
  {
    id: 9,
    src: "/images/gallery/home-care-3.jpg",
    alt: "Medication management at home",
    category: "Home Care",
    title: "Medication Management",
    description: "Helping families organize and track medications safely."
  },
  {
    id: 10,
    src: "/images/gallery/hospital-3.jpg",
    alt: "Emergency transport service",
    category: "Hospital",
    title: "Emergency Transport",
    description: "Quick and safe transport to hospitals when needed."
  },
  {
    id: 11,
    src: "/images/gallery/community-3.jpg",
    alt: "Health education workshop",
    category: "Community",
    title: "Health Education Workshop",
    description: "Teaching families about disease prevention and healthy living."
  },
  {
    id: 12,
    src: "/images/gallery/team-3.jpg",
    alt: "Training session for caregivers",
    category: "Team",
    title: "Continuous Training",
    description: "Regular training ensures our team stays updated with best practices."
  }
]

const categories = ["All", "Home Care", "Hospital", "Community", "Team"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/20 to-blue-50/20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-gradient-to-br from-teal-100/60 to-blue-100/60 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 h-48 w-48 rounded-full bg-gradient-to-br from-violet-100/60 to-pink-100/60 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            <div className="inline-flex items-center rounded-full bg-teal-100 px-3 sm:px-4 py-2 text-sm font-medium text-teal-800 mb-4">
              <span className="h-2 w-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
              Photo Gallery
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-display bg-gradient-to-r from-teal-700 via-blue-700 to-violet-700 bg-clip-text text-transparent">
              See I-Medic in Action
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700 font-medium px-2">
              Witness the compassionate care, professional service, and positive impact we bring to Bangladeshi families every day.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700 shadow-md hover:shadow-lg"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in-up bg-gradient-to-br from-gray-100 to-gray-200"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(index)}
              >
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mb-4 mx-auto">
                      <svg className="h-8 w-8 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-600">{image.category}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2">
                      {image.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium text-gray-800">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-full p-4">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 backdrop-blur-sm p-2 text-white hover:bg-white/20 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 backdrop-blur-sm p-2 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 backdrop-blur-sm p-2 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3] w-full max-w-3xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mb-4 mx-auto">
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{filteredImages[currentImageIndex]?.title}</h3>
                  <p className="text-gray-300">{filteredImages[currentImageIndex]?.description}</p>
                </div>
              </div>
            </div>

            {/* Image info */}
            <div className="mt-4 text-center text-white">
              <p className="text-sm text-gray-300">
                {currentImageIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-teal-600 via-blue-600 to-violet-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
            Ready to Experience I-Medic Care?
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            Join thousands of families who trust I-Medic for their healthcare needs.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 shadow-lg hover:shadow-xl">
            <a href="https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%27d%20like%20to%20learn%20more%20about%20your%20services">
              Start Your Care Journey
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
