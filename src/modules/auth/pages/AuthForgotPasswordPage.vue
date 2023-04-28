<template>
  <q-card-section>
    <div class="text-h6">{{ $t('auth.forgot_password.title') }}</div>
  </q-card-section>
  <q-separator />
  <q-card-section>
    <q-form
      ref="forgotPasswordForm"
      class="q-gutter-md"
      @submit="forgotPasswordSubmitHandler"
      @reset="forgotPasswordResetHandler"
    >
      <q-input
        v-model="forgotPasswordFields.email"
        :label="$t('field.email')"
        name="email"
        :rules="[ruleRequired, ruleEmail]"
      >
        <template #prepend>
          <q-icon name="person" />
        </template>
      </q-input>
      <div>
        <q-btn
          :label="$t('auth.forgot_password.action')"
          class="full-width"
          type="submit"
          color="primary"
          icon-right="lock_reset"
        />
      </div>
    </q-form>
    <q-btn
      icon="login"
      :label="$t('auth.forgot_password.login')"
      :to="{ name: 'auth_login' }"
      flat
      class="full-width q-mt-lg"
    />
  </q-card-section>
</template>

<script setup>
import { ref } from 'vue'
import authForgotPasswordFactory from 'src/modules/auth/factories/auth-forgot-password-factory'
import { useAuthForgotPasswordApi } from 'src/api/auth-api'
import { useNotifyService } from 'src/services/notify-service'
import { useLoaderService } from 'src/services/loader-service'
import { ruleEmail, ruleRequired } from 'src/services/validation-service'
import { useI18n } from 'vue-i18n'

const loaderService = useLoaderService()
const notifyService = useNotifyService()
const forgotPasswordForm = ref()
const forgotPasswordFields = ref({ ...authForgotPasswordFactory })
const { t } = useI18n()
const forgotPasswordSubmitHandler = async () => {
  loaderService.show()
  try {
    await useAuthForgotPasswordApi(forgotPasswordFields.value)
    notifyService.success({
      message: t('auth.forgot_password.success_message'),
      caption: t('auth.forgot_password.success_caption'),
    })
    forgotPasswordForm.value.reset()
  } catch (error) {
    notifyService.error(error)
  } finally {
    loaderService.hide()
  }
}
const forgotPasswordResetHandler = () => {
  forgotPasswordFields.value = { ...authForgotPasswordFactory }
}
</script>
