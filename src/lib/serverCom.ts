/**
 * serverCom.ts - Centralized Server Communication Layer
 * All server interactions, API calls, and data fetching should go through this file
 */

import { supabase } from './supabase'

// ============================================
// AUTHENTICATION SERVICES
// ============================================

export const authService = {
  /**
   * Sign up a new user
   */
  signUp: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/dashboard`
      }
    })
    return { data, error }
  },

  /**
   * Sign in existing user
   */
  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  },

  /**
   * Sign out current user
   */
  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  /**
   * Get current session
   */
  getSession: async () => {
    const { data, error } = await supabase.auth.getSession()
    return { data, error }
  },

  /**
   * Get current user
   */
  getUser: async () => {
    const { data, error } = await supabase.auth.getUser()
    return { data, error }
  },
}

// ============================================
// PATIENT SERVICES
// ============================================

export interface PatientData {
  id: string
  first_name: string | null
  last_name: string | null
  phone: string | null
  dob: string | null
  address: any | null
  onboarding_completed: boolean | null
}

export const patientService = {
  /**
   * Fetch patient data by user ID
   */
  getPatient: async (userId: string): Promise<{ data: PatientData | null; error: any }> => {
    try {
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .eq('id', userId)
        .single()

      return { data, error }
    } catch (error) {
      console.error('Error fetching patient:', error)
      return { data: null, error }
    }
  },

  /**
   * Update patient profile
   */
  updatePatient: async (userId: string, updates: Partial<PatientData>) => {
    const { data, error } = await supabase
      .from('patients')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()

    return { data, error }
  },

  /**
   * Complete patient onboarding
   */
  completeOnboarding: async (userId: string) => {
    const { data, error } = await supabase
      .from('patients')
      .update({ onboarding_completed: true })
      .eq('id', userId)

    return { data, error }
  },

  /**
   * Calculate profile completeness percentage
   */
  calculateCompleteness: (patient: PatientData | null): number => {
    if (!patient) return 0
    let complete = 0
    const fields: (keyof PatientData)[] = ['first_name', 'last_name', 'phone', 'dob']
    fields.forEach(field => {
      if (patient[field]) complete++
    })
    return (complete / fields.length) * 100
  },
}

// ============================================
// APPOINTMENT SERVICES
// ============================================

export interface AppointmentData {
  id: string
  patient_id: string | null
  starts_at: string | null
  status: string | null
  notes: string | null
  created_at: string | null
}

export const appointmentService = {
  /**
   * Fetch all appointments for a patient
   */
  getAppointments: async (patientId: string) => {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('patient_id', patientId)
      .order('starts_at', { ascending: true })

    return { data, error }
  },

  /**
   * Create new appointment
   */
  createAppointment: async (appointment: Omit<AppointmentData, 'id' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('appointments')
      .insert(appointment)
      .select()
      .single()

    return { data, error }
  },

  /**
   * Update appointment
   */
  updateAppointment: async (appointmentId: string, updates: Partial<AppointmentData>) => {
    const { data, error } = await supabase
      .from('appointments')
      .update(updates)
      .eq('id', appointmentId)
      .select()
      .single()

    return { data, error }
  },

  /**
   * Cancel appointment
   */
  cancelAppointment: async (appointmentId: string) => {
    const { data, error } = await supabase
      .from('appointments')
      .update({ status: 'cancelled' })
      .eq('id', appointmentId)

    return { data, error }
  },
}

// ============================================
// DOCUMENT SERVICES
// ============================================

export interface DocumentData {
  id: string
  patient_id: string | null
  file_path: string | null
  kind: string | null
  created_at: string | null
}

export const documentService = {
  /**
   * Fetch all documents for a patient
   */
  getDocuments: async (patientId: string) => {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .eq('patient_id', patientId)
      .order('created_at', { ascending: false })

    return { data, error }
  },

  /**
   * Upload a new document
   */
  uploadDocument: async (
    patientId: string,
    file: File,
    kind: string
  ) => {
    // Upload file to storage
    const fileName = `${patientId}/${Date.now()}_${file.name}`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('patient-docs')
      .upload(fileName, file)

    if (uploadError) return { data: null, error: uploadError }

    // Create document record
    const { data, error } = await supabase
      .from('documents')
      .insert({
        patient_id: patientId,
        file_path: fileName,
        kind: kind,
      })
      .select()
      .single()

    return { data, error }
  },

  /**
   * Get signed URL for document download
   */
  getDocumentUrl: async (filePath: string) => {
    const { data, error } = await supabase.storage
      .from('patient-docs')
      .createSignedUrl(filePath, 3600) // 1 hour expiry

    return { data, error }
  },

  /**
   * Delete a document
   */
  deleteDocument: async (documentId: string, filePath: string) => {
    // Delete from storage
    await supabase.storage
      .from('patient-docs')
      .remove([filePath])

    // Delete record from database
    const { error } = await supabase
      .from('documents')
      .delete()
      .eq('id', documentId)

    return { error }
  },
}

// ============================================
// BOOKING SERVICES
// ============================================

export interface BookingData {
  service_type: string
  patient_name: string
  patient_phone: string
  patient_email: string
  preferred_date: string
  preferred_time: string
  address: string
  notes?: string
}

export const bookingService = {
  /**
   * Submit booking request
   * This would typically send to a backend API or create a record
   */
  submitBooking: async (booking: BookingData) => {
    // For now, this creates an appointment record
    // You can extend this to send emails, SMS, etc.
    const { data, error } = await supabase
      .from('appointments')
      .insert({
        starts_at: `${booking.preferred_date}T${booking.preferred_time}`,
        status: 'pending',
        notes: `Service: ${booking.service_type}\nPhone: ${booking.patient_phone}\nEmail: ${booking.patient_email}\nAddress: ${booking.address}\nNotes: ${booking.notes || 'N/A'}`,
      })
      .select()
      .single()

    return { data, error }
  },

  /**
   * Send OTP for verification
   * This is a placeholder - implement with your SMS gateway
   */
  sendOTP: async (phone: string) => {
    // TODO: Integrate with SMS gateway (e.g., Twilio, SMS Gateway BD)
    console.log('Sending OTP to:', phone)
    // Simulate OTP sending
    return { success: true, otp: '123456' } // Remove in production
  },

  /**
   * Verify OTP
   * This is a placeholder - implement with your verification logic
   */
  verifyOTP: async (phone: string, otp: string) => {
    // TODO: Implement actual OTP verification
    console.log('Verifying OTP for:', phone, otp)
    return { success: true }
  },
}

// ============================================
// CONTACT SERVICES
// ============================================

export interface ContactFormData {
  first_name: string
  last_name: string
  email: string
  phone: string
  subject: string
  message: string
}

export const contactService = {
  /**
   * Submit contact form
   */
  submitContactForm: async (formData: ContactFormData) => {
    // You can extend this to:
    // 1. Save to database
    // 2. Send email notification
    // 3. Create support ticket
    // 4. Send auto-reply SMS
    
    // For now, log to console (replace with actual implementation)
    console.log('Contact form submitted:', formData)
    
    // Example: Save to a contacts table (create this table in Supabase)
    // const { data, error } = await supabase
    //   .from('contacts')
    //   .insert(formData)
    
    return { success: true }
  },

  /**
   * Send WhatsApp message
   */
  sendWhatsAppMessage: async (phone: string, message: string) => {
    // TODO: Integrate with WhatsApp Cloud API
    console.log('WhatsApp message to:', phone, message)
    return { success: true }
  },
}

// ============================================
// CAREER SERVICES
// ============================================

export interface JobApplicationData {
  position: string
  first_name: string
  last_name: string
  email: string
  phone: string
  resume_file?: File
  cover_letter?: string
}

export const careerService = {
  /**
   * Submit job application
   */
  submitApplication: async (application: JobApplicationData) => {
    // TODO: Implement job application submission
    // 1. Upload resume to storage
    // 2. Save application to database
    // 3. Send confirmation email
    
    console.log('Job application submitted:', application)
    return { success: true }
  },

  /**
   * Get available positions
   */
  getOpenPositions: async () => {
    // TODO: Fetch from database
    // For now, return static data
    return {
      data: [
        {
          id: '1',
          title: 'Registered Nurse',
          type: 'Full-time',
          location: 'Dhaka',
          salary: '৳35,000 - ৳50,000',
        }
      ],
      error: null
    }
  },
}

// ============================================
// MEDICAL NOTES SERVICES
// ============================================

export interface MedicalNoteData {
  id?: string
  patient_id: string
  content: string
  created_at?: string
  updated_at?: string
}

export const notesService = {
  /**
   * Get all medical notes for a patient
   */
  getNotes: async (patientId: string) => {
    // TODO: Create medical_notes table in Supabase
    // const { data, error } = await supabase
    //   .from('medical_notes')
    //   .select('*')
    //   .eq('patient_id', patientId)
    //   .order('updated_at', { ascending: false })
    
    return { data: [], error: null }
  },

  /**
   * Save or update medical note
   */
  saveNote: async (note: MedicalNoteData) => {
    if (note.id) {
      // Update existing note
      // const { data, error } = await supabase
      //   .from('medical_notes')
      //   .update({ content: note.content, updated_at: new Date().toISOString() })
      //   .eq('id', note.id)
      //   .select()
      //   .single()
    } else {
      // Create new note
      // const { data, error } = await supabase
      //   .from('medical_notes')
      //   .insert({
      //     patient_id: note.patient_id,
      //     content: note.content,
      //   })
      //   .select()
      //   .single()
    }
    
    return { data: note, error: null }
  },

  /**
   * Delete medical note
   */
  deleteNote: async (noteId: string) => {
    // const { error } = await supabase
    //   .from('medical_notes')
    //   .delete()
    //   .eq('id', noteId)
    
    return { error: null }
  },
}

// ============================================
// ANALYTICS SERVICES
// ============================================

export const analyticsService = {
  /**
   * Track page view
   */
  trackPageView: (pagePath: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pagePath,
      })
    }
  },

  /**
   * Track event
   */
  trackEvent: (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, eventParams)
    }
  },

  /**
   * Track booking conversion
   */
  trackBooking: (serviceType: string, value?: number) => {
    analyticsService.trackEvent('booking_submitted', {
      service_type: serviceType,
      value: value,
      currency: 'BDT',
    })
  },

  /**
   * Track form submission
   */
  trackFormSubmission: (formName: string) => {
    analyticsService.trackEvent('form_submission', {
      form_name: formName,
    })
  },
}

// ============================================
// NOTIFICATION SERVICES
// ============================================

export const notificationService = {
  /**
   * Send email notification
   */
  sendEmail: async (to: string, subject: string, body: string) => {
    // TODO: Integrate with email service (SendGrid, AWS SES, etc.)
    console.log('Sending email to:', to, subject)
    return { success: true }
  },

  /**
   * Send SMS notification
   */
  sendSMS: async (phone: string, message: string) => {
    // TODO: Integrate with SMS gateway
    console.log('Sending SMS to:', phone, message)
    return { success: true }
  },

  /**
   * Send push notification
   */
  sendPush: async (userId: string, title: string, body: string) => {
    // TODO: Integrate with push notification service
    console.log('Sending push to:', userId, title, body)
    return { success: true }
  },
}

// ============================================
// PROFILE SERVICES
// ============================================

export interface ProfileData {
  id: string
  email: string
  role: string | null
  created_at: string | null
}

export const profileService = {
  /**
   * Get user profile
   */
  getProfile: async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    return { data, error }
  },

  /**
   * Update user profile
   */
  updateProfile: async (userId: string, updates: Partial<ProfileData>) => {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()

    return { data, error }
  },
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

export const utils = {
  /**
   * Format date for display
   */
  formatDate: (dateString: string | null) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  },

  /**
   * Format phone number
   */
  formatPhone: (phone: string | null) => {
    if (!phone) return 'N/A'
    // Bangladesh phone number format
    return phone.replace(/(\d{3})(\d{4})(\d{4})/, '+880 $1 $2 $3')
  },

  /**
   * Validate Bangladesh phone number
   */
  isValidBangladeshPhone: (phone: string) => {
    const regex = /^(\+?880|0)?1[3-9]\d{8}$/
    return regex.test(phone.replace(/\s/g, ''))
  },
}

// Export all services
export default {
  auth: authService,
  patient: patientService,
  appointment: appointmentService,
  document: documentService,
  booking: bookingService,
  contact: contactService,
  career: careerService,
  notes: notesService,
  analytics: analyticsService,
  notification: notificationService,
  profile: profileService,
  utils,
}
