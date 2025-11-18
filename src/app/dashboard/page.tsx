'use client'

import { useEffect, useState } from 'react'
import {
  DashboardKeyMetrics,
  DashboardNextStepCard,
  DashboardOngoingIssues,
  DashboardRecentActivity,
  DashboardStatusCard,
  DashboardTodayMeds,
} from '@/components/dashboard/home'
import { usePatientDashboard } from '@/components/dashboard/patient-context'
import { dashboardService } from '@/lib/dashboard-service'
import { DashboardData } from '@/types/dashboard'

export default function DashboardHomePage() {
  const { patient } = usePatientDashboard()
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!patient?.id) return
    let isMounted = true

    const loadDashboard = async () => {
      try {
        setLoading(true)
        const mocked = await dashboardService.getDashboardData(patient.id)
        if (isMounted) {
          setData(mocked)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadDashboard()
    return () => {
      isMounted = false
    }
  }, [patient?.id])

  if (loading || !data) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="text-center space-y-3">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-teal-500" />
          <p className="text-sm font-semibold text-slate-500">Loading your personalized view...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <DashboardStatusCard status={data.status} />

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <DashboardNextStepCard nextStep={data.nextStep} />
        </div>
        <div className="lg:col-span-2">
          <DashboardOngoingIssues issues={data.issues} />
        </div>
      </div>

      <DashboardKeyMetrics metrics={data.metrics} />

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        <DashboardTodayMeds meds={data.medicationToday} />
        <DashboardRecentActivity events={data.recentEvents} />
      </div>
    </div>
  )
}
