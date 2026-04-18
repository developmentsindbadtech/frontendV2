<script setup lang="ts">
definePageMeta({
  layout: 'app',
})

const tabs = [
  { label: 'DPM (Low-risk)', path: '/dashboard/dpm/low-risk' },
  { label: 'DPM (Medium-risk)', path: '/dashboard/dpm/medium-risk' },
  { label: 'DPM (High-risk)', path: '/dashboard/dpm/high-risk' },
  { label: 'DPM (Custom)', path: '/dashboard/dpm/custom' },
  { label: 'DPM (Paper Trading)', path: '/dashboard/dpm/paper-trading' },
]
</script>

<template>
  <section class="grid w-full max-w-10xl gap-6 xl:px-0">
    <div class="flex items-center gap-2 rounded-xl border border-border p-1 w-fit">
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.path"
        :to="tab.path"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary/20"
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
