<template>
  <section>
    <input-form-local v-if="localName === ''" @setLocalName="setLocalName" />
    <input-form-remote
      v-if="localName !== '' && remoteName === ''"
      @setRemoteName="setRemoteName"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props, context: SetupContext) {
    const localName = ref('')
    const remoteName = ref('')
    const setLocalName = (name: string) => {
      localName.value = name
    }
    const setRemoteName = (name: string) => {
      remoteName.value = name
      context.emit('setNames', {
        localName: localName.value,
        remoteName: remoteName.value,
      })
    }
    return {
      localName,
      remoteName,
      setLocalName,
      setRemoteName,
    }
  },
})
</script>
