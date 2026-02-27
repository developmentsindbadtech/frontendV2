<script setup lang="ts">
import { ChevronRight, ChevronLeft } from 'lucide-vue-next'

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
    image: '/images/testimonials/user-1.png',
    testimony:
      'Sinbad AI helped me remove emotional trading. The bot executes my strategy with discipline, and my results are now far more consistent month after month.',
  },
  {
    id: 2,
    name: 'Khalid Al-Qahtani',
    role: 'Portfolio Manager',
    image: '/images/testimonials/user-2.png',
    testimony:
      'I use it daily for entry and risk control. The stop-loss automation and speed of execution gave me confidence during highly volatile sessions.',
  },
  {
    id: 3,
    name: 'Rana Al-Otaibi',
    role: 'Entrepreneur',
    image: '/images/testimonials/user-3.png',
    testimony:
      'The dashboard is clear, simple, and powerful. I can monitor performance in real-time and trust that each position follows predefined risk rules.',
  },
  {
    id: 4,
    name: 'Fahad Al-Dossari',
    role: 'Day Trader',
    image: '/images/testimonials/user-4.png',
    testimony:
      'What impressed me most is consistency. Trades are no longer based on fear or hype—only validated signals backed by data and AI analysis.',
  },
  {
    id: 5,
    name: 'Mona Al-Shammari',
    role: 'Finance Analyst',
    image: '/images/testimonials/user-5.png',
    testimony:
      'The carousel view and profile focus make it very user-friendly. With one click I can see who said what and compare experiences quickly.',
  },
  {
    id: 6,
    name: 'Yousef Al-Mutairi',
    role: 'Retail Trader',
    image: '/images/testimonials/user-6.png',
    testimony:
      'Execution is very fast and risk settings are easy to manage. I finally follow a consistent plan instead of reacting emotionally.',
  },
  {
    id: 7,
    name: 'Noura Al-Shehri',
    role: 'Business Owner',
    image: '/images/testimonials/user-7.png',
    testimony:
      'I started with small capital and saw steady progress. The strategy controls helped me protect my portfolio during uncertain market swings.',
  },
  {
    id: 8,
    name: 'Saad Al-Ghamdi',
    role: 'Swing Trader',
    image: '/images/testimonials/user-8.png',
    testimony:
      'The AI signal quality is impressive. I spend less time watching charts and more time reviewing clear performance metrics.',
  },
  {
    id: 9,
    name: 'Reem Al-Hazmi',
    role: 'Investment Consultant',
    image: '/images/testimonials/user-9.png',
    testimony:
      'Client reporting became much easier because every trade has logic behind it. The transparency builds trust in automated execution.',
  },
  {
    id: 10,
    name: 'Majed Al-Anzi',
    role: 'Market Analyst',
    image: '/images/testimonials/user-10.png',
    testimony:
      'Backtesting gave me confidence before going live. The system behaves predictably and respects stop-loss levels with precision.',
  },
  {
    id: 11,
    name: 'Sara Al-Rashid',
    role: 'Beginner Investor',
    image: '/images/testimonials/user-11.png',
    testimony:
      'As a beginner, I needed something simple and safe. This platform made it easy to start with guided settings and clear controls.',
  },
  {
    id: 12,
    name: 'Bandar Al-Subaie',
    role: 'Quant Enthusiast',
    image: '/images/testimonials/user-12.png',
    testimony:
      'I appreciate the data-first approach. Decisions are not random; they are based on structured indicators and tested probability models.',
  },
  {
    id: 13,
    name: 'Hala Al-Faraj',
    role: 'Corporate Treasurer',
    image: '/images/testimonials/user-13.png',
    testimony:
      'Risk management features are exactly what I needed. I can set boundaries and trust the system to follow them without exception.',
  },
  {
    id: 14,
    name: 'Turki Al-Malki',
    role: 'Full-Time Trader',
    image: '/images/testimonials/user-14.png',
    testimony:
      'The carousel and dashboard UX are smooth, but more importantly, the strategy performance has been consistent over the past quarters.',
  },
  {
    id: 15,
    name: 'Lama Al-Qahtani',
    role: 'Portfolio Assistant',
    image: '/images/testimonials/user-15.png',
    testimony:
      'Monitoring open positions is effortless now. Alerts are timely and the overall workflow keeps our team aligned and efficient.',
  },
  {
    id: 16,
    name: 'Abdullah Al-Hamdan',
    role: 'Tech Lead',
    image: '/images/testimonials/user-16.png',
    testimony:
      'The product feels stable and reliable. Even during heavy sessions, execution and updates remain responsive and accurate.',
  },
  {
    id: 17,
    name: 'Ritaj Al-Dakhil',
    role: 'Financial Planner',
    image: '/images/testimonials/user-17.png',
    testimony:
      'It helps me guide clients toward disciplined investing. Automation removes panic decisions and supports long-term strategy goals.',
  },
  {
    id: 18,
    name: 'Faisal Al-Khaled',
    role: 'Equity Trader',
    image: '/images/testimonials/user-18.png',
    testimony:
      'I like how easy it is to rotate between strategies. The platform gives me control while keeping execution smart and objective.',
  },
  {
    id: 19,
    name: 'Dalal Al-Nasser',
    role: 'Risk Officer',
    image: '/images/testimonials/user-19.png',
    testimony:
      'From a risk perspective, this is one of the best tools I have used. Guardrails are clear and enforced at every step.',
  },
  {
    id: 20,
    name: 'Omar Al-Salem',
    role: 'Independent Investor',
    image: '/images/testimonials/user-20.png',
    testimony:
      'The performance insights help me learn continuously. I can see what works, what does not, and improve strategy decisions over time.',
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
  testimonials
    .map((person, index) => ({
      ...person,
      index,
      offset: relativeOffset(index),
    }))
    .sort((a, b) => Math.abs(b.offset) - Math.abs(a.offset)),
)

