import { DashboardSectionPlaceholder } from '@/components/dashboard/section-placeholder'

export default function DashboardLogsPage() {
  return (
    <div className="space-y-6">
      <DashboardSectionPlaceholder
        title="My Logs"
        description="Capture symptoms, vitals, meals, and mood to keep your care team informed."
        helper="Structured logging templates and reminders will arrive shortly."
        actionLabel="Open logging tools"
        actionHref="/dashboard/logs"
      />
    </div>
  )
}

