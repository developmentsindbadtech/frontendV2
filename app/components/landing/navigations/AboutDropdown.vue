<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
// Items from logic flow
const menuItems = ['About/more details', 'Why Sindbad.Tech']
</script>

<template>
    <DropdownMenu :modal="false">
        <DropdownMenuTrigger as-child>
            <Button variant="default" size="sm"
                class="hover:bg-transparent hover:text-secondary bg-transparent border-0 text-primary cursor-pointer">
                <span class="text-lg">About</span>
                <ChevronDown class="ml-2 h-4 w-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" :side-offset="16"
            class="w-52 p-2 rounded-xl border border-border bg-card shadow-lg z-50">
            <DropdownMenuItem v-for="item in menuItems" :key="item"
                class="w-full justify-start cursor-pointer text-muted-foreground hover:text-foreground transition-colors p-2">
                <span class="block w-full font-medium text-sm">{{ item }}</span>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>