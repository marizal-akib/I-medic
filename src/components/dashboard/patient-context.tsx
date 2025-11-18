'use client'

import { createContext, useContext } from 'react'
import { PatientData } from '@/lib/serverCom'

export interface PatientDashboardContextValue {
  patient: PatientData | null
  refreshPatient: () => Promise<void>
  loading: boolean
}

export const PatientDashboardContext = createContext<PatientDashboardContextValue | null>(null)

export function usePatientDashboard() {
  const ctx = useContext(PatientDashboardContext)
  if (!ctx) {
    throw new Error('usePatientDashboard must be used within PatientDashboardContext.Provider')
  }
  return ctx
}

