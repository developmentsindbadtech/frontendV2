<template>
  <section class="w-full max-w-7xl mx-auto md:mt-18 mt-12 px-4 sm:px-6 lg:px-0">
    <div class="w-full mx-auto">
      <h1 class="text-md sm:text-xl font-bold text-center text-natural">
        Trusted by leading institutions in the Saudi market
      </h1>

      <!-- Trusted brands logos placeholder -->
      <div class="flex flex-col md:flex-row mt-12 gap-6 md:gap-0 justify-between items-center">
        <NuxtImg
          v-for="value in 6"
          :key="value"
          src="/images/brand-placeholder.png"
          alt="Trusted brand logo"
          width="120"
          height="48"
          class="w-30 h-auto mx-auto"
        />
      </div>
    </div>
  </section>
</template>
