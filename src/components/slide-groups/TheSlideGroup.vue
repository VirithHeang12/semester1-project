<template>
    <v-row v-if="!displayStore.isMobile">
        <v-container fluid class="grid grid-cols-10 gap-x-2">
            <v-card class="col-span-3 min-[900px]:col-span-3 min-[1000px]:col-span-2" cols="12" md="3" elevation="0" data-aos="fade-right">
                <v-tabs v-model="tab" color="black" direction="vertical">
                    <v-tab v-for="tab in tabItems" :prepend-icon="tab.icon" :value="tab.value" :key="tab.value" :selected-class="'bg-grey-lighten-3 text-primary-700'">
                        <p class="text-[1rem] tracking-normal text-primary-700">{{ tab.title }}</p>
                    </v-tab>
                </v-tabs>
            </v-card>

            <v-card cols="12" md="9" elevation="0" class="col-span-7 min-[900px]:col-span-7 min-[1000px]:col-span-8" :max-width="950" data-aos="fade-left">
                <v-tabs-window v-model="tab" class="h-full w-full">
                    <v-tabs-window-item class="h-full" v-for="tabItem in tabItems" :value="tabItem.value" :key="tabItem.value">
                        <v-sheet class="h-full" elevation="0">
                            <v-slide-group class="h-full flex">
                                <v-slide-group-item v-for="(tabItemImage, index) in tabItemImages" :key="index">
                                    <v-card class="px-4" width="300" height="300" :elevation="0">
                                        <div class="w-full h-full relative">
                                            <img :src="tabItemImage.url" alt="tabItemImage" class="w-full h-full object-cover rounded-lg">
                                            <div class="flex justify-around align-center gap-x-3 absolute left-0 bottom-2 w-full px-2">
                                                <div class="w-full flex-grow-1 bg-gray-200 rounded-lg py-[6px] pl-3">
                                                    <span class="text-primary-700">${{
                                                        tabItemImage.price
                                                    }}</span>
                                                </div>
                                                <router-link class="cursor-pointer rotate-45" :to="{ name: 'details', params: { category: tabItem.value, id: tabItemImage.id, slug: tabItemImage.slug }, query: { image: tabItemImage.url, name: tabItemImage.name, price: tabItemImage.price, description: tabItemImage.description, category: tabItemImage.category } }">
                                                    <the-detail-link></the-detail-link>
                                                </router-link>
                                            </div>
                                        </div>
                                    </v-card>
                                </v-slide-group-item>
                            </v-slide-group>
                        </v-sheet>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card>
        </v-container>
    </v-row>

    <!-- Mobile -->
    <v-row v-else>
        <v-container fluid class="flex flex-col align-left px-0">
            <v-card cols="12" md="12" elevation="0" data-aos="fade-right" class="mb-10">
                <div class="flex justify-center">
                    <v-tabs v-model="tab" color="grey-darken-1" :rounded="true">
                        <v-tab :base-color="'grey-darken-1'" :color="'grey-darken-4'" :ripple="false" :max-width="40" :min-width="40" class="px-0 min-[350px]:mx-1 flex justify-center" v-for="tab in tabItems" :value="tab.value" :key="tab.value">
                            <template #prepend>
                                <v-icon class="ml-4" :size="24">{{ tab.icon }}</v-icon>
                            </template>
                        </v-tab>
                    </v-tabs>
                </div>
            </v-card>

            <v-container class="flex justify-center">
                <v-card cols="12" md="12" elevation="0" :min-width="300" :max-width="300" :min-height="200" :max-height="250" data-aos="fade-left">
                    <div class="flex justify-center">
                        <v-tabs-window v-model="tab">
                            <v-tabs-window-item v-for="tabItem in tabItems" :value="tabItem.value" :key="tabItem.value">
                                <v-sheet elevation="0">
                                    <v-slide-group :center-active="true">
                                        <v-slide-group-item v-for="(tabItemImage, index) in tabItemImages" :key="index">
                                            <v-card class="px-4" width="300" :elevation="0">
                                                <div class="relative">
                                                    <img :src="tabItemImage.url" alt="tabItemImage" class="w-full h-60 object-cover rounded-lg">
                                                    <div class="w-full flex justify-between align-center gap-x-3 absolute left-0 bottom-2 px-2">
                                                        <div class="flex-grow-1 bg-gray-200 rounded-lg py-[6px] pl-3">
                                                            <span class="text-[1rem] text-gray-600">${{
                                                                        tabItemImage.price
                                                                    }}</span>
                                                        </div>
                                                        <router-link class="cursor-pointer rotate-45" :to="{ name: 'details', params: { category: tabItem.value, id: tabItemImage.id, slug: tabItemImage.slug }, query: { image: tabItemImage.url, name: tabItemImage.name, price: tabItemImage.price, description: tabItemImage.description, category: tabItemImage.category } }">
                                                            <the-detail-link></the-detail-link>
                                                        </router-link>
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
        </v-container>
    </v-row>
</template>

<script setup>
    import { computed, ref } from 'vue';

    import { useDisplayStore } from '@/stores/display';
    import TheDetailLink from "@/components/links/TheDetailLink.vue";

    const displayStore = useDisplayStore();

    const props = defineProps({
        tabItems: {
            type: Array,
            default: () => [
                {
                    title: 'បន្ទប់ទទួលទានអាហារ',
                    value: 'diningroom',
                    icon: 'mdi-silverware-fork-knife',
                    images: [
                        'slide-groups/diningrooms/diningroom-1.jpg',
                        'slide-groups/diningrooms/diningroom-2.jpg',
                        'slide-groups/diningrooms/diningroom-3.jpg',
                        'slide-groups/diningrooms/diningroom-4.jpg',
                        'slide-groups/diningrooms/diningroom-5.jpg',
                        'slide-groups/diningrooms/diningroom-6.jpg',
                        'slide-groups/diningrooms/diningroom-7.jpg',
                    ]
                },
            ]
        }
    });

    const tab = ref(null);
    const tabItemImages = computed(() => props.tabItems.find(tabItem => tabItem.value === tab.value)?.images);
</script>

<style scoped></style>