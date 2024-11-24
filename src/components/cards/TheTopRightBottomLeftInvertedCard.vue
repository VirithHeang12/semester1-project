<template>
    <figure class="flex align-center justify-center">
        <svg width="419" height="302" viewBox="0 0 419 302" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">

            <defs>
                <clipPath id="bedroom">
                    <path
                        d="M94 264.448C102.837 264.448 110 271.611 110 280.448V285.782C110 294.619 117.163 301.782 126 301.782L216.569 301.782C254.958 301.782 351.373 301.782 402.082 301.782C410.919 301.782 418.042 294.619 418.042 285.782V16.6775C418.042 7.84097 410.879 0.677521 402.042 0.677521H276.31C267.474 0.677521 260.31 7.84097 260.31 16.6775V38.5803C260.31 47.4168 253.147 54.5803 244.31 54.5803H16.0745C7.2379 54.5803 0.0744629 61.7405 0.0744629 70.577C0.0744629 131.252 0.0744629 195.328 0.0744629 248.456C0.0744629 257.293 7.23791 264.448 16.0745 264.448H94Z" />
                </clipPath>
            </defs>

            <image :href="href" width="419" height="302" clip-path="url(#bedroom)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: 'bedroom.png',
        },
    });
</script>

<style scoped></style>