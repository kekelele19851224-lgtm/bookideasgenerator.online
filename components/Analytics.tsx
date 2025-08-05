'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Analytics utility functions
export const analytics = {
  // Track page views
  pageview: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: url,
      })
    }
  },

  // Track custom events
  event: (action: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, parameters)
    }
  },

  // Track book idea generation
  trackIdeaGeneration: (genre: string, bookType: string) => {
    analytics.event('generate_idea', {
      event_category: 'engagement',
      event_label: `${bookType}_${genre}`,
      custom_dimension_1: genre,
      custom_dimension_2: bookType,
    })
  },

  // Track idea saves
  trackIdeaSave: (genre: string, ideaId: string) => {
    analytics.event('save_idea', {
      event_category: 'engagement', 
      event_label: genre,
      custom_dimension_1: genre,
      idea_id: ideaId,
    })
  },

  // Track resource views
  trackResourceView: (resourceSlug: string, category: string) => {
    analytics.event('view_resource', {
      event_category: 'content',
      event_label: resourceSlug,
      resource_category: category,
    })
  },

  // Track newsletter signups
  trackNewsletterSignup: () => {
    analytics.event('newsletter_signup', {
      event_category: 'conversion',
      event_label: 'footer_signup',
    })
  },

  // Track social shares
  trackSocialShare: (platform: string, content: string) => {
    analytics.event('share', {
      event_category: 'engagement',
      method: platform,
      content_type: content,
    })
  },

  // Track Core Web Vitals
  trackWebVitals: () => {
    if (typeof window !== 'undefined') {
      // Track Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            analytics.event('web_vital_lcp', {
              event_category: 'performance',
              value: Math.round(entry.startTime),
              metric_id: 'lcp',
            })
          }
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // Track First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.entryType === 'first-input') {
            analytics.event('web_vital_fid', {
              event_category: 'performance',
              value: Math.round(entry.processingStart - entry.startTime),
              metric_id: 'fid',
            })
          }
        }
      }).observe({ entryTypes: ['first-input'] })

      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
        analytics.event('web_vital_cls', {
          event_category: 'performance',
          value: Math.round(clsValue * 1000),
          metric_id: 'cls',
        })
      }).observe({ entryTypes: ['layout-shift'] })
    }
  }
}

// Analytics provider component
export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views
    analytics.pageview(pathname)
  }, [pathname])

  useEffect(() => {
    // Initialize Web Vitals tracking
    analytics.trackWebVitals()
  }, [])

  return null
}

// Add gtag types to window
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}