<script setup lang="ts">
import Hero from '~/components/landing/sections/Hero.vue'
import Feature from '~/components/landing/sections/Feature.vue'
import SharCompliance from '~/components/landing/sections/ShariaCompliance.vue'
import Faq from '~/components/landing/sections/Faq.vue';
import Calculator from '~/components/landing/sections/Calculator.vue';
import TeamCard from '~/components/landing/sections/TeamCard.vue';

definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <div>
    <Hero />
    <Feature />
    <SharCompliance />
    <Faq />
    <Calculator />
    <TeamCard />
  </div>
</template>

<!-- <script setup lang="ts">
definePageMeta({
  layout: 'app',
})
</script> -->
