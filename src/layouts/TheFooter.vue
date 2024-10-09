<template>
    <v-footer>
        <slot v-bind:text="text"></slot>
    </v-footer>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('Hello, World!');
</script>