<template>
    <figure class="flex align-center max-w-fit max-h-fit justify-center relative">
        <svg width="368" height="306" viewBox="0 0 368 306" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="kitchen">
                    <path
                        d="M367.5 16C367.5 7.16342 360.337 0 351.5 0H110.893C102.057 0 94.8932 7.16344 94.8932 16V27.299C94.8932 36.1355 87.7118 43.299 78.8753 43.299C53.8037 43.299 41.8737 43.299 16.8022 43.299C7.96561 43.299 0.78421 50.4624 0.78421 59.299V289.744C0.78421 298.58 7.94766 305.744 16.7842 305.744H351.5C360.337 305.744 367.5 298.58 367.5 289.744V16Z" />
                </clipPath>
            </defs>

            <image :href="href" width="368" height="306" clip-path="url(#kitchen)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>

        <slot name="top-left">
            <p
                class="absolute text-[0.9rem] top-[3.8rem] left-2 min-[350px]:top-10 min-[350px]:left-3 min-[380px]:top-7 min-[410px]:top-4 min-[410px]:left-5 lg:top-8 lg:left-2 min-[960px]:top-10 min-[960px]:left-2 min-[1100px]:top-6 min-[1180px]:top-4 min-[1100px]:left-2 xl:top-3 xl:left-4 text-gray-700 min-[350px]:text-[1.2rem] min-[1180px]:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] font-bold">
                {{ title }}</p>
        </slot>

        <slot name="top-right">
            <the-detail-link
                class="absolute top-[4.4rem] right-2 min-[350px]:top-11 min-[380px]:top-9 min-[410px]:top-6 lg:top-9 lg:right-2 min-[960px]:top-12 min-[960px]:right-1 min-[1100px]:top-7 min-[1100px]:right-2 xl:top-3 xl:right-3"></the-detail-link>
        </slot>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: 'kitchen.png',
        },
        title: {
            type: String,
            default: 'ផ្ទះបាយ',
        },
    });
</script>

<style scoped></style>