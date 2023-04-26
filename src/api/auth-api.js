import { api } from 'boot/axios'

export const useAuthLoginApi = async (request) =>
  await api.post('/login', request)

export const useAuthLogoutApi = async () => await api.post('/logout')

export const useAuthUserApi = async () => await api.get('/api/user')
export const useAuthRegisterApi = async (request) =>
  await api.post('/register', request)

export const useAuthForgotPasswordApi = async (request) =>
  await api.post('/forgot-password', request)

export const useAuthResetPasswordApi = async (request) =>
  await api.post('/reset-password', request)
