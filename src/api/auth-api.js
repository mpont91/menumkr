import { api } from 'boot/axios'

export const useAuthLoginApi = async ({ email, password }) =>
  await api.post('/login', {
    email,
    password,
  })

export const useAuthLogoutApi = async () => await api.post('/logout')

export const useAuthUserApi = async () => await api.get('/api/user')

export const useAuthRegisterApi = async ({
  name,
  email,
  password,
  password_confirmation,
}) =>
  await api.post('/register', { name, email, password, password_confirmation })

export const useAuthForgotPasswordApi = async ({ email }) =>
  await api.post('/forgot-password', { email })

export const useAuthResetPasswordApi = async ({ token, password }) =>
  await api.post('/reset-password', {
    token,
    password,
  })
