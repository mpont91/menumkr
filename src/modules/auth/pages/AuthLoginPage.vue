<template>
  <q-form class="q-gutter-md" @submit="loginHandler">
    <q-input
      v-model="loginForm.email"
      :label="$t('auth.login.email')"
      name="email"
    />
    <q-input
      v-model="loginForm.password"
      :label="$t('auth.login.password')"
      :type="isPasswordVisible ? 'text' : 'password'"
      name="password"
    >
      <template #append>
        <q-icon
          :name="isPasswordVisible ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          @click="visibilityPassword"
        />
      </template>
    </q-input>
    <div>
      <q-btn
        square
        size="medium"
        :label="$t('auth.login.action')"
        class="full-width"
        type="submit"
        color="primary"
      />
    </div>
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import authLoginUserFactory from 'src/modules/auth/factories/auth-login-user-factory'
import { useLoginService } from 'src/modules/auth/services/login-service'
import { useLoaderService } from 'src/services/loader-service'
import { useNotifyService } from 'src/services/notify-service'

const router = useRouter()
const loaderService = useLoaderService()
const notifyService = useNotifyService()
const isPasswordVisible = ref(false)
const loginForm = ref({ ...authLoginUserFactory })

const loginHandler = async () => {
  loaderService.show()
  try {
    await useLoginService({
      email: loginForm.value.email,
      password: loginForm.value.password,
    })
    await router.push({ name: 'dashboard' })
  } catch (error) {
    notifyService.error(error)
  } finally {
    loaderService.hide()
  }
}

const visibilityPassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>
