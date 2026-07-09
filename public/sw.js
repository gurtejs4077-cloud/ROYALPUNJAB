self.addEventListener('push', function(event) {
  let data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = { title: 'New Alert', body: event.data.text() };
    }
  }

  const title = data.title || 'Royal Punjab Ride';
  const options = {
    body: data.body || 'You have a new notification.',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    data: data.url || '/'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data)
  );
});
