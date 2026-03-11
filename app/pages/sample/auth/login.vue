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
          <Input v-model="credentials.email" type="email" placeholder="Email" required />
        </div>
        <div class="space-y-2">
          <Label>Password</Label>
          <div class="relative">
            <Input
              v-model="credentials.password"
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
        <Button :disabled="isLoading">{{ isLoading ? 'Logging in...' : 'Login' }}</Button>
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
import { toast } from 'vue-sonner'

const isLoading = ref(false)
const showPassword = ref(false)

const credentials = ref<Credentials>({
  email: '',
  password: '',
})

const { login } = useAppAuthStore()

const handleSubmit = async () => {
  isLoading.value = true
  const res = await login(credentials.value)
  if (!res) {
    toast.error('Login failed: Invalid credentials')
  } else {
    toast.success('Logged in successfully')
    navigateTo('/')
  }
  isLoading.value = false
}
</script>
