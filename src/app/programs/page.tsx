import Plans from '@/components/sections/Plans'
import HouseholdCover from '@/components/sections/HouseholdCover'
import PayPerUse from '@/components/sections/PayPerUse'
import PricingPromise from '@/components/sections/PricingPromise'

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Plans & Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find the perfect plan for your family’s needs. We offer flexible options to ensure you only pay for what you use.
            </p>
          </div>
        </div>
      </section>
      <Plans />
      <HouseholdCover />
      <PayPerUse />
      <PricingPromise />
    </>
  )
}
