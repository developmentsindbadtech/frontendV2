import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
  },
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
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        getSession: { path: '/user', method: 'get' },
      },
      token: {
        signInResponseTokenPointer: '/token',
        type: 'Bearer',
        headerName: 'Authorization',
        maxAgeInSeconds: 28800,
      },
      pages: {
        login: '/login',
      },
      sessionDataType: {
        id: 'string | number',
        name: 'string',
        email: 'string',
        botToken: 'string',
      },
    },
    globalAppMiddleware: true,
  },

  colorMode: {
    classSuffix: '',
  },
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', language: 'en-US', dir: 'ltr' },
      { code: 'ar', file: 'ar.json', language: 'ar-SA', dir: 'rtl' },
    ],
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'sindbad_locale',
      redirectOn: 'root',
    },
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
