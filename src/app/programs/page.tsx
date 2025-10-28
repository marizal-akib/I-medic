import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { CheckIcon, StarIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Care Programs | I-Medic Bangladesh',
  description: 'Choose the perfect care program for your family. From basic health tracking to comprehensive care, find the right plan that fits your needs and budget.',
}

const programs = [
  {
    name: 'SmartCare',
    subtitle: 'For Preventive and General Health',
    price: 'Starting Plan',
    description: 'For individuals and families who want organised health tracking and occasional medical support.',
    features: [
      { name: 'Doctor Consultation', included: true },
      { name: 'Home Visits', included: 'Optional' },
      { name: 'Medicine Support', included: true },
      { name: 'Care Plan & Tracking', included: true },
      { name: 'Lab & Sample Collection', included: true },
      { name: 'Hospital Coordination', included: false },
      { name: 'Physiotherapy', included: false },
      { name: 'On-call Follow-Up', included: true },
      { name: 'Family Updates', included: true },
      { name: '24/7 Support', included: false }
    ],
    cta: 'Join SmartCare',
    href: 'https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%27d%20like%20to%20join%20SmartCare',
    popular: false,
    color: 'teal',
    target: 'Working adults, students, or families wanting routine monitoring and preventive care',
    ideal: 'Stay healthy, stay organised. A foundation for every family to build long-term wellness.'
  },
  {
    name: 'ActiveCare',
    subtitle: 'For Ongoing Health or Recovery',
    price: 'Weekly Support',
    description: 'For elderly people, patients in recovery, or anyone who needs weekly visits and continuous coordination.',
    features: [
      { name: 'Doctor Consultation', included: true },
      { name: 'Home Visits', included: 'Weekly' },
      { name: 'Medicine Support', included: true },
      { name: 'Care Plan & Tracking', included: true },
      { name: 'Lab & Sample Collection', included: true },
      { name: 'Hospital Coordination', included: 'Optional' },
      { name: 'Physiotherapy', included: 'Add-on' },
      { name: 'On-call Follow-Up', included: true },
      { name: 'Family Updates', included: true },
      { name: '24/7 Support', included: 'Limited' }
    ],
    cta: 'Book ActiveCare',
    href: 'https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%27d%20like%20to%20book%20ActiveCare',
    popular: true,
    color: 'violet',
    target: 'Seniors living independently, post-surgery or rehabilitation patients, people managing long-term conditions',
    ideal: 'Stay supported, stay active. Steady follow-up and compassionate monitoring made easy.'
  },
  {
    name: 'TotalCare',
    subtitle: 'For Full-Time or Intensive Support',
    price: 'Complete Care',
    description: 'For patients and families needing daily care, hospital coordination, or full-time medical attention.',
    features: [
      { name: 'Doctor Consultation', included: true },
      { name: 'Home Visits', included: 'Daily / Hourly' },
      { name: 'Medicine Support', included: true },
      { name: 'Care Plan & Tracking', included: true },
      { name: 'Lab & Sample Collection', included: true },
      { name: 'Hospital Coordination', included: true },
      { name: 'Physiotherapy', included: true },
      { name: 'On-call Follow-Up', included: true },
      { name: 'Family Updates', included: true },
      { name: '24/7 Support', included: true }
    ],
    cta: 'Request Assessment',
    href: 'tel:+8801XXXXXXXXX',
    popular: false,
    color: 'green',
    target: 'Dependent elderly, chronic illness, or post-ICU patients. Families who need peace of mind and full management at home',
    ideal: 'Full-time help, full peace of mind. Complete home-to-hospital care — handled by professionals, updated in real time.'
  }
]

const colorClasses: Record<string, {
  bg: string;
  text: string;
  border: string;
  hover: string;
  light: string;
}> = {
  teal: {
    bg: 'bg-teal-500',
    text: 'text-teal-600',
    border: 'border-teal-500',
    hover: 'hover:bg-teal-500',
    light: 'bg-teal-50'
  },
  violet: {
    bg: 'bg-violet-500',
    text: 'text-violet-600',
    border: 'border-violet-500',
    hover: 'hover:bg-violet-500',
    light: 'bg-violet-50'
  },
  green: {
    bg: 'bg-bangladesh-500',
    text: 'text-bangladesh-600',
    border: 'border-bangladesh-500',
    hover: 'hover:bg-bangladesh-500',
    light: 'bg-bangladesh-50'
  }
}

