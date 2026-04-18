<script setup lang="ts">
const { signIn } = useAuth()

definePageMeta({
  layout: false,
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/dashboard',
  },
})


const lang = ref('en')
const showPassword = ref(false)
const preloading = ref(true)
const loading = ref(false)
const error = ref('')
const statusMsg = ref('')
const errors = ref<Record<string, string>>({})
const emailTouched = ref(false)
const emailInput = ref<HTMLInputElement | null>(null)

const form = ref({
  email: '',
  password: '',
  remember: false,
})

const toggleLang = () => {
  lang.value = lang.value === 'en' ? 'ar' : 'en'
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleLogin = async () => {
  errors.value = {}
  if (!form.value.email) {
    errors.value.email = lang.value === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب'
    emailInput.value?.focus()
    return
  }
  if (!form.value.password) {
    errors.value.password = lang.value === 'en' ? 'Password is required' : 'كلمة المرور مطلوبة'
    return
  }

  loading.value = true
  error.value = ''
  try {
    const res = await signIn('local', {
      email: form.value.email,
      password: form.value.password,
      redirect: false,
    })

    if (res?.error) {
      throw new Error(res.error)
    }

    await navigateTo('/dashboard', { replace: true })
  } catch (err: any) {
    if (err.data?.errors) {
      errors.value = err.data.errors
    }
    error.value =
      err.data?.message ||
      err.message ||
      (lang.value === 'en'
        ? 'Invalid email or password. Please try again.'
        : 'بريد إلكتروني أو كلمة مرور غير صحيحة. حاول مرة أخرى.')
  } finally {
    loading.value = false
  }
}


onMounted(() => {
  setTimeout(() => {
    preloading.value = false
  }, 600)
})
</script>
<template>
  <div class="auth-page" :dir="lang === 'ar' ? 'rtl' : 'ltr'">
    <a href="#login-form" class="skip-link">
      {{ lang === 'en' ? 'Skip to login form' : 'انتقل إلى نموذج تسجيل الدخول' }}
    </a>

    <div class="lang-toggle">
      <button class="btn-lang" @click="toggleLang"
        :aria-label="lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'"
        :title="lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'">
        {{ lang === 'en' ? 'AR' : 'EN' }}
      </button>
    </div>

    <div class="auth-wrapper">
      <div class="card-raised" role="main">
        <div class="row">
          <div class="form-col">
            <div class="form-body">
              <div class="text-center">
                <NuxtLink to="/" aria-label="Sindbad.Tech Home">
                  <img class="auth-logo" src="/images/logo.png" alt="Sindbad.Tech Logo" />
                </NuxtLink>
                <p class="welcome-heading">
                  {{ lang === 'en' ? 'Welcome Back' : 'مرحبًا بعودتك' }}
                </p>
              </div>

              <Transition name="fade">
                <div v-if="statusMsg" class="status-message" role="status" aria-live="polite">
                  <span class="status-icon material-icon">check_circle</span>
                  {{ statusMsg }}
                </div>
              </Transition>

              <Transition name="slide">
                <div v-if="error" class="error-message" role="alert" aria-live="assertive">
                  <span class="error-icon material-icon">error_outline</span>
                  {{ error }}
                </div>
              </Transition>

              <form id="login-form" class="auth-form" @submit.prevent="handleLogin" novalidate>
                <div class="form-group">
                  <label for="email" class="form-label">
                    <span class="label-icon material-icon">mail</span>
                    {{ lang === 'en' ? 'Email Address' : 'البريد الإلكتروني' }}
                  </label>
                  <input id="email" ref="emailInput" v-model="form.email" type="email" class="form-control" :class="{
                    'is-invalid': errors.email,
                    'is-valid': form.email && !errors.email && emailTouched,
                  }" :placeholder="lang === 'en' ? 'name@company.com' : 'name@company.com'" required autofocus
                    autocomplete="email" aria-describedby="email-error" @blur="emailTouched = true" />
                  <Transition name="slide">
                    <div v-if="errors.email" id="email-error" class="field-error" role="alert">
                      <span class="error-icon material-icon">error</span>
                      {{ errors.email }}
                    </div>
                  </Transition>
                </div>

                <div class="form-group">
                  <label for="password" class="form-label">
                    <span class="label-icon material-icon">lock</span>
                    {{ lang === 'en' ? 'Password' : 'كلمة المرور' }}
                  </label>
                  <div class="input-wrapper">
                    <input id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'"
                      class="form-control has-toggle" :class="{ 'is-invalid': errors.password }"
                      :placeholder="lang === 'en' ? 'Enter your password' : 'أدخل كلمة المرور'" required
                      autocomplete="current-password" aria-describedby="password-error" />
                    <button type="button" class="password-toggle" @click="togglePassword" :aria-label="showPassword
                      ? lang === 'en'
                        ? 'Hide password'
                        : 'إخفاء كلمة المرور'
                      : lang === 'en'
                        ? 'Show password'
                        : 'إظهار كلمة المرور'
                      ">
                      <svg class="eye-icon" :class="{ 'eye-closed': showPassword }" width="22" height="22"
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="eye-top" d="M1 12s4-8 11-8 11 8 11 8" stroke="currentColor" stroke-width="1.8"
                          stroke-linecap="round" stroke-linejoin="round" fill="none" />
                        <path class="eye-bottom" d="M1 12s4 8 11 8 11-8 11-8" stroke="currentColor" stroke-width="1.8"
                          stroke-linecap="round" stroke-linejoin="round" fill="none" />
                        <circle class="eye-iris" cx="12" cy="12" r="3.5" stroke="currentColor" stroke-width="1.8"
                          fill="none" />
                        <circle class="eye-pupil" cx="12" cy="12" r="1.5" fill="currentColor" />
                        <path class="eye-lashes" d="M12 17v2M7.5 15.5l-1.5 1.5M16.5 15.5l1.5 1.5" stroke="currentColor"
                          stroke-width="1.8" stroke-linecap="round" fill="none" />
                      </svg>
                    </button>
                  </div>
                  <Transition name="slide">
                    <div v-if="errors.password" id="password-error" class="field-error" role="alert">
                      <span class="error-icon material-icon">error</span>
                      {{ errors.password }}
                    </div>
                  </Transition>
                </div>

                <div class="options-row">
                  <label class="check-label">
                    <input v-model="form.remember" type="checkbox" class="form-check-input" />
                    <span>{{ lang === 'en' ? 'Remember Me' : 'تذكرني' }}</span>
                  </label>
                  <NuxtLink to="/login/forgot-password" class="forgot-link">
                    {{ lang === 'en' ? 'Forgot Password?' : 'نسيت كلمة المرور؟' }}
                  </NuxtLink>
                </div>

                <button type="submit" class="btn-signin" :class="{ 'btn-loading': loading }"
                  :disabled="loading || !form.email || !form.password" :aria-busy="loading">
                  <span v-if="loading" class="spinner" aria-hidden="true"></span>
                  {{
                    loading
                      ? lang === 'en'
                        ? 'Signing in...'
                        : 'جار تسجيل الدخول...'
                      : lang === 'en'
                        ? 'SIGN IN'
                        : 'تسجيل الدخول'
                  }}
                </button>
              </form>

              <Transition name="fade">
                <div v-if="error" class="error-message" role="alert" aria-live="assertive">
                  <span class="error-icon material-icon">warning</span>
                  <div>
                    <strong>{{ lang === 'en' ? 'Login Failed' : 'فشل تسجيل الدخول' }}</strong>
                    <p>{{ error }}</p>
                  </div>
                </div>
              </Transition>

              <div class="divider">
                <span>{{ lang === 'en' ? 'or' : 'أو' }}</span>
              </div>

              <div class="signup-row">
                <span>{{ lang === 'en' ? "Don't have an account?" : 'ليس لديك حساب؟' }}</span>
                <NuxtLink to="/register" class="btn-signup">
                  {{ lang === 'en' ? 'CREATE ACCOUNT' : 'إنشاء حساب' }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="image-col" aria-hidden="true">
            <div class="image-overlay">
              <img class="hero-image" src="/images/stay-connected.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="auth-footer" role="contentinfo">
      <div class="footer-inner">
        <div class="footer-left">
          Copyright &copy; <a href="/">Sindbad.Tech</a> {{ new Date().getFullYear() }}
        </div>
        <div class="footer-right">
          <a href="/terms" target="_blank" rel="noopener">
            {{ lang === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام' }}
          </a>
          <a href="/privacy" target="_blank" rel="noopener">
            {{ lang === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية' }}
          </a>
        </div>
      </div>
    </footer>

    <Transition name="fade">
      <div v-if="preloading" class="preloader" aria-label="Loading">
        <img src="/images/logo-preloader.png" alt="" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Material+Icons&display=swap');

:global(body) {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.auth-page {
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    sans-serif;
  background: #0f1923;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #e8edf1;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  padding: 0.75rem 1.5rem;
  background: #22c9a0;
  color: #0f1923;
  border-radius: 0 0 0.5rem 0.5rem;
  font-weight: 600;
  text-decoration: none;
  z-index: 100;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 0;
}

.lang-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;
}

.btn-lang {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: #e8edf1;
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.25s ease;
  backdrop-filter: blur(8px);
}

.btn-lang:hover {
  background: #22c9a0;
  border-color: #22c9a0;
  color: #0f1923;
  transform: scale(1.05);
}

.btn-lang:focus-visible {
  outline: 2px solid #22c9a0;
  outline-offset: 2px;
}

.auth-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
}

.card-raised {
  width: 100%;
  max-width: 1060px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.15),
    0 20px 40px rgba(0, 0, 0, 0.25);
}

.row {
  display: flex;
  flex-wrap: wrap;
  min-height: 560px;
}

.form-col {
  flex: 0 0 42%;
  max-width: 42%;
}

.form-body {
  background: #1a2836;
  padding: 3rem 2.5rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.text-center {
  text-align: center;
}

.auth-logo {
  height: 48px;
  margin-bottom: 0.75rem;
  transition: opacity 0.2s;
}

.auth-logo:hover {
  opacity: 0.85;
}

.welcome-heading {
  color: #8fa3b3;
  font-size: 0.88rem;
  font-weight: 400;
  margin: 0 0 2rem;
  letter-spacing: 0.02em;
}

.auth-form {
  margin-bottom: 1.25rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: #8fa3b3;
  letter-spacing: 0.02em;
}

.label-icon {
  font-size: 1rem;
  opacity: 0.7;
}

.form-control {
  width: 100%;
  padding: 0.85rem 1rem;
  font-family: inherit;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.75rem;
  color: #e8edf1;
  box-sizing: border-box;
  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    background 0.2s;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.28);
}

.form-control:hover {
  border-color: rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.07);
}

.form-control:focus {
  outline: none;
  border-color: #22c9a0;
  box-shadow: 0 0 0 3px rgba(34, 201, 160, 0.15);
  background: rgba(255, 255, 255, 0.07);
}

.form-control.is-valid {
  border-color: #22c9a0;
}

.form-control.is-invalid {
  border-color: #ef5350;
  box-shadow: 0 0 0 3px rgba(239, 83, 80, 0.12);
}

input[type='password']::-ms-reveal,
input[type='password']::-webkit-credentials-auto-fill-button {
  display: none;
}

.input-wrapper {
  position: relative;
}

.input-wrapper .form-control.has-toggle {
  padding-right: 3rem;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #8fa3b3;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.375rem;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.password-toggle:hover {
  color: #e8edf1;
}

.password-toggle:focus-visible {
  outline: 2px solid #22c9a0;
  outline-offset: 2px;
}

.eye-icon .eye-iris,
.eye-icon .eye-pupil {
  transition: opacity 0.25s ease, transform 0.3s ease;
  transform: translateX(-2.5px);
}

.eye-icon .eye-top,
.eye-icon .eye-bottom {
  transition: d 0.3s ease;
}

.eye-icon .eye-lashes {
  opacity: 0;
  transition: opacity 0.25s ease;
}

.eye-icon.eye-closed .eye-top {
  d: path('M1 12s4 0 11 0 11 0 11 0');
}

.eye-icon.eye-closed .eye-bottom {
  d: path('M1 12s4 0 11 0 11 0 11 0');
}

.eye-icon.eye-closed .eye-iris,
.eye-icon.eye-closed .eye-pupil {
  opacity: 0;
  transform: translateY(2px);
}

.eye-icon.eye-closed .eye-lashes {
  opacity: 1;
}

.material-icon {
  font-family: 'Material Icons';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: normal;
  -webkit-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
  line-height: 1;
}

.field-error {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.4rem;
  font-size: 0.78rem;
  color: #ef5350;
}

.error-icon {
  font-size: 0.95rem;
}

.options-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.check-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8fa3b3;
  font-size: 0.85rem;
  cursor: pointer;
  transition: color 0.2s;
}

.check-label:hover {
  color: #e8edf1;
}

.form-check-input {
  width: 1.1rem;
  height: 1.1rem;
  cursor: pointer;
  accent-color: #22c9a0;
  border-radius: 0.25rem;
}

.forgot-link {
  color: #22c9a0;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    color 0.2s,
    text-decoration 0.2s;
}

.forgot-link:hover {
  color: #1db08a;
  text-decoration: underline;
}

.forgot-link:focus-visible {
  outline: 2px solid #22c9a0;
  outline-offset: 2px;
  border-radius: 0.25rem;
}

.btn-signin {
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(135deg, #22c9a0, #1a9d80);
  color: #0f1923;
  border: none;
  border-radius: 0.75rem;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}

.btn-signin:hover:not(:disabled) {
  background: linear-gradient(135deg, #28d4aa, #22c9a0);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(34, 201, 160, 0.3);
}

.btn-signin:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(34, 201, 160, 0.2);
}

.btn-signin:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}

.btn-signin:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

.btn-loading {
  pointer-events: none;
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(15, 25, 35, 0.3);
  border-top-color: #0f1923;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-right: 0.5rem;
  vertical-align: middle;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0.85rem 1rem;
  background: rgba(239, 83, 80, 0.08);
  border: 1px solid rgba(239, 83, 80, 0.2);
  border-left: 3px solid #ef5350;
  border-radius: 0.5rem;
  color: #ff8a80;
  font-size: 0.85rem;
  line-height: 1.5;
}

.error-message .error-icon {
  font-size: 1.3rem;
  color: #ef5350;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.error-message strong {
  display: block;
  margin-bottom: 0.15rem;
  color: #ef5350;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.error-message p {
  margin: 0;
}

.status-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.65rem;
  background: rgba(34, 201, 160, 0.08);
  border: 1px solid rgba(34, 201, 160, 0.2);
  border-radius: 0.5rem;
  color: #22c9a0;
  font-size: 0.88rem;
}

