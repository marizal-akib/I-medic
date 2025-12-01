'use client'

import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter, useSearchParams } from 'next/navigation'
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
  phone: z.string().trim().min(10, 'Valid phone number is required').max(20).optional(),
  address_street: z.string().trim().max(200).optional(),
  address_city: z.string().trim().max(100).optional(),
  address_district: z.string().trim().max(50).optional(),
})

const medicalSchema = z.object({
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format').optional(),
})

function OnboardingContent() {
  const { user } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialStep = useMemo(() => Number(searchParams.get('step')) || 1, [searchParams])
  const [currentStep, setCurrentStep] = useState(initialStep)
  const [loading, setLoading] = useState(false)
  const [consent, setConsent] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

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

        if (data.preferences_completion === 100 || data.onboarding_status === 'submitted') {
          setConsent(true)
        }
      }
    } catch (error) {
      console.error('Error loading patient data:', error)
    }
  }

  const buildAddressPayload = () =>
    addressStreet || addressCity || addressDistrict
      ? { street: addressStreet, city: addressCity, district: addressDistrict }
      : null

  const computeProgress = (extra: any = {}) => {
    const draft = {
      first_name: firstName || null,
      last_name: lastName || null,
      phone: phone || null,
      dob: dob || null,
      address: buildAddressPayload(),
      preferences_completion: consent ? 100 : 0,
      ...extra,
    }
    const progress = patientService.computeOnboardingProgress(draft)

    return { draft, progress }
  }

  const updatePatientWithProgress = async (overrides: any = {}) => {
    const { draft, progress } = computeProgress(overrides)

    await patientService.updatePatient(user!.id, {
      ...draft,
      basic_info_completed: progress.basicInfoCompleted,
      health_profile_completion: progress.healthProfileCompletion,
      preferences_completion: progress.preferencesCompletion,
      overall_onboarding_completion: progress.overall,
      onboarding_status: progress.onboardingStatus,
      onboarding_completed: progress.overall === 100,
    })

    if (progress.overall === 100) {
      setShowSuccessModal(true)
    } else {
      router.push('/dashboard')
    }
  }

  const saveProfile = async () => {
    setLoading(true)
    try {
      const validated = profileSchema.parse({ first_name: firstName, last_name: lastName })

      setFirstName(validated.first_name)
      setLastName(validated.last_name)

      await updatePatientWithProgress({
        first_name: validated.first_name,
        last_name: validated.last_name,
        onboarding_status: 'in_progress',
      })
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
        phone: phone || undefined,
        address_street: addressStreet || undefined,
        address_city: addressCity || undefined,
        address_district: addressDistrict || undefined,
      })

      await updatePatientWithProgress({
        phone: validated.phone,
        address: {
          street: validated.address_street,
          city: validated.address_city,
          district: validated.address_district,
        },
        onboarding_status: 'in_progress',
      })
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
      const validated = medicalSchema.parse({ dob: dob || undefined })

      await updatePatientWithProgress({ dob: validated.dob, onboarding_status: 'in_progress' })
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
    setLoading(true)
    try {
      await updatePatientWithProgress({
        preferences_completion: consent ? 100 : 0,
        onboarding_status: consent ? 'submitted' : 'in_progress',
      })
      if (!consent) {
        router.push('/dashboard')
      }
    } catch (error) {
      alert('Failed to complete onboarding')
    } finally {
      setLoading(false)
    }
  }

  const skipHealthProfile = async () => {
    setLoading(true)
    try {
      await updatePatientWithProgress({ health_profile_completion: 0 })
    } catch (error) {
      alert('Failed to skip this step')
    } finally {
      setLoading(false)
    }
  }

  const skipConsent = async () => {
    setLoading(true)
    try {
      await updatePatientWithProgress({ preferences_completion: 0, onboarding_status: 'in_progress' })
    } catch (error) {
      alert('Failed to skip this step')
    } finally {
      setLoading(false)
    }
  }

  const steps = [
    { number: 1, title: 'Basic Info', completed: currentStep > 1 },
    { number: 2, title: 'Health Profile', completed: currentStep > 2 },
    { number: 3, title: 'Preferences', completed: currentStep > 3 },
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
                    <CardTitle>Basic Information</CardTitle>
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
                  {loading ? 'Saving...' : 'Save & Continue'}
                </Button>
              </div>
            )}

            {/* Step 2: Contact */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>Health Profile</CardTitle>
                    <CardDescription>Share contact and health basics (optional)</CardDescription>
                  </CardHeader>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+880 1XXX XXXXXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                  {loading ? 'Saving...' : 'Save & Continue'}
                </Button>
              </div>
              <Button variant="ghost" onClick={skipHealthProfile} className="w-full" disabled={loading}>
                Skip for now
              </Button>
            </div>
          )}

          {/* Step 3: Preferences & Consent */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Preferences & Consent</CardTitle>
                  <CardDescription>Review our terms and finish setup (optional)</CardDescription>
                </CardHeader>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <Button onClick={saveMedical} className="mt-3" disabled={loading}>
                    {loading ? 'Saving...' : 'Save DOB'}
                  </Button>
                </div>
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
                <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                  Back
                </Button>
                <Button 
                  onClick={completeOnboarding} 
                  disabled={loading || (!consent && !showSuccessModal)} 
                  className="flex-1"
                >
                  {loading ? 'Completing...' : 'Complete Setup'}
                </Button>
              </div>
              <Button variant="ghost" onClick={skipConsent} className="w-full" disabled={loading}>
                Skip for now
              </Button>
            </div>
          )}
          </CardContent>
        </Card>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Need help? <Link href="/contact" className="text-teal-600 hover:text-teal-700">Contact our support team</Link>
        </p>

        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">Profile Complete</p>
                  <p className="text-sm text-gray-600">Your onboarding is submitted.</p>
                </div>
              </div>
              <Button className="w-full" onClick={() => router.push('/dashboard')}>
                Go to dashboard
              </Button>
            </div>
          </div>
        )}
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
