<template>
  <p>Menu</p>
  <q-btn @click="logout">Logout</q-btn>
</template>

<script setup>
import { useLogoutService } from 'src/modules/auth/services/login-service'

const logout = async () => {
  await useLogoutService()
}
</script>
