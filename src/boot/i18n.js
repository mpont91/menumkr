import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { useLocaleStore } from 'stores/locale-store'
import { Quasar } from 'quasar'

const useI18n = () =>
  createI18n({
    locale: detectLocale(),
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages,
  })

const dtoBrowserLocale = (locale) => {
  if (locale && locale.startsWith('es')) return 'es'
  return 'en'
}

const detectLocale = () => {
  const localeStore = useLocaleStore()
  if (localeStore.isLocalized) return localeStore.locale
  return dtoBrowserLocale(Quasar.lang.getLocale())
}

export default boot(({ app }) => {
  app.use(useI18n())
})

export { useI18n }
