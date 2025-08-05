const CACHE_NAME = 'bookspark-v1.0.0'
const STATIC_CACHE = 'bookspark-static-v1.0.0'
const DYNAMIC_CACHE = 'bookspark-dynamic-v1.0.0'

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/generator',
  '/resources',
  '/about',
  '/offline',
  '/manifest.json',
  // Add critical CSS and JS files here when available
]

// Network-first resources (always try network first)
const NETWORK_FIRST = [
  '/api/',
  '/generator?',
]

// Cache-first resources (try cache first, then network)
const CACHE_FIRST = [
  '/static/',
  '/icons/',
  '/images/',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.svg',
  '.css',
  '.js',
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install event')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('Service Worker: Error caching static assets', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate event')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        return self.clients.claim()
      })
  )
})

// Fetch event - handle network requests
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return
  }

  // Handle different caching strategies
  if (shouldUseNetworkFirst(request.url)) {
    event.respondWith(networkFirst(request))
  } else if (shouldUseCacheFirst(request.url)) {
    event.respondWith(cacheFirst(request))
  } else {
    event.respondWith(staleWhileRevalidate(request))
  }
})

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag)
  
  if (event.tag === 'idea-generation') {
    event.waitUntil(
      // Handle offline idea generation queue
      processOfflineIdeas()
    )
  }
  
  if (event.tag === 'idea-save') {
    event.waitUntil(
      // Handle offline idea saves
      processOfflineSaves()
    )
  }
})

// Push notification handler
self.addEventListener('push', (event) => {
  if (!event.data) return

  const data = event.data.json()
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: data.data || {},
    actions: [
      {
        action: 'open',
        title: 'Open BookSpark',
        icon: '/icons/icon-96x96.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification(data.title || 'BookSpark', options)
  )
})

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow('/generator')
    )
  }
})

// Helper functions
function shouldUseNetworkFirst(url) {
  return NETWORK_FIRST.some(pattern => url.includes(pattern))
}

function shouldUseCacheFirst(url) {
  return CACHE_FIRST.some(pattern => url.includes(pattern))
}

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache', error)
    const cachedResponse = await caches.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/offline')
    }
    
    throw error
  }
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request)
  
  if (cachedResponse) {
    return cachedResponse
  }
  
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    console.log('Service Worker: Cache and network failed', error)
    throw error
  }
}

async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request)
  
  const networkPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        const cache = caches.open(DYNAMIC_CACHE)
        cache.then((c) => c.put(request, networkResponse.clone()))
      }
      return networkResponse
    })
    .catch(() => {
      // Network failed, return cached version if available
      return cachedResponse
    })
  
  return cachedResponse || networkPromise
}

async function processOfflineIdeas() {
  // Process queued idea generation requests
  const cache = await caches.open(DYNAMIC_CACHE)
  // Implementation would sync with server when online
  console.log('Processing offline idea generation queue')
}

async function processOfflineSaves() {
  // Process queued idea saves
  const cache = await caches.open(DYNAMIC_CACHE)
  // Implementation would sync with server when online  
  console.log('Processing offline idea saves queue')
}