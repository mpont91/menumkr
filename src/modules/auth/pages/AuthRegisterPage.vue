<template>
  <q-form class="q-gutter-md" @submit="registerHandler">
    <q-input
      v-model="registerForm.email"
      :label="$t('field.email')"
      name="email"
      :rules="[ruleRequired, ruleEmail]"
    >
      <template #prepend>
        <q-icon name="person" />
      </template>
    </q-input>
    <q-input
      v-model="registerForm.password"
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
    <q-input
      v-model="registerForm.passwordConfirm"
      :label="$t('field.password_confirm')"
      :type="isPasswordConfirmVisible ? 'text' : 'password'"
      name="password-confirm"
      :rules="[ruleRequired]"
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
</template>

<script setup>
import { ref } from 'vue'
import authRegisterFactory from 'src/modules/auth/factories/auth-register-factory'
import { ruleEmail, ruleRequired } from 'src/services/validation-service'

const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)
const registerForm = ref({ ...authRegisterFactory })

const registerHandler = async () => {}

const visibilityPassword = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}
const visibilityPasswordConfirm = () => {
  isPasswordConfirmVisible.value = !isPasswordConfirmVisible.value
}
</script>
