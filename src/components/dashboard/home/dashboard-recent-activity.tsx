import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RecentEvent } from '@/types/dashboard'
import { Activity, FlaskConical, CalendarClock, NotebookPen, AlertTriangle } from 'lucide-react'

const eventTokens: Record<
  RecentEvent['type'],
  { icon: typeof Activity; color: string; bgColor: string; label: string }
> = {
  test: { icon: FlaskConical, color: 'text-purple-600', bgColor: 'bg-purple-100', label: 'Test' },
  visit: { icon: CalendarClock, color: 'text-teal-600', bgColor: 'bg-teal-100', label: 'Visit' },
  log: { icon: NotebookPen, color: 'text-slate-600', bgColor: 'bg-slate-100', label: 'Log' },
  issue: { icon: AlertTriangle, color: 'text-amber-600', bgColor: 'bg-amber-100', label: 'Issue' },
  system: { icon: Activity, color: 'text-slate-500', bgColor: 'bg-slate-100', label: 'System' },
}

export function DashboardRecentActivity({ events }: { events: RecentEvent[] }) {
  return (
    <Card className="border-0 shadow-md ring-1 ring-slate-200/50 h-full hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">Recent activity</CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">Timeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        {events.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-8 bg-slate-50 rounded-xl">No activity recorded yet.</p>
        )}
        {events.map((event, index) => {
          const token = eventTokens[event.type]
          const Icon = token.icon
          const isLast = index === events.length - 1
          return (
            <div key={event.id} className="flex gap-3 sm:gap-4">
              <div className="flex flex-col items-center">
                <div className={`rounded-full ${token.bgColor} p-2.5 ${token.color} border-2 border-current border-opacity-20`}>
                  <Icon className="h-4 w-4" />
                </div>
                {!isLast && <div className="w-0.5 h-full bg-slate-200 mt-2" />}
              </div>
              <div className={`flex-1 pb-4 ${!isLast ? 'border-b border-slate-100' : ''}`}>
                <p className="text-sm sm:text-base font-semibold text-slate-900">{event.label}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {token.label} · {new Date(event.date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
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
      </CardContent>
    </Card>
  )
}

