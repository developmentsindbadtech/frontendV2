import type { Credentials } from '~/types/api/backend'

export const useBackend = () => {
  const login = async (credentials: Credentials) => {
    const { $api } = useNuxtApp()
    try {
      const response = await $api.backend('/login', {
        method: 'POST',
        body: credentials,
      })

      return response
    } catch (error) {
      console.error(error)
      throw new Error('Login failed')
    }
  }

  const getUsers = async () => {
    const { $api } = useNuxtApp()
    try {
      const response = await $api.backend('/users', {
        method: 'GET',
      })

      return response
    } catch (error) {
      console.error(error)
      throw new Error('Failed to fetch users')
    }
  }

  return {
    login,
    getUsers,
  }
}
