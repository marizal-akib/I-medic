import { DashboardSectionPlaceholder } from '@/components/dashboard/section-placeholder'

export default function DashboardVisitsPage() {
  return (
    <div className="space-y-6">
      <DashboardSectionPlaceholder
        title="Visits"
        description="Review past and upcoming home visits, telehealth calls, and assigned carers."
        helper="Scheduling, visit notes, and real-time updates are being prepared."
        actionLabel="Schedule a visit"
        actionHref="/dashboard/visits"
      />
    </div>
  )
}

