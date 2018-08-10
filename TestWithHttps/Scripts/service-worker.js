﻿var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/Content/bootstrap.css',
  '/Content/site.css',
];
self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});