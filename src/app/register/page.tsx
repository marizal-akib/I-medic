'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { z } from 'zod'
import { analyticsService } from '@/lib/serverCom'
import { isSupabaseConfigured } from '@/lib/supabase'
import FloatingMessages from '@/components/ui/floating-messages'

const registerSchema = z.object({
  email: z.string().trim().toLowerCase().email({ message: 'Invalid email address' }).max(255),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [supabaseConfigured, setSupabaseConfigured] = useState(true)
  const { signUp, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Check if Supabase is configured
    setSupabaseConfigured(isSupabaseConfigured())
  }, [])

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Check if Supabase is configured
    if (!isSupabaseConfigured()) {
      setError('Supabase is not configured. Please check the setup guide in SETUP-BACKEND.md')
      return
    }

    setLoading(true)

    try {
      const validated = registerSchema.parse({ email, password, confirmPassword })
      const { error } = await signUp(validated.email, validated.password)

      if (error) {
        // Handle specific error types
        if (error.message.includes('already registered')) {
          setError('This email is already registered')
        } else if (error.message.includes('Failed to fetch')) {
          setError('Unable to connect to authentication server. Please check your internet connection or contact support.')
        } else {
          setError(error.message)
        }
        analyticsService.trackEvent('registration_failed', { reason: error.message })
      } else {
        setSuccess(true)
        analyticsService.trackEvent('registration_success')
        // Brief delay to show success state before redirect
        setTimeout(() => {
          router.push('/dashboard')
        }, 800)
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0].message)
      } else if (err instanceof TypeError && err.message.includes('fetch')) {
        setError('Unable to connect to authentication server. Please check your network connection.')
      } else {
        setError('An unexpected error occurred. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"></div>
      
      {/* Animated floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Floating health messages */}
      <FloatingMessages />
      
      <div className="relative w-full max-w-md z-10">
        {/* Logo section with animation */}
        <div className="text-center mb-8 animate-fade-in-down">
          <Link href="/" className="inline-flex items-center justify-center space-x-3 mb-4 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-2xl">I</span>
            </div>
            <span className="font-display font-bold text-4xl">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">I-</span>
              <span className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">Medic</span>
            </span>
          </Link>
          <p className="text-gray-600 text-sm mt-2">Join Thousands of Healthy Families</p>
        </div>

        {/* Main card with glass effect */}
        <Card className="backdrop-blur-xl bg-white/80 shadow-2xl border-0 animate-fade-in-up">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-3xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Create Account ✨
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              Start your journey to better health management today
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {!supabaseConfigured && (
                <div className="p-4 text-sm text-amber-800 bg-amber-50 border border-amber-300 rounded-md">
                  <p className="font-semibold mb-2">⚠️ Backend Not Configured</p>
                  <p>Authentication backend is not set up. Please configure your Supabase credentials:</p>
                  <ol className="list-decimal ml-4 mt-2 space-y-1">
                    <li>Create a <code className="text-xs bg-amber-100 px-1 rounded">.env.local</code> file</li>
                    <li>Add your Supabase URL and Anon Key</li>
                    <li>Restart the development server</li>
                  </ol>
                  <p className="mt-2 text-xs">See <code className="bg-amber-100 px-1 rounded">SETUP-BACKEND.md</code> for detailed instructions.</p>
                </div>
              )}
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}
              {success && (
                <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Account created successfully! Redirecting...</span>
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  required
                  disabled={loading}
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck="false"
                />
                <p className="text-xs text-gray-500">We'll convert your email to lowercase automatically</p>
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                    disabled={loading}
                    autoComplete="new-password"
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition-colors"
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500">Minimum 6 characters</p>
              </div>
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                    disabled={loading}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition-colors"
                    tabIndex={-1}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  >
                    {showConfirmPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full relative overflow-hidden group" 
                disabled={loading || !supabaseConfigured || success}
                size="lg"
                variant={success ? "green" : "purple"}
              >
                {success ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Welcome!</span>
                  </span>
                ) : loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Creating account...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span>Create Account</span>
                  </span>
                )}
              </Button>
              <p className="text-sm text-center text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-teal-600 hover:text-teal-700 font-medium">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>

        <div className="mt-8 text-center space-y-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
            <span>Free to Join</span>
            <span>•</span>
            <span>Secure & Private</span>
            <span>•</span>
            <span>No Credit Card</span>
          </div>
        </div>
      </div>
    </div>
  )
}
