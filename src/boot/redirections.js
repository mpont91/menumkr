import { boot } from 'quasar/wrappers'
import { useUserStore } from 'stores/user-store'

export default boot(({ router }) => {
  router.beforeEach(async (to) => {
    const userStore = useUserStore()

    if (to.meta.requiresGuest && userStore.isLoggedIn) {
      return { name: 'dashboard' }
    }

    if (to.meta.requiresAuth && !userStore.isLoggedIn) {
      return { name: 'auth' }
    }
  })
})
