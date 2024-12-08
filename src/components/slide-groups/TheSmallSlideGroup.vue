<template>
    <v-card cols="12" md="6" elevation="0" class="w-fit mx-0" data-aos="fade-left">
        <div class="flex justify-center">
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="tab1">
                    <v-sheet elevation="0">
                        <v-slide-group :center-active="true">
                            <v-slide-group-item v-for="(tabItemImage, index) in images" :key="index">
                                <v-card class="ml-2 mr-4" :elevation="0">
                                    <the-half-image-card :id="tabItemImage.id" :href="tabItemImage.url"
                                        :title="tabItemImage.name" :price="tabItemImage.price" :des="tabItemImage.des"
                                        :slug="tabItemImage.slug" :category="tabItemImage.category"
                                        class="rounded-[20px]">
                                    </the-half-image-card>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-tabs-window-item>
            </v-tabs-window>
        </div>
    </v-card>
</template>

<script setup>
    import { ref } from 'vue';
    import TheHalfImageCard from '../cards/TheHalfImageCard.vue';

    const tab = ref('tab1');

    const images = [
        {
            id: 600,
            url: '/Outdoor Cateogry/Outdoor (Original)/Plant/pic-3.png',
            name: 'ផើងផ្កាជ័រ',
            des: 'ស្វិត ធន់នឹងកម្ដៅថ្ងៃ',
            price: 40.99,
            slug: 'ផើងផ្កាជ័រស្វិត',
            category: 'outdoor',
            action: ''
        },
        {
            id: 601,
            url: '/Outdoor Cateogry/Outdoor (Original)/Plant/pic-4.png',
            name: 'ផើងផ្កា',
            des: 'ធន់នឺងកម្ដៅថ្ងៃ ស្វិត',
            price: 50.99,
            slug: 'ផើងផ្កា',
            category: 'outdoor',
            action: ''
        },
        {
            id: 602,
            url: '/Outdoor Cateogry/Outdoor (Original)/Plant/pic-10.png',
            name: 'ផើងផ្កា ',
            des: 'ធន់និងកម្ដៅថ្ងៃ ស្វិត',
            price: 60.99,
            slug: 'ផើងផ្កាថ្ម',
            category: 'outdoor',
            action: ''
        },

    ]

</script>