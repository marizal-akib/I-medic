import { DashboardSectionPlaceholder } from '@/components/dashboard/section-placeholder'

export default function DashboardProfilePage() {
  return (
    <div className="space-y-6">
      <DashboardSectionPlaceholder
        title="Profile"
        description="Review and update your demographic details, caregivers, and consents."
        helper="Edit forms will connect directly to onboarding data shortly."
        actionLabel="Edit onboarding info"
        actionHref="/onboarding"
      />
    </div>
  )
}

