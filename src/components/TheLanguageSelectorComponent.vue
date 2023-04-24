<template>
  <q-btn-dropdown
    flat
    icon="translate"
    square
    :label="label ? $t(`languages.${$i18n.locale}`) : null"
  >
    <q-list>
      <q-item
        v-for="availableLocale in $i18n.availableLocales"
        :key="`locale-${availableLocale}`"
        v-close-popup
        clickable
        @click="updateLocale(availableLocale)"
      >
        <q-item-section>
          <q-item-label>
            {{ $t(`languages.${availableLocale}`) }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup>
defineProps({
  label: {
    type: Boolean,
    default: false,
  },
})
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from 'stores/locale-store'

const { locale } = useI18n()
const localeStore = useLocaleStore()
const updateLocale = (newLocale) => {
  locale.value = newLocale
  localeStore.setLocale(newLocale)
}
</script>
