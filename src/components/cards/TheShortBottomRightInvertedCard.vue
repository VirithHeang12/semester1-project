<template>
    <figure class="flex flex-col align-center justify-center mb-5">
        <svg width="270" height="310" viewBox="0 0 347 310" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <clipPath id="chair">
                    <path
                        d="M0 20C0 8.95429 8.95431 0 20 0H326.87C337.916 0 346.87 8.95431 346.87 20V214.906C346.87 225.952 337.916 234.906 326.87 234.906H290.91C279.865 234.906 270.91 243.86 270.91 254.906V289.988C270.91 301.034 261.956 309.988 250.91 309.988H20C8.95432 309.988 0 301.034 0 289.988V20Z" />
                </clipPath>
            </defs>

            <image :href="href" width="347" height="310" clip-path="url(#chair)" preserveAspectRatio="xMidYMid slice" />
        </svg>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: 'chair.png',
        },
    });
</script>

<style scoped></style>