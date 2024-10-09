<template>
    <v-app-bar class="bg-white" elevation="0" absolute>
        <v-toolbar class="extended bg-white px-6">
            <v-btn icon="mdi-home" class="mx-6">
                <v-icon size="50">mdi-home</v-icon>
            </v-btn>
            <v-toolbar-title>
                <v-menu transition="scale-transition" open-on-hover>
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" v-bind="props">
                            Home
                            <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>

                    <v-list elevation="0">
                        <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn to="/shop">
                    Shop
                </v-btn>
                <v-btn to="/product">
                    About
                </v-btn>
                <v-btn to="/blog">
                    Blog
                </v-btn>
                <v-btn to="/page">
                    Page
                </v-btn>
                <v-btn to="/contact">
                    Contact
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="extended">
                <v-btn to="/">
                    <v-icon icon="mdi-magnify"></v-icon>
                </v-btn>
                <v-btn>
                    <v-icon icon="mdi-account"></v-icon>
                </v-btn>
                <v-btn>
                    <v-icon icon="mdi-cart"></v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-app-bar>
</template>

<script setup>
const items = [
    { title: 'Home' },
    { title: 'Shop' },
    { title: 'About' },
    { title: 'Blog' },
    { title: 'Page' },
    { title: 'Contact' },
]
</script>

<style scoped>
.title {
    width: 20px;
}
</style>