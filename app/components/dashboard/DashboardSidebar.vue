<script setup lang="ts">
import { CreditCard, type LucideComponent } from 'lucide-vue-next'

const navItems: { title: string; icon: typeof LucideComponent; to: string }[] = [
  {
    title: 'Subscriptions',
    icon: CreditCard,
    to: '/subscriptions',
  },
]
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <NuxtLink to="/">
              <NuxtImg src="svg/sindbad-logo.svg" alt="Sindbad Tech Logo" />
            </NuxtLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <nav>
            <SidebarMenu>
              <SidebarMenuItem v-for="item in navItems" :key="item.title">
                <SidebarMenuButton as-child>
                  <NuxtLink :to="item.to">
                    <component :is="item.icon" class="h-10 w-10 text-secondary" />
                    <span class="text-sm md:text-base font-bold text-primary">{{
                      item.title
                    }}</span>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </nav>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter />
    <SidebarRail />
  </Sidebar>
</template>
