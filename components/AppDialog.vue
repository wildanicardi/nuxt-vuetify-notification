<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">
          Aktifkan Permission Notifikasi
        </v-card-title>
        <v-card-text>
          Aktifkan permission notifikasi di browser anda agar dapat menikmati
          fitur notifikasi di ETHOL
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text block @click="$emit('action')">
            oke
            <v-icon right size="18">
              mdi-thumb-up-outline
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style></style>
