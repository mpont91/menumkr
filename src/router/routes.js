import Landing from 'src/router/landing'
import Menu from 'src/router/menu'
import Auth from 'src/router/auth'
import Dashboard from 'src/router/dashboard'

const routes = [
  Landing,
  Menu,
  Auth,
  Dashboard,
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
