<template>
    <v-responsive class="mx-4">
        <v-app :theme="theme">
            <TheHeader />
            <v-main class="mt-4">
                <router-view v-slot="{ Component, route }">
                    <transition name="slide" mode="out-in">
                        <component :is="Component" :key="route.path" />
                    </transition>
                </router-view>
            </v-main>
            <TheFooter />
        </v-app>
    </v-responsive>
</template>

<script setup>
    import { RouterView } from 'vue-router'

    import TheHeader from './layouts/TheHeader.vue'
    import TheFooter from './layouts/TheFooter.vue'

    import { useThemeStore } from './stores/theme';
    import { computed } from 'vue';

    const themeStore = useThemeStore();

    const theme = computed(() => themeStore.theme);

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
