import { DashboardSectionPlaceholder } from '@/components/dashboard/section-placeholder'

export default function DashboardSupportPage() {
  return (
    <div className="space-y-6">
      <DashboardSectionPlaceholder
        title="Support"
        description="Reach your care coordinator, raise issues, or chat with I-Medic support."
        helper="24/7 live chat and WhatsApp escalation will be enabled soon."
        actionLabel="Contact support"
        actionHref="/contact"
      />
    </div>
  )
}

