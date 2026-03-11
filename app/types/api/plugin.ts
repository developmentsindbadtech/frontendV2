import type { $Fetch } from 'ofetch'

export interface ApiInstances {
  backend: $Fetch
  dpm: $Fetch
  alkhabeer: $Fetch
}
export interface ApiClientOptions {
  baseURL: string
  getToken: () => string | null | undefined
  onAuthError: (status: number) => void
}

declare module '#app' {
  interface NuxtApp {
    $api: ApiInstances
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: ApiInstances
  }
}

export {}
