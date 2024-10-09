<template>
    <v-card>
        <v-card-title>
            <h1>{{ props.title }}</h1>
        </v-card-title>
        <v-card-text @click="doClick">
            <p>{{ props.description }}</p>
        </v-card-text>
        <main>
            <slot></slot>
        </main>
    </v-card>
</template>

<script setup>

const emit = defineEmits(['ke_joch']);

const props = defineProps({
    text: {
        type: String,
        default: 'Default text',
        required: false,
    },
    description: {
        type: String,
        default: 'Default description',
        required: false,
    },
});

function doClick() {
    emit('ke_joch');
}


</script>

<style scoped></style>