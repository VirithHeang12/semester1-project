<template>
    <figure class="relative flex align-center justify-center">
        <svg width="363" height="236" viewBox="0 0 363 236" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clipShape">
                    <path
                        d="M362.356 16.0088C362.356 7.17228 355.192 2.77556e-06 346.356 2.61549e-06L231 5.25827e-07C222.163 3.65753e-07 215 7.16344 215 16V28.1826C215 37.0192 207.88 44.1826 199.043 44.1826C152.383 44.1826 63.1169 44.1826 16.457 44.1826C7.62042 44.1826 0.500031 51.3461 0.500031 60.1826V219.051C0.500031 227.888 7.66348 235.051 16.5 235.051L346.356 235.052C355.192 235.052 362.356 227.879 362.356 219.043C362.356 142.181 362.356 92.8706 362.356 16.0088Z"
                        fill="#D9D9D9" />
                </clipPath>
            </defs>

            <image :href="href" width="363" height="236" clip-path="url(#clipShape)"
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
        default: 'Mask-group.png',
    },
    title: {
        type: String,
        default: 'បន្ទប់ទទួលទានអាហារ'
    },
});
</script>

<style scoped></style>