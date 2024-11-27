<template>
    <div class="py-24 bg-primary-50">
        <v-container>
            <div class="flex flex-col lg:flex-row gap-6">
                <div class="flex-1 bg-white p-4 rounded">
                    <div class="hidden lg:flex font-semibold text-gray-700 border-b pb-3">
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
                            <img :src="item.imagePath" alt="Product Image" class="w-16 h-16 rounded object-cover" />
                            <div class="ml-4">
                                <h3 class="text-sm font-medium">{{ item.name }}</h3>
                                <p class="text-sm text-gray-500">{{ item.description }}</p>
                            </div>
                        </div>

                        <!-- Quantity Control -->
                        <div class="flex items-center justify-between lg:w-1/6">
                            <span class="lg:hidden text-sm font-medium">បរិមាណ:</span>
                            <div class="flex items-center space-x-2">
                                <button @click="updateQuantity(index, -1)"
                                    class="px-2 py-1 border rounded text-gray-600">-</button>
                                <span>{{ item.quantity }}</span>
                                <button @click="updateQuantity(index, 1)"
                                    class="px-2 py-1 border rounded text-gray-600">+</button>
                            </div>
                        </div>

                        <!-- Item Price -->
                        <div class="flex items-center justify-between lg:w-1/6">
                            <span class="lg:hidden text-sm font-medium">តម្លៃ:</span>
                            <span class="font-medium">${{ (item.price * item.quantity).toFixed(2) }}</span>
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
                    <h2 class="text-lg font-semibold mb-4">សរុបការបញ្ជាទិញ</h2>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span>តម្លៃសរុប</span>
                            <span>${{ subtotal.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>ថ្លៃដឹក</span>
                            <span>${{ shipping.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>ថ្លៃពន្ធ</span>
                            <span>${{ tax.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between text-green-600">
                            <span>បញ្ចុះតម្លៃ</span>
                            <span>- ${{ discount.toFixed(2) }}</span>
                        </div>
                        <hr class="my-2" />
                        <div class="flex justify-between font-semibold">
                            <span>តម្លៃសរុបរួម</span>
                            <span>${{ total.toFixed(2) }}</span>
                        </div>
                    </div>
                    <button class="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800">
                        ទូទាត់
                    </button>
                    <p class="text-sm text-gray-500 text-center mt-2">
                        ធ្វើការដឹកជញ្ជូននៅថ្ងៃទី 24, June 2025
                    </p>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartItems: [
                {
                    name: "ផើងផ្កា",
                    description: "កំណត់ៈ ពណ៌ត្នោត",
                    price: 20.00,
                    quantity: 1,
                    imagePath: "https://i.pinimg.com/474x/80/e1/e4/80e1e4e666b3f3035531d4c79d584faa.jpg"
                },
                {
                    name: "អំពូល",
                    description: "កំណត់ៈ ពណ៌ផ្កាឈូក",
                    price: 15.00,
                    quantity: 1,
                    imagePath: "https://i.pinimg.com/736x/0d/ae/0a/0dae0a9c97cc66e845e4dd1c49395462.jpg"
                },
            ],
            shipping: 10.00,
            tax: 0,
            discount: 0,
        };
    },
    computed: {
        subtotal() {
            return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        total() {
            return this.subtotal + this.shipping + this.tax - this.discount;
        },
    },
    methods: {
        updateQuantity(index, delta) {
            if (this.cartItems[index].quantity + delta >= 0) {
                this.cartItems[index].quantity += delta;
            }
        },
        removeItem(index) {
            this.cartItems.splice(index, 1);
        },
    },
};
</script>