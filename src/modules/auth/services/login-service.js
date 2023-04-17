import { useUserStore } from 'stores/user-store'
import { useAuthLoginApi, useAuthUserApi } from 'src/api/auth-api'
import { useAuthLogoutApi } from 'src/api/auth-api'

export const useLoginService = async (email, password) => {
  const userStore = useUserStore()
  await useAuthLoginApi({ email, password })
  userStore.setUser(await useAuthUserApi())
}

export const useLogoutService = async () => {
  const userStore = useUserStore()
  await useAuthLogoutApi()
  userStore.resetUser()
}
