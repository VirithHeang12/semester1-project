<template>
    <figure class="flex flex-col align-center justify-center rounded-2xl px-8 h-48">
        <slot>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="#F6F6F6" />
                <path
                    d="M16.794 27.0346C17.1984 24.2045 17.4005 22.7894 18.3752 21.9441C19.3499 21.0988 20.7793 21.0988 23.6381 21.0988H24.5556H34.926H35.8434C38.7023 21.0988 40.1317 21.0988 41.1064 21.9441C42.081 22.7894 42.2832 24.2045 42.6875 27.0346L44.1691 37.405C44.6935 41.0766 44.9559 42.9125 43.9221 44.1044C42.8884 45.2963 41.034 45.2963 37.325 45.2963H36.6544H22.8272H22.1567C18.4477 45.2963 16.5932 45.2963 15.5595 44.1044C14.5258 42.9125 14.7881 41.0766 15.3126 37.405L16.794 27.0346Z"
                    stroke="#4F4F4F" stroke-width="2.8" stroke-linejoin="round" />
                <path
                    d="M24.5557 28.0123V17.642C24.5557 15.7328 26.1033 14.1852 28.0125 14.1852H31.4692C33.3784 14.1852 34.926 15.7328 34.926 17.642V28.0123"
                    stroke="#4F4F4F" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </slot>
        <figcaption>
            <p class="text-sm text-center text-gray-600 mt-4">{{ title }}</p>
            <p class="text-sm text-center text-gray-600">{{ description }}</p>
        </figcaption>
    </figure>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
            required: true,
            default: 'The New York Times'
        },
        description: {
            type: String,
            required: true,
            default: 'Featured in'
        }
    });
</script>

<style scoped></style>
