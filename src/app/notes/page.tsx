'use client'

import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { MilkdownEditor } from '@/components/ui/milkdown-editor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowLeft, Save, BookOpen } from 'lucide-react'
import { notesService } from '@/lib/serverCom'

function NotesContent() {
  const { user } = useAuth()
  const [content, setContent] = useState('')
  const [saving, setSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  const handleSave = async () => {
    if (!user) return

    setSaving(true)
    try {
      await notesService.saveNote({
        patient_id: user.id,
        content: content,
      })
      setLastSaved(new Date())
      
      // Show success message
      alert('Notes saved successfully!')
    } catch (error) {
      console.error('Error saving notes:', error)
      alert('Failed to save notes. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-teal-600" />
                <h1 className="text-xl font-semibold text-gray-900">Medical Notes</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {lastSaved && (
                <span className="text-xs text-gray-500 hidden sm:block">
                  Last saved: {lastSaved.toLocaleTimeString()}
                </span>
              )}
              <Button onClick={handleSave} disabled={saving} size="sm">
                <Save className="h-4 w-4 mr-2" />
                {saving ? 'Saving...' : 'Save Notes'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-display">Your Personal Medical Notes</CardTitle>
            <CardDescription>
              Document your symptoms, medications, and health observations. These notes are private and only visible to you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MilkdownEditor
              defaultValue={`# My Medical Notes

## Today's Symptoms
- Record any symptoms you're experiencing

## Current Medications
- List your current medications and dosages

## Questions for Doctor
- Write down questions to ask during your next visit

## Health Goals
- Set and track your health goals

---

**Note:** This editor supports markdown formatting. Use # for headings, - for lists, **bold** for emphasis.`}
              placeholder="Start writing your medical notes here..."
              onChange={setContent}
            />
          </CardContent>
        </Card>

        {/* Help Card */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Tips for Better Note-Taking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-teal-500 mr-3 mt-2"></div>
                <p><strong>Be specific:</strong> Include dates, times, and detailed descriptions</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-violet-500 mr-3 mt-2"></div>
                <p><strong>Track patterns:</strong> Note any patterns in symptoms or medication effects</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-bangladesh-500 mr-3 mt-2"></div>
                <p><strong>Prepare questions:</strong> Write questions before appointments so you don't forget</p>
              </div>
              <div className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-gray-400 mr-3 mt-2"></div>
                <p><strong>Use markdown:</strong> Format with # headers, - lists, and **bold** text</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default function NotesPage() {
  return (
    <ProtectedRoute>
      <NotesContent />
    </ProtectedRoute>
  )
}
