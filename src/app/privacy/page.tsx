import { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheckIcon, LockClosedIcon, EyeIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Privacy Policy - I-Medic Healthcare',
  description: 'Learn how I-Medic protects your personal and health information with enterprise-grade security and Bangladesh compliance.',
}

export default function PrivacyPage() {
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
              <ShieldCheckIcon className="h-4 w-4 mr-2 text-teal-600" />
              Privacy Policy
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-display bg-gradient-to-r from-teal-700 via-blue-700 to-violet-700 bg-clip-text text-transparent">
              Your Privacy Matters
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700 font-medium">
              We are committed to protecting your personal and health information with the highest standards of security and privacy.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <LockClosedIcon className="h-8 w-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Encrypted Data</h3>
              <p className="text-sm text-gray-600">All data encrypted in transit and at rest</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <EyeIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">No Data Selling</h3>
              <p className="text-sm text-gray-600">We never sell your personal information</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <ShieldCheckIcon className="h-8 w-8 text-violet-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-sm text-gray-600">Following international privacy standards</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <DocumentTextIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
              <p className="text-sm text-gray-600">Full control over your data and privacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-8 sm:py-12 pb-16 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            <div className="prose prose-gray max-w-none">
              
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">1. Information We Collect</h2>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Name, contact details, and identification information</li>
                  <li>Emergency contact information</li>
                  <li>Address and location data for service delivery</li>
                  <li>Payment and billing information</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Health Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Medical history and current health conditions</li>
                  <li>Medication lists and treatment plans</li>
                  <li>Care notes and progress reports</li>
                  <li>Lab results and medical test reports</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>App usage patterns and preferences</li>
                  <li>Communication logs with our care team</li>
                  <li>Service feedback and ratings</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">2. How We Use Your Information</h2>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Care Delivery:</strong> Providing personalized healthcare services and coordinating care</li>
                  <li><strong>Communication:</strong> Sending appointment reminders, health updates, and care instructions</li>
                  <li><strong>Safety:</strong> Monitoring health conditions and alerting emergency contacts when necessary</li>
                  <li><strong>Improvement:</strong> Analyzing service quality and developing better care programs</li>
                  <li><strong>Compliance:</strong> Meeting legal and regulatory requirements in Bangladesh</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">3. Information Sharing</h2>
              <div className="mb-8">
                <p className="text-gray-700 mb-4">We only share your information in these specific circumstances:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Healthcare Providers:</strong> With doctors, nurses, and specialists involved in your care</li>
                  <li><strong>Emergency Situations:</strong> With emergency contacts and medical facilities during health emergencies</li>
                  <li><strong>Legal Requirements:</strong> When required by Bangladesh law or court orders</li>
                  <li><strong>Service Partners:</strong> With verified labs, pharmacies, and hospitals for service delivery</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">We never sell your personal or health information to third parties.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">4. Data Security</h2>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Encryption:</strong> All data is encrypted using industry-standard AES-256 encryption</li>
                  <li><strong>Access Control:</strong> Strict role-based access controls for all staff members</li>
                  <li><strong>Regular Audits:</strong> Quarterly security audits and vulnerability assessments</li>
                  <li><strong>Secure Storage:</strong> Data stored in secure, compliant cloud infrastructure</li>
                  <li><strong>Staff Training:</strong> Regular privacy and security training for all team members</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">5. Your Rights</h2>
              <div className="mb-8">
                <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request a copy of all personal information we hold about you</li>
                  <li><strong>Correction:</strong> Update or correct any inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Objection:</strong> Object to certain types of data processing</li>
                  <li><strong>Restriction:</strong> Request restriction of data processing in certain circumstances</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">6. Data Retention</h2>
              <div className="mb-8">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Active Care Period:</strong> Data retained while you are an active I-Medic member</li>
                  <li><strong>Medical Records:</strong> Health information retained for 7 years as per Bangladesh medical record laws</li>
                  <li><strong>Account Deletion:</strong> Personal information deleted within 30 days of account closure request</li>
                  <li><strong>Legal Requirements:</strong> Some data may be retained longer if required by law</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">7. Cookies and Tracking</h2>
              <div className="mb-8">
                <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website usage and improve our services</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
                <p className="text-gray-700 mt-4">You can control cookie settings through your browser preferences.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">8. Children's Privacy</h2>
              <div className="mb-8">
                <p className="text-gray-700">
                  I-Medic provides care services for family members of all ages. For children under 18, we require parental or guardian consent before collecting any personal information. Parents and guardians have full control over their children's health information and can request access, correction, or deletion at any time.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">9. International Transfers</h2>
              <div className="mb-8">
                <p className="text-gray-700">
                  Your data is primarily stored and processed in Bangladesh. If we need to transfer data internationally for service delivery or technical support, we ensure appropriate safeguards are in place, including encryption and contractual protections that meet international privacy standards.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">10. Changes to This Policy</h2>
              <div className="mb-8">
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes via email or through our app. The updated policy will be effective 30 days after notification.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">11. Contact Us</h2>
              <div className="mb-8">
                <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy or want to exercise your rights, please contact us:</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700"><strong>Email:</strong> privacy@i-medic.com.bd</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +880 1XXXXXXXXX</p>
                  <p className="text-gray-700"><strong>Address:</strong> I-Medic Healthcare Ltd., Dhaka, Bangladesh</p>
                  <p className="text-gray-700"><strong>WhatsApp:</strong> <Link href="https://wa.me/8801XXXXXXXXX?text=Hi%20I-Medic,%20I%20have%20a%20privacy%20question" className="text-teal-600 hover:text-teal-700">Chat with our Privacy Team</Link></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
