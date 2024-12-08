<template>
    <figure class="grid grid-cols-1 border-1 bg-white gap-3 align-center p-[20px] min-[960px]:grid-cols-10">
        <div class="relative min-[960px]:col-span-6">
            <img :src="href" :alt="title" class="w-[200px] rounded-[5%]">
            <slot name="top-right">
                <the-wish-list-heart :title="title" :href="href" :price="price" class="absolute top-0 right-0"></the-wish-list-heart>
            </slot>
        </div>

        <div class="flex flex-col min-[960px]:col-span-4">
            <slot name="title">
                <p class="-mb-1 min-[960px]:mt-2 text-primary-800 fs-5 font-semibold">
                    {{ title }}</p>
            </slot>
            <slot name="des">
                <p class="text-[15px] mt-[11px] text-primary-700">
                    {{ des }}</p>
            </slot>

            <slot name="subtitle">
                <p class="text-[1rem] mt-[20px] text-red-600 font-semibold">
                    ${{ price }}</p>
            </slot>

            <slot name="button">
                <button class="!mt-[50px] px-[4px] py-[7px] bg-primary-800 hover:bg-primary-900 text-white text-[14px]
                        rounded-[10px] min-[960px]:mt-auto min-[960px]:mb-3 ">
                    <router-link class="w-full h-full flex justify-center items-center" :to="{ name: 'details', params: { category: category, id: id, slug: slug }, query: { image: href, name: title, price: price, description: des, category: category } }">
                        {{ action }}
                    </router-link>
                </button>
            </slot>
        </div>
    </figure>
</template>
<script setup>
    import { defineProps } from 'vue';

    import TheWishListHeart from '@/components/wishlist-heart/TheWishListHeart.vue';

    defineProps({
        id: {
            type: Number,
            default: 500,
        },
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
        des: {
            type: String,
            default: 'ផើងផ្កា'
        },
        slug: {
            type: String,
            default: 'ផើងផ្កា',
        },
        category: {
            type: String,
            default: 'ផើងផ្កា',
        },
        action: {
            type: String,
            default: 'ចូលកន្រ្តក',
        },
    });
</script>

<style scoped></style>