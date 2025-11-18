import { HealthSummaryData } from '@/types/healthSummary'

const formatDate = (date: Date): string => date.toISOString()

const createMockHealthSummary = (patientId: string): HealthSummaryData => {
  const now = new Date()
  const oneMonthAgo = new Date(now)
  oneMonthAgo.setMonth(now.getMonth() - 1)
  const threeMonthsAgo = new Date(now)
  threeMonthsAgo.setMonth(now.getMonth() - 3)
  const sixMonthsAgo = new Date(now)
  sixMonthsAgo.setMonth(now.getMonth() - 6)
  const oneYearAgo = new Date(now)
  oneYearAgo.setFullYear(now.getFullYear() - 1)
  const twoYearsAgo = new Date(now)
  twoYearsAgo.setFullYear(now.getFullYear() - 2)
  const threeYearsAgo = new Date(now)
  threeYearsAgo.setFullYear(now.getFullYear() - 3)

  const patientReference = patientId.slice(-4).toUpperCase()

  return {
    snapshot: {
      statusLabel: 'needs_follow_up',
      riskLevel: 'medium',
      summary: `Patient ${patientReference} has stable chronic conditions under active management. Blood pressure trending borderline-high requires continued monitoring. Overall adherence to medication plan is excellent.`,
      mainConditions: ['Type 2 Diabetes', 'Hypertension', 'Dyslipidemia'],
      lastUpdated: formatDate(now),
    },
    currentIssues: [
      {
        id: 'issue-1',
        name: 'Type 2 Diabetes',
        category: 'chronic',
        status: 'monitoring',
        severity: 'moderate',
        since: formatDate(threeYearsAgo),
        summary:
          'Well-controlled diabetes with HbA1c trending within target range. Patient following meal plan and medication regimen consistently.',
        nextStep: 'Continue current management. Next HbA1c test scheduled in 2 months.',
        keyMetrics: [
          {
            label: 'HbA1c',
            value: '6.4%',
            date: formatDate(oneMonthAgo),
          },
          {
            label: 'Fasting Glucose',
            value: '118 mg/dL',
            date: formatDate(now),
          },
        ],
      },
      {
        id: 'issue-2',
        name: 'Essential Hypertension',
        category: 'chronic',
        status: 'active',
        severity: 'moderate',
        since: formatDate(twoYearsAgo),
        summary:
          'Blood pressure readings averaging 138/86 mmHg over the past 2 weeks. Patient on Amlodipine 5mg daily with good medication adherence.',
        nextStep:
          'Increase home BP monitoring to twice daily. Review dietary sodium intake. Follow-up visit scheduled.',
        keyMetrics: [
          {
            label: 'Blood Pressure',
            value: '138/86',
            date: formatDate(now),
          },
        ],
      },
      {
        id: 'issue-3',
        name: 'Dyslipidemia',
        category: 'chronic',
        status: 'monitoring',
        severity: 'low',
        since: formatDate(twoYearsAgo),
        summary:
          'Lipid panel shows improvement on current statin therapy. LDL within acceptable range for cardiovascular risk profile.',
        nextStep: 'Continue current medication. Repeat lipid panel in 6 months.',
        keyMetrics: [
          {
            label: 'LDL Cholesterol',
            value: '102 mg/dL',
            date: formatDate(threeMonthsAgo),
          },
          {
            label: 'HDL Cholesterol',
            value: '48 mg/dL',
            date: formatDate(threeMonthsAgo),
          },
        ],
      },
      {
        id: 'issue-4',
        name: 'Sleep Pattern Disruption',
        category: 'acute',
        status: 'active',
        severity: 'low',
        since: formatDate(oneMonthAgo),
        summary:
          'Patient reporting reduced sleep duration (average 6 hours) and occasional difficulty falling asleep over the past 3 weeks.',
        nextStep:
          'Continue sleep logging. Discuss sleep hygiene strategies and stress management at next visit.',
      },
    ],
    resolvedIssues: [
      {
        id: 'issue-resolved-1',
        name: 'Vitamin D Deficiency',
        category: 'other',
        status: 'resolved',
        severity: 'low',
        since: formatDate(oneYearAgo),
        resolvedAt: formatDate(sixMonthsAgo),
        summary:
          'Vitamin D levels normalized following 6-month supplementation course. Repeat testing confirmed adequate levels.',
        keyMetrics: [
          {
            label: 'Vitamin D',
            value: '42 ng/mL',
            date: formatDate(sixMonthsAgo),
          },
        ],
      },
      {
        id: 'issue-resolved-2',
        name: 'Upper Respiratory Infection',
        category: 'acute',
        status: 'resolved',
        severity: 'low',
        since: formatDate(threeMonthsAgo),
        resolvedAt: formatDate(threeMonthsAgo),
        summary: 'Viral URI resolved after 10 days. No complications noted.',
      },
    ],
    historyEvents: [
      {
        id: 'history-1',
        date: formatDate(now),
        type: 'test',
        title: 'Routine blood work completed',
        description:
          'HbA1c 6.4%, fasting glucose 118 mg/dL, creatinine normal. Results reviewed with patient.',
        linkedIssueIds: ['issue-1'],
      },
      {
        id: 'history-2',
        date: formatDate(oneMonthAgo),
        type: 'visit',
        title: 'Quarterly diabetes check-up',
        description:
          'Reviewed blood sugar logs, medication adherence excellent. Discussed dietary adjustments. No complications noted.',
        linkedIssueIds: ['issue-1', 'issue-2'],
      },
      {
        id: 'history-3',
        date: formatDate(threeMonthsAgo),
        type: 'test',
        title: 'Lipid panel review',
        description:
          'LDL 102 mg/dL, HDL 48 mg/dL, triglycerides 145 mg/dL. Continue current statin therapy.',
        linkedIssueIds: ['issue-3'],
      },
      {
        id: 'history-4',
        date: formatDate(sixMonthsAgo),
        type: 'diagnosis',
        title: 'Vitamin D deficiency resolved',
        description:
          'Follow-up testing shows normalized vitamin D levels. Supplementation discontinued.',
        linkedIssueIds: ['issue-resolved-1'],
      },
      {
        id: 'history-5',
        date: formatDate(oneYearAgo),
        type: 'med_change',
        title: 'Metformin dose adjusted',
        description:
          'Increased Metformin from 500mg to 1000mg daily based on HbA1c trend. Tolerated well with no GI side effects.',
        linkedIssueIds: ['issue-1'],
      },
      {
        id: 'history-6',
        date: formatDate(twoYearsAgo),
        type: 'diagnosis',
        title: 'Essential hypertension diagnosed',
        description:
          'Persistent elevated BP readings. Initiated on Amlodipine 5mg daily. Lifestyle modifications counseled.',
        linkedIssueIds: ['issue-2'],
      },
      {
        id: 'history-7',
        date: formatDate(twoYearsAgo),
        type: 'diagnosis',
        title: 'Dyslipidemia identified',
        description:
          'Elevated LDL and borderline triglycerides noted. Started on atorvastatin 20mg nightly.',
        linkedIssueIds: ['issue-3'],
      },
      {
        id: 'history-8',
        date: formatDate(threeYearsAgo),
        type: 'diagnosis',
        title: 'Type 2 Diabetes mellitus diagnosed',
        description:
          'HbA1c 7.8%, fasting glucose 156 mg/dL. Initiated on Metformin 500mg twice daily. Comprehensive diabetes education provided.',
        linkedIssueIds: ['issue-1'],
      },
    ],
    conditions: [
      {
        id: 'cond-1',
        name: 'Type 2 Diabetes Mellitus',
        status: 'current',
        firstSeen: formatDate(threeYearsAgo),
        lastReviewed: formatDate(now),
        notes: 'Well-controlled on oral medications. No evidence of complications.',
      },
      {
        id: 'cond-2',
        name: 'Essential Hypertension',
        status: 'current',
        firstSeen: formatDate(twoYearsAgo),
        lastReviewed: formatDate(now),
        notes:
          'Requires ongoing monitoring. Patient shows good adherence to antihypertensive therapy.',
      },
      {
        id: 'cond-3',
        name: 'Dyslipidemia',
        status: 'current',
        firstSeen: formatDate(twoYearsAgo),
        lastReviewed: formatDate(threeMonthsAgo),
        notes: 'Responding well to statin therapy. Lipid goals nearly met.',
      },
      {
        id: 'cond-4',
        name: 'Vitamin D Deficiency',
        status: 'past',
        firstSeen: formatDate(oneYearAgo),
        lastReviewed: formatDate(sixMonthsAgo),
        notes: 'Resolved with supplementation. Levels now adequate.',
      },
    ],
    medications: [
      {
        id: 'med-1',
        name: 'Metformin',
        dose: '1000mg twice daily',
        status: 'current',
        since: formatDate(threeYearsAgo),
        reason: 'Type 2 Diabetes management',
      },
      {
        id: 'med-2',
        name: 'Amlodipine',
        dose: '5mg once daily',
        status: 'current',
        since: formatDate(twoYearsAgo),
        reason: 'Blood pressure control',
      },
      {
        id: 'med-3',
        name: 'Atorvastatin',
        dose: '20mg nightly',
        status: 'current',
        since: formatDate(twoYearsAgo),
        reason: 'Cholesterol management',
      },
      {
        id: 'med-4',
        name: 'Aspirin',
        dose: '81mg once daily',
        status: 'current',
        since: formatDate(twoYearsAgo),
        reason: 'Cardiovascular protection',
      },
      {
        id: 'med-5',
        name: 'Vitamin D3',
        dose: '2000 IU daily',
        status: 'stopped',
        since: formatDate(oneYearAgo),
        stoppedAt: formatDate(sixMonthsAgo),
        reason: 'Deficiency resolved, discontinued per provider',
      },
    ],
    risks: [
      {
        id: 'risk-1',
        title: 'Cardiovascular Disease Risk',
        priority: 'high',
        body: 'Patient has multiple cardiovascular risk factors including diabetes, hypertension, and dyslipidemia. Continue aggressive risk factor management. Aspirin for primary prevention ongoing. Consider cardiology consult if BP control remains suboptimal.',
      },
      {
        id: 'risk-2',
        title: 'Diabetes Complications Screening',
        priority: 'medium',
        body: 'Annual eye exam (retinopathy screening) due next month. Foot examination and monofilament testing recommended at next visit. Continue monitoring kidney function with annual microalbumin screen.',
      },
      {
        id: 'risk-3',
        title: 'Physical Activity Enhancement',
        priority: 'medium',
        body: 'Current activity levels below target (average 4200 steps/day). Recommend gradual increase to 7000-10000 steps daily. Consider referral to exercise physiologist or cardiac rehab program for structured activity plan.',
      },
      {
        id: 'risk-4',
        title: 'Sleep Quality Optimization',
        priority: 'low',
        body: 'Recent sleep disruption may impact metabolic control and blood pressure. Address sleep hygiene, screen for sleep apnea if symptoms persist. Consider sleep study if no improvement with conservative measures.',
      },
    ],
  }
}

export const healthSummaryService = {
  async getHealthSummary(patientId: string): Promise<HealthSummaryData> {
    // Simulate network latency to mirror future API behaviour
    await new Promise((resolve) => setTimeout(resolve, 300))
    return createMockHealthSummary(patientId)
  },
}

