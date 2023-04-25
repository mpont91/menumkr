<template>
  <q-header reveal elevated style="height: 200px">
    <q-toolbar style="height: 200px">
      <q-img :src="logo" height="150px" width="150px" class="q-ml-lg" />
      <q-space></q-space>
      <q-btn square flat :to="{ name: 'auth_login' }" class="q-mr-lg gt-xs">
        {{ $t('menu.auth_login') }}
      </q-btn>
      <q-btn
        square
        outline
        :to="{ name: 'auth_register' }"
        class="q-mr-lg gt-xs"
      >
        {{ $t('menu.auth_register') }}
      </q-btn>
      <the-language-selector-component />
      <q-btn square flat icon="menu" class="q-mr-lg xs">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item v-close-popup clickable>
              <q-item-section>
                <router-link
                  v-slot="{ navigate }"
                  :to="{ name: 'auth_login' }"
                  custom
                >
                  <span @click="navigate">{{ $t('menu.auth_login') }}</span>
                </router-link>
              </q-item-section>
            </q-item>
            <q-item v-close-popup clickable>
              <q-item-section>
                <router-link
                  v-slot="{ navigate }"
                  :to="{ name: 'auth_register' }"
                  custom
                >
                  <span @click="navigate">{{ $t('menu.auth_register') }}</span>
                </router-link>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import logo from 'assets/logo/logo.png'
import TheLanguageSelectorComponent from 'components/TheLanguageSelectorComponent.vue'
</script>
