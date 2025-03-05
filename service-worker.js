self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/workTimeCalculator_iOS/index.html',
        '/workTimeCalculator_iOS/manifest.json',
        '/workTimeCalculator_iOS/alarm.mp3',
        '/workTimeCalculator_iOS/offline.html'  // Aggiungi la pagina offline alla cache
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Se la risorsa è nella cache, restituirla
      if (cachedResponse) {
        return cachedResponse;
      }

      // Se non è nella cache, prova a fare una richiesta di rete
      return fetch(event.request).catch(() => {
        // Se non c'è connessione, restituisci la pagina offline dalla cache
        return caches.match('/workTimeCalculator_iOS/offline.html');
      });
    })
  );
});
