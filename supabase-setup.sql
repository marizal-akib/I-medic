-- I-Medic Database Schema Setup
-- Run this in your Supabase SQL Editor: https://vfmhmvksbpbnyhmryghf.supabase.co

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'patient',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create patients table
CREATE TABLE IF NOT EXISTS public.patients (
  id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  dob DATE,
  address JSONB,
  onboarding_completed BOOLEAN DEFAULT false
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES public.patients(id) ON DELETE CASCADE,
  starts_at TIMESTAMPTZ,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create documents table
CREATE TABLE IF NOT EXISTS public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES public.patients(id) ON DELETE CASCADE,
  file_path TEXT,
  kind TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for patients
DROP POLICY IF EXISTS "Patients can view own data" ON public.patients;
CREATE POLICY "Patients can view own data"
  ON public.patients FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Patients can update own data" ON public.patients;
CREATE POLICY "Patients can update own data"
  ON public.patients FOR UPDATE
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Patients can insert own data" ON public.patients;
CREATE POLICY "Patients can insert own data"
  ON public.patients FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for appointments
DROP POLICY IF EXISTS "Patients can view own appointments" ON public.appointments;
CREATE POLICY "Patients can view own appointments"
  ON public.appointments FOR SELECT
  USING (auth.uid() IN (SELECT id FROM public.patients WHERE id = patient_id));

DROP POLICY IF EXISTS "Patients can insert own appointments" ON public.appointments;
CREATE POLICY "Patients can insert own appointments"
  ON public.appointments FOR INSERT
  WITH CHECK (auth.uid() IN (SELECT id FROM public.patients WHERE id = patient_id));

DROP POLICY IF EXISTS "Patients can update own appointments" ON public.appointments;
CREATE POLICY "Patients can update own appointments"
  ON public.appointments FOR UPDATE
  USING (auth.uid() IN (SELECT id FROM public.patients WHERE id = patient_id));

-- RLS Policies for documents
DROP POLICY IF EXISTS "Patients can view own documents" ON public.documents;
CREATE POLICY "Patients can view own documents"
  ON public.documents FOR SELECT
  USING (auth.uid() IN (SELECT id FROM public.patients WHERE id = patient_id));

DROP POLICY IF EXISTS "Patients can insert own documents" ON public.documents;
CREATE POLICY "Patients can insert own documents"
  ON public.documents FOR INSERT
  WITH CHECK (auth.uid() IN (SELECT id FROM public.patients WHERE id = patient_id));

-- Create trigger function to auto-create profile and patient on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Create profile
  INSERT INTO public.profiles (id, email, role)
  VALUES (NEW.id, NEW.email, 'patient');
  
  -- Create patient record
  INSERT INTO public.patients (id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$;

-- Drop existing trigger if exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Trigger to auto-create profile and patient on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'I-Medic database schema created successfully!';
  RAISE NOTICE 'Tables created: profiles, patients, appointments, documents';
  RAISE NOTICE 'RLS policies enabled and configured';
  RAISE NOTICE 'Auto-signup trigger configured';
  RAISE NOTICE '';
  RAISE NOTICE 'Next steps:';
  RAISE NOTICE '1. Go to Authentication > Settings and enable Email provider';
  RAISE NOTICE '2. Enable auto-confirm for development';
  RAISE NOTICE '3. Test user registration at http://localhost:3000/register';
END $$;

