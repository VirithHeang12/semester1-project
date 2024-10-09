<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>Contact</h1>
                <p>
                    <the-card>Hi</the-card>
                </p>
            </v-col>
            <v-btn @click="updateModel">

            </v-btn>
        </v-row>
    </v-container>
</template>

<script setup>

const model = defineModel();

model.value = 'Hello';

function updateModel() {

}

</script>
