<template>
  <div>
    <h1>Test</h1>
    <UserInfo />
    <UserCredentials />
    <UserImage />
  </div>
</template>

<script setup lang="ts">
// Sample components calls and implemetations
import UserCredentials from '~/components/profile/UserCredentials.vue'
import UserImage from '~/components/profile/UserImage.vue'
import UserInfo from '~/components/profile/UserInfo.vue'

definePageMeta({
  layout: 'app',
})
</script>
