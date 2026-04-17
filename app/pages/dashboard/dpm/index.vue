<script setup lang="ts">
definePageMeta({
  layout: 'app',
})

const tabs = [
  { label: 'DPM (Low-risk)',      path: '/dpm/low-risk' },
  { label: 'DPM (Medium-risk)',   path: '/dpm/medium-risk' },
  { label: 'DPM (High-risk)',     path: '/dpm/high-risk' },
  { label: 'DPM (Custom)',        path: '/dpm/custom' },
  { label: 'DPM (Paper Trading)', path: '/dpm/paper-trading' },
]
</script>

<template>
  <section class="grid w-full max-w-10xl gap-6 xl:px-0">
    <div class="flex items-center gap-2 rounded-xl border border-border p-1 w-fit ">
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.path"
        :to="tab.path"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary"
        active-class="bg-primary text-primary-foreground"
      >
        {{ tab.label }}
      </NuxtLink>
    </div>

    <div class="mt-6">
      <NuxtPage />
    </div>
  </section>
</template>
