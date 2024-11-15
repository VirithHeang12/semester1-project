<template>
    <figure class="relative flex align-center justify-center">
        <svg width="450" height="292" viewBox="0 0 410 360" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Define a clipPath that uses the existing path shape -->
            <defs>
                <clipPath id="office">
                    <path
                        d="M418.275 16.0032C418.275 7.16664 411.111 6.21844e-05 402.275 6.36021e-05L146.5 0.000104637C137.663 0.000106055 130.5 7.16355 130.5 16.0001V28.6245C130.5 37.4611 123.337 44.6245 114.5 44.6245C81.9604 44.6245 48.8466 44.6245 16.3069 44.6245C7.4704 44.6245 0.307068 51.788 0.307068 60.6245V275.163C0.307068 284 7.47052 291.163 16.3071 291.163L218.917 291.164C227.753 291.164 234.917 284 234.917 275.164V251.493C234.917 242.657 242.08 235.493 250.917 235.493L402.275 235.493C411.111 235.493 418.275 228.323 418.275 219.487C418.275 141.817 418.275 81.0294 418.275 16.0032Z" />
                </clipPath>
            </defs>

            <!-- Image element with the clipPath applied -->
            <image :href="href" width="419" height="292" clip-path="url(#office)"
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
        default: 1362,
    },
    height: {
        type: Number,
        default: 628,
    },
    href: {
        type: String,
        default: 'office.png',
    },
    title: {
        type: String,
        default: 'ការិយាល័យ'
    },
});
</script>

<style scoped></style>