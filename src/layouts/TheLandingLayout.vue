<template>
  <q-layout view="lHh Lpr lFf">
    <the-header-component />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import TheHeaderComponent from 'components/TheHeaderComponent.vue'
</script>
