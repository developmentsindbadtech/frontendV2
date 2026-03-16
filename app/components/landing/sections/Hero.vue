<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'

import { ref, onMounted } from 'vue'
const divRef = ref<HTMLElement | null>(null)

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
  <section class="relative h-screen z-1 w-full mx-auto px-4 sm:px-6 py-3 pb-12 md:pb-16 lg:px-0">
    <div class="absolute inset-0 -z-10">
      <NuxtImg
        src="/images/hero_bg.png"
        class="h-full w-full object-cover object-top"
        alt="Hero Background"
      />
    </div>
    <div class="w-full min-h-155 flex flex-col items-center justify-center pt-6 md:pt-10">
      <span
        class="flex items-center gap-2 mt-16 animate-fade-in animation-delay-100 px-4 py-2 rounded-full border border-secondary font-bold text-base sm:text-sm text-white bg-secondary/45 w-max mx-auto mb-6 shadow-secondary/40 shadow-lg"
      >
        <Sparkles class="h-4 w-4" />
        Trading decisions are powered by AI
      </span>

      <!-- Text-Content -->
      <div
        class="w-full max-w-sm md:max-w-3xl lg:max-w-5xl md:mt-6 animate-fade-in animation-delay-200"
      >
        <h1
          class="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-center text-secondary"
        >
          Build Your Legacy <span class="text-primary">While You Live It.</span>
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
    <div ref="divRef" class="w-full max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-0">
      <div class="w-full mx-auto">
        <h1 class="text-md sm:text-xl font-bold text-center text-white mt-6">
          Trusted by leading institutions in the Saudi market
        </h1>

        <!-- Trusted brands logos placeholder -->
        <div class="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center mt-6">
          <NuxtImg
            v-for="value in 6"
            :key="value"
            src="/images/brand-placeholder.png"
            alt="Trusted brand logo"
            width="120"
            height="48"
            class="w-30 h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>
