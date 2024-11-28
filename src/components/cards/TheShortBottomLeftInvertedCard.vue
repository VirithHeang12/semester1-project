<template>
    <figure class="flex align-center max-w-fit max-h-fit justify-center relative">
        <svg width="367" height="236" viewBox="0 0 367 236" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="lighting">
                    <path
                        d="M366.616 219.787C366.616 228.623 359.453 235.795 350.616 235.795L129.45 235.795C120.613 235.795 113.45 228.632 113.45 219.795V207.613C113.45 198.776 106.282 191.613 97.4452 191.613C68.3748 191.613 45.8592 191.612 16.7888 191.612C7.95221 191.612 0.784119 184.449 0.784119 175.612V16.7438C0.784119 7.90724 7.94757 0.74379 16.7841 0.74379L350.616 0.743851C359.453 0.743851 366.616 7.91612 366.616 16.7527C366.616 93.6144 366.616 142.925 366.616 219.787Z"
                        fill="#D9D9D9" />
                </clipPath>
            </defs>

            <image :href="href" width="363" height="306" clip-path="url(#lighting)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>

        <slot name="bottom-left">
            <p
                class="absolute text-[1.1rem] bottom-10 left-1 min-[350px]:bottom-8 min-[350px]:left-2 lg:bottom-6 lg:left-1 xl:bottom-3 xl:left-3 text-gray-700 lg:text-[1.3rem] xl:text-[1.4rem] font-bold">
                {{ title }}</p>
        </slot>

        <slot name="top-right">
            <the-detail-link
                class="absolute top-12 right-3 min-[350px]:top-10 lg:top-8 lg:right-3 min-[1100px]:top-6 min-[1100px]:right-3 xl:top-3 xl:right-3"></the-detail-link>
        </slot>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: 'lighting.png',
        },
        title: {
            type: String,
            default: 'អំពូលភ្លើង',
        }
    });
</script>

<style scoped></style>