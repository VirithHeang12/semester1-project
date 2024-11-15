<template>
  <v-container>
    <div class="bg-white">
      <v-container>
        <v-row class="mb-16">
          <v-col cols="12">
            <the-inverted-card></the-inverted-card>
          </v-col>
        </v-row>
        <v-row>
          <v-container>
            <h2 class="text-center font-bold text-gray-700 text-[2rem] mb-10">ប្រភេទគ្រឿងសង្ហារឹម</h2>
            <v-row>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-long-top-left-inverted-card></the-long-top-left-inverted-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-top-left-bottom-right-inverted-card></the-top-left-bottom-right-inverted-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-short-top-left-inverted-card></the-short-top-left-inverted-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-long-bottom-right-inverted-card></the-long-bottom-right-inverted-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-top-right-bottom-left-inverted-card></the-top-right-bottom-left-inverted-card>
                </a>
              </v-col>

              <v-col cols="12" md="4">
                <a href="#">
                  <the-short-bottom-left-inverted-card></the-short-bottom-left-inverted-card>
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
import TheLongTopLeftInvertedCard from '@/components/cards/TheLongTopLeftInvertedCard.vue';
import TheShortTopLeftInvertedCard from '@/components/cards/TheShortTopLeftInvertedCard.vue';
import TheLongBottomRightInvertedCard from '@/components/cards/TheLongBottomRightInvertedCard.vue';
import TheTopRightBottomLeftInvertedCard from '@/components/cards/TheTopRightBottomLeftInvertedCard.vue';
import TheShortBottomLeftInvertedCard from '@/components/cards/TheShortBottomLeftInvertedCard.vue';

</script>

<style scoped></style>
