<template>
    <figure class="relative flex flex-col align-center justify-center mb-5">

        <svg width="250" height="280" viewBox="0 0 250 280" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Define a clipPath that uses the existing path shape -->
            <defs>
                <clipPath id="lamp">
                    <path
                        d="M10 12.5C10 5.63 15.63 0 22.5 0H237.5C244.37 0 250 5.63 250 12.5V200C250 206.87 244.37 212.5 237.5 212.5H212.5C205.63 212.5 200 218.13 200 225V270C200 276.87 194.37 280 187.5 280H22.5C15.63 280 10 276.87 10 270V12.5Z" />
                </clipPath>

            </defs>

            <!-- Image element with the clipPath applied -->
            <image href="/public/small_chair.png" width="250" height="280" clip-path="url(#lamp)" preserveAspectRatio="xMidYMid slice" />
        </svg>


        <figcaption>
        </figcaption>
        <svg class="absolute top-2 right-4" width="29" height="29" viewBox="0 0 29 29" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_255_363)">
                <rect x="0.719238" y="0.416016" width="28.1009" height="28.1009" rx="14.0505" fill="white"
                    fill-opacity="0.32" />
                <rect x="0.969238" y="0.666016" width="27.6009" height="27.6009" rx="13.8005" stroke="white"
                    stroke-opacity="0.22" stroke-width="0.5" />
            </g>
            <path
                d="M11.7458 9.09702C12.1691 9.09702 12.9348 9.29957 14.1764 10.5227L14.7919 11.1286L15.3982 10.5127C16.2603 9.63687 17.1776 9.0927 17.7921 9.0927C18.6209 9.0927 19.2743 9.37602 19.9114 10.0117C20.5117 10.6103 20.8425 11.4067 20.8425 12.2536C20.8429 13.101 20.5125 13.8978 19.9058 14.5033C19.8565 14.5534 17.2471 17.3684 15.0609 19.7277C14.9581 19.8258 14.8402 19.84 14.7776 19.84C14.7159 19.84 14.5997 19.8262 14.4969 19.7307C13.9644 19.1382 10.103 14.8449 9.65425 14.3966C9.05351 13.7972 8.72269 13.0003 8.72269 12.1534C8.72269 11.3065 9.05351 10.5106 9.65468 9.91111C10.239 9.32721 10.9231 9.09702 11.7458 9.09702ZM11.7458 8.23327C10.7128 8.23327 9.80238 8.54206 9.04444 9.29957C7.46419 10.8755 7.46419 13.4309 9.04444 15.0077C9.49575 15.459 13.8741 20.3298 13.8741 20.3298C14.1238 20.5794 14.4511 20.7033 14.7781 20.7033C15.105 20.7033 15.4311 20.5794 15.6811 20.3298C15.6811 20.3298 20.4706 15.1602 20.5216 15.1088C22.101 13.5316 22.101 10.9757 20.5216 9.39977C19.7373 8.61677 18.861 8.22852 17.7926 8.22852C16.7716 8.22852 15.6332 9.04261 14.7828 9.90636C13.9057 9.04261 12.8026 8.23327 11.7463 8.23327H11.7458Z"
                fill="#D04E4E" stroke="#D04E4E" stroke-width="0.352" />
            <defs>
                <filter id="filter0_b_255_363" x="-3.28076" y="-3.58398" width="36.101" height="36.101"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_255_363" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_255_363" result="shape" />
                </filter>
            </defs>
        </svg>
        <p class="w-12 h-12 absolute bottom-0 right-0 bg-stone-600 rounded-[1rem] flex justify-center items-center">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.2 6.87L2 16.56C2.07 17.7 2.95 18.63 4.1 18.65H13.16C14.31 18.63 15.19 17.7 15.26 16.56L16.06 6.87C16.12 6.29 15.92 5.71 15.5 5.31C15.08 4.91 14.5 4.7 13.91 4.69H3.35C2.76 4.7 2.18 4.91 1.76 5.31C1.34 5.71 1.13 6.29 1.2 6.87Z"
                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M12.3 2.67C12.06 3.08 12.2 3.6 12.61 3.84C13.03 4.08 13.55 3.93 13.79 3.52L12.3 2.67ZM11.87 0.87L11.94 0.07C11.91 0.06 11.88 0.05 11.87 0.05V0.87ZM4.4 0.87V0.05C4.37 0.05 4.34 0.06 4.31 0.07L4.4 0.87ZM2.66 3.52C2.9 3.93 3.42 4.08 3.83 3.84C4.24 3.6 4.38 3.08 4.14 2.67L2.66 3.52ZM6.4 9.47C6.4 9.04 6.05 8.69 5.61 8.69C5.17 8.69 4.82 9.04 4.82 9.47H6.4ZM11.35 9.47C11.35 9.04 11 8.69 10.56 8.69C10.12 8.69 9.77 9.04 9.77 9.47H11.35ZM13.79 3.52C14.09 2.83 14.08 2.02 13.76 1.34L12.21 2.18C12.31 2.36 12.32 2.58 12.3 2.67L13.79 3.52ZM13.76 1.34C13.44 0.65 12.86 0.16 11.94 0.07L11.79 1.53C11.98 1.54 12.14 1.65 12.21 1.83L13.76 1.34ZM11.87 0.05H4.4V1.54H11.87V0.05ZM4.31 0.07C3.39 0.16 2.8 0.65 2.48 1.34L3.92 2.18C3.99 2.01 4.15 1.9 4.34 1.88L4.31 0.07ZM2.48 1.34C2.16 2.02 2.15 2.83 2.66 3.52L4.14 2.67C4.12 2.58 4.13 2.36 4.22 2.18L2.48 1.34ZM4.82 9.47V9.9H6.4V9.47H4.82ZM4.82 9.9C4.82 11.68 6.2 13.06 7.98 13.06V11.48C6.98 11.48 6.4 10.9 6.4 9.9H4.82ZM7.98 13.06C9.76 13.06 11.15 11.68 11.15 9.9H9.77C9.77 10.9 9.19 11.48 7.98 11.48V13.06ZM11.15 9.9V9.47H9.77V9.9H11.15Z"
                    fill="white" />
            </svg>
        </p>

    </figure>
    <v-card>
        <v-row class="flex items-center justify-between bg-gray-100 p-3">
            <v-col cols="6">
                <h3 class="text-center font-medium text-gray-700 text-[1.2rem]">{{ title }}</h3>
            </v-col>
            <v-col cols="6">
                <h4 class="text-right font-medium text-gray-700 text-[1.2rem]">${{ price }}</h4>
            </v-col>
        </v-row>
    </v-card>
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
        default: 'chair.png',
    },
    title: {
        type: String,
        default: 'កៅអី Tottori'
    },
    price: {
        type: Number,
        default: 99.99,
    }
});
</script>