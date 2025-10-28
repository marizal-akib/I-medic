import { Metadata } from 'next'
import Link from 'next/link'
import { DocumentTextIcon, ScaleIcon, HandRaisedIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Terms of Service - I-Medic Healthcare',
  description: 'Read the terms and conditions for using I-Medic healthcare services in Bangladesh.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/20 to-blue-50/20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-gradient-to-br from-teal-100/60 to-blue-100/60 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 h-48 w-48 rounded-full bg-gradient-to-br from-violet-100/60 to-pink-100/60 blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800 mb-4">
              <DocumentTextIcon className="h-4 w-4 mr-2 text-teal-600" />
              Terms of Service
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-display bg-gradient-to-r from-teal-700 via-blue-700 to-violet-700 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700 font-medium">
              Please read these terms carefully before using I-Medic healthcare services.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <HandRaisedIcon className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Fair Agreement</h3>
              <p className="text-sm text-gray-600">Clear terms for both parties</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <ScaleIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Legal Compliance</h3>
              <p className="text-sm text-gray-600">Following Bangladesh healthcare laws</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <ExclamationTriangleIcon className="h-8 w-8 text-violet-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Important Limits</h3>
              <p className="text-sm text-gray-600">Understanding service boundaries</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <DocumentTextIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
              <p className="text-sm text-gray-600">What you can expect from us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-8 sm:py-12 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            <div className="prose prose-gray max-w-none">
              
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">1. Acceptance of Terms</h2>
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  By using I-Medic services, you agree to these Terms of Service and our Privacy Policy. If you don't agree with any part of these terms, please don't use our services.
                </p>
                <p className="text-gray-700">
                  These terms apply to all users of I-Medic services in Bangladesh, including patients, family members, and authorized caregivers.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">2. Service Description</h2>
              <div className="mb-8">
                <p className="text-gray-700 mb-4">I-Medic provides coordinated healthcare services including:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Home nursing and care services</li>
                  <li>Medical appointment coordination</li>
                  <li>Hospital and lab partnerships</li>
                  <li>Medication management and delivery</li>
                  <li>Health monitoring and progress tracking</li>
                  <li>Emergency transport assistance</li>
                  <li>Care plan development and management</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Important:</strong> I-Medic is a care coordination service. We are not a replacement for emergency medical services. For medical emergencies, call 999 immediately.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">3. Eligibility and Registration</h2>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>You must be 18 years or older to register for I-Medic services</li>
                  <li>Parents/guardians can register on behalf of minors</li>
                  <li>You must provide accurate and complete information during registration</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>Services are currently available in Dhaka, Chattogram, and Sylhet</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">4. Care Programs and Pricing</h2>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Program Types</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li><strong>SmartCare:</strong> Basic coordination and monitoring services</li>
                  <li><strong>ActiveCare:</strong> Regular home visits and enhanced support</li>
                  <li><strong>TotalCare:</strong> Comprehensive care with 24/7 support</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pricing and Payment</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Monthly subscription fees are due in advance</li>
                  <li>Additional services may incur extra charges</li>
                  <li>Payment methods include mobile banking, bank transfer, and cash</li>
                  <li>Refunds are available according to our refund policy</li>
                  <li>Prices may change with 30 days written notice</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">5. User Responsibilities</h2>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Provide accurate health information and medical history</li>
                  <li>Follow prescribed treatment plans and medication schedules</li>
                  <li>Notify us of any changes in health condition or contact information</li>
                  <li>Treat our staff with respect and maintain a safe environment</li>
                  <li>Pay fees on time according to your chosen program</li>
                  <li>Use services only for legitimate healthcare needs</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">6. Service Limitations</h2>
              <div className="mb-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ Emergency Situations</h4>
                  <p className="text-red-700 text-sm">
                    I-Medic is NOT an emergency service. For life-threatening emergencies, call 999 or go directly to the nearest hospital emergency room.
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Boundaries</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>We coordinate care but don't provide direct medical diagnosis or treatment</li>
                  <li>Our staff follow protocols and cannot make independent medical decisions</li>
                  <li>Services are subject to availability and geographic coverage</li>
                  <li>Some specialized medical procedures may not be covered</li>
                  <li>We cannot guarantee specific health outcomes</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">7. Privacy and Confidentiality</h2>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>We protect your health information according to our Privacy Policy</li>
                  <li>Information is shared only with authorized healthcare providers</li>
                  <li>You can request access to your health records at any time</li>
                  <li>We comply with Bangladesh data protection laws</li>
                  <li>Emergency contacts may be notified during health emergencies</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">8. Cancellation and Refunds</h2>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cancellation Policy</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>You can cancel your subscription at any time with 7 days notice</li>
                  <li>Services continue until the end of your current billing period</li>
                  <li>We may suspend or terminate services for non-payment or policy violations</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Policy</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Unused portions of monthly fees may be refunded on a pro-rata basis</li>
                  <li>Refund requests must be made within 30 days</li>
                  <li>Processing time for refunds is 7-14 business days</li>
                  <li>Some service fees may be non-refundable</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">9. Liability and Insurance</h2>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>I-Medic maintains professional liability insurance for our services</li>
                  <li>Our liability is limited to the amount of fees paid for services</li>
                  <li>We are not liable for outcomes resulting from non-compliance with care plans</li>
                  <li>Users are encouraged to maintain their own health insurance</li>
                  <li>We are not responsible for actions of third-party healthcare providers</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">10. Intellectual Property</h2>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>I-Medic owns all rights to our app, website, and service materials</li>
                  <li>You may use our services for personal, non-commercial purposes only</li>
                  <li>You cannot copy, modify, or distribute our proprietary content</li>
                  <li>Your health data remains your property</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">11. Dispute Resolution</h2>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>We encourage resolving disputes through direct communication first</li>
                  <li>Formal complaints can be submitted through our customer service</li>
                  <li>Disputes will be resolved according to Bangladesh law</li>
                  <li>Legal proceedings must be filed in Dhaka courts</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">12. Changes to Terms</h2>
              <div className="mb-8">
                <p className="text-gray-700">
                  We may update these terms from time to time. We'll notify you of material changes via email or app notification at least 30 days before they take effect. Continued use of our services after changes indicates acceptance of the new terms.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">13. Contact Information</h2>
              <div className="mb-8">
                <p className="text-gray-700 mb-4">For questions about these terms or our services:</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700"><strong>Company:</strong> I-Medic Healthcare Ltd.</p>
                  <p className="text-gray-700"><strong>Email:</strong> legal@i-medic.com.bd</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +880 1XXXXXXXXX</p>
                  <p className="text-gray-700"><strong>Address:</strong> Dhaka, Bangladesh</p>
                  <p className="text-gray-700"><strong>WhatsApp:</strong> <Link href="https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%20have%20a%20question%20about%20your%20terms" className="text-teal-600 hover:text-teal-700">Chat with our Legal Team</Link></p>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <p className="text-teal-800 text-sm">
                  <strong>By using I-Medic services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
