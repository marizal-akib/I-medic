# 🚀 New Supabase Project Setup Guide

Since you have no existing projects, follow this complete guide to set up everything from scratch.

## Part 1: Create Supabase Project (5 minutes)

### 1️⃣ Create New Project

1. Open: https://supabase.com/dashboard
2. Click **"New Project"** (green button)
3. Fill in:
   - **Name:** `i-medic-app`
   - **Database Password:** Create a strong password
     - ⚠️ **IMPORTANT:** Save this password somewhere safe!
     - You'll need it if you ever need direct database access
   - **Region:** `Southeast Asia (Singapore)` - closest to you
   - **Pricing Plan:** `Free` (good for 500MB database, 2GB file storage)
4. Click **"Create new project"**
5. ⏱️ Wait 2-3 minutes while it sets up

### 2️⃣ Get Your Credentials

Once the project is ready (green checkmark):

1. Click **⚙️ Settings** in the left sidebar (gear icon at bottom)
2. Click **"API"** 
3. You'll see:

```
Project URL
https://xxxxxxxx.supabase.co
[Copy button]

Project API keys
anon public
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...
[Copy button]
```

4. Click the copy button for **Project URL** - save it
5. Click the copy button for **anon public** key - save it

---

## Part 2: Update Your Project (2 minutes)

### 3️⃣ Update `.env.local` File

Open the file `.env.local` in your project folder and replace these two lines:

**BEFORE:**
```env
NEXT_PUBLIC_SUPABASE_URL="https://vfmhmvksbpbnyhmryghf.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.OLD_KEY..."
```

**AFTER** (use YOUR credentials from Step 2):
```env
NEXT_PUBLIC_SUPABASE_URL="https://YOUR_PROJECT_ID.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.YOUR_NEW_KEY..."
```

💡 **Tip:** Make sure there are no extra spaces before or after!

### 4️⃣ Verify Connection

Run this command to test if it works:

```bash
node check-supabase.js
```

✅ You should see: **"Supabase is reachable and responding!"**

---

## Part 3: Set Up Database (5 minutes)

### 5️⃣ Create Database Tables

1. Go back to your Supabase dashboard
2. Click **🗄️ SQL Editor** in the left sidebar
3. Click **"New Query"**
4. Open the `supabase-setup.sql` file in your project folder
5. **Copy ALL the contents** (Ctrl+A, Ctrl+C)
6. Paste into the Supabase SQL Editor
7. Click **"Run"** button (or press Ctrl+Enter)
8. You should see: ✅ **"Success. No rows returned"**

### 6️⃣ Verify Tables Were Created

1. Click **🗂️ Table Editor** in the left sidebar
2. You should see these tables:
   - ✅ `profiles`
   - ✅ `patients`
   - ✅ `appointments`
   - ✅ `documents`

If you see these, great! If not, go back to Step 5.

---

## Part 4: Configure Authentication (3 minutes)

### 7️⃣ Enable Email Authentication

1. Click **🔐 Authentication** in the left sidebar
2. Click **"Providers"** 
3. Find **"Email"** in the list
4. Make sure the toggle is **ON** (enabled)

### 8️⃣ Configure Email Settings (Important for Testing!)

1. Click on **"Email"** to expand it
2. Scroll down to **"Email Settings"**
3. Find **"Confirm email"** toggle
4. Turn it **OFF** for development/testing
   - ⚠️ This allows you to register without confirming email
   - ✅ Turn this back ON when you go to production!
5. Click **"Save"** at the bottom

### 9️⃣ (Optional) Create Storage Bucket

If you plan to upload documents:

1. Click **📦 Storage** in the left sidebar
2. Click **"Create a new bucket"**
3. Name: `patient-docs`
4. Make it **Private** (uncheck "Public bucket")
5. Click **"Create bucket"**

Then run this SQL to add storage policies:

```sql
-- Go back to SQL Editor and run this:

CREATE POLICY "Users can view own documents"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'patient-docs' AND 
    auth.uid()::text = (string_to_array(name, '/'))[1]
  );

CREATE POLICY "Users can upload own documents"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'patient-docs' AND 
    auth.uid()::text = (string_to_array(name, '/'))[1]
  );

CREATE POLICY "Users can delete own documents"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'patient-docs' AND 
    auth.uid()::text = (string_to_array(name, '/'))[1]
  );
```

---

## Part 5: Test Everything (2 minutes)

### 🔟 Final Testing

1. **Stop your dev server** (Ctrl+C in terminal)

2. **Restart it:**
   ```bash
   npm run dev
   ```

3. **Verify connection again:**
   ```bash
   node check-supabase.js
   ```
   Should show: ✅ Success!

4. **Test registration:**
   - Open: http://localhost:3000/register
   - You should NOT see the orange warning banner anymore
   - Try creating an account with:
     - Email: `test@example.com`
     - Password: `password123` (min 6 characters)
     - Confirm password: `password123`
   - Click "Create Account"

5. **Success indicators:**
   - ✅ No errors!
   - ✅ Redirected to `/dashboard`
   - ✅ You're logged in!

---

## ✅ Complete Checklist

Before testing, make sure you've done all of these:

- [ ] Created new Supabase project
- [ ] Project status is **green** (active)
- [ ] Copied Project URL and Anon Key
- [ ] Updated `.env.local` with new credentials
- [ ] Ran `check-supabase.js` - shows success
- [ ] Ran `supabase-setup.sql` in SQL Editor
- [ ] Verified 4 tables exist in Table Editor
- [ ] Enabled Email authentication
- [ ] Disabled "Confirm email" for testing
- [ ] Restarted dev server
- [ ] Tested registration at `/register`

---

## 🐛 Troubleshooting

### Problem: "Failed to fetch" still appearing
**Solution:**
- Double-check `.env.local` has correct URL and key
- No extra spaces or quote marks
- Restart dev server completely

### Problem: "Email confirmations required"
**Solution:**
- Authentication → Providers → Email
- Turn OFF "Confirm email"
- Save changes

### Problem: Database errors
**Solution:**
- Make sure you ran the ENTIRE `supabase-setup.sql` file
- Check SQL Editor for error messages
- Verify tables exist in Table Editor

### Problem: "User already registered" but can't login
**Solution:**
- Go to Authentication → Users in Supabase
- You can see/delete test users there
- Try a different email

### Problem: Orange warning still showing
**Solution:**
- Make sure you saved `.env.local`
- Restart dev server (important!)
- Hard refresh browser (Ctrl+Shift+R)

---

## 🎉 You're Done!

Once registration works, you can:
- ✅ Create test accounts
- ✅ Login and logout
- ✅ Access the dashboard
- ✅ Complete onboarding
- ✅ Use the medical notes editor

---

## 📚 Next Steps

For production deployment:
- Enable email confirmations
- Set up custom email templates
- Configure rate limiting
- Add monitoring
- See `SETUP-BACKEND.md` for full production checklist

---

## 🆘 Still Having Issues?

If you're stuck:
1. Take a screenshot of the error
2. Check browser console (F12)
3. Check Supabase project status (should be green)
4. Run: `node check-supabase.js`
5. Verify all checklist items above


