<script setup lang="ts">
definePageMeta({
  layout: 'app',
})

</script>
<template>
  <section class="grid w-full max-w-10xl gap-6 xl:px-0">
      <DpmTabNav /> 
    <div class="mt-6">
      <NuxtPage />
    </div>
  </section>
</template>
