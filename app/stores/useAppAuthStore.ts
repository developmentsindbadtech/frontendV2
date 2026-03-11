import { useBackend } from '~/composables/api/useBackend'
import { useDPM } from '~/composables/api/useDPM'
import type { Credentials } from '~/types/api/backend'

export const useAppAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref()
    const botToken = ref()
    const token = ref()
    const dpmToken = ref()
    const alkhabeerToken = ref()
    const backend = useBackend()
    const dpm = useDPM()

    const login = async (credentials: Credentials) => {
      let response = null

      try {
        response = await backend.login(credentials)
        authUser.value = (response as Record<string, any>).user
        botToken.value = (response as Record<string, any>).botToken
        token.value = (response as Record<string, any>).token
      } catch (error) {
        console.error(error)
        throw new Error('Login failed')
      }

      return response
    }

    const dpmLogin = async (credentials: Credentials) => {
      let response = null

      try {
        response = await dpm.login(credentials)
        dpmToken.value = (response as Record<string, any>).token
      } catch (error) {
        console.error(error)
        throw new Error('Login failed')
      }

      return response
    }

    const logout = () => {
      authUser.value = null
      botToken.value = null
      token.value = null
      dpmToken.value = null
      alkhabeerToken.value = null
      navigateTo('/sample/auth/login')
    }

    return {
      login,
      logout,
      authUser,
      botToken,
      token,
      dpmLogin,
      dpmToken,
      alkhabeerToken,
    }
  },
  {
    persist: true,
  },
)
