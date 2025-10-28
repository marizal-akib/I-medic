# serverCom.ts - Server Communication Layer Guide

## Overview

The `serverCom.ts` file is the centralized hub for **all server interactions** in the I-Medic application. This architecture pattern ensures:

- **Single Source of Truth**: All API calls go through one file
- **Easy Maintenance**: Update endpoints in one place
- **Type Safety**: Consistent TypeScript interfaces
- **Reusability**: Import and use across any component
- **Testability**: Easy to mock for testing

## File Location

```
src/lib/serverCom.ts
```

## Architecture

```
┌─────────────────────┐
│   React Components  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   serverCom.ts      │  ← All server calls go through here
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Supabase Client    │
│  External APIs      │
│  Third-party Services│
└─────────────────────┘
```

## Services Structure

### 1. Authentication Service (`authService`)

Handles all authentication operations:

```typescript
import { authService } from '@/lib/serverCom'

// Sign up
const { data, error } = await authService.signUp(email, password)

// Sign in
const { data, error } = await authService.signIn(email, password)

// Sign out
await authService.signOut()

// Get session
const { data } = await authService.getSession()
```

### 2. Patient Service (`patientService`)

Manages patient data and profiles:

```typescript
import { patientService } from '@/lib/serverCom'

// Get patient data
const { data, error } = await patientService.getPatient(userId)

// Update patient
await patientService.updatePatient(userId, {
  first_name: 'John',
  last_name: 'Doe'
})

// Complete onboarding
await patientService.completeOnboarding(userId)

// Calculate profile completeness
const completeness = patientService.calculateCompleteness(patientData)
```

### 3. Appointment Service (`appointmentService`)

Handles appointment scheduling and management:

```typescript
import { appointmentService } from '@/lib/serverCom'

// Get all appointments
const { data } = await appointmentService.getAppointments(patientId)

// Create appointment
const { data, error } = await appointmentService.createAppointment({
  patient_id: patientId,
  starts_at: '2025-11-01T10:00:00',
  status: 'scheduled'
})

// Cancel appointment
await appointmentService.cancelAppointment(appointmentId)
```

### 4. Document Service (`documentService`)

Manages patient documents and file uploads:

```typescript
import { documentService } from '@/lib/serverCom'

// Get all documents
const { data } = await documentService.getDocuments(patientId)

// Upload document
const { data, error } = await documentService.uploadDocument(
  patientId,
  fileObject,
  'prescription'
)

// Get download URL
const { data } = await documentService.getDocumentUrl(filePath)
```

### 5. Booking Service (`bookingService`)

Handles appointment booking flow:

```typescript
import { bookingService } from '@/lib/serverCom'

// Submit booking
await bookingService.submitBooking({
  service_type: 'consultation',
  patient_name: 'John Doe',
  patient_phone: '+8801234567890',
  preferred_date: '2025-11-01',
  preferred_time: '10:00',
  address: 'Dhaka, Bangladesh'
})

// Send OTP
const { success, otp } = await bookingService.sendOTP(phone)

// Verify OTP
const { success } = await bookingService.verifyOTP(phone, otp)
```

### 6. Contact Service (`contactService`)

Handles contact form submissions:

```typescript
import { contactService } from '@/lib/serverCom'

// Submit contact form
await contactService.submitContactForm({
  first_name: 'John',
  last_name: 'Doe',
  email: 'john@example.com',
  phone: '+8801234567890',
  subject: 'General Inquiry',
  message: 'I have a question...'
})

// Send WhatsApp message
await contactService.sendWhatsAppMessage(phone, message)
```

### 7. Career Service (`careerService`)

Manages job applications:

```typescript
import { careerService } from '@/lib/serverCom'

// Submit application
await careerService.submitApplication({
  position: 'Registered Nurse',
  first_name: 'Jane',
  last_name: 'Smith',
  email: 'jane@example.com',
  phone: '+8801234567890'
})

// Get open positions
const { data } = await careerService.getOpenPositions()
```

### 8. Notes Service (`notesService`)

Handles medical notes:

```typescript
import { notesService } from '@/lib/serverCom'

// Get notes
const { data } = await notesService.getNotes(patientId)

// Save note
await notesService.saveNote({
  patient_id: patientId,
  content: 'My medical notes...'
})
```

### 9. Analytics Service (`analyticsService`)

Tracks user events:

```typescript
import { analyticsService } from '@/lib/serverCom'

// Track page view
analyticsService.trackPageView('/about')

// Track custom event
analyticsService.trackEvent('button_clicked', { button_name: 'book_now' })

// Track booking
analyticsService.trackBooking('consultation', 500)
```

