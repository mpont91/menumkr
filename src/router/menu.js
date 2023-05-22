export default {
  path: '/menu/:menu',
  component: () => import('layouts/TheLandingLayout.vue'),
  children: [
    {
      path: '',
      name: 'menu',
      component: () => import('src/modules/menu/pages/MenuPage.vue'),
    },
  ],
}
