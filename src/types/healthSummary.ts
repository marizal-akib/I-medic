export type IssueStatus = 'active' | 'monitoring' | 'resolved' | 'ruled_out'

export type IssueSeverity = 'low' | 'moderate' | 'high'

export type IssueCategory = 'chronic' | 'acute' | 'risk' | 'other'

export interface HealthIssue {
  id: string
  name: string
  category: IssueCategory
  status: IssueStatus
  severity: IssueSeverity
  since: string // ISO date
  resolvedAt?: string // ISO date
  summary: string
  nextStep?: string
  keyMetrics?: {
    label: string
    value: string
    date: string
  }[]
}

export type HistoryEventType =
  | 'diagnosis'
  | 'visit'
  | 'test'
  | 'surgery'
  | 'med_change'
  | 'admission'
  | 'other'

export interface HistoryEvent {
  id: string
  date: string // ISO date
  type: HistoryEventType
  title: string
  description?: string
  linkedIssueIds?: string[]
}

export interface ConditionEntry {
  id: string
  name: string
  status: 'current' | 'past'
  firstSeen?: string // ISO date
  lastReviewed?: string // ISO date
  notes?: string
}

export interface MedicationSummary {
  id: string
  name: string
  dose: string
  status: 'current' | 'stopped'
  since?: string // ISO date
  stoppedAt?: string // ISO date
  reason?: string
}

export interface RiskRecommendation {
  id: string
  title: string
  body: string
  priority: 'high' | 'medium' | 'low'
}

export type HealthStatusLabel = 'stable' | 'needs_follow_up' | 'under_review'

export type RiskLevel = 'low' | 'medium' | 'high'

export interface HealthSnapshot {
  statusLabel: HealthStatusLabel
  riskLevel: RiskLevel
  summary: string
  mainConditions: string[]
  lastUpdated: string // ISO date
}

export interface HealthSummaryData {
  snapshot: HealthSnapshot
  currentIssues: HealthIssue[]
  resolvedIssues: HealthIssue[]
  historyEvents: HistoryEvent[]
  conditions: ConditionEntry[]
  medications: MedicationSummary[]
  risks: RiskRecommendation[]
}

