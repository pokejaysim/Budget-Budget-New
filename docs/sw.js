// Service Worker for Budget Buddy PWA
const CACHE_NAME = 'budget-buddy-v1';
const STATIC_CACHE = 'budget-buddy-static-v1';

// Files to cache for offline functionality
const STATIC_FILES = [
    '/',
    '/index.html',
    '/src/state.js',
    '/src/ui.js',
    '/src/utils.js',
    '/src/charts.js',
    '/src/firebase-init.js',
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/npm/chart.js'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('Caching static files');
                return cache.addAll(STATIC_FILES.filter(url => !url.startsWith('https://')));
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== STATIC_CACHE && cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip Firebase requests (they need network)
    if (event.request.url.includes('firebase') || 
        event.request.url.includes('firestore') ||
        event.request.url.includes('googleapis')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached version if available
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Otherwise fetch from network
                return fetch(event.request)
                    .then((response) => {
                        // Cache successful responses
                        if (response.status === 200) {
                            const responseClone = response.clone();
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, responseClone);
                                });
                        }
                        return response;
                    })
                    .catch(() => {
                        // Return offline page for navigation requests
                        if (event.request.mode === 'navigate') {
                            return caches.match('/index.html');
                        }
                        // Return a basic offline response for other requests
                        return new Response('Offline', {
                            status: 200,
                            headers: { 'Content-Type': 'text/plain' }
                        });
                    });
            })
    );
});

// Handle background sync for offline expense creation
self.addEventListener('sync', (event) => {
    if (event.tag === 'expense-sync') {
        event.waitUntil(syncOfflineExpenses());
    }
});

// Sync offline expenses when connection is restored
async function syncOfflineExpenses() {
    try {
        const db = await openIndexedDB();
        const transaction = db.transaction(['offline-expenses'], 'readonly');
        const store = transaction.objectStore('offline-expenses');
        const expenses = await getAllFromStore(store);

        for (const expense of expenses) {
            try {
                // Attempt to sync expense to Firebase
                await syncExpenseToFirebase(expense);
                
                // Remove from offline storage after successful sync
                const deleteTransaction = db.transaction(['offline-expenses'], 'readwrite');
                const deleteStore = deleteTransaction.objectStore('offline-expenses');
                await deleteStore.delete(expense.id);
            } catch (error) {
                console.error('Failed to sync expense:', expense.id, error);
            }
        }
    } catch (error) {
        console.error('Background sync failed:', error);
    }
}

// IndexedDB helpers
function openIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('budget-buddy-offline', 1);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('offline-expenses')) {
                db.createObjectStore('offline-expenses', { keyPath: 'id' });
            }
        };
    });
}

function getAllFromStore(store) {
    return new Promise((resolve, reject) => {
        const request = store.getAll();
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
}

// Placeholder for Firebase sync (would need to be implemented in main app)
async function syncExpenseToFirebase(expense) {
    // This would use the main app's Firebase instance
    // Implementation would be added to the main app code
    throw new Error('Firebase sync not implemented in service worker');
}

// Push notification handling
self.addEventListener('push', (event) => {
    const options = {
        body: 'You have a budget update!',
        icon: '/icon-192.png',
        badge: '/badge-72.png',
        tag: 'budget-notification',
        requireInteraction: true,
        actions: [
            {
                action: 'view',
                title: 'View Budget',
                icon: '/icon-view.png'
            },
            {
                action: 'dismiss',
                title: 'Dismiss'
            }
        ]
    };

    if (event.data) {
        const data = event.data.json();
        options.body = data.message || options.body;
        options.title = data.title || 'Budget Buddy';
    }

    event.waitUntil(
        self.registration.showNotification('Budget Buddy', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'view') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});