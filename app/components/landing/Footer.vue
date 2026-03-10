<script setup lang="ts">
const features = [
  { title: 'Trading bots', url: '#' },
  { title: 'Technical Indicators', url: '#' },
  { title: 'Backtesting', url: '#' },
  { title: 'Automated Trading', url: '#' },
  { title: 'Supported stock exchange', url: '#' },
  { title: 'Technical Support', url: '#' },
]

const resources = [
  { title: 'Learn More', url: '#' },
  { title: 'User guide', url: '#' },
  { title: 'Contact us', url: '#' },
  { title: 'Refer a friend', url: '#' },
  { title: 'Career', url: '#' },
]

const company = [
  { title: 'Terms & Condition', url: '#' },
  { title: 'Policy', url: '#' },
]

const socials = [
  { name: 'LinkedIn', image: 'images/sm-linkedin-icon.png', url: '#' },
  { name: 'X (Twitter)', image: 'images/sm-x-icon.png', url: '#' },
  { name: 'YouTube', image: 'images/yt-icon.png', url: '#' },
]
</script>

<template>
  <footer class="w-full max-w-360 mx-auto mt-12 md:mt-18">
    <section class="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-10 md:py-14">
      <!-- Top -->
      <div
        class="grid grid-cols-1 gap-y-10 mx-auto sm:gap-y-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-[1.1fr_repeat(3,minmax(0,1fr))_1.4fr] lg:gap-x-8 xl:gap-x-12"
      >
        <!-- Brand -->
        <div class="flex flex-col items-center md:items-start gap-4">
          <NuxtImg src="/images/Logo(1).png" alt="Sindbad.Tech Logo" class="w-36 md:w-44" />
          <p class="text-sm md:text-base text-center md:text-start text-primary/80 max-w-62.5">
            Trading decisions powered by AI so you can build your legacy while you live it.
          </p>
        </div>

        <ul class="space-y-3 text-center md:text-start">
          <p class="text-lg font-bold text-primary">Features</p>
          <li v-for="section in features" :key="section.title" class="mt-3">
            <NuxtLink
              :to="section.url"
              class="text-sm md:text-base text-primary hover:text-secondary"
            >
              {{ section.title }}
            </NuxtLink>
          </li>
        </ul>

        <ul class="space-y-3 text-center md:text-start">
          <p class="text-lg font-bold text-primary">Resources</p>
          <li v-for="section in resources" :key="section.title" class="mt-3">
            <NuxtLink
              :to="section.url"
              class="text-sm md:text-base text-primary hover:text-secondary"
            >
              {{ section.title }}
            </NuxtLink>
          </li>
        </ul>

        <ul class="space-y-3 text-center md:text-start">
          <p class="text-lg font-bold text-primary">Company</p>
          <li v-for="section in company" :key="section.title" class="mt-3">
            <NuxtLink
              :to="section.url"
              class="text-sm md:text-base text-primary hover:text-secondary"
            >
              {{ section.title }}
            </NuxtLink>
          </li>
        </ul>

        <!-- CTA -->
        <div class="flex flex-col items-stretch md:items-start gap-3 w-full lg:max-w-sm">
          <p class="text-lg text-primary font-bold">Be update to our news</p>

          <div
            class="flex w-full py-2 px-2 items-center rounded-xl border border-primary/30 gap-2 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-3 md:px-4 py-2 text-base md:text-lg placeholder:text-base md:placeholder:text-lg text-primary bg-transparent! shadow-none! border-0! focus-visible:ring-0! focus-visible:border-0!"
            />
            <button
              type="button"
              class="shrink-0 px-4 py-3 bg-secondary cursor-pointer text-white rounded-md hover:bg-secondary/90 transition-colors text-sm font-semibold"
            >
              Join us
            </button>
          </div>
          <p class="text-base text-primary font-bold">
            Sign-Up Now to <span class="text-secondary">Get a 3-Day Trial</span>
          </p>
          <button
            type="button"
            class="w-full sm:w-auto px-4 py-3 bg-secondary cursor-pointer text-white rounded-md hover:bg-secondary/90 transition-colors text-sm font-semibold"
          >
            Start for Free
          </button>
        </div>
      </div>

      <!-- Legal + Social + Payments in one row -->
      <div
        class="mt-10 pt-4 border-t border-primary/30 flex flex-col md:flex-row md:justify-between md:items-center gap-6 w-full"
      >
        <div class="flex flex-col gap-2 text-center md:text-start min-w-0">
          <p class="text-xs md:text-sm text-primary/80 lg:max-w-2xl">
            Sindbad.Tech Commercial Registration No. 2055130307, permitted by the Capital Market
            Authority (2023-115-05). VAT Registration Number (104240002616387)
          </p>
        </div>

        <div class="mx-auto md:mx-0">
          <div class="flex items-center gap-2">
            <a v-for="social in socials" :key="social.image" :href="social.url">
              <NuxtImg
                :src="social.image"
                :alt="social.name || 'Social media icon'"
                class="w-8 rounded-full hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
