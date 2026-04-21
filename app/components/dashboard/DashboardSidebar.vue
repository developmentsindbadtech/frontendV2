<script setup lang="ts">
import {
  CreditCard, type LucideComponent, Megaphone, Banknote, TvMinimalPlay, Bot, ShieldUser, LayoutDashboard,MessageCircle
} from 'lucide-vue-next'

const { t, locale } = useI18n()

const sidebarSide = computed(() => locale.value === 'ar' ? 'right' : 'left')

const navItems: { key: string; icon: typeof LucideComponent; to: string }[] = [
  { key: 'dashboard', icon: LayoutDashboard, to: '/dashboard' },
  { key: 'referrals', icon: Megaphone, to: '/dashboard/referrals' },
  { key: 'profile', icon: CreditCard, to: '/dashboard/profile' },
  { key: 'whatsapp', icon: MessageCircle, to: '/dashboard/whatsapp' },
  { key: 'dpm', icon: Banknote, to: '/dashboard/dpm' },
  { key: 'subscriptions', icon: TvMinimalPlay, to: '/dashboard/subscriptions' },
  { key: 'tradingBot', icon: Bot, to: '/dashboard/trading-bot' },
  { key: 'admin', icon: ShieldUser, to: '/dashboard/admin' },
]
</script>

<template>
  <Sidebar :side="sidebarSide">
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
        <SidebarGroupLabel>{{ t('nav.label') }}</SidebarGroupLabel>
        <SidebarGroupContent>
          <nav>
            <SidebarMenu>
              <SidebarMenuItem v-for="item in navItems" :key="item.key">
                <SidebarMenuButton as-child>
                  <NuxtLink :to="item.to">
                    <component :is="item.icon" class="h-10 w-10 text-secondary" />
                    <span class="text-sm md:text-base font-bold text-primary">{{
                      t(`nav.${item.key}`)
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
