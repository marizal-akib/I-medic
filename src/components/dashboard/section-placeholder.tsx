import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface DashboardSectionPlaceholderProps {
  title: string
  description: string
  helper?: string
  actionLabel?: string
  actionHref?: string
}

export function DashboardSectionPlaceholder({
  title,
  description,
  helper,
  actionLabel,
  actionHref,
}: DashboardSectionPlaceholderProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-500">
          Detailed functionality for this section is coming soon. For now, you can track progress from the Home tab.
        </p>
        {helper && <p className="text-xs text-slate-400">{helper}</p>}
        {actionLabel && actionHref && (
          <Button asChild variant="outline">
            <Link href={actionHref}>{actionLabel}</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

