<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const props = defineProps<{
  title: string
  menuItems: string[]
}>()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="default" size="sm" class="hover:bg-background hover:text-secondary">
        <span class="text-lg">{{ props.title }}</span>
        <ChevronDown class="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56" align="start">
      <DropdownMenuItem>
        <span>{{ props.title }}</span>
      </DropdownMenuItem>
      <DropdownMenuItem v-for="item in props.menuItems" :key="item">
        <span>{{ item }}</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
