<template>
    <figure class="flex align-center justify-center">
        <svg width="363" height="236" viewBox="0 0 363 236" fill="none" xmlns="http://www.w3.org/2000/svg">

            <defs>
                <clipPath id="diningRoom">
                    <path
                        d="M362.356 16.0089C362.356 7.17234 355.192 6.38107e-05 346.356 6.36506e-05L231 6.1561e-05C222.163 6.14009e-05 215 7.1635 215 16.0001V28.1827C215 37.0192 207.88 44.1827 199.043 44.1827C152.383 44.1827 63.1169 44.1827 16.457 44.1827C7.62042 44.1827 0.500031 51.3461 0.500031 60.1827V219.051C0.500031 227.888 7.66348 235.051 16.5 235.051L346.356 235.052C355.192 235.052 362.356 227.879 362.356 219.043C362.356 142.181 362.356 92.8707 362.356 16.0089Z" />
                </clipPath>
            </defs>

            <image :href="href" width="363" height="236" clip-path="url(#diningRoom)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: 'dining_room.png',
        },
    });
</script>

<style scoped></style>