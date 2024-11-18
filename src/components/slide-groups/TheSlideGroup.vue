<template>
    <v-row>
        <v-card cols="12" md="6" elevation="0">
            <v-tabs v-model="tab" bg-color="primary" direction="vertical">
                <v-tab value="one">Item One</v-tab>
                <v-tab value="two">Item Two</v-tab>
                <v-tab value="three">Item Three</v-tab>
            </v-tabs>
        </v-card>
        <v-card cols="12" md="6" elevation="0">
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="one">
                    <v-sheet class="mx-auto" elevation="8" max-width="800">
                        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
                                <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200"
                                    width="100" @click="toggle">
                                    <div class="d-flex fill-height align-center justify-center">
                                        <v-scale-transition>
                                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline"
                                                size="48"></v-icon>
                                        </v-scale-transition>
                                    </div>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-tabs-window-item>

                <v-tabs-window-item value="two">
                    <v-sheet class="mx-auto" elevation="8" max-width="800">
                        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
                                <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200"
                                    width="100" @click="toggle">
                                    <div class="d-flex fill-height align-center justify-center">
                                        <v-scale-transition>
                                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline"
                                                size="48"></v-icon>
                                        </v-scale-transition>
                                    </div>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-tabs-window-item>

                <v-tabs-window-item value="three">
                    <v-sheet class="mx-auto" elevation="8" max-width="800">
                        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
                            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
                                <v-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200"
                                    width="100" @click="toggle">
                                    <div class="d-flex fill-height align-center justify-center">
                                        <v-scale-transition>
                                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline"
                                                size="48"></v-icon>
                                        </v-scale-transition>
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
import { ref } from 'vue';

const tab = ref(null);
const model = ref(null);
</script>