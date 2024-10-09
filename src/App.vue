<script setup>
import { RouterView } from 'vue-router'

import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'
</script>

<template>
  <v-responsive>
    <v-app>
      <TheHeader />
      <v-main>
        <RouterView />
      </v-main>
      <TheFooter>
        <template v-slot="slotProps">
          <v-btn>{{ slotProps.text }}</v-btn>
        </template>
      </TheFooter>
    </v-app>
  </v-responsive>
</template>

<style scoped></style>
