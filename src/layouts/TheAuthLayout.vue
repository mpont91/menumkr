<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="window-height window-width row justify-center items-center">
        <q-card>
          <q-card-section>
            <q-img :src="logo" max-width="300px" />
          </q-card-section>
          <q-card-section>
            <router-view />
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import logo from 'assets/logo/logo.png'
</script>
