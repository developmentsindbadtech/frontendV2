export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const authHeader = getHeader(event, 'Authorization')

  if (!authHeader) {
    return { message: 'Already logged out' }
  }

  const baseUrl = config.public.appEnv === 'local'
    ? config.public.backendEndpointlocal
    : config.public.backendEndpoint

  const logoutUrl = `${baseUrl}/logout`

  try {
    const response = await $fetch(logoutUrl, {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        Accept: 'application/json',
      },
    })

    return response
  } catch (error: any) {
    // Even if backend logout fails, we want the client to clear its session
    console.error('Backend logout failed:', error.message)
    return { message: 'Logged out locally' }
  }
})
