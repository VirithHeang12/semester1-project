<template>
    <figure class="relative flex align-center justify-center">
        <svg width="418" height="292" viewBox="0 0 418 292" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Define a clipPath that uses the existing path shape -->
            <defs>
                <clipPath id="clipShape">
                    <path
                        d="M417.968 16.0031C417.968 7.16658 410.804 1.14926e-06 401.968 2.56694e-06L146.193 4.36019e-05C137.356 4.50196e-05 130.193 7.16349 130.193 16V28.6244C130.193 37.461 123.03 44.6244 114.193 44.6244C81.6533 44.6244 48.5395 44.6244 15.9998 44.6244C7.16327 44.6244 -6.10352e-05 51.7879 -6.10352e-05 60.6244V275.163C-6.10352e-05 284 7.16339 291.163 15.9999 291.163L218.61 291.163C227.446 291.163 234.61 284 234.61 275.163V251.493C234.61 242.657 241.773 235.493 250.61 235.493L401.968 235.493C410.804 235.493 417.968 228.323 417.968 219.487C417.968 141.817 417.968 81.0293 417.968 16.0031Z" />
                </clipPath>
            </defs>

            <!-- Image element with the clipPath applied -->
            <image href="../../assets/livingroom-1.png" width="418" height="292" clip-path="url(#clipShape)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>
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
        default: '../assets/livingroom-1.png',
    },
    title: {
        type: String,
    },
});
</script>

<style scoped></style>