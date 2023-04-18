<template>
  <q-form class="q-gutter-md" @submit="resetPasswordHandler">
    <q-input
      v-model="resetPasswordForm.email"
      :label="$t('auth.reset_password.email')"
      name="email"
    >
      <template #prepend>
        <q-icon name="person" />
      </template>
    </q-input>
    <div>
      <q-btn
        :label="$t('auth.reset_password.action')"
        class="full-width"
        type="submit"
        color="primary"
        icon-right="lock_reset"
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
</template>

<script setup>
import { ref } from 'vue'
import authResetPasswordFactory from 'src/modules/auth/factories/auth-reset-password-factory'

const resetPasswordForm = ref({ ...authResetPasswordFactory })
const resetPasswordHandler = async () => {}
</script>
