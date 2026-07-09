self.addEventListener('push', function(event) {
  console.log("Push event received!");
  let data = {};
  if (event.data) {
    try {
      data = event.data.json();
      console.log("Push data:", data);
    } catch (e) {
      data = { title: 'New Alert', body: event.data.text() };
      console.log("Push text:", data);
    }
  }

  const title = data.title || 'Royal Punjab Ride';
  const options = {
    body: data.body || 'You have a new notification.',
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    data: data.url || '/'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
      .then(() => console.log("Notification shown successfully"))
      .catch(err => console.error("Error showing notification:", err))
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data)
  );
});
