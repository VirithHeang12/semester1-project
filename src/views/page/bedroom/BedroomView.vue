<template>
  <v-container>
    <div class="bg-white">
      <v-container>
        <v-row class="mb-16">
          <v-col cols="12">
            <v-carousel hide-delimiters class="rounded-[1.2rem]">
              <v-carousel-item
                v-for="(item, i) in carouselItems"
                :key="i"
                :src="item.src"
                cover
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <v-list lines="one" select-strategy="leaf">
              <v-list-subheader>Product Category</v-list-subheader>
              <v-list-item
                v-for="item in sidebarItems"
                :key="item.id"
                :title="item.title"
              >
                <template v-slot:prepend="{ isSelected }">
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-list>
            <v-container>
              <p class="mb-5">Filter By Price</p>
              <v-range-slider :width="100"></v-range-slider>
            </v-container>
          </v-col>

          <v-col cols="12" md="9">
            <v-row>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-category-card
                    href="/slide-groups/bedrooms/bedroom-1.jpg"
                    title="បន្ទប់គេង"
                    price="109.99$"
                  ></the-category-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-category-card
                    href="/slide-groups/bedrooms/bedroom-2.jpg"
                    title="បន្ទប់គេង"
                    price="119.99$"
                  ></the-category-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-category-card
                    href="/slide-groups/bedrooms/bedroom-3.jpg"
                    title="បន្ទប់គេង"
                    price="999.99$"
                  ></the-category-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-category-card
                    href="/bedrooms/badside table.jpg"
                    price="25.99$"
                    title="តុក្បែក្រេ"
                  ></the-category-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-category-card
                    href="/slide-groups/bedrooms/bedroom-4.jpg"
                    title="បន្ទប់គេង"
                    price="599.99$"
                  ></the-category-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-category-card
                    href="/slide-groups/bedrooms/bedroom-5.jpg"
                    title="បន្ទប់គេង"
                    price="9999.99$"
                  ></the-category-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-category-card
                    href="/bedrooms/bedside table1.jpg"
                    price="30.99$"
                    title="តុក្បែក្រេ"
                  ></the-category-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-category-card
                    href="/slide-groups/bedrooms/bedroom-6.jpg"
                    price="229.99$"
                    title="បន្ទប់គេង"
                  ></the-category-card>
                </a>
              </v-col>
              <v-col cols="12" md="4">
                <a href="#">
                  <the-category-card
                    href="/bedrooms/badside table.jpg"
                    price="30.99$"
                    title="តុក្បែក្រេ"
                  ></the-category-card>
                </a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-sheet class="mx-auto" elevation="0">
      <h2 class="text-lg font-bold">អ្នកប្រហែលជាចូលចិត្ត</h2>
      <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-for="(cartrecom, n) in cartRecom" :key="n">
          <the-recommendation-card
            :src="cartrecom['src']"
            :title="cartrecom['title']"
          >
          </the-recommendation-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script setup>
import TheCategoryCard from "@/components/cards/TheCategoryCard.vue";
import TheRecommendationCard from "@/components/cards/TheRecommendationCard.vue";

import { ref } from "vue";
const cartRecom = ref([
  {
    src: "/bedrooms/Headborad.jpg",
    title: "Headbord",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-3.jpg",
    title: "Mattresses",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-4.jpg",
    title: "Bedside Tables",
  },
  {
    src: "/bedrooms/Headborad.jpg",
    title: "Headbord",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-3.jpg",
    title: "Mattresses",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-4.jpg",
    title: "Bedside Tables",
  },
  {
    src: "/bedrooms/Headborad.jpg",
    title: "Headbord",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-3.jpg",
    title: "Mattresses",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-4.jpg",
    title: "Bedside Tables",
  },
  {
    src: "/bedrooms/Headborad.jpg",
    title: "Headbord",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-3.jpg",
    title: "Mattresses",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-4.jpg",
    title: "Bedside Tables",
  },
]);
const carouselItems = ref([
  {
    src: "/slide-groups/bedrooms/bedroom-1.jpg",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-6.jpg",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-2.jpg",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-3.jpg",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-4.jpg",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-5.jpg",
  },
]);

const sidebarItems = ref([
  {
    id: 1,
    title: "All",
    checked: false,
  },
  {
    id: 2,
    title: "Mattresses",
    checked: false,
  },
  {
    id: 3,
    title: "Bedside Tables",
    checked: false,
  },
  {
    id: 4,
    title: "Headboards",
    checked: false,
  },
]);
</script>

<style scoped></style>
