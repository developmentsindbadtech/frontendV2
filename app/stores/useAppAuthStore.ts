import { useBackend } from '~/composables/api/useBackend'
import { useDPM } from '~/composables/api/useDPM'
import type { Credentials } from '~/types/api/backend'

export const useAppAuthStore = defineStore(
  'auth',
  () => {
    const SESSION_TTL_MS = 8 * 60 * 60 * 1000

    const authUser = ref()
    const botToken = ref()
    const token = ref()
    const dpmToken = ref()
    const alkhabeerToken = ref()
    const sessionStartedAt = ref<number | null>(null)
    const sessionExpiresAt = ref<number | null>(null)
    const backend = useBackend()
    const dpm = useDPM()

    const clearSessionState = () => {
      authUser.value = null
      botToken.value = null
      token.value = null
      dpmToken.value = null
      alkhabeerToken.value = null
      sessionStartedAt.value = null
      sessionExpiresAt.value = null
    }

    const startSession = () => {
      const now = Date.now()
      sessionStartedAt.value = now
      sessionExpiresAt.value = now + SESSION_TTL_MS
    }

    const isSessionActive = () => {
      if (!authUser.value || !token.value || !sessionExpiresAt.value) {
        return false
      }
      return Date.now() < sessionExpiresAt.value
    }

    const extendSession = () => {
      if (!isSessionActive()) {
        return
      }
      sessionExpiresAt.value = Date.now() + SESSION_TTL_MS
    }

    const ensureSession = () => {
      if (!authUser.value || !token.value) {
        return false
      }

      // Backward compatibility for persisted sessions created before expiry tracking.
      if (!sessionExpiresAt.value) {
        startSession()
        return true
      }

      if (Date.now() >= sessionExpiresAt.value) {
        clearSessionState()
        return false
      }

      return true
    }

    const login = async (credentials: Credentials) => {
      let response = null

      try {
        response = await backend.login(credentials)
        console.log('Auth store - Login successful, full response:', JSON.stringify(response, null, 2))

        // Handle different response formats
        let userData, tokenValue, botTokenValue

        // Check if response is wrapped in 'data' key (common Laravel format)
        const responseData = (response as Record<string, any>).data || response as Record<string, any>

        console.log('Response data object:', JSON.stringify(responseData, null, 2))

        userData = responseData.user
        tokenValue = responseData.token
        botTokenValue = responseData.botToken

        console.log('Extracting user:', userData)
        console.log('Extracting token:', tokenValue)
        console.log('Extracting botToken:', botTokenValue)
        console.log('Response keys:', Object.keys(responseData))

        if (!tokenValue) {
          console.warn('⚠️ Warning: No token found in response.')
          console.warn('Response structure:', responseData)
          console.warn('Available keys:', Object.keys(responseData))
          throw new Error('No authentication token received from server')
        }

        authUser.value = userData || null
        botToken.value = botTokenValue || null
        token.value = tokenValue
        startSession()

        console.log('✅ Auth store updated - authUser:', authUser.value, 'token:', tokenValue)
      } catch (error) {
        console.error('❌ Auth store login error:', error)
        throw error
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

    const logout = (shouldRedirect = true) => {
      clearSessionState()
      if (shouldRedirect) {
        navigateTo('/login', { replace: true })
      }
    }

    return {
      login,
      logout,
      authUser,
      botToken,
      token,
      sessionStartedAt,
      sessionExpiresAt,
      ensureSession,
      isSessionActive,
      extendSession,
      dpmLogin,
      dpmToken,
      alkhabeerToken,
    }
  },
  {
    persist: true,
  },
)
