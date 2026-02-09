self.addEventListener('install', (e) => {
  console.log('Prometheus System: Offline Mode Active');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
