<template>
  <div
    class="window-height window-width row justify-center items-center bg-secondary"
  >
    <q-card class="bg-grey-1">
      <the-language-selector-component label class="full-width" />
      <q-card-section>
        <router-link :to="{ name: 'guest' }">
          <q-img :src="logo" width="330px" />
        </router-link>
      </q-card-section>
      <q-card-section>
        <router-view />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import logo from 'assets/logo/logo.png'
import TheLanguageSelectorComponent from 'components/TheLanguageSelectorComponent.vue'
</script>
