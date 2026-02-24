<template>
  <form class="w-full h-full flex items-center justify-center">
    <Card class="w-full md:max-w-sm">
      <CardHeader class="justify-center text-center">
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access the platform.</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="Email" required />
        </div>
        <div class="space-y-2">
          <Label>Password</Label>
          <div class="relative">
            <Input :type="showPassword ? 'text' : 'password'" placeholder="Password" required />
            <Button
              size="icon-sm"
              variant="ghost"
              type="button"
              class="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
              @click="showPassword = !showPassword"
            >
              <EyeOff v-if="!showPassword" />
              <Eye v-else />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter class="justify-center">
        <Button>Login</Button>
      </CardFooter>
    </Card>
  </form>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Button } from '~/components/ui/button'
import { EyeOff, Eye } from 'lucide-vue-next'

const showPassword = ref(false)
</script>
