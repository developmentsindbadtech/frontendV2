<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const props = defineProps<{
  title: string
  menuItems: string[]
}>()
</script>

<template>
  <!-- 
    DropdownMenu wrapper
    modal=false allows interaction outside the dropdown 
    without fully locking the UI (non-blocking behavior)
  -->
  <DropdownMenu :modal="false">
    <DropdownMenuTrigger as-child>
      <Button variant="default" size="sm"
        class="hover:bg-transparent hover:text-secondary bg-transparent border-0 text-primary focus:ring-0 focus:ring-offset-0 data-[state=open]:bg-transparent data-[state=open]:text-secondary cursor-pointer">
        <span class="text-lg">{{ props.title }}</span>
        <ChevronDown class="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>

    <!-- Added offset 20 to align drop down menu to the border -->
    <DropdownMenuContent align="center" :side-offset="20"
      class="w-48 p-2 rounded-xl border border-border bg-card shadow-lg z-50">
      <DropdownMenuItem class="w-full justify-start cursor-pointer font-medium text-primary">
        <span class="block w-full">{{ props.title }}</span>
      </DropdownMenuItem>

      <div class="h-px bg-border my-1 mx-2"></div>

      <DropdownMenuItem v-for="item in props.menuItems" :key="item"
        class="w-full justify-start cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
        <span class="block w-full">{{ item }}</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>