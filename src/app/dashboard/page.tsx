'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProtectedRoute } from '@/components/auth/protected-route'
import Link from 'next/link'
import { Calendar, FileText, User, BookOpen, AlertCircle } from 'lucide-react'
import { patientService, appointmentService, PatientData } from '@/lib/serverCom'

function DashboardContent() {
  const { user } = useAuth()
  const [patientData, setPatientData] = useState<PatientData | null>(null)
  const [loading, setLoading] = useState(true)
  const [appointmentCount, setAppointmentCount] = useState(0)

  useEffect(() => {
    if (user) {
      fetchDashboardData()
    }
  }, [user])

  const fetchDashboardData = async () => {
    try {
      // Fetch patient data
      const { data: patient } = await patientService.getPatient(user!.id)
      setPatientData(patient)

      // Fetch appointments
      if (patient) {
        const { data: appointments } = await appointmentService.getAppointments(user!.id)
        setAppointmentCount(appointments?.length || 0)
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const completeness = patientService.calculateCompleteness(patientData)

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8">
        {/* Onboarding Alert */}
        {patientData && !patientData.onboarding_completed && (
          <div className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-yellow-800 mb-1">Complete Your Profile</h3>
                <p className="text-sm text-yellow-700 mb-3">
                  Please complete your onboarding to access all features and receive personalized care.
                </p>
                <Button size="sm" asChild>
                  <Link href="/onboarding">Complete Onboarding</Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 font-display">
            Welcome back, {patientData?.first_name || 'Patient'}!
          </h2>
          <p className="text-gray-600 mt-2">
            Here's an overview of your health information and recent activity.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-lg">Profile Completeness</CardTitle>
              <CardDescription>Fill out your information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 rounded-full transition-all duration-300" 
                  style={{ width: `${completeness}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                {completeness.toFixed(0)}% complete
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Appointments</CardTitle>
              <Calendar className="h-5 w-5 text-teal-600" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900">{appointmentCount}</p>
              <p className="text-xs text-gray-500 mt-1">Total appointments</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documents</CardTitle>
              <FileText className="h-5 w-5 text-violet-600" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-gray-900">0</p>
              <p className="text-xs text-gray-500 mt-1">Uploaded documents</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-display">Quick Actions</CardTitle>
              <CardDescription>Manage your healthcare needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start h-12" asChild>
                <Link href="/onboarding">
                  <User className="mr-3 h-5 w-5 text-teal-600" />
                  <div className="text-left">
                    <div className="font-medium">
                      {patientData?.onboarding_completed ? 'Update Profile' : 'Complete Onboarding'}
                    </div>
                    <div className="text-xs text-gray-500">Manage your personal information</div>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start h-12" asChild>
                <Link href="/notes">
                  <BookOpen className="mr-3 h-5 w-5 text-violet-600" />
                  <div className="text-left">
                    <div className="font-medium">Medical Notes</div>
                    <div className="text-xs text-gray-500">Track your health journey</div>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start h-12" asChild>
                <Link href="/booking">
                  <Calendar className="mr-3 h-5 w-5 text-bangladesh-600" />
                  <div className="text-left">
                    <div className="font-medium">Schedule Appointment</div>
                    <div className="text-xs text-gray-500">Book a new service</div>
                  </div>
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Welcome Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-display">Your Health Dashboard</CardTitle>
              <CardDescription>Manage your healthcare journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Welcome to your I-Medic patient portal! This is your central hub for managing 
                appointments, viewing medical records, and communicating with your healthcare team.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-700">
                  <div className="h-2 w-2 rounded-full bg-teal-500 mr-2"></div>
                  Track your medical history
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="h-2 w-2 rounded-full bg-violet-500 mr-2"></div>
                  Schedule home care visits
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="h-2 w-2 rounded-full bg-bangladesh-500 mr-2"></div>
                  Access health reports
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  <strong>Email:</strong> {user?.email}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  <strong>Member since:</strong> {new Date(user?.created_at || '').toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity (Placeholder) */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-display">Recent Activity</CardTitle>
              <CardDescription>Your latest healthcare interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No recent activity</p>
                <p className="text-sm text-gray-400 mt-2">Your appointments and visits will appear here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
