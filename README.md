# 🏥 I-Medic - Connected Care Platform

**Modern healthcare management system for Bangladesh** with patient portal, appointment booking, and medical record management.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (for backend)

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase credentials to .env.local

# Run development server
npm run dev
```

Visit **http://localhost:3000** to see your application.

---

## 📋 Project Overview

### Features
- ✅ **Marketing Website** - Complete public-facing site with services, programs, and pricing
- ✅ **Patient Portal** - Secure dashboard for registered patients
- ✅ **Authentication System** - Email/password login with Supabase
- ✅ **Medical Notes** - Rich text editor for health tracking
- ✅ **Appointment Booking** - Schedule and manage appointments
- ✅ **Onboarding Flow** - Guided profile completion for new patients
- ✅ **Responsive Design** - Works seamlessly on all devices

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Rich Text Editor**: Milkdown
- **Icons**: Lucide React

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Homepage
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── dashboard/         # Patient dashboard (protected)
│   ├── notes/             # Medical notes (protected)
│   ├── onboarding/        # Patient onboarding (protected)
│   ├── pricing/           # Pricing page
│   ├── services/          # Services page
│   ├── programs/          # Care programs
│   └── ...                # Other pages
│
├── components/
│   ├── auth/              # Authentication components
│   ├── layout/            # Header, footer, navbar
│   ├── sections/          # Homepage sections
│   └── ui/                # Reusable UI components
│
├── lib/
│   ├── serverCom.ts       # 🎯 Centralized server API layer
│   ├── supabase.ts        # Supabase client configuration
│   └── utils.ts           # Utility functions
│
├── hooks/
│   └── useAuth.tsx        # Authentication hook
│
└── data/
    └── service-categories.ts  # Service data
```

---

## 🔐 Authentication

The app uses **Supabase Authentication** for secure user management.

### Using Authentication in Components

```typescript
'use client'
import { useAuth } from '@/hooks/useAuth'

export default function MyComponent() {
  const { user, loading, signOut } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <div>Please login</div>

  return (
    <div>
      <p>Welcome {user.email}</p>
      <button onClick={signOut}>Logout</button>
    </div>
  )
}
```

### Protected Routes

```typescript
import { ProtectedRoute } from '@/components/auth/protected-route'

export default function SecurePage() {
  return (
    <ProtectedRoute>
      <div>Only logged-in users see this</div>
    </ProtectedRoute>
  )
}
```

---

## 🌐 Server Communication

All server interactions go through **`src/lib/serverCom.ts`** - a centralized API layer.

### Available Services

```typescript
import {
  authService,          // Authentication
  patientService,       // Patient data
  appointmentService,   // Appointments
  documentService,      // File management
  bookingService,       // Booking flow
  contactService,       // Contact forms
  notesService,         // Medical notes
  analyticsService,     // Analytics tracking
  notificationService   // Email/SMS/Push
} from '@/lib/serverCom'
```

### Example Usage

```typescript
// Fetch patient data
const { data, error } = await patientService.getPatient(userId)

// Create appointment
const appointment = await appointmentService.createAppointment({
  patientId: userId,
  date: '2024-01-15',
  time: '10:00',
  service: 'checkup'
})

// Track analytics event
analyticsService.trackEvent('button_clicked', { button: 'book_appointment' })
```

📖 **For detailed API documentation, see [SERVERCOM-GUIDE.md](./SERVERCOM-GUIDE.md)**

---

## 🗄️ Backend Setup

The application requires a Supabase backend for authentication, database, and storage.

### Quick Setup (5 minutes)

1. **Create Supabase Project**
   - Go to https://supabase.com
   - Click "New Project"
   - Choose a region (Singapore recommended)

2. **Get API Credentials**
   - Go to Project Settings → API
   - Copy "Project URL" and "anon public" key

3. **Configure Environment**
   ```bash
   # .env.local
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

4. **Run Database Migrations**
   - Open Supabase SQL Editor
   - Copy content from `supabase-setup.sql`
   - Execute the script

5. **Enable Email Authentication**
   - Go to Authentication → Providers
   - Enable Email provider
   - For development: Enable auto-confirm

📖 **For detailed backend setup, see [SETUP-BACKEND.md](./SETUP-BACKEND.md)**

---

## 🎨 Design System

### Colors
- **Primary**: `#00BFA5` (Teal) - Healthcare trust
- **Accent**: `#6C63FF` (Violet) - Modern tech
- **Secondary**: `#006A4E` (Bangladesh Green)
- **Background**: `#FAFAFA` (Light gray)

### Typography
- **Headings**: Poppins (bold, display)
- **Body**: Inter (clean, readable)

### Components
All UI components are in `src/components/ui/`:
- `button.tsx` - Customizable button component
- `card.tsx` - Card container
- `milkdown-editor.tsx` - Rich text editor

---

## 📄 Key Pages

### Public Pages
- `/` - Homepage with all sections
- `/services` - Healthcare services
- `/programs` - Care programs
- `/pricing` - Pricing plans
- `/how-it-works` - Process explanation
- `/contact` - Contact form
- `/careers` - Job listings
- `/terms` - Terms of service
- `/privacy` - Privacy policy

### Authentication Pages
- `/login` - Patient login
- `/register` - New patient registration

### Protected Pages (Require Login)
- `/dashboard` - Patient overview
- `/onboarding` - Profile completion
- `/notes` - Medical notes editor
- `/health-updates` - Health updates

---

## 🧪 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

### Environment Variables

Create `.env.local` with:

```env
# Supabase Configuration (Required)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789

# Optional: Notifications
NEXT_PUBLIC_WHATSAPP_NUMBER=+8801234567890
```

---

## 📦 Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety

### Backend & Auth
- `@supabase/supabase-js` - Backend services

### UI & Editor
- `tailwindcss` - Styling
- `@milkdown/crepe` - Rich text editor
- `lucide-react` - Icons

### Forms & Validation
- `zod` - Schema validation
- `react-hook-form` - Form management

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
# Settings → Environment Variables
```

### Other Platforms
- **Netlify**: Works with zero configuration
- **AWS Amplify**: Add build settings
- **Railway**: Configure environment variables

---

## 📚 Documentation

- **[SERVERCOM-GUIDE.md](./SERVERCOM-GUIDE.md)** - Complete API reference
- **[SETUP-BACKEND.md](./SETUP-BACKEND.md)** - Detailed backend setup guide
- **[supabase-setup.sql](./supabase-setup.sql)** - Database schema

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For questions or issues:
- **Email**: support@imedic.com.bd
- **Website**: https://imedic.com.bd
- **Documentation**: Check the guides in this repository

---

## 📝 License

This project is private and proprietary to I-Medic.

---

## ✨ What's Next?

### Short Term
- [ ] Connect payment gateway (SSLCOMMERZ/bKash)
- [ ] Add WhatsApp API for notifications
- [ ] Implement SMS OTP verification
- [ ] Set up email notifications

### Medium Term
- [ ] Provider portal for healthcare staff
- [ ] Real-time chat support
- [ ] Mobile app (React Native)
- [ ] Telemedicine integration

### Long Term
- [ ] AI health assistant
- [ ] Predictive analytics
- [ ] IoT device integration
- [ ] Multi-language support (English/Bengali)

---

**Built with ❤️ for I-Medic - Connected Care, Managed by I-Medic**

🌐 **Website**: https://imedic.com.bd  
📧 **Email**: info@imedic.com.bd  
📱 **Phone**: +880 1234-567890
