<template>
  <q-form class="q-gutter-md" @submit="forgotPasswordHandler">
    <q-input
      v-model="forgotPasswordForm.email"
      :label="$t('field.email')"
      name="email"
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
</template>

<script setup>
import { ref } from 'vue'
import authForgotPasswordFactory from 'src/modules/auth/factories/auth-forgot-password-factory'
import { useAuthRegisterApi } from 'src/api/auth-api'
import { useNotifyService } from 'src/services/notify-service'
import { useLoaderService } from 'src/services/loader-service'

const loaderService = useLoaderService()
const notifyService = useNotifyService()
const forgotPasswordForm = ref({ ...authForgotPasswordFactory })
const forgotPasswordHandler = async () => {
  loaderService.show()
  try {
    await useAuthRegisterApi({
      email: forgotPasswordForm.value.email,
    })
  } catch (error) {
    notifyService.error(error)
  } finally {
    loaderService.hide()
  }
}
</script>
