<script setup lang="ts">
import {
  Copy, Check, Share2, Users, Wallet, TrendingUp,
  MessageCircle, Mail, Link, Clock, CheckCircle2, XCircle
} from 'lucide-vue-next'

definePageMeta({ layout: 'app' })

const authStore = useAppAuthStore()
const copied = ref(false)
const referralCode = computed(() => {
  const user = authStore.authUser
  if (!user) return 'SINDBAD-XXXX'
  return `SINDBAD-${String(user.user_id ?? user.id ?? '').padStart(4, '0')}`
})
const referralLink = computed(() => `https://sindbad.tech/register?ref=${referralCode.value}`)

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(referralLink.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    copied.value = false
  }
}

const shareWhatsApp = () => {
  const msg = encodeURIComponent(`Join Sindbad.Tech — AI-powered stock trading for Saudi markets. Use my referral link: ${referralLink.value}`)
  window.open(`https://wa.me/?text=${msg}`, '_blank')
}

const shareEmail = () => {
  const subject = encodeURIComponent('Join me on Sindbad.Tech')
  const body = encodeURIComponent(`Hey,\n\nI've been using Sindbad.Tech for AI-powered stock trading and thought you'd be interested.\n\nSign up using my referral link and we both earn rewards:\n${referralLink.value}\n\nSee you there!`)
  window.open(`mailto:?subject=${subject}&body=${body}`)
}

