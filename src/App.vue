<template>
    <v-responsive class="mx-4">
        <v-app v-if="!displayLoginView" :theme="theme">
            <TheHeader />
            <v-main class="mt-4 pt-5">
                <router-view v-slot="{ Component, route }">
                    <transition name="slide" mode="out-in">
                        <component :is="Component" :key="route.path" />
                    </transition>
                </router-view>
            </v-main>
            <TheFooter />
        </v-app>
        <v-app v-else>
            <router-view />
        </v-app>
    </v-responsive>
</template>

<script setup>
    import { RouterView } from 'vue-router'
    import { useRoute } from 'vue-router';

    import TheHeader from './layouts/TheHeader.vue'
    import TheFooter from './layouts/TheFooter.vue'


    import { useThemeStore } from './stores/theme';
    import { computed } from 'vue';

    const themeStore = useThemeStore();
    const route = useRoute();

    const displayLoginView = computed(() => route.name === 'login' || route.name === 'register');

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
