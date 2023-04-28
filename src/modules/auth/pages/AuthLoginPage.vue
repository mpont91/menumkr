<template>
  <q-card-section>
    <div class="text-h6">{{ $t('auth.login.title') }}</div>
  </q-card-section>
  <q-separator />
  <q-card-section>
    <q-form
      ref="loginForm"
      class="q-gutter-md"
      @submit="loginSubmitHandler"
      @reset="loginResetHandler"
    >
      <q-input
        v-model="loginFields.email"
        :label="$t('field.email')"
        name="email"
        :rules="[ruleRequired, ruleEmail]"
      >
        <template #prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input
        v-model="loginFields.password"
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
      :label="$t('auth.login.forgot_password')"
      :to="{ name: 'auth_forgot_password' }"
      flat
      class="full-width q-mt-lg"
    />
  </q-card-section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import authLoginFactory from 'src/modules/auth/factories/auth-login-factory'
import { useLoginService } from 'src/modules/auth/services/login-service'
import { useLoaderService } from 'src/services/loader-service'
import { useNotifyService } from 'src/services/notify-service'
import { ruleEmail, ruleRequired } from 'src/services/validation-service'
import { useDelayService } from 'src/services/delay-service'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()
const loaderService = useLoaderService()
const notifyService = useNotifyService()
const isPasswordVisible = ref(false)
const loginForm = ref()
const loginFields = ref({ ...authLoginFactory })
const delayService = useDelayService()

const visibilityPassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const loginSubmitHandler = async () => {
  loaderService.show()
  try {
    await useLoginService(loginFields.value)
    notifyService.success({
      message: t('auth.login.success_message'),
      caption: t('auth.login.success_caption'),
    })
    loginForm.value.reset()
    await delayService.delay()
    await router.push({ name: 'dashboard' })
  } catch (error) {
    notifyService.error(error)
  } finally {
    loaderService.hide()
  }
}

const loginResetHandler = () => {
  loginFields.value = { ...authLoginFactory }
}
</script>