### 10. Notification Service (`notificationService`)

Sends notifications:

```typescript
import { notificationService } from '@/lib/serverCom'

// Send email
await notificationService.sendEmail(
  'patient@example.com',
  'Appointment Reminder',
  'Your appointment is tomorrow...'
)

// Send SMS
await notificationService.sendSMS(phone, 'Your appointment is confirmed')
```

## Usage Examples

### In a React Component

```typescript
'use client'

import { useState, useEffect } from 'react'
import { patientService, appointmentService } from '@/lib/serverCom'

export default function MyComponent() {
  const [patient, setPatient] = useState(null)
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    async function loadData() {
      // Fetch patient data
      const { data: patientData } = await patientService.getPatient(userId)
      setPatient(patientData)

      // Fetch appointments
      const { data: apptData } = await appointmentService.getAppointments(userId)
      setAppointments(apptData || [])
    }

    loadData()
  }, [])

  return (
    <div>
      <h1>Welcome, {patient?.first_name}</h1>
      <p>Appointments: {appointments.length}</p>
    </div>
  )
}
```

### Error Handling

Always handle errors from serverCom functions:

```typescript
try {
  const { data, error } = await patientService.getPatient(userId)
  
  if (error) {
    console.error('Error fetching patient:', error)
    // Show user-friendly error message
    alert('Failed to load patient data. Please try again.')
    return
  }

  // Use the data
  setPatient(data)
} catch (error) {
  console.error('Unexpected error:', error)
  alert('An unexpected error occurred')
}
```

## Adding New Services

To add a new service to serverCom.ts:

1. **Define the interface**:
```typescript
export interface MyNewData {
  id: string
  name: string
  // ... other fields
}
```

2. **Create the service object**:
```typescript
export const myNewService = {
  getData: async () => {
    const { data, error } = await supabase
      .from('my_table')
      .select('*')
    
    return { data, error }
  },
  
  createData: async (newData: Omit<MyNewData, 'id'>) => {
    const { data, error } = await supabase
      .from('my_table')
      .insert(newData)
      .select()
      .single()
    
    return { data, error }
  },
}
```

3. **Export it**:
```typescript
export default {
  // ... existing services
  myNew: myNewService,
}
```

4. **Use it in components**:
```typescript
import { myNewService } from '@/lib/serverCom'

const { data } = await myNewService.getData()
```

## Best Practices

### 1. Always Return Consistent Structure

```typescript
// ✅ Good: Consistent return pattern
return { data, error }

// ❌ Bad: Inconsistent returns
if (error) return error
return data
```

### 2. Handle Errors Gracefully

```typescript
// ✅ Good: Catch and log errors
try {
  const { data, error } = await supabase.from('table').select()
  if (error) throw error
  return { data, error: null }
} catch (error) {
  console.error('Service error:', error)
  return { data: null, error }
}
```

### 3. Use TypeScript Interfaces

```typescript
// ✅ Good: Typed parameters and returns
async getPatient(userId: string): Promise<{ data: PatientData | null; error: any }>

// ❌ Bad: No types
async getPatient(userId) { ... }
```

### 4. Keep Business Logic Here

```typescript
// ✅ Good: Business logic in serverCom
calculateCompleteness: (patient: PatientData | null): number => {
  if (!patient) return 0
  // ... calculation logic
  return percentage
}

// ❌ Bad: Business logic scattered in components
```

## Testing

Mock serverCom in your tests:

```typescript
jest.mock('@/lib/serverCom', () => ({
  patientService: {
    getPatient: jest.fn().mockResolvedValue({
      data: { first_name: 'Test', last_name: 'User' },
      error: null
    })
  }
}))
```

## Migration Guide

If you need to switch from Supabase to another backend:

1. Keep the same function signatures in serverCom.ts
2. Replace the implementation details
3. Your components won't need to change!

Example:
```typescript
// Before: Supabase
const { data, error } = await supabase.from('patients').select()

// After: REST API
const response = await fetch('/api/patients')
const data = await response.json()
return { data, error: response.ok ? null : data.error }
```

## Security Notes

- **Never expose sensitive keys** in serverCom.ts
- **All secrets go in environment variables**
- **Use the anon key for client-side calls** (protected by RLS)
- **Validate all inputs** before sending to server
- **Trust RLS policies** to protect data

## Performance Tips

1. **Batch requests** when possible
2. **Cache frequently accessed data**
3. **Use optimistic updates** for better UX
4. **Implement pagination** for large datasets
5. **Add loading states** in components

## Support

For questions about serverCom.ts:
- Check this guide
- Review the inline comments in the file
- Test each service function individually
- Check Supabase documentation for API details
