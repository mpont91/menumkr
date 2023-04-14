import Guest from 'src/router/guest'
import Auth from 'src/router/auth'

const routes = [
  Guest,
  Auth,
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
