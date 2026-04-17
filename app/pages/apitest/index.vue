<template>
    <div class="api-test-container">
        <div class="test-card">
            <h1>API Test Utility</h1>
            <p class="description">Test the backend API connection and see the exact response format.</p>

            <div class="test-section">
                <h2>0. Current Configuration</h2>
                <div class="config-display">
                    <p><strong>Backend Endpoint:</strong> <code>{{ config.public.backendEndpointlocal }}</code></p>
                    <p><strong>Environment:</strong> <code>{{ config.public.appEnv }}</code></p>
                    <p class="note">Make sure the backend is running at the endpoint above. Check your `.env.local` file
                        if this is incorrect.</p>
                </div>
            </div>

            <div class="test-section">
                <h2>1. Test Backend Connection</h2>
                <button :disabled="testing" class="btn-test" @click="testConnection">
                    {{ testing ? 'Testing...' : 'Test Connection' }}
                </button>
                <div v-if="connectionResult" :class="['result', connectionResult.status]">
                    <strong>Status:</strong> {{ connectionResult.message }}
                </div>
            </div>

            <div class="test-section">
                <h2>2. Test Login Endpoint</h2>
                <div class="form-group">
                    <input v-model="testEmail" type="email" placeholder="Enter test email" class="form-input" />
                </div>
                <div class="form-group">
                    <input v-model="testPassword" type="password" placeholder="Enter test password"
                        class="form-input" />
                </div>
                <button :disabled="testing || !testEmail || !testPassword" class="btn-test" @click="testLogin">
                    {{ testing ? 'Testing...' : 'Test Login' }}
                </button>
                <div v-if="loginResult" :class="['result', loginResult.status]">
                    <strong>Status:</strong> {{ loginResult.message }}
                    <pre v-if="loginResult.response"
                        class="response-display">{{ JSON.stringify(loginResult.response, null, 2) }}</pre>
                </div>
            </div>

            <div class="test-section">
                <h2>2b. Test Custom Endpoint (Optional)</h2>
                <p class="note">If the standard /login endpoint doesn't work, try these common alternatives:</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                    <button class="btn-test" @click="testCustomEndpoint('auth/login')">Try /auth/login</button>
                    <button class="btn-test" @click="testCustomEndpoint('authenticate')">Try /authenticate</button>
                    <button class="btn-test" @click="testCustomEndpoint('api/login')">Try /api/login</button>
                    <button class="btn-test" @click="testCustomEndpoint('signin')">Try /signin</button>
                </div>
                <div v-if="customEndpointResult" :class="['result', customEndpointResult.status]">
                    <strong>Tried:</strong> {{ customEndpointResult.url }}<br>
                    <strong>Status:</strong> {{ customEndpointResult.message }}
                </div>
            </div>

            <div v-if="loginResult && loginResult.response" class="test-section">
                <h2>3. Response Structure Analysis</h2>
                <div class="analysis">
                    <div :class="['check', hasUser ? 'success' : 'error']">
                        <span class="icon">{{ hasUser ? '✓' : '✗' }}</span>
                        Has 'user' field: {{ hasUser }}
                    </div>
                    <div :class="['check', hasToken ? 'success' : 'error']">
                        <span class="icon">{{ hasToken ? '✓' : '✗' }}</span>
                        Has 'token' field: {{ hasToken }}
                    </div>
                    <div :class="['check', hasBotToken ? 'success' : 'error']">
                        <span class="icon">{{ hasBotToken ? '✓' : '✗' }}</span>
                        Has 'botToken' field: {{ hasBotToken }}
                    </div>
                </div>
            </div>

            <div class="test-section">
                <h2>4. Storage Management</h2>
                <button class="btn-danger" @click="clearStorage">Clear LocalStorage</button>
                <p v-if="storageCleared" class="success-msg">Storage cleared!</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()
const testEmail = ref('testuser@sindbad.tech')
const testPassword = ref('testpassword')
const testing = ref(false)
const connectionResult = ref<{ status: string; message: string } | null>(null)
const loginResult = ref<{ status: string; message: string; response?: any } | null>(null)
const customEndpointResult = ref<{ status: string; message: string; url: string } | null>(null)
const storageCleared = ref(false)

const { $api } = useNuxtApp()
const config = useRuntimeConfig()

const testConnection = async () => {
    testing.value = true
    connectionResult.value = null
    try {
        const baseUrl = config.public.appEnv === 'local'
            ? config.public.backendEndpointlocal
            : config.public.backendEndpoint

        console.log('Testing connection to:', baseUrl)

        const response = await fetch(`${baseUrl}/login`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })

        if (response.status === 404) {
            connectionResult.value = { status: 'error', message: `✗ Backend endpoint not found - Check BACKEND_ENDPOINT in .env.local` }
        } else if (response.ok || response.status === 401 || response.status === 403 || response.status === 405 || response.status === 422) {
            connectionResult.value = { status: 'success', message: `✓ Backend is reachable (responded with ${response.status})` }
        } else {
            connectionResult.value = { status: 'error', message: `✗ Backend error (${response.status})` }
        }
    } catch (error: any) {
        connectionResult.value = { status: 'error', message: `✗ Cannot reach backend: ${error.message}` }
    } finally {
        testing.value = false
    }
}

