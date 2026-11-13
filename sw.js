/* Service worker du lanceur SOL MESURES · Laboratoire : garde la page du lanceur pour l'ouvrir sans attendre (et hors ligne).
   L'application Apps Script ne passe pas par ici : elle vient toujours de Google, à jour.
   Changer VERSION après une modification de index.html ou des icônes. application.js est toujours relu sur Internet quand c'est possible.
   Le lanceur de la gestion commerciale est à la même adresse GitHub : on n'efface que les caches « sm-labo-». */
var PREFIXE = 'sm-labo-';
var VERSION = PREFIXE + '2026-11-13b';
var FICHIERS = ['./', 'index.html', 'application.js', 'manifest.webmanifest',
  'icones/logo.png', 'icones/icone-192.png', 'icones/icone-512.png', 'icones/icone-masquable-512.png', 'icones/favicon-32.png', 'icones/apple-touch-icon.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FICHIERS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k.indexOf(PREFIXE) === 0 && k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  var reseauDabord = req.mode === 'navigate' || /application\.js$/.test(new URL(req.url).pathname);
  if (reseauDabord) {
    e.respondWith(fetch(req).then(function (r) {
      var copie = r.clone();
      if (r.ok) caches.open(VERSION).then(function (c) { c.put(req.mode === 'navigate' ? 'index.html' : req, copie); });
      return r;
    }).catch(function () { return caches.open(VERSION).then(function (c) { return c.match(req.mode === 'navigate' ? 'index.html' : req, { ignoreSearch: true }); }); }));
    return;
  }
  e.respondWith(caches.open(VERSION).then(function (c) { return c.match(req); }).then(function (r) { return r || fetch(req); }));
});
