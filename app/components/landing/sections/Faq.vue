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

withDefaults(defineProps<{
    title?: string
    description?: string
    items?: FaqItem[]
}>(), {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our platform, features, and how to get started.',
    items: () => [
        {
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
            answer: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        },
        {
            question: 'Aenean ultricies mi vitae est. Mauris placerat eleifend leo?',
            answer: 'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus.'
        },
        {
            question: 'Phasellus ultrices nulla quis nibh. Quisque a lectus?',
            answer: 'Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.'
        },
        {
            question: 'Sed egestas, ante et vulputate volutpat, eros pede semper est?',
            answer: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.'
        },
        {
            question: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam?',
            answer: 'Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus.'
        }
    ]
})
</script>

<template>
    <section class="py-12 md:py-24 bg-background px-4 sm:px-6 flex justify-center font-sans mt-72">
        <div class="w-full max-w-3xl">

            <div class="text-center mb-10 md:mb-14">
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {{ title }}
                </h2>
                <p class="text-base md:text-lg text-primary/70 max-w-2xl mx-auto">
                    {{ description }}
                </p>
            </div>

            <Accordion type="single" collapsible class="w-full space-y-3 sm:space-y-4">

                <AccordionItem v-for="(faq, index) in items" :key="index" :value="`item-${index}`"
                    class="border !border-b border-border rounded-xl bg-card px-4 sm:px-5 data-[state=open]:ring-1 data-[state=open]:ring-ring/50 transition-all duration-300 ease-out hover:border-blue/40 hover:shadow-sm overflow-hidden">

                    <AccordionTrigger
                        class="cursor-pointer text-sm sm:text-base md:text-lg font-medium text-foreground transition-all duration-300 ease-out hover:no-underline hover:text-blue py-4 sm:py-5 text-left">
                        {{ faq.question }}
                    </AccordionTrigger>

                    <AccordionContent class="text-sm md:text-base text-muted-foreground pb-4 sm:pb-5">
                        {{ faq.answer }}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div class="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">

                <button
                    class="cursor-pointer w-full sm:w-auto px-8 py-3 rounded-xl bg-muted text-muted-foreground font-semibold transition-all duration-300 ease-out hover:bg-muted-foreground/10 hover:text-foreground hover:shadow-md active:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    Go Back
                </button>

                <button
                    class="cursor-pointer w-full sm:w-auto px-8 py-3 rounded-xl bg-blue text-white font-semibold transition-all duration-300 ease-out hover:opacity-90 hover:shadow-lg hover:shadow-blue/30 active:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                    Contact Us
                </button>

            </div>
        </div>
    </section>
</template>