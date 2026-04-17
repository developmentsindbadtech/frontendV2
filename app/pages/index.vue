<script setup lang="ts">
import Hero from '~/components/landing/sections/Hero.vue'
import Feature from '~/components/landing/sections/Feature.vue'
import StockMarkets from '~/components/landing/sections/StockMarkets.vue'
import SharCompliance from '~/components/landing/sections/ShariaCompliance.vue'
import Faq from '~/components/landing/sections/Faq.vue'
import Calculator from '~/components/landing/sections/Calculator.vue'
import TeamCard from '~/components/landing/sections/TeamCard.vue'
import CallToAction from '~/components/landing/sections/CallToAction.vue'
import Testimonials from '~/components/landing/sections/Testimonials.vue'
import Pricing from '~/components/landing/sections/Pricing.vue'

definePageMeta({
  layout: 'landing',
})
useHead({
  title: 'Sindbad - AI-Powered Stock Trading for Saudi Markets',
  meta: [
    {
      name: 'description',
      content:
        'Sindbad is an AI-powered stock trading platform designed for the Saudi markets. Our advanced algorithms analyze real-time data to provide smart entry and exit points, maximizing your trading potential while minimizing emotional bias.',
    },
    {
      name: 'keywords',
      content:
        'AI stock trading, Saudi stock market, smart trading, algorithmic trading, financial technology, stock analysis, trading platform, market insights',
    },
  ],
})
</script>

<template>
  <div>
    <Hero />
    <Feature />
    <SharCompliance />
    <TeamCard />
    <StockMarkets />
    <Calculator />
    <Testimonials />
    <Pricing />
    <CallToAction />
    <Faq />
  </div>
</template>

