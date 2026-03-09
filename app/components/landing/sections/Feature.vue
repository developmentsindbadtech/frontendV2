<script setup lang="ts">
import { Brain, ShieldCheck, TrendingUp, Zap, ChartColumn, Lock, ArrowRight } from 'lucide-vue-next'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

const items = [
  {
    title: 'AI-Powered Smart Entry',
    description:
      'Our machine learning models analyze 50+ indicators across Tadawul and global markets, identifying the perfect entry points.',
    icon: Brain,
  },
  {
    title: 'Precision Stop-Loss Engine',
    description: 'Protect your capital with dynamic stop-losses that adapt to market volatility.',
    icon: ShieldCheck,
  },
  {
    title: 'Automated Portfolio Rebalancing',
    description:
      'The AI monitors sector correlations, market sentiment, and your risk profile to automatically rebalance positions for maximum growth.',
    icon: TrendingUp,
  },
]
</script>

<template>
  <section
    class="relative min-h-screen w-full md:mt-18 max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-0"
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
        <p class="text-primary font-semibold mt-6 mb-3 md:mt-12">
          Every trading decision is powered by AI that eliminates emotional bias and executes with
          mathematical precision.
        </p>

        <Accordion type="single" collapsible class="w-full space-y-3 sm:space-y-4">
          <AccordionItem
            v-for="(faq, index) in items"
            :key="index"
            :value="`item-${index}`"
            class="border border-b! border-secondary rounded-xl bg-blue-50/20 px-4 sm:px-5 data-[state=open]:bg-primary data-[state=open]:ring-1 data-[state=open]:ring-ring/50 transition-all duration-300 ease-out overflow-hidden"
          >
            <AccordionTrigger
              class="cursor-pointer text-sm sm:text-base md:text-lg font-medium text-foreground transition-all duration-300 ease-out hover:no-underline hover:text-blue py-4 sm:py-5 text-left"
            >
              <div class="flex items-center gap-3">
                <component
                  :is="faq.icon"
                  class="h-8 w-8 md:h-10 md:w-10 border border-secondary rounded-sm bg-blue/50 p-2 text-secondary shrink-0"
                />
                <span class="text-secondary">{{ faq.title }}</span>
              </div>
            </AccordionTrigger>

            <AccordionContent class="text-sm md:text-base text-start ml-13 text-white pb-4 sm:pb-5">
              {{ faq.description }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>

    <div
      aria-hidden="true"
      class="pointer-events-none absolute left-200 top-300 hidden h-250.5 w-300.75 rounded-full bg-[#9BEBF880] blur-[200px] md:block"
    />

    <div class="relative z-10">
      <div
        class="w-full md:mt-18 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-10 py-4 md:py-8 lg:py-10 items-center"
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
            <Zap
              class="h-8 w-8 md:h-10 md:w-10 rounded-sm bg-primary p-2 text-secondary shrink-0"
            />
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
            <ArrowRight class="w-4 h-4" />
          </Button>
        </div>

        <!-- Right column -->
        <div>
          <!-- <---PlaceHolder Only--->
          <NuxtImg src="/images/mard-bot.png" class="w-full" />
        </div>
      </div>
    </div>
  </section>
</template>
