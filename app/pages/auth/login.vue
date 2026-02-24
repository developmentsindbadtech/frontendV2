<template>
  <form class="w-full h-full flex items-center justify-center" @submit.prevent="handleSubmit">
    <Card class="w-full sm:max-w-sm">
      <CardHeader class="justify-center text-center">
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access the platform.</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <Label>Email</Label>
          <Input v-model="email" type="email" placeholder="Email" required />
        </div>
        <div class="space-y-2">
          <Label>Password</Label>
          <div class="relative">
            <Input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              required
            />
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
const email = ref('')
const password = ref('')

const { login } = useAppAuthStore()

const handleSubmit = async () => {
  const res = await login(email.value, password.value)
  console.log(res)
}
</script>
