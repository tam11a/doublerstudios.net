<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <main class="max-w-6xl mx-auto">
    <RouterView />
  </main>
  <FooterComponent />
</template>
