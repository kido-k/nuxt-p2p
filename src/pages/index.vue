<template>
  <div>
    <input-form-layout v-if="showInputForm" @setNames="setNames" />
    <video-layout v-else :rtc-client="rtcClient" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'

interface names {
  localName: string
  remoteName: string
}
interface rtcClient {
  localPeerName: string
  remotePeerName: string
}

export default defineComponent({
  setup() {
    const showInputForm = ref(true)
    const rtcClient = reactive<rtcClient>({
      localPeerName: '',
      remotePeerName: '',
    })
    const setNames = ({ localName, remoteName }: names) => {
      rtcClient.localPeerName = localName
      rtcClient.remotePeerName = remoteName
      showInputForm.value = false
    }
    return {
      rtcClient,
      showInputForm,
      setNames,
    }
  },
})
</script>
