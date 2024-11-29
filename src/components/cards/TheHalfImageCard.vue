<template>
    <figure class="grid grid-cols-1 bg-primary-50 pb-2">
        <div class="relative mb-2">
            <img :src="href" :alt="title" class="w-[240px]">
            <slot name="top-right">
                <heart-svg class="absolute top-2 right-2"></heart-svg>
            </slot>
        </div>

        <div class="flex flex-col mx-2">
            <slot name="title">
                <p class="-mb-1">
                    {{ title }}</p>
            </slot>

            <slot name="subtitle">
                <p class="text-[0.6rem]">
                    ${{ price }}</p>
            </slot>

            <p class="flex flex-col gap-y-[1.5px] mb-2">
                <span class="h-1 bg-primary-100 rounded-lg"></span>
                <span class="h-1 bg-primary-100 rounded-lg"></span>
                <span class="h-1 bg-primary-100 rounded-lg"></span>
                <span class="h-1 bg-primary-100 rounded-lg"></span>
                <span class="h-1 w-1/2 bg-primary-100 rounded-lg"></span>
            </p>

            <slot name="button">
                <button class="bg-primary-800 text-white text-[0.6rem] rounded-lg">
                    {{ action }}
                </button>
            </slot>
        </div>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    import HeartSvg from '@/assets/svgs/general/heart.svg';

    defineProps({
        href: {
            type: String,
            default: 'flower_pot_1.png',
        },
        title: {
            type: String,
            default: 'ផើងផ្កា',
        },
        price: {
            type: Number,
            default: 40.99,
        },
        action: {
            type: String,
            default: 'ចូលកន្រ្តក',
        },
    });
</script>

<style scoped></style>