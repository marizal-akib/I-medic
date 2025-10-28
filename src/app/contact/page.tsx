import Contact from '@/components/sections/contact'

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're here to help you with any questions or concerns. Reach out to us through any of the methods below.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}

