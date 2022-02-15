<template>
  <v-layout>
    <video-local :rtc-client="rtcClient" />
    <video-remote :rtc-client="rtcClient" />
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    rtcClient: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log('props')
    console.log(props)
    return {}
  },
})
</script>
