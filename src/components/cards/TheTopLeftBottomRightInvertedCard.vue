<template>
    <figure class="flex align-center max-w-fit max-h-fit justify-center relative">
        <svg width="363" height="292" viewBox="0 0 419 292" fill="none" xmlns="http://www.w3.org/2000/svg">

            <defs>
                <clipPath id="office">
                    <path
                        d="M418.275 16.0032C418.275 7.16664 411.111 6.21844e-05 402.275 6.36021e-05L146.5 0.000104637C137.663 0.000106055 130.5 7.16355 130.5 16.0001V28.6245C130.5 37.4611 123.337 44.6245 114.5 44.6245C81.9604 44.6245 48.8466 44.6245 16.3069 44.6245C7.4704 44.6245 0.307068 51.788 0.307068 60.6245V275.163C0.307068 284 7.47052 291.163 16.3071 291.163L218.917 291.164C227.753 291.164 234.917 284 234.917 275.164V251.493C234.917 242.657 242.08 235.493 250.917 235.493L402.275 235.493C411.111 235.493 418.275 228.323 418.275 219.487C418.275 141.817 418.275 81.0294 418.275 16.0032Z" />
                </clipPath>
            </defs>

            <image :href="href" width="419" height="292" clip-path="url(#office)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>


        <slot name="top-left">
            <p
                class="absolute text-[0.85rem] top-[4.2rem] left-1 min-[350px]:top-12 min-[350px]:left-2 min-[380px]:top-10 min-[410px]:top-8 min-[380px]:left-2 lg:top-11 lg:left-1 min-[960px]:top-14 min-[960px]:left-0 min-[1100px]:top-9 min-[1100px]:left-1 xl:top-7 xl:left-1 text-gray-700 min-[350px]:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.4rem] font-bold">
                {{ title }}</p>
        </slot>

        <slot name="top-right">
            <the-detail-link
                class="absolute top-20 right-2 min-[350px]:top-14 min-[380px]:top-12 min-[410px]:top-10 lg:top-12 lg:right-2 min-[960px]:top-16 min-[960px]:right-2 min-[1100px]:top-10 min-[1100px]:right-2 xl:top-7 xl:right-2"></the-detail-link>
        </slot>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: 'office.png',
        },
        title: {
            type: String,
            default: 'ការិយាល័យ',
        },
    });
</script>

<style scoped></style>