<template>
  <div class="auth-page">
    <!-- Language toggle -->
    <div class="lang-toggle">
      <button class="btn-lang" @click="toggleLang">{{ lang === 'en' ? 'AR' : 'EN' }}</button>
    </div>

    <div class="auth-wrapper">
      <div class="card-raised">
        <div class="card-body">
          <!-- Logo -->
          <div class="text-center">
            <NuxtLink to="/">
              <img class="auth-logo" src="/images/logo.png" alt="Sindbad.Tech Logo" />
            </NuxtLink>
          </div>

          <!-- Register form -->
          <form class="auth-form" @submit.prevent="handleRegister">
            <!-- Error banner -->
            <div v-if="error" class="error-banner">
              <strong>Oh Snap!</strong> {{ error }}
            </div>

            <div class="form-row">
              <div class="form-col-half">
                <div class="form-floating">
                  <input
                    id="firstname"
                    v-model="form.firstname"
                    type="text"
                    class="form-control rounded-pill"
                    :class="{ 'is-invalid': errors.firstname }"
                    :placeholder="lang === 'en' ? 'First Name' : 'الاسم الأول'"
                    required
                  />
                  <label for="firstname">{{ lang === 'en' ? 'First Name' : 'الاسم الأول' }}</label>
                  <div v-if="errors.firstname" class="invalid-feedback">{{ errors.firstname }}</div>
                </div>
              </div>
              <div class="form-col-half">
                <div class="form-floating">
                  <input
                    id="lastname"
                    v-model="form.lastname"
                    type="text"
                    class="form-control rounded-pill"
                    :class="{ 'is-invalid': errors.lastname }"
                    :placeholder="lang === 'en' ? 'Last Name' : 'الاسم الأخير'"
                    required
                  />
                  <label for="lastname">{{ lang === 'en' ? 'Last Name' : 'الاسم الأخير' }}</label>
                  <div v-if="errors.lastname" class="invalid-feedback">{{ errors.lastname }}</div>
                </div>
              </div>
            </div>

            <div class="form-floating">
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="form-control rounded-pill"
                :class="{ 'is-invalid': errors.email }"
                :placeholder="lang === 'en' ? 'Email Address' : 'البريد الإلكتروني'"
                required
              />
              <label for="email">{{ lang === 'en' ? 'Email Address' : 'البريد الإلكتروني' }}</label>
              <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
            </div>

            <div class="form-row">
              <div class="form-col-half">
                <div class="input-group">
                  <span class="input-group-text rounded-pill-left" @click="togglePassword">
                    <span class="material-icon">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                  </span>
                  <input
                    id="password"
                    v-model="form.password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control rounded-pill-right"
                    :class="{ 'is-invalid': errors.password }"
                    :placeholder="lang === 'en' ? 'Password' : 'كلمة المرور'"
                    required
                    @input="validatePassword"
                  />
                </div>
                <ul class="pw-rules">
                  <li :class="pwChecks.lower ? 'valid' : 'invalid'">{{ lang === 'en' ? 'At least 1 lowercase [a-z]' : 'حرف صغير واحد على الأقل' }}</li>
                  <li :class="pwChecks.upper ? 'valid' : 'invalid'">{{ lang === 'en' ? 'At least 1 uppercase [A-Z]' : 'حرف كبير واحد على الأقل' }}</li>
                  <li :class="pwChecks.number ? 'valid' : 'invalid'">{{ lang === 'en' ? 'At least 1 number [0-9]' : 'رقم واحد على الأقل' }}</li>
                  <li :class="pwChecks.symbol ? 'valid' : 'invalid'">{{ lang === 'en' ? 'At least 1 symbol' : 'رمز واحد على الأقل' }}</li>
                  <li :class="pwChecks.length ? 'valid' : 'invalid'">{{ lang === 'en' ? 'Minimum 8 characters' : '8 أحرف على الأقل' }}</li>
                </ul>
              </div>
              <div class="form-col-half">
                <div class="input-group">
                  <span class="input-group-text rounded-pill-left" @click="togglePassword2">
                    <span class="material-icon">{{ showPassword2 ? 'visibility_off' : 'visibility' }}</span>
                  </span>
                  <input
                    id="password-confirm"
                    v-model="form.password_confirmation"
                    :type="showPassword2 ? 'text' : 'password'"
                    class="form-control rounded-pill-right"
                    :placeholder="lang === 'en' ? 'Password Confirmation' : 'تأكيد كلمة المرور'"
                    required
                  />
                </div>
                <ul class="pw-rules">
                  <li :class="form.password && form.password === form.password_confirmation ? 'valid' : 'invalid'">
                    {{ lang === 'en' ? 'Passwords must match' : 'يجب أن تتطابق كلمتا المرور' }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="agree-row">
              <label class="check-label">
                <input v-model="form.agree" type="checkbox" class="form-check-input" required />
                <span>
                  {{ lang === 'en' ? 'I agree to the' : 'أوافق على' }}
                  <a href="/terms" target="_blank">{{ lang === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام' }}</a>
                </span>
              </label>
            </div>

            <div class="signup-actions">
              <div class="signin-link">
                {{ lang === 'en' ? 'Already have an account?' : 'لديك حساب بالفعل؟' }}
                <NuxtLink to="/login">{{ lang === 'en' ? 'Sign In instead' : 'تسجيل الدخول' }}</NuxtLink>
              </div>
              <div class="signup-btn-wrap">
                <button type="submit" class="btn-signup-submit" :disabled="loading">
                  {{ loading
                    ? (lang === 'en' ? 'Signing up...' : 'جار التسجيل...')
                    : (lang === 'en' ? 'Sign Up' : 'إنشاء حساب') }}
                </button>
                <a href="/contact" target="_blank" class="help-link">
                  {{ lang === 'en' ? 'Click here for help' : 'انقر هنا للمساعدة' }}
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="auth-footer">
      <div class="footer-inner">
        <div class="footer-left">
          Copyright &copy; <a href="/">Sindbad.Tech</a> {{ new Date().getFullYear() }}
        </div>
        <div class="footer-right">
          <a href="/terms" target="_blank">{{ lang === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام' }}</a>
          <a href="/privacy" target="_blank">{{ lang === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية' }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

definePageMeta({ auth: false })

const lang = ref('en')
const showPassword = ref(false)
const showPassword2 = ref(false)
const loading = ref(false)
const error = ref('')
const errors = ref<Record<string, string>>({})

const form = ref({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: '',
  agree: false
})

const pwChecks = reactive({
  lower: false,
  upper: false,
  number: false,
  symbol: false,
  length: false
})

const toggleLang = () => { lang.value = lang.value === 'en' ? 'ar' : 'en' }
const togglePassword = () => { showPassword.value = !showPassword.value }
const togglePassword2 = () => { showPassword2.value = !showPassword2.value }

const validatePassword = () => {
  const pw = form.value.password
  pwChecks.lower = /[a-z]/.test(pw)
  pwChecks.upper = /[A-Z]/.test(pw)
  pwChecks.number = /[0-9]/.test(pw)
  pwChecks.symbol = /[`$*@!?#%&]/.test(pw)
  pwChecks.length = pw.length >= 8
}

const handleRegister = async () => {
  if (form.value.password !== form.value.password_confirmation) {
    error.value = 'Passwords do not match'
    return
  }

  loading.value = true
  error.value = ''
  errors.value = {}

  const config = useRuntimeConfig()

  try {
    await $fetch(`${config.public.apiBase}/register`, {
      method: 'POST',
      body: {
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        email: form.value.email,
        password: form.value.password,
        password_confirmation: form.value.password_confirmation
      }
    })

    await navigateTo('/login')
  } catch (err: any) {
    if (err.data?.errors) {
      errors.value = err.data.errors
    }
    error.value = err.data?.message || err.message || 'Registration failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Material+Icons&display=swap');

:global(body) { margin: 0; }

.auth-page {
  font-family: 'Roboto', sans-serif;
  background: #0d1b2a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Language toggle */
.lang-toggle {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 0.5rem;
}
.btn-lang {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.3);
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-lang:hover { background: #fff; color: #2299b7; }

/* Wrapper */
.auth-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

/* Card */
.card-raised {
  width: 100%;
  max-width: 780px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow:
    0px 6px 6px -3px rgba(0,0,0,0.2),
    0px 10px 14px 1px rgba(0,0,0,0.14),
    0px 4px 18px 3px rgba(0,0,0,0.12);
}
.card-body {
  background: #222e3a;
  padding: 2.5rem;
}
.text-center { text-align: center; }
.auth-logo {
  height: 48px;
  margin-bottom: 2rem;
}

/* Form elements */
.auth-form { }
.form-floating {
  position: relative;
  margin-bottom: 1rem;
}
.form-floating input {
  width: 100%;
  padding: 1.6rem 1rem 0.6rem;
  font-size: 1rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  box-sizing: border-box;
}
.form-floating label {
  position: absolute;
  top: 0.45rem;
  left: 1rem;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.5);
  pointer-events: none;
}
.rounded-pill { border-radius: 50rem !important; }

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 0;
}
.form-col-half { flex: 1; }

.input-group {
  display: flex;
  margin-bottom: 0.3rem;
}
.input-group-text {
  display: flex;
  align-items: center;
  padding: 0 0.85rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-right: none;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  transition: background 0.2s;
}
.input-group-text:hover { background: rgba(255,255,255,0.15); }
.rounded-pill-left {
  border-top-left-radius: 50rem;
  border-bottom-left-radius: 50rem;
}
.rounded-pill-right {
  border-top-right-radius: 50rem;
  border-bottom-right-radius: 50rem;
}
.input-group .form-control {
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-left: none;
  color: #fff;
  height: 3.5rem;
}
.material-icon {
  font-family: 'Material Icons';
  font-size: 1.3rem;
  font-style: normal;
  font-weight: normal;
  -webkit-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
}
.form-control::placeholder { color: rgba(255,255,255,0.4); }
.form-control:focus {
  outline: none;
  border-color: #2299b7;
  box-shadow: 0 0 0 2px rgba(34,153,183,0.25);
}
.input-group .form-control:focus { box-shadow: none; }
.is-invalid { border-color: #dc3545 !important; }
.invalid-feedback {
  color: #ff6b6b;
  font-size: 0.82rem;
  margin-top: 0.3rem;
}

/* Password rules */
.pw-rules {
  list-style: none;
  padding: 0 0.5rem;
  margin: 0 0 0.8rem;
}
.pw-rules li {
  font-size: 0.75rem;
  margin-bottom: 0.15rem;
}
.pw-rules .invalid { color: #ff6b6b; }
.pw-rules .valid { color: #4caf50; }

/* Agree row */
.agree-row { margin-bottom: 1rem; }
.check-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
}
.check-label a {
  color: #2299b7;
  text-decoration: underline;
}
.form-check-input {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}

/* Error banner */
.error-banner {
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: rgba(220,53,69,0.15);
  color: #ff6b6b;
  border: 1px solid rgba(220,53,69,0.3);
  border-radius: 0.5rem;
  font-size: 0.88rem;
}

/* Signup actions */
.signup-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.signin-link {
  color: #fff;
  font-size: 0.88rem;
  font-weight: 500;
  flex: 1;
}
.signin-link a {
  color: #fff;
  text-decoration: underline;
}
.signup-btn-wrap {
  flex: 1;
  text-align: center;
}
.btn-signup-submit {
  width: 100%;
  padding: 0.85rem;
  background: linear-gradient(135deg, #18b4a0, #2299b7);
  color: #fff;
  border: none;
  border-radius: 50rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-signup-submit:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(24,180,160,0.35);
}
.btn-signup-submit:disabled { opacity: 0.6; cursor: not-allowed; }
.help-link {
  display: block;
  margin-top: 0.4rem;
  color: #fff;
  text-decoration: underline;
  font-size: 0.8rem;
}

/* Footer */
.auth-footer { padding: 1rem 2rem; }
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
}
.footer-left { color: #fff; font-weight: 500; }
.footer-left a { color: #fff; text-decoration: none; }
.footer-right { display: flex; gap: 1.5rem; }
.footer-right a { color: #fff; text-decoration: none; font-weight: 500; }
.footer-right a:hover { text-decoration: underline; }

/* Responsive */
@media (max-width: 768px) {
  .form-row { flex-direction: column; gap: 0; }
  .signup-actions { flex-direction: column; text-align: center; }
  .footer-inner { flex-direction: column; gap: 0.5rem; text-align: center; }
}
</style>
