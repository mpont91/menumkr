<template>
  <q-page>
    <p>Menu</p>
    <q-btn @click="logout">Logout</q-btn>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useLogoutService } from 'src/modules/auth/services/login-service'

const router = useRouter()
const logout = async () => {
  try {
    await useLogoutService()
    await router.push({ name: 'guest' })
  } catch (error) {
    console.log(error)
  }
}
</script>
