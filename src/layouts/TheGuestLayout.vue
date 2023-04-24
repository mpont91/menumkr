<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated style="height: 200px">
      <q-toolbar style="height: 200px">
        <q-img :src="logo" height="150px" width="150px" class="q-ml-lg" />
        <q-space></q-space>
        <q-btn square flat :to="{ name: 'auth_login' }" class="q-mr-lg">
          Login
        </q-btn>
        <q-btn square outline :to="{ name: 'auth_register' }" class="q-mr-lg">
          Sign up
        </q-btn>
        <the-language-selector-component />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import logo from 'assets/logo/logo.png'
import TheLanguageSelectorComponent from 'components/TheLanguageSelectorComponent.vue'
</script>
