import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { OngoingIssue } from '@/types/dashboard'

const severityTokens: Record<OngoingIssue['severity'], { label: string; color: string; bg: string }> = {
  high: { label: 'High', color: 'text-red-700', bg: 'bg-red-50' },
  medium: { label: 'Medium', color: 'text-amber-700', bg: 'bg-amber-50' },
  low: { label: 'Low', color: 'text-emerald-700', bg: 'bg-emerald-50' },
}

export function DashboardOngoingIssues({ issues }: { issues: OngoingIssue[] }) {
  return (
    <Card className="h-full border-0 shadow-md ring-1 ring-slate-200/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">Ongoing issues</CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">Care focus</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 pt-0">
        {issues.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-8 bg-slate-50 rounded-xl">No active issues reported.</p>
        )}
        {issues.map(issue => {
          const token = severityTokens[issue.severity]
          return (
            <div key={issue.id} className="rounded-xl border border-slate-200/80 p-4 bg-white hover:bg-slate-50/50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                <p className="font-semibold text-slate-900 text-sm sm:text-base">{issue.title}</p>
                <span className={`inline-flex rounded-full px-3 py-1 text-[10px] sm:text-[11px] font-semibold w-fit ${token.bg} ${token.color}`}>
                  {token.label}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{issue.summary}</p>
              {issue.nextStep && (
                <p className="mt-2 text-xs text-slate-500 bg-slate-50 rounded-lg p-2 border border-slate-100">
                  {issue.nextStep}
                </p>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

