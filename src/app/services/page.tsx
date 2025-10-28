'use client'

import Services from '@/components/sections/services'

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I-Medic provides a complete circle of health and care — designed for families, seniors, working professionals, and anyone who needs reliable support at home.
            </p>
          </div>
        </div>
      </section>
      <Services />
    </>
  )
}
