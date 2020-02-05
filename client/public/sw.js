// import { registerRoute } from 'workbox-routing/registerRoute';
// import { precacheAndRoute } from 'workbox-precaching';
// import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
// import { ExpirationPlugin } from 'workbox-expiration';

// precacheAndRoute(self.__precacheManifest || []);
// precacheAndRoute(self.__WB_MANIFEST);

// // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
// registerRoute(
//   /^https:\/\/fonts\.googleapis\.com/,
//   new StaleWhileRevalidate({
//     cacheName: 'google-fonts-stylesheets'
//   })
// );

// // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
// registerRoute(
//   /^https:\/\/fonts\.gstatic\.com/,
//   new CacheFirst({
//     cacheName: 'google-fonts-webfonts',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200]
//       }),
//       new ExpirationPlugin({
//         maxAgeSeconds: 60 * 60 * 24 * 365
//       })
//     ]
//   })
// );

// // Cache JS and CSS files
// registerRoute(/\.(?:js|css)$/, new StaleWhileRevalidate());

// // Cache Images for 30 days
// registerRoute(
//   /\.(?:png|gif|jpg|jpeg|svg)$/,
//   new CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new ExpirationPlugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
//       })
//     ]
//   })
// );

if (workbox) {
  console.log('Workbox loaded');
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
  workbox.routing.precacheAndRoute(self.__WB_MANIFEST);
} else {
  console.log('Workbox did not load');
}
