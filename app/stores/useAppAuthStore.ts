export const useAppAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref()
    const botToken = ref()
    const token = ref()
    const login = async (email: string, password: string) => {
      let response = null
      try {
        const config = useRuntimeConfig()
        const baseUrl =
          config.public.appEnv === 'local'
            ? config.public.backendEndpointlocal
            : config.public.backendEndpoint

        response = await $fetch(`${baseUrl}/login`, {
          method: 'POST',
          body: { email, password },
        })

        authUser.value = (response as Record<string, any>).user
        botToken.value = (response as Record<string, any>).botToken
        token.value = (response as Record<string, any>).token
      } catch (error) {
        console.error(error)
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
