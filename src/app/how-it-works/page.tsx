import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { 
  CalendarDaysIcon, 
  ClipboardDocumentCheckIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'How It Works | I-Medic Process',
  description: 'Learn how I-Medic works - from booking to care delivery. Simple steps to get professional healthcare at home in Bangladesh.',
}

const steps = [
  {
    id: '01',
    name: 'Book Your Service',
    description: 'Choose your healthcare service and schedule an appointment through our easy online booking system.',
    icon: CalendarDaysIcon,
    details: [
      'Select service type',
      'Choose preferred time',
      'Provide basic information',
      'Confirm booking'
    ]
  },
  {
    id: '02',
    name: 'Health Assessment',
    description: 'Our team conducts a thorough assessment of your health needs and preferences.',
    icon: ClipboardDocumentCheckIcon,
    details: [
      'Initial health evaluation',
      'Medical history review',
      'Care requirements analysis',
      'Personalized care plan'
    ]
  },
  {
    id: '03',
    name: 'Professional Care',
    description: 'Qualified healthcare professionals provide care in the comfort of your home.',
    icon: UserGroupIcon,
    details: [
      'Licensed professional visits',
      'Quality care delivery',
      'Real-time monitoring',
      'Family communication'
    ]
  },
  {
    id: '04',
    name: 'Progress Tracking',
    description: 'Every visit and health metric is logged in your digital health dashboard.',
    icon: ChartBarIcon,
    details: [
      'Digital health records',
      'Visit documentation',
      'Progress monitoring',
      'Data insights'
    ]
  },
  {
    id: '05',
    name: 'Regular Reports',
    description: 'Receive regular health reports and insights to keep your family informed.',
    icon: DocumentTextIcon,
    details: [
      'Health summaries',
      'Progress reports',
      'Family updates',
      'Recommendations'
    ]
  },
]

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
              How I-Medic Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Getting professional healthcare at home is simple with I-Medic. 
              Follow these easy steps to start your care journey.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                      <step.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-teal-600 text-white text-sm font-bold flex items-center justify-center">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 font-display mb-4">
                    {step.name}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600">
                        <div className="h-2 w-2 rounded-full bg-teal-500 mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-1 max-w-md">
                  <Card>
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="mx-auto h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                          <step.icon className="h-12 w-12 text-gray-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Step {step.id}</h4>
                        <p className="text-sm text-gray-600">{step.name}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
              Why Choose Our Process?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Simple & Clear</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Easy-to-follow steps with clear communication at every stage.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Professional Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Licensed healthcare professionals with verified credentials.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Family Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular updates and reports keep your whole family informed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can I get an appointment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Most appointments can be scheduled within 24-48 hours. Emergency services are available immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What areas do you serve?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We currently serve Dhaka and surrounding areas, with plans to expand to other major cities in Bangladesh.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I pay for services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We accept cash, mobile payments (bKash, Nagad), and bank transfers. Payment is due after service completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-display">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Book your first appointment and experience quality healthcare at home.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
