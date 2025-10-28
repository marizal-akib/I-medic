import { createClient } from '@supabase/supabase-js'

// Supabase configuration
// Use placeholder values during build if not configured
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

// Database type definitions
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          role: string | null
          created_at: string | null
        }
        Insert: {
          id: string
          email: string
          role?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          role?: string | null
          created_at?: string | null
        }
      }
      patients: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
          phone: string | null
          dob: string | null
          address: any | null
          onboarding_completed: boolean | null
        }
        Insert: {
          id: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          dob?: string | null
          address?: any | null
          onboarding_completed?: boolean | null
        }
        Update: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          dob?: string | null
          address?: any | null
          onboarding_completed?: boolean | null
        }
      }
      appointments: {
        Row: {
          id: string
          patient_id: string | null
          starts_at: string | null
          status: string | null
          notes: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          patient_id?: string | null
          starts_at?: string | null
          status?: string | null
          notes?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          patient_id?: string | null
          starts_at?: string | null
          status?: string | null
          notes?: string | null
          created_at?: string | null
        }
      }
      documents: {
        Row: {
          id: string
          patient_id: string | null
          file_path: string | null
          kind: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          patient_id?: string | null
          file_path?: string | null
          kind?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          patient_id?: string | null
          file_path?: string | null
          kind?: string | null
          created_at?: string | null
        }
      }
    }
  }
}

// Create Supabase client without generic to avoid type conflicts
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
})

// Helper function to check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && 
    process.env.NEXT_PUBLIC_SUPABASE_URL !== '' && 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== '' &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co'
  )
}
