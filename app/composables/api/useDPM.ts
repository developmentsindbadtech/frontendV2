import type { Credentials } from '~/types/api/backend'

export const useDPM = () => {
  const login = async (credentials: Credentials) => {
    const { $api } = useNuxtApp()
    try {
      const response = await $api.dpm('/login', {
        method: 'POST',
        body: credentials,
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
