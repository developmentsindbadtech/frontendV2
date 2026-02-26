<script setup lang="ts">
import { Brain, ShieldCheck, TrendingUp, ChevronUp, ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <section class="h-screen sm:w-7xl mx-auto mt-50">
    <div class="w-full p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Left column -->

      <div>
        <NuxtImg src="/images/feature-mobile-frame.png" class="w-full" />
      </div>

      <!-- Right column -->
      <div>
        <span class="text-secondary font-bold">AI-Driven Features</span>
        <h1 class="text-secondary text-5xl font-bold mt-4 line">
          <span class="text-primary">Smarter Trading, </span>Zero Emotion
        </h1>
        <p class="text-primary font-semibold mt-12">
          Every trading decision is powered by AI that eliminates emotional bias and executes with
          mathematical precision.
        </p>
        <div
          class="w-full p-5 border border-secondary rounded-2xl bg-primary flex justify-between items-start mt-6 gap-6"
        >
          <Brain
            class="h-10 w-10 border border-secondary rounded-sm bg-blue/50 p-2 text-secondary"
          />

          <div class="flex flex-col gap-2 w-70">
            <h3 class="text-secondary text-xl">AI-Powered Smart Entry</h3>
            <p class="text-md text-white">
              Our machine learning models analyze 50+ indicators across Tadawul and global markets,
              identifying the perfect entry points. Trading decisions are powered by AI that learns
              from millions of data points in real-time.
            </p>
          </div>
          <ChevronUp class="h-5 w-5 text-secondary" />
        </div>

        <div
          class="mt-6 flex items-center justify-between w-full p-2 border border-secondary rounded-2xl bg-blue-50/20"
        >
          <ShieldCheck class="h-10 w-10 rounded-sm bg-primary p-2 text-secondary" />
          <h3 class="text-secondary text-xl">Precision Stop-Loss Engine</h3>
          <ChevronDown class="h-5 w-5 text-primary inline ml-2" />
        </div>

        <div
          class="mt-6 flex items-center justify-between w-full p-2 border border-secondary rounded-2xl bg-blue-50/20"
        >
          <TrendingUp class="h-10 w-10 rounded-sm bg-primary p-2 text-secondary" />
          <h3 class="text-secondary text-xl">Automated Portfolio Rebalancing</h3>
          <ChevronDown class="h-5 w-5 text-primary inline ml-2" />
        </div>
      </div>
    </div>
  </section>
</template>
