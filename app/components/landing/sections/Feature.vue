<script setup lang="ts">
import {
  Brain,
  ShieldCheck,
  TrendingUp,
  ChevronUp,
  ChevronDown,
  Zap,
  ChartColumn,
  Lock,
  ArrowRight,

} from 'lucide-vue-next'
</script>

<template>
  <section
    class="min-h-screen w-full mt-72 max-w-7xl mx-auto md:mt-16 lg:mt-50 px-4 sm:px-6 lg:px-0"
  >
    <div
      class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-10 py-4 md:py-8 lg:py-10 items-center"
    >
      <!-- Left column -->

      <div>
        <NuxtImg src="/images/feature-mobile-frame.png" class="w-full" />
      </div>

      <!-- Right column -->
      <div>
        <span class="text-secondary font-bold text-sm md:text-base">AI-Driven Features</span>
        <h1 class="text-secondary text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4 line">
          <span class="text-primary">Smarter Trading, </span>Zero Emotion
        </h1>
        <p class="text-primary font-semibold mt-6 md:mt-12">
          Every trading decision is powered by AI that eliminates emotional bias and executes with
          mathematical precision.
        </p>
        <div
          class="w-full p-3 md:p-4 lg:p-5 border border-secondary rounded-2xl bg-primary flex flex-col lg:flex-row justify-between items-start mt-4 md:mt-6 gap-3 md:gap-4 lg:gap-6"
        >
          <Brain
            class="h-8 w-8 md:h-10 md:w-10 border border-secondary rounded-sm bg-blue/50 p-2 text-secondary shrink-0"
          />

          <div class="flex flex-col gap-2 flex-1">
            <h3 class="text-secondary text-lg md:text-xl">AI-Powered Smart Entry</h3>
            <p class="text-sm md:text-md text-white">
              Our machine learning models analyze 50+ indicators across Tadawul and global markets,
              identifying the perfect entry points. Trading decisions are powered by AI that learns
              from millions of data points in real-time.
            </p>
          </div>
          <ChevronUp class="h-5 w-5 text-secondary shrink-0" />
        </div>

        <div
          class="mt-4 md:mt-6 flex items-center justify-between w-full p-3 md:p-3 lg:p-2 border border-secondary rounded-2xl bg-blue-50/20 gap-3 md:gap-4"
        >
          <ShieldCheck
            class="h-8 w-8 md:h-10 md:w-10 rounded-sm bg-primary p-2 text-secondary shrink-0"
          />
          <h3 class="text-secondary text-lg md:text-xl flex-1">Precision Stop-Loss Engine</h3>
          <ChevronDown class="h-5 w-5 text-primary inline ml-2 shrink-0" />
        </div>

        <div
          class="mt-4 md:mt-6 flex items-center justify-between w-full p-3 md:p-3 lg:p-2 border border-secondary rounded-2xl bg-blue-50/20 gap-3 md:gap-4"
        >
          <div class="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            <TrendingUp
              class="h-8 w-8 md:h-10 md:w-10 rounded-sm bg-primary p-2 text-secondary shrink-0"
            />
            <h3 class="text-secondary text-lg md:text-xl truncate">
              Automated Portfolio Rebalancing
            </h3>
          </div>

          <ChevronDown class="h-5 w-5 text-primary shrink-0 ml-2" />
        </div>
      </div>
    </div>

    <div
      class="w-full mt-72 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-10 py-4 md:py-8 lg:py-10 items-center"
    >
      <!-- Left column -->
      <div class="w-full">
        <span class="text-secondary font-bold text-sm md:text-base"
          >Built for the Saudi Market</span
        >
        <h1 class="text-secondary text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4 line">
          <span class="text-primary">Institutional-Grade, </span>AI Strategies
        </h1>
        <p class="text-primary font-semibold mt-6 md:mt-12">
          Deploy the same AI-powered strategies used by top hedge funds. Our algorithms analyze
          Tadawul, NOMU, and global correlations to make data-driven trading decisions — fully
          automated, fully transparent.
        </p>

        <div
          class="mt-4 md:mt-6 flex items-center justify-between w-full p-3 md:p-3 lg:p-2 rounded-2xl gap-3 md:gap-4"
        >
          <Zap class="h-8 w-8 md:h-10 md:w-10 rounded-sm bg-primary p-2 text-secondary shrink-0" />
          <h3 class="text-secondary text-lg md:text-xl flex-1">
            Execute trades in under 10ms with zero latency
          </h3>
        </div>

        <div
          class="mt-4 md:mt-6 flex items-center justify-between w-full p-3 md:p-3 lg:p-2 rounded-2xl gap-3 md:gap-4"
        >
          <div class="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            <ChartColumn
              class="h-8 w-8 md:h-10 md:w-10 rounded-sm bg-primary p-2 text-secondary shrink-0"
            />
            <h3 class="text-secondary text-lg md:text-xl truncate">
              Back-test strategies against 10+ years of Tadawul data
            </h3>
          </div>
        </div>
        <div
          class="mt-4 md:mt-6 flex items-center justify-between w-full p-3 md:p-3 lg:p-2 rounded-2xl gap-3 md:gap-4"
        >
          <div class="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
            <Lock
              class="h-8 w-8 md:h-10 md:w-10 rounded-sm bg-primary p-2 text-secondary shrink-0"
            />
            <h3 class="text-secondary text-lg md:text-xl truncate">
              Bank-grade encryption & CMA-compliant security protocols
            </h3>
          </div>
        </div>

        <Button 
              variant="default"
              size="lg"
              class="bg-secondary rounded-3xl cursor-pointer font-bold text-white hover:bg-secondary/90 mt-6 md:mt-8"
        >
          Explore AI strategies
          <ArrowRight class="w-4 h-4"/>
        </Button>
        
      </div>

      <!-- Right column -->
      <div>
        <!-- <---PlaceHolder Only--->
        <NuxtImg src="/images/feature-mobile-frame.png" class="w-full" />
      </div>
    </div>
  </section>
</template>
