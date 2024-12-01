<template>
    <figure class="grid grid-cols-1 border-1 bg-white pb-2 min-[960px]:grid-cols-10">
        <div class="relative mb-2 min-[960px]:col-span-6">
            <img :src="href" :alt="title" class="w-[250px] p-[25px] mt-[15px] rounded-[40px]">
            <slot name="top-right">
                <heart-svg class="absolute top-[50px] right-[40px]"></heart-svg>
            </slot>
        </div>

        <div class="flex flex-col mx-2 min-[960px]:col-span-4 mt-[30px] px-[10px]">
            <slot name="title">
                <p class="-mb-1 min-[960px]:mt-2 text-primary-800 font-semibold">
                    {{ title }}</p>
            </slot>
            <slot name="des">
                <p class="text-[15px] mt-[11px] text-primary-800">
                    {{ des }}</p>
            </slot>

            <slot name="subtitle">
                <p class="text-[1rem] mt-[20px] text-red-600">
                    ${{ price }}</p>
            </slot>

            <slot name="button">
                <button class="!mt-[50px] px-[4px] py-[7px] bg-primary-800 hover:bg-primary-900 text-white text-[14px] rounded-[12px] min-[960px]:mt-auto min-[960px]:mb-3 ">
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
            default: '/Outdoor Cateogry/Outdoor (Original)/Plant/plant-1.jpg',
        },
        title: {
            type: String,
            default: 'ផើងផ្កា',
        },
        price: {
            type: Number,
            default: 40.99,
        },
        des:{
            type: String,
            default: 'ផើងផ្កា'
        },
        action: {
            type: String,
            default: 'ចូលកន្រ្តក',
        },
    });
</script>

<style scoped></style>