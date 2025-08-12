// Service worker for offline capability
const VERSION = 'v2.0.0';
const STATIC_CACHE = `food-genius-static-${VERSION}`;
const RUNTIME_CACHE = `food-genius-runtime-${VERSION}`;
const urlsToCache = [
  '/food/',
  // cache HTML as offline fallback but prefer network-first for navigations
  '/food/index.html',
  '/food/manifest.json',
  '/food/icon-192.svg',
  '/food/icon-512.svg'
];

// Install event - cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;
  if (url.pathname.endsWith('service-worker.js')) return;

  const isHTML = event.request.mode === 'navigate' || (event.request.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    // Network-first for HTML to avoid stale pages
    event.respondWith((async () => {
      try {
        const networkResp = await fetch(event.request, { cache: 'no-store' });
        const cache = await caches.open(RUNTIME_CACHE);
        cache.put(event.request, networkResp.clone());
        return networkResp;
      } catch (e) {
        const cached = await caches.match(event.request) || await caches.match('/food/index.html');
        return cached || new Response('Offline', { status: 503 });
      }
    })());
    return;
  }

  // Stale-while-revalidate for assets
  event.respondWith((async () => {
    const cache = await caches.open(RUNTIME_CACHE);
    const cached = await caches.match(event.request);
    const fetched = fetch(event.request).then(resp => {
      if (resp && resp.status === 200 && (resp.type === 'basic' || resp.type === 'cors')) {
        cache.put(event.request, resp.clone()).catch(() => { });
      }
      return resp;
    }).catch(() => undefined);
    return cached || fetched || new Response('Offline', { status: 503 });
  })());
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(name => {
        if (![STATIC_CACHE, RUNTIME_CACHE].includes(name)) {
          return caches.delete(name);
        }
      })
    )).then(() => self.clients.claim())
  );
});