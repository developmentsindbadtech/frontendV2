<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const handleSubscribe = () => {
    if (email.value) {
        console.log('Lead captured:', email.value)
    }
}
</script>

<template>
    <section class="w-full bg-background py-12 md:py-24 px-4 sm:px-6 lg:px-8 mt-72">
        <div
            class="max-w-7xl mx-auto bg-card border border-border rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm">
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center">

                <div class="p-6 sm:p-10 md:p-12 lg:p-16 space-y-6 md:space-y-8 order-1">
                    <div class="space-y-4">
                        <h2
                            class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-[1.1]">
                            Ready to automate your <span class="text-blue">wealth growth?</span>
                        </h2>
                        <p class="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Join thousands of traders using our AI algorithms to eliminate emotion and maximize
                            precision. Get started in minutes.
                        </p>
                    </div>

                    <form class="relative w-full max-w-md group" @submit.prevent="handleSubscribe">
                        <input v-model="email" type="email" placeholder="Enter your email address"
                            class="w-full h-12 sm:h-14 pl-5 pr-5 sm:pr-36 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue/20 transition-all text-sm sm:text-base" />
                        <button type="submit"
                            class="mt-3 sm:mt-0 sm:absolute sm:right-1.5 sm:top-1.5 w-full sm:w-auto h-11 px-6 rounded-lg bg-blue text-white font-semibold cursor-pointer transition-all duration-300 hover:opacity-90 active:scale-95 shadow-sm">
                            Get Started
                        </button>
                    </form>

                    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 border-t border-border/50">
                        <div class="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                            <div class="w-2 h-2 rounded-full bg-blue"></div>
                            Real-time AI monitoring
                        </div>
                        <div class="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                            <div class="w-2 h-2 rounded-full bg-blue"></div>
                            Bank-grade security
                        </div>
                    </div>
                </div>

                <div
                    class="relative bg-muted/30 h-[320px] sm:h-[400px] lg:h-full min-h-full overflow-hidden flex items-end justify-center px-4 order-2 lg:order-2">

                    <div
                        class="absolute bottom-0 right-[15%] lg:right-20 w-[40%] sm:w-[35%] lg:w-64 h-[75%] lg:h-[400px] bg-natural/40 border-[3px] sm:border-4 border-natural rounded-[2rem] lg:rounded-[2.5rem] transform translate-y-12 lg:translate-y-24">
                        <div
                            class="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-3 sm:h-4 bg-natural rounded-full">
                        </div>
                        <div class="mt-12 sm:mt-16 px-4 sm:px-6 space-y-3 sm:space-y-4">
                            <div class="h-3 sm:h-4 w-3/4 bg-natural/50 rounded-full"></div>
                            <div class="h-3 sm:h-4 w-1/2 bg-natural/50 rounded-full"></div>
                        </div>
                    </div>

                    <div
                        class="relative z-10 w-[50%] sm:w-[45%] lg:w-72 h-[90%] lg:h-[480px] bg-card border-[3px] sm:border-4 border-natural rounded-[2.2rem] lg:rounded-[3rem] shadow-2xl transform translate-y-10 lg:translate-y-20">
                        <div
                            class="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-4 sm:h-5 bg-natural rounded-full">
                        </div>
                        <div class="mt-16 sm:mt-20 px-6 sm:px-8 space-y-4 sm:space-y-6">
                            <div class="h-5 sm:h-6 w-full bg-muted rounded-lg"></div>
                            <div class="h-24 sm:h-32 w-full bg-muted rounded-xl lg:rounded-2xl"></div>
                            <div class="grid grid-cols-2 gap-2 sm:gap-4">
                                <div class="h-8 sm:h-10 bg-muted rounded-lg"></div>
                                <div class="h-8 sm:h-10 bg-muted rounded-lg"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>