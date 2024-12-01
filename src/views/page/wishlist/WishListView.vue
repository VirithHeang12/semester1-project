<template>
    <div class="py-8 px-4">
        <v-container>
            <v-breadcrumbs :items="items" class="text-primary-950 p-0 mb-5 font-bold">
                <template v-slot:divider>
                    <v-icon icon="mdi-chevron-right" size="14px"></v-icon>
                </template>
            </v-breadcrumbs>
            <div class="flex flex-col min-[800px]:flex-row gap-6">
                <div class="flex-1 bg-white p-4 rounded">
                    <div class="hidden min-[800px]:flex font-semibold text-primary-900 border-b pb-3">
                        <div class="w-1/6">ផលិតផល</div>
                        <div class="w-1/2 pl-3">ពិពណ៌នា</div>
                        <div class="w-1/6">តម្លៃ</div>
                        <div class="w-1/6 text-right">ផ្សេងៗ</div>
                    </div>

                    <!-- Cart Items Loop -->
                    <div v-for="(item, index) in wishListItems" :key="index"
                        class="border-b py-4 flex flex-col gap-4 min-[800px]:flex-row min-[800px]:items-center">
                        <!-- Product Image and Info -->
                        <div class="flex items-center w-full min-[800px]:w-1/6">
                            <img :src="item.href" alt="Product Image"
                                class="w-48 h-48 min-[800px]:w-16 min-[800px]:h-16 rounded object-cover" />
                        </div>

                        <div class="flex items-center w-full min-[800px]:w-1/2">
                            <h3 class="text-sm font-semibold text-primary-900">{{ item.title }}</h3>
                            <p class="text-sm text-gray-500">{{ item.description }}</p>
                        </div>

                        <!-- Item Price -->
                        <div class="flex items-center justify-between w-full min-[800px]:w-1/6">
                            <span class="min-[800px]:hidden text-sm font-semibold text-primary-900">តម្លៃ:</span>
                            <span class="font-semibold text-primary-900">${{ (item.price).toFixed(2)
                                }}</span>
                        </div>

                        <!-- Remove Button -->
                        <div v-if="!displayStore.isMobile" class="flex items-center justify-end w-1/6">
                            <button @click="removeItem(index)" class="text-red-500 hover:text-red-700">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                                    <path d="M20.5001 6H3.5" stroke="#9D1515" stroke-width="1.5" stroke-linecap="round">
                                    </path>
                                    <path
                                        d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                                        stroke="#9D1515" stroke-width="1.5" stroke-linecap="round"></path>
                                    <path d="M9.5 11L10 16" stroke="#9D1515" stroke-width="1.5" stroke-linecap="round">
                                    </path>
                                    <path d="M14.5 11L14 16" stroke="#9D1515" stroke-width="1.5" stroke-linecap="round">
                                    </path>
                                    <path
                                        d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                                        stroke="#9D1515" stroke-width="1.5"></path>
                                </svg>
                            </button>
                        </div>

                        <!-- Mobile Remove Button -->
                        <div v-else class="flex items-center w-full min-[800px]:w-1/6">
                            <button @click="removeItem(index)" class="text-red-500 hover:text-red-700">
                                លុបចេញ
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useWishListStore } from '@/stores/wishlist';
    import { useDisplayStore } from '@/stores/display';

    const displayStore = useDisplayStore();
    const wishListStore = useWishListStore();

    const wishListItems = computed(() => wishListStore.wishlist);

    const removeItem = (index) => {
        wishListStore.removeByIndex(index);
    };

    const mainElement = document.querySelector('main.v-main.mt-4');
    mainElement.classList.add('bg-primary-50');

    const items = [
        {
            title: 'ចំណូលចិត្ត',
        },
    ];
</script>
