import { DashboardSectionPlaceholder } from '@/components/dashboard/section-placeholder'

export default function DashboardTestsPage() {
  return (
    <div className="space-y-6">
      <DashboardSectionPlaceholder
        title="Tests & Reports"
        description="Access lab results, imaging, prescriptions, and upload new documents."
        helper="Soon you’ll be able to sync lab partners and share files directly with your care team."
        actionLabel="Upload docs"
        actionHref="/dashboard/tests"
      />
    </div>
  )
}

