<template>
  <header
    class="flex h-14 shrink-0 py-5 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-15"
  >
    <div class="flex items-center gap-2">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="mr-2 h-4" />
        <NuxtLink to="/">
            <NuxtImg src="svg/sindbad-logo.svg" alt="Sindbad Tech Logo" class="h-30 w-30" />
          </NuxtLink>
    </div>
    <div class="ml-auto flex items-center gap-2">
      <DashboardThemeToggle />
      <DashboardUserMenu />
    </div>
  </header>
</template>
