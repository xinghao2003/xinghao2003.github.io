// Bump version to ensure clients pick up latest SW and caches
const CACHE_VERSION = 'v2.0.0';
const CACHE_NAME = `timeline-diary-${CACHE_VERSION}`;
const STATIC_CACHE_NAME = `timeline-diary-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE_NAME = `timeline-diary-dynamic-${CACHE_VERSION}`;

// Files to cache for offline functionality
const urlsToCache = [
  './',
  // We cache index.html only as an offline fallback. Fetch strategy below is network-first for HTML.
  './index.html',
  './manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached successfully');
  // Activate new SW immediately
  return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Error caching static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            // Delete old caches
            if (cacheName !== STATIC_CACHE_NAME &&
                cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        // Start controlling pages without reload
        return self.clients.claim();
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  const url = new URL(event.request.url);

  // Don't try to cache the service worker itself
  if (url.pathname.endsWith('sw.js')) {
    return; // let the browser handle SW updates
  }

  // Helper to detect HTML requests (navigations and HTML fetches)
  const isHTMLRequest = event.request.mode === 'navigate' ||
    (event.request.headers.get('accept') || '').includes('text/html');

  // Network-first for HTML to get the latest content, fallback to cache when offline
  if (isHTMLRequest) {
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(event.request, { cache: 'no-store' });
        // Update the cache for offline usage
        const cache = await caches.open(DYNAMIC_CACHE_NAME);
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      } catch (err) {
        console.warn('Service Worker: HTML network fetch failed, serving cached fallback:', url.href);
        const cached = await caches.match(event.request) || await caches.match('./index.html');
        return cached || new Response('Offline', { status: 503, statusText: 'Offline' });
      }
    })());
    return;
  }

  // Stale-while-revalidate for static assets (CSS/JS/images/fonts), cache-first if present
  event.respondWith((async () => {
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    const cached = await caches.match(event.request);
    const fetchPromise = fetch(event.request).then(response => {
      // Cache successful same-origin or CORS responses
      if (response && response.status === 200 && (response.type === 'basic' || response.type === 'cors')) {
        cache.put(event.request, response.clone()).catch(() => {});
      }
      return response;
    }).catch(() => undefined);

    // Return cache immediately if present, else wait for network
    return cached || fetchPromise || new Response('Offline', { status: 503, statusText: 'Offline' });
  })());
});

// Handle sync events for background data sync
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(
      // Perform background sync operations here
      Promise.resolve()
    );
  }
});

// Handle push notifications
self.addEventListener('push', event => {
  console.log('Service Worker: Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'New diary reminder',
    icon: './manifest.json',
    badge: './manifest.json',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'explore',
        title: 'Open Diary',
        icon: './manifest.json'
      },
      {
        action: 'close',
        title: 'Close',
        icon: './manifest.json'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Timeline Diary', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  console.log('Service Worker: Notification clicked');
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('./')
    );
  } else if (event.action === 'close') {
    event.notification.close();
  } else {
    // Default action
    event.waitUntil(
      clients.openWindow('./')
    );
  }
});

// Message handling for communication with main thread
self.addEventListener('message', event => {
  console.log('Service Worker: Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});