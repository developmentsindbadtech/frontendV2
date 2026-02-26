<script setup lang="ts">
import { Sparkles, Search } from 'lucide-vue-next'
</script>

<template>
  <section class="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 mt-72px lg:px-0">
    <div class="w-full flex flex-col items-center justify-center pt-6 md:pt-10">
      <span
        className="flex items-center gap-2 px-4 py-2 mt-10 rounded-full border border-secondary font-bold  text-base sm:text-sm text-secondary bg-secondary/45 w-max mx-auto mb-6 shadow-secondary/40 shadow-lg"
      >
        <Sparkles class="h-4 w-4" />
        Trading decisions are powered by AI
      </span>

      <!-- Text-Content -->
      <div class="w-full max-w-sm md:max-w-3xl lg:max-w-5xl">
        <h1
          class="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-center text-secondary"
        >
          Build Your Legacy <span class="text-primary">While You Live It.</span>
        </h1>

        <p
          class="mt-4 w-full max-w-2xl lg:max-w-4xl text-base md:text-lg text-center text-primary mx-auto"
        >
          The world's most secure automated trading bot. Deploy institutional-grade strategies,
          manage risk with precision stop-losses, and let our AI algorithms handle the volatility —
          built for the Saudi market.
        </p>
      </div>

      <!-- Seach-Bar -->
      <div
        class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8 justify-between bg-foreground/10 rounded-2xl sm:rounded-full p-3 sm:px-4 sm:py-3 mx-auto w-full max-w-2xl"
      >
        <!-- Icon -->

        <div class="flex items-center gap-2 md:w-md">
          <Search class="size-5 shrink-0" />

          <!-- Input -->
          <input
            type="text"
            placeholder="Anything to ask..."
            class="w-full flex-1 px-4 py-2 rounded-xl sm:rounded-full text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>

        <!-- Button -->
        <button
          class="w-full cursor-pointer sm:w-auto px-6 py-2 bg-secondary text-white rounded-xl sm:rounded-full font-bold hover:bg-secondary/80 transition-colors"
        >
          Get Started
        </button>
      </div>

      <!-- Hero-image -->
      <NuxtImg src="/images/Hero.png" class="w-full max-w-7xl mx-auto mt-8 rounded-2xl shadow-lg" />

      <div class="mt-12 w-full max-w-7xl">
        <h1 class="text-md sm:text-xl font-bold text-center text-natural">
          Trusted by leading institutions in the Saudi market
        </h1>

        <!-- Trusted brands logos placeholder -->
        <div class="flex items-center justify-between flex-wrap gap-6 mt-6 w-full">
          <NuxtImg
            v-for="value in 6"
            :key="value"
            src="/images/brand-placeholder.png"
            class="w-30 mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>
