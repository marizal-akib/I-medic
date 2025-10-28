import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckIcon, StarIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const programs = [
  {
    name: 'SmartCare',
    subtitle: 'For Preventive and General Health',
    price: 'Starting Plan',
    description: 'For individuals and families who want organised health tracking and occasional medical support.',
    features: [
      'Free onboarding health screening and profile setup',
      'Digital health record access for all reports',
      'Doctor or nurse consultations as needed',
      'On-call follow-ups and health reminders',
      'Lab tests, sample collection, and result tracking',
      'Medicine purchase and delivery help',
      'Access to all I-Medic services on request'
    ],
    idealFor: 'Working adults, students, or families wanting routine monitoring and preventive care.',
    value: 'Stay healthy, stay organised.',
    valueDesc: 'A foundation for every family to build long-term wellness.',
    cta: 'Join SmartCare',
    href: 'https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%27d%20like%20to%20join%20SmartCare',
    popular: false,
    color: 'teal'
  },
  {
    name: 'ActiveCare',
    subtitle: 'For Ongoing Health or Recovery',
    price: 'Weekly Support',
    description: 'For elderly people, patients in recovery, or anyone who needs weekly visits and continuous coordination.',
    features: [
      'Everything in SmartCare',
      'Weekly or every-three-day home visits by nurse or carer',
      'Vital signs and medication tracking',
      'Regular WhatsApp updates for family members',
      'On-call nurse or coordinator support',
      'Personalised care plan and visit reminders',
      'Add-ons: Physiotherapy, nurse, personal carer, Lifestyle Companionship',
      'Access to all I-Medic services'
    ],
    idealFor: 'Seniors living independently, post-surgery or rehabilitation patients, people managing long-term conditions.',
    value: 'Stay supported, stay active.',
    valueDesc: 'Steady follow-up and compassionate monitoring made easy.',
    cta: 'Book ActiveCare',
    href: 'https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%27d%20like%20to%20book%20ActiveCare',
    popular: true,
    color: 'violet'
  },
  {
    name: 'TotalCare',
    subtitle: 'For Full-Time or Intensive Support',
    price: 'Complete Care',
    description: 'For patients and families needing daily care, hospital coordination, or full-time medical attention.',
    features: [
      'Everything from SmartCare and ActiveCare',
      'Daily or hourly visits by assigned care team',
      'Full medicine and treatment supervision',
      'Hospital travel, admission, and discharge support',
      'Continuous on-call nurse or coordinator assistance',
      '24/7 WhatsApp communication and family reports',
      'On-call follow-ups and custom reminder setup',
      'Access to all I-Medic services: care plan management, physiotherapy, lab tests, supplies, and counselling'
    ],
    idealFor: 'Dependent elderly, chronic illness, or post-ICU patients. Families who need peace of mind and full management at home.',
    value: 'Full-time help, full peace of mind.',
    valueDesc: 'Complete home-to-hospital care — handled by professionals, updated in real time.',
    cta: 'Request Assessment',
    href: 'tel:+8801XXXXXXXXX',
    popular: false,
    color: 'green'
  }
]

const colorClasses: Record<string, {
  bg: string;
  text: string;
  border: string;
  hover: string;
}> = {
  teal: {
    bg: 'bg-teal-500',
    text: 'text-teal-600',
    border: 'border-teal-500',
    hover: 'hover:bg-teal-500'
  },
  violet: {
    bg: 'bg-violet-500',
    text: 'text-violet-600',
    border: 'border-violet-500',
    hover: 'hover:bg-violet-500'
  },
  green: {
    bg: 'bg-bangladesh-500',
    text: 'text-bangladesh-600',
    border: 'border-bangladesh-500',
    hover: 'hover:bg-bangladesh-500'
  }
}

