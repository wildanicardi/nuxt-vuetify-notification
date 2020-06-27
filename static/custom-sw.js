console.log('custom SW')

self.addEventListener('push', function (event) {
  console.log('Push Terkirim: ', event)
  const _data = event.data ? JSON.parse(event.data.text()) : {}
  event.waitUntil(
    self.registration.showNotification(_data.title, {
      body: _data.message,
      icon: _data.icon,
      tag: _data.tag,
    })
  )
})
