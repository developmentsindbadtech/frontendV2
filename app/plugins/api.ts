import type { ApiInstances } from '~/types/api/plugin'
import { APP_ENV_LOCAL } from '~/lib/const'

interface ApiClientOptions {
  baseURL: string
  getToken: () => string | null | undefined
  onAuthError: (status: number) => void
}

function createApiClient(options: ApiClientOptions) {
  return $fetch.create({
    baseURL: options.baseURL,

    onRequest({ options: fetchOptions }) {
      const token = options.getToken()
      if (token) {
        const headers = new Headers(fetchOptions.headers as HeadersInit)
        headers.set('Authorization', `Bearer ${token}`)
        fetchOptions.headers = headers
      }
    },

    onResponseError({ response }) {
      if (response.status === 401 || response.status === 403) {
        options.onAuthError(response.status)
      }
    },
  })
}

export default defineNuxtPlugin({
  name: 'api',
  setup() {
    const config = useRuntimeConfig()
    const authStore = useAppAuthStore()

    const backendBaseUrl =
      config.public.appEnv === APP_ENV_LOCAL
        ? config.public.backendEndpointlocal
        : config.public.backendEndpoint

    const api: ApiInstances = {
      backend: createApiClient({
        baseURL: backendBaseUrl as string,
        getToken: () => authStore.token,
        onAuthError: () => {
          authStore.logout()
        },
      }),

      dpm: createApiClient({
        baseURL: config.public.dpmEndpoint as string,
        getToken: () => authStore.dpmToken,
        onAuthError: () => {
          authStore.dpmToken = null
          navigateTo('/sample/auth/login')
        },
      }),

      alkhabeer: createApiClient({
        baseURL: config.public.alkhabeerEndpoint as string,
        getToken: () => authStore.alkhabeerToken,
        onAuthError: () => {
          authStore.alkhabeerToken = null
          navigateTo('/sample/auth/login')
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
