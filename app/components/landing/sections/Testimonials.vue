<script setup lang="ts">
import { Star } from 'lucide-vue-next'

type Testimonial = {
  id: number
  name: string
  role: string
  image: string
  testimony: string
}

// SAMPLE DATAS ONLY - NOT FINAL TESTIMONIALS
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aisha Al-Harbi',
    role: 'Private Investor',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'Sinbad AI helped me remove emotional trading. The bot executes my strategy with discipline, and my results are now far more consistent month after month.',
  },
  {
    id: 2,
    name: 'Khalid Al-Qahtani',
    role: 'Portfolio Manager',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'I use it daily for entry and risk control. The stop-loss automation and speed of execution gave me confidence during highly volatile sessions.',
  },
  {
    id: 3,
    name: 'Rana Al-Otaibi',
    role: 'Entrepreneur',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'The dashboard is clear, simple, and powerful. I can monitor performance in real-time and trust that each position follows predefined risk rules.',
  },
  {
    id: 4,
    name: 'Fahad Al-Dossari',
    role: 'Day Trader',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'What impressed me most is consistency. Trades are no longer based on fear or hype—only validated signals backed by data and AI analysis.',
  },
  {
    id: 5,
    name: 'Mona Al-Shammari',
    role: 'Finance Analyst',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'The carousel view and profile focus make it very user-friendly. With one click I can see who said what and compare experiences quickly.',
  },
  {
    id: 6,
    name: 'Yousef Al-Mutairi',
    role: 'Retail Trader',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'Execution is very fast and risk settings are easy to manage. I finally follow a consistent plan instead of reacting emotionally.',
  },
  {
    id: 7,
    name: 'Noura Al-Shehri',
    role: 'Business Owner',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'I started with small capital and saw steady progress. The strategy controls helped me protect my portfolio during uncertain market swings.',
  },
  {
    id: 8,
    name: 'Saad Al-Ghamdi',
    role: 'Swing Trader',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'The AI signal quality is impressive. I spend less time watching charts and more time reviewing clear performance metrics.',
  },
  {
    id: 9,
    name: 'Reem Al-Hazmi',
    role: 'Investment Consultant',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'Client reporting became much easier because every trade has logic behind it. The transparency builds trust in automated execution.',
  },
  {
    id: 10,
    name: 'Majed Al-Anzi',
    role: 'Market Analyst',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'Backtesting gave me confidence before going live. The system behaves predictably and respects stop-loss levels with precision.',
  },
  {
    id: 11,
    name: 'Sara Al-Rashid',
    role: 'Beginner Investor',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'As a beginner, I needed something simple and safe. This platform made it easy to start with guided settings and clear controls.',
  },
  {
    id: 12,
    name: 'Bandar Al-Subaie',
    role: 'Quant Enthusiast',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'I appreciate the data-first approach. Decisions are not random; they are based on structured indicators and tested probability models.',
  },
  {
    id: 13,
    name: 'Hala Al-Faraj',
    role: 'Corporate Treasurer',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'Risk management features are exactly what I needed. I can set boundaries and trust the system to follow them without exception.',
  },
  {
    id: 14,
    name: 'Turki Al-Malki',
    role: 'Full-Time Trader',
    image: '/images/shariacompliance/committee-placeholder.png',
    testimony:
      'The carousel and dashboard UX are smooth, but more importantly, the strategy performance has been consistent over the past quarters.',
  },
]

const activeIndex = ref(2)

const activeTestimonial = computed<Testimonial>(
  () => testimonials[activeIndex.value] ?? testimonials[0]!,
)

const relativeOffset = (index: number) => {
  const total = testimonials.length
  let diff = index - activeIndex.value

  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total

  return diff
}

const positionedTestimonials = computed(() =>
  testimonials.map((person, index) => ({
    ...person,
    index,
    offset: relativeOffset(index),
  })),
)

const visibleTestimonials = computed(() =>
  positionedTestimonials.value
    .filter((person) => Math.abs(person.offset) <= 2)
    .sort((a, b) => a.offset - b.offset),
)

const avatarStyle = (offset: number) => {
  const distance = Math.abs(offset)
  const width = distance === 0 ? 77 : distance === 1 ? 55 : 40
  const height = distance === 0 ? 78 : distance === 1 ? 55 : 40
  const opacity = distance === 2 ? 0.25 : 1

  return {
    width: `${width}px`,
    height: `${height}px`,
    opacity: String(opacity),
    borderRadius: '33554400px',
  }
}

const selectTestimonial = (index: number) => {
  activeIndex.value = index
}
</script>

<template>
  <section
    class="mx-auto mt-12 flex w-full max-w-275 flex-col items-center justify-center gap-4 px-4 sm:px-6 md:mt-18 lg:px-0"
  >
    <div class="flex w-full flex-col items-center justify-center gap-6 text-center">
      <div class="flex w-full flex-col items-center gap-4">
        <span class="text-base font-bold leading-5.25 text-[#33B5E5]">Testimonials</span>
        <h2
          class="text-center text-3xl font-bold text-primary sm:text-4xl md:text-5xl md:leading-15.75 lg:text-[48px]"
        >
          Trusted by <span class="text-secondary">Saudi Traders</span>
        </h2>
      </div>

      <div class="flex w-full max-w-181 flex-col items-center gap-6.5">
        <div class="flex h-4 items-center justify-center gap-1">
          <Star v-for="index in 5" :key="index" class="size-4 fill-[#00D492] text-[#00D492]" />
        </div>

        <p class="w-full text-center text-base font-normal leading-5.25 text-secondary">
          "{{ activeTestimonial.testimony }}"
        </p>

        <div class="flex w-full max-w-[426.89px] items-center justify-center gap-6.5">
          <template v-for="person in visibleTestimonials" :key="person.id">
            <button
              v-if="person.offset !== 0"
              type="button"
              class="cursor-pointer overflow-hidden border border-secondary/30 transition-all duration-500 ease-out"
              :style="avatarStyle(person.offset)"
              :aria-label="`Show testimonial from ${person.name}`"
              @click="selectTestimonial(person.index)"
            >
              <NuxtImg :src="person.image" :alt="person.name" class="h-full w-full object-cover" />
            </button>

            <div
              v-else
              class="flex h-32.25 w-[132.89px] flex-col items-center justify-center gap-3"
            >
              <button
                type="button"
                class="cursor-pointer overflow-hidden border border-secondary/30 transition-all duration-500 ease-out"
                :style="avatarStyle(person.offset)"
                :aria-label="`Show testimonial from ${person.name}`"
                @click="selectTestimonial(person.index)"
              >
                <NuxtImg
                  :src="person.image"
                  :alt="person.name"
                  class="h-full w-full object-cover"
                />
              </button>

              <div class="flex h-9.75 w-full flex-col items-center justify-center">
                <p class="w-full text-center text-sm font-semibold leading-5.25 text-secondary">
                  {{ activeTestimonial.name }}
                </p>
                <p class="text-center text-xs font-normal leading-4.5 text-[#6A7282]">
                  {{ activeTestimonial.role }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
