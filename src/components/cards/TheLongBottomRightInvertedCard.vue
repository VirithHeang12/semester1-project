<template>
    <figure class="flex align-center max-w-fit max-h-fit justify-center relative">
        <svg width="363" height="306" viewBox="0 0 363 306" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="livingRoom">
                    <path
                        d="M362.798 289.863C362.798 298.7 355.634 305.863 346.798 305.863H177C168.163 305.863 161 298.7 161 289.863V279.89C161 271.053 153.852 263.89 145.016 263.89C106.987 263.89 54.513 263.89 16.4844 263.89C7.64786 263.89 0.500061 256.726 0.500061 247.89V16.1193C0.500061 7.28275 7.66351 0.119293 16.5001 0.119293H346.798C355.634 0.119293 362.798 7.28275 362.798 16.1193V289.863Z" />
                </clipPath>
            </defs>

            <image :href="href" width="363" height="306" clip-path="url(#livingRoom)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>

        <slot name="bottom-left">
            <p
                class="absolute text-[0.9rem] bottom-[3.8rem] left-2 min-[350px]:bottom-8 min-[380px]:bottom-6 min-[410px]:bottom-4 min-[380px]:text-[1.2rem] min-[350px]:left-4 lg:bottom-6 lg:left-1 min-[960px]:bottom-11 min-[960px]:left-0 min-[1100px]:bottom-5 min-[1100px]:left-1 min-[1180px]:bottom-3 xl:bottom-2 xl:left-2 text-gray-700 lg:text-[1.3rem] min-[1180px]:text-[1.5rem] xl:text-[1.5rem] font-bold">
                {{ title }}</p>
        </slot>

        <slot name="top-right">
            <the-detail-link
                class="absolute top-16 right-2 min-[350px]:top-11 min-[380px]:top-8 min-[410px]:top-6 lg:top-8 lg:right-2 min-[1100px]:top-6 min-[960px]:top-12 min-[960px]:right-1 min-[1100px]:right-2 xl:top-2 xl:right-2"></the-detail-link>
        </slot>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: '/slide-groups/livingrooms/livingroom-6.jpg',
        },
        title: {
            type: String,
            default: 'បន្ទប់ទទួលភ្ញៀវ',
        },
    });
</script>

<style scoped></style>