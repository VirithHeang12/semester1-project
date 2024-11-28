<template>
    <figure class="flex align-center max-w-fit max-h-fit justify-center relative">
        <svg width="363" height="302" viewBox="0 0 419 302" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">

            <defs>
                <clipPath id="bedroom">
                    <path
                        d="M94 264.448C102.837 264.448 110 271.611 110 280.448V285.782C110 294.619 117.163 301.782 126 301.782L216.569 301.782C254.958 301.782 351.373 301.782 402.082 301.782C410.919 301.782 418.042 294.619 418.042 285.782V16.6775C418.042 7.84097 410.879 0.677521 402.042 0.677521H276.31C267.474 0.677521 260.31 7.84097 260.31 16.6775V38.5803C260.31 47.4168 253.147 54.5803 244.31 54.5803H16.0745C7.2379 54.5803 0.0744629 61.7405 0.0744629 70.577C0.0744629 131.252 0.0744629 195.328 0.0744629 248.456C0.0744629 257.293 7.23791 264.448 16.0745 264.448H94Z" />
                </clipPath>
            </defs>

            <image :href="href" width="419" height="302" clip-path="url(#bedroom)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>

        <slot name="bottom-left">
            <p
                class="absolute text-[1rem] bottom-14 left-1 min-[350px]:bottom-12 min-[350px]:left-2 min-[380px]:bottom-10 min-[410px]:bottom-7 lg:bottom-11 lg:left-1 min-[1100px]:bottom-9 min-[1100px]:left-1 xl:bottom-6 xl:left-2 text-gray-700 min-[380px]:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] font-bold">
                {{ title }}</p>
        </slot>

        <slot name="top-right">
            <the-detail-link
                class="absolute top-16 right-2 min-[350px]:top-14 min-[380px]:top-12 min-[410px]:top-10 lg:top-12 lg:right-2 min-[1100px]:top-11 min-[1100px]:right-2 xl:top-7 xl:right-2"></the-detail-link>
        </slot>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: 'bedroom.png',
        },
        title: {
            type: String,
            default: 'បន្ទប់គេង',
        },
    });
</script>

<style scoped></style>