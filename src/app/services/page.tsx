'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { 
  CheckIcon,
  ClockIcon,
  HomeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { ServiceCategory } from '@/components/sections/service-category'
import { serviceCategories } from '@/data/service-categories'

const serviceHighlights = [
  {
    title: 'Licensed Professionals',
    description: 'All healthcare providers are licensed, verified, and continuously trained.',
    icon: CheckIcon
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support and emergency response for your peace of mind.',
    icon: ClockIcon
  },
  {
    title: 'Home Comfort',
    description: 'Receive professional care in the familiar environment of your home.',
    icon: HomeIcon
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-[--color-neutral-light] via-white to-[--color-neutral-light]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-display">
              All Our Services Are Part of Your Plan
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Access any service anytime based on your needs and care plan. Every I-Medic member can use these services 
              according to their program level and individual health requirements.
            </p>
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <p className="text-base text-gray-700">
                <strong>Note:</strong> All members can access any I-Medic service anytime — care plans adjust to your health needs and consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Four Categories of Care Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Click on each category to explore the services available to all I-Medic members.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            {serviceCategories.map((category) => (
              <ServiceCategory key={category.title} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 sm:py-32 bg-[--color-neutral-light]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Why Choose I-Medic Services?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {serviceHighlights.map((highlight) => (
              <Card key={highlight.title} className="text-center hover:shadow-medium transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-[--color-teal-primary] to-[--color-violet-accent] flex items-center justify-center mb-4">
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-16 bg-red-50 border-l-4 border-red-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <ShieldCheckIcon className="h-8 w-8 text-red-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-red-800">
                Important Emergency Notice
              </h3>
              <p className="mt-2 text-base text-red-700">
                I-Medic is not an emergency service. For medical emergencies, please dial 999 immediately 
                or visit the nearest hospital emergency department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-[--color-teal-primary] to-[--color-violet-accent]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Talk to a Care Coordinator
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              All members can access any I-Medic service anytime — care plans adjust to your health needs and consent.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-[--color-teal-primary] hover:bg-gray-100" asChild>
                <Link href="https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%27d%20like%20to%20talk%20to%20a%20care%20coordinator">Chat on WhatsApp</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[--color-teal-primary]" asChild>
                <Link href="/programs">View Care Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
