/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';

const CACHE_ARR = [
{CACHE_NAME : "static-cache-v1", FILES_TO_CACHE : [
  '/',
  '/index.html',
  '/scripts/app.js',
  '/scripts/install.js',
  '/scripts/luxon-1.11.4.js',
  '/styles/inline.css',
  '/images/add.svg',
  '/images/clear-day.svg',
  '/images/clear-night.svg',
  '/images/cloudy.svg',
  '/images/fog.svg',
  '/images/hail.svg',
  '/images/install.svg',
  '/images/partly-cloudy-day.svg',
  '/images/partly-cloudy-night.svg',
  '/images/rain.svg',
  '/images/refresh.svg',
  '/images/sleet.svg',
  '/images/snow.svg',
  '/images/thunderstorm.svg',
  '/images/tornado.svg',
  '/images/wind.svg',
  '/images/favicon.ico',
  '/manifest.json',
  '/images/icons/icon-144x144.png']}, 
{CACHE_NAME : "data-cache-v1", FILES_TO_CACHE : []}
];
const CACHE_NAME_ARR = [];

/* event.waitUntil() method takes a promise and uses it to know how long installation takes, and whether it succeeded or not. 
   If all the files are successfully cached, then the service worker will be installed. If any of the files fail to download/cache, then the install step will fail. */

/* Wrapping the fetch call in evt.respondWith() prevents the browsers default fetch handling and tells the browser we want to handle the response ourselves. 
   If you don't call evt.respondWith() inside of a fetch handler, you'll just get the default network behavior. */

/* The updated service worker takes control immediately because our install event finishes with self.skipWaiting(), 
   and the activate event finishes with self.clients.claim().
   Without those, the old service worker would continue to control the page as long as the currently active service worker is not released and becomes redundant ie untill there is a tab open to the page. */

/* Promise.all() returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled or when the iterable contains no promises. */

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
  evt.waitUntil(Promise.all(CACHE_ARR.map((cacheobj) => {
  	return caches.open(cacheobj.CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      CACHE_NAME_ARR.push(cacheobj.CACHE_NAME);
      return cache.addAll(cacheobj.FILES_TO_CACHE);
    })
  })
  	));
  self.skipWaiting();
});


self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (!CACHE_NAME_ARR.includes(key)) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
);
  self.clients.claim();
});


/*
Intercepts the request and checks if it is for a weather forecast. If it is, use fetch to make the request. 
Once the response is returned, open the cache, clone the response, store it in the cache, and return the response to the original requestor. 
 */
self.addEventListener('fetch', (evt) => {
  if (evt.request.url.includes('/forecast/')) {
  console.log('[Service Worker] Fetch (data)', evt.request.url);
  evt.respondWith(
      caches.open(CACHE_ARR[1].CACHE_NAME).then((cache) => {
        return fetch(evt.request)
            .then((response) => {
                                                           // If the response was good, clone it and store it in the cache.
              if (response.status === 200) {
                cache.put(evt.request.url, response.clone());
              }
              return response;
            }).catch((err) => {
                                                           // Network request failed, try to get it from the cache.
              return cache.match(evt.request);
            });
      }));
  return;
}
evt.respondWith(
    caches.open(CACHE_ARR[0].CACHE_NAME).then((cache) => {
      return cache.match(evt.request)
          .then((response) => {
            return response || fetch(evt.request);
          });
    })
);
});
