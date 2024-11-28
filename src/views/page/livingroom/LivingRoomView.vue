<template>
  <v-container>
    <div class="bg-white" data-aos="fade-up">
      <v-container>
        <v-row class="mb-16" data-aos="fade-up">
          <v-col cols="12">
            <v-carousel hide-delimiters class="rounded-lg">
              <v-carousel-item v-for="(item, i) in carouselItems" :key="`carousel-item-${i}`" :src="item.src" :lazy-src="item.lazySrc" cover></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3" data-aos="fade-right">
            <v-list lines="one" select-strategy="leaf">
              <v-list-subheader>Product Category</v-list-subheader>
              <v-list-item v-for="item in sidebarItems" :key="`sidebar-item-${item.id}`" :title="item.title">
                <template v-slot:prepend="{ isSelected }">
                  <v-list-item-action start>
                    <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </v-list>
            <v-container>
              <p class="mb-5">Filter By Price</p>
              <v-range-slider class="w-full"></v-range-slider>
            </v-container>
          </v-col>

          <v-col cols="12" md="9">
            <v-row>
              <v-col cols="12" sm="6" md="4" v-for="(card, index) in productCards" :key="`product-card-${index}`" data-aos="fade-up" :data-aos-delay="index * 100">
                <a href="#!">
                  <the-category-card :title="card.title" :price="card.price" :href="card.href"></the-category-card>
                </a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-sheet class="mx-auto" elevation="0" data-aos="fade-in">
      <h2 class="text-lg font-bold">អ្នកប្រហែលជាចូលចិត្ត</h2>
      <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-for="(cartrecom, n) in cartRecom" :key="`cart-recom-${n}`">
          <the-recommendation-card :src="cartrecom.src" :title="cartrecom.title"></the-recommendation-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script setup>
import TheCategoryCard from "@/components/cards/TheCategoryCard.vue";
import TheRecommendationCard from "@/components/cards/TheRecommendationCard.vue";

import { ref } from "vue";

// Data for carousel
const carouselItems = ref([
  {
    src: "/slide-groups/livingrooms/livingroom-9.jpg",
    lazySrc: "/thumbnails/bedroom-6.jpg",
  },
  {
    src: "/slide-groups/livingrooms/livingroom-10.jpg",
    lazySrc: "/thumbnails/bedroom-1.jpg",
  },
  {
    src: "/slide-groups/livingrooms/livingroom-9.jpg",
    lazySrc: "/thumbnails/bedroom-2.jpg",
  },
]);

// Sidebar filter items
const sidebarItems = ref([
  { id: 1, title: "All", checked: false },
  { id: 2, title: "Mattresses", checked: false },
  { id: 3, title: "Bedside Tables", checked: false },
  { id: 3, title: "Headbord", checked: false },
]);

// Product cards
const productCards = ref([
  {
    href: "/slide-groups/livingrooms/livingroom-1.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
    price: 109.99,
  },
  {
    href: "/slide-groups/livingrooms/livingroom-2.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
    price: 119.99,
  },
  {
    href: "/slide-groups/livingrooms/livingroom-3.jpg",
    price: 30.99,
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    href: "/slide-groups/livingrooms/livingroom-4.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
    price: 999.99,
  },
  {
    href: "/slide-groups/livingrooms/livingroom-5.jpg",
    price: 25.99,
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    href: "/slide-groups/livingrooms/livingroom-6.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
    price: 999.99,
  },
]);

// Recommendations
const cartRecom = ref([
  {
    src: "/slide-groups/livingrooms/livingroom-6.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    src: "/slide-groups/livingrooms/livingroom-5.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    src: "/slide-groups/livingrooms/livingroom-7.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    src: "/slide-groups/livingrooms/livingroom-1.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    src: "/slide-groups/livingrooms/livingroom-3.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    src: "/slide-groups/livingrooms/livingroom-4.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    src: "/bedrooms/Headborad.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-3.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-4.jpg",
    title: "បន្ទប់ទទួលភ្ញៀវ",
  },
  {
    src: "/slide-groups/livingrooms/livingroom-8.jpg",
    title: "Headbord",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-3.jpg",
    title: "Mattresses",
  },
  {
    src: "/slide-groups/livingrooms/livingroom-8.jpg",
    title: "Bedside Tables",
  },
]);
</script>

<style scoped>
.bg-white {
  background-color: white;
}

.rounded-lg {
  border-radius: 1.2rem;
}
</style>
