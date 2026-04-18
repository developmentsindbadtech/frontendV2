import { useDPM } from '~/composables/api/useDPM'

export const useAppAuthStore = defineStore(
  'additional_auth',
  () => {
    const { data: session, status, signOut: authSignOut } = useAuth()
    const dpmToken = ref<string | null>(null)
    const alkhabeerToken = ref<string | null>(null)
    const dpm = useDPM()

    const authUser = computed(() => session.value?.user)
    const isAuthenticated = computed(() => status.value === 'authenticated')

    // Bot token is typically returned in the login response and stored in the session
    const botToken = computed(() => (session.value as any)?.botToken)

    const clearSessionState = () => {
      dpmToken.value = null
      alkhabeerToken.value = null
    }

    const logout = async (shouldRedirect = true) => {
      clearSessionState()
      await authSignOut({ redirect: false })
      if (shouldRedirect) {
        await navigateTo('/login', { replace: true })
      }
    }

    const dpmLogin = async (credentials: any) => {
      try {
        const response = await dpm.login(credentials)
        dpmToken.value = (response as Record<string, any>).token
        return response
      } catch (error) {
        console.error('DPM Login failed:', error)
        throw error
      }
    }

    return {
      authUser,
      isAuthenticated,
      botToken,
      dpmToken,
      alkhabeerToken,
      logout,
      dpmLogin,
      clearSessionState,
    }
  },
  {
    persist: true,
  },
)
