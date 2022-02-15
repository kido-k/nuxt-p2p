<template>
  <v-card class="video-form__card mx-auto">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title> {{ rtcClient.localPeerName }} </v-card-title>

    <v-card-actions>
      <v-btn icon @click="switchVolume">
        <v-icon v-show="volume">mdi-volume-high</v-icon>
        <v-icon v-show="!volume">mdi-volume-off</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    rtcClient: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const volume = ref(true)
    const switchVolume = () => {
      volume.value = !volume.value
    }
    return {
      volume,
      switchVolume,
    }
  },
})
</script>

<style scoped lang="scss">
.video-form {
  &__card {
    max-width: 344px;
  }
}
</style>
