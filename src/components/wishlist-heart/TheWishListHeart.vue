<template>
    <div>
        <svg class="absolute top-3 right-3 cursor-pointer" :class="{
            'hover:brightness-[0.9]': !added,
            'brightness-[0.8] scale-95': added,  // Darkens and shrinks on click for pressed effect
            'outline-none focus:ring-0': true,    // No focus ring or outline
        }" @click="toggleClick" @focus="handleFocus" @blur="handleBlur" width="29" height="29" viewBox="0 0 29 29"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_255_363)">
                <rect x="0.719238" y="0.416016" width="28.1009" height="28.1009" rx="14.0505" :fill="fillBackground"
                    fill-opacity="0.32" />
                <rect id="heart-stroke" x="0.969238" y="0.666016" width="27.6009" height="27.6009" rx="13.8005"
                    :stroke="strokeColor" :stroke-opacity="strokeOpacity" :stroke-width="strokeWidth" />
            </g>
            <path
                d="M11.7458 9.09702C12.1691 9.09702 12.9348 9.29957 14.1764 10.5227L14.7919 11.1286L15.3982 10.5127C16.2603 9.63687 17.1776 9.0927 17.7921 9.0927C18.6209 9.0927 19.2743 9.37602 19.9114 10.0117C20.5117 10.6103 20.8425 11.4067 20.8425 12.2536C20.8429 13.101 20.5125 13.8978 19.9058 14.5033C19.8565 14.5534 17.2471 17.3684 15.0609 19.7277C14.9581 19.8258 14.8402 19.84 14.7776 19.84C14.7159 19.84 14.5997 19.8262 14.4969 19.7307C13.9644 19.1382 10.103 14.8449 9.65425 14.3966C9.05351 13.7972 8.72269 13.0003 8.72269 12.1534C8.72269 11.3065 9.05351 10.5106 9.65468 9.91111C10.239 9.32721 10.9231 9.09702 11.7458 9.09702ZM11.7458 8.23327C10.7128 8.23327 9.80238 8.54206 9.04444 9.29957C7.46419 10.8755 7.46419 13.4309 9.04444 15.0077C9.49575 15.459 13.8741 20.3298 13.8741 20.3298C14.1238 20.5794 14.4511 20.7033 14.7781 20.7033C15.105 20.7033 15.4311 20.5794 15.6811 20.3298C15.6811 20.3298 20.4706 15.1602 20.5216 15.1088C22.101 13.5316 22.101 10.9757 20.5216 9.39977C19.7373 8.61677 18.861 8.22852 17.7926 8.22852C16.7716 8.22852 15.6332 9.04261 14.7828 9.90636C13.9057 9.04261 12.8026 8.23327 11.7463 8.23327H11.7458Z"
                :fill="fillHeart" stroke="#D04E4E" stroke-width="0.352" />
            <defs>
                <filter id="filter0_b_255_363" x="-3.28076" y="-3.58398" width="36.101" height="36.101"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_255_363" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_255_363" result="shape" />
                </filter>
            </defs>
        </svg>
    </div>
</template>

<script setup>
    import { computed, defineProps } from 'vue';
    import { useWishListStore } from '@/stores/wishlist';
    import { useAuthStore } from '@/stores/auth';

    const wishListStore = useWishListStore();
    const authStore = useAuthStore();

    const props = defineProps({
        title: {
            type: String,
            default: 'Wish List',
        },
        href: {
            type: String,
            default: 'chair.png',
        },
        price: {
            type: Number,
            default: 49.99,
        }
    });

    const product = computed(() => ({
        title: props.title, href: props.href, price: props.price
    }));

    const added = computed(() => {
        if (!authStore.isLoggedIn) {
            return false;
        }
        return wishListStore.productInWishlist(product.value)
    });

    const fillHeart = computed(() => {
        return added.value ? 'red' : '#D04E4E';
    });

    const fillBackground = computed(() => {
        return added.value ? '#dd9999' : 'white';
    });

    const strokeWidth = computed(() => {
        return added.value ? '1' : '0.5';
    });

    const strokeColor = computed(() => {
        return added.value ? '#fcfafa' : 'white';
    });

    const strokeOpacity = computed(() => {
        // Change the stroke to red when hovered or added
        return added.value ? '2' : '0.5';
    });

    const toggleClick = () => {
        if (!authStore.isLoggedIn) {
            return;
        }
        if (!added.value) {
            wishListStore.add(product.value);
        } else {
            wishListStore.remove(product.value);
        }
    }

    const handleFocus = (event) => {
        // Apply focus styles (but no ring)
        event.target.classList.add('focus:ring-0');
    }

    const handleBlur = (event) => {
        // Remove any focus styles when focus is lost
        event.target.classList.remove('focus:ring-0');
    }
</script>

<style scoped>
    heart-svg {
        transition: filter 0.3s ease, transform 0.2s ease;
    }

    /* Define hover effect */
    heart-svg:hover {
        filter: brightness(0.9);
        /* Darken when hovered */
    }

    /* Define active or added state */
    heart-svg:active {
        filter: brightness(0.8);
        transform: scale(0.95);
    }
</style>