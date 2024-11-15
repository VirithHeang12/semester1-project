<template>
  <v-container>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <div class="bg-white">
      <v-container>
        <v-row class="mb-16">
          <v-col cols="12">
            <TheInvertedCard href="image_2024-11-04_16-08-40.png" />
          </v-col>
        </v-row>
        <v-row>
          <v-container>
            <h2 class="text-center font-bold text-gray-700 text-[2rem] mb-10">ប្រភេទគ្រឿងសង្ហារឹម</h2>
            <v-row>
              <v-col cols="12" md="4">
                <a href="#">
                  <TheTopLeftInvertedCard />
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-top-left-bottom-right-inverted-card></the-top-left-bottom-right-inverted-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <TheInvertedCard href="image_2024-11-04_16-08-40.png" />
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <TheInvertedCard href="image_2024-11-04_16-08-40.png" />
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script setup>
import TheInvertedCard from '@/components/cards/TheInvertedCard.vue';
import TheTopLeftBottomRightInvertedCard from '@/components/cards/TheTopLeftBottomRightInvertedCard.vue';
import TheTopLeftInvertedCard from '@/components/cards/TheTopLeftInvertedCard.vue';

import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const items = computed(() => {
  return route.path.split('/').filter((i) => i);
});

</script>

<style scoped></style>
