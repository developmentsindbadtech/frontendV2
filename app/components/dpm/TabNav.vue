<script setup lang="ts">
import { useDPMTabs } from '~/composables/api/useDPMTabs'
const { tabs } = useDPMTabs()
</script>

<template>
    <div class="flex flex-row gap-4">
        <div class="flex items-center gap-2 rounded-xl border border-border p-1 w-fit flex-wrap">
            <NuxtLink
            v-for="tab in tabs"
            :key="tab.path"
            :to="tab.path"
            class="px-4 py-2 rounded-lg text-xs font-medium transition-colors hover:bg-secondary/20"
            active-class="bg-primary/10 text-primary-foreground"
            >
            {{ tab.label }}
            </NuxtLink>
        </div>
        <div class="flex items-center gap-2 rounded-xl border border-border p-1 w-fit flex-wrap">
            <button class="bg-secondary/90 rounded-xl border-8 hover:bg-secondary/30">
                <p class="text-xs font-bold">DPM login</p>
            </button>
        </div>

    </div>
</template>
