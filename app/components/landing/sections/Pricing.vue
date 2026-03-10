<script setup lang="ts">
import type { Component } from 'vue'
import { Building2, Check, Crown, Gem, Sparkles, User } from 'lucide-vue-next'

type PlanTheme = 'sky' | 'teal' | 'blue' | 'rose'

interface PricingPlan {
  name: string
  subtitle: string
  share: string
  feeModel: string
  description: string
  features: string[]
  cta: string
  icon: Component
  theme: PlanTheme
  featured?: boolean
  popular?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Individual',
    subtitle: 'AI Algo Trader',
    share: '25% Profit Share',
    feeModel: 'SAR 3,600 annual credit',
    description: 'AI-powered trading algorithm for all investors.',
    features: [
      'Up to 1M Capital',
      '3 days free trial',
      '25% profit sharing of net profit',
      'SAR 3,600 annual credit',
      'AI-powered trading algo',
      'User approves buy signals',
    ],
    cta: 'Start 3 - Day Trial',
    icon: User,
    theme: 'sky',
  },
  {
    name: 'DPM',
    subtitle: 'Manage Portfolio',
    share: '2% + 25% Profit Share',
    feeModel: 'Management + Performance',
    description: 'Fully autonomous trading bot managed by DPM experts.',
    features: [
      'Up to 10M Capital',
      'Fully Automated Trading',
      '2% management fee + 25% profit share',
      'AI-powered autonomous bot',
      'DPM Manager expert oversight',
    ],
    cta: 'Upgrade Plan',
    icon: Crown,
    theme: 'teal',
    featured: true,
    popular: true,
  },
  {
    name: 'DPM Elite',
    subtitle: 'Manage Portfolio',
    share: '2% + 20% Profit Share',
    feeModel: 'Management + Performance',
    description: 'Fully autonomous trading bot managed by DPM experts.',
    features: [
      'Up to 50M Capital',
      'Custom bot strategy',
      '2% management fee + 20% profit share',
      'Aligned with investor goals',
      'Dedicated DPM Manager',
    ],
    cta: 'Contact Us',
    icon: Gem,
    theme: 'blue',
  },
  {
    name: 'Institutional',
    subtitle: 'Manage Portfolio',
    share: '2% + 20% Profit Share',
    feeModel: 'Management + Performance',
    description: 'Enterprise-grade infrastructure for institutional investors.',
    features: [
      'Unlimited Capital',
      'Multi-portfolio management',
      '2% management fee + 20% profit share',
      'Dedicated AI model & infra',
      'White-glove concierge advisory',
    ],
    cta: 'Contact Us',
    icon: Building2,
    theme: 'rose',
  },
]

const iconToneClasses: Record<PlanTheme, string> = {
  sky: 'text-[#33B5E5] bg-[#33B5E51F]',
  teal: 'text-[#22C0D9] bg-[#22C0D91F]',
  blue: 'text-[#0973E6] bg-[#0973E61F]',
  rose: 'text-[#E63F5E] bg-[#E63F5E1F]',
}

const headingToneClasses: Record<PlanTheme, string> = {
  sky: 'text-[#33B5E5]',
  teal: 'text-[#22C0D9]',
  blue: 'text-[#0973E6]',
  rose: 'text-[#E63F5E]',
}
</script>

<template>
  <section class="mx-auto mt-12 w-full max-w-7xl px-4 py-7.5 sm:px-6 md:mt-24 lg:px-0">
    <div class="flex w-full flex-col items-center gap-6 md:gap-8">
      <div class="flex w-full flex-col items-center gap-4 text-center">
        <span class="text-base font-bold leading-5.25 text-[#33B5E5]">Pricing</span>
        <h2
          class="text-center text-3xl font-bold leading-tight text-[#042637] sm:text-4xl md:text-5xl md:leading-15.75"
        >
          Transparent <span class="text-[#6EC8F4]">Pricing</span>
        </h2>
        <p class="text-sm font-normal leading-5.25 text-[#001018] md:text-base">
          Choose the plan that matches your investment ambitions.
        </p>
      </div>

      <div class="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
        <article v-for="plan in plans" :key="plan.name" class="h-full rounded-2xl p-px">
          <div class="flex h-full min-h-132 flex-col rounded-2xl bg-[#F7FBFD] p-8">
            <div
              v-if="plan.popular"
              class="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#22C0D9] px-3 py-1"
            >
              <Sparkles class="h-3.5 w-3.5 text-white" />
              <span class="text-[11px] font-semibold leading-4 text-white">Most Popular</span>
            </div>

            <div class="flex items-start gap-3">
              <div
                :class="[
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px]',
                  iconToneClasses[plan.theme],
                ]"
              >
                <component :is="plan.icon" class="h-5 w-5" />
              </div>

              <div class="space-y-2">
                <div>
                  <h3 :class="['text-base font-bold leading-6', headingToneClasses[plan.theme]]">
                    {{ plan.name }}
                  </h3>
                  <p class="text-[11px] leading-4 text-[#19465D]">
                    {{ plan.subtitle }}
                  </p>
                </div>

                <div>
                  <p class="text-[13px] font-semibold leading-5 text-[#19465D]">
                    {{ plan.share }}
                  </p>
                  <p class="text-[10px] leading-3.75 text-[#19465D]">
                    {{ plan.feeModel }}
                  </p>
                </div>
              </div>
            </div>

            <p class="mt-4 text-xs leading-4.5 text-[#19465D]">
              {{ plan.description }}
            </p>

            <ul class="mt-4 space-y-2">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2.5">
                <span
                  class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#33B5E51F]"
                >
                  <Check class="h-3 w-3 text-[#33B5E5]" />
                </span>
                <span class="text-xs leading-4.5 text-[#19465D]">{{ feature }}</span>
              </li>
            </ul>

            <button
              class="mt-4 w-full cursor-pointer text-center text-xs leading-4.5 text-[#6EC8F4]"
            >
              See more
            </button>

            <button
              class="mt-auto cursor-pointer rounded-full border border-[#33B5E530] bg-[#33B5E515] px-6 py-3 text-center text-[13px] font-semibold leading-5 text-[#33B5E5] transition-colors hover:bg-[#33B5E522]"
            >
              {{ plan.cta }}
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
