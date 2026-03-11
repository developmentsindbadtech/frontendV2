<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'

const email = ref('')

const handleSubscribe = () => {
  if (email.value) {
    console.log('Lead captured:', email.value)
  }
}


const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionRef.value?.classList.remove('animate-fade-up')
        requestAnimationFrame(() => {
          sectionRef.value?.classList.add('animate-fade-up')
        })
        observer.disconnect()
      }
    })
  }, { threshold: 0.1 })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

</script>

<template>
  <section 
  ref="sectionRef"
  class="w-full bg-background py-112 md:py-24 px-4 sm:px-6 lg:px-8 mt-12 md:mt-24">
    <div
      class="max-w-[1440px] h-auto lg:h-[600px] mx-auto bg-[#E0F2FE] rounded-[4rem] overflow-hidden relative shadow-sm flex flex-col lg:block"
    >
      <div class="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <!--Left Arc -->
        <div
          class="absolute -left-[460px] -top-[250px] w-[705px] h-[560px] border-[2px] border-[#FFFFFF]/100 rounded-full"
        ></div>
        <!--Right Arcs-->
        <div
          class="absolute right-[-200px] bottom-[-150px] -translate-x-1/2 flex items-center justify-center"
        >
          <!--Inner Arc-->
          <div class="w-[600px] h-[550px] border-[2px] border-[#FFFFFF]/100 rounded-full"></div>
          <!--Outer Arc-->
          <div
            class="absolute w-[750px] h-[750px] border-[2px] border-[#FFFFFF]/100 rounded-full"
          ></div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 items-stretch h-full relative z-10">
        <div class="p-8 sm:p-12 md:p-16 lg:p-24 lg:pr-12 space-y-8">
          <div class="space-y-6">
            <h2
              class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-[1.1] tracking-tight"
            >
              Ready to Automate <br />
              <span class="text-[#38BDF8]">Your Wealth?</span>
            </h2>
            <p class="text-base md:text-xl text-[#334155] leading-relaxed max-w-lg">
              Join thousands of traders using AI algorithms to eliminate emotion and maximize
              precision. Get started in a min
            </p>
          </div>

          <form class="relative w-full max-w-md group" @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              class="w-full h-16 pl-6 pr-40 rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/40 transition-all text-base placeholder:text-slate-400"
            />
            <button
              type="submit"
              class="absolute right-2 top-2 h-12 px-6 rounded-xl bg-[#38BDF8] text-white font-bold transition-all hover:bg-[#0EA5E9] active:scale-95 shadow-md cursor-pointer"
            >
              Get started
            </button>
          </form>

          <div class="w-full h-px bg-[#0F172A]/20 my-2"></div>

          <div class="flex flex-col sm:flex-row gap-8 pt-2">
            <div class="flex items-center gap-3 text-base md:text-xl font-semibold text-[#334155]">
              <div class="w-3 h-3 rounded-full bg-[#38BDF8]"></div>
              Real-time Ai monitoring
            </div>
            <div class="flex items-center gap-3 text-base md:text-xl font-semibold text-[#334155]">
              <div class="w-3 h-3 rounded-full bg-[#38BDF8]"></div>
              Bank-Grade Security
            </div>
          </div>
        </div>

        <div class="flex justify-center lg:justify-end lg:pr-47 items-end lg:pt-24 overflow-hidden">
          <img
            src="/images/Call-To-Action.png"
            alt="Sindbad.Tech App Interface"
            class="w-72 sm:w-80 lg:w-auto lg:h-full object-contain object-top relative z-20 transition-all duration-700 translate-y-2"
          />
        </div>
      </div>
    </div>
  </section>
</template>
