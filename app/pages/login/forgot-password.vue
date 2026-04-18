<script setup lang="ts">
definePageMeta({
    layout: 'default',
    auth: false,
})
</script>

<template>
    <div class="min-h-screen flex items-center justify-center px-4">
        <div class="w-full max-w-md rounded-lg border p-6 space-y-3">
            <h1 class="text-xl font-semibold">Forgot Password</h1>
            <p class="text-sm text-muted-foreground">
                Password reset flow is not implemented yet. Please contact support.
            </p>
            <NuxtLink to="/login" class="text-sm underline">Back to login</NuxtLink>
        </div>
    </div>
</template>
