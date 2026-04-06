<script setup lang="ts">
import { CreditCard, type LucideComponent,Megaphone,Banknote,TvMinimalPlay,Bot,ShieldUser
} from 'lucide-vue-next'

const navItems: { title: string; icon: typeof LucideComponent; to: string }[] = [
  {
    title: 'Referrals',
    icon: Megaphone,
    to: '/dashboard/referrals',
  },
  {
    title: 'Profile',
    icon: CreditCard,
    to: '/dashboard/profile',
  },
  {
    title: 'DPM',
    icon: Banknote,
    to: '/dashboard/dpm',
  },
  {
    title: 'Subscriptions',
    icon: TvMinimalPlay,
    to: '/dashboard/subscriptions',
  },
  {
    title: 'Trading bot',
    icon: Bot,
    to: '/dashboard/trading-bot',
  },
  {
    title: 'Admin',
    icon: ShieldUser,
    to: '/dashboard/admin',
  },
]
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>

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
