

<template>
<section aria-labelledby="sindbad-founder" class="py-24 mt-72">
    <div class="max-w-6xl mx-auto px-6">
        <header class="text-center mb-20">
        <h2 class="text-4xl font-bold">
            Our Team
        </h2>
        </header>

        <!-- Founder -->
        <div class="flex justify-center mb-16">
            <figure class="flex flex-col items-center">
                <NuxtImg
                src="/images/teamcard/teamcard-placeholder.png"
                alt="Sindbad founder"
                class="rounded-2xl w-44 h-52  object-cover shadow-lg"
                />
                <figcaption class="mt-4 font-bold text-lg text-center">
                    Mohammed Agbawi
                </figcaption>
                <p class="text-sm text-gray-600 text-center">
                Founder / CEO
                </p>
            </figure>
        </div>

        <!-- Co-Founders -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <!-- Card -->
        <figure class="flex flex-col items-center">
            <NuxtImg
            src="/images/teamcard/teamcard-placeholder.png"
            alt="Sindbad co-founder"
            class="rounded-2xl w-44 h-52 object-cover"
            />
            <figcaption class="mt-4 font-bold text-center">
            Ziad Agbawi
            </figcaption>
            <p class="text-sm text-gray-600 text-center">
            Co-Founder / CTO
            </p>
        </figure>

        <figure class="flex flex-col items-center">
            <NuxtImg
            src="/images/teamcard/teamcard-placeholder.png"
            alt="Sindbad co-founder"
            class="rounded-2xl w-44 h-52 object-cover"
            />
            <figcaption class="mt-4 font-bold text-center">
            Dr. Ahmad Alijadan
            </figcaption>
            <p class="text-sm text-gray-600 text-center">
            Co-Founder / CDO
            </p>
        </figure>
        </div>

        <!-- COO + CMO -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <figure class="flex flex-col items-center">
            <NuxtImg
            src="/images/teamcard/teamcard-placeholder.png"
            alt="Sindbad COO"
            class="rounded-2xl w-44 h-52 object-cover"
            />
            <figcaption class="mt-4 font-bold text-center">
            Jehad Alfarasani
            </figcaption>
            <p class="text-sm text-gray-600 text-center">
            CISO / COO
            </p>
        </figure>

        <figure class="flex flex-col items-center">
            <NuxtImg
            src="/images/teamcard/teamcard-placeholder.png"
            alt="Sindbad CMO"
            class="rounded-2xl w-44 h-52 object-cover"
            />
            <figcaption class="mt-4 font-bold text-center">
            Abdulaziz Alsultan
            </figcaption>
            <p class="text-sm text-gray-600 text-center">
            CMO
            </p>
        </figure>
        </div>

    </div>
</section>
</template>