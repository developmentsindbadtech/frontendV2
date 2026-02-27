<script setup lang="ts">
import Hero from '~/components/landing/sections/Hero.vue'
import Feature from '~/components/landing/sections/Feature.vue'
import SharCompliance from '~/components/landing/sections/ShariaCompliance.vue'
import Faq from '~/components/landing/sections/Faq.vue'
import Calculator from '~/components/landing/sections/Calculator.vue'
import TeamCard from '~/components/landing/sections/TeamCard.vue'
import CallToAction from '~/components/landing/sections/CallToAction.vue'
import Testimonials from '~/components/landing/sections/Testimonials.vue'

definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <div>
    <Hero />
    <Feature />
    <SharCompliance />
    <Calculator />
    <TeamCard />
    <Testimonials />
    <CallToAction />
    <Faq />
  </div>
</template>

<!-- <script setup lang="ts">
definePageMeta({
  layout: 'app',
})
</script> -->
