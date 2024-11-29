<template>
    <figure class="flex flex-col align-center justify-center max-w-fit max-h-fit relative">
        <svg width="255" height="310" viewBox="0 0 347 310" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <clipPath id="chair">
                    <path
                        d="M0 20C0 8.95429 8.95431 0 20 0H326.87C337.916 0 346.87 8.95431 346.87 20V214.906C346.87 225.952 337.916 234.906 326.87 234.906H290.91C279.865 234.906 270.91 243.86 270.91 254.906V289.988C270.91 301.034 261.956 309.988 250.91 309.988H20C8.95432 309.988 0 301.034 0 289.988V20Z" />
                </clipPath>
            </defs>

            <image :href="href" width="347" height="310" clip-path="url(#chair)" preserveAspectRatio="xMidYMid slice" />
        </svg>

        <slot name="top-right">
            <heart-svg class="absolute top-10 right-2"></heart-svg>
        </slot>

        <p
            class="w-[2.8rem] h-[2.8rem] absolute bottom-[4.8rem] right-[2px] min-[380px]:right-1 bg-stone-600 rounded-[1rem] flex justify-center align-center">
            <slot name="bottom-right">
                <cart-svg></cart-svg>
            </slot>
        </p>
        <v-card class="absolute w-full bottom-6 flex justify-between px-3" :elevation="0">
            <v-row class="flex items-center justify-between bg-gray-100 p-2 rounded-3xl">
                <v-col cols="6">
                    <h3 class="text-center font-medium text-gray-700 text-[0.9rem]">
                        {{ title }}
                    </h3>
                </v-col>
                <v-col cols="6">
                    <h4 class="text-right font-medium text-gray-700 text-[0.9rem]">
                        ${{ price }}
                    </h4>
                </v-col>
            </v-row>
        </v-card>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    import HeartSvg from '@/assets/svgs/general/heart.svg';
    import CartSvg from '@/assets/svgs/general/cart.svg';

    defineProps({
        href: {
            type: String,
            default: 'chair.png',
        },
        title: {
            type: String,
            default: 'អំពូល Edysse',
        },
        price: {
            type: Number,
            default: 49.99,
        }
    });
</script>

<style scoped></style>