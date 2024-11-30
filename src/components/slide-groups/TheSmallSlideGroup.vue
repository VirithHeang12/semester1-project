<template>
    <v-card cols="12" md="12" elevation="0" class="w-fit mx-0" data-aos="fade-left">
        <div class="flex justify-center">
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="tab1">
                    <v-sheet elevation="0">
                        <v-slide-group :center-active="true">
                            <v-slide-group-item v-for="(tabItemImage, index) in images" :key="index">
                                <v-card class="ml-2 mr-4" :elevation="0">
                                    <the-half-image-card></the-half-image-card>
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
            url: 'slide-groups/livingrooms/livingroom-1.jpg',
            price: 79.99
        },
        {
            url: 'slide-groups/livingrooms/livingroom-2.jpg',
            price: 89.99
        },
        {
            url: 'slide-groups/livingrooms/livingroom-3.jpg',
            price: 99.99
        },
        {
            url: 'slide-groups/livingrooms/livingroom-4.jpg',
            price: 109.99
        },
        {
            url: 'slide-groups/livingrooms/livingroom-5.jpg',
            price: 119.99
        },
        {
            url: 'slide-groups/livingrooms/livingroom-6.jpg',
            price: 129.99
        },
        {
            url: 'slide-groups/livingrooms/livingroom-7.jpg',
            price: 139.99
        },
    ]

</script>