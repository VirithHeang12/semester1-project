<template>
    <figure class="relative flex align-center justify-center">
        <svg width="368" height="306" viewBox="0 0 368 306" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Define a clipPath using the path from the mask -->
            <defs>
                <clipPath id="kitchen">
                    <path
                        d="M367.5 16C367.5 7.16342 360.337 0 351.5 0H110.893C102.057 0 94.8932 7.16344 94.8932 16V27.299C94.8932 36.1355 87.7118 43.299 78.8753 43.299C53.8037 43.299 41.8737 43.299 16.8022 43.299C7.96561 43.299 0.78421 50.4624 0.78421 59.299V289.744C0.78421 298.58 7.94766 305.744 16.7842 305.744H351.5C360.337 305.744 367.5 298.58 367.5 289.744V16Z" />
                </clipPath>
            </defs>

            <!-- Image element with the clipPath applied -->
            <image :href="href" width="368" height="306" clip-path="url(#kitchen)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>

        <figcaption class="absolute left-5 top-0 flex items-center justify-center">
            <h2 class="text-gray-700 text-xl font-bold">{{ title }}</h2>
        </figcaption>
    </figure>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    width: {
        type: Number,
        default: 363,
    },
    height: {
        type: Number,
        default: 236,
    },
    href: {
        type: String,
        default: 'kitchen.png',
    },
    title: {
        type: String,
        default: 'ផ្ទះបាយ'
    },
});
</script>

<style scoped></style>