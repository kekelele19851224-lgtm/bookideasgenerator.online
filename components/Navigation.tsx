'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { Menu, X, Sparkles } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Generator', href: '/generator' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav className={clsx(
        'bg-white border-b sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'shadow-lg border-gray-300' : 'shadow-sm border-gray-200'
      )}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105"
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-gray-900">BookSpark</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'px-4 py-2 text-sm lg:text-base font-medium rounded-lg transition-all duration-200 relative',
                    pathname === item.href
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className={clsx(
                'md:hidden p-2 rounded-lg transition-all duration-200 min-h-touch min-w-touch flex items-center justify-center',
                mobileMenuOpen ? 'bg-gray-100' : 'hover:bg-gray-50'
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={clsx(
                    'w-6 h-6 text-gray-600 absolute inset-0 transition-all duration-300',
                    mobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  )} 
                />
                <X 
                  className={clsx(
                    'w-6 h-6 text-gray-600 absolute inset-0 transition-all duration-300',
                    mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  )} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={clsx(
        'fixed inset-0 z-40 md:hidden transition-all duration-300',
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}>
        {/* Backdrop */}
        <div 
          className={clsx(
            'absolute inset-0 bg-black transition-opacity duration-300',
            mobileMenuOpen ? 'opacity-30' : 'opacity-0'
          )}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu */}
        <div className={clsx(
          'absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-xl transform transition-transform duration-300 ease-out',
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}>
          <div className="px-4 py-6 space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'block px-4 py-4 text-base font-medium rounded-xl transition-all duration-200 min-h-touch',
                  pathname === item.href
                    ? 'text-purple-600 bg-purple-50 border border-purple-200'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50 border border-transparent'
                )}
                style={{
                  animationDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {pathname === item.href && (
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  )}
                </div>
              </Link>
            ))}
          </div>
          
          {/* CTA in mobile menu */}
          <div className="px-4 pb-6 border-t border-gray-100 pt-4">
            <Link
              href="/generator"
              className="block w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white text-center py-4 px-6 rounded-xl font-semibold text-base min-h-touch shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Generate Ideas Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}