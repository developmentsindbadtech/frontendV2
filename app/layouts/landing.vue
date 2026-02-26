<script setup lang="ts">
import { ChevronDown, Menu, X } from 'lucide-vue-next'

const navigations = [
  {
    title: 'Feature',
    menuItems: ['Product 1', 'Product 2', 'Product 3'],
  },
  {
    title: 'About',
    menuItems: ['About Us', 'Careers', 'Contact'],
  },
  {
    title: 'Pricing',
    menuItems: ['Blog', 'Help Center', 'Privacy Policy'],
  },
  {
    title: 'Invest Now',
    menuItems: ['Blog', 'Help Center', 'Privacy Policy'],
  },
]

const isMobileNavOpen = ref(false)
const expandedMobileSections = ref<string[]>([])

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
  <div class="w-full min-h-screen">
    <header
      class="fixed inset-x-0 top-0 z-50 border-b border-b-primary/30 bg-background/80 backdrop-blur supports-backdrop-filter:backdrop-blur"
    >
      <nav class="mx-auto flex w-full items-center justify-between gap-4 px-6 py-3 lg:py-4">
        <div class="flex w-full items-center justify-between gap-4 lg:w-auto">
          <NuxtLink to="/" class="flex items-center gap-2">
            <NuxtImg src="/images/Logo(1).png" alt="Logo" width="120" height="36" />
          </NuxtLink>

          <button
            class="inline-flex items-center justify-center rounded-full border border-border p-2 text-primary transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
            aria-label="Toggle navigation"
            @click="toggleMobileNav"
          >
            <Menu v-if="!isMobileNavOpen" class="size-5" />
            <X v-else class="size-5" />
          </button>
        </div>

        <!-- Desktop navigation -->
        <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between lg:gap-10">
          <div class="flex items-center gap-4">
            <div v-for="value in navigations" :key="value.title">
              <LandingDropDownNavigations :title="value.title" :menu-items="value.menuItems" />
            </div>
          </div>

          <div class="flex items-center gap-3">
            <Button
              variant="default"
              size="lg"
              class="hover:bg-background hover:text-secondary cursor-pointer"
            >
              Sign In
            </Button>
            <Button
              variant="default"
              size="lg"
              class="bg-secondary cursor-pointer text-white hover:bg-secondary/90"
            >
              Sign Up</Button
            >
            <Button variant="outline" size="lg" class="cursor-pointer text-secondary">
              Book a Demo</Button
            >

            <Button
              variant="outline"
              size="lg"
              class="cursor-pointer text-primary border-primary! hover:bg-primary/10 hover:text-primary"
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
            class="mx-auto mt-2 flex max-w-6xl flex-col gap-6 rounded-2xl border border-border bg-background px-6 py-6 shadow-xl"
          >
            <div class="flex flex-col gap-4">
              <div
                v-for="navigation in navigations"
                :key="navigation.title"
                class="border-b border-border pb-3 last:border-b-0 last:pb-0"
              >
                <button
                  type="button"
                  class="flex w-full items-center justify-between gap-4 rounded-lg px-2 py-2 text-left text-base font-semibold text-foreground hover:bg-accent hover:text-accent-foreground"
                  @click="toggleMobileSection(navigation.title)"
                >
                  <span class="uppercase tracking-wide text-sm">{{ navigation.title }}</span>
                  <ChevronDown
                    class="size-4 transition-transform"
                    :class="{ 'rotate-180': isSectionOpen(navigation.title) }"
                  />
                </button>
                <Transition
                  enter-active-class="duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-2"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="duration-150 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-2"
                >
                  <ul v-if="isSectionOpen(navigation.title)" class="mt-2 space-y-2 pl-2">
                    <li v-for="item in navigation.menuItems" :key="item">
                      <button
                        type="button"
                        class="w-full rounded-lg px-2 py-2 text-left text-base font-medium text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground"
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

    <main class="relative z-0 overflow-hidden py-30">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
