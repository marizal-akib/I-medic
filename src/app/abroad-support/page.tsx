'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { 
  HeartIcon, 
  ChatBubbleLeftRightIcon, 
  ClipboardDocumentListIcon,
  PhoneIcon,
  CheckCircleIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import FloatingMessages from '@/components/ui/floating-messages'

export default function AbroadSupportPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    email: '',
    country: '',
    bdCity: '',
    relation: [] as string[],
    mainConcern: '',
    preferredContact: 'WhatsApp',
    bestTime: 'Evening'
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      relation: prev.relation.includes(value)
        ? prev.relation.filter(r => r !== value)
        : [...prev.relation, value]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Validate required fields
    if (!formData.fullName || !formData.whatsapp || !formData.country || !formData.bdCity) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/leads/abroad-support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit')
      }

      setSuccess(true)
      // Reset form
      setFormData({
        fullName: '',
        whatsapp: '',
        email: '',
        country: '',
        bdCity: '',
        relation: [],
        mainConcern: '',
        preferredContact: 'WhatsApp',
        bestTime: 'Evening'
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const scrollToForm = () => {
    document.getElementById('priority-list-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-teal-300 to-blue-300 opacity-20 blur-3xl rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -120, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-300 to-pink-300 opacity-15 blur-3xl rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6 font-display">
                Take better care of your family in Bangladesh from abroad
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                We help you look after your parents and loved ones in Bangladesh with health support, 
                regular check-ins, and clear updates you can see from the UK, Europe, or the Middle East.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'No more guessing how they really are',
                  'Local support team, you stay in control',
                  'Simple updates on your phone in Bangla or English'
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button 
                  size="xl" 
                  variant="blue"
                  onClick={scrollToForm}
                  className="shadow-2xl"
                >
                  Join the priority list
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <HeartIcon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">
                      Peace of mind, no matter where you are
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      You work hard abroad to give your family a better life. Let us help you take care 
                      of their health, so you can focus on what matters.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-display">
              You worry about them every day. We know the feeling.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left">
              <p>
                Living abroad is hard when your heart is still in Bangladesh. You send money, but you 
                still ask the same questions: Are they actually okay or just saying "I'm fine"? Are they 
                taking their medicines properly? Is anyone checking on them when you can't call?
              </p>
              <p>
                This service focuses on one thing: helping you look after your family's health from 
                abroad in a simple, trusted way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-display">
              What you and your family get
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Family in Bangladesh */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-teal-100">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <UserGroupIcon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">
                    For your family in Bangladesh
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Friendly health check-ins by trained support',
                      'Help with basic health monitoring (e.g. BP, sugar if needed)',
                      'Help reminding them about medicine and appointments',
                      'Support in Bangla so they feel comfortable'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* For You Abroad */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-2 border-purple-100">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <PhoneIcon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">
                    For you abroad
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Clear updates in simple Bangla / English',
                      'A record of important health info in one place',
                      'Option to talk with our team about concerns',
                      'Peace of mind that someone is checking on them'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-display">
              Simple process. No tech skills needed.
            </h2>
          </motion.div>

          {/* Desktop: Horizontal */}
          <div className="hidden lg:block relative">
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-200 via-blue-200 to-purple-200" 
                 style={{ marginLeft: '12%', marginRight: '12%' }} />
            
            <div className="grid grid-cols-3 gap-8">
              {[
                {
                  number: 1,
                  title: 'You sign up & tell us about your family',
                  description: 'You fill a short form with your details and who you want us to support.',
                  icon: ClipboardDocumentListIcon,
                  gradient: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 100%)'
                },
                {
                  number: 2,
                  title: 'We speak with you and your family',
                  description: 'We contact you first, then your family member in Bangladesh, to understand their needs.',
                  icon: ChatBubbleLeftRightIcon,
                  gradient: 'linear-gradient(135deg, #4A90E2 0%, #3D7AC5 100%)'
                },
                {
                  number: 3,
                  title: 'Regular support & updates',
                  description: 'We start support visits/calls (based on your plan) and send simple updates to you.',
                  icon: DocumentTextIcon,
                  gradient: 'linear-gradient(135deg, #8B3FD8 0%, #7532B8 100%)'
                }
              ].map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div 
                      className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg mb-6"
                      style={{ backgroundImage: step.gradient }}
                    >
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    
                    <div className="w-12 h-12 flex items-center justify-center mb-4">
                      <step.icon className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 font-display mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical */}
          <div className="lg:hidden space-y-8">
            {[
              {
                number: 1,
                title: 'You sign up & tell us about your family',
                description: 'You fill a short form with your details and who you want us to support.',
                icon: ClipboardDocumentListIcon,
                gradient: 'linear-gradient(135deg, #14b8a6 0%, #0891b2 100%)'
              },
              {
                number: 2,
                title: 'We speak with you and your family',
                description: 'We contact you first, then your family member in Bangladesh, to understand their needs.',
                icon: ChatBubbleLeftRightIcon,
                gradient: 'linear-gradient(135deg, #4A90E2 0%, #3D7AC5 100%)'
              },
              {
                number: 3,
                title: 'Regular support & updates',
                description: 'We start support visits/calls (based on your plan) and send simple updates to you.',
                icon: DocumentTextIcon,
                gradient: 'linear-gradient(135deg, #8B3FD8 0%, #7532B8 100%)'
              }
            ].map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12"
              >
                {idx < 2 && (
                  <div 
                    className="absolute left-6 top-16 bottom-0 w-0.5 -translate-x-1/2"
                    style={{ backgroundImage: step.gradient, opacity: 0.3 }}
                  />
                )}
                
                <div 
                  className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-xl shadow-lg"
                  style={{ backgroundImage: step.gradient }}
                >
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <step.icon className="w-8 h-8 text-slate-400 flex-shrink-0" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 font-display">
              Is this for you?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                'You live abroad (UK, Europe, Middle East, USA, etc.)',
                'Your parents or close family live in Bangladesh',
                'You feel guilty or worried because you can\'t be there',
                'You want a trusted, organised way to support their health'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm"
                >
                  <CheckCircleIcon className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 text-center font-display">
              Built by people who know both sides
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-12">
              <p>
                This project is created by Bangladeshis who live and work abroad and also have family 
                in Bangladesh. We know the stress of hospital calls at 3 AM, rushed flights, and not 
                knowing who to trust.
              </p>
              <p>
                Our goal is to build a clean, honest, and professional service that respects your 
                family's dignity, respects your hard-earned money, and keeps you informed without confusion.
              </p>
            </div>

            <Card className="border-2 border-slate-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-3xl">I</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-display mb-1">
                      Sayed Mariz Al Akib
                    </h3>
                    <p className="text-teal-600 font-medium mb-2">Founder</p>
                    <p className="text-slate-600 text-sm">
                      Building a service that I wish existed when my family needed it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center font-display">
              Questions you may have
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: 'Is this service live now?',
                  a: 'Not fully. We\'re building it now and first opening a priority interest list. People on this list will get first access when we launch in their city, special early-bird pricing, and a chance to shape how the service works.'
                },
                {
                  q: 'Which cities in Bangladesh will you start with?',
                  a: 'We will first open in Shylhet, Rajsahi, and Khulna, then gradually roll out everywhere.'
                },
                {
                  q: 'How much will it cost?',
                  a: 'We are still finalising the packages. We will share clear pricing with you before anything starts. Joining the interest list is free.'
                },
                {
                  q: 'Do my parents need to be good with technology?',
                  a: 'No. We will talk to them in simple Bangla and handle the technical side for you.'
                },
                {
                  q: 'How will you update me?',
                  a: 'We plan to update you by WhatsApp, email, or SMS, depending on what you prefer.'
                }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">
                        {faq.q}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section
        id="priority-list-form"
        className="relative py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 scroll-mt-20 overflow-hidden"
      >
        {/* Background accents to match auth pages */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        {/* Floating pop-up text animation to match auth pages */}
        <FloatingMessages />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-display">
                Join the priority list for abroad Bangladeshis
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tell us a bit about you and your family. We'll contact you when we are ready in your 
                area and give you early access options.
              </p>
            </div>

            {success ? (
              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircleIcon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">
                    You're on the list!
                  </h3>
                  <p className="text-lg text-slate-700">
                    We'll contact you as soon as we're ready in your area.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="backdrop-blur-xl bg-white border-2 border-slate-200 shadow-xl">
                <form onSubmit={handleSubmit}>
                  <CardContent className="p-8 space-y-6">
                    {error && (
                      <div className="p-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                        {error}
                      </div>
                    )}

                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                        Your full name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                        disabled={loading}
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-2">
                      <label htmlFor="whatsapp" className="text-sm font-medium text-slate-700">
                        Your WhatsApp number *
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="text"
                        placeholder="+44, +971, +1, etc."
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                        disabled={loading}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Your email (optional)
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        disabled={loading}
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-medium text-slate-700">
                        Country you live in now *
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                        disabled={loading}
                      >
                        <option value="">Select country</option>
                        <option value="UK">UK</option>
                        <option value="Europe">Europe</option>
                        <option value="Middle East">Middle East</option>
                        <option value="USA/Canada">USA/Canada</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* BD City */}
                    <div className="space-y-2">
                      <label htmlFor="bdCity" className="text-sm font-medium text-slate-700">
                        City/area in Bangladesh where your family lives *
                      </label>
                      <input
                        id="bdCity"
                        name="bdCity"
                        type="text"
                        placeholder="e.g., Dhaka - Mirpur, Chattogram - GEC area"
                        value={formData.bdCity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        required
                        disabled={loading}
                      />
                    </div>

                    {/* Relation */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        Who do you want us to support?
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {['Parents', 'In-laws', 'Grandparents', 'Other close family'].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.relation.includes(option)}
                              onChange={() => handleCheckboxChange(option)}
                              className="w-5 h-5 text-teal-600 border-slate-300 rounded focus:ring-2 focus:ring-teal-500"
                              disabled={loading}
                            />
                            <span className="text-slate-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Main Concern */}
                    <div className="space-y-2">
                      <label htmlFor="mainConcern" className="text-sm font-medium text-slate-700">
                        What worries you the most right now?
                      </label>
                      <textarea
                        id="mainConcern"
                        name="mainConcern"
                        rows={4}
                        placeholder="e.g., My father has diabetes and lives alone; I don't know if he is taking his medicines on time."
                        value={formData.mainConcern}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                        disabled={loading}
                      />
                    </div>

                    {/* Preferred Contact */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        How do you prefer we contact you first?
                      </label>
                      <div className="flex gap-4">
                        {['WhatsApp', 'Phone call', 'Email'].map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="preferredContact"
                              value={option}
                              checked={formData.preferredContact === option}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-teal-600 border-slate-300 focus:ring-2 focus:ring-teal-500"
                              disabled={loading}
                            />
                            <span className="text-slate-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Best Time */}
                    <div className="space-y-2">
                      <label htmlFor="bestTime" className="text-sm font-medium text-slate-700">
                        When is the best time (your local time)?
                      </label>
                      <select
                        id="bestTime"
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                        disabled={loading}
                      >
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        variant="blue"
                        size="lg"
                        className="w-full"
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Submitting...</span>
                          </span>
                        ) : (
                          'Join the list'
                        )}
                      </Button>
                      
                      <p className="text-xs text-slate-500 text-center mt-4 leading-relaxed">
                        We will only use your information to contact you about this service. No spam. 
                        You can ask us to remove your data at any time.
                      </p>
                    </div>
                  </CardContent>
                </form>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <ShieldCheckIcon className="w-16 h-16 text-white mx-auto mb-6" strokeWidth={1.5} />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
              You deserve peace of mind
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Your family deserves care. Let's work together.
            </p>
            <Button 
              size="xl" 
              variant="outline"
              onClick={scrollToForm}
              className="bg-white text-teal-700 hover:bg-white/90 border-0 shadow-xl"
            >
              Join the priority list
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
