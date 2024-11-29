<template>
    <figure class="grid grid-cols-1 min-w-[280px]">
        <div class="w-fit relative">
            <img :src="href" :alt="title">
            <slot name="top-right">
                <the-detail-link
                    class="absolute top-11 right-2 min-[350px]:top-11 min-[380px]:top-6 min-[410px]:top-4 lg:top-8 lg:right-2 min-[1100px]:top-6 min-[1100px]:right-2 xl:top-2 xl:right-2"></the-detail-link>
            </slot>
        </div>

        <div class="flex flex-col">
            <slot name="title">
                <p class="">
                    {{ title }}</p>
            </slot>

            <slot name="subtitle">
                <p class="">
                    {{ price }}</p>
            </slot>

            <slot name="button">
                <the-detail-link class=""></the-detail-link>
            </slot>
        </div>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

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
    });
</script>

<style scoped></style>