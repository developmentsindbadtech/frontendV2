<script setup lang="ts">
import { Sparkles, Search } from 'lucide-vue-next'
</script>

<template>
  <section class="h-screen flex items-center justify-center overflow-hidden">
    <div class="w-6xl px-2">
      <span
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-secondary font-bold text-base text-secondary bg-secondary/45 w-max mx-auto mb-6 shadow-secondary/40 shadow-lg"
      >
        <Sparkles class="h-4 w-4" />
        Trading decisions are powered by AI
      </span>

      <!-- Text-Content -->
      <div class="w-90 md:w-200 mx-auto">
        <h1
          class="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-center text-secondary"
        >
          Build Your Legacy <span class="text-primary">While You Live It.</span>
        </h1>

        <p class="mt-4 lg:w-150 text-base md:text-lg text-center text-primary mx-auto">
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

        <div class="flex items-center gap-2">
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
          class="w-full sm:w-auto px-6 py-2 bg-secondary text-white rounded-xl sm:rounded-full font-bold hover:bg-secondary/80 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  </section>
</template>
