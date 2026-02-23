<script setup lang="ts">
import { LayoutDashboard } from 'lucide-vue-next'

const navItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    to: '/',
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
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
              >
                <LayoutDashboard class="size-4" />
              </div>
              <div class="flex flex-col gap-0.5 leading-none">
                <span class="font-semibold">My App</span>
                <span class="text-xs text-muted-foreground">Dashboard</span>
              </div>
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
                    <component :is="item.icon" />
                    <span>{{ item.title }}</span>
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