export default function Programs() {
  return (
    <section id="programs" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-violet-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-gradient-to-br from-teal-200/40 to-blue-200/40 blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-gradient-to-br from-violet-200/40 to-pink-200/40 blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <div className="inline-flex items-center rounded-full bg-teal-100 px-3 sm:px-4 py-2 text-sm font-medium text-teal-800 mb-4">
            <span className="h-2 w-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
            Our Care Programs
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-display bg-gradient-to-r from-gray-900 via-teal-800 to-blue-800 bg-clip-text text-transparent">
            Choose Your Care Program
          </h2>
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700 font-medium px-2">
            All I-Medic members — across every Care Program — can access these services based on their individual care plan, needs, and consent.
            The difference between plans is only in <strong className="text-teal-700">frequency</strong>, <strong className="text-blue-700">intensity</strong>, and <strong className="text-violet-700">support level</strong>, not in access.
          </p>
        </div>

        <div className="isolate mx-auto mt-12 sm:mt-16 lg:mt-20 grid max-w-sm sm:max-w-md grid-cols-1 gap-y-6 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 px-4 sm:px-0">
          {programs.map((program, index) => (
            <Card
              key={program.name}
              className={`relative group hover-lift ${
                program.popular
                  ? 'ring-2 ring-violet-400 shadow-2xl scale-105 z-10 bg-gradient-to-br from-white to-violet-50/50'
                  : 'ring-1 ring-gray-200/50 shadow-lg bg-gradient-to-br from-white to-gray-50/50'
              } hover:shadow-2xl transition-all duration-500 animate-fade-in-up backdrop-blur-sm`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {program.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-36 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-teal-500 px-4 py-2 text-sm font-bold text-white text-center shadow-lg animate-pulse">
                  <StarIcon className="inline h-4 w-4 mr-1 animate-spin" style={{ animationDuration: '3s' }} />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4 sm:pb-6 pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="text-center mb-3 sm:mb-4">
                  <CardTitle className="text-xl sm:text-2xl font-bold leading-7 sm:leading-8 text-gray-900 font-display">
                    {program.name}
                  </CardTitle>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mt-1">
                    {program.subtitle}
                  </p>
                </div>
                <div className="text-center mb-4 sm:mb-6">
                  <span className="inline-block bg-gradient-to-r from-teal-500 via-blue-500 to-violet-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-lg animate-glow">
                    {program.price}
                  </span>
                </div>
                <CardDescription className="text-sm sm:text-base leading-6 sm:leading-7 text-center px-2">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Includes</h4>
                  <ul role="list" className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-600">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex gap-x-2 sm:gap-x-3">
                        <CheckIcon className={`h-4 w-4 sm:h-5 sm:w-5 flex-none ${colorClasses[program.color].text} mt-0.5`} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Ideal For</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-5 sm:leading-6">{program.idealFor}</p>
                </div>

                <div className="mb-4 sm:mb-6 text-center">
                  <blockquote className="text-base sm:text-lg font-medium text-gray-900 italic mb-2 leading-6 sm:leading-7">
                    "{program.value}"
                  </blockquote>
                  <p className="text-xs sm:text-sm text-gray-600 leading-5 sm:leading-6">{program.valueDesc}</p>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <Button 
                    className={`w-full text-sm sm:text-base py-2 sm:py-3 ${
                      program.popular 
                        ? `${colorClasses[program.color].bg} text-white hover:opacity-90` 
                        : `border-2 ${colorClasses[program.color].border} ${colorClasses[program.color].text} ${colorClasses[program.color].hover} hover:text-white`
                    } transition-all duration-200`}
                    variant={program.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href={program.href}>
                      {program.cta}
                      <ArrowRightIcon className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison helper */}
        <div className="mt-16 sm:mt-20">
          <div className="rounded-2xl bg-white p-8 shadow-soft">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 font-display">
                Which plan suits you?
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                Not sure which program is right for your family? Take our quick assessment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="text-center p-6 rounded-lg bg-[--color-teal-primary]/5">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h4 className="font-semibold text-gray-900 font-display">Active & Independent</h4>
                <p className="text-sm text-gray-600 mt-2">
                  You're healthy but want to stay proactive about your health with digital tracking and occasional consultations.
                </p>
                <div className="mt-4 text-sm font-medium text-[--color-teal-primary]">→ Everyday Care</div>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-[--color-violet-accent]/5">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="font-semibold text-gray-900 font-display">Need Regular Support</h4>
                <p className="text-sm text-gray-600 mt-2">
                  You or a family member needs regular check-ins, medication management, or recovery support.
                </p>
                <div className="mt-4 text-sm font-medium text-[--color-violet-accent]">→ Assisted Care</div>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-[--color-green-bangladesh]/5">
                <div className="text-4xl mb-4">🏥</div>
                <h4 className="font-semibold text-gray-900 font-display">Intensive Care Needed</h4>
                <p className="text-sm text-gray-600 mt-2">
                  You need comprehensive, daily support or are managing complex health conditions.
                </p>
                <div className="mt-4 text-sm font-medium text-[--color-green-bangladesh]">→ Complete Care</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link href="/programs">
                  View Detailed Comparison
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex items-center rounded-full bg-green-50 px-6 py-3 text-sm font-medium text-green-800">
            <CheckIcon className="h-5 w-5 mr-2 text-green-600" />
            30-day satisfaction guarantee on all paid plans
          </div>
        </div>
      </div>
    </section>
  )
}
