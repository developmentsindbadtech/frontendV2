import tailwindcss from '@tailwindcss/vite'
import { env } from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@pinia/nuxt',
    // '@sidebase/nuxt-auth',
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      backendEndpoint: env.BACKEND_ENDPOINT,
      alkhabeerEndpoint: env.ALKHABER_ENDPOINT,
      dpmEndpoint: env.DPM_ENDPOINT,
    },
  },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss() as any],
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
})
