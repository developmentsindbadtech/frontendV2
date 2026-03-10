<script setup lang="ts">
/**
 * Shadcn-Vue Accordion primitives providing built-in WAI-ARIA compliance
 * and height animation logic.
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

export interface FaqItem {
  question: string
  answer: string
}

withDefaults(
  defineProps<{
    title?: string
    description?: string
    items?: FaqItem[]
  }>(),
  {
    title: 'Frequently Asked Questions',
    description: 'Everything you need to know about our AI-powered trading platform',
    items: () => [
      {
        question: 'How does the AI make trading decisions?',
        answer:
          'Our AI analyzes over 50 technical indicators, market sentiment data, news feeds, and historical patterns specific to the Saudi market. Trading decisions are powered by AI models trained on millions of data points from Tadawul, global indices, and commodity markets. The system continuously learns and adapts to changing market conditions.',
      },
      {
        question: 'Is Saud.ai compliant with Saudi financial regulations?',
        answer:
          'Yes, our platform is designed to adhere to the financial regulatory framework of the Kingdom of Saudi Arabia, ensuring all trading activities and data processing meet local compliance standards.',
      },
      {
        question: 'What markets does Saud.ai support?',
        answer:
          'Currently, we focus primarily on the Tadawul (Saudi Stock Exchange), with expanding support for regional GCC markets and global commodity indices.',
      },
      {
        question: 'How much capital do I need to start?',
        answer:
          'You can start with a minimum balance defined by your brokerage partner. Our AI is scalable and can manage portfolios ranging from retail accounts to institutional sizes.',
      },
      {
        question: 'Can I customize the AI trading strategies?',
        answer:
          'Yes, users can set risk parameters, preferred sectors, and maximum drawdown limits to align the AI’s behavior with their personal investment goals.',
      },
      {
        question: 'What happens during high volatility or flash crashes?',
        answer:
          'The AI includes built-in circuit breakers and automated risk-mitigation protocols that trigger during extreme volatility to protect your capital from rapid market downturns.',
      },
    ],
  },
)
</script>

<template>
  <section class="py-12 md:py-24 bg-white px-4 sm:px-6 flex flex-col items-center font-sans">
    <div
      class="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-500 border border-green-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    </div>

    <div class="w-full max-w-3xl">
      <div class="text-center mb-10 md:mb-14">
        <h2 class="text-3xl md:text-5xl font-bold text-[#1e3a4c] mb-6">
          {{ title }}
        </h2>
        <p class="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>

      <Accordion type="single" default-value="item-0" collapsible class="w-full space-y-4">
        <AccordionItem
          v-for="(faq, index) in items"
          :key="index"
          :value="`item-${index}`"
          class="border-none rounded-2xl transition-all duration-300 overflow-hidden data-[state=closed]:bg-[#e0f4ff] data-[state=open]:bg-[#0a2533] data-[state=open]:shadow-xl"
        >
          <AccordionTrigger
            class="px-6 py-5 text-left font-semibold transition-all hover:no-underline cursor-pointer data-[state=closed]:text-[#4fb9df] data-[state=open]:text-white text-base md:text-lg"
          >
            {{ faq.question }}
          </AccordionTrigger>

          <AccordionContent class="px-6 pb-6 text-sm md:text-base text-slate-400 leading-relaxed">
            {{ faq.answer }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
</template>
