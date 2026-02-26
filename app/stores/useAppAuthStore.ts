import { useBackend } from '~/composables/api/useBackend'

export const useAppAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref()
    const botToken = ref()
    const token = ref()
    const backend = useBackend()

    const login = async (email: string, password: string) => {
      let response = null

      try {
        response = await backend.login(email, password)
        authUser.value = (response as Record<string, any>).user
        botToken.value = (response as Record<string, any>).botToken
        token.value = (response as Record<string, any>).token
      } catch (error) {
        console.error(error)
        throw new Error('Login failed')
      }

      return response
    }

    return {
      login,
      authUser,
      botToken,
      token,
    }
  },
  {
    persist: true,
  },
)
