import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { KeyMetric } from '@/types/dashboard'

const metricTokens: Record<KeyMetric['status'], { label: string; color: string }> = {
  ok: { label: 'On Track', color: 'text-emerald-600' },
  borderline: { label: 'Borderline', color: 'text-amber-600' },
  high: { label: 'High', color: 'text-red-600' },
  low: { label: 'Low', color: 'text-blue-600' },
}

export function DashboardKeyMetrics({ metrics }: { metrics: KeyMetric[] }) {
  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">Key numbers</CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">Vitals snapshot</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {metrics.map(metric => {
            const token = metricTokens[metric.status]
            return (
              <div
                key={metric.id}
                className="rounded-xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 px-4 py-4 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-200"
              >
                <p className="text-xs uppercase tracking-wide text-slate-500 font-medium">{metric.label}</p>
                <p className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
                  {metric.value}
                  {metric.unit && <span className="text-sm text-slate-500 ml-1 font-normal">{metric.unit}</span>}
                </p>
                <p className={`text-xs font-semibold mt-1 ${token.color}`}>{token.label}</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-2 font-medium">
                  Updated {new Date(metric.lastUpdated).toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' })}
                </p>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

