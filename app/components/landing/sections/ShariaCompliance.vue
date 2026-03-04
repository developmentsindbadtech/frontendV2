<script setup lang="ts">
import { MoveRight } from 'lucide-vue-next'
</script>
<template>
  <section
    aria-labelledby="sharia-compliance"
    class="flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 md:mt-10 mt-4"
  >
    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-7xl mx-auto">
      <div
        class="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md mt-6 lg:mt-16"
      >
        <p class="text-secondary font-bold">Sharia Compliance</p>
        <h2 class="font-bold text-4xl lg:text-5xl mt-2">
          <span class="block mb-2">We Develop</span>
          <span class="text-secondary block mb-2">A strong </span>
          <span class="text-secondary block">obedience</span>
        </h2>

        <p class="text-primary font-lg mt-6 md:mt-12 leading-snug max-w-xs md:max-w-sm whitespace-pre-line">
          To rules of conduct and morality with the islamic
          Shari'a rules and
          <span class="block">regulations.</span>
        </p>
        <Button
          variant="outline"
          size="lg"
          class="cursor-pointer bg-secondary font-bold mt-4 text-sm md:text-md rounded-3xl  text-white hover:bg-secondary/90"
        >
          Sharia Laws
          <MoveRight class="w-2 h-2" />
        </Button>
      </div>
      <!-- right column -->
      <div class="flex flex-col lg:flex-row gap-14 items-center lg:items-start w-full">
        <figure class="flex flex-col items-center mt-6 lg:mt-16">
          <div class="p-1 bg-white rounded-2xl inline-block outline-gray-100 outline-4">
            <NuxtImg
              src="/images/shariacompliance/committee-placeholder.png"
              alt="Sharia Committee member"
              class="rounded-2xl w-48 h-58 object-cover"
            />
          </div>
          <figcaption class="mt-4 text-center font-bold w-64">
            Prof. Dr. Abdullah bin Issa Al-Ayadhi
          </figcaption>
          <p class="text-center w-64">Member of the Shaira Committee</p>
        </figure>
        <figure class="flex flex-col items-center ">
          <div class="p-1 bg-[#def3ff] rounded-2xl inline-block outline-gray-100 outline-4" >
            <NuxtImg
              src="/images/shariacompliance/committee-placeholder.png"
              alt="Sharia Committee member"
              class="rounded-2xl w-48 h-58 object-cover"
            />
          </div>
          <figcaption class="mt-4 text-center font-bold w-64">
            Prof. Dr. Yousef bin Abdullah Al Shubaili
          </figcaption>
          <p class="text-sm text-center w-64">Head of the Sharia Committee</p>
        </figure>
        <figure class="flex flex-col items-center mt-6 lg:mt-16">
          <div class="p-1 bg-white rounded-2xl inline-block outline-gray-100 outline-4">
            <NuxtImg
              src="/images/shariacompliance/committee-placeholder.png"
              alt="Sharia Committee member"
              class="rounded-2xl w-48 h-58 object-cover"
            />
          </div>
          <figcaption class="mt-4 text-center font-bold w-64">
            Abdul Aziz bin Saleh Al-Dumeiji
          </figcaption>
          <p class="text-center w-64">Member of the Shaira Committee</p>
        </figure>
      </div>
    </div>
  </section>
</template>
