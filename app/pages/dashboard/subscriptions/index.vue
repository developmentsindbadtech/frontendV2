<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Check } from 'lucide-vue-next'

type SubscriptionPlan = {
  name: string
  priceLabel: string
  priceUnit?: string
  originalPrice?: string
  discount?: string
  subtitle: string
  features: string[]
  cta: string
  gradientClass: string
  recommended?: boolean
  accentTextClass: string
  backgroundClass: string
  borderClass: string
}

const plans: SubscriptionPlan[] = [
  {
    name: 'Beginner',
    priceLabel: 'FREE',
    subtitle: 'Free plan with no expiry, limited to introductory usage.',
    features: [
      'Service access is granted instantly upon account registration.',
      'AUM up to 300,000 SAR.',
      'Up to 2% profit on any trade.',
      'Profit share of 25% net profit.',
      'Sindbad Bot (15min/Day).',
      '15 mins screening.',
    ],
    cta: 'Get Started',
    gradientClass: 'gradient-beginner',
    accentTextClass: 'text-[#6EC8F4]',
    backgroundClass: 'bg-[#041B2F]',
    borderClass: 'border-[#0D2A41]',
  },
  {
    name: 'Superior',
    priceLabel: '1.28',
    priceUnit: '/ Yearly',
    originalPrice: '2.00',
    discount: '-36%',
    subtitle: 'Annual subscription valid for 12 months from payment date.',
    features: [
      'If the annual credit is consumed, a 25% share of net profit will apply for the remaining months.',
      'Access to full services and bot is granted within 24 hours after successful payment.',
      'AUM up to 700,000 SAR.',
      'Average profit up to 15% yearly.',
      'Profit share of 25% net profit.',
    ],
    cta: 'Show all features',
    gradientClass: 'gradient-superior',
    accentTextClass: 'text-[#22C0D9]',
    backgroundClass: 'bg-[#042237]',
    borderClass: 'border-[#0F334F]',
    recommended: true,
  },
]

definePageMeta({
  layout: 'app',
})
</script>

<template>
  <section class="mx-auto mt-10 grid w-full max-w-5xl gap-6 px-4 pb-12 md:grid-cols-2 xl:px-0">
    <Card v-for="plan in plans" :key="plan.name" class="border-0 bg-transparent p-0 shadow-none">
      <div
        :class="[
          'flex h-full flex-col rounded-2xl border p-6 text-white shadow-[0_30px_80px_rgba(3,21,36,0.45)] transition-all duration-300 hover:-translate-y-1',
          plan.backgroundClass,
          plan.borderClass,
        ]"
      >
        <CardHeader class="space-y-4 p-0">
          <div v-if="plan.recommended" class="space-y-3">
            <div
              class="w-full rounded-full bg-white/10 px-4 py-1 text-center text-[11px] font-semibold tracking-[0.3em] text-white/80"
            >
              RECOMMENDED
            </div>
            <div class="flex items-center gap-2 text-sm">
              <span
                v-if="plan.discount"
                :class="['rounded-full bg-white/10 px-3 py-1 font-semibold', plan.accentTextClass]"
              >
                {{ plan.discount }}
              </span>
              <div v-if="plan.originalPrice" class="text-white/70 line-through">
                {{ plan.originalPrice }}
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <p :class="['text-sm font-semibold uppercase tracking-wide', plan.accentTextClass]">
              {{ plan.name }}
            </p>
            <div class="flex items-baseline gap-2">
              <span class="text-4xl font-bold">{{ plan.priceLabel }}</span>
              <span v-if="plan.priceUnit" class="text-sm text-white/70">{{ plan.priceUnit }}</span>
            </div>
            <p class="text-xs text-white/70">{{ plan.subtitle }}</p>
          </div>
        </CardHeader>

        <CardContent class="mt-4 space-y-3 p-0">
          <ul class="space-y-3">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-3 text-sm text-white/80"
            >
              <span
                class="feature-bullet mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border border-white/30"
              >
                <Check :class="['h-3 w-3', plan.accentTextClass]" />
              </span>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </CardContent>

        <CardFooter class="mt-auto p-0 pt-6">
          <button
            :class="[
              'w-full cursor-pointer rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:text-white hover:bg-gradient!',
            ]"
          >
            {{ plan.cta }}
          </button>
        </CardFooter>
      </div>
    </Card>
  </section>
</template>
