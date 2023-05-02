import { api } from 'boot/axios'

export const useAuthLoginApi = async ({ email, password }) =>
  await api.post('/login', {
    email,
    password,
  })

export const useAuthLogoutApi = async () => await api.post('/logout')

export const useAuthUserApi = async () => (await api.get('/api/user')).data

export const useAuthRegisterApi = async ({
  name,
  email,
  password,
  passwordConfirmation,
}) =>
  await api.post('/register', {
    name,
    email,
    password,
    password_confirmation: passwordConfirmation,
  })

export const useAuthForgotPasswordApi = async ({ email }) =>
  await api.post('/forgot-password', { email })

export const useAuthResetPasswordApi = async ({
  email,
  token,
  password,
  passwordConfirmation,
}) =>
  await api.post('/reset-password', {
    email,
    token,
    password,
    password_confirmation: passwordConfirmation,
  })
