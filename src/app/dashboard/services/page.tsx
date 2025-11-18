import { DashboardSectionPlaceholder } from '@/components/dashboard/section-placeholder'

export default function DashboardServicesPage() {
  return (
    <div className="space-y-6">
      <DashboardSectionPlaceholder
        title="Services & Shop"
        description="Book care plans, order medical devices, and manage subscriptions."
        helper="We’re finalising partner integrations for faster fulfilment."
        actionLabel="Explore services"
        actionHref="/services"
      />
    </div>
  )
}

