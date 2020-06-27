# Nuxt Notification Using vuetify 

Starter to Build Notification and subscription webpush using vuetify ui framework and nuxt auth to authentication

```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
## Usage
custom service worker to listen push
```javascript
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
```
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## License
[MIT](https://choosealicense.com/licenses/mit/)
wildanicardi