const faqs = [
  {
    question: 'Can I switch between programs?',
    answer: 'Yes, you can upgrade or downgrade your program at any time. Changes take effect at the start of your next billing cycle.'
  },
  {
    question: 'What happens if I need emergency care?',
    answer: 'I-Medic is not an emergency service. For medical emergencies, dial 999. However, Complete Care members have 24/7 support for urgent non-emergency situations.'
  },
  {
    question: 'Are there any setup fees?',
    answer: 'No setup fees for any program. Everyday Care is completely free, and paid programs only charge monthly fees.'
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel anytime with 30 days notice. We offer a satisfaction guarantee for the first 30 days of paid programs.'
  }
]

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-[--color-neutral-light] via-white to-[--color-neutral-light]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-display">
              Choose Your Care Program
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              All I-Medic members — across every Care Program — can access these services based on their individual care plan, needs, and consent.
              The difference between plans is only in <strong>frequency</strong>, <strong>intensity</strong>, and <strong>support level</strong>, not in access.
            </p>
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <p className="text-base text-gray-700">
                <strong>Note:</strong> All members can access any I-Medic service anytime — care plans adjust to your health needs and consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Comparison */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {programs.map((program) => (
              <Card
                key={program.name}
                className={`relative ${
                  program.popular
                    ? 'ring-2 ring-[--color-violet-accent] shadow-medium scale-105 z-10'
                    : 'ring-1 ring-gray-200 shadow-soft'
                } hover:shadow-medium transition-all duration-300`}
              >
                {program.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-[--color-violet-accent] to-[--color-teal-primary] px-3 py-2 text-sm font-medium text-white text-center">
                    <StarIcon className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="pb-6 pt-6">
                  <div className="text-center mb-4">
                    <CardTitle className="text-2xl font-bold leading-8 text-gray-900 font-display">
                      {program.name}
                    </CardTitle>
                    <p className="text-sm font-medium text-gray-600 mt-1">
                      {program.subtitle}
                    </p>
                  </div>
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gradient-to-r from-[--color-teal-primary] to-[--color-violet-accent] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {program.price}
                    </span>
                  </div>
                  <CardDescription className="text-base leading-7 text-center mb-6">
                    {program.description}
                  </CardDescription>
                  
                  <div className={`p-4 rounded-lg ${colorClasses[program.color].light} mb-6`}>
                    <h4 className="font-semibold text-gray-900 font-display mb-2 text-sm">
                      Ideal For:
                    </h4>
                    <p className="text-sm text-gray-600">{program.target}</p>
                  </div>

                  <div className="text-center mb-6">
                    <blockquote className="text-base font-medium text-gray-900 italic">
                      "{program.ideal.split('.')[0]}"
                    </blockquote>
                    <p className="text-sm text-gray-600 mt-2">{program.ideal.split('.').slice(1).join('.')}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    className={`w-full mb-8 ${
                      program.popular 
                        ? `${colorClasses[program.color].bg} text-white hover:opacity-90` 
                        : `border-2 ${colorClasses[program.color].border} ${colorClasses[program.color].text} ${colorClasses[program.color].hover} hover:text-white`
                    } transition-all duration-200`}
                    variant={program.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href={program.href}>
                      {program.cta}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <ul role="list" className="space-y-3 text-sm leading-6">
                    {program.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex gap-x-3 items-center">
                        {feature.included === true ? (
                          <CheckIcon className={`h-5 w-5 flex-none ${colorClasses[program.color].text}`} aria-hidden="true" />
                        ) : feature.included === false ? (
                          <XMarkIcon className="h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
                        ) : (
                          <CheckIcon className={`h-5 w-5 flex-none ${colorClasses[program.color].text}`} aria-hidden="true" />
                        )}
                        <span className="flex-1 text-gray-600">
                          {feature.name}
                        </span>
                        {typeof feature.included === 'string' && (
                          <span className={`text-xs px-2 py-1 rounded-full ${colorClasses[program.color].light} ${colorClasses[program.color].text} font-medium`}>
                            {feature.included}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Which Plan Quiz */}
      <section className="py-24 sm:py-32 bg-[--color-neutral-light]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Which Plan Suits You?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Not sure which program is right for your family? Use our quick assessment guide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.name} className={`text-center hover:shadow-medium transition-shadow duration-300 ${colorClasses[program.color].light}`}>
                <CardHeader>
                  <div className="text-4xl mb-4">
                    {program.name === 'Everyday Care' && '🏃‍♂️'}
                    {program.name === 'Assisted Care' && '👥'}
                    {program.name === 'Complete Care' && '🏥'}
                  </div>
                  <CardTitle className="text-xl">{program.target}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{program.ideal}</p>
                  <div className={`text-sm font-medium ${colorClasses[program.color].text}`}>
                    → {program.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                <QuestionMarkCircleIcon className="mr-2 h-5 w-5" />
                Need Help Choosing?
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Detailed Feature Comparison
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Compare all features across our care programs to make the best choice for your family.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Features
                  </th>
                  {programs.map((program) => (
                    <th key={program.name} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {program.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {programs[0].features.map((feature, featureIdx) => (
                  <tr key={featureIdx} className={featureIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {feature.name}
                    </td>
                    {programs.map((program) => (
                      <td key={program.name} className="px-6 py-4 whitespace-nowrap text-center">
                        {program.features[featureIdx].included === true ? (
                          <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                        ) : program.features[featureIdx].included === false ? (
                          <XMarkIcon className="h-5 w-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                            {program.features[featureIdx].included}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-[--color-neutral-light]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-green-50 px-6 py-3 text-sm font-medium text-green-800">
              <CheckIcon className="h-5 w-5 mr-2 text-green-600" />
              30-day satisfaction guarantee on all paid plans
            </div>
            <p className="mt-4 text-gray-600">
              Try any paid program risk-free. If you&apos;re not completely satisfied, we'll refund your first month.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-[--color-teal-primary] to-[--color-violet-accent]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
              Start Your Family's Care Journey Today
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Join thousands of Bangladeshi families who trust I-Medic for their healthcare needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-white text-[--color-teal-primary] hover:bg-gray-100" asChild>
                <Link href="https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%27d%20like%20to%20book%20a%20free%20assessment">Book a Free Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[--color-teal-primary]" asChild>
                <Link href="https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%27d%20like%20to%20talk%20to%20your%20team">Chat on WhatsApp</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
