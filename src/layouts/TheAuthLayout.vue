<template>
  <q-layout view="lHh Lpr lFf" class="bg-secondary">
    <q-page-container class="content-center q-pa-xl">
      <q-page>
        <q-card style="max-width: 400px" class="bg-grey-2 q-mx-auto">
          <the-language-selector-component label class="full-width" />
          <q-card-section>
            <router-link :to="{ name: 'landing' }">
              <q-img :src="logo" />
            </router-link>
          </q-card-section>
          <router-view />
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import logo from 'assets/logo/logo.png'
import TheLanguageSelectorComponent from 'components/TheLanguageSelectorComponent.vue'
</script>
