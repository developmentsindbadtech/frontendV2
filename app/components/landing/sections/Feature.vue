<script setup lang="ts">
import type { Component } from 'vue'
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

const strategyItems: { icon: Component; title: string }[] = [
  {
    icon: Zap,
    title: 'Execute trades in under 10ms with zero latency',
  },
  {
    icon: ChartColumn,
    title: 'Back-test strategies against 10+ years of Tadawul data',
  },
  {
    icon: Lock,
    title: 'Bank-grade encryption & CMA-compliant security protocols',
  },
]
</script>

<template>
  <section class="relative w-full md:mt-24 max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-0">
    <div
      class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-10 py-4 md:py-8 lg:py-10 items-center"
    >
      <!-- Left column -->

      <div
        class="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px] xl:max-w-[580px]"
      >
        <div
          class="absolute top-[8%] left-[50.5%] z-30 h-[87.5%] w-[44%] -translate-x-1/2 overflow-hidden"
        >
          <img
            src="/images/mobile_demo.gif"
            alt="Mobile app demo"
            class="h-full w-full rounded-b-[2rem] object-cover object-center md:rounded-b-[3rem]"
          />
        </div>

        <NuxtImg src="/images/mobile-frame.png" class="relative z-10 w-full" />

        <div
          class="absolute right-0 top-[14%] z-40 rounded-xl bg-background/45 p-3 backdrop-blur-[2px] xl:hidden"
        >
          <NuxtImg src="/images/trade.png" class="w-[118px] sm:w-[138px] object-contain" />
        </div>

        <div
          class="absolute left-0 bottom-[8%] z-40 rounded-xl bg-background/45 p-3 backdrop-blur-[2px] xl:hidden"
        >
          <NuxtImg src="/images/review.png" class="w-[128px] sm:w-[148px] object-contain" />
        </div>

        <div
          class="box-border z-40 hidden h-[140px] w-[209px] flex-row items-start gap-2.5 rounded-2xl bg-background/30 p-6 backdrop-blur-[2px] xl:absolute xl:left-[380px] xl:top-[90px] xl:flex"
        >
          <NuxtImg src="/images/trade.png" class="h-full w-full object-contain" />
        </div>

        <div
          class="box-border z-40 hidden h-[170.12px] w-[220px] flex-col items-start justify-center gap-2 rounded-2xl bg-background/30 p-6 backdrop-blur-[2px] xl:absolute xl:left-[-27px] xl:top-[350px] xl:flex"
        >
          <NuxtImg src="/images/review.png" class="h-full w-full object-contain" />
        </div>
      </div>

      <!-- Right column -->
      <div>
        <span class="text-secondary font-bold text-sm md:text-base">AI-Driven Features</span>
        <h1 class="text-secondary text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-6 line">
          <span class="text-primary">Smarter Trading, </span>Zero Emotion
        </h1>
        <p class="text-primary font-semibold mb-3 mt-4">
          Every trading decision is powered by AI that eliminates emotional bias and executes with
          mathematical precision.
        </p>

        <Accordion
          type="single"
          collapsible
          default-value="item-0"
          class="w-full space-y-3 sm:space-y-4 mt-6"
        >
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

    <div class="relative z-10">
      <div
        class="w-full md:mt-24 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-10 py-4 md:py-8 lg:py-10 items-center"
      >
        <!-- Left column -->
        <div class="w-full">
          <span class="text-secondary font-bold text-sm md:text-base"
            >Built for the Saudi Market</span
          >
          <h1 class="text-secondary text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-6 line">
            <span class="text-primary">Institutional-Grade, </span>AI Strategies
          </h1>
          <p class="text-primary font-semibold mt-6 md:mt-[16px]">
            Deploy the same AI-powered strategies used by top hedge funds. Our algorithms analyze
            Tadawul, NOMU, and global correlations to make data-driven trading decisions — fully
            automated, fully transparent.
          </p>

          <div class="mt-6 space-y-4">
            <div
              v-for="item in strategyItems"
              :key="item.title"
              class="flex w-full items-center rounded-2xl p-3 md:p-3 lg:p-2 gap-4"
            >
              <component
                :is="item.icon"
                class="h-8 w-8 md:h-10 md:w-10 rounded-sm bg-primary p-2 text-secondary shrink-0"
              />
              <h3 class="text-secondary text-lg md:text-xl flex-1">{{ item.title }}</h3>
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
