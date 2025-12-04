'use client'

import { useEffect, useState } from 'react'

const healthMessages = [
  "Home visits by qualified nurses 🏠",
  "Lab tests at your doorstep 🧪",
  "24/7 WhatsApp health support 💬",
  "Telemedicine consultations available 👨‍⚕️",
  "Complete health records in one place 📋",
  "Medicine delivery to your home 💊",
  "Trained carers for elderly care 👵",
  "Blood collection at home 🩸",
  "Vaccination services available 💉",
  "Physiotherapy at your convenience 🏃",
  "Doctor consultations from home 🩺",
  "Health monitoring & reminders ⏰",
  "Family health packages available 👨‍👩‍👧‍👦",
  "Emergency care response team 🚨",
  "Chronic disease management 💪",
  "Post-surgery home care 🛏️",
  "Elderly wellness programs 🌟",
  "Nutrition & diet counseling 🥗",
  "Mental health support services 🧠",
  "Regular health check-ups 📊",
]

// Random text style variations
const fontCombos = [
  { style: 'font-light italic', family: 'font-sans' },
  { style: 'font-normal', family: 'font-sans' },
  { style: 'font-medium', family: 'font-sans' },
  { style: 'font-semibold', family: 'font-display' },
  { style: 'font-bold', family: 'font-display' },
  { style: 'font-medium italic', family: 'font-sans' },
]

const textSizes = [
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
]

const letterSpacings = [
  'tracking-tight',
  'tracking-normal',
  'tracking-wide',
  'tracking-wider',
]

const textTransforms = [
  'normal-case',
  'lowercase',
  'capitalize',
]

// Color variations with better backgrounds for diversity
const messageStyles = [
  { 
    text: 'text-blue-600', 
    bg: 'bg-blue-50/80',
    border: 'border-blue-200/40',
    shadow: 'shadow-blue-100/50'
  },
  { 
    text: 'text-purple-600', 
    bg: 'bg-purple-50/80',
    border: 'border-purple-200/40',
    shadow: 'shadow-purple-100/50'
  },
  { 
    text: 'text-teal-600', 
    bg: 'bg-teal-50/80',
    border: 'border-teal-200/40',
    shadow: 'shadow-teal-100/50'
  },
  { 
    text: 'text-pink-600', 
    bg: 'bg-pink-50/80',
    border: 'border-pink-200/40',
    shadow: 'shadow-pink-100/50'
  },
  { 
    text: 'text-indigo-600', 
    bg: 'bg-indigo-50/80',
    border: 'border-indigo-200/40',
    shadow: 'shadow-indigo-100/50'
  },
]

interface FloatingMessage {
  id: number
  text: string
  left: number
  top: number
  delay: number
  duration: number
  // Random style properties
  fontCombo: { style: string; family: string }
  textSize: string
  letterSpacing: string
  textTransform: string
  messageStyle: {
    text: string
    bg: string
    border: string
    shadow: string
  }
  opacity: number
  rotation: number
  scale: number
}

export default function FloatingMessages() {
  const [messages, setMessages] = useState<FloatingMessage[]>([])

  useEffect(() => {
    const generateMessages = () => {
      const newMessages: FloatingMessage[] = []
      const count = 5 // Fixed 5 messages for better distribution
      
      // Define positioning zones to spread messages evenly
      const zones = [
        { left: 5, top: 15 },   // Top-left area
        { left: 75, top: 20 },  // Top-right area
        { left: 10, top: 55 },  // Middle-left area
        { left: 70, top: 60 },  // Middle-right area
        { left: 40, top: 35 },  // Center area
      ]
      
      for (let i = 0; i < count; i++) {
        const zone = zones[i]
        // Add some variation around the zone
        const leftVariation = -5 + Math.random() * 10
        const topVariation = -5 + Math.random() * 10
        
        newMessages.push({
          id: Date.now() + i,
          text: healthMessages[Math.floor(Math.random() * healthMessages.length)],
          left: zone.left + leftVariation,
          top: zone.top + topVariation,
          delay: i * 2,
          duration: 20 + Math.random() * 6,
          // Random styles
          fontCombo: fontCombos[Math.floor(Math.random() * fontCombos.length)],
          textSize: textSizes[Math.floor(Math.random() * textSizes.length)],
          letterSpacing: letterSpacings[Math.floor(Math.random() * letterSpacings.length)],
          textTransform: textTransforms[Math.floor(Math.random() * textTransforms.length)],
          messageStyle: messageStyles[Math.floor(Math.random() * messageStyles.length)],
          opacity: 0.75 + Math.random() * 0.15,
          rotation: -2 + Math.random() * 4,
          scale: 0.95 + Math.random() * 0.1, // 0.95 to 1.05 scale
        })
      }
      
      setMessages(newMessages)
    }

    generateMessages()
    const interval = setInterval(generateMessages, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {messages.map((message) => (
        <div
          key={message.id}
          className="absolute animate-float-message"
          style={{
            left: `${message.left}%`,
            top: `${message.top}%`,
            animationDelay: `${message.delay}s`,
            animationDuration: `${message.duration}s`,
            transform: `rotate(${message.rotation}deg) scale(${message.scale})`,
          }}
        >
          <div 
            className={`
              px-5 py-2.5 
              backdrop-blur-lg 
              rounded-2xl border
              whitespace-nowrap
              transition-all duration-500
              hover:scale-105
              ${message.messageStyle.bg}
              ${message.messageStyle.border}
              ${message.messageStyle.text}
              ${message.fontCombo.style}
              ${message.fontCombo.family}
              ${message.textSize}
              ${message.letterSpacing}
              ${message.textTransform}
              shadow-lg
            `}
            style={{
              opacity: message.opacity,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            }}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  )
}
