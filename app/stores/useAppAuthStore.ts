export const useAppAuthStore = defineStore('auth', () => {
  const login = async (email: string, password: string) => {
    try {
      const config = useRuntimeConfig()
      const baseUrl =
        config.public.appEnv === 'local'
          ? config.public.backendEndpointlocal
          : config.public.backendEndpoint

      const response = await useFetch(`${baseUrl}/login`, {
        method: 'POST',
        body: { email, password },
      })

      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    login,
  }
})
