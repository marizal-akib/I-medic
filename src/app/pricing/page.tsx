import Plans from '@/components/sections/Plans'
import PricingPromise from '@/components/sections/PricingPromise'
import PayPerUse from '@/components/sections/PayPerUse'
import HouseholdCover from '@/components/sections/HouseholdCover'
import SLAs from '@/components/sections/SLAs'

export const metadata = {
  title: 'Pricing | I-Medic',
  description: 'Affordable healthcare plans for individuals and families in Bangladesh',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="text-[#6C63FF]">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a plan that fits your needs. No hidden fees, no surprises. 
            Just quality healthcare you can afford.
          </p>
        </div>
      </section>

      {/* Pricing Sections */}
      <Plans />
      <PricingPromise />
      <PayPerUse />
      <HouseholdCover />
      <SLAs />
    </div>
  )
}

