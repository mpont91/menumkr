import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

const LOCAL_STORAGE_KEY = 'locale'

export const useLocaleStore = defineStore({
  id: 'locale',
  state: () => ({
    locale: ref(LocalStorage.getItem(LOCAL_STORAGE_KEY) || null),
  }),
  getters: {
    isLocalized: (state) => state.locale !== null,
  },
  actions: {
    setLocale(locale) {
      LocalStorage.set(LOCAL_STORAGE_KEY, locale)
      this.locale = locale
    },
  },
})
