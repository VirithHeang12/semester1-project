<template>
    <figure class="flex flex-col align-center relative">
        <p data-aos="fade-down" class="absolute -top-[5px] md:top-[2%] text-[0.5rem] min-[400px]:text-[0.6rem] min-[480px]:text-[0.7rem] min-[550px]:text-[0.9rem] min-[680px]:text-[1.1rem] min-[860px]:text-[1.4rem] min-[1000px]:text-[1.6rem] min-[1200px]:text-[2rem] text-gray-700 font-bold">
            Timeless Design</p>
        <img :src="href" class="img-fluid" alt="" />
        <slot name="top-right">
           <router-link :to="{ name: 'details', params: { category: 'living room', id: 1000, slug: 'elegant-door' }, query: { image: '/slide-groups/livingrooms/timeless_design.png', name: 'Elegant Living room', price: 999.99, description: 'កន្លែងទទួលភ្ញៀវដ៏ល្អប្រណីត', category: 'living room' } }">
            <the-detail-link class="absolute bottom-[3%] right-[1%] w-[18px] min-[500px]:w-auto"></the-detail-link>
           </router-link>
        </slot>
    </figure>

</template>

<script setup>
    import { defineProps } from 'vue';
    import TheDetailLink from "@/components/links/TheDetailLink.vue";

    defineProps({
        href: {
            type: String,
            default: 'timeless_design.png',
        },
    });
</script>

<style scoped></style>