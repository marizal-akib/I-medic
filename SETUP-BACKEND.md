# I-Medic Backend Setup Guide

This guide will help you set up the authentication and database backend for the I-Medic website using Supabase.

## Prerequisites

- A Supabase account (free tier available at https://supabase.com)
- Node.js 18+ installed
- Your I-Medic website running locally

## Step 1: Create Supabase Project

1. Go to https://supabase.com and sign in or create an account
2. Click "New Project"
3. Fill in the details:
   - **Project Name**: i-medic-production (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest to Bangladesh (Singapore recommended)
   - **Pricing Plan**: Start with Free tier

## Step 2: Get Your API Credentials

1. Once your project is created, go to **Project Settings** > **API**
2. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Anon/Public Key** (long string starting with `eyJ...`)

## Step 3: Configure Environment Variables

1. Create a `.env.local` file in your project root:

```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...your-anon-key
```

## Step 4: Create Database Tables

Go to **SQL Editor** in your Supabase dashboard and run this SQL:

```sql
-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'patient',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create patients table
CREATE TABLE public.patients (
  id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  dob DATE,
  address JSONB,
  onboarding_completed BOOLEAN DEFAULT false
);

-- Create appointments table
CREATE TABLE public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES public.patients(id) ON DELETE CASCADE,
  starts_at TIMESTAMPTZ,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create documents table
CREATE TABLE public.documents (
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
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for patients
CREATE POLICY "Patients can view own data"
  ON public.patients FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Patients can update own data"
  ON public.patients FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Patients can insert own data"
  ON public.patients FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for appointments
CREATE POLICY "Patients can view own appointments"
  ON public.appointments FOR SELECT
  USING (auth.uid() IN (SELECT id FROM public.patients WHERE id = patient_id));

CREATE POLICY "Patients can insert own appointments"
  ON public.appointments FOR INSERT
  WITH CHECK (auth.uid() IN (SELECT id FROM public.patients WHERE id = patient_id));

CREATE POLICY "Patients can update own appointments"
  ON public.appointments FOR UPDATE
  USING (auth.uid() IN (SELECT id FROM public.patients WHERE id = patient_id));

-- RLS Policies for documents
CREATE POLICY "Patients can view own documents"
  ON public.documents FOR SELECT
  USING (auth.uid() IN (SELECT id FROM public.patients WHERE id = patient_id));

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

-- Trigger to auto-create profile and patient on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
```

## Step 5: Create Storage Bucket

1. Go to **Storage** in your Supabase dashboard
2. Click **Create a new bucket**
3. Name it: `patient-docs`
4. **Make it private** (uncheck "Public bucket")
5. Click **Create bucket**

Now add storage policies:

```sql
-- Storage policies for patient documents
CREATE POLICY "Patients can view own documents"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'patient-docs' AND 
    auth.uid()::text = (string_to_array(name, '/'))[1]
  );

CREATE POLICY "Patients can upload own documents"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'patient-docs' AND 
    auth.uid()::text = (string_to_array(name, '/'))[1]
  );

CREATE POLICY "Patients can delete own documents"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'patient-docs' AND 
    auth.uid()::text = (string_to_array(name, '/'))[1]
  );
```

## Step 6: Configure Authentication

1. Go to **Authentication** > **Settings**
2. Under **Auth Providers**, enable **Email**
3. Scroll to **Email Auth**:
   - **Enable email confirmations**: Toggle OFF for development (toggle ON for production)
   - **Enable auto-confirm**: Toggle ON for development (toggle OFF for production)

## Step 7: Test the Integration

1. Restart your Next.js development server:
```bash
npm run dev
```

2. Visit http://localhost:3000/register
3. Create a test account
4. You should be redirected to the dashboard
5. Complete the onboarding process
6. Test the medical notes editor

## Step 8: Verify Database

1. Go to **Table Editor** in Supabase
2. Check that you have these tables:
   - `profiles`
   - `patients`
   - `appointments`
   - `documents`
3. Click on `patients` table
4. You should see your test patient record

## Troubleshooting

### "Supabase URL not configured" error
- Make sure `.env.local` exists and has the correct values
- Restart the Next.js dev server after adding environment variables

### User created but no profile/patient record
- Check that the trigger function `handle_new_user()` exists
- Check the trigger `on_auth_user_created` is enabled
- Go to **Database** > **Functions** to verify

### RLS blocking queries
- Verify RLS policies are created correctly
- Check that you're logged in when testing
- Use Supabase's RLS debugger in the dashboard

### Can't upload documents
- Verify the `patient-docs` storage bucket exists
- Check storage policies are applied
- Verify bucket is set to **Private**

## Production Checklist

Before going live:

- [ ] Enable email confirmations in Supabase Auth settings
- [ ] Disable auto-confirm in production
- [ ] Set up custom email templates (optional)
- [ ] Configure rate limiting for auth endpoints
- [ ] Add database indexes for better performance
- [ ] Set up Supabase backups
- [ ] Configure CORS settings if needed
- [ ] Add monitoring and alerts

## Security Notes

1. **Never commit `.env.local`** - it's already in `.gitignore`
2. **Use environment variables for all secrets**
3. **Keep your Supabase Service Key secret** - never expose it in client code
4. **The Anon Key is safe to use in client code** - it's protected by RLS policies
5. **Test RLS policies thoroughly** before production

## Additional Features

### Add Email Notifications

Use Supabase Edge Functions or integrate with:
- SendGrid
- AWS SES
- Resend.com

### Add SMS Notifications

Integrate with Bangladesh SMS gateways:
- SSL Wireless
- Banglalink SMS API
- Grameenphone Bulk SMS

### Add WhatsApp Integration

Use WhatsApp Business API:
- Meta Business Suite
- Twilio WhatsApp API
- 360dialog

## Support

For Supabase-related issues:
- Documentation: https://supabase.com/docs
- Community: https://github.com/supabase/supabase/discussions

For I-Medic specific issues:
- Contact your development team
- Check the serverCom.ts file for all server interaction functions
