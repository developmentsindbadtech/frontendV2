import type { $Fetch } from 'ofetch'

export interface ApiInstances {
  backend: $Fetch
  dpm: $Fetch
  alkhabeer: $Fetch
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
