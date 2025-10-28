import Hero from '@/components/sections/hero'
import Why from '@/components/sections/why'
import Services from '@/components/sections/services'
import Plans from '@/components/sections/Plans'
import PayPerUse from '@/components/sections/PayPerUse'
import HouseholdCover from '@/components/sections/HouseholdCover'
import HowItWorks from '@/components/sections/how-it-works'
import PricingPromise from '@/components/sections/PricingPromise'
import SLAs from '@/components/sections/SLAs'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <Services />
      <Plans />
      <PayPerUse />
      <HouseholdCover />
      <HowItWorks />
      <PricingPromise />
      <SLAs />
      <Contact />
    </>
  )
}
