import { boot } from 'quasar/wrappers'
import axios from 'axios'

const LOGIN_PATH = '/auth/login'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: process.env.API })

api.defaults.withCredentials = true

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    switch (error?.response?.status) {
      case 419:
        // Refresh the csrf token
        await api.get(process.env.API + '/sanctum/csrf-cookie')

        // Return a new request using the original request's configuration
        return api(error.response.config)
      case 401:
        window.location = LOGIN_PATH
        break
      default:
        return Promise.reject(error)
    }
  },
)

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
