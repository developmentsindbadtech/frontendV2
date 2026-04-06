<script setup lang="ts">
import { ChevronDown, Menu, X } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isMobileNavOpen = ref(false)
const expandedMobileSections = ref<string[]>([])
let originalDarkClass = false

onMounted(() => {
  // Store whether dark class was on the html element
  originalDarkClass = document.documentElement.classList.contains('dark')
  // Remove dark class from html element for landing page
  document.documentElement.classList.remove('dark')
})

onUnmounted(() => {
  // Restore dark class if it was on before
  if (originalDarkClass) {
    document.documentElement.classList.add('dark')
  }
})

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
  if (!isMobileNavOpen.value) {
    expandedMobileSections.value = []
  }
}

const toggleMobileSection = (sectionKey: string) => {
  expandedMobileSections.value = expandedMobileSections.value.includes(sectionKey)
    ? expandedMobileSections.value.filter((key) => key !== sectionKey)
    : [...expandedMobileSections.value, sectionKey]
}

const isSectionOpen = (sectionKey: string) => expandedMobileSections.value.includes(sectionKey)

const closeMobileNav = () => {
  isMobileNavOpen.value = false
  expandedMobileSections.value = []
}
</script>

<template>
  <div class="w-full min-h-screen landing-page">
    <header
      class="fixed inset-x-0 top-0 z-50 border-b border-b-primary/30 bg-background/80 backdrop-blur supports-backdrop-filter:backdrop-blur"
    >
      <nav
        class="mx-auto flex w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3 lg:py-4"
      >
        <div class="flex w-full items-center justify-between gap-4 lg:w-auto">
          <NuxtLink to="/" class="flex items-center gap-2">
            <NuxtImg src="/images/Logo(1).png" alt="Logo" width="120" height="36" />
          </NuxtLink>

          <button
            class="inline-flex items-center justify-center rounded-full border border-border p-2 text-primary transition-colors hover:bg-accent hover:text-accent-foreground lg:hidden"
            aria-label="Toggle navigation"
            @click="toggleMobileNav"
          >
            <Menu v-if="!isMobileNavOpen" class="size-5" />
            <X v-else class="size-5" />
          </button>
        </div>

        <!-- Desktop navigation -->
        <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between lg:gap-10">
          <!-- Made the dropdown menu into components -->
          <div class="flex items-center gap-4">
            <LandingNavigationsFeatureDropdown />
            <LandingNavigationsAboutDropdown />
            <LandingNavigationsPricingDropdown />
            <LandingNavigationsInvestNowDropdown />
          </div>

          <div class="flex items-center gap-3">
            <Button
              variant="default"
              size="lg"
              class="hover:bg-transparent hover:text-secondary cursor-pointer bg-transparent"
            >
              Sign In
            </Button>
            <Button
              variant="default"
              size="lg"
              class="bg-gradient! py-4 px-4 rounded-full cursor-pointer text-white hover:opacity-90"
            >
              Sign Up</Button
            >
            <Button
              variant="outline"
              size="lg"
              class="cursor-pointer bg-transparent! text-secondary rounded-full py-4 px-4"
            >
              Book a Demo</Button
            >

            <Button
              variant="outline"
              size="sm"
              class="cursor-pointer rounded-full text-primary border-primary! hover:bg-primary/10 hover:text-primary bg-transparent!"
            >
              EN</Button
            >
          </div>
        </div>
      </nav>

      <!-- Mobile navigation drawer -->
      <Transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMobileNavOpen" class="lg:hidden">
          <div
            class="mx-auto mt-2 flex max-w-6xl flex-col gap-6 rounded-2xl border border-border bg-background px-4 sm:px-6 py-6 shadow-xl"
          >
            <div class="flex flex-col gap-4">
              <div class="border-b border-border pb-3">
                <!-- Feature -->
                <button
                  type="button"
                  class="flex w-full items-center justify-between px-2 py-2"
                  @click="toggleMobileSection('Feature')"
                >
                  <span class="uppercase tracking-wide text-sm font-semibold">Feature</span>
                  <ChevronDown
                    class="size-4 transition-transform"
                    :class="{ 'rotate-180': isSectionOpen('Feature') }"
                  />
                </button>
                <Transition
                  enter-active-class="duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                >
                  <ul v-if="isSectionOpen('Feature')" class="mt-2 space-y-2 pl-2">
                    <li
                      v-for="item in [
                        'Automated Trade',
                        'Trading Bots',
                        '24/7 Automation',
                        'Backtest',
                        'Safeguard Signal',
                        'Security',
                      ]"
                      :key="item"
                    >
                      <button
                        class="w-full text-left px-2 py-2 text-sm text-muted-foreground hover:bg-accent/60 rounded-lg"
                        @click="closeMobileNav"
                      >
                        {{ item }}
                      </button>
                    </li>
                  </ul>
                </Transition>
              </div>

              <div class="border-b border-border pb-3">
                <!-- About -->
                <button
                  type="button"
                  class="flex w-full items-center justify-between px-2 py-2"
                  @click="toggleMobileSection('About')"
                >
                  <span class="uppercase tracking-wide text-sm font-semibold">About</span>
                  <ChevronDown
                    class="size-4 transition-transform"
                    :class="{ 'rotate-180': isSectionOpen('About') }"
                  />
                </button>
                <Transition
                  enter-active-class="duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                >
                  <ul v-if="isSectionOpen('About')" class="mt-2 space-y-2 pl-2">
                    <li v-for="item in ['About Us', 'Careers', 'Contact']" :key="item">
                      <button
                        class="w-full text-left px-2 py-2 text-sm text-muted-foreground hover:bg-accent/60 rounded-lg"
                        @click="closeMobileNav"
                      >
                        {{ item }}
                      </button>
                    </li>
                  </ul>
                </Transition>
              </div>

              <div class="border-b border-border pb-3">
                <!-- Pricing -->
                <button
                  type="button"
                  class="flex w-full items-center justify-between px-2 py-2"
                  @click="toggleMobileSection('Pricing')"
                >
                  <span class="uppercase tracking-wide text-sm font-semibold">Pricing</span>
                  <ChevronDown
                    class="size-4 transition-transform"
                    :class="{ 'rotate-180': isSectionOpen('Pricing') }"
                  />
                </button>
                <Transition
                  enter-active-class="duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                >
                  <ul v-if="isSectionOpen('Pricing')" class="mt-2 space-y-2 pl-2">
                    <li v-for="item in ['Blog', 'Help Center', 'Privacy Policy']" :key="item">
                      <button
                        class="w-full text-left px-2 py-2 text-sm text-muted-foreground hover:bg-accent/60 rounded-lg"
                        @click="closeMobileNav"
                      >
                        {{ item }}
                      </button>
                    </li>
                  </ul>
                </Transition>
              </div>

              <div class="border-b border-border pb-3 last:border-b-0 last:pb-0">
                <!-- Invest Now -->
                <button
                  type="button"
                  class="flex w-full items-center justify-between px-2 py-2"
                  @click="toggleMobileSection('InvestNow')"
                >
                  <span class="uppercase tracking-wide text-sm font-semibold">Invest Now</span>
                  <ChevronDown
                    class="size-4 transition-transform"
                    :class="{ 'rotate-180': isSectionOpen('InvestNow') }"
                  />
                </button>
                <Transition
                  enter-active-class="duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                >
                  <ul v-if="isSectionOpen('InvestNow')" class="mt-2 space-y-2 pl-2">
                    <li
                      v-for="item in ['Market Analysis', 'Portfolio Growth', 'Strategy Hub']"
                      :key="item"
                    >
                      <button
                        class="w-full text-left px-2 py-2 text-sm text-muted-foreground hover:bg-accent/60 rounded-lg"
                        @click="closeMobileNav"
                      >
                        {{ item }}
                      </button>
                    </li>
                  </ul>
                </Transition>
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <Button
                variant="default"
                size="lg"
                class="w-full hover:bg-background hover:text-secondary"
                @click="closeMobileNav"
              >
                Sign In
              </Button>
              <Button
                variant="default"
                size="lg"
                class="w-full bg-secondary text-white hover:bg-secondary/90"
                @click="closeMobileNav"
              >
                Sign Up
              </Button>
              <Button
                variant="outline"
                size="lg"
                class="w-full text-secondary"
                @click="closeMobileNav"
              >
                Book a Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                class="w-full border border-primary! hover:bg-background hover:text-secondary"
                @click="closeMobileNav"
              >
                English
              </Button>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <main class="relative z-0 overflow-hidden">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
