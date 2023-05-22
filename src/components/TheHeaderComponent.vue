<template>
  <q-header reveal elevated style="height: 200px">
    <q-toolbar style="height: 200px">
      <router-link v-slot="{ navigate }" :to="{ name: 'landing' }" custom>
        <q-img
          :src="logo"
          height="150px"
          width="150px"
          class="q-ml-lg cursor-pointer"
          @click="navigate"
        />
      </router-link>
      <q-space></q-space>
      <q-btn-dropdown
        v-if="userStore.isLoggedIn"
        :label="userStore.user.name"
        square
        flat
        icon="person"
      >
        <q-list style="min-width: 100px">
          <q-item v-close-popup clickable>
            <q-item-section>
              <router-link
                v-slot="{ navigate }"
                :to="{ name: 'dashboard' }"
                custom
              >
                <span @click="navigate">{{ $t('menu.dashboard') }}</span>
              </router-link>
            </q-item-section>
          </q-item>
          <q-item v-close-popup clickable>
            <q-item-section>
              <span @click="logoutHandler">{{ $t('menu.auth_logout') }}</span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-btn
        v-if="!userStore.isLoggedIn"
        square
        flat
        :to="{ name: 'auth_login' }"
        class="q-mr-lg gt-xs"
      >
        {{ $t('menu.auth_login') }}
      </q-btn>
      <q-btn
        v-if="!userStore.isLoggedIn"
        square
        outline
        :to="{ name: 'auth_register' }"
        class="q-mr-lg gt-xs"
      >
        {{ $t('menu.auth_register') }}
      </q-btn>
      <the-language-selector-component />
      <q-btn
        v-if="!userStore.isLoggedIn"
        square
        flat
        icon="menu"
        class="q-mr-lg xs"
      >
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
import { useRouter } from 'vue-router'
import logo from 'assets/logo/logo.png'
import TheLanguageSelectorComponent from 'components/TheLanguageSelectorComponent.vue'
import { useUserStore } from 'stores/user-store'
import { useLogoutService } from 'src/modules/auth/services/login-service'
import { useDelayService } from 'src/services/delay-service'
import { useLoaderService } from 'src/services/loader-service'
import { useNotifyService } from 'src/services/notify-service'
import { useI18n } from 'vue-i18n'

const userStore = useUserStore()
const router = useRouter()
const delayService = useDelayService()
const loaderService = useLoaderService()
const notifyService = useNotifyService()
const { t } = useI18n()

const logoutHandler = async () => {
  loaderService.show()
  try {
    await useLogoutService()
    notifyService.success({
      message: t('auth.logout.success_message'),
      caption: t('auth.logout.success_caption'),
    })
    await delayService.delay()
    await router.push({ name: 'landing' })
  } catch (error) {
    notifyService.error(error)
  } finally {
    loaderService.hide()
  }
}
</script>
