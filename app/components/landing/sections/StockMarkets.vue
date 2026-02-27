<script setup lang="ts">
const marketFlags = [
  {
    name: 'Saudi Arabia',
    src: '/images/stock-markets/Flag_of_Saudi_Arabia.svg 1.png',
    status: 'Success',
    className: 'w-12 h-12 md:w-[57px] md:h-[57px] top-[59%] left-[56%]',
  },
  {
    name: 'Philippines',
    src: '/images/stock-markets/Flag_of_the_Philippines.svg 1.png',
    status: 'In-progress',
    className: 'w-12 h-12 md:w-[57px] md:h-[57px] top-[57%] left-[84%]',
  },
  {
    name: 'United States',
    src: '/images/stock-markets/usa-flag1728 1.png',
    status: 'In-progress',
    className: 'w-12 h-12 md:w-[57px] md:h-[57px] top-[45%] left-[20%]',
  },
  {
    name: 'United Kingdom',
    src: '/images/stock-markets/Flag-United-Kingdom 1.png',
    status: 'Success',
    className: 'w-14 h-14 md:w-[72px] md:h-[72px] top-[33%] left-[47%]',
  },
]

const statusClass = (status: string) => {
  if (status === 'Success') {
    return 'text-secondary border-secondary/40 bg-primary'
  }

  return 'text-primary border-primary/30 bg-secondary/20'
}
</script>

<template>
  <section class="mt-72 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
    <div class="w-full flex flex-col items-center gap-8 py-5 md:mx-auto px-4 sm:px-6 lg:px-0">
      <h2 class="text-primary text-sm sm:text-2xl md:text-5xl font-bold text-center">
        <span class="text-secondary">Target Stock Markets</span>
        in the Future
      </h2>

      <h3 class="text-primary text-center text-base md:text-2xl font-bold">
        One of the main goal here in Sindbad.Tech is to expand globally
      </h3>

      <div
        class="rounded-sm shadow-2xl p-4 sm:p-6 md:p-10 border border-secondary/20 bg-primary/10 w-full max-w-7xl"
      >
        <div class="relative w-full max-w-7xl mx-auto mt-6 md:mt-12">
          <NuxtImg
            src="/images/stock-markets/Vector.png"
            class="w-full max-w-7xl mx-auto"
            alt="Target stock markets map"
          />

          <div
            v-for="flag in marketFlags"
            :key="flag.name"
            class="group absolute -translate-x-1/2 -translate-y-1/2"
            :class="flag.className"
          >
            <NuxtImg
              :src="flag.src"
              :alt="`${flag.name} flag`"
              class="w-full h-full object-cover rounded-full border-white"
            />

            <span
              class="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"
              :class="statusClass(flag.status)"
            >
              {{ flag.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
