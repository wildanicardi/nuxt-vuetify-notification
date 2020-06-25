<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="form.password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="userLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: ['non-auth'],
  layout: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', { data: this.form })
        return this.$router.push('/home')
      } catch (err) {
        console.log(err)
      }
    },
  },
  // subscription() {
  //   if ('Notification' in window) {
  //     Notification.requestPermission((result) => {
  //       // cek apakah user menerima notifiksinya
  //       if (result !== 'granted') {
  //         console.log('notifikasi tidak di perbolehkan')
  //       } else {
  //         this.confPushSub()
  //         console.log('notifikasi aktif')
  //       }
  //     })
  //   } else {
  //     alert('notifikasi tidak didukung ')
  //   }
  // },
  // confPushSub() {
  //   const that = this
  //   const publicKey = process.env.vapidPublicKey
  //   if (!('serviceWorker' in navigator)) {
  //     // cek apakah service worker ada/tidak
  //     return
  //   }
  //   navigator.serviceWorker.ready.then(function (sw) {
  //     console.log(sw)
  //     sw.pushManager.getSubscription().then((sub) => {
  //       // cek apakah device ini sudah subscribe atau belum
  //       if (sub === null) {
  //         that.modal = true
  //         sw.pushManager
  //           .subscribe({
  //             userVisibleOnly: true,
  //             applicationServerKey: that.urlB64ToUint8Array(publicKey),
  //           })
  //           .then((subscription) => {
  //             console.log('Subscribe OK:', subscription)
  //             that.$axios
  //               .post('/subscribe', subscription)
  //               .then((result) => console.log('data', result))
  //               .catch((err) => console.log(err.message))
  //           })
  //           .then(() => {
  //             that.newNotif('Berhasil Subscribe')
  //             console.log('Server Stored Subscription.')
  //           })
  //           .catch((err) => {
  //             console.log('Subscribe Error:', err)
  //           })
  //       } else {
  //         that.modal = false
  //         console.log('subscription sudah ada')
  //       }
  //     })
  //   })
  // },
  // urlB64ToUint8Array(base64String) {
  //   const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  //   const base64 = (base64String + padding)
  //     .replace(/\-/g, '+')
  //     .replace(/_/g, '/')
  //   const rawData = window.atob(base64)
  //   const outputArray = new Uint8Array(rawData.length)
  //   for (let i = 0; i < rawData.length; ++i) {
  //     outputArray[i] = rawData.charCodeAt(i)
  //   }
  //   return outputArray
  // },
}
</script>

<style></style>
