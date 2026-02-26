<script setup lang="ts">
import { 
    BookOpen,
    ArrowUpLeft,
} from 'lucide-vue-next';
</script>
<template>
    <section aria-labelledby="sharia-compliance" class="flex flex-col justify-center items-center min-h-screen py-16 px-4 sm:px-6 lg:px-8 mt-72">
        <header>
            <h2 class="text-4xl font-bold mb-8 lg:mb-12">
                Shari'a Committee
            </h2>
        </header>
    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-7xl mx-auto">
        <!-- Left column -->
        <div class="flex flex-col lg:flex-row gap-10 items-center lg:items-start w-full">
            <figure class="flex flex-col items-center lg:mt-0">
                <NuxtImg src="/images/shariacompliance/committee-placeholder.png"
                        alt="Sharia Committee member"
                        class="rounded-2xl w-64 h-72 object-cover" />
                <figcaption class="mt-4 text-center font-bold w-64">
                    Prof. Dr. Yousef bin Abdullah Al Shubaili
                </figcaption>
                <p class="text-sm text-center w-64">Head of the Sharia Committee</p>
            </figure>
            <figure class="flex flex-col items-center mt-6 lg:mt-16">
                <NuxtImg src="/images/shariacompliance/committee-placeholder.png"
                        alt="Sharia Committee member"
                        class="rounded-2xl w-64 h-72 object-cover" />
                <figcaption class="mt-4 text-center font-bold w-64">
                    Prof. Dr. Abdullah bin Issa Al-Ayadhi
                </figcaption>
                <p class="text-center w-64">Member of the Shaira Committee</p>
            </figure>
            <figure class="flex flex-col items-center mt-6 lg:mt-8">
                <NuxtImg src="/images/shariacompliance/committee-placeholder.png"
                        alt="Sharia Committee member"
                        class="rounded-2xl w-64 h-72 object-cover" />
                <figcaption class="mt-4 text-center font-bold w-64">
                    Abdul Aziz bin Saleh Al-Dumeiji
                </figcaption>
                <p class="text-center w-64">Member of the Shaira Committee</p>
            </figure>
        </div>
        <div class="flex flex-col items-center lg:items-end text-center lg:text-end max-w-md mt-6 lg:mt-16">
            <BookOpen class="w-12 h-12 text-secondary mb-4"/>
            <h2 class="font-bold text-3xl">
                <span class="text-secondary">Complied with</span> SHARI'A COMPLIANCE!
            </h2>
            <p class="text-primary font-semibold mt-6 md:mt-12">
                Sindbad.Tech has developed a strong obedience to rules of 
                conduct and morality with the Islamic Shari'a rules 
                and regulations.
            </p>
            <Button 
                variant="outline" size="lg" class="cursor-pointer text-secondary mt-4 text-sm md:text-md"
            >
            <ArrowUpLeft class="w-2 h-2"/>
            Sharia opinion
            
        </Button>
        </div>
    </div>
</section>
    
</template>