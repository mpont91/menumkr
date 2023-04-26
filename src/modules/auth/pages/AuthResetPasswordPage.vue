<template>
  <q-form class="q-gutter-md" @submit="resetPasswordHandler">
    <q-input
      v-model="resetPasswordForm.email"
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
      v-model="resetPasswordForm.password"
      :label="$t('field.password')"
      :type="isPasswordVisible ? 'text' : 'password'"
      name="password"
      :rules="[ruleRequired, rulePasswordLength]"
    >
      <template #prepend>
        <q-icon name="lock" />
      </template>
      <template #append>
        <q-iconç
          :name="isPasswordVisible ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          @click="visibilityPassword"
        />
      </template>
    </q-input>
    <q-input
      v-model="resetPasswordForm.passwordConfirm"
      :label="$t('field.password_confirm')"
      :type="isPasswordConfirmVisible ? 'text' : 'password'"
      name="password-confirm"
      :rules="[
        ruleRequired,
        rulePasswordLength,
        (value) => rulePasswordConfirm(value, resetPasswordForm.password),
      ]"
    >
      <template #prepend>
        <q-icon name="lock" />
      </template>
      <template #append>
        <q-icon
          :name="isPasswordConfirmVisible ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          @click="visibilityPasswordConfirm"
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
</template>

<script setup>
import { ref } from 'vue'
import authResetPasswordFactory from 'src/modules/auth/factories/auth-reset-password-factory'
import {
  ruleEmail,
  rulePasswordConfirm,
  rulePasswordLength,
  ruleRequired,
} from 'src/services/validation-service'

const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)
const resetPasswordForm = ref({ ...authResetPasswordFactory })

const resetPasswordHandler = async () => {}

const visibilityPassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
const visibilityPasswordConfirm = () => {
  isPasswordConfirmVisible.value = !isPasswordConfirmVisible.value
}
</script>
