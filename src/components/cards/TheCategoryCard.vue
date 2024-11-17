<template>
    <figure class="relative flex flex-col align-center justify-center mb-5">
        <svg width="275" height="275" viewBox="0 0 284 289" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Define a clipPath that uses the existing path shape -->
            <defs>
                <clipPath id="lamp">
                    <path
                        d="M0 20C0 8.95429 8.95431 0 20 0H264C275.046 0 284 8.9543 284 20V193.906C284 204.952 275.046 213.906 264 213.906H230C218.954 213.906 210 222.86 210 233.906V268.988C210 280.034 201.046 288.988 190 288.988H20C8.9543 288.988 0 280.034 0 268.988V20Z" />
                </clipPath>
            </defs>

            <!-- Image element with the clipPath applied -->
            <image class="hover:brightness-90 duration-200" :href="href" width="284" height="289" clip-path="url(#lamp)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>

        <svg class="absolute top-3 right-3" width="29" height="29" viewBox="0 0 29 29" fill="none"
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
        <p
            class="w-[56.89px] h-[60.89px] absolute bottom-0 right-0 bg-stone-600 rounded-[1rem] flex justify-center items-center">
            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.90466 8.43925L2.88497 19.9875C2.96876 21.2846 4.0323 22.3013 5.33191 22.3266H16.422C17.7212 22.3007 18.784 21.2841 18.8677 19.9875L19.848 8.43925C19.9235 7.73798 19.7022 7.0371 19.2376 6.50642C18.773 5.97574 18.1074 5.6637 17.4023 5.64587H4.35031C3.6452 5.6637 2.97973 5.97574 2.51511 6.50642C2.05049 7.0371 1.82913 7.73798 1.90466 8.43925Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M16.2648 3.49984C16.0249 3.97414 16.215 4.55307 16.6892 4.79292C17.1636 5.03276 17.7425 4.84272 17.9824 4.36842L16.2648 3.49984ZM15.7198 1.36787L15.8173 0.410471C15.785 0.407173 15.7524 0.405518 15.7198 0.405518V1.36787ZM6.03217 1.36787V0.405518C5.99959 0.405518 5.96704 0.407173 5.93464 0.410471L6.03217 1.36787ZM3.76964 4.36842C4.00949 4.84272 4.58842 5.03276 5.06272 4.79292C5.53701 4.55307 5.72706 3.97414 5.48721 3.49984L3.76964 4.36842ZM8.6305 12.446C8.6305 11.9146 8.19963 11.4837 7.66816 11.4837C7.13668 11.4837 6.70582 11.9146 6.70582 12.446H8.6305ZM15.0462 12.446C15.0462 11.9146 14.6153 11.4837 14.0838 11.4837C13.5523 11.4837 13.1215 11.9146 13.1215 12.446H15.0462ZM17.9824 4.36842C18.3891 3.56396 18.3737 2.61075 17.9412 1.81986L16.2526 2.74351C16.3809 2.97822 16.3855 3.2611 16.2648 3.49984L17.9824 4.36842ZM17.9412 1.81986C17.5085 1.02897 16.7142 0.501843 15.8173 0.410471L15.6223 2.32526C15.8884 2.35238 16.1241 2.50882 16.2526 2.74351L17.9412 1.81986ZM15.7198 0.405518H6.03217V2.33022H15.7198V0.405518ZM5.93464 0.410471C5.0378 0.501843 4.24347 1.02897 3.81085 1.81986L5.49944 2.74351C5.62782 2.50882 5.86356 2.35238 6.12971 2.32526L5.93464 0.410471ZM3.81085 1.81986C3.37823 2.61075 3.36282 3.56396 3.76964 4.36842L5.48721 3.49984C5.36648 3.2611 5.37105 2.97822 5.49944 2.74351L3.81085 1.81986ZM6.70582 12.446V13.0876H8.6305V12.446H6.70582ZM6.70582 13.0876C6.70582 15.3907 8.57289 17.2578 10.876 17.2578V15.3331C9.63584 15.3331 8.6305 14.3278 8.6305 13.0876H6.70582ZM10.876 17.2578C13.1791 17.2578 15.0462 15.3907 15.0462 13.0876H13.1215C13.1215 14.3278 12.1161 15.3331 10.876 15.3331V17.2578ZM15.0462 13.0876V12.446H13.1215V13.0876H15.0462Z"
                    fill="white" />
            </svg>
        </p>
    </figure>
    <v-card elevation="0">
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
        default: 'small_chair_mini.png',
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