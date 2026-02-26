export const useBackend = () => {
  const config = useRuntimeConfig()
  const baseUrl =
    config.public.appEnv === 'local'
      ? config.public.backendEndpointlocal
      : config.public.backendEndpoint

  const login = async (email: string, password: string) => {
    try {
      const response = await $fetch(`${baseUrl}/login`, {
        method: 'POST',
        body: { email, password },
      })

      return response
    } catch (error) {
      console.error(error)
      throw new Error('Login failed')
    }
  }

  return {
    login,
  }
}