const testLogin = async () => {
    testing.value = true
    loginResult.value = null
    try {
        const baseUrl = config.public.appEnv === 'local'
            ? config.public.backendEndpointlocal
            : config.public.backendEndpoint

        const loginUrl = `${baseUrl}/login`
        console.log('Testing login at:', loginUrl)

        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: testEmail.value,
                password: testPassword.value
            })
        })

        const contentType = response.headers.get('content-type')
        let data

        if (contentType && contentType.includes('application/json')) {
            data = await response.json()
        } else {
            const html = await response.text()
            data = {
                error: 'Backend returned HTML instead of JSON',
                hint: `This usually means the endpoint doesn't exist or the backend returned an error page.`,
                statusCode: response.status,
                urlTested: loginUrl,
                responsePreview: html.substring(0, 200) + '...'
            }
        }

        console.log('Login response status:', response.status)
        console.log('Login response data:', data)

        if (response.ok) {
            loginResult.value = {
                status: 'success',
                message: `✓ Login successful (${response.status})`,
                response: data
            }
        } else if (response.status === 404) {
            loginResult.value = {
                status: 'error',
                message: `✗ Endpoint not found (404) - URL: ${loginUrl}`,
                response: data
            }
        } else {
            loginResult.value = {
                status: 'error',
                message: `✗ Login failed (${response.status})`,
                response: data
            }
        }
    } catch (error: any) {
        loginResult.value = {
            status: 'error',
            message: `✗ Login request error: ${error.message}`,
            response: {
                error: 'Failed to parse response',
                details: error.message
            }
        }
    } finally {
        testing.value = false
    }
}

const clearStorage = () => {
    localStorage.clear()
    storageCleared.value = true
    setTimeout(() => { storageCleared.value = false }, 2000)
}

const hasUser = computed(() => {
    if (!loginResult.value?.response) return false
    const response = loginResult.value.response
    return response.user !== undefined || response.data?.user !== undefined
})

const hasToken = computed(() => {
    if (!loginResult.value?.response) return false
    const response = loginResult.value.response
    return response.token !== undefined || response.data?.token !== undefined
})

const hasBotToken = computed(() => {
    if (!loginResult.value?.response) return false
    const response = loginResult.value.response
    return response.botToken !== undefined || response.data?.botToken !== undefined
})

const testCustomEndpoint = async (endpoint: string) => {
    try {
        const baseUrl = config.public.appEnv === 'local'
            ? config.public.backendEndpointlocal
            : config.public.backendEndpoint

        const fullUrl = `${baseUrl}/${endpoint}`
        console.log('Testing custom endpoint:', fullUrl)

        const response = await fetch(fullUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: testEmail.value,
                password: testPassword.value
            })
        })

        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json()
            if (response.ok && data.token) {
                customEndpointResult.value = {
                    status: 'success',
                    message: `✓ Found working endpoint! (${response.status}) - Token received`,
                    url: fullUrl
                }
            } else if (response.ok) {
                customEndpointResult.value = {
                    status: 'warning',
                    message: `Response OK but no token (${response.status})`,
                    url: fullUrl
                }
            } else {
                customEndpointResult.value = {
                    status: 'error',
                    message: `Error response (${response.status})`,
                    url: fullUrl
                }
            }
        } else {
            customEndpointResult.value = {
                status: 'error',
                message: `Not JSON (${response.status})`,
                url: fullUrl
            }
        }
    } catch (error: any) {
        customEndpointResult.value = {
            status: 'error',
            message: `Connection error: ${error.message}`,
            url: endpoint
        }
    }
}

onMounted(() => {
    console.log('API Test Page Loaded')
    console.log('Backend Endpoint (local):', config.public.backendEndpointlocal)
    console.log('App Environment:', config.public.appEnv)
})</script>

<style scoped>
.api-test-container {
    min-height: 100vh;
    background: #f5f5f5;
    padding: 2rem;
    font-family: 'Inter', system-ui, sans-serif;
}

.test-card {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-top: 0;
    color: #333;
    border-bottom: 2px solid #22c9a0;
    padding-bottom: 1rem;
}

h2 {
    color: #555;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.description {
    color: #666;
    margin-bottom: 2rem;
}

.test-section {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 8px;
    border-left: 4px solid #22c9a0;
}

.form-group {
    margin-bottom: 1rem;
}

.form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 0.95rem;
    font-family: inherit;
    color: #333;
    background: white;
}

.form-input::placeholder {
    color: #999;
}

.form-input:focus {
    outline: none;
    border-color: #22c9a0;
    box-shadow: 0 0 0 3px rgba(34, 201, 160, 0.1);
}

.btn-test {
    background: #22c9a0;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.95rem;
    transition: background 0.2s;
}

.btn-test:hover:not(:disabled) {
    background: #1aa87d;
}

.btn-test:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.btn-danger {
    background: #ff6b6b;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.95rem;
    transition: background 0.2s;
}

.btn-danger:hover {
    background: #ff5252;
}

.result {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 6px;
    font-weight: 500;
}

.result.success {
    background: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #4caf50;
}

.result.error {
    background: #ffebee;
    color: #c62828;
    border: 1px solid #f44336;
}

.result.warning {
    background: #fff3e0;
    color: #e65100;
    border: 1px solid #ff9800;
}

.response-display {
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    border: 1px solid #ddd;
}

.analysis {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.check {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
}

.check.success {
    background: #e8f5e9;
    color: #2e7d32;
}

.check.error {
    background: #ffebee;
    color: #c62828;
}

.icon {
    font-weight: 700;
    font-size: 1.1rem;
}

.success-msg {
    color: #2e7d32;
    margin-top: 0.5rem;
    font-weight: 500;
}

code {
    background: #f0f0f0;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
}

.config-display {
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 6px;
    border-left: 4px solid #2196F3;
}

.config-display p {
    margin: 0.5rem 0;
    color: #333;
}

.config-display .note {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #ddd;
    color: #666;
    font-size: 0.9rem;
}
</style>
