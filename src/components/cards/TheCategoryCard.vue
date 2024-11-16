<template>
    <figure class="relative flex flex-col align-center justify-center mb-5">
        <svg width="300" height="290" viewBox="0 0 300 290" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Define a clipPath that uses the existing path shape -->
            <defs>
                <clipPath id="chair">
                    <path
                        d="M0 20C0 8.95429 8.95431 0 20 0H326.87C337.916 0 346.87 8.95431 346.87 20V214.906C346.87 225.952 337.916 234.906 326.87 234.906H290.91C279.865 234.906 270.91 243.86 270.91 254.906V289.988C270.91 301.034 261.956 309.988 250.91 309.988H20C8.95432 309.988 0 301.034 0 289.988V20Z" />
                </clipPath>
            </defs>

            <!-- Image element with the clipPath applied -->
            <image :href="href" width="300" height="290" clip-path="url(#chair)" preserveAspectRatio="xMidYMid slice" />
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
        <p class="w-16 h-16 absolute bottom-0 right-2 bg-stone-600 rounded-[1.2rem] flex justify-center align-center">
            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.73495 8.76966L2.79527 21.2604C2.8859 22.6634 4.03624 23.7631 5.44192 23.7905H17.4372C18.8424 23.7624 19.9919 22.6628 20.0824 21.2604L21.1428 8.76966C21.2245 8.01116 20.9851 7.25306 20.4826 6.67907C19.98 6.10508 19.2601 5.76757 18.4975 5.74829H4.38021C3.61755 5.76757 2.89776 6.10508 2.39522 6.67907C1.89268 7.25306 1.65326 8.01116 1.73495 8.76966Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M17.2674 3.4272C17.008 3.94021 17.2135 4.56639 17.7265 4.82582C18.2396 5.08524 18.8658 4.87968 19.1252 4.36667L17.2674 3.4272ZM16.6779 1.12122L16.7834 0.0856796C16.7485 0.0821128 16.7132 0.0803223 16.6779 0.0803223V1.12122ZM6.19962 1.12122V0.0803223C6.16438 0.0803223 6.12917 0.0821128 6.09413 0.0856796L6.19962 1.12122ZM3.75242 4.36667C4.01185 4.87968 4.63803 5.08524 5.15103 4.82582C5.66404 4.56639 5.8696 3.94021 5.61018 3.4272L3.75242 4.36667ZM9.01002 13.1036C9.01002 12.5287 8.54398 12.0627 7.96913 12.0627C7.39427 12.0627 6.92825 12.5287 6.92825 13.1036H9.01002ZM15.9493 13.1036C15.9493 12.5287 15.4833 12.0627 14.9084 12.0627C14.3336 12.0627 13.8675 12.5287 13.8675 13.1036H15.9493ZM19.1252 4.36667C19.5651 3.49655 19.5485 2.46554 19.0806 1.61011L17.2542 2.60914C17.393 2.86301 17.398 3.16898 17.2674 3.4272L19.1252 4.36667ZM19.0806 1.61011C18.6126 0.754656 17.7535 0.184509 16.7834 0.0856796L16.5725 2.15676C16.8603 2.18608 17.1153 2.35529 17.2542 2.60914L19.0806 1.61011ZM16.6779 0.0803223H6.19962V2.16211H16.6779V0.0803223ZM6.09413 0.0856796C5.12408 0.184509 4.26493 0.754656 3.797 1.61011L5.62341 2.60914C5.76226 2.35529 6.01724 2.18608 6.30511 2.15676L6.09413 0.0856796ZM3.797 1.61011C3.32907 2.46554 3.3124 3.49655 3.75242 4.36667L5.61018 3.4272C5.4796 3.16898 5.48454 2.86301 5.62341 2.60914L3.797 1.61011ZM6.92825 13.1036V13.7975H9.01002V13.1036H6.92825ZM6.92825 13.7975C6.92825 16.2886 8.94771 18.308 11.4388 18.308V16.2263C10.0974 16.2263 9.01002 15.1389 9.01002 13.7975H6.92825ZM11.4388 18.308C13.9298 18.308 15.9493 16.2886 15.9493 13.7975H13.8675C13.8675 15.1389 12.7801 16.2263 11.4388 16.2263V18.308ZM15.9493 13.7975V13.1036H13.8675V13.7975H15.9493Z"
                    fill="white" />
            </svg>
        </p>
    </figure>
    <v-card>
        <v-row class="flex items-center justify-between bg-gray-100 p-5">
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

<style scoped></style>