import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ConditionEntry } from '@/types/healthSummary'
import { CheckCircle2, Clock } from 'lucide-react'

const statusTokens: Record<
  ConditionEntry['status'],
  { label: string; icon: typeof CheckCircle2; color: string; bg: string }
> = {
  current: {
    label: 'Current',
    icon: Clock,
    color: 'text-teal-700',
    bg: 'bg-teal-50',
  },
  past: {
    label: 'Past',
    icon: CheckCircle2,
    color: 'text-slate-600',
    bg: 'bg-slate-100',
  },
}

export function ConditionsList({ conditions }: { conditions: ConditionEntry[] }) {
  // Separate current and past conditions
  const currentConditions = conditions.filter((c) => c.status === 'current')
  const pastConditions = conditions.filter((c) => c.status === 'past')

  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">
          Conditions & Diagnoses
        </CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">Medical Conditions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        {currentConditions.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Current Conditions
            </h4>
            <div className="space-y-2">
              {currentConditions.map((condition) => {
                const token = statusTokens[condition.status]
                const Icon = token.icon
                return (
                  <div
                    key={condition.id}
                    className="rounded-xl border border-slate-200/80 bg-white p-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-slate-900 text-sm sm:text-base">
                          {condition.name}
                        </h5>
                        {condition.notes && (
                          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                            {condition.notes}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                          {condition.firstSeen && (
                            <span>
                              Since:{' '}
                              {new Date(condition.firstSeen).toLocaleDateString(undefined, {
                                dateStyle: 'medium',
                              })}
                            </span>
                          )}
                          {condition.lastReviewed && (
                            <span>
                              Last reviewed:{' '}
                              {new Date(condition.lastReviewed).toLocaleDateString(undefined, {
                                dateStyle: 'medium',
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0 ${token.bg} ${token.color}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {token.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {pastConditions.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Past Conditions
            </h4>
            <div className="space-y-2">
              {pastConditions.map((condition) => {
                const token = statusTokens[condition.status]
                const Icon = token.icon
                return (
                  <div
                    key={condition.id}
                    className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 hover:bg-slate-100/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-slate-700 text-sm sm:text-base">
                          {condition.name}
                        </h5>
                        {condition.notes && (
                          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                            {condition.notes}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-400">
                          {condition.firstSeen && (
                            <span>
                              Since:{' '}
                              {new Date(condition.firstSeen).toLocaleDateString(undefined, {
                                dateStyle: 'medium',
                              })}
                            </span>
                          )}
                          {condition.lastReviewed && (
                            <span>
                              Last reviewed:{' '}
                              {new Date(condition.lastReviewed).toLocaleDateString(undefined, {
                                dateStyle: 'medium',
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0 ${token.bg} ${token.color}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {token.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {conditions.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-8 bg-slate-50 rounded-xl">
            No conditions recorded.
          </p>
        )}
      </CardContent>
    </Card>
  )
}

