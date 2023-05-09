<template>
  <router-view v-if="!isLoading" />
</template>
<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)
onMounted(() => (isLoading.value = false))
</script>
