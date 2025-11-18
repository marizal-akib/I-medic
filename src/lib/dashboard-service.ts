import { DashboardData } from '@/types/dashboard'

const formatDate = (date: Date) => date.toISOString()

const createMockDashboardData = (patientId: string): DashboardData => {
  const now = new Date()
  const tomorrow = new Date(now)
  tomorrow.setDate(now.getDate() + 1)
  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)
  const lastWeek = new Date(now)
  lastWeek.setDate(now.getDate() - 7)
  const patientReference = patientId.slice(-4).toUpperCase()

  return {
    status: {
      label: 'needs_review',
      message: 'Vitals are stable but blood pressure is trending high.',
      details: `Share your blood pressure log before tomorrow’s review call (Ref #${patientReference}).`,
      updatedAt: formatDate(now),
    },
    nextStep: {
      type: 'appointment',
      title: 'Care Team Review',
      date: formatDate(tomorrow),
      mode: 'virtual',
      clinician: 'Dr. Afsana Rahman',
      description: '15-min video check-in to adjust medication plan.',
      ctaLabel: 'View visit details',
      ctaHref: '/dashboard/visits',
    },
    issues: [
      {
        id: 'issue-1',
        title: 'Hypertension follow-up',
        severity: 'medium',
        summary: 'BP readings averaged 138/86 last week. Continue low-sodium diet and log twice daily.',
        nextStep: 'Upload blood pressure log before tomorrow 10 AM.',
        startedAt: formatDate(lastWeek),
      },
      {
        id: 'issue-2',
        title: 'Sleep consistency',
        severity: 'low',
        summary: 'Average sleep dropped to 6h over the past 3 days. Track bedtime routine.',
        nextStep: 'Share sleep log inside My Logs section.',
      },
    ],
    metrics: [
      {
        id: 'metric-1',
        label: 'Blood Pressure',
        value: '138/86',
        status: 'borderline',
        lastUpdated: formatDate(now),
        trend: 'steady',
        unit: 'mmHg',
      },
      {
        id: 'metric-2',
        label: 'Resting Heart Rate',
        value: '74',
        status: 'ok',
        lastUpdated: formatDate(now),
        trend: 'down',
        unit: 'bpm',
      },
      {
        id: 'metric-3',
        label: 'Weekly Activity',
        value: '4.2k',
        status: 'low',
        lastUpdated: formatDate(yesterday),
        trend: 'down',
        unit: 'steps/day',
      },
    ],
    medicationToday: [
      {
        id: 'med-1',
        name: 'Amlodipine 5mg',
        time: '07:00',
        status: 'taken',
        notes: 'Taken with breakfast',
      },
      {
        id: 'med-2',
        name: 'Metformin 500mg',
        time: '13:00',
        status: 'pending',
        notes: 'Take after lunch',
      },
      {
        id: 'med-3',
        name: 'Vitamin D',
        time: '21:00',
        status: 'pending',
      },
    ],
    recentEvents: [
      {
        id: 'event-1',
        date: formatDate(yesterday),
        label: 'Blood test reviewed',
        type: 'test',
        description: 'Labs processed. HbA1c 6.4%, creatinine normal.',
      },
      {
        id: 'event-2',
        date: formatDate(lastWeek),
        label: 'Home visit completed',
        type: 'visit',
        description: 'Vitals captured and medication adherence check done.',
      },
      {
        id: 'event-3',
        date: formatDate(lastWeek),
        label: 'New symptom logged',
        type: 'log',
        description: 'Reported mild dizziness in afternoons.',
      },
    ],
  }
}

export const dashboardService = {
  async getDashboardData(patientId: string): Promise<DashboardData> {
    // Simulate network latency to mirror future API behaviour
    await new Promise(resolve => setTimeout(resolve, 250))
    return createMockDashboardData(patientId)
  },
}

