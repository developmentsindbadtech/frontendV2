import { useAppAuthStore } from '~/stores/useAppAuthStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAppAuthStore()

  const publicPages = ['/login', '/register', '/login/forgot-password']
  const isPublicPage = publicPages.includes(to.path)
  const hasValidSession = authStore.ensureSession()

  if (isPublicPage && hasValidSession) {
    return navigateTo('/dashboard', { replace: true })
  }

  if (!isPublicPage && !hasValidSession) {
    return navigateTo('/login', { replace: true })
  }

  if (!isPublicPage && hasValidSession) {
    authStore.extendSession()
  }
})
