'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

interface MilkdownEditorProps {
  defaultValue?: string
  placeholder?: string
  onChange?: (content: string) => void
  className?: string
}

export function MilkdownEditor({ 
  defaultValue = '', 
  placeholder = 'Start writing...',
  onChange,
  className = ''
}: MilkdownEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [crepe, setCrepe] = useState<any>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !editorRef.current) return

    // Dynamically import Milkdown to avoid SSR issues
    import('@milkdown/crepe').then(({ Crepe }) => {
      const editor = new Crepe({
        root: editorRef.current!,
        defaultValue: defaultValue || placeholder,
      })

      editor.create().then(() => {
        console.log('Milkdown editor created successfully')
        setCrepe(editor)
        
        // Note: Change listening in Milkdown Crepe is handled differently
        // You can get the content using editor.getMarkdown() when needed
        // For auto-save, you'd implement a debounced save mechanism
      }).catch((error: unknown) => {
        console.error('Error creating Milkdown editor:', error)
      })

      return () => {
        if (editor) {
          try {
            editor.destroy()
          } catch (error) {
            console.log('Error destroying editor:', error)
          }
        }
      }
    }).catch((error: unknown) => {
      console.error('Error loading Milkdown:', error)
    })
  }, [mounted, defaultValue, placeholder, onChange])

  if (!mounted) {
    return (
      <div className={`border rounded-lg p-8 min-h-[400px] flex items-center justify-center ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto mb-2"></div>
          <p className="text-sm text-gray-500">Loading editor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`border rounded-lg overflow-hidden bg-white ${className}`}>
      <div 
        ref={editorRef} 
        className="milkdown-editor-wrapper min-h-[400px] p-4"
      />
    </div>
  )
}

// Export a dynamic version that won't be SSR'd
export default dynamic(() => Promise.resolve(MilkdownEditor), {
  ssr: false,
  loading: () => (
    <div className="border rounded-lg p-8 min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto mb-2"></div>
        <p className="text-sm text-gray-500">Loading editor...</p>
      </div>
    </div>
  ),
})
