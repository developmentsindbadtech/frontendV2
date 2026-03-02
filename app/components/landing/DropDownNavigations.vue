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
      <Button
        variant="default"
        size="sm"
        class="hover:bg-transparent hover:text-secondary bg-transparent border-0 text-primary focus:ring-0 focus:ring-offset-0 data-[state=open]:bg-transparent data-[state=open]:text-secondary"
      >
        <span class="text-lg">{{ props.title }}</span>
        <ChevronDown class="ml-2 h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="start"
      class="fixed left-0 right-0 w-screen max-w-none rounded-none p-1"
    >
      <DropdownMenuItem class="w-full justify-start">
        <span class="block w-full">{{ props.title }}</span>
      </DropdownMenuItem>

      <DropdownMenuItem v-for="item in props.menuItems" :key="item" class="w-full justify-start">
        <span class="block w-full">{{ item }}</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
