export default defineNuxtRouteMiddleware((to, from) => {
  const { authUser } = useAppAuthStore()

  if (!authUser && to.path === '/sample/auth/login') return
  else if (authUser && to.path === '/sample/auth/login') return navigateTo('/')

  if (!authUser) {
    return navigateTo('/sample/auth/login')
  }
})
