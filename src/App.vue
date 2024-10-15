<template>
  <v-app>
    <TheHeader />
    <v-main class="container">
      <RouterView />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'

import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'

</script>

<style scoped></style>