const stats = [
  { label: 'Total Referrals', value: '0', icon: Users, color: 'text-secondary', bg: 'bg-secondary/10' },
  { label: 'Active Referrals', value: '0', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { label: 'Total Earned', value: '0 SAR', icon: Wallet, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Pending Rewards', value: '0 SAR', icon: Clock, color: 'text-violet-400', bg: 'bg-violet-400/10' },
]

const steps = [
  { step: '01', title: 'Share Your Link', desc: 'Copy your unique referral link and share it with friends, family, or your network.' },
  { step: '02', title: 'Friend Signs Up', desc: 'Your friend registers on Sindbad.Tech using your referral link and subscribes to a plan.' },
  { step: '03', title: 'You Both Earn', desc: 'You receive 10% of their subscription fee for up to 3 months. Your friend gets a welcome bonus.' },
]

type ReferralStatus = 'active' | 'pending' | 'inactive'

const referrals: { name: string; date: string; status: ReferralStatus; earned: string }[] = []

const statusConfig: Record<ReferralStatus, { label: string; class: string; icon: typeof CheckCircle2 }> = {
  active: { label: 'Active', class: 'text-emerald-400 bg-emerald-400/10', icon: CheckCircle2 },
  pending: { label: 'Pending', class: 'text-amber-400 bg-amber-400/10', icon: Clock },
  inactive: { label: 'Inactive', class: 'text-muted-foreground bg-muted/30', icon: XCircle },
}
</script>

<template>
  <section class="mx-auto w-full max-w-5xl space-y-8 px-4 py-10 xl:px-0">

    <div>
      <h1 class="text-2xl font-bold text-primary">Referrals</h1>
      <p class="mt-1 text-sm text-muted-foreground">Invite friends and earn rewards when they join Sindbad.Tech.</p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="stat in stats" :key="stat.label"
        class="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-shadow hover:shadow-md">
        <div :class="[stat.bg, 'flex h-11 w-11 shrink-0 items-center justify-center rounded-full']">
          <component :is="stat.icon" :class="[stat.color, 'h-5 w-5']" />
        </div>
        <div>
          <p class="text-xl font-bold text-primary">{{ stat.value }}</p>
          <p class="text-xs text-muted-foreground">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-border bg-card p-6 space-y-5">
      <div class="flex items-center gap-2">
        <Link class="h-5 w-5 text-secondary" />
        <h2 class="text-base font-semibold text-primary">Your Referral Link</h2>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div class="flex flex-1 items-center gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3">
          <span class="flex-1 truncate font-mono text-sm text-muted-foreground select-all">{{ referralLink }}</span>
          <span class="shrink-0 rounded-md bg-secondary/10 px-2 py-0.5 text-xs font-semibold text-secondary">{{
            referralCode }}</span>
        </div>
        <button :class="[
          'flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary',
          copied
            ? 'bg-emerald-500/20 text-emerald-400'
            : 'bg-secondary text-white hover:opacity-90 active:scale-95'
        ]" :aria-label="copied ? 'Copied!' : 'Copy referral link'" @click="copyLink">
          <component :is="copied ? Check : Copy" class="h-4 w-4" />
          {{ copied ? 'Copied!' : 'Copy Link' }}
        </button>
      </div>
      <div class="flex flex-wrap gap-3 pt-1">
        <button
          class="flex items-center gap-2 rounded-xl border border-border bg-muted/20 px-4 py-2.5 text-sm font-medium text-primary transition hover:border-secondary/40 hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          aria-label="Share via WhatsApp" @click="shareWhatsApp">
          <MessageCircle class="h-4 w-4 text-emerald-400" />
          WhatsApp
        </button>
        <button
          class="flex items-center gap-2 rounded-xl border border-border bg-muted/20 px-4 py-2.5 text-sm font-medium text-primary transition hover:border-secondary/40 hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          aria-label="Share via Email" @click="shareEmail">
          <Mail class="h-4 w-4 text-secondary" />
          Email
        </button>
      </div>
    </div>

    <div class="rounded-2xl border border-border bg-card p-6 space-y-5">
      <div class="flex items-center gap-2">
        <TrendingUp class="h-5 w-5 text-secondary" />
        <h2 class="text-base font-semibold text-primary">Rewards Structure</h2>
      </div>
      <div class="grid gap-4 sm:grid-cols-3">
        <div class="rounded-xl border border-secondary/20 bg-secondary/5 p-4 text-center">
          <p class="text-3xl font-bold text-secondary">10%</p>
          <p class="mt-1 text-sm font-medium text-primary">Commission Rate</p>
          <p class="mt-1 text-xs text-muted-foreground">Of your referee's subscription fee</p>
        </div>
        <div class="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-center">
          <p class="text-3xl font-bold text-amber-400">3</p>
          <p class="mt-1 text-sm font-medium text-primary">Months Duration</p>
          <p class="mt-1 text-xs text-muted-foreground">Earn for up to 3 months per referral</p>
        </div>
        <div class="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4 text-center">
          <p class="text-3xl font-bold text-emerald-400">∞</p>
          <p class="mt-1 text-sm font-medium text-primary">No Referral Limit</p>
          <p class="mt-1 text-xs text-muted-foreground">Refer as many people as you want</p>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-border bg-card p-6 space-y-5">
      <div class="flex items-center gap-2">
        <Share2 class="h-5 w-5 text-secondary" />
        <h2 class="text-base font-semibold text-primary">How It Works</h2>
      </div>
      <div class="grid gap-4 sm:grid-cols-3">
        <div v-for="(step, i) in steps" :key="step.step" class="relative flex gap-4">
          <div class="flex flex-col items-center">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary ring-2 ring-secondary/20">
              {{ step.step }}
            </div>
            <div v-if="i < steps.length - 1" class="mt-2 hidden h-full w-px bg-secondary/20 sm:block" />
          </div>
          <div class="pb-4">
            <p class="font-semibold text-primary">{{ step.title }}</p>
            <p class="mt-1 text-sm text-muted-foreground leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-border bg-card p-6 space-y-5">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Users class="h-5 w-5 text-secondary" />
          <h2 class="text-base font-semibold text-primary">My Referrals</h2>
        </div>
        <span class="rounded-full bg-secondary/10 px-3 py-0.5 text-xs font-semibold text-secondary">
          {{ referrals.length }} total
        </span>
      </div>

      <div v-if="referrals.length === 0" class="flex flex-col items-center justify-center gap-3 py-14 text-center">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-muted/40">
          <Users class="h-7 w-7 text-muted-foreground" />
        </div>
        <p class="text-sm font-medium text-primary">No referrals yet</p>
        <p class="max-w-xs text-xs text-muted-foreground">Share your referral link above and start earning when friends
          sign up.</p>
      </div>

      <div v-else class="overflow-x-auto rounded-xl border border-border">
        <table class="w-full text-sm">
          <thead>
            <tr
              class="border-b border-border bg-muted/20 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Date Joined</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3 text-right">Earned</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr v-for="ref in referrals" :key="ref.name" class="transition-colors hover:bg-muted/10">
              <td class="px-4 py-3 font-medium text-primary">{{ ref.name }}</td>
              <td class="px-4 py-3 text-muted-foreground">{{ ref.date }}</td>
              <td class="px-4 py-3">
                <span
                  :class="['inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold', statusConfig[ref.status].class]">
                  <component :is="statusConfig[ref.status].icon" class="h-3 w-3" />
                  {{ statusConfig[ref.status].label }}
                </span>
              </td>
              <td class="px-4 py-3 text-right font-semibold text-primary">{{ ref.earned }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </section>
</template>
