export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const authHeader = getHeader(event, 'Authorization')

  if (!authHeader) {
    throw createError({
      statusCode: 401,
      statusMessage: 'No authorization header provided',
    })
  }

  const baseUrl = config.public.appEnv === 'local'
    ? config.public.backendEndpointlocal
    : config.public.backendEndpoint

  const validateUrl = `${baseUrl}/auth/validate-token`

  try {
    const response = await $fetch<{ valid: boolean; user: any; message: string }>(validateUrl, {
      method: 'GET',
      headers: {
        Authorization: authHeader,
        Accept: 'application/json',
      },
    })

    if (!response.valid) {
      throw createError({
        statusCode: 401,
        statusMessage: response.message || 'Invalid token',
      })
    }

    // NuxtAuth expects the user object directly
    return response.user
  } catch (error: any) {
    const statusCode = error?.response?.status || 500
    const message = error?.response?._data?.message || error?.message || 'Session validation failed'

    throw createError({
      statusCode,
      statusMessage: message,
    })
  }
})
