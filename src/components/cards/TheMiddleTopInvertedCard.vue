<template>
    <figure class="flex flex-col align-center relative">
        <p data-aos="fade-down" class="absolute -top-[5px] md:top-[2%] text-[0.5rem] min-[400px]:text-[0.6rem] min-[480px]:text-[0.7rem] min-[550px]:text-[0.9rem] min-[680px]:text-[1.1rem] min-[860px]:text-[1.4rem] min-[1000px]:text-[1.6rem] min-[1200px]:text-[2rem] text-gray-700 font-bold">
            Timeless Design</p>
        <img :src="href" class="img-fluid" alt="" />
        <slot name="top-right">
            <the-detail-link class="absolute bottom-[3%] right-[1%] w-[18px] min-[500px]:w-auto"></the-detail-link>
        </slot>
    </figure>

</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: 'timeless_design.png',
        },
    });
</script>

<style scoped></style>