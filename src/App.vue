<template>
    <v-app>
        <TheHeader />
        <v-main class="container">
            <router-view v-slot="{ Component, route }">
                <transition name="slide" mode="out-in">
                    <component :is="Component" :key="route.path" />
                </transition>
            </router-view>
        </v-main>
        <TheFooter />
    </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'

import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'

</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.2s;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}
</style>
