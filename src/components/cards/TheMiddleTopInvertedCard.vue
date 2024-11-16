<template>
    <figure class="relative flex align-center justify-center">
        <svg width="1200" height="436" viewBox="0 0 1200 436" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Define a clipPath that uses the existing path shape -->
            <defs>
                <clipPath id="timelessDesign">
                <path d="M0 20C0 8.9543 8.95431 0 20 0H383.5C394.546 0 403.5 8.9543 403.5 20V35.5C403.5 46.5457 412.454 55.5 423.5 55.5H596.25H776.5C787.546 55.5 796.5 46.5457 796.5 35.5V22.8519C796.5 11.8642 805.364 2.9341 816.351 2.85241L1179.85 0.149805C1190.95 0.0672507 1200 9.04544 1200 20.1493V416C1200 427.046 1191.05 436 1180 436H20C8.95429 436 0 427.046 0 416V20Z"/>
                </clipPath>
            </defs>

            <!-- Image element with the clipPath applied -->
            <image :href="href" width="1200" height="436" clip-path="url(#timelessDesign)" preserveAspectRatio="xMidYMid slice" />
        </svg>
        <figcaption class="absolute left-[35%] top-3">
            <h2 class="text-gray-700 text-[2.8rem] font-bold">{{ title }}</h2>
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
        default: 'timeless_design.png',
    },
    title: {
        type: String,
        default: 'Timeless Design',
    },
});
</script>

<style scoped></style>