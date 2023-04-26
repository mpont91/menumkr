<template>
  <q-page>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      luctus tempor leo, luctus lacinia nisl dictum sed. Fusce imperdiet
      interdum erat, eu sollicitudin tortor tristique quis. In hac habitasse
      platea dictumst. Proin est diam, finibus vitae rutrum interdum, congue
      quis diam. Ut lacinia porta ante ultricies iaculis. Phasellus convallis
      placerat nisi in feugiat. Suspendisse eu nunc nec nisl aliquam malesuada
      vitae a ex. Maecenas vel dui magna. Morbi fringilla sapien pharetra,
      maximus turpis in, interdum nisi.
    </p>
    <q-btn @click="logout">{{ $t('menu.auth_logout') }}</q-btn>
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
