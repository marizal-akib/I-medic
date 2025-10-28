'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/solid'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Programs', 
    href: '/programs',
    dropdown: [
      { name: 'SmartCare', href: '/programs#smartcare' },
      { name: 'ActiveCare', href: '/programs#activecare' },
      { name: 'TotalCare', href: '/programs#totalcare' },
    ]
  },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Home & Daily Care', href: '/services#home-care' },
      { name: 'Medical Support', href: '/services#medical-support' },
      { name: 'Hospital Assistance', href: '/services#hospital-assistance' },
      { name: 'Health Management', href: '/services#health-management' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)

  const handleMenuToggle = () => {
    console.log('Menu toggle clicked, current state:', mobileMenuOpen)
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMenuOpen = () => {
    console.log('Opening menu')
    setMobileMenuOpen(true)
  }

  const handleMenuClose = () => {
    console.log('Closing menu')
    setMobileMenuOpen(false)
    setMobileOpenDropdown(null)
  }

  const toggleMobileDropdown = (name: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === name ? null : name)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-teal-100/50 sticky top-0 z-50 relative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">I-Medic</span>
            <div className="flex items-center space-x-2">
              {/* Logo placeholder - you can replace with actual logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="font-display font-bold text-2xl">
                <span className="text-bangladesh-600">I-</span>
                <span className="text-violet-600">Medic</span>
              </span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
            onClick={handleMenuOpen}
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-700 hover:text-teal-600 transition-colors duration-200 relative group inline-flex items-center gap-1"
              >
                {item.name}
                {item.dropdown && (
                  <svg className="h-4 w-4 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: openDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Desktop Dropdown Menu */}
              {item.dropdown && openDropdown === item.name && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-fade-in-up">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-150 font-medium"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="tel:+8801234567890">
              <PhoneIcon className="h-4 w-4 mr-2" />
              Call Now
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm transition-opacity" 
            onClick={handleMenuClose}
            aria-hidden="true"
          />
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl transform transition-transform max-h-screen">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={handleMenuClose}>
                <span className="sr-only">I-Medic</span>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-violet-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">I</span>
                  </div>
                  <span className="font-display font-bold text-xl">
                    <span className="text-teal-600">I-</span>
                    <span className="text-violet-600">Medic</span>
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                onClick={handleMenuClose}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root h-auto">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-1 py-6 min-h-0">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {/* Main menu item */}
                      {item.dropdown ? (
                        <button
                          onClick={() => toggleMobileDropdown(item.name)}
                          className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          <span>{item.name}</span>
                          <svg 
                            className={`h-5 w-5 transition-transform duration-200 ${mobileOpenDropdown === item.name ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={handleMenuClose}
                        >
                          {item.name}
                        </Link>
                      )}
                      
                      {/* Mobile Dropdown Items */}
                      {item.dropdown && mobileOpenDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                              onClick={handleMenuClose}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="tel:+8801234567890" onClick={handleMenuClose}>
                      <PhoneIcon className="h-4 w-4 mr-2" />
                      Call Now
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/booking" onClick={handleMenuClose}>
                      Book Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
