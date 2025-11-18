export type DashboardStatusLabel =
  | 'stable'
  | 'needs_review'
  | 'urgent_review'
  | 'setup_incomplete'

export interface DashboardStatus {
  label: DashboardStatusLabel
  message: string
  details?: string
  updatedAt: string
}

export type NextStepType = 'appointment' | 'test' | 'none'

interface NextStepBase {
  type: NextStepType
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export interface AppointmentNextStep extends NextStepBase {
  type: 'appointment'
  title: string
  date: string
  mode: 'in_person' | 'virtual'
  clinician?: string
}

export interface TestNextStep extends NextStepBase {
  type: 'test'
  testName: string
  dueDate: string
  location?: string
}

export interface NoneNextStep extends NextStepBase {
  type: 'none'
  title?: string
}

export type NextStep = AppointmentNextStep | TestNextStep | NoneNextStep

export type IssueSeverity = 'low' | 'medium' | 'high'

export interface OngoingIssue {
  id: string
  title: string
  severity: IssueSeverity
  summary: string
  nextStep?: string
  startedAt?: string
}

export type MetricStatus = 'ok' | 'borderline' | 'high' | 'low'

export interface KeyMetric {
  id: string
  label: string
  value: string
  status: MetricStatus
  lastUpdated: string
  trend?: 'up' | 'down' | 'steady'
  unit?: string
}

export type MedicationStatus = 'pending' | 'taken' | 'skipped'

export interface MedicationDoseToday {
  id: string
  name: string
  time: string
  status: MedicationStatus
  notes?: string
}

export type RecentEventType = 'test' | 'visit' | 'log' | 'issue' | 'system'

export interface RecentEvent {
  id: string
  date: string
  label: string
  type: RecentEventType
  description?: string
}

export interface DashboardData {
  status: DashboardStatus
  nextStep: NextStep
  issues: OngoingIssue[]
  metrics: KeyMetric[]
  medicationToday: MedicationDoseToday[]
  recentEvents: RecentEvent[]
}
