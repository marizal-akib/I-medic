import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HealthIssue } from '@/types/healthSummary'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const severityTokens: Record<
  HealthIssue['severity'],
  { label: string; color: string; bg: string }
> = {
  high: { label: 'High', color: 'text-red-700', bg: 'bg-red-50' },
  moderate: { label: 'Moderate', color: 'text-amber-700', bg: 'bg-amber-50' },
  low: { label: 'Low', color: 'text-emerald-700', bg: 'bg-emerald-50' },
}

const statusTokens: Record<
  HealthIssue['status'],
  { label: string; color: string }
> = {
  active: { label: 'Active', color: 'text-red-600' },
  monitoring: { label: 'Monitoring', color: 'text-amber-600' },
  resolved: { label: 'Resolved', color: 'text-emerald-600' },
  ruled_out: { label: 'Ruled Out', color: 'text-slate-500' },
}

const categoryLabels: Record<HealthIssue['category'], string> = {
  chronic: 'Chronic Condition',
  acute: 'Acute Issue',
  risk: 'Risk Factor',
  other: 'Other',
}

function HealthIssueItem({ issue }: { issue: HealthIssue }) {
  const [expanded, setExpanded] = useState(false)
  const severityToken = severityTokens[issue.severity]
  const statusToken = statusTokens[issue.status]

  return (
    <div className="rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50/50 transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2">
              <h4 className="font-semibold text-slate-900 text-sm sm:text-base">{issue.name}</h4>
              {expanded ? (
                <ChevronUp className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
              ) : (
                <ChevronDown className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
              )}
            </div>
            <p className="text-xs text-slate-500 mt-1">{categoryLabels[issue.category]}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-semibold w-fit ${severityToken.bg} ${severityToken.color}`}
            >
              {severityToken.label}
            </span>
            <span className={`inline-flex rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-semibold bg-slate-100 w-fit ${statusToken.color}`}>
              {statusToken.label}
            </span>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 pt-2 space-y-3 border-t border-slate-100">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              Summary
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{issue.summary}</p>
          </div>

          {issue.keyMetrics && issue.keyMetrics.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                Key Metrics
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {issue.keyMetrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-lg p-3 border border-slate-200/50">
                    <p className="text-xs text-slate-500">{metric.label}</p>
                    <p className="text-lg font-bold text-slate-900 mt-0.5">{metric.value}</p>
                    <p className="text-[10px] text-slate-400 mt-1">
                      {new Date(metric.date).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {issue.nextStep && (
            <div className="bg-teal-50 border border-teal-100 rounded-lg p-3">
              <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-1">
                Next Step
              </p>
              <p className="text-xs sm:text-sm text-teal-900">{issue.nextStep}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <span>
              Since: {new Date(issue.since).toLocaleDateString(undefined, { dateStyle: 'medium' })}
            </span>
            {issue.resolvedAt && (
              <span>
                Resolved: {new Date(issue.resolvedAt).toLocaleDateString(undefined, { dateStyle: 'medium' })}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export function HealthIssuesSection({
  title,
  description,
  issues,
}: {
  title: string
  description: string
  issues: HealthIssue[]
}) {
  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">{description}</CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {issues.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-8 bg-slate-50 rounded-xl">
            No issues recorded.
          </p>
        ) : (
          issues.map((issue) => <HealthIssueItem key={issue.id} issue={issue} />)
        )}
      </CardContent>
    </Card>
  )
}

