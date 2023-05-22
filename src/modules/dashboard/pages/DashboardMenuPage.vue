<template>
  <q-page padding>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      luctus tempor leo, luctus lacinia nisl dictum sed. Fusce imperdiet
      interdum erat, eu sollicitudin tortor tristique quis. In hac habitasse
      platea dictumst. Proin est diam, finibus vitae rutrum interdum, congue
      quis diam. Ut lacinia porta ante ultricies iaculis. Phasellus convallis
      placerat nisi in feugiat. Suspendisse eu nunc nec nisl aliquam malesuada
      vitae a ex. Maecenas vel dui magna. Morbi fringilla sapien pharetra,
      maximus turpis in, interdum nisi.
    </p>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const menu = route.params.menu

console.log(menu)
</script>
