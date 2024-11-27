<template>
    <v-row class="flex justify-between">
        <!-- <v-card cols="12" md="3" elevation="0" data-aos="fade-right">
            <v-tabs v-model="tab" color="black" :direction="displayStore.isMobile ? 'horizontal' : 'vertical'">
                <v-tab v-for="tab in tabItems" :value="tab.value" :key="tab.value"
                    :selected-class="'bg-grey-darken-1 text-white'">
                    <template v-slot:prepend>
                        <v-icon>{{ tab.icon }}</v-icon>
                    </template>
<p v-if="!displayStore.isMobile" class="text-[1rem]">{{ tab.title }}</p>
</v-tab>
</v-tabs>
</v-card> -->
        <v-card cols="12" md="3" elevation="0" data-aos="fade-right">
            <v-tabs v-model="tab" color="black" :direction="displayStore.isMobile ? 'horizontal' : 'vertical'">
                <v-tab v-for="tab in tabItems" :value="tab.value" :key="tab.value" class="icon-tab"
                    :selected-class="'bg-grey-darken-1 text-white'">
                    <template v-slot:prepend>
                        <v-icon>{{ tab.icon }}</v-icon>
                    </template>
                    <p v-if="!displayStore.isMobile" class="text-[1rem]">{{ tab.title }}</p>
                </v-tab>
            </v-tabs>
        </v-card>

        <v-card cols="12" md="9" elevation="0" class="flex-grow-1" :max-width="950" data-aos="fade-left">
            <v-tabs-window v-model="tab" class="h-full w-full">
                <v-tabs-window-item class="h-full" v-for="tabItem in tabItems" :value="tabItem.value"
                    :key="tabItem.value">
                    <v-sheet class="h-full" elevation="0">
                        <v-slide-group class="h-full flex" :show-arrows="true">
                            <v-slide-group-item v-for="(tabItemImage, index) in tabItemImages" :key="index">
                                <v-card class="h-full px-4" width="200" :elevation="0">
                                    <div class="w-full h-full relative">
                                        <img :src="tabItemImage.url" alt="tabItemImage"
                                            class="w-full h-full object-cover rounded-lg">
                                        <div class="flex justify-around gap-x-3 absolute left-0 bottom-2 w-full px-2">
                                            <div class="w-full flex-grow-1">
                                                <p class="pl-2">
                                                    <span class="text-gray-600 rounded-lg bg-gray-200 p-1">${{
                                                        tabItemImage.price
                                                    }}</span>
                                                </p>
                                            </div>
                                            <v-btn :color="'grey-darken-3'" :size="25" :ripple="false"
                                                :icon="'mdi-arrow-right'"></v-btn>
                                        </div>
                                    </div>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card>
    </v-row>
</template>

<script setup>
    import { computed, ref } from 'vue';

    import { useDisplayStore } from '@/stores/display';

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

<style scoped>
    .icon-tab {
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }

    .icon-tab .v-icon {
        font-size: 24px;
        /* Adjust the size as needed */
    }
</style>