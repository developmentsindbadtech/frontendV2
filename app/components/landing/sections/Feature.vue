<script setup lang="ts">
import { type Component, ref, onMounted } from 'vue'
import { Brain, ShieldCheck, TrendingUp, Zap, ChartColumn, Lock, ArrowRight } from 'lucide-vue-next'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

const sectionRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return
      if (entry.isIntersecting) {
        contentRef.value?.classList.remove('animate-fade-up')
        requestAnimationFrame(() => {
          contentRef.value?.classList.add('animate-fade-up')
        })
        observer.disconnect()
      }
    },
    { threshold: 0.3 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

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
  <section
    ref="sectionRef"
    class="relative top-10 md:top-2 bottom-0 md:-bottom-30 z-10 w-full mx-auto px-4 bg-[url('/images/bg-gradient.png')] bg-no-repeat bg-center bg-cover md:bg-size-[100%_100%] sm:px-6 lg:px-8 py-10 md:py-16 overflow-hidden md:overflow-visible"
  >
    <div ref="contentRef" class="relative z-10">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center">
        <!-- Left column -->

        <div
          class="relative mx-auto w-full max-w-85 sm:max-w-105 lg:max-w-130 xl:max-w-145 animate-fade-up animation-delay-100"
        >
          <div
            class="w-full relative -bottom-4 -left-1 sm:-bottom-10 sm:-left-20 md:-bottom-20 md:-left-44"
          >
            <NuxtImg src="/images/ellipse.png" class="w-80 md:w-full" />
          </div>
        </div>

        <img
          src="/images/Product.png"
          alt="product"
          class="absolute z-1 w-80 sm:w-60 left-35 -translate-x-1/2 -top-19 sm:-top-14 md:w-[40%] md:-left-8 md:-top-26 md:translate-x-0"
        />

        <!-- Right column -->
        <div class="animate-fade-up animation-delay-200">
          <span class="text-white font-bold text-sm md:text-base">AI-Driven Features</span>
          <h1 class="text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-6 line">
            <span class="text-primary">Smarter Trading, </span>Zero Emotion
          </h1>
          <p class="text-white font-semibold mb-3 mt-4">
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
                    class="h-8 w-8 md:h-10 md:w-10 border border-secondary rounded-sm bg-primary p-2 text-secondary shrink-0"
                  />
                  <span class="text-white">{{ faq.title }}</span>
                </div>
              </AccordionTrigger>

              <AccordionContent
                class="text-sm md:text-base text-start ml-13 text-white pb-4 sm:pb-5"
              >
                {{ faq.description }}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div
        class="max-w-7xl mx-auto pb-15 md:mt-24 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-10 py-4 md:py-8 lg:py-10 items-center"
      >
        <!-- Left column -->
        <div class="w-full">
          <span class="text-white font-bold text-sm md:text-base">Built for the Saudi Market</span>
          <h1 class="text-primary text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-6 line">
            <span class="text-white">Institutional-Grade, </span>AI Strategies
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
              class="flex w-full items-center rounded-2xl p-3 md:p-3 lg:p-2 gap-4 animate-fade-up animation-delay-300"
            >
              <component
                :is="item.icon"
                class="h-8 w-8 md:h-10 md:w-10 rounded-sm bg-primary p-2 text-secondary shrink-0"
              />
              <h3 class="text-white text-lg md:text-xl flex-1">{{ item.title }}</h3>
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
