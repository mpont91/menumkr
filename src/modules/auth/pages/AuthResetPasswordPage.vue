<template>
  <q-card-section>
    <div class="text-h6">{{ $t('auth.reset_password.title') }}</div>
  </q-card-section>
  <q-separator />
  <q-card-section>
    <q-form
      ref="resetPasswordForm"
      class="q-gutter-md"
      @submit="resetPasswordSubmitHandler"
      @reset="resetPasswordResetHandler"
    >
      <q-input
        v-model="resetPasswordFields.email"
        :label="$t('field.email')"
        name="email"
        :rules="[ruleRequired, ruleEmail]"
        disable
      >
        <template #prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <q-input
        v-model="resetPasswordFields.password"
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
        v-model="resetPasswordFields.passwordConfirmation"
        :label="$t('field.password_confirm')"
        :type="isPasswordConfirmationVisible ? 'text' : 'password'"
        name="password-confirm"
        :rules="[
          ruleRequired,
          rulePasswordLength,
          (value) =>
            rulePasswordConfirmation(value, resetPasswordFields.password),
        ]"
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
          :label="$t('auth.reset_password.action')"
          type="submit"
          color="primary"
          icon-right="lock_reset"
          class="full-width"
        />
      </div>
    </q-form>
    <q-btn
      icon="login"
      :label="$t('auth.reset_password.login')"
      :to="{ name: 'auth_login' }"
      flat
      class="full-width q-mt-lg"
    />
  </q-card-section>
</template>

<script setup>
import { ref } from 'vue'
import authResetPasswordFactory from 'src/modules/auth/factories/auth-reset-password-factory'
import {
  ruleEmail,
  rulePasswordConfirmation,
  rulePasswordLength,
  ruleRequired,
} from 'src/services/validation-service'
import { useAuthResetPasswordApi } from 'src/api/auth-api'
import { useLoaderService } from 'src/services/loader-service'
import { useNotifyService } from 'src/services/notify-service'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useDelayService } from 'src/services/delay-service'
import { useRouter } from 'vue-router'

const route = useRoute()
const isPasswordVisible = ref(false)
const isPasswordConfirmationVisible = ref(false)
const resetPasswordForm = ref()
const resetPasswordFields = ref({ ...authResetPasswordFactory })
const loaderService = useLoaderService()
const notifyService = useNotifyService()
const { t } = useI18n()
const delayService = useDelayService()
const router = useRouter()

resetPasswordFields.value.email = route.query.email
resetPasswordFields.value.token = route.params.token

const visibilityPassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
const visibilityPasswordConfirmation = () => {
  isPasswordConfirmationVisible.value = !isPasswordConfirmationVisible.value
}

const resetPasswordSubmitHandler = async () => {
  loaderService.show()
  try {
    await useAuthResetPasswordApi(resetPasswordFields.value)
    notifyService.success({
      message: t('auth.reset_password.success_message'),
      caption: t('auth.reset_password.success_caption'),
    })
    resetPasswordForm.value.reset()
    await delayService.delay()
    await router.push({ name: 'auth_login' })
  } catch (error) {
    notifyService.error(error)
  } finally {
    loaderService.hide()
  }
}

const resetPasswordResetHandler = () => {
  resetPasswordFields.value = { ...authResetPasswordFactory }
}
</script>
