<script setup lang="ts">
const sectionsLeft = [
  { title: 'About Us', url: '#about-us' },
  { title: 'Learn More', url: '#learn-more' },
  { title: 'Contact Us', url: '#contact' },
  { title: 'AI Tools', url: '#ai-tools' },
]

const sectionsRight = [
  { title: "FAQ's", url: '#faq' },
  { title: 'Blogs', url: '#blogs' },
  { title: 'Privacy Policy', url: '#privacy-policy' },
  { title: 'Terms & Conditions', url: '#terms-&-service' },
]

const socials = [
  { name: 'LinkedIn', image: 'images/sm-linkedin-icon.png', url: '#' },
  { name: 'X (Twitter)', image: 'images/sm-x-icon.png', url: '#' },
]

const payments = [
  { name: 'VISA', image: 'images/visa-2.png', url: '#' },
  { name: 'Mastercard', image: 'images/mastercard-2.png', url: '#' },
  { name: 'MADA', image: 'images/mada.jpg', url: '#' },
]
</script>

<template>
  <footer class="w-full mt-16 md:mt-24 border-t border-secondary/20">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-10 md:py-14">
      <!-- Top -->
      <div class="grid grid-cols-1 mx-3 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
        <!-- Brand -->
        <div class="flex flex-col items-center md:items-start gap-4">
          <NuxtImg src="/images/Logo(1).png" alt="Sindbad.Tech Logo" class="w-36 md:w-44" />
          <p class="text-sm text-center md:text-start text-primary/80 max-w-xs">
            AI-powered trading automation built for the Saudi market.
          </p>
        </div>

        <!-- Links (2 columns) -->
        <div class="grid grid-cols-2 gap-8">
          <ul class="space-y-3">
            <li v-for="section in sectionsLeft" :key="section.title">
              <NuxtLink
                :to="section.url"
                class="text-sm md:text-base text-primary hover:text-secondary"
              >
                {{ section.title }}
              </NuxtLink>
            </li>
          </ul>

          <ul class="space-y-3">
            <li v-for="section in sectionsRight" :key="section.title">
              <NuxtLink
                :to="section.url"
                class="text-sm md:text-base text-primary hover:text-secondary"
              >
                {{ section.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <div class="flex flex-col items-center md:col-span-2 xl:col-span-1 xl:items-end gap-4">
          <h3
            class="text-center xl:text-center text-primary font-semibold text-base md:text-lg max-w-sm"
          >
            <span class="text-secondary font-bold">SIGN UP NOW FOR FREE To</span> get the
            Sinbad.Tech bot experience
          </h3>
          <button
            class="bg-secondary cursor-pointer text-white font-bold px-6 py-3 rounded-xl hover:bg-secondary/90 transition-colors w-full md:max-w-xs"
          >
            Sign Up
          </button>
        </div>
      </div>

      <!-- Legal + Social + Payments in one row -->
      <div
        class="mt-8 pt-6 border-t border-secondary/20 flex flex-col xl:flex-row xl:justify-between xl:items-start gap-6 w-full"
      >
        <div class="flex flex-col gap-2 text-center mx-auto xl:text-left min-w-0">
          <p class="text-xs md:text-sm text-primary/80 lg:max-w-2xl">
            Sindbad.Tech Commercial Registration No. 2055130307, permitted by the Capital Market
            Authority (2023-115-05). VAT Registration Number (104240002616387)
          </p>
          <span class="text-xs md:text-sm text-primary/80">
            {{ 'Copyright © ' + new Date().getFullYear() + ' All Rights Reserved | Sindbad.Tech' }}
          </span>
        </div>

        <div
          class="flex flex-col mx-auto sm:flex-row sm:flex-wrap items-center sm:items-start gap-6 sm:gap-8 xl:gap-10 xl:justify-end"
        >
          <div class="mx-auto sm:mx-0">
            <p class="text-sm font-semibold text-center text-primary mb-3">Follow us</p>
            <div class="flex items-center gap-2">
              <a v-for="social in socials" :key="social.image" :href="social.url">
                <NuxtImg
                  :src="social.image"
                  :alt="social.name || 'Social media icon'"
                  class="w-15 rounded-full hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>

          <div>
            <p class="text-sm font-semibold text-primary text-center mb-3">Payment methods</p>
            <div class="flex items-center gap-1 flex-wrap mx-auto justify-center">
              <a v-for="payment in payments" :key="payment.name" :href="payment.url">
                <NuxtImg
                  :src="payment.image"
                  :alt="payment.name + ' payment method'"
                  class="w-15 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
