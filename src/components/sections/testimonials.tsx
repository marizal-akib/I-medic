import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    content: "I-Medic handled everything from booking tests to reminding my father about medicines. We just followed their WhatsApp updates.",
    author: {
      name: "Sabiha R.",
      role: "Family Member",
      location: "Khulna"
    },
    rating: 5
  },
  {
    content: "Professional, caring, and always available. They managed hospital coordination and home visits perfectly.",
    author: {
      name: "Rafi A.",
      role: "Patient",
      location: "Dhaka"
    },
    rating: 5
  },
  {
    content: "The care team made recovery so much easier. Everything was organized and we always knew what was happening next.",
    author: {
      name: "Nasreen K.",
      role: "Family Member", 
      location: "Chattogram"
    },
    rating: 5
  }
]

const stats = [
  { id: 1, name: 'Families served', value: '2,500+' },
  { id: 2, name: 'Healthcare professionals', value: '150+' },
  { id: 3, name: 'Cities covered', value: '12' },
  { id: 4, name: 'Patient satisfaction', value: '4.9/5' },
]

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[--color-teal-primary]">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            Trusted by Families Across Bangladesh
          </p>
        </div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div
                key={testimonialIdx}
                className="rounded-2xl bg-gray-50 p-8 shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="flex gap-x-1 text-[--color-teal-primary] mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-gray-900">
                  <p className="text-base leading-7">"{testimonial.content}"</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[--color-teal-primary] to-[--color-violet-accent] flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.author.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 font-display">{testimonial.author.name}</div>
                    <div className="text-sm leading-6 text-gray-600">{testimonial.author.role}</div>
                    <div className="text-sm leading-6 text-gray-500">{testimonial.author.location}</div>
                  </div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display">
                  <span className="text-gradient">{stat.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Partners section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center">
            <h3 className="text-lg font-semibold leading-8 text-gray-900 font-display">
              Trusted Partners
            </h3>
            <p className="mt-2 text-base text-gray-600">
              Working with leading healthcare institutions across Bangladesh
            </p>
          </div>
          
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {/* Partner logos placeholder - replace with actual logos */}
            {[
              'Square Hospital',
              'United Hospital',
              'Apollo Hospital',
              'Popular Diagnostic',
              'Ibn Sina Hospital'
            ].map((partner, index) => (
              <div key={index} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-2">
                    <div className="h-6 w-6 rounded bg-gray-300"></div>
                  </div>
                  <span className="text-xs font-medium text-gray-500">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-[--color-teal-primary] to-[--color-violet-accent] px-6 py-16 sm:px-12">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl font-display">
              Join thousands of satisfied families
            </h3>
            <p className="mt-4 text-lg text-white/90">
              Experience the I-Medic difference with professional, caring healthcare at home.
            </p>
            <div className="mt-8">
              <a
                href="/booking"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-[--color-teal-primary] shadow-sm hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Care Journey
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
