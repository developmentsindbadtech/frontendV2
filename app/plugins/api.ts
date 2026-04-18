import type { ApiInstances, ApiClientOptions } from '~/types/api/plugin'
import { APP_ENV_LOCAL } from '~/lib/const'
import { useAppAuthStore } from '~/stores/useAppAuthStore'

function createApiClient(clientOptions: ApiClientOptions) {
  const client = $fetch.create({
    baseURL: clientOptions.baseURL,
    onRequest({ request, options: fetchOptions }) {
      console.log('📡 API Request:', request)
      console.log('📡 Base URL:', clientOptions.baseURL)
      const token = clientOptions.getToken?.()
      if (token) {
        if (!fetchOptions.headers) {
          fetchOptions.headers = {}
        }
        const headers = new Headers(fetchOptions.headers as HeadersInit)
        headers.set('Authorization', `Bearer ${token}`)
        fetchOptions.headers = headers
      }
    },
    onResponseError({ response }) {
      console.error('❌ API Response Error:', response.status)
      if (response.status === 401 || response.status === 403) {
        clientOptions.onAuthError(response.status)
      }
    },
  })

  return client
}

export default defineNuxtPlugin({
  name: 'api',
  setup() {
    const config = useRuntimeConfig()
    const authStore = useAppAuthStore()

    console.log('🔧 Initializing API Plugin')
    console.log('App Environment:', config.public.appEnv)
    console.log('Backend Endpoint (local):', config.public.backendEndpointlocal)

    const backendBaseUrl =
      config.public.appEnv === APP_ENV_LOCAL
        ? config.public.backendEndpointlocal
        : config.public.backendEndpoint

    console.log('Using Backend URL:', backendBaseUrl)

    const { token: authToken, signOut } = useAuth()

    const api: ApiInstances = {
      backend: createApiClient({
        baseURL: backendBaseUrl as string,
        getToken: () => {
          const t = authToken.value
          if (!t) return null
          // nuxt-auth might store it with "Bearer " prefix if configured, 
          // but usually it's just the raw token from the response pointer.
          return t.replace('Bearer ', '')
        },
        onAuthError: () => {
          signOut()
        },
      }),


      dpm: createApiClient({
        baseURL: config.public.dpmEndpoint as string,
        getToken: () => authStore.dpmToken,
        onAuthError: () => {
          authStore.dpmToken = null
          navigateTo('/login')
        },
      }),

      alkhabeer: createApiClient({
        baseURL: config.public.alkhabeerEndpoint as string,
        getToken: () => authStore.alkhabeerToken,
        onAuthError: () => {
          authStore.alkhabeerToken = null
          navigateTo('/login')
        },
      }),
    }

    return {
      provide: {
        api,
      },
    }
  },
})
