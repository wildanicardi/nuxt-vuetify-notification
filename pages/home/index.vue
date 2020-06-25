<template>
  <div>
    <AppDialog :dialog="modal" @action="closeModal" />
    <h1>Halaman Home</h1>
  </div>
</template>

<script>
import AppDialog from '~/components/AppDialog'
export default {
  middleware: ['auth'],
  components: { AppDialog },
  data() {
    return {
      modal: false,
    }
  },
  mounted() {
    this.subscription()
  },
  methods: {
    subscription() {
      if ('Notification' in window) {
        Notification.requestPermission((result) => {
          // cek apakah user menerima notifiksinya
          if (result !== 'granted') {
            console.log('notifikasi tidak di perbolehkan')
          } else {
            this.confPushSub()
            console.log('notifikasi aktif')
          }
        })
      } else {
        alert('notifikasi tidak didukung ')
      }
    },
    confPushSub() {
      const that = this
      const publicKey = process.env.vapidPublicKey
      if (!('serviceWorker' in navigator)) {
        // cek apakah service worker ada/tidak
        return
      }
      navigator.serviceWorker.ready.then(function (sw) {
        console.log(sw)
        sw.pushManager.getSubscription().then((sub) => {
          // cek apakah device ini sudah subscribe atau belum
          if (sub === null) {
            // that.modal = true
            sw.pushManager
              .subscribe({
                userVisibleOnly: true,
                applicationServerKey: that.urlB64ToUint8Array(publicKey),
              })
              .then((subscription) => {
                console.log('Subscribe OK:', subscription)
                that.$axios
                  .post('/subscribe', subscription)
                  .then((result) => console.log('data', result))
                  .catch((err) => console.log(err.message))
              })
              .then(() => {
                console.log('Server Stored Subscription.')
              })
              .catch((err) => {
                console.log('Subscribe Error:', err)
              })
          } else {
            console.log('subscription sudah ada')
          }
        })
      })
    },
    urlB64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
      const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/')
      const rawData = window.atob(base64)
      const outputArray = new Uint8Array(rawData.length)
      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
      }
      return outputArray
    },
    closeModal() {
      this.modal = false
    },
  },
}
</script>

<style></style>
