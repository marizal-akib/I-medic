import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HealthSnapshot } from '@/types/healthSummary'
import { Activity, AlertTriangle, CheckCircle2 } from 'lucide-react'

const statusTokens: Record<
  HealthSnapshot['statusLabel'],
  { label: string; icon: typeof Activity; color: string; bg: string }
> = {
  stable: {
    label: 'Stable',
    icon: CheckCircle2,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  needs_follow_up: {
    label: 'Needs Follow-up',
    icon: Activity,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  under_review: {
    label: 'Under Review',
    icon: AlertTriangle,
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
}

const riskTokens: Record<
  HealthSnapshot['riskLevel'],
  { label: string; color: string }
> = {
  low: { label: 'Low Risk', color: 'text-emerald-600' },
  medium: { label: 'Moderate Risk', color: 'text-amber-600' },
  high: { label: 'High Risk', color: 'text-red-600' },
}

export function HealthSnapshotCard({ snapshot }: { snapshot: HealthSnapshot }) {
  const statusToken = statusTokens[snapshot.statusLabel]
  const riskToken = riskTokens[snapshot.riskLevel]
  const StatusIcon = statusToken.icon

  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 bg-gradient-to-br from-white to-slate-50/50">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
          <CardDescription className="text-xs sm:text-sm font-medium">
            Health Snapshot
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${statusToken.bg} ${statusToken.color}`}
            >
              <StatusIcon className="h-3.5 w-3.5" />
              {statusToken.label}
            </span>
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-slate-100 ${riskToken.color}`}>
              {riskToken.label}
            </span>
          </div>
        </div>
        <CardTitle className="text-lg sm:text-xl font-bold">Overall Health Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{snapshot.summary}</p>
        
        {snapshot.mainConditions.length > 0 && (
          <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
              Primary Conditions
            </p>
            <div className="flex flex-wrap gap-2">
              {snapshot.mainConditions.map((condition, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-slate-700 border border-slate-200"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <p className="text-[10px] sm:text-xs uppercase tracking-wide text-slate-400 font-medium">
          Last Updated {new Date(snapshot.lastUpdated).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
        </p>
      </CardContent>
    </Card>
  )
}

