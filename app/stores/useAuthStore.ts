import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const auth = ref(null)

  return {
    auth,
  }
})
