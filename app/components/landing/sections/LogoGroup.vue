<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
const sectionRef = ref<HTMLElement | null>(null)


onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry) return
      if (entry.isIntersecting) {
        sectionRef.value?.classList.remove('animate-fade-up')
        requestAnimationFrame(() => {
          sectionRef.value?.classList.add('animate-fade-up')
        })
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

</script>

<template>
  <section
    ref="sectionRef" 
    class="w-full max-w-7xl mx-auto md:mt-24 mt-12 px-4 sm:px-6 lg:px-0"
    >
    <div class="w-full mx-auto">
      <h1 class="text-md sm:text-xl font-bold text-center text-natural mt-6">
        Trusted by leading institutions in the Saudi market
      </h1>

      <!-- Trusted brands logos placeholder -->
      <div class="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center mt-6">
        <NuxtImg
          v-for="value in 6"
          :key="value"
          src="/images/brand-placeholder.png"
          alt="Trusted brand logo"
          width="120"
          height="48"
          class="w-30 h-auto mx-auto"
        />
      </div>
    </div>
  </section>
</template>
