<template>
    <div class="py-8 px-4">
        <v-container>
            <div class="flex flex-col lg:flex-row gap-6">
                <div class="flex-1 bg-white p-4 rounded">
                    <div class="hidden lg:flex font-semibold text-primary-900 border-b pb-3">
                        <div class="w-1/2">ផលិតផល</div>
                        <div class="w-1/6">បរិមាណ</div>
                        <div class="w-1/6">តម្លៃ</div>
                        <div class="w-1/6 text-right">ផ្សេងៗ</div>
                    </div>

                    <!-- Cart Items Loop -->
                    <div v-for="(item, index) in cartItems" :key="index"
                        class="border-b py-4 flex flex-col gap-4 lg:flex-row lg:items-center">
                        <!-- Product Image and Info -->
                        <div class="flex items-center lg:w-1/2">
                            <img :src="item.url" alt="Product Image" class="w-16 h-16 rounded object-cover" />
                            <div class="ml-4">
                                <h3 class="text-sm font-semibold text-primary-900">{{ item.name }}</h3>
                                <p class="text-sm text-gray-500">{{ item.description }}</p>
                            </div>
                        </div>

                        <!-- Quantity Control -->
                        <div class="flex items-center justify-between lg:w-1/6">
                            <span class="lg:hidden text-sm font-semibold text-primary-900">បរិមាណ:</span>
                            <div class="flex items-center">
                                <!-- Decrement Button -->
                                <button type="button" id="decrement-button" @click="updateQuantity(index, -1)"
                                    class="bg-gray-100 flex items-center justify-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l-md w-8 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M1 1h16" />
                                    </svg>
                                </button>

                                <!-- Quantity Input -->
                                <input type="text" id="quantity-input" :value="item.quantity" readonly
                                    class="bg-gray-50 outline-none border-t border-b border-gray-300 h-8 w-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    aria-describedby="helper-text-explanation" required />
                                <!-- Increment Button -->
                                <button type="button" id="increment-button" @click="updateQuantity(index, 1)"
                                    class="bg-gray-100 flex items-center justify-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r-md w-8 h-8 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Item Price -->
                        <div class="flex items-center justify-between lg:w-1/6">
                            <span class="lg:hidden text-sm font-semibold text-primary-900">តម្លៃ:</span>
                            <span class="font-semibold text-primary-900">${{ (item.price * item.quantity).toFixed(2)
                                }}</span>
                        </div>

                        <!-- Remove Button -->
                        <div class="flex items-center justify-end lg:w-1/6">
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
                    </div>
                </div>

                <!-- Total Cart-->
                <div class="w-full lg:w-1/3 bg-white p-4 rounded">
                    <h2 class="text-lg font-semibold mb-4 text-primary-900">សរុបការបញ្ជាទិញ</h2>
                    <div class="space-y-2">
                        <div class="flex justify-between text-primary-900">
                            <span>តម្លៃសរុប</span>
                            <span>${{ subtotal.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between text-primary-900">
                            <span>ថ្លៃដឹក</span>
                            <span>${{ shipping.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between text-primary-900">
                            <span>ថ្លៃពន្ធ</span>
                            <span>${{ tax.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between text-green-600">
                            <span>បញ្ចុះតម្លៃ</span>
                            <span>- ${{ discount.toFixed(2) }}</span>
                        </div>
                        <hr class="my-2" />
                        <div class="flex justify-between">
                            <span class="font-semibold text-primary-900">តម្លៃសរុបរួម</span>
                            <span class="font-semibold text-primary-900">${{ total.toFixed(2) }}</span>
                        </div>
                    </div>
                    <button
                        class="btn btn-dark w-full mt-4 bg-primary-800 round-[10px] text-primary-50 px-9 py-2 hover:bg-gray-800">
                        បព្ជាទិញ
                    </button>
                    <p class="text-sm text-gray-500 text-center mt-2">
                        ធ្វើការដឹកជញ្ជូននៅថ្ងៃទី 24, June 2025
                    </p>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useCartStore } from '@/stores/cart';

    const cartStore = useCartStore();

    const cartItems = computed(() => cartStore.cart);

    const shipping = ref(0);
    const tax = ref(0);
    const discount = ref(0);

    const subtotal = computed(() => {
        return cartItems.value.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
    });

    const total = computed(() => {
        return subtotal.value + shipping.value + tax.value - discount.value;
    });

    const updateQuantity = (index, delta) => {
        if (cartItems.value[index].quantity + delta >= 0) {
            cartItems.value[index].quantity += delta;
        }
    };

    const removeItem = (index) => {
        cartStore.remove(index);
    };

</script>
