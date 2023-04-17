import Guest from 'src/router/guest'
import Auth from 'src/router/auth'
import Dashboard from 'src/router/dashboard'

const routes = [
  Guest,
  Auth,
  Dashboard,
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
