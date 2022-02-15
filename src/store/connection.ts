import { defineStore } from 'pinia'

export const useConnection = defineStore('connection', {
  state: () => ({
    name: ''
  }),
  actions: {
    setName(val: string) {
      this.name = val
    }
  }
})