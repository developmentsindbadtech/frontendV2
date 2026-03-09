<script setup lang="ts">
import { 
  MoveRight, 
  X 
} from 'lucide-vue-next'
import {ref, type Ref} from 'vue'

const dialogShariaHead: Ref<HTMLDialogElement | null> = ref(null)
const dialogShariaMember1: Ref<HTMLDialogElement | null> = ref(null)
const dialogShariaMember2: Ref<HTMLDialogElement | null> = ref(null)

function openDialog(dialog: HTMLDialogElement | null) {
  if (!dialog) return
  dialog.showModal()
  document.body.style.overflow = 'hidden'

  requestAnimationFrame(() => {
    dialog.classList.add('dialog-open')
  })
}
function closeDialog(dialog: HTMLDialogElement | null) {
  if (!dialog) return

  dialog.classList.remove('dialog-open')
  dialog.close()
  document.body.style.overflow = 'auto'
}

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
        <a 
          href="/pdf/sharia_certifcate.pdf" 
          target="_blank"
          class="cursor-pointer bg-secondary font-bold mt-4 text-sm rounded-3xl text-white hover:bg-secondary/90 px-4 py-2 inline-flex items-center gap-2"
        >
          Sharia Laws
          <MoveRight class="w-4 h-4" />
        </a>
      </div>
      <!-- right column -->
      <div class="flex flex-col lg:flex-row gap-14 items-center lg:items-start w-full">
        <figure class="flex flex-col items-center mt-6 lg:mt-16">
          <div class="p-1 bg-white rounded-2xl inline-block outline-gray-100 outline-4 cursor-pointer" @click="openDialog(dialogShariaMember1)" >
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
        <!-- Dialog box -->
        <dialog ref="dialogShariaMember1" 
            class="dialog-animate rounded-xl p-4 backdrop:bg-black/30 items-center w-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dialog-backdrop">
          <div class="flex flex-col items-center">
              <button @click="closeDialog(dialogShariaMember1)" class="self-end text-gray-500 hover:text-gray-700">
                <X class="h-5 w-5 bg-gray-200 rounded-2xl" />
              </button>
            <NuxtImg src="/images/shariacompliance/committee-placeholder.png" class="max-w-lg rounded-xl w-48 h-48" alt="Prof. Dr. Yousef bin Abdullah Al Shubaili "/>
            <h3 class="text-sm font-bold mt-4 text-center justify-center">Prof. Dr. Abdullah bin Issa Al-Ayadhi</h3>
            <p class="text-center mt-2 text-sm">Member of the Sharia Committee</p>
            <p class="text-end mt-2 text-xs font-light"> <span class="block">Associate Professor of Islamic Jurisprudence at Jazan University.</span><br>
              <span class="block">One of the members of the Sharia Standards Committee of the Accounting and 
                Auditing Organization for Islamic Financial Institutions (AAOIFI). </span><br>
              <span class="block">Committee of the Kingdom of Saudi Arabia. Committee of the Kingdom of Saudi Arabia.</span><br>
              <span class="block">He is a member of the Sharia Board of the Accounting and Auditing
              Organization for Islamic Financial Institutions (AAOIFI).</span><br>
              <span class="block">He has research works and published books on Islamic finance.</span>
            </p>
          </div>
        </dialog>
        <figure class="flex flex-col items-center">
          <div class="p-1 bg-[#def3ff] rounded-2xl inline-block outline-gray-100 outline-4 cursor-pointer" @click="openDialog(dialogShariaHead)"  >
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
        <!-- Dialog box -->
        <dialog ref="dialogShariaHead" 
            class="dialog-animate rounded-xl p-4 backdrop:bg-black/30 items-center w-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dialog-backdrop">
          <div class="flex flex-col items-center">
              <button @click="closeDialog(dialogShariaHead)" class="self-end text-gray-500 hover:text-gray-700">
                <X class="h-5 w-5 bg-gray-200 rounded-2xl" />
              </button>
            <NuxtImg src="/images/shariacompliance/committee-placeholder.png" class="max-w-lg rounded-xl w-48 h-48" alt="Prof. Dr. Yousef bin Abdullah Al Shubaili "/>
            <h3 class="text-sm font-bold mt-4 text-center justify-center">Prof. Dr. Yousef bin Abdullah Al Shubaili</h3>
            <p class="text-center mt-2 text-sm">Head of the Sharia Committee</p>
            <p class="text-end mt-2 text-xs font-light"><span class="block">He holds a PhD and a Master's degree in comparative jurisprudence.</span><br>
              <span class="block">A university professor at the Higher Judicial Institute
              at Imam Muhammad Ibn Saud Islamic University.</span><br>
              <span class="block">Member and Chairman of several Sharia committees for a
              number of financial institutions in Saudi Arabia and abroad.</span><br>
              <span class="block">He is a member of the Sharia Board of the Accounting
              and Auditing Organization for Islamic Financial Institutions (AAOIFI).</span><br>
              <span class="block">He has numerous scientific contributions and participations.</span>
            </p>
          </div>
        </dialog>
        <figure class="flex flex-col items-center mt-6 lg:mt-16">
          <div class="p-1 bg-white rounded-2xl inline-block outline-gray-100 outline-4 cursor-pointer" @click="openDialog(dialogShariaMember2)">
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
        <!-- Dialog box -->
        <dialog ref="dialogShariaMember2" 
            class="dialog-animate rounded-xl p-4 backdrop:bg-black/30 items-center w-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dialog-backdrop">
          <div class="flex flex-col items-center">
              <button @click="closeDialog(dialogShariaMember2)" class="self-end text-gray-500 hover:text-gray-700">
                <X class="h-5 w-5 bg-gray-200 rounded-2xl" />
              </button>
            <NuxtImg src="/images/shariacompliance/committee-placeholder.png" class="max-w-lg rounded-xl w-48 h-48" alt="Prof. Dr. Yousef bin Abdullah Al Shubaili "/>
            <h3 class="text-sm font-bold mt-4 text-center justify-center">Abdul Aziz bin Saleh Al-Dumeiji</h3>
            <p class="text-center mt-2 text-sm">Member of the Sharia Committee</p>
            <p class="text-end mt-2 text-xs font-light"><span class="block">He holds a master's degree in Islamic jurisprudence.</span><br>
              <span class="block">He holds an Executive Master's degree in Islamic Finance.</span><br>
              <span class="block">He holds a fellowship in Sharia supervision and auditing from the Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI).</span><br>
              <span class="block">He has experience working in the Sharia departments of financial institutions.</span><br>
              <span class="block">Member of several Sharia committees for a number of fintech companies.</span><br>
              <span class="block">Multiple scientific contributions including a published book on financing services and a doctoral dissertation on crowdfunding.</span>
            </p>
          </div>
        </dialog>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @layer utilities{

  .dialog-animate {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .dialog-animate.dialog-open {
    opacity: 1;
    transform: scale(1);
  }
  .dialog-backdrop::backdrop{
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.3);
  }


}

</style>
