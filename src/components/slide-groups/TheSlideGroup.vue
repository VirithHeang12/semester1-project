<template>
    <v-row class="flex justify-between">
        <v-card cols="12" md="3" elevation="0">
            <v-tabs v-model="tab" color="primary" direction="vertical">
                <v-tab v-for="tab in tabItems" :prepend-icon="tab.icon" :value="tab.value" :key="tab.value">{{ tab.title
                    }}</v-tab>
            </v-tabs>
        </v-card>
        <v-card cols="12" md="9" elevation="0" class="flex-grow-1" :max-width="1000">
            <v-tabs-window v-model="tab" class="h-full w-full">
                <v-tabs-window-item class="h-full" v-for="tabItem in tabItems" :value="tabItem.value"
                    :key="tabItem.value">
                    <v-sheet class="h-full" elevation="0">
                        <v-slide-group class="h-full flex" :show-arrows="true">
                            <v-slide-group-item v-for="(tabItemImage, index) in tabItemImages" :key="index">
                                <v-card class="h-full px-4" width="200" :elevation="0">
                                    <div class="w-full h-full">
                                        <img :src="tabItemImage" alt="tabItemImage"
                                            class="w-full h-full object-cover rounded-lg">
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