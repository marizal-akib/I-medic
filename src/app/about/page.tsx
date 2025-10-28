import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  BuildingOfficeIcon,
  AcademicCapIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'About I-Medic | Our Story & Mission',
  description: 'Learn about I-Medic\'s mission to provide connected, compassionate healthcare in Bangladesh. Meet our team and discover our commitment to quality care.',
}

const leadership = [
  {
    name: 'Dr. Sarah Rahman',
    role: 'Chief Medical Officer',
    bio: 'Former head of telemedicine at Dhaka Medical College with 15+ years in healthcare innovation.',
    image: '/team/sarah-rahman.jpg'
  },
  {
    name: 'Ahmed Hassan',
    role: 'Chief Executive Officer',
    bio: 'Healthcare technology entrepreneur with experience scaling digital health solutions across South Asia.',
    image: '/team/ahmed-hassan.jpg'
  },
  {
    name: 'Dr. Fatima Khan',
    role: 'Head of Clinical Operations',
    bio: 'Specialist in home healthcare delivery with extensive experience in patient care coordination.',
    image: '/team/fatima-khan.jpg'
  }
]

const partners = [
  {
    name: 'Square Hospital',
    type: 'Healthcare Partner',
    description: 'Leading private hospital providing specialist consultations and emergency backup.'
  },
  {
    name: 'Popular Diagnostic Centre',
    type: 'Laboratory Partner',
    description: 'Comprehensive diagnostic services with home sample collection capabilities.'
  },
  {
    name: 'Bangladesh Medical Association',
    type: 'Professional Body',
    description: 'Official recognition and support for our healthcare delivery standards.'
  },
  {
    name: 'Ministry of Health',
    type: 'Government Partner',
    description: 'Compliance with national healthcare regulations and telemedicine guidelines.'
  }
]

const values = [
  {
    icon: HeartIcon,
    title: 'Compassionate Care',
    description: 'Every interaction is guided by empathy and genuine concern for patient wellbeing.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Trust & Security',
    description: 'Your health data and privacy are protected with the highest security standards.'
  },
  {
    icon: UserGroupIcon,
    title: 'Family-Centered',
    description: 'We understand that healthcare affects the whole family, not just the patient.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Continuous Learning',
    description: 'Our team stays updated with the latest medical knowledge and best practices.'
  }
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-[--color-neutral-light] via-white to-[--color-neutral-light]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-display">
              Why Families Trust I-Medic
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I-Medic simplifies care for Bangladeshi families by merging human touch with organised systems.
              From home visits and hospital bookings to digital records and medicine reminders — we handle every detail so you don't have to.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Why I-Medic Exists
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Healthcare should be simple, accessible, and continuously connected — from home to hospital.
              We believe every Bangladeshi family deserves organized, compassionate care that fits their lives.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
                {/* Placeholder for founder/team image */}
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <BuildingOfficeIcon className="mx-auto h-16 w-16 text-[--color-teal-primary]" />
                    <p className="mt-4 text-sm text-gray-600">I-Medic Headquarters</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
              <p>
                Too many families struggle with healthcare coordination. Elderly parents miss medications, 
                post-surgery care becomes overwhelming, and medical records get lost between different providers. 
                We saw families spending more time managing healthcare than focusing on healing.
              </p>
              <p className="mt-8">
                <strong>Mission:</strong> Deliver peace of mind through structured, compassionate care.
              </p>
              <p className="mt-6">
                <strong>Promise:</strong> Verified professionals • Transparent updates • Secure medical history.
              </p>
              <p className="mt-8">
                I-Medic brings everything together — from home visits and hospital coordination to digital 
                records and family updates. We handle the complexity so families can focus on what matters most: 
                caring for each other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-[--color-neutral-light]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Our Core Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These principles guide every decision we make and every service we provide.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="hover:shadow-medium transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[--color-teal-primary] to-[--color-violet-accent]">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the experienced professionals leading I-Medic's mission to transform healthcare in Bangladesh.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="text-center">
                <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-[--color-teal-primary] to-[--color-violet-accent] flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-3xl">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 font-display">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-[--color-teal-primary] font-medium">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 sm:py-32 bg-[--color-neutral-light]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Trusted Partners
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We collaborate with leading healthcare institutions and organizations to ensure 
              the highest standards of care and compliance.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {partners.map((partner) => (
              <Card key={partner.name} className="hover:shadow-medium transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <span className="inline-flex items-center rounded-full bg-[--color-teal-primary]/10 px-3 py-1 text-xs font-medium text-[--color-teal-primary]">
                      {partner.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Compliance & Standards
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We maintain the highest standards of healthcare delivery and data protection.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-[--color-teal-primary]/10 flex items-center justify-center mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-[--color-teal-primary]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 font-display">Data Protection</h3>
              <p className="mt-4 text-base text-gray-600">
                Full compliance with Bangladesh ICT Act and international data protection standards. 
                Your health information is encrypted and secure.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-[--color-violet-accent]/10 flex items-center justify-center mb-6">
                <AcademicCapIcon className="h-8 w-8 text-[--color-violet-accent]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 font-display">Health Regulation</h3>
              <p className="mt-4 text-base text-gray-600">
                Licensed healthcare professionals following Bangladesh Medical & Dental Council guidelines 
                and Ministry of Health protocols.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-[--color-green-bangladesh]/10 flex items-center justify-center mb-6">
                <GlobeAltIcon className="h-8 w-8 text-[--color-green-bangladesh]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 font-display">Quality Assurance</h3>
              <p className="mt-4 text-base text-gray-600">
                Continuous monitoring and improvement of care quality through patient feedback 
                and clinical outcome tracking.
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
              Join I-Medic Today
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Experience organized, compassionate care that puts your family first. 
              Let us handle the healthcare coordination while you focus on what matters most.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-[--color-teal-primary] hover:bg-gray-100" asChild>
                <Link href="https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%27d%20like%20to%20join%20today">Chat on WhatsApp</Link>
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
