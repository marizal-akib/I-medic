# Quick Start Guide - Fix "Failed to fetch" Error

## Problem
You're seeing a "Failed to fetch" error when trying to register or login. This happens because Supabase is not configured yet.

## Solution - 3 Simple Steps

### Step 1: Create `.env.local` file

In your project root, create a file named `.env.local`:

```bash
# Copy the example file
cp .env.example .env.local
```

### Step 2: Get Your Supabase Credentials

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create a free account
3. Create a new project (or use an existing one)
4. Go to **Project Settings** → **API**
5. Copy these two values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **Anon/Public Key** (starts with `eyJ...`)

### Step 3: Add Credentials to `.env.local`

Edit `.env.local` and paste your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 4: Restart Your Dev Server

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

That's it! The error should be gone now.

---

## Need to Set Up Database Tables?

If you've just created a new Supabase project, you'll also need to set up the database tables. See **[SETUP-BACKEND.md](./SETUP-BACKEND.md)** for complete instructions.

### Quick Database Setup

1. Open your Supabase dashboard
2. Go to **SQL Editor**
3. Run the SQL file: `supabase-setup.sql` (copy and paste the contents)
4. This creates all necessary tables and triggers

---

## Troubleshooting

### Still seeing the error after adding credentials?

1. **Check your `.env.local` file**
   - Make sure there are no extra spaces
   - Ensure the file is in the project root (not in a subfolder)
   - Variable names must be EXACTLY: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. **Restart your dev server**
   - Stop it completely (Ctrl+C)
   - Start again: `npm run dev`

3. **Check your Supabase project is active**
   - Go to your Supabase dashboard
   - Make sure the project is running (not paused)

### Different error message?

- **"Invalid login credentials"** - Wrong email/password
- **"This email is already registered"** - Try logging in instead
- **Network errors** - Check your internet connection

---

## Security Notes

- ✅ `.env.local` is already in `.gitignore` - it won't be committed
- ✅ The Anon Key is safe to use in your frontend code
- ⚠️ Never commit or share your `.env.local` file
- ⚠️ Never use the Service Key (service_role) in frontend code

---

## What's Next?

Once authentication is working:

1. Register a test account
2. Complete the onboarding flow
3. Test the dashboard features
4. Try the medical notes editor

For production deployment, see **[SETUP-BACKEND.md](./SETUP-BACKEND.md)** for additional configuration steps.


