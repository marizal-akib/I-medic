import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RiskRecommendation } from '@/types/healthSummary'
import { AlertTriangle, Info, AlertCircle } from 'lucide-react'

const priorityTokens: Record<
  RiskRecommendation['priority'],
  { label: string; icon: typeof AlertTriangle; color: string; bg: string; border: string }
> = {
  high: {
    label: 'High Priority',
    icon: AlertTriangle,
    color: 'text-red-700',
    bg: 'bg-red-50',
    border: 'border-red-200',
  },
  medium: {
    label: 'Medium Priority',
    icon: AlertCircle,
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  low: {
    label: 'Low Priority',
    icon: Info,
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
}

export function RisksRecommendations({ risks }: { risks: RiskRecommendation[] }) {
  // Sort by priority: high -> medium -> low
  const priorityOrder = { high: 0, medium: 1, low: 2 }
  const sortedRisks = [...risks].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  )

  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">
          Risks & Recommendations
        </CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">Clinical Guidance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {sortedRisks.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-8 bg-slate-50 rounded-xl">
            No recommendations at this time.
          </p>
        ) : (
          sortedRisks.map((risk) => {
            const token = priorityTokens[risk.priority]
            const Icon = token.icon
            return (
              <div
                key={risk.id}
                className={`rounded-xl border ${token.border} ${token.bg} p-4 transition-all hover:shadow-sm`}
              >
                <div className="flex items-start gap-3">
                  <div className={`rounded-full ${token.bg} p-2 ${token.color} border ${token.border} flex-shrink-0`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                        {risk.title}
                      </h4>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0 ${token.bg} ${token.color} border ${token.border}`}
                      >
                        {token.label}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{risk.body}</p>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </CardContent>
    </Card>
  )
}

