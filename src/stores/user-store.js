import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

const LOCAL_STORAGE_USER = 'user'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: ref(LocalStorage.getItem(LOCAL_STORAGE_USER) || {}),
  }),
  getters: {
    isLoggedIn: (state) => JSON.stringify(state.user) !== '{}',
  },
  actions: {
    setUser(user) {
      LocalStorage.set(LOCAL_STORAGE_USER, user)
      this.user = user
    },
    resetUser() {
      LocalStorage.remove(LOCAL_STORAGE_USER)
      this.user = {}
    },
  },
})