.status-icon {
  font-size: 1.1rem;
}

.divider {
  display: flex;
  align-items: center;
  margin: 0.75rem 0 1.25rem;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.divider span {
  padding: 0 1rem;
  color: #5a7182;
}

.signup-row {
  text-align: center;
  font-size: 0.88rem;
  color: #8fa3b3;
}

.btn-signup {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.5rem 1.5rem;
  background: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  color: #e8edf1;
  border-radius: 0.75rem;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.25s;
}

.btn-signup:hover {
  border-color: #22c9a0;
  color: #22c9a0;
  background: rgba(34, 201, 160, 0.05);
}

.btn-signup:focus-visible {
  outline: 2px solid #22c9a0;
  outline-offset: 2px;
}

.image-col {
  flex: 0 0 58%;
  max-width: 58%;
  background: #0c1a2a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.auth-footer {
  padding: 1rem 2rem;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.78rem;
  color: #5a7182;
}

.footer-left a {
  color: #8fa3b3;
  text-decoration: none;
}

.footer-left a:hover {
  color: #22c9a0;
}

.footer-right {
  display: flex;
  gap: 1.5rem;
}

.footer-right a {
  color: #5a7182;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-right a:hover {
  color: #8fa3b3;
}

.preloader {
  position: fixed;
  inset: 0;
  background: #0f1923;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader img {
  animation: pulse 1.2s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.4;
    transform: scale(0.92);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.25s ease;
}

.slide-leave-active {
  transition: all 0.15s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-4px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

[dir='rtl'] .input-wrapper .form-control.has-toggle {
  padding-right: 1rem;
  padding-left: 3rem;
}

[dir='rtl'] .password-toggle {
  right: auto;
  left: 0.75rem;
}

[dir='rtl'] .eye-icon .eye-iris,
[dir='rtl'] .eye-icon .eye-pupil {
  transform: translateX(2.5px);
}

[dir='rtl'] .error-message {
  border-left: none;
  border-right: 3px solid #ef5350;
}

[dir='rtl'] .btn-signup {
  margin-left: 0;
  margin-right: 0.5rem;
}

[dir='rtl'] .spinner {
  margin-right: 0;
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .form-col {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .image-col {
    display: none;
  }

  .form-body {
    padding: 2rem 1.5rem;
  }

  .footer-inner {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .options-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}

@media (max-width: 380px) {
  .form-body {
    padding: 1.5rem 1.25rem;
  }
}

*:focus-visible {
  outline: 2px solid #22c9a0;
  outline-offset: 2px;
}

input:focus-visible {
  outline: none;
}
</style>
