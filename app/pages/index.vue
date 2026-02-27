<script setup lang="ts">
import Hero from '~/components/landing/sections/Hero.vue'
import Feature from '~/components/landing/sections/Feature.vue'
import Testimonials from '~/components/landing/sections/Testimonials.vue'
definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <div>
    <Hero />
    <Feature />
    <Testimonials />
  </div>
</template>

<!-- <script setup lang="ts">
definePageMeta({
  layout: 'app',
})
</script> -->
