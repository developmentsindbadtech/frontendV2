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
    <h2>Dashboard</h2>
  </section>
</template>
