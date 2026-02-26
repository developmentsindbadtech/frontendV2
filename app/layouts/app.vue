<template>
  <SidebarProvider>
    <DashboardSidebar />
    <SidebarInset>
      <DashboardHeader />
      <Toaster />
      <main class="flex-1 p-4 md:p-6">
        <slot />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
