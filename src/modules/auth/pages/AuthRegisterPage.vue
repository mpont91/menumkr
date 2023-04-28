<template>
  <q-card-section>
    <div class="text-h6">{{ $t('auth.register.title') }}</div>
  </q-card-section>
  <q-separator />
  <q-card-section>
    <q-form
      ref="registerForm"
      class="q-gutter-md"
      @submit="registerSubmitHandler"
      @reset="registerResetHandler"
    >
      <q-input
        v-model="registerFields.name"
        :label="$t('field.name')"
        name="name"
        :rules="[ruleRequired]"
      >
        <template #prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input
        v-model="registerFields.email"
        :label="$t('field.email')"
        name="email"
        :rules="[ruleRequired, ruleEmail]"
      >
        <template #prepend>
          <q-icon name="alternate_email" />
        </template>
      </q-input>
      <q-input
        v-model="registerFields.password"
        :label="$t('field.password')"
        :type="isPasswordVisible ? 'text' : 'password'"
        name="password"
        :rules="[ruleRequired, rulePasswordLength]"
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
      <q-input
        v-model="registerFields.passwordConfirmation"
        :label="$t('field.password_confirm')"
        :type="isPasswordConfirmationVisible ? 'text' : 'password'"
        :rules="[
          ruleRequired,
          rulePasswordLength,
          (value) => rulePasswordConfirmation(value, registerFields.password),
        ]"
        name="password-confirm"
      >
        <template #prepend>
          <q-icon name="lock" />
        </template>
        <template #append>
          <q-icon
            :name="
              isPasswordConfirmationVisible ? 'visibility' : 'visibility_off'
            "
            class="cursor-pointer"
            @click="visibilityPasswordConfirmation"
          />
        </template>
      </q-input>
      <div>
        <q-btn
          square
          size="medium"
          :label="$t('auth.register.action')"
          type="submit"
          color="primary"
          icon-right="person_add"
          class="full-width"
        />
      </div>
    </q-form>
    <q-btn
      icon="login"
      :label="$t('auth.register.login')"
      :to="{ name: 'auth_login' }"
      flat
      class="full-width q-mt-lg"
    />
  </q-card-section>
</template>

<script setup>
import { ref } from 'vue'
import authRegisterFactory from 'src/modules/auth/factories/auth-register-factory'
import {
  ruleEmail,
  rulePasswordConfirmation,
  rulePasswordLength,
  ruleRequired,
} from 'src/services/validation-service'
import { useAuthRegisterApi, useAuthUserApi } from 'src/api/auth-api'
import { useLoaderService } from 'src/services/loader-service'
import { useNotifyService } from 'src/services/notify-service'
import { useUserStore } from 'stores/user-store'
import { useRouter } from 'vue-router'
import { useDelayService } from 'src/services/delay-service'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const userStore = useUserStore()
const loaderService = useLoaderService()
const notifyService = useNotifyService()
const isPasswordVisible = ref(false)
const isPasswordConfirmationVisible = ref(false)
const registerForm = ref()
const registerFields = ref({ ...authRegisterFactory })
const { t } = useI18n()
const delayService = useDelayService()

const visibilityPassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
const visibilityPasswordConfirmation = () => {
  isPasswordConfirmationVisible.value = !isPasswordConfirmationVisible.value
}

const registerSubmitHandler = async () => {
  loaderService.show()
  try {
    await useAuthRegisterApi(registerFields.value)
    notifyService.success({
      message: t('auth.register.success_message'),
      caption: t('auth.register.success_caption'),
    })
    registerForm.value.reset()
    userStore.setUser(await useAuthUserApi())
    await delayService.delay()
    await router.push({ name: 'dashboard' })
  } catch (error) {
    notifyService.error(error)
  } finally {
    loaderService.hide()
  }
}

const registerResetHandler = () => {
  registerFields.value = { ...authRegisterFactory }
}
</script>
