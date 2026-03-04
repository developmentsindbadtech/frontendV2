import tailwindcss from '@tailwindcss/vite'
import { env } from 'node:process'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     link: [
  //       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  //       // or PNG:
  //       // { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  //     ],
  //   },
  // },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
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
      backendEndpointlocal: env.LOCAL_BACKEND_ENDPOINT,
      alkhabeerEndpoint: env.ALKHABER_ENDPOINT,
      dpmEndpoint: env.DPM_ENDPOINT,
      appEnv: env.APP_ENV,
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
