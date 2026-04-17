import tailwindcss from '@tailwindcss/vite'

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
  devServer: {
    port: 5173,
  },
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
      backendEndpoint: process.env.NUXT_PUBLIC_BACKEND_ENDPOINT || 'http://127.0.0.1:8000/api',
      backendEndpointlocal: process.env.NUXT_PUBLIC_LOCAL_BACKEND_ENDPOINT || 'http://127.0.0.1:8000/api',
      alkhabeerEndpoint: process.env.NUXT_PUBLIC_ALKHABER_ENDPOINT || '',
      dpmEndpoint: process.env.NUXT_PUBLIC_DPM_ENDPOINT || '',
      appEnv: process.env.NUXT_PUBLIC_APP_ENV || 'local',
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
