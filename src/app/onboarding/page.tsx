'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { patientService } from '@/lib/serverCom'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const profileSchema = z.object({
  first_name: z.string().trim().min(1, 'First name is required').max(100),
  last_name: z.string().trim().min(1, 'Last name is required').max(100),
})

const contactSchema = z.object({
  phone: z.string().trim().min(10, 'Valid phone number is required').max(20),
  address_street: z.string().trim().max(200),
  address_city: z.string().trim().max(100),
  address_district: z.string().trim().max(50),
})

const medicalSchema = z.object({
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
})

function OnboardingContent() {
  const { user } = useAuth()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [consent, setConsent] = useState(false)

  // Profile step
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // Contact step
  const [phone, setPhone] = useState('')
  const [addressStreet, setAddressStreet] = useState('')
  const [addressCity, setAddressCity] = useState('')
  const [addressDistrict, setAddressDistrict] = useState('')

  // Medical step
  const [dob, setDob] = useState('')

  useEffect(() => {
    if (user) {
      loadExistingData()
    }
  }, [user])

  const loadExistingData = async () => {
    try {
      const { data } = await patientService.getPatient(user!.id)

      if (data) {
        setFirstName(data.first_name || '')
        setLastName(data.last_name || '')
        setPhone(data.phone || '')
        setDob(data.dob || '')
        
        if (data.address && typeof data.address === 'object') {
          const addr = data.address as any
          setAddressStreet(addr.street || '')
          setAddressCity(addr.city || '')
          setAddressDistrict(addr.district || '')
        }
      }
    } catch (error) {
      console.error('Error loading patient data:', error)
    }
  }

  const saveProfile = async () => {
    setLoading(true)
    try {
      const validated = profileSchema.parse({ first_name: firstName, last_name: lastName })
      
      await patientService.updatePatient(user!.id, {
        first_name: validated.first_name,
        last_name: validated.last_name,
      })

      setCurrentStep(2)
    } catch (err) {
      if (err instanceof z.ZodError) {
        alert(err.issues[0].message)
      } else {
        alert('Failed to save profile')
      }
    } finally {
      setLoading(false)
    }
  }

  const saveContact = async () => {
    setLoading(true)
    try {
      const validated = contactSchema.parse({
        phone,
        address_street: addressStreet,
        address_city: addressCity,
        address_district: addressDistrict,
      })

      await patientService.updatePatient(user!.id, {
        phone: validated.phone,
        address: {
          street: validated.address_street,
          city: validated.address_city,
          district: validated.address_district,
        },
      })

      setCurrentStep(3)
    } catch (err) {
      if (err instanceof z.ZodError) {
        alert(err.issues[0].message)
      } else {
        alert('Failed to save contact info')
      }
    } finally {
      setLoading(false)
    }
  }

  const saveMedical = async () => {
    setLoading(true)
    try {
      const validated = medicalSchema.parse({ dob })

      await patientService.updatePatient(user!.id, { dob: validated.dob })
      setCurrentStep(4)
    } catch (err) {
      if (err instanceof z.ZodError) {
        alert(err.issues[0].message)
      } else {
        alert('Failed to save medical info')
      }
    } finally {
      setLoading(false)
    }
  }

  const completeOnboarding = async () => {
    if (!consent) {
      alert('Please accept the terms and conditions')
      return
    }

    setLoading(true)
    try {
      await patientService.completeOnboarding(user!.id)
      alert('Onboarding completed! Welcome to I-Medic.')
      router.push('/dashboard')
    } catch (error) {
      alert('Failed to complete onboarding')
    } finally {
      setLoading(false)
    }
  }

  const steps = [
    { number: 1, title: 'Profile', completed: currentStep > 1 },
    { number: 2, title: 'Contact', completed: currentStep > 2 },
    { number: 3, title: 'Medical', completed: currentStep > 3 },
    { number: 4, title: 'Consent', completed: currentStep > 4 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-display mb-2">
            Complete Your Profile
          </h1>
          <p className="text-gray-600">
            Help us provide you with personalized healthcare
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-200 ${
                    step.completed 
                      ? 'bg-teal-600 text-white' 
                      : currentStep === step.number 
                      ? 'bg-teal-100 text-teal-600 ring-2 ring-teal-600' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.completed ? <CheckCircle2 className="h-5 w-5" /> : step.number}
                  </div>
                  <span className="text-xs mt-2 font-medium text-gray-600">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-2 mb-6 ${step.completed ? 'bg-teal-600' : 'bg-gray-200'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardContent className="p-8">
            {/* Step 1: Profile */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Tell us about yourself</CardDescription>
                  </CardHeader>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
                <Button onClick={saveProfile} className="w-full" disabled={loading}>
                  {loading ? 'Saving...' : 'Next: Contact Information'}
                </Button>
              </div>
            )}

            {/* Step 2: Contact */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>How can we reach you?</CardDescription>
                  </CardHeader>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+880 1XXX XXXXXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <input
                      id="street"
                      type="text"
                      value={addressStreet}
                      onChange={(e) => setAddressStreet(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        value={addressCity}
                        onChange={(e) => setAddressCity(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="district" className="block text-sm font-medium text-gray-700 mb-2">
                        District
                      </label>
                      <input
                        id="district"
                        type="text"
                        value={addressDistrict}
                        onChange={(e) => setAddressDistrict(e.target.value)}
                        placeholder="e.g., Dhaka"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={saveContact} className="flex-1" disabled={loading}>
                    {loading ? 'Saving...' : 'Next: Medical Info'}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Medical */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>Medical Information</CardTitle>
                    <CardDescription>Help us understand your health needs</CardDescription>
                  </CardHeader>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      id="dob"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={saveMedical} className="flex-1" disabled={loading}>
                    {loading ? 'Saving...' : 'Next: Consent'}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Consent */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>Terms & Consent</CardTitle>
                    <CardDescription>Review and accept our terms</CardDescription>
                  </CardHeader>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-600 max-h-64 overflow-y-auto">
                    <h4 className="font-semibold text-gray-900 mb-2">Patient Portal Terms of Service</h4>
                    <p className="mb-3">
                      By using the I-Medic patient portal, you consent to the collection, storage, and use 
                      of your personal health information for the purpose of providing healthcare services.
                    </p>
                    <p className="mb-3">
                      <strong>Data Protection:</strong> Your data is protected under Bangladesh ICT Act 
                      and international data protection standards. We use encryption and secure protocols 
                      to safeguard your information.
                    </p>
                    <p className="mb-3">
                      <strong>Information Sharing:</strong> Your health information will only be shared 
                      with authorized healthcare providers directly involved in your care.
                    </p>
                    <p>
                      <strong>Your Rights:</strong> You have the right to access, update, and delete 
                      your personal information at any time through your patient portal.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700 cursor-pointer">
                      I have read and agree to the terms and conditions, and I consent to the 
                      collection and use of my personal health information as described above.
                    </label>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setCurrentStep(3)} className="flex-1">
                    Back
                  </Button>
                  <Button 
                    onClick={completeOnboarding} 
                    disabled={!consent || loading} 
                    className="flex-1"
                  >
                    {loading ? 'Completing...' : 'Complete Onboarding'}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Need help? <Link href="/contact" className="text-teal-600 hover:text-teal-700">Contact our support team</Link>
        </p>
      </div>
    </div>
  )
}

export default function OnboardingPage() {
  return (
    <ProtectedRoute>
      <OnboardingContent />
    </ProtectedRoute>
  )
}
