<template>
  <q-form class="q-gutter-md" @submit="loginHandler">
    <q-input
      v-model="loginForm.email"
      :label="$t('field.email')"
      name="email"
      :rules="[ruleRequired, ruleEmail]"
    >
      <template #prepend>
        <q-icon name="person" />
      </template>
    </q-input>
    <q-input
      v-model="loginForm.password"
      :label="$t('field.password')"
      :type="isPasswordVisible ? 'text' : 'password'"
      name="password"
      :rules="[ruleRequired]"
    >
      <template #prepend>
        <q-icon name="lock" />
      </template>
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
        type="submit"
        color="primary"
        icon-right="login"
        class="full-width"
      />
    </div>
  </q-form>
  <q-btn
    icon="lock_reset"
    :label="$t('auth.login.reset')"
    :to="{ name: 'auth_forgot_password' }"
    flat
    class="full-width q-mt-lg"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import authLoginFactory from 'src/modules/auth/factories/auth-login-factory'
import { useLoginService } from 'src/modules/auth/services/login-service'
import { useLoaderService } from 'src/services/loader-service'
import { useNotifyService } from 'src/services/notify-service'
import { ruleEmail, ruleRequired } from 'src/services/validation-service'

const router = useRouter()
const loaderService = useLoaderService()
const notifyService = useNotifyService()
const isPasswordVisible = ref(false)
const loginForm = ref({ ...authLoginFactory })

const loginHandler = async () => {
  loaderService.show()
  try {
    await useLoginService(loginForm.value)
    notifyService.success()
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
