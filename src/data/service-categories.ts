import { 
  HomeIcon, 
  HeartIcon, 
  TruckIcon, 
  ChartBarIcon
} from '@heroicons/react/24/outline'

export const serviceCategories = [
  {
    title: 'Home & Daily Care',
    icon: HomeIcon,
    description: 'Professional care and support in the comfort of your home',
    services: [
      'Regular visits by carers, nurses, or physiotherapists',
      'Help with meals, hygiene, and mobility',
      'Medicine delivery and reminders',
      'Lifestyle Companionship — light activities, gardening, reading, walks',
      'Home safety and comfort checks'
    ],
    color: 'teal'
  },
  {
    title: 'Medical Support',
    icon: HeartIcon,
    description: 'Comprehensive medical care and professional health services',
    services: [
      'Doctor consultations and advice',
      'Sample collection for blood, urine, or swab tests',
      'Dressing, IV, injections, and wound care',
      'Post-surgery monitoring and physiotherapy',
      '24/7 helpline for follow-up and urgent coordination'
    ],
    color: 'violet'
  },
  {
    title: 'Hospital & Travel Assistance',
    icon: TruckIcon,
    description: 'Complete support for hospital visits and medical appointments',
    services: [
      'Escort to hospital visits or therapy sessions',
      'Appointment and admission booking',
      'Report and discharge collection',
      'Coordination between hospital, family, and home-care team'
    ],
    color: 'green'
  },
  {
    title: 'Health Management',
    icon: ChartBarIcon,
    description: 'Digital health tracking and personalized care coordination',
    services: [
      'Personalised Care Plan with visit schedule and tasks',
      'Automated reminders for medicine, vitals, or appointments',
      'Digital medical record of all reports and prescriptions',
      'Family updates through WhatsApp and phone',
      'Access to partner pharmacies, labs, and suppliers'
    ],
    color: 'blue'
  }
] as const

export const colorClasses: Record<string, {
  bg: string;
  text: string;
  border: string;
  hover: string;
}> = {
  teal: {
    bg: 'bg-teal-500',
    text: 'text-teal-600',
    border: 'border-teal-500',
    hover: 'hover:bg-teal-50'
  },
  violet: {
    bg: 'bg-violet-500',
    text: 'text-violet-600',
    border: 'border-violet-500',
    hover: 'hover:bg-violet-50'
  },
  green: {
    bg: 'bg-green-500',
    text: 'text-green-600',
    border: 'border-green-500',
    hover: 'hover:bg-green-50'
  },
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-600',
    border: 'border-blue-500',
    hover: 'hover:bg-blue-50'
  }
}
