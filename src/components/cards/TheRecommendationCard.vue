<template>
    <div class="w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] bg-slate-900 mx-3 rounded-[.75rem] relative overflow-clip">
        <img :src="src" alt="" class="w-100 h-100 object-cover absolute hover:brightness-90 duration-200">

        <div class="w-[88%] h-[35px] absolute bottom-[15px] left-[15px] flex justify-between gap-2">
            <div class="w-4/5 h-100 bg-white rounded-[0.6rem] grid content-center pl-3 text-sm text-zinc-700">
                {{ title }}
            </div>
            <router-link class="w-[35px] h-[35px] bg-zinc-700 rounded-full grid place-content-center" :to="{ name: 'details', params: { category: cartrecom.category, id: cartrecom.id, slug: cartrecom.slug }, query: { image: cartrecom.href, name: cartrecom.title, price: cartrecom.price, description: cartrecom.description, category: cartrecom.category } }">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.085 12.4217C17.21 12.2966 17.2803 12.1271 17.2803 11.9502C17.2803 11.7734 17.21 11.6039 17.085 11.4788L13.3374 7.68404C13.2123 7.55901 13.0428 7.48877 12.866 7.48877C12.6891 7.48877 12.5196 7.55901 12.3945 7.68404C12.2695 7.80906 12.1993 7.97863 12.1993 8.15544C12.1993 8.33225 12.2695 8.50182 12.3945 8.62685L15.0156 11.2479L7.2091 11.2573C7.12109 11.2569 7.03388 11.274 6.95251 11.3075C6.87113 11.341 6.79719 11.3903 6.73496 11.4525C6.67273 11.5148 6.62344 11.5887 6.58992 11.6701C6.55641 11.7515 6.53934 11.8387 6.5397 11.9267C6.53934 12.0147 6.55641 12.1019 6.58992 12.1833C6.62344 12.2646 6.67273 12.3386 6.73496 12.4008C6.79719 12.463 6.87113 12.5123 6.95251 12.5459C7.03388 12.5794 7.12109 12.5964 7.2091 12.5961L15.025 12.5961L12.3945 15.2265C12.2695 15.3515 12.1993 15.5211 12.1993 15.6979C12.1993 15.8747 12.2695 16.0443 12.3945 16.1693C12.5196 16.2943 12.6891 16.3646 12.866 16.3646C13.0428 16.3646 13.2123 16.2943 13.3374 16.1693L17.085 12.4217Z" fill="#F6F6F6" />
                </svg>
            </router-link>


        </div>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';

defineProps({
    src: {
        type: String,
        default: '/rec_sofa.png',
    },
    title: {
        type: String,
        default: 'Wooden Cushion Sofa'
    }, 
    cartrecom: Object
});
</script>

<style scoped></style>