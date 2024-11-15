<template>
    <figure class="relative flex align-center justify-center">
        <svg width="367" height="236" viewBox="0 0 367 236" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="lighting">
                    <path
                        d="M366.616 219.787C366.616 228.623 359.453 235.795 350.616 235.795L129.45 235.795C120.613 235.795 113.45 228.632 113.45 219.795V207.613C113.45 198.776 106.282 191.613 97.4452 191.613C68.3748 191.613 45.8592 191.612 16.7888 191.612C7.95221 191.612 0.784119 184.449 0.784119 175.612V16.7438C0.784119 7.90724 7.94757 0.74379 16.7841 0.74379L350.616 0.743851C359.453 0.743851 366.616 7.91612 366.616 16.7527C366.616 93.6144 366.616 142.925 366.616 219.787Z"
                        fill="#D9D9D9" />
                </clipPath>
            </defs>

            <!-- Image element with the clipPath applied and border-radius for rounded corners -->
            <image :href="href" width="363" height="306" clip-path="url(#lighting)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>

        <figcaption class="absolute left-5 bottom-2 flex items-center justify-center">
            <h2 class="text-gray-700 text-xl font-bold">{{ title }}</h2>
        </figcaption>
    </figure>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    width: {
        type: Number,
        default: 1362,
    },
    height: {
        type: Number,
        default: 628,
    },
    href: {
        type: String,
        default: 'lighting.png',
    },
    title: {
        type: String,
        default: 'អំពូលភ្លើង',
    },
});
</script>

<style scoped></style>