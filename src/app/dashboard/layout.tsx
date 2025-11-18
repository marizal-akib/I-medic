import { ReactNode } from 'react'
import PatientDashboardLayout from '@/components/dashboard/patient-dashboard-layout'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <PatientDashboardLayout>{children}</PatientDashboardLayout>
}

