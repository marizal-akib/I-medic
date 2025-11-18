import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { NextStep } from '@/types/dashboard'
import { CalendarClock, FlaskConical, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const icons = {
  appointment: CalendarClock,
  test: FlaskConical,
  none: CheckCircle2,
}

export function DashboardNextStepCard({ nextStep }: { nextStep: NextStep }) {
  const Icon = icons[nextStep.type]

  return (
    <Card className="h-full border-0 shadow-md ring-1 ring-slate-200/50 hover:shadow-lg transition-all duration-300">
      <CardHeader className="space-y-1 pb-4">
        <CardDescription className="text-xs sm:text-sm font-medium">Next step</CardDescription>
        <CardTitle className="text-lg sm:text-xl font-bold">{nextStep.type === 'none' ? 'You are up to date' : 'Stay on track'}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <div className="flex items-start gap-3 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 px-4 py-4 border border-slate-200/50">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm flex-1 min-w-0">
            {nextStep.type === 'appointment' && (
              <>
                <p className="font-semibold text-slate-900 text-sm sm:text-base">{nextStep.title}</p>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  {new Date(nextStep.date).toLocaleString(undefined, {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}{' '}
                  · {nextStep.mode === 'virtual' ? 'Video visit' : 'In-person'}
                </p>
                {nextStep.description && <p className="text-xs text-slate-500 mt-2 leading-relaxed">{nextStep.description}</p>}
              </>
            )}
            {nextStep.type === 'test' && (
              <>
                <p className="font-semibold text-slate-900 text-sm sm:text-base">{nextStep.testName}</p>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  Due {new Date(nextStep.dueDate).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                </p>
                {nextStep.description && <p className="text-xs text-slate-500 mt-2 leading-relaxed">{nextStep.description}</p>}
              </>
            )}
            {nextStep.type === 'none' && (
              <>
                <p className="font-semibold text-slate-900 text-sm sm:text-base">No actions pending</p>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">Keep logging vitals to stay ready for your next check-in.</p>
              </>
            )}
          </div>
        </div>
        {nextStep.ctaLabel && nextStep.ctaHref && (
          <Button asChild className="w-full shadow-sm hover:shadow-md transition-shadow">
            <Link href={nextStep.ctaHref}>{nextStep.ctaLabel}</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

