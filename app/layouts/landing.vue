<script setup lang="ts">
const navigations = [
  {
    title: 'Feature',
    menuItems: ['Product 1', 'Product 2', 'Product 3'],
  },
  {
    title: 'About',
    menuItems: ['About Us', 'Careers', 'Contact'],
  },
  {
    title: 'Pricing',
    menuItems: ['Blog', 'Help Center', 'Privacy Policy'],
  },
  {
    title: 'Invest Now',
    menuItems: ['Blog', 'Help Center', 'Privacy Policy'],
  },
]
</script>

<template>
  <div class="w-full min-h-screen">
    <header class="w-full fixed top-0 z-50 py-8">
      <nav class="px-8 flex items-center justify-between border-b-primary/50 border-b pb-4">
        <!-- Navigations -->
        <div class="flex items-center gap-4">
          <NuxtImg src="/images/Logo(1).png" alt="Logo" width="130" />
          <ClientOnly v-for="value in navigations" :key="value.title">
            <LandingDropDownNavigations :title="value.title" :menu-items="value.menuItems" />
          </ClientOnly>
        </div>

        <!-- CTA -->
        <div class="flex items-center space-x-3">
          <Button
            variant="default"
            size="lg"
            class="hover:bg-background hover:text-secondary cursor-pointer"
          >
            Sign In
          </Button>
          <Button
            variant="default"
            size="lg"
            class="bg-secondary cursor-pointer text-white hover:bg-secondary/90"
          >
            Sign Up</Button
          >

          <Button variant="outline" size="lg" class="cursor-pointer text-secondary">
            Book a Demo</Button
          >
        </div>
      </nav>
    </header>

    <main class="py-20">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
