import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MedicationSummary } from '@/types/healthSummary'
import { Pill, CheckCircle2, XCircle } from 'lucide-react'

const statusTokens: Record<
  MedicationSummary['status'],
  { label: string; icon: typeof CheckCircle2; color: string; bg: string }
> = {
  current: {
    label: 'Active',
    icon: CheckCircle2,
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
  },
  stopped: {
    label: 'Stopped',
    icon: XCircle,
    color: 'text-slate-600',
    bg: 'bg-slate-100',
  },
}

export function MedicationsOverview({ medications }: { medications: MedicationSummary[] }) {
  const currentMeds = medications.filter((m) => m.status === 'current')
  const stoppedMeds = medications.filter((m) => m.status === 'stopped')

  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">
          Medications overview
        </CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">Current & Past Medications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        {currentMeds.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Current Medications
            </h4>
            <div className="space-y-2">
              {currentMeds.map((med) => {
                const token = statusTokens[med.status]
                const Icon = token.icon
                return (
                  <div
                    key={med.id}
                    className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-600 flex-shrink-0">
                      <Pill className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-slate-900 text-sm sm:text-base">
                            {med.name}
                          </h5>
                          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{med.dose}</p>
                          {med.reason && (
                            <p className="text-xs text-slate-500 mt-1">For: {med.reason}</p>
                          )}
                        </div>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0 ${token.bg} ${token.color}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {token.label}
                        </span>
                      </div>
                      {med.since && (
                        <p className="text-xs text-slate-400 mt-2">
                          Since:{' '}
                          {new Date(med.since).toLocaleDateString(undefined, {
                            dateStyle: 'medium',
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {stoppedMeds.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Stopped Medications
            </h4>
            <div className="space-y-2">
              {stoppedMeds.map((med) => {
                const token = statusTokens[med.status]
                const Icon = token.icon
                return (
                  <div
                    key={med.id}
                    className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3 hover:bg-slate-100/50 transition-colors"
                  >
                    <div className="rounded-full bg-slate-200 p-2 text-slate-500 flex-shrink-0">
                      <Pill className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-slate-700 text-sm sm:text-base">
                            {med.name}
                          </h5>
                          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{med.dose}</p>
                          {med.reason && (
                            <p className="text-xs text-slate-400 mt-1">
                              {med.reason}
                            </p>
                          )}
                        </div>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold flex-shrink-0 ${token.bg} ${token.color}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {token.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-400">
                        {med.since && (
                          <span>
                            Since:{' '}
                            {new Date(med.since).toLocaleDateString(undefined, {
                              dateStyle: 'medium',
                            })}
                          </span>
                        )}
                        {med.stoppedAt && (
                          <span>
                            Stopped:{' '}
                            {new Date(med.stoppedAt).toLocaleDateString(undefined, {
                              dateStyle: 'medium',
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {medications.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-8 bg-slate-50 rounded-xl">
            No medications recorded.
          </p>
        )}
      </CardContent>
    </Card>
  )
}

