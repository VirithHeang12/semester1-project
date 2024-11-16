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
        <v-row class="mb-16">
            <v-container>
                <h2 class="text-center font-bold text-gray-700 text-[2rem] mb-10">សម្ភារៈពេញនិយម</h2>
                <v-row>
                    <v-col cols="12" md="4">
                        <a href="#">
                            <the-short-bottom-right-inverted-card :price="79.99"></the-short-bottom-right-inverted-card>
                        </a>
                    </v-col>
                    <v-col cols="12" md="4">
                        <a href="#">
                            <the-short-bottom-right-inverted-card href="lamp.png" :price="49.99" title="Edysse Lamps"></the-short-bottom-right-inverted-card>
                        </a>
                    </v-col>
                    <v-col cols="12" md="4">
                        <a href="#">
                            <the-short-bottom-right-inverted-card href="small_chair.png" :price="89.99" title="ឈុតតុកៅអីក្មេង"></the-short-bottom-right-inverted-card>
                        </a>
                    </v-col>    
                </v-row>
            </v-container>
        </v-row>
        <v-row class="mb-12">
            <v-container>
                <v-row>
                    <the-middle-top-inverted-card></the-middle-top-inverted-card>
                </v-row>
            </v-container>
        </v-row>
        <v-row>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-expansion-panels>
                            <v-expansion-panel
                                v-for="(expansionItem, i) in expansionItems"
                                :key="i"
                                class="text-[2rem]"
                            >
                                <v-expansion-panel-title class="px-6 py-6" :style="{ fontSize: '1.2rem' }">
                                    {{ expansionItem.title }}
                                </v-expansion-panel-title>
                                <v-expansion-panel-text class="text-[1rem]">
                                    {{ expansionItem.text }}
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="12" md="6">
                        <v-img class="w-full h-full" src="desk.png" alt="Desk" />
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
import TheShortBottomRightInvertedCard from '@/components/cards/TheShortBottomRightInvertedCard.vue';
import TheMiddleTopInvertedCard from '@/components/cards/TheMiddleTopInvertedCard.vue';

const expansionItems = [
    {
        title: 'តើគ្រឿងសង្ហារឹមរបស់អ្នកនាំចូលពីប្រទេសណាខ្លះ?',
        text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
    },
    {
        title: 'តើខ្ញុំអាចទៅមើលផ្ទាល់នៅហាងបានឬទេ?',
        text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
    },
    {
        title: 'តើខ្ញុំអាចទៅមើលផ្ទាល់នៅហាងបានឬទេ?',
        text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
    },
    {
        title: 'តើខ្ញុំអាចទៅមើលផ្ទាល់នៅហាងបានឬទេ?',
        text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
    },
    {
        title: 'តើខ្ញុំអាចទៅមើលផ្ទាល់នៅហាងបានឬទេ?',
        text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
    },
    {
        title: 'តើខ្ញុំអាចទៅមើលផ្ទាល់នៅហាងបានឬទេ?',
        text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
    },
];

</script>

<style scoped></style>
