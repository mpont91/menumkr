<template>
  <q-page v-if="menu" padding>
    <h1>{{ menu.name }}</h1>
    <section v-for="heading in menu.headings" :key="heading.id">
      <h2>{{ heading.name }}</h2>
      <ul>
        <li v-for="dish in heading.dishes" :key="dish.id">
          {{ `${dish.name} - ${dish.price} €` }}
        </li>
      </ul>
    </section>
  </q-page>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuGetApi } from 'src/api/menu-api'

const menu = ref()
const route = useRoute()

onMounted(async () => {
  menu.value = await useMenuGetApi(route.params.menu)
})
</script>
