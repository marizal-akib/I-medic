import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MedicationDoseToday } from '@/types/dashboard'
import { CheckCircle2, CircleDashed, XCircle } from 'lucide-react'

const medTokens: Record<
  MedicationDoseToday['status'],
  { label: string; color: string; icon: typeof CheckCircle2; bg: string }
> = {
  taken: { label: 'Taken', color: 'text-emerald-600', icon: CheckCircle2, bg: 'bg-emerald-50' },
  pending: { label: 'Pending', color: 'text-amber-600', icon: CircleDashed, bg: 'bg-amber-50' },
  skipped: { label: 'Skipped', color: 'text-red-600', icon: XCircle, bg: 'bg-red-50' },
}

export function DashboardTodayMeds({ meds }: { meds: MedicationDoseToday[] }) {
  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 h-full hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">Today's medications</CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">Checklist</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {meds.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-8 bg-slate-50 rounded-xl">No medications scheduled for today.</p>
        )}
        {meds.map(med => {
          const token = medTokens[med.status]
          const Icon = token.icon
          return (
            <div
              key={med.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl border border-slate-200/80 px-4 py-3 bg-white hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 text-sm sm:text-base">{med.name}</p>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{med.time}</p>
                {med.notes && <p className="text-xs text-slate-500 mt-1.5">{med.notes}</p>}
              </div>
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm w-fit ${token.bg} ${token.color}`}>
                <Icon className="h-4 w-4" />
                {token.label}
              </span>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

