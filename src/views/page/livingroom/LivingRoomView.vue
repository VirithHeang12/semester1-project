<template>
    <v-container>
        <div class="bg-white">
            <v-container>
                <v-row class="mb-16">
                    <v-col cols="12">
                        <v-carousel hide-delimiters class="rounded-[1.2rem]">
                            <v-carousel-item v-for="(item, i) in carouselItems" :key="i" :src="item.src"
                                cover></v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="3">
                        <v-list lines="one" select-strategy="leaf">
                            <v-list-subheader>Product Category</v-list-subheader>
                            <v-list-item v-for="item in sidebarItems" :key="item.id" :title="item.title">
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
                                    <the-category-card href="../small_chair_mini.png"></the-category-card>
                                </a>
                            </v-col>
                            <v-col cols="12" md="4">
                                <a href="#">
                                    <the-category-card href="../small_chair_mini.png"></the-category-card>
                                </a>
                            </v-col>
                            <v-col cols="12" md="4">
                                <a href="#">
                                    <the-category-card href="../small_chair_mini.png"></the-category-card>
                                </a>
                            </v-col>
                            <v-col cols="12" md="4">
                                <a href="#">
                                    <the-category-card href="../small_chair_mini.png"></the-category-card>
                                </a>
                            </v-col>
                            <v-col cols="12" md="4">
                                <a href="#">
                                    <the-category-card href="../small_chair_mini.png"></the-category-card>
                                </a>
                            </v-col>
                            <v-col cols="12" md="4">
                                <a href="#">
                                    <the-category-card href="../small_chair_mini.png"></the-category-card>
                                </a>
                            </v-col>

                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-sheet class="mx-auto" elevation="0">
            <h2 class="font-bold text-lg">អ្នកប្រហែលជាចូលចិត្ត</h2>
            <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="n in 15" :key="n">
                    <the-category-card></the-category-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </v-container>
</template>

<script setup>
import TheCategoryCard from "@/components/cards/TheCategoryCard.vue";

import { ref } from "vue";


const carouselItems = ref([
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
]);

const sidebarItems = ref([
    {
        id: 1,
        title: 'All',
        checked: false
    },
    {
        id: 2,
        title: 'Chairs',
        checked: false
    },
    {
        id: 3,
        title: 'Crouch',
        checked: false
    },
    {
        id: 4,
        title: 'Sofa',
        checked: false
    },
    {
        id: 5,
        title: 'Table',
        checked: false
    },
    {
        id: 6,
        title: 'TV',
        checked: false
    },
    {
        id: 7,
        title: 'Wardrobe',
        checked: false
    },
    {
        id: 8,
        title: 'Window',
        checked: false
    },
]);

</script>

<style scoped></style>
