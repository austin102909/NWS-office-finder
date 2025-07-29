const CACHE_NAME = 'nws-office-finder-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/icon.png',
    '/icon-120.png',
    '/icon-180.png',
    'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
