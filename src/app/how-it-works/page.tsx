import HowItWorks from '@/components/sections/how-it-works'

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              How It Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our process is designed to be simple, transparent, and focused on your family’s well-being.
            </p>
          </div>
        </div>
      </section>
      <HowItWorks />
    </>
  )
}

