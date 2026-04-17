import type { Credentials } from '~/types/api/backend'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody<Credentials>(event)

    const baseUrl = config.public.appEnv === 'local'
        ? config.public.backendEndpointlocal
        : config.public.backendEndpoint

    const loginUrl = `${baseUrl}/login`

    try {
        const response = await $fetch<Record<string, any>>(loginUrl, {
            method: 'POST',
            body,
            headers: {
                Accept: 'application/json',
            },
        })

        return response
    } catch (error: any) {
        const statusCode = error?.response?.status || 500
        const message = error?.response?._data?.message || error?.message || 'Login failed'

        throw createError({
            statusCode,
            statusMessage: message,
            data: error?.response?._data,
        })
    }
})
