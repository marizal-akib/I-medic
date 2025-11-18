import { DashboardSectionPlaceholder } from '@/components/dashboard/section-placeholder'

export default function DashboardSummaryPage() {
  return (
    <div className="space-y-6">
      <DashboardSectionPlaceholder
        title="Health Summary"
        description="See longitudinal insights, goals, and clinician notes in one place."
        helper="This space will consolidate labs, vitals, and recommendations every week."
        actionLabel="View current plan"
        actionHref="/dashboard/summary"
      />
    </div>
  )
}

