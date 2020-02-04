import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing/registerRoute';

import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

precacheAndRoute(self.__precacheManifest || []);
precacheAndRoute(self.__WB_MANIFEST);

// registerRoute(
//   /.*\/api*/,
//   new StaleWhileRevalidate({
//     cacheName: 'apis-cache',
//     plugins: [
//       new ExpirationPlugin({
//         maxAgeSeconds: 1 * 24 * 60 * 60 // 1 Days
//       })
//     ]
//   })
// );
