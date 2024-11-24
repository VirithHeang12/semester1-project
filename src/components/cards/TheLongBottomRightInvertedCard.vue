<template>
    <figure class="flex align-center justify-center">
        <svg width="363" height="306" viewBox="0 0 363 306" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="livingRoom">
                    <path
                        d="M362.798 289.863C362.798 298.7 355.634 305.863 346.798 305.863H177C168.163 305.863 161 298.7 161 289.863V279.89C161 271.053 153.852 263.89 145.016 263.89C106.987 263.89 54.513 263.89 16.4844 263.89C7.64786 263.89 0.500061 256.726 0.500061 247.89V16.1193C0.500061 7.28275 7.66351 0.119293 16.5001 0.119293H346.798C355.634 0.119293 362.798 7.28275 362.798 16.1193V289.863Z" />
                </clipPath>
            </defs>

            <image :href="href" width="363" height="306" clip-path="url(#livingRoom)"
                preserveAspectRatio="xMidYMid slice" />
        </svg>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        href: {
            type: String,
            default: 'living_room.png',
        },
    });
</script>

<style scoped></style>