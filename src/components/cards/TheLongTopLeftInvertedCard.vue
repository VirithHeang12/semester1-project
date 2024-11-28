<template>
    <figure class="flex align-center max-w-fit max-h-fit justify-center relative">
        <svg class="relative" width="363" height="236" viewBox="0 0 363 236" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="diningRoom">
                    <path
                        d="M362.356 16.0089C362.356 7.17234 355.192 6.38107e-05 346.356 6.36506e-05L231 6.1561e-05C222.163 6.14009e-05 215 7.1635 215 16.0001V28.1827C215 37.0192 207.88 44.1827 199.043 44.1827C152.383 44.1827 63.1169 44.1827 16.457 44.1827C7.62042 44.1827 0.500031 51.3461 0.500031 60.1827V219.051C0.500031 227.888 7.66348 235.051 16.5 235.051L346.356 235.052C355.192 235.052 362.356 227.879 362.356 219.043C362.356 142.181 362.356 92.8707 362.356 16.0089Z" />
                </clipPath>
            </defs>

            <image :href="href" width="363" height="236" clip-path="url(#diningRoom)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>

        <slot name="top-left">
            <p
                class="absolute text-[1rem] top-9 left-3 min-[350px]:top-8 min-[380px]:top-5 min-[410px]:top-3 min-[380px]:text-[1.2rem] min-[350px]:left-4 lg:top-6 lg:left-1 min-[1100px]:top-5 min-[1100px]:left-1 min-[1180px]:top-3 xl:top-2 xl:left-2 text-gray-700 lg:text-[1.3rem] min-[1180px]:text-[1.5rem] xl:text-[1.5rem] font-bold">
                {{ title }}</p>
        </slot>

        <slot name="top-right">
            <the-detail-link
                class="absolute top-11 right-2 min-[350px]:top-11 min-[380px]:top-6 min-[410px]:top-4 lg:top-8 lg:right-2 min-[1100px]:top-6 min-[1100px]:right-2 xl:top-2 xl:right-2"></the-detail-link>
        </slot>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: 'dining_room.png',
        },

        title: {
            type: String,
            default: 'បន្ទប់ទទួលទានអាហារ',
        },
    });
</script>

<style scoped></style>