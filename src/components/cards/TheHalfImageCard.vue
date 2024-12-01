<template>
    <figure class="grid grid-cols-1 border-1 bg-white pb-2 min-[960px]:grid-cols-10">
        <div class="relative mb-2 min-[960px]:col-span-6">
            <img :src="href" :alt="title" class="w-[250px] p-[25px] mt-[15px] rounded-[40px]">
            <slot name="top-right">
                <the-wish-list-heart :title="title" :href="href" :price="price"
                    class="absolute top-[40px] left-[75px]"></the-wish-list-heart>
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
                <button class="!mt-[50px] px-[4px] py-[7px] bg-primary-800 hover:bg-primary-900 text-white text-[14px]
                        rounded-[12px] min-[960px]:mt-auto min-[960px]:mb-3 ">
                    <router-link class="w-full h-full flex justify-center items-center"
                        :to="{ name: 'details', params: { category: category, id: id, slug: slug }, query: { image: href, name: title, price: price, description: des, category: category } }">
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