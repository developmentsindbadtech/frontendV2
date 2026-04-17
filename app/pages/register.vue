<template>
  <div class="auth-page" :dir="lang === 'ar' ? 'rtl' : 'ltr'">
    <!-- Skip to main content (Accessibility) -->
    <a href="#register-form" class="skip-link">
      {{ lang === 'en' ? 'Skip to registration form' : 'انتقل إلى نموذج التسجيل' }}
    </a>

    <!-- Language toggle with tooltip -->
    <div class="lang-toggle">
      <button
        class="btn-lang"
        @click="toggleLang"
        :aria-label="lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'"
        :title="lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'"
      >
        {{ lang === 'en' ? 'AR' : 'EN' }}
      </button>
    </div>

    <div class="auth-wrapper">
      <div class="card-raised" role="main">
        <div class="row">
          <!-- Form column (left) -->
          <div class="form-col">
            <div class="form-body">
              <!-- Logo with clear branding -->
              <div class="text-center">
                <NuxtLink to="/" aria-label="Sindbad.Tech Home">
                  <img class="auth-logo" src="/images/logo.png" alt="Sindbad.Tech Logo" />
                </NuxtLink>
                <p class="welcome-heading">
                  {{ lang === 'en' ? 'Create Your Account' : 'أنشئ حسابك' }}
                </p>
              </div>

              <!-- Error banner with animation -->
              <Transition name="slide">
                <div v-if="error" class="error-message" role="alert" aria-live="assertive">
                  <span class="error-icon material-icon">error_outline</span>
                  {{ error }}
                </div>
              </Transition>

              <!-- Register form -->
              <form id="register-form" class="auth-form" @submit.prevent="handleRegister" novalidate>
                <!-- Name fields (side by side) -->
                <div class="name-row">
                  <div class="form-group half">
                    <label for="firstname" class="form-label">
                      <span class="label-icon material-icon">person</span>
                      {{ lang === 'en' ? 'First Name' : 'الاسم الأول' }}
                    </label>
                    <input
                      id="firstname"
                      ref="firstnameInput"
                      v-model="form.firstname"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.firstname, 'is-valid': form.firstname && !errors.firstname && firstnameTouched }"
                      :placeholder="lang === 'en' ? 'John' : 'محمد'"
                      required
                      autofocus
                      autocomplete="given-name"
                      aria-describedby="firstname-error"
                      @blur="firstnameTouched = true"
                    />
                    <Transition name="slide">
                      <div v-if="errors.firstname" id="firstname-error" class="field-error" role="alert">
                        <span class="error-icon material-icon">error</span>
                        {{ errors.firstname }}
                      </div>
                    </Transition>
                  </div>

                  <div class="form-group half">
                    <label for="lastname" class="form-label">
                      <span class="label-icon material-icon">person_outline</span>
                      {{ lang === 'en' ? 'Last Name' : 'الاسم الأخير' }}
                    </label>
                    <input
                      id="lastname"
                      v-model="form.lastname"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.lastname, 'is-valid': form.lastname && !errors.lastname && lastnameTouched }"
                      :placeholder="lang === 'en' ? 'Doe' : 'أحمد'"
                      required
                      autocomplete="family-name"
                      aria-describedby="lastname-error"
                      @blur="lastnameTouched = true"
                    />
                    <Transition name="slide">
                      <div v-if="errors.lastname" id="lastname-error" class="field-error" role="alert">
                        <span class="error-icon material-icon">error</span>
                        {{ errors.lastname }}
                      </div>
                    </Transition>
                  </div>
                </div>

                <!-- Email field -->
                <div class="form-group">
                  <label for="email" class="form-label">
                    <span class="label-icon material-icon">mail</span>
                    {{ lang === 'en' ? 'Email Address' : 'البريد الإلكتروني' }}
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email, 'is-valid': form.email && !errors.email && emailTouched }"
                    :placeholder="lang === 'en' ? 'name@company.com' : 'name@company.com'"
                    required
                    autocomplete="email"
                    aria-describedby="email-error"
                    @blur="emailTouched = true"
                  />
                  <Transition name="slide">
                    <div v-if="errors.email" id="email-error" class="field-error" role="alert">
                      <span class="error-icon material-icon">error</span>
                      {{ errors.email }}
                    </div>
                  </Transition>
                </div>

                <!-- Password field -->
                <div class="form-group">
                  <label for="password" class="form-label">
                    <span class="label-icon material-icon">lock</span>
                    {{ lang === 'en' ? 'Password' : 'كلمة المرور' }}
                  </label>
                  <div class="input-wrapper">
                    <input
                      id="password"
                      v-model="form.password"
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control has-toggle"
                      :class="{ 'is-invalid': errors.password }"
                      :placeholder="lang === 'en' ? 'Create a strong password' : 'أنشئ كلمة مرور قوية'"
                      required
                      autocomplete="new-password"
                      aria-describedby="password-error password-strength"
                      @input="validatePassword"
                    />
                    <button
                      type="button"
                      class="password-toggle"
                      @click="togglePassword"
                      :aria-label="showPassword
                        ? (lang === 'en' ? 'Hide password' : 'إخفاء كلمة المرور')
                        : (lang === 'en' ? 'Show password' : 'إظهار كلمة المرور')"
                    >
                      <span class="material-icon">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                    </button>
                  </div>

                  <!-- Password strength indicator -->
                  <div id="password-strength" class="pw-strength" role="status" aria-live="polite">
                    <div class="pw-bar-track">
                      <div class="pw-bar-fill" :style="{ width: pwStrengthPercent + '%' }" :class="pwStrengthClass"></div>
                    </div>
                    <span class="pw-strength-label" :class="pwStrengthClass">{{ pwStrengthLabel }}</span>
                  </div>

                  <!-- Password requirements checklist -->
                  <ul class="pw-rules" aria-label="Password requirements">
                    <li :class="pwChecks.lower ? 'valid' : 'pending'">
                      <span class="material-icon rule-icon">{{ pwChecks.lower ? 'check_circle' : 'radio_button_unchecked' }}</span>
                      {{ lang === 'en' ? 'Lowercase letter (a-z)' : 'حرف صغير (a-z)' }}
                    </li>
                    <li :class="pwChecks.upper ? 'valid' : 'pending'">
                      <span class="material-icon rule-icon">{{ pwChecks.upper ? 'check_circle' : 'radio_button_unchecked' }}</span>
                      {{ lang === 'en' ? 'Uppercase letter (A-Z)' : 'حرف كبير (A-Z)' }}
                    </li>
                    <li :class="pwChecks.number ? 'valid' : 'pending'">
                      <span class="material-icon rule-icon">{{ pwChecks.number ? 'check_circle' : 'radio_button_unchecked' }}</span>
                      {{ lang === 'en' ? 'Number (0-9)' : 'رقم (0-9)' }}
                    </li>
                    <li :class="pwChecks.symbol ? 'valid' : 'pending'">
                      <span class="material-icon rule-icon">{{ pwChecks.symbol ? 'check_circle' : 'radio_button_unchecked' }}</span>
                      {{ lang === 'en' ? 'Special character (!@#$...)' : 'رمز خاص (!@#$...)' }}
                    </li>
                    <li :class="pwChecks.length ? 'valid' : 'pending'">
                      <span class="material-icon rule-icon">{{ pwChecks.length ? 'check_circle' : 'radio_button_unchecked' }}</span>
                      {{ lang === 'en' ? 'Minimum 8 characters' : '8 أحرف على الأقل' }}
                    </li>
                  </ul>
                </div>

                <!-- Confirm password field -->
                <div class="form-group">
                  <label for="password-confirm" class="form-label">
                    <span class="label-icon material-icon">lock_outline</span>
                    {{ lang === 'en' ? 'Confirm Password' : 'تأكيد كلمة المرور' }}
                  </label>
                  <div class="input-wrapper">
                    <input
                      id="password-confirm"
                      v-model="form.password_confirmation"
                      :type="showPassword2 ? 'text' : 'password'"
                      class="form-control has-toggle"
                      :class="{
                        'is-invalid': form.password_confirmation && form.password !== form.password_confirmation,
                        'is-valid': form.password_confirmation && form.password === form.password_confirmation
                      }"
                      :placeholder="lang === 'en' ? 'Re-enter your password' : 'أعد إدخال كلمة المرور'"
                      required
                      autocomplete="new-password"
                      aria-describedby="confirm-error"
                    />
                    <button
                      type="button"
                      class="password-toggle"
                      @click="togglePassword2"
                      :aria-label="showPassword2
                        ? (lang === 'en' ? 'Hide password' : 'إخفاء كلمة المرور')
                        : (lang === 'en' ? 'Show password' : 'إظهار كلمة المرور')"
                    >
                      <span class="material-icon">{{ showPassword2 ? 'visibility_off' : 'visibility' }}</span>
                    </button>
                  </div>
                  <Transition name="slide">
                    <div
                      v-if="form.password_confirmation && form.password !== form.password_confirmation"
                      id="confirm-error"
                      class="field-error"
                      role="alert"
                    >
                      <span class="error-icon material-icon">error</span>
                      {{ lang === 'en' ? 'Passwords do not match' : 'كلمتا المرور غير متطابقتين' }}
                    </div>
                  </Transition>
                  <Transition name="slide">
                    <div
                      v-if="form.password_confirmation && form.password === form.password_confirmation"
                      class="field-success"
                      role="status"
                    >
                      <span class="material-icon success-icon">check_circle</span>
                      {{ lang === 'en' ? 'Passwords match' : 'كلمتا المرور متطابقتان' }}
                    </div>
                  </Transition>
                </div>

                <!-- Terms & Conditions checkbox -->
                <div class="agree-row">
                  <label class="check-label" for="agree-terms">
                    <input
                      id="agree-terms"
                      v-model="form.agree"
                      type="checkbox"
                      class="form-check-input"
                      required
                    />
                    <span class="checkmark"></span>
                    <span class="check-text">
                      {{ lang === 'en' ? 'I agree to the' : 'أوافق على' }}
                      <a href="/terms" target="_blank" rel="noopener">
                        {{ lang === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام' }}
                      </a>
                    </span>
                  </label>
                </div>

                <!-- Submit button -->
                <button
                  type="submit"
                  class="btn-register"
                  :class="{ 'btn-loading': loading }"
                  :disabled="loading || !isFormValid"
                  :aria-busy="loading"
                >
                  <span v-if="loading" class="spinner" aria-hidden="true"></span>
                  {{ loading
                    ? (lang === 'en' ? 'Creating Account...' : 'جار إنشاء الحساب...')
                    : (lang === 'en' ? 'Create Account' : 'إنشاء حساب') }}
                </button>

                <!-- Divider -->
                <div class="divider" aria-hidden="true">
                  <span>{{ lang === 'en' ? 'or' : 'أو' }}</span>
                </div>

                <!-- Sign in link -->
                <div class="signin-row">
                  <span>{{ lang === 'en' ? 'Already have an account?' : 'لديك حساب بالفعل؟' }}</span>
                  <NuxtLink to="/login" class="btn-signin-link">
                    {{ lang === 'en' ? 'SIGN IN' : 'تسجيل الدخول' }}
                  </NuxtLink>
                </div>
              </form>
            </div>
          </div>

          <!-- Image column (right) -->
          <div class="image-col" aria-hidden="true">
            <div class="image-overlay">
              <img class="hero-image" src="/images/stay-connected.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
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

    <!-- Preloader -->
    <Transition name="fade">
      <div v-if="preloading" class="preloader" aria-label="Loading">
        <img src="/images/logo-preloader.png" alt="" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'

definePageMeta({ middleware: 'auth', layout: false })

const lang = ref('en')
const showPassword = ref(false)
const showPassword2 = ref(false)
const preloading = ref(true)
const loading = ref(false)
const error = ref('')
const errors = ref<Record<string, string>>({})
const firstnameTouched = ref(false)
const lastnameTouched = ref(false)
const emailTouched = ref(false)
const firstnameInput = ref<HTMLInputElement | null>(null)

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

const pwStrengthPercent = computed(() => {
  const passed = Object.values(pwChecks).filter(Boolean).length
  return (passed / 5) * 100
})

const pwStrengthClass = computed(() => {
  const p = pwStrengthPercent.value
  if (p === 0) return ''
  if (p <= 40) return 'weak'
  if (p <= 80) return 'medium'
  return 'strong'
})

const pwStrengthLabel = computed(() => {
  const p = pwStrengthPercent.value
  if (p === 0) return ''
  if (p <= 40) return lang.value === 'en' ? 'Weak' : 'ضعيفة'
  if (p <= 80) return lang.value === 'en' ? 'Medium' : 'متوسطة'
  return lang.value === 'en' ? 'Strong' : 'قوية'
})

const isFormValid = computed(() => {
  return form.value.firstname
    && form.value.lastname
    && form.value.email
    && form.value.password
    && form.value.password_confirmation
    && form.value.password === form.value.password_confirmation
    && form.value.agree
    && Object.values(pwChecks).every(Boolean)
})

const toggleLang = () => { lang.value = lang.value === 'en' ? 'ar' : 'en' }
const togglePassword = () => { showPassword.value = !showPassword.value }
const togglePassword2 = () => { showPassword2.value = !showPassword2.value }

const validatePassword = () => {
  const pw = form.value.password
  pwChecks.lower = /[a-z]/.test(pw)
  pwChecks.upper = /[A-Z]/.test(pw)
  pwChecks.number = /[0-9]/.test(pw)
  pwChecks.symbol = /[^a-zA-Z0-9]/.test(pw)
  pwChecks.length = pw.length >= 8
}

const handleRegister = async () => {
  errors.value = {}

  // Client-side validation (Error Prevention)
  if (!form.value.firstname) {
    errors.value.firstname = lang.value === 'en' ? 'First name is required' : 'الاسم الأول مطلوب'
    firstnameInput.value?.focus()
    return
  }
  if (!form.value.lastname) {
    errors.value.lastname = lang.value === 'en' ? 'Last name is required' : 'الاسم الأخير مطلوب'
    return
  }
  if (!form.value.email) {
    errors.value.email = lang.value === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب'
    return
  }
  if (!form.value.password) {
    errors.value.password = lang.value === 'en' ? 'Password is required' : 'كلمة المرور مطلوبة'
    return
  }
  if (form.value.password !== form.value.password_confirmation) {
    error.value = lang.value === 'en' ? 'Passwords do not match' : 'كلمتا المرور غير متطابقتين'
    return
  }
  if (!form.value.agree) {
    error.value = lang.value === 'en' ? 'You must agree to the Terms & Conditions' : 'يجب الموافقة على الشروط والأحكام'
    return
  }

  loading.value = true
  error.value = ''

  try {
    const { $api } = useNuxtApp()
    await $api.backend('/register', {
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
    error.value = err.data?.message || err.message || (lang.value === 'en'
      ? 'Registration failed. Please try again.'
      : 'فشل التسجيل. حاول مرة أخرى.')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  setTimeout(() => { preloading.value = false }, 600)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Material+Icons&display=swap');

/*
 * HCI Design Principles Applied:
 * 1. Visibility — Labels, icons, password strength always visible
 * 2. Feedback — Animated transitions, strength bar, match indicator
 * 3. Consistency — Same spacing, radius, and color system as login
 * 4. Affordance — Buttons look clickable, inputs look editable
 * 5. Error Prevention — Disabled submit until valid, live password checks
 * 6. Recognition > Recall — Icons with labels, placeholder hints
 * 7. Aesthetic & Minimalist — Clean hierarchy, no clutter
 * 8. Accessibility — ARIA labels, focus rings, skip links, contrast ratios
 *
 * Color: 60-30-10 Rule
 *   60% — #0f1923 / #1a2836 (surface)
 *   30% — #e8edf1 / #8fa3b3 (text)
 *   10% — #22c9a0 (accent/CTA)
 */

:global(body) {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.auth-page {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: #0f1923;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #e8edf1;
}

/* ── Skip Link (Accessibility) ── */
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
.skip-link:focus { top: 0; }

/* ── Language Toggle ── */
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
  border: 2px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
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

/* ── Wrapper ── */
.auth-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
}

/* ── Card ── */
.card-raised {
  width: 100%;
  max-width: 1060px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow:
    0 4px 6px rgba(0,0,0,0.15),
    0 20px 40px rgba(0,0,0,0.25);
}
.row {
  display: flex;
  flex-wrap: wrap;
  min-height: 560px;
}

/* ── Form Column ── */
.form-col {
  flex: 0 0 50%;
  max-width: 50%;
}
.form-body {
  background: #1a2836;
  padding: 2rem 2.5rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}
.text-center { text-align: center; }
.auth-logo {
  height: 40px;
  margin-bottom: 0.75rem;
  transition: opacity 0.3s;
}
.auth-logo:hover { opacity: 0.85; }
.welcome-heading {
  color: #e8edf1;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1.25rem;
  letter-spacing: -0.01em;
}

/* ── Form Groups ── */
.auth-form { display: flex; flex-direction: column; gap: 0; }
.form-group {
  margin-bottom: 0.75rem;
}
.name-row {
  display: flex;
  gap: 0.75rem;
}
.name-row .half { flex: 1; }
.form-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: #8fa3b3;
  margin-bottom: 0.35rem;
  letter-spacing: 0.02em;
}
.label-icon {
  font-size: 0.95rem;
  opacity: 0.7;
}
.material-icon {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: normal;
  -webkit-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
}

/* ── Inputs ── */
.form-control {
  width: 100%;
  padding: 0.7rem 1rem;
  font-family: inherit;
  font-size: 0.88rem;
  background: rgba(255,255,255,0.06);
  border: 1.5px solid rgba(255,255,255,0.12);
  border-radius: 0.6rem;
  color: #e8edf1;
  transition: all 0.2s ease;
  box-sizing: border-box;
}
.form-control::placeholder { color: #5a7182; }
.form-control:hover { border-color: rgba(255,255,255,0.22); }
.form-control:focus {
  outline: none;
  border-color: #22c9a0;
  box-shadow: 0 0 0 3px rgba(34,201,160,0.15);
  background: rgba(255,255,255,0.08);
}
.form-control.is-invalid {
  border-color: #ef5350;
  box-shadow: 0 0 0 3px rgba(239,83,80,0.1);
}
.form-control.is-valid {
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76,175,80,0.1);
}
.form-control.has-toggle {
  padding-right: 3rem;
}

/* ── Password Toggle ── */
.input-wrapper {
  position: relative;
}
.password-toggle {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #5a7182;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}
.password-toggle:hover { color: #e8edf1; }
.password-toggle .material-icon { font-size: 1.15rem; }

/* ── Field Errors & Success ── */
.field-error {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  color: #ef5350;
}
.field-error .error-icon { font-size: 0.85rem; }
.field-success {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  color: #4caf50;
}
.success-icon { font-size: 0.85rem; }

/* ── Error Banner ── */
.error-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(239,83,80,0.08);
  border-left: 3px solid #ef5350;
  border-radius: 0 0.5rem 0.5rem 0;
  color: #ef5350;
  font-size: 0.82rem;
}
.error-message .error-icon { font-size: 1.1rem; }

/* ── Password Strength Bar ── */
.pw-strength {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.4rem;
  margin-bottom: 0.3rem;
}
.pw-bar-track {
  flex: 1;
  height: 4px;
  background: rgba(255,255,255,0.08);
  border-radius: 2px;
  overflow: hidden;
}
.pw-bar-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.35s ease, background 0.35s ease;
}
.pw-bar-fill.weak { background: #ef5350; }
.pw-bar-fill.medium { background: #ffb74d; }
.pw-bar-fill.strong { background: #4caf50; }
.pw-strength-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  min-width: 3.5rem;
}
.pw-strength-label.weak { color: #ef5350; }
.pw-strength-label.medium { color: #ffb74d; }
.pw-strength-label.strong { color: #4caf50; }

/* ── Password Rules Checklist ── */
.pw-rules {
  list-style: none;
  padding: 0;
  margin: 0.3rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.15rem 0.5rem;
}
.pw-rules li {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.7rem;
  transition: color 0.25s;
}
.pw-rules .pending {
  color: #5a7182;
}
.pw-rules .valid {
  color: #4caf50;
}
.rule-icon {
  font-size: 0.8rem;
}

/* ── Terms Checkbox ── */
.agree-row {
  margin-bottom: 1rem;
  margin-top: 0.25rem;
}
.check-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 0.82rem;
  color: #8fa3b3;
  user-select: none;
}
.form-check-input {
  width: 1.1rem;
  height: 1.1rem;
  cursor: pointer;
  accent-color: #22c9a0;
  flex-shrink: 0;
}
.check-text a {
  color: #22c9a0;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.check-text a:hover {
  color: #1db08a;
  text-decoration: underline;
}

/* ── Register Button ── */
.btn-register {
  width: 100%;
  padding: 0.8rem;
  background: linear-gradient(135deg, #22c9a0, #1a9d80);
  color: #0f1923;
  border: none;
  border-radius: 0.75rem;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}
.btn-register:hover:not(:disabled) {
  background: linear-gradient(135deg, #28d4aa, #22c9a0);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(34,201,160,0.3);
}
.btn-register:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(34,201,160,0.2);
}
.btn-register:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}
.btn-register:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

/* Loading spinner */
.btn-loading { pointer-events: none; }
.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(15,25,35,0.3);
  border-top-color: #0f1923;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-right: 0.5rem;
  vertical-align: middle;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ── Divider ── */
.divider {
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  color: rgba(255,255,255,0.2);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(255,255,255,0.1);
}
.divider span {
  padding: 0 1rem;
  color: #5a7182;
}

/* ── Sign In Row ── */
.signin-row {
  text-align: center;
  font-size: 0.85rem;
  color: #8fa3b3;
}
.btn-signin-link {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.45rem 1.5rem;
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.15);
  color: #e8edf1;
  border-radius: 0.75rem;
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.25s;
}
.btn-signin-link:hover {
  border-color: #22c9a0;
  color: #22c9a0;
  background: rgba(34,201,160,0.05);
}
.btn-signin-link:focus-visible {
  outline: 2px solid #22c9a0;
  outline-offset: 2px;
}

/* ── Image Column ── */
.image-col {
  flex: 0 0 50%;
  max-width: 50%;
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

/* ── Footer ── */
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
.footer-left a:hover { color: #22c9a0; }
.footer-right {
  display: flex;
  gap: 1.5rem;
}
.footer-right a {
  color: #5a7182;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-right a:hover { color: #8fa3b3; }

/* ── Preloader ── */
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
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.92); }
}

/* ── Transitions ── */
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

/* ── RTL Support ── */
[dir="rtl"] .input-wrapper .form-control.has-toggle {
  padding-right: 1rem;
  padding-left: 3rem;
}
[dir="rtl"] .password-toggle {
  right: auto;
  left: 0.75rem;
}
[dir="rtl"] .error-message {
  border-left: none;
  border-right: 3px solid #ef5350;
}
[dir="rtl"] .btn-signin-link {
  margin-left: 0;
  margin-right: 0.5rem;
}
[dir="rtl"] .spinner {
  margin-right: 0;
  margin-left: 0.5rem;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .form-col { flex: 0 0 100%; max-width: 100%; }
  .image-col { display: none; }
  .form-body { padding: 2rem 1.5rem; }
  .name-row { flex-direction: column; gap: 0; }
  .pw-rules { grid-template-columns: 1fr; }
  .footer-inner { flex-direction: column; gap: 0.5rem; text-align: center; }
}

@media (max-width: 380px) {
  .form-body { padding: 1.5rem 1.25rem; }
}

/* ── Focus visible for keyboard nav ── */
*:focus-visible {
  outline: 2px solid #22c9a0;
  outline-offset: 2px;
}
input:focus-visible {
  outline: none;
}
</style>
