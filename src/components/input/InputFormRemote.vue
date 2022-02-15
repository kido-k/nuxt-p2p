<template>
  <v-form ref="form" class="input-form" @submit.prevent="setRemoteName">
    <v-card flat class="input-form__card">
      <v-text-field
        v-model="name"
        placeholder="相手の名前を入力してください"
        required
        outlined
      />
      <v-layout align-center justify-center>
        <v-btn :disabled="!name" type="submit"> 決定 </v-btn>
      </v-layout>
    </v-card>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props, context: SetupContext) {
    const name = ref('')
    const setRemoteName = () => {
      context.emit('setRemoteName', name.value)
    }
    return {
      name,
      setRemoteName,
    }
  },
})
</script>

<style scoped lang="scss">
.input-form {
  margin: 120px;
  &__card {
    max-width: 600px;
    margin: auto;
    padding: 24px;
  }
}
</style>
