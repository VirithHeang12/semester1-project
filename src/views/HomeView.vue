<template>
  <v-container>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <div class="bg-white">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <TheCard />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script setup>
import TheCard from '@/components/TheInvertedCard.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const items = computed(() => {
  return route.path.split('/').filter((i) => i);
});

</script>

<style scoped></style>