const visibleTestimonials = computed(() =>
  positionedTestimonials.value.filter((person) => Math.abs(person.offset) <= 3),
)

const avatarStyle = (offset: number) => {
  const distance = Math.abs(offset)
  const size = distance === 0 ? 96 : distance === 1 ? 78 : distance === 2 ? 62 : 52
  const opacity = distance === 0 ? 1 : distance === 1 ? 0.85 : distance === 2 ? 0.6 : 0.4
  const scale = distance === 0 ? 1 : distance === 1 ? 0.9 : distance === 2 ? 0.8 : 0.72
  const xOffset = offset * 92

  return {
    width: `${size}px`,
    height: `${size}px`,
    opacity: String(opacity),
    zIndex: String(10 - distance),
    transform: `translate(-50%, -50%) translateX(${xOffset}px) scale(${scale})`,
  }
}

const moveLeft = () => {
  activeIndex.value = (activeIndex.value - 1 + testimonials.length) % testimonials.length
}

const moveRight = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length
}
</script>

<template>
  <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 mt-72 md:mt-20 lg:px-0">
    <div class="w-full flex flex-col items-center justify-center text-center">
      <span class="text-secondary font-bold text-sm md:text-base">Testimonials</span>
      <h2 class="text-secondary text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4">
        What Our <span class="text-primary">Users Say</span>
      </h2>

      <div
        class="mt-8 md:mt-10 w-full max-w-4xl rounded-2xl border border-secondary/30 bg-primary/40 px-5 py-6 md:px-10 md:py-8"
      >
        <p class="text-primary text-base md:text-xl leading-relaxed font-semibold">
          "{{ activeTestimonial.testimony }}"
        </p>
      </div>

      <div class="mt-8 md:mt-10 w-full flex flex-col items-center">
        <div class="relative h-34 sm:h-38 md:h-40 w-full md:max-w-3xl overflow-hidden">
          <button
            type="button"
            class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-11 md:w-11 rounded-full border border-secondary/40 bg-primary/70 text-secondary flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Previous testimonial"
            @click="moveLeft"
          >
            <ChevronLeft class="h-5 w-5" />
          </button>

          <button
            type="button"
            class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-11 md:w-11 rounded-full border border-secondary/40 bg-primary/70 text-secondary flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Next testimonial"
            @click="moveRight"
          >
            <ChevronRight class="h-5 w-5" />
          </button>

          <button
            v-for="person in visibleTestimonials"
            :key="person.id"
            type="button"
            class="absolute left-1/2 top-1/2 rounded-full border border-secondary/40 overflow-hidden transition-all duration-500 ease-out"
            :style="avatarStyle(person.offset)"
            :aria-label="`Show testimonial from ${person.name}`"
          >
            <NuxtImg :src="person.image" :alt="person.name" class="h-full w-full object-cover" />
          </button>
        </div>

        <div class="mt-4 md:mt-6 text-center">
          <p class="text-secondary text-sm md:text-base font-bold">{{ activeTestimonial.name }}</p>
          <p class="text-primary/80 text-xs md:text-sm">{{ activeTestimonial.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
