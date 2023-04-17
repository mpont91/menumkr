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

const router = useRouter()
const isPasswordVisible = ref(false)
const loginForm = ref({ ...authLoginUserFactory })

const loginHandler = async () => {
  try {
    await useLoginService({
      email: loginForm.value.email,
      password: loginForm.value.password,
    })
    await router.push({ name: 'dashboard' })
  } catch (error) {
    console.log(error)
  }
}

const visibilityPassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>
