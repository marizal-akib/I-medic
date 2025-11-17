import { HeartPulse, Stethoscope, Home, Pill, MessageCircle, LucideIcon } from 'lucide-react'

export interface HeroFeature {
  id: string
  icon: LucideIcon
  iconSize: number
  iconColor: string
  gradient: string
  bgGradient: string
  headline: string
  subtitle: string
  ctaPrimary: string
  ctaPrimaryLink: string
  ctaSecondary: string
  ctaSecondaryLink: string
  duration: number
}

export const heroFeatures: HeroFeature[] = [
  {
    id: 'family-care',
    icon: HeartPulse,
    iconSize: 120,
    iconColor: 'text-brand-purple-400',
    gradient: 'bg-gradient-to-br from-brand-purple-500 to-brand-blue-500',
    bgGradient: 'from-brand-purple-50 via-brand-blue-50 to-white',
    headline: 'Complete Family Care',
    subtitle: 'Digital records, home visits, and 24/7 monitoring for everyone you love',
    ctaPrimary: 'Get Started',
    ctaPrimaryLink: '/register',
    ctaSecondary: 'Learn More',
    ctaSecondaryLink: '/how-it-works',
    duration: 4000,
  },
  {
    id: 'trusted-doctors',
    icon: Stethoscope,
    iconSize: 120,
    iconColor: 'text-brand-orange-400',
    gradient: 'bg-gradient-to-br from-brand-orange-500 to-red-500',
    bgGradient: 'from-brand-orange-50 via-red-50 to-white',
    headline: 'Real Doctors Who Care',
    subtitle: 'Licensed medical professionals available around the clock for your family',
    ctaPrimary: 'Meet Our Team',
    ctaPrimaryLink: '/services',
    ctaSecondary: 'How It Works',
    ctaSecondaryLink: '/how-it-works',
    duration: 4000,
  },
  {
    id: 'home-visits',
    icon: Home,
    iconSize: 120,
    iconColor: 'text-brand-blue-400',
    gradient: 'bg-gradient-to-br from-brand-blue-500 to-cyan-500',
    bgGradient: 'from-brand-blue-50 via-cyan-50 to-white',
    headline: 'Healthcare at Your Door',
    subtitle: 'Professional nurses and caregivers visit your home on your schedule',
    ctaPrimary: 'Book Visit',
    ctaPrimaryLink: '/register',
    ctaSecondary: 'View Services',
    ctaSecondaryLink: '/services',
    duration: 4000,
  },
  {
    id: 'medication',
    icon: Pill,
    iconSize: 120,
    iconColor: 'text-brand-green-400',
    gradient: 'bg-gradient-to-br from-brand-green-500 to-teal-500',
    bgGradient: 'from-brand-green-50 via-teal-50 to-white',
    headline: 'Medicine Made Simple',
    subtitle: 'Prescriptions tracked, delivered, and managed for your entire household',
    ctaPrimary: 'Start Today',
    ctaPrimaryLink: '/register',
    ctaSecondary: 'See Pricing',
    ctaSecondaryLink: '/pricing',
    duration: 4000,
  },
  {
    id: 'support',
    icon: MessageCircle,
    iconSize: 120,
    iconColor: 'text-brand-purple-400',
    gradient: 'bg-gradient-to-br from-brand-purple-500 via-pink-500 to-brand-orange-400',
    bgGradient: 'from-brand-purple-50 via-pink-50 to-white',
    headline: 'Always Here for You',
    subtitle: 'WhatsApp support, emergency assistance, and care coordination 24/7',
    ctaPrimary: 'Contact Us',
    ctaPrimaryLink: '/contact',
    ctaSecondary: 'Get Help',
    ctaSecondaryLink: 'https://wa.me/8801234567890',
    duration: 4000,
  },
]

