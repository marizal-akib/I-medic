'use client'

import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  FlaskConical,
  CalendarClock,
  NotebookPen,
  HeartPulse,
  ShoppingBag,
  LifeBuoy,
  UserCog,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { patientService, PatientData } from '@/lib/serverCom'
import { PatientDashboardContext } from '@/components/dashboard/patient-context'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Home', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Tests & Reports', href: '/dashboard/tests', icon: FlaskConical },
  { label: 'Visits', href: '/dashboard/visits', icon: CalendarClock },
  { label: 'My Logs', href: '/dashboard/logs', icon: NotebookPen },
  { label: 'Health Summary', href: '/dashboard/summary', icon: HeartPulse },
  { label: 'Services & Shop', href: '/dashboard/services', icon: ShoppingBag },
  { label: 'Support', href: '/dashboard/support', icon: LifeBuoy },
  { label: 'Profile', href: '/dashboard/profile', icon: UserCog },
]

export default function PatientDashboardLayout({ children }: { children: ReactNode }) {
  const { user, loading: authLoading, signOut } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [patient, setPatient] = useState<PatientData | null>(null)
  const [patientLoading, setPatientLoading] = useState(true)
  const [redirectingToOnboarding, setRedirectingToOnboarding] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const fetchPatient = useCallback(async () => {
    if (!user) return
    setPatientLoading(true)
    try {
      const { data } = await patientService.getPatient(user.id)
      setPatient(data)
    } catch (error) {
      console.error('Failed to load patient profile', error)
      setPatient(null)
    } finally {
      setPatientLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      fetchPatient()
    } else if (!authLoading) {
      router.replace('/login')
    }
  }, [user, authLoading, fetchPatient, router])

  useEffect(() => {
    if (!authLoading && !patientLoading && user) {
      if (!patient || !patient.onboarding_completed) {
        setRedirectingToOnboarding(true)
        router.replace('/onboarding')
      } else {
        setRedirectingToOnboarding(false)
      }
    }
  }, [authLoading, patientLoading, patient, router, user])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const contextValue = useMemo(
    () => ({
      patient,
      refreshPatient: fetchPatient,
      loading: patientLoading,
    }),
    [patient, fetchPatient, patientLoading],
  )

  const showLoading =
    authLoading || patientLoading || !patient || !patient.onboarding_completed || redirectingToOnboarding

  if (showLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center space-y-3">
          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-teal-100 border-t-teal-500" />
          <p className="text-sm font-semibold text-slate-600">
            {redirectingToOnboarding ? 'Redirecting you to onboarding...' : 'Preparing your dashboard...'}
          </p>
        </div>
      </div>
    )
  }

  const greetingName = patient?.first_name || patient?.last_name || user?.email?.split('@')[0] || 'there'

  return (
    <PatientDashboardContext.Provider value={contextValue}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-900">
        <div className="flex min-h-screen">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex w-72 flex-col border-r border-slate-200/80 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="px-6 py-6 border-b border-slate-100">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500 to-violet-500 flex items-center justify-center text-white font-bold shadow-lg shadow-teal-500/30 group-hover:shadow-xl group-hover:shadow-teal-500/40 transition-all duration-300">
                  I
                </div>
                <div>
                  <p className="font-display font-semibold text-lg text-slate-900">I-Medic</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Patient Portal</p>
                </div>
              </Link>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              {navItems.map(item => {
                const Icon = item.icon
                const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-teal-50 to-teal-50/50 text-teal-700 shadow-sm border border-teal-100'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:translate-x-1'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-teal-600' : ''}`} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </nav>
            <div className="px-4 py-6 border-t border-slate-100 space-y-3">
              <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 p-4 border border-slate-200/50">
                <p className="text-xs text-slate-500 font-medium mb-1">Care team contact</p>
                <p className="text-sm font-semibold text-slate-800">support@i-medic.org.bd</p>
              </div>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                onClick={signOut}
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </Button>
            </div>
          </aside>

          {/* Mobile Drawer Overlay */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

          {/* Mobile Sidebar */}
          <aside
            className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="px-6 py-6 border-b border-slate-100 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-teal-500 to-violet-500 flex items-center justify-center text-white font-bold shadow-lg">
                    I
                  </div>
                  <div>
                    <p className="font-display font-semibold text-lg">I-Medic</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Patient</p>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="h-5 w-5 text-slate-600" />
                </button>
              </div>
              <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navItems.map(item => {
                  const Icon = item.icon
                  const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href))
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-50 to-teal-50/50 text-teal-700 shadow-sm'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? 'text-teal-600' : ''}`} />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </nav>
              <div className="px-4 py-6 border-t border-slate-100 space-y-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500 mb-1">Care team contact</p>
                  <p className="text-sm font-semibold text-slate-800">support@i-medic.org.bd</p>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 text-slate-600 hover:bg-slate-100"
                  onClick={signOut}
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </Button>
              </div>
            </div>
          </aside>

          <div className="flex-1 flex flex-col min-w-0">
            <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm">
              <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <Menu className="h-6 w-6 text-slate-700" />
                  </button>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400 font-medium hidden sm:block">Welcome</p>
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Hi {greetingName},</h1>
                    <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">Here is what's happening with your care today.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-slate-500">Primary clinician</p>
                    <p className="text-sm font-semibold text-slate-900">I-Medic Care Team</p>
                  </div>
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-teal-500 to-violet-500 text-white flex items-center justify-center font-semibold uppercase shadow-lg shadow-teal-500/30 ring-2 ring-white">
                    {(patient?.first_name?.[0] || greetingName[0] || 'I').toUpperCase()}
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 max-w-7xl mx-auto w-full">{children}</main>
          </div>
        </div>
      </div>
    </PatientDashboardContext.Provider>
  )
}

