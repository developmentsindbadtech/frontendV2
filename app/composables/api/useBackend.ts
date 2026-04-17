import type { Credentials } from '~/types/api/backend'

export const useBackend = () => {
  const config = useRuntimeConfig()

  const getBackendUrl = () => {
    return config.public.appEnv === 'local'
      ? config.public.backendEndpointlocal
      : config.public.backendEndpoint
  }

  const login = async (credentials: Credentials) => {
    try {
      console.log('🚀 Sending login request to internal auth proxy: /api/auth/login')

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      const contentType = response.headers.get('content-type')
      const responseText = await response.text()

      console.log('📊 Response status:', response.status)
      console.log('📊 Response headers:', {
        contentType: response.headers.get('content-type'),
        corsAllowOrigin: response.headers.get('access-control-allow-origin'),
      })
      console.log('📊 Full response text:', responseText)

      if (!response.ok) {
        let message = `Login failed with status ${response.status}`
        if (contentType && contentType.includes('application/json')) {
          try {
            const errorData = JSON.parse(responseText)
            message = errorData.message || message
          } catch {
            // fall back to default message
          }
        }
        throw new Error(message)
      }

      if (contentType && contentType.includes('application/json')) {
        const data = JSON.parse(responseText)
        console.log('✅ Login response received:', data)
        console.log('Response keys:', Object.keys(data || {}))
        return data
      } else {
        console.error('❌ Response is not JSON!')
        console.error('Content-Type:', contentType)
        console.error('Response preview:', responseText.substring(0, 500))
        throw new Error(`Expected JSON but got ${contentType}. The backend might not be accessible or returned an error page.`)
      }
    } catch (error: any) {
      console.error('❌ Login API error:', error.message)
      throw error
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
