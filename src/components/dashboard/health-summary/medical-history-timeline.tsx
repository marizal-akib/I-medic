import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HistoryEvent } from '@/types/healthSummary'
import {
  Activity,
  FlaskConical,
  CalendarClock,
  Stethoscope,
  Pill,
  Building2,
  FileText,
} from 'lucide-react'

const eventTokens: Record<
  HistoryEvent['type'],
  { icon: typeof Activity; color: string; bgColor: string; label: string }
> = {
  diagnosis: {
    icon: Stethoscope,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    label: 'Diagnosis',
  },
  visit: {
    icon: CalendarClock,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
    label: 'Visit',
  },
  test: {
    icon: FlaskConical,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    label: 'Test',
  },
  surgery: {
    icon: Activity,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    label: 'Surgery',
  },
  med_change: {
    icon: Pill,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    label: 'Medication',
  },
  admission: {
    icon: Building2,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    label: 'Admission',
  },
  other: {
    icon: FileText,
    color: 'text-slate-600',
    bgColor: 'bg-slate-100',
    label: 'Other',
  },
}

export function MedicalHistoryTimeline({ events }: { events: HistoryEvent[] }) {
  // Sort events by date descending
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">
          Medical history
        </CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">Timeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        {sortedEvents.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-8 bg-slate-50 rounded-xl">
            No history events recorded yet.
          </p>
        ) : (
          <div className="space-y-4">
            {sortedEvents.map((event, index) => {
              const token = eventTokens[event.type]
              const Icon = token.icon
              const isLast = index === sortedEvents.length - 1

              return (
                <div key={event.id} className="flex gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`rounded-full ${token.bgColor} p-2.5 ${token.color} border-2 border-current border-opacity-20`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    {!isLast && <div className="w-0.5 h-full bg-slate-200 mt-2" />}
                  </div>
                  <div className={`flex-1 pb-4 ${!isLast ? 'border-b border-slate-100' : ''}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded ${token.bgColor} ${token.color}`}
                      >
                        {token.label}
                      </span>
                      <span className="text-xs text-slate-500">
                        {new Date(event.date).toLocaleDateString(undefined, {
                          dateStyle: 'medium',
                        })}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 mt-1">
                      {event.title}
                    </p>
                    {event.description && (
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed bg-slate-50 rounded-lg p-2 border border-slate-100">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

