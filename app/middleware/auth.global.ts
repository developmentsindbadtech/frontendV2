import { useAppAuthStore } from '~/stores/useAppAuthStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAppAuthStore()

  const publicPages = ['/', '/login', '/register', '/login/forgot-password']
  const isPublicPage = publicPages.includes(to.path)
  const hasValidSession = authStore.ensureSession()

  const authPages = ['/login', '/register', '/login/forgot-password']
  const isAuthPage = authPages.includes(to.path)

  if (isAuthPage && hasValidSession) {
    return navigateTo('/dashboard', { replace: true })
  }

  if (!isPublicPage && !hasValidSession) {
    return navigateTo('/login', { replace: true })
  }

  if (!isPublicPage && hasValidSession) {
    authStore.extendSession()
  }
})
