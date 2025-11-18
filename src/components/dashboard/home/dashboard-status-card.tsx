import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DashboardStatus } from '@/types/dashboard'
import { AlertTriangle, CheckCircle2, Activity, ShieldQuestion } from 'lucide-react'

const statusTokens: Record<
  DashboardStatus['label'],
  { label: string; icon: typeof Activity; color: string; bg: string }
> = {
  stable: {
    label: 'Stable',
    icon: CheckCircle2,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  needs_review: {
    label: 'Needs Review',
    icon: Activity,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  urgent_review: {
    label: 'Urgent Review',
    icon: AlertTriangle,
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  setup_incomplete: {
    label: 'Setup Incomplete',
    icon: ShieldQuestion,
    color: 'text-slate-600',
    bg: 'bg-slate-100',
  },
}

export function DashboardStatusCard({ status }: { status: DashboardStatus }) {
  const token = statusTokens[status.label]
  const Icon = token.icon

  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 bg-gradient-to-br from-white to-slate-50/50">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0 pb-4">
        <div className="flex-1">
          <CardDescription className="text-xs sm:text-sm font-medium">Overall health status</CardDescription>
          <CardTitle className="text-xl sm:text-2xl mt-1 font-bold">{token.label}</CardTitle>
        </div>
        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${token.bg} ${token.color}`}>
          <Icon className="h-4 w-4" />
          {token.label}
        </span>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">{status.message}</p>
        {status.details && <p className="text-xs sm:text-sm text-slate-500 bg-slate-50 rounded-lg p-3 border border-slate-100">{status.details}</p>}
        <p className="text-[10px] sm:text-xs uppercase tracking-wide text-slate-400 font-medium">
          Updated {new Date(status.updatedAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
        </p>
      </CardContent>
    </Card>
  )
}

