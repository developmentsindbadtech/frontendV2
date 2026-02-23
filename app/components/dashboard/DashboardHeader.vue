<template>
  <header
    class="flex h-14 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
  >
    <div class="flex items-center gap-2">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="mr-2 h-4" />
      <h1 class="text-sm font-medium">Dashboard</h1>
    </div>
    <div class="ml-auto flex items-center gap-2">
      <DashboardThemeToggle />
      <DashboardUserMenu />
    </div>
  </header>
</template>
