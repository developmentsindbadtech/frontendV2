export default defineNuxtRouteMiddleware((to, from) => {
  const { authUser } = useAppAuthStore()

  if (!authUser && to.path === '/auth/login') return
  else if (authUser && to.path === '/auth/login') return navigateTo('/')

  if (!authUser) {
    return navigateTo('/auth/login')
  }
})
