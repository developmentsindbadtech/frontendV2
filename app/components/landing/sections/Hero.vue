<script setup lang="ts">
import { ref, onMounted } from 'vue'
const divRef = ref<HTMLElement | null>(null)

const trustedBrands = [
  { name: 'Alkhabeer Capital', logo: '/images/trusted-brands/alkhabeer-capital.png' },
  { name: 'Riyad Capital', logo: '/images/trusted-brands/riyad-capital.png' },
  { name: 'Microsoft', logo: '/images/trusted-brands/microsoft.png' },
  { name: 'Startupbootcamp', logo: '/images/trusted-brands/startup-bootcamp.png' },
  { name: 'Flat6LABS', logo: '/images/trusted-brands/flat-6labs.png' },
  {
    name: 'Center of Digital Entrepreneurship',
    logo: '/images/trusted-brands/center-of-digital.png',
  },
  {
    name: 'Misk',
    logo: '/images/trusted-brands/misk.png',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return
      if (entry.isIntersecting) {
        divRef.value?.classList.remove('animate-fade-up')
        requestAnimationFrame(() => {
          divRef.value?.classList.add('animate-fade-up')
        })
        observer.disconnect()
      }
    },
    { threshold: 0.3 },
  )
  if (divRef.value) observer.observe(divRef.value)
})
</script>

<template>
  <section class="relative z-1 w-full mx-auto px-4 sm:px-6 py-3 pb-12 md:pb-16 lg:px-0">
    <div class="absolute inset-0 -z-10 -bottom-190">
      <NuxtImg src="/images/hero_bg.png" class="h-full w-full object-cover" alt="Hero Background" />
    </div>
    <div class="w-full min-h-155 flex flex-col items-center justify-center pt-6 md:pt-10">
      <div class="flex items-center gap-6 mx-auto text-white">
        <NuxtImg src="/images/cma.png" alt="CMA Logo" />
        <span>|</span>
        <p class="text-sm md:text-base">Permit No.:2023-155-05</p>
      </div>

      <!-- Text-Content -->
      <div
        class="w-full max-w-sm md:max-w-3xl lg:max-w-5xl md:mt-6 animate-fade-in animation-delay-200"
      >
        <h1
          class="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-center text-white leading-snug"
        >
          Build Your Legacy <span class="text-gradient!">While You Live It.</span>
        </h1>

        <p
          class="mt-4 w-full max-w-2xl lg:max-w-4xl text-base md:text-lg text-center text-white mx-auto"
        >
          The world's most secure automated trading bot. Deploy institutional-grade strategies,
          manage risk with precision stop-losses, and let our AI algorithms handle the volatility —
          built for the Saudi market.
        </p>
      </div>

      <!-- Button -->
      <button
        class="w-full cursor-pointer mt-6 sm:w-auto py-4 px-4 bg-gradient! text-white rounded-xl sm:rounded-full font-bold hover:opacity-80 transition-colors"
      >
        Start a 3 - Day Trial
      </button>
    </div>

    <!-- Logo Group -->
    <div ref="divRef" class="w-full max-w-7xl mx-auto mt-6 md:mt-16 px-4 sm:px-6 lg:px-0">
      <div class="w-full mx-auto">
        <h1 class="text-md sm:text-xl font-bold text-center text-white mt-6">
          Trusted by leading institutions in the Saudi market
        </h1>

        <!-- Trusted brands logos placeholder -->
        <div class="flex flex-col md:flex-row gap-10 md:gap-6 justify-between items-center mt-6">
          <NuxtImg
            v-for="brand in trustedBrands"
            :key="brand.name"
            :src="brand.logo"
            :alt="`${brand.name} Logo`"
            class="w-30"
          />
        </div>
      </div>
    </div>
  </section>
</template>
