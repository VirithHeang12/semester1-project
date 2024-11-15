<template>
    <figure class="relative flex align-center justify-center">
        <svg viewBox="0 0 1362 628" fill="none" xmlns="http://www.w3.org/2000/svg">
            <image :href=href x="0" y="0" width="1362" height="628" clip-path="url(#clipShape)"
                preserveAspectRatio="xMidYMid slice" />

            <defs>
                <clipPath id="clipShape">
                    <path
                        d="M0 40C0 17.9086 17.9086 0 40 0H1322C1344.09 0 1362 17.9086 1362 40V588C1362 610.091 1344.09 628 1322 628H526.534C512.816 628 500.056 620.971 492.725 609.376L467.275 569.124C459.944 557.529 447.184 550.5 433.466 550.5H40C17.9086 550.5 0 532.591 0 510.5V40Z" />
                </clipPath>
            </defs>
        </svg>

        <figcaption class="absolute left-5 bottom-0 flex items-center justify-center">
            <h2 class="text-gray-700
                text-lg font-bold">{{ title }}</h2>
        </figcaption>
    </figure>
</template>

<script setup>

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
        default: 'https://www.interior-essentials.com/wp-content/uploads/2021/07/InteriorEssentialsRoleOfFurnitureInteriorDesign.jpg',
    },
    title: {
        type: String,
    },
});

</script>

<style scoped></style>