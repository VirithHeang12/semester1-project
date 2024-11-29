<template>
    <v-container class="flex justify-center">
        <v-card cols="12" md="12" elevation="0" :min-width="300" :max-width="300" :min-height="200" :max-height="250"
            data-aos="fade-left">
            <div class="flex justify-center">
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="tab1">
                        <v-sheet elevation="0">
                            <v-slide-group :center-active="true">
                                <v-slide-group-item v-for="(tabItemImage, index) in images" :key="index">
                                    <v-card width="300" class="px-6" :elevation="0">
                                        <div class="relative">
                                            <img :src="tabItemImage.url" alt="tabItemImage"
                                                class="w-full h-60 object-cover rounded-lg">
                                            <div
                                                class="w-full flex justify-between align-center gap-x-3 absolute left-0 bottom-2 px-2">
                                                <div class="flex-grow-1">
                                                    <p class="pl-2">
                                                        <span
                                                            class="text-[1rem] text-gray-600 rounded-lg bg-gray-200 p-1">${{
                                                                tabItemImage.price
                                                            }}</span>
                                                    </p>
                                                </div>
                                                <v-btn :rounded="true" :color="'grey-darken-3'" :size="24"
                                                    :ripple="false">
                                                    <template #prepend>
                                                        <v-icon :size="20">mdi-arrow-right</v-icon>
                                                    </template>
                                                </v-btn>
                                            </div>
                                        </div>
                                    </v-card>
                                </v-slide-group-item>
                            </v-slide-group>
                        </v-sheet>
                    </v-tabs-window-item>
                </v-tabs-window>
            </div>
        </v-card>
    </v-container>
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