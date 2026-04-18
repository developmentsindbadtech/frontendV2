<script setup lang="ts">
const { locale, setLocale } = useI18n()

const toggleLang = () => {
  setLocale(locale.value === 'en' ? 'ar' : 'en')
}
</script>

<template>
  <header
    class="flex h-14 shrink-0 py-5 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-15">
    <div class="flex items-center gap-2">
      <SidebarTrigger class="-ms-1" />
      <Separator orientation="vertical" class="me-2 h-4" />
      <NuxtLink to="/">
        <NuxtImg src="svg/sindbad-logo.svg" alt="Sindbad Tech Logo" class="h-30 w-30" />
      </NuxtLink>
    </div>
    <div class="ms-auto flex items-center gap-2">
      <button
        class="flex items-center gap-2 rounded-full border border-[#3E4C5A] bg-[#183153] px-4 py-1.5 shadow-sm text-base font-semibold text-white transition-colors duration-150 hover:bg-[#20406a] focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2"
        :aria-label="locale === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'" @click="toggleLang"
        style="min-width: 120px; min-height: 40px;">
        <span class="flex items-center justify-center rounded-md p-0.5"
          style="height:28px;width:38px;background:transparent;">
          <NuxtImg v-if="locale === 'en'" src="/images/saudi-flag.png" alt="Saudi Flag" class="h-6 w-8 object-cover" />
          <NuxtImg v-else src="/images/uk-flag.png" alt="UK Flag" class="h-6 w-8 object-cover" />
        </span>
        <span class="ms-2 text-lg font-bold tracking-wide select-none" style="color:#E2E8F0;">{{ locale === 'en' ?
          'العربية' : 'English' }}</span>
      </button>
      <DashboardThemeToggle />
      <DashboardUserMenu />
    </div>
  </header>
</template>
