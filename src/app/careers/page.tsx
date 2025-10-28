import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPinIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Careers | Join I-Medic Team',
  description: 'Join the I-Medic team and make a difference in healthcare. Explore career opportunities for healthcare professionals in Bangladesh.',
}

const jobs = [
  {
    title: 'Registered Nurse',
    type: 'Full-time',
    location: 'Dhaka',
    salary: '৳35,000 - ৳50,000',
    description: 'Provide professional nursing care in patients\' homes. Experience in home healthcare preferred.',
    requirements: ['Valid nursing license', '2+ years experience', 'Good communication skills']
  },
  {
    title: 'Healthcare Assistant',
    type: 'Part-time',
    location: 'Dhaka',
    salary: '৳20,000 - ৳30,000',
    description: 'Support patients with daily activities and basic healthcare needs under supervision.',
    requirements: ['Healthcare certification', 'Compassionate nature', 'Flexible schedule']
  },
  {
    title: 'Phlebotomist',
    type: 'Contract',
    location: 'Multiple locations',
    salary: '৳25,000 - ৳35,000',
    description: 'Collect blood samples and specimens from patients in their homes.',
    requirements: ['Phlebotomy certification', 'Own transportation', 'Professional appearance']
  },
  {
    title: 'Care Coordinator',
    type: 'Full-time',
    location: 'Dhaka',
    salary: '৳40,000 - ৳55,000',
    description: 'Coordinate patient care plans and communicate with families and healthcare providers.',
    requirements: ['Healthcare background', 'Strong organization skills', 'Computer literacy']
  }
]

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Make a difference in healthcare. Join I-Medic and help us provide compassionate care to families across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
              Why Work With I-Medic?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work-life balance with flexible hours and remote opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Professional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Continuous training and development opportunities in healthcare technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Make an Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Directly improve the lives of patients and families in your community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore current opportunities to join our healthcare team.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 font-display mb-2">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start">
                              <span className="text-teal-600 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:ml-6">
                      <Button>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
              Application Process
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <span className="text-teal-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-sm text-gray-600">Submit your application and resume through our portal.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-violet-100 flex items-center justify-center mb-4">
                <span className="text-violet-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-sm text-gray-600">Our HR team reviews your qualifications and experience.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-bangladesh-100 flex items-center justify-center mb-4">
                <span className="text-bangladesh-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-sm text-gray-600">Meet with our team to discuss the role and your fit.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <span className="text-gray-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Welcome</h3>
              <p className="text-sm text-gray-600">Join our team and start making a difference!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-display">
            Don't See the Right Position?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're always looking for talented healthcare professionals. Send us your resume!
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="mailto:careers@i-medic.org.bd">
                Send Your Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
