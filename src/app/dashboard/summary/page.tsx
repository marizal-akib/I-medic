'use client'

import { useEffect, useState } from 'react'
import { usePatientDashboard } from '@/components/dashboard/patient-context'
import { healthSummaryService } from '@/lib/services/healthSummaryService'
import { HealthSummaryData } from '@/types/healthSummary'
import {
  HealthSnapshotCard,
  HealthIssuesSection,
  MedicalHistoryTimeline,
  ConditionsList,
  MedicationsOverview,
  RisksRecommendations,
  ExportActions,
} from '@/components/dashboard/health-summary'

export default function DashboardSummaryPage() {
  const { patient } = usePatientDashboard()
  const [data, setData] = useState<HealthSummaryData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!patient?.id) return
    let isMounted = true

    const loadHealthSummary = async () => {
      try {
        setLoading(true)
        const summaryData = await healthSummaryService.getHealthSummary(patient.id)
        if (isMounted) {
          setData(summaryData)
        }
      } catch (error) {
        console.error('Failed to load health summary:', error)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadHealthSummary()
    return () => {
      isMounted = false
    }
  }, [patient?.id])

  if (loading || !data) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="text-center space-y-3">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-teal-500" />
          <p className="text-sm font-semibold text-slate-500">Loading your health summary...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Health Summary</h1>
        <p className="text-sm sm:text-base text-slate-600">
          Your complete medical history and current health status in one place
        </p>
      </div>

      {/* Snapshot */}
      <HealthSnapshotCard snapshot={data.snapshot} />

      {/* Current Issues */}
      <HealthIssuesSection
        title="Current Issues"
        description="Active health concerns"
        issues={data.currentIssues}
      />

      {/* Key Metrics Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Conditions */}
        <ConditionsList conditions={data.conditions} />

        {/* Medications */}
        <MedicationsOverview medications={data.medications} />
      </div>

      {/* Risks & Recommendations */}
      <RisksRecommendations risks={data.risks} />

      {/* Medical History Timeline */}
      <MedicalHistoryTimeline events={data.historyEvents} />

      {/* Resolved Issues */}
      {data.resolvedIssues.length > 0 && (
        <HealthIssuesSection
          title="Resolved Issues"
          description="Previously managed conditions"
          issues={data.resolvedIssues}
        />
      )}

      {/* Export Actions */}
      <ExportActions />
    </div>
  )
}

