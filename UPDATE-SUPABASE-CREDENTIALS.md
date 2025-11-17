# How to Update Your Supabase Credentials

## If You Created a New Project

If you created a new Supabase project, follow these steps:

### Step 1: Get Your New Credentials

1. Open your Supabase dashboard: https://supabase.com/dashboard
2. Select your project
3. Go to **Settings** → **API** (gear icon in sidebar)
4. Copy these two values:
   - **Project URL** (e.g., `https://xxxxxxxx.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

### Step 2: Update `.env.local`

Open the `.env.local` file in your project root and update these lines:

```env
NEXT_PUBLIC_SUPABASE_URL="https://your-new-project-id.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.YOUR_NEW_KEY"
```

### Step 3: Set Up Database Tables

1. Go to your Supabase dashboard
2. Click **SQL Editor** in the left sidebar
3. Click **"New Query"**
4. Open the `supabase-setup.sql` file from your project
5. Copy ALL the SQL code
6. Paste it into the Supabase SQL Editor
7. Click **"Run"** (or press Ctrl/Cmd + Enter)
8. You should see "Success. No rows returned"

### Step 4: Configure Authentication

1. In Supabase dashboard, go to **Authentication** → **Providers**
2. Make sure **Email** is enabled (toggle ON)
3. Click on **Email** to expand settings
4. For development/testing:
   - Turn **OFF** "Confirm email"
   - Turn **ON** "Allow unverified email sign ins"
5. Click **Save**

### Step 5: Restart Your Dev Server

Stop your dev server (Ctrl+C) and restart:

```bash
npm run dev
```

### Step 6: Test Registration

1. Go to http://localhost:3000/register
2. Try creating a new account
3. You should be able to register successfully!

---

## Quick Checklist

Before testing, make sure:

- [ ] New Supabase project is created and **active** (green status)
- [ ] `.env.local` has the correct new URL and key
- [ ] Database tables are created (ran `supabase-setup.sql`)
- [ ] Email auth is enabled in Supabase
- [ ] Email confirmation is OFF for testing
- [ ] Dev server was restarted after updating `.env.local`

---

## Troubleshooting

### "Project is paused"
- Click "Resume Project" in dashboard
- Wait 30-60 seconds
- Refresh the page

### "Failed to fetch" still appearing
- Double-check `.env.local` has correct credentials
- No extra spaces or quotes issues
- Restart dev server

### "Email confirmations required"
- Go to Authentication → Providers → Email
- Turn OFF "Confirm email"
- Save changes

### Database errors
- Make sure you ran the ENTIRE `supabase-setup.sql` file
- Check SQL Editor for any error messages
- Tables should appear in Table Editor

---

## Need Help?

If you're still stuck:
1. Check the Supabase project status (should be green)
2. Verify your `.env.local` matches your dashboard credentials
3. Look at browser console for specific error messages
4. Check that database tables exist in Table Editor


