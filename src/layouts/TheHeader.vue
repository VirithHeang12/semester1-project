<template>
    <v-container>
        <v-app-bar :rounded="true" elevation="0" color="grey-lighten-3" absolute class="mt-4 rounded-lg flex justify-between">
            <v-app-bar-title v-if="!isMobile" class="mx-0">
                <v-container fluid class="flex justify-between text-primary-900">
                    <v-toolbar-items>
                        <v-app-bar-nav-icon :ripple="false" @click="clickCallback('home')">
                            <svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.465843 10.3828H0V18.7188H9.16149C10.0155 18.7188 10.3261 20.0078 9.54969 20.4375L7.76398 21.3828C5.35715 22.6719 2.95032 23.3594 0.465843 23.3594H0V31.6953H8.92858C9.78261 31.6953 10.0932 32.9844 9.31678 33.4141L7.45342 34.3594C5.20187 35.5625 2.79504 36.1641 0.465843 36.1641H0V44.5H8.92858L9.93788 43.125C14.2857 37.5391 19.3323 34.6172 24.6118 34.6172H25V26.2812H16.0714C15.2174 26.2812 14.9068 24.9922 15.6832 24.5625L17.5466 23.6172C19.7982 22.4141 22.205 21.8125 24.5342 21.8125H24.9224V13.4766H15.8385C14.9845 13.4766 14.6739 12.1875 15.4503 11.7578L17.236 10.8125C19.6429 9.52343 22.0497 8.83595 24.5342 8.83595H24.9224V0.5H15.9938L14.9845 1.875C10.7919 7.46094 5.66771 10.3828 0.465843 10.3828Z" fill="#505050" />
                            </svg>
                        </v-app-bar-nav-icon>
                    </v-toolbar-items>
                    <v-toolbar-items class="flex justify-center gap-x-4 ml-20">
                        <v-btn class="rounded-lg" variant="text" to="/" :ripple="false">
                            <span class="font-lg tracking-normal text-[1.2rem]">ទំព័រដើម</span>
                        </v-btn>
                        <v-menu open-on-hover>
                            <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" class="rounded-lg hover:bg-white">
                                    <span class="font-lg tracking-tight text-[1.2rem]">ប្រភេទសម្ភារៈ</span>
                                </v-btn>
                            </template>

                            <v-list elevation="0">
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-btn @click="clickCallback(item.to)" elevation="0" class="w-full flex justify-start">
                                        <v-list-item-title class="flex justify-start text-left">
                                            <span class="tracking-tighter">{{ item.title }}</span>
                                        </v-list-item-title>
                                    </v-btn>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-btn class="rounded-lg" variant="text" to="/about">
                            <span class="font-lg tracking-tight text-[1.2rem]">អំពីយើង</span>
                        </v-btn>
                        <v-btn class="rounded-lg" variant="text" to="/contact">
                            <span class="font-lg tracking-tight text-[1.2rem]">ទំនាក់ទំនង</span>
                        </v-btn>
                    </v-toolbar-items>
                    <v-toolbar-items class="extended hidden">
                        <v-btn :ripple="false" :to="{ name: 'cart' }" color="grey-lighten-3">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.01585 7.37281L2.08545 19.9728C2.17687 21.3881 3.33727 22.4974 4.75524 22.525H16.8554C18.2729 22.4967 19.4325 21.3875 19.5238 19.9728L20.5934 7.37281C20.6759 6.60767 20.4344 5.84295 19.9274 5.26394C19.4205 4.68492 18.6943 4.34446 17.925 4.32501H3.68424C2.91492 4.34446 2.18884 4.68492 1.6819 5.26394C1.17495 5.84295 0.933441 6.60767 1.01585 7.37281Z" stroke="#454545" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.6843 3.85116C16.4226 4.36866 16.63 5.00031 17.1474 5.26201C17.665 5.5237 18.2967 5.31635 18.5583 4.79885L16.6843 3.85116ZM16.0897 1.52501L16.1961 0.48041C16.1608 0.476812 16.1253 0.475006 16.0897 0.475006V1.52501ZM5.51971 1.52501V0.475006C5.48416 0.475006 5.44865 0.476812 5.4133 0.48041L5.51971 1.52501ZM3.0511 4.79885C3.31281 5.31635 3.94446 5.5237 4.46195 5.26201C4.97945 5.00031 5.1868 4.36866 4.92512 3.85116L3.0511 4.79885ZM8.35469 9.92501C8.35469 9.34513 7.88457 8.87501 7.30469 8.87501C6.72481 8.87501 6.25471 9.34513 6.25471 9.92501H8.35469ZM15.3547 9.92501C15.3547 9.34513 14.8846 8.87501 14.3047 8.87501C13.7248 8.87501 13.2547 9.34513 13.2547 9.92501H15.3547ZM18.5583 4.79885C19.0021 3.92112 18.9853 2.88109 18.5134 2.01817L16.671 3.02595C16.811 3.28203 16.816 3.59068 16.6843 3.85116L18.5583 4.79885ZM18.5134 2.01817C18.0413 1.15524 17.1747 0.580104 16.1961 0.48041L15.9833 2.5696C16.2737 2.59918 16.5308 2.76987 16.671 3.02595L18.5134 2.01817ZM16.0897 0.475006H5.51971V2.57501H16.0897V0.475006ZM5.4133 0.48041C4.43477 0.580104 3.5681 1.15524 3.09607 2.01817L4.93846 3.02595C5.07853 2.76987 5.33574 2.59918 5.62612 2.5696L5.4133 0.48041ZM3.09607 2.01817C2.62405 2.88109 2.60723 3.92112 3.0511 4.79885L4.92512 3.85116C4.79339 3.59068 4.79837 3.28203 4.93846 3.02595L3.09607 2.01817ZM6.25471 9.92501V10.625H8.35469V9.92501H6.25471ZM6.25471 10.625C6.25471 13.1379 8.29183 15.175 10.8047 15.175V13.075C9.45159 13.075 8.35469 11.9781 8.35469 10.625H6.25471ZM10.8047 15.175C13.3176 15.175 15.3547 13.1379 15.3547 10.625H13.2547C13.2547 11.9781 12.1578 13.075 10.8047 13.075V15.175ZM15.3547 10.625V9.92501H13.2547V10.625H15.3547Z" fill="#454545" />
                            </svg>
                            <template #prepend>
                                <span class="relative">
                                    <span v-if="cartItemCount > 0 && auth.isLoggedIn" class="absolute -top-6 -left-1 bg-red-700 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                        {{ cartItemCount }}
                                    </span>
                                </span>
                            </template>
                        </v-btn>
                        <v-menu open-on-hover transition="slide-x-transition" :offset="[5, 50]">
                            <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" :ripple="false" color="grey-lighten-3">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16.5" cy="16.5" r="16.5" fill="#d1d1d1" fill-opacity="0.62" />
                                        <circle cx="16.5" cy="16.5" r="16.25" stroke="#B0B0B0" stroke-opacity="0.1" stroke-width="0.5" />
                                        <path d="M9.8961 25.4088C9.8961 25.4088 8.48584 25.4088 8.48584 23.9985C8.48584 22.5883 9.8961 18.3575 16.9474 18.3575C23.9987 18.3575 25.4089 22.5883 25.4089 23.9985C25.4089 25.4088 23.9987 25.4088 23.9987 25.4088H9.8961ZM16.9474 16.9473C18.0694 16.9473 19.1456 16.5015 19.939 15.7081C20.7324 14.9147 21.1781 13.8386 21.1781 12.7165C21.1781 11.5944 20.7324 10.5183 19.939 9.72488C19.1456 8.93146 18.0694 8.48572 16.9474 8.48572C15.8253 8.48572 14.7492 8.93146 13.9558 9.72488C13.1623 10.5183 12.7166 11.5944 12.7166 12.7165C12.7166 13.8386 13.1623 14.9147 13.9558 15.7081C14.7492 16.5015 15.8253 16.9473 16.9474 16.9473Z" fill="#454545" />
                                    </svg>
                                </v-btn>
                            </template>

                            <v-list elevation="3" class="rounded-lg flex flex-col py-0" variant="plain">
                                <v-list-item v-if="auth.isLoggedIn" @click="logoutCallback" class="px-7 py-1 hover:bg-gray-100">
                                    <v-list-item-title>ចាកចេញ</v-list-item-title>
                                </v-list-item>
                                <v-list-item v-if="!auth.isLoggedIn" @click="clickCallback('login')" class="px-7 py-1 hover:bg-gray-100">
                                    <v-list-item-title>ចូលគណនី</v-list-item-title>
                                </v-list-item>
                                <v-list-item v-if="auth.isLoggedIn" @click="clickCallback('wishlist')" class="px-7 py-1 hover:bg-gray-100">
                                    <v-list-item-title>ចំណូលចិត្ត</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-toolbar-items>
                </v-container>
            </v-app-bar-title>

            <v-app-bar-nav-icon v-if="isMobile" :ripple="false" @click="clickCallback('home')">
                <svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.465843 10.3828H0V18.7188H9.16149C10.0155 18.7188 10.3261 20.0078 9.54969 20.4375L7.76398 21.3828C5.35715 22.6719 2.95032 23.3594 0.465843 23.3594H0V31.6953H8.92858C9.78261 31.6953 10.0932 32.9844 9.31678 33.4141L7.45342 34.3594C5.20187 35.5625 2.79504 36.1641 0.465843 36.1641H0V44.5H8.92858L9.93788 43.125C14.2857 37.5391 19.3323 34.6172 24.6118 34.6172H25V26.2812H16.0714C15.2174 26.2812 14.9068 24.9922 15.6832 24.5625L17.5466 23.6172C19.7982 22.4141 22.205 21.8125 24.5342 21.8125H24.9224V13.4766H15.8385C14.9845 13.4766 14.6739 12.1875 15.4503 11.7578L17.236 10.8125C19.6429 9.52343 22.0497 8.83595 24.5342 8.83595H24.9224V0.5H15.9938L14.9845 1.875C10.7919 7.46094 5.66771 10.3828 0.465843 10.3828Z" fill="#505050" />
                </svg>
            </v-app-bar-nav-icon>

            <v-divider v-if="isMobile" :opacity="0"></v-divider>

            <v-btn v-if="isMobile" @click="dialog = true" class="rounded-lg" variant="plain" :ripple="false">
                <v-icon :size="36">mdi-menu</v-icon>
            </v-btn>

            <v-dialog v-model="dialog" max-width="290" hide-overlay :fullscreen="true" transition="fade-transition">
                <v-card>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="dialog = false" variant="plain">
                            <v-icon :size="24">mdi-close</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-card-text>
                        <v-list class="grid grid-cols-2">
                            <v-list-item v-for="(item, i) in itemsMobile" :key="i">
                                <v-btn @click="clickCallback(item.to)" elevation="0" class="w-full flex justify-start">
                                    <v-list-item-title class="flex justify-start text-left">
                                        <span class="tracking-tighter">{{ item.title }}</span>
                                    </v-list-item-title>
                                </v-btn>
                            </v-list-item>
                            <v-list-item v-if="auth.isLoggedIn">
                                <v-btn elevation="0" class="w-full flex justify-start">
                                    <v-list-item-title @click="clickCallback('cart')" class="flex justify-start text-left">
                                        <span class="tracking-tighter">កន្ត្រក</span>
                                    </v-list-item-title>
                                </v-btn>
                            </v-list-item>
                            <v-list-item v-if="auth.isLoggedIn">
                                <v-btn elevation="0" class="w-full flex justify-start">
                                    <v-list-item-title @click="clickCallback('wishlist')" class="flex justify-start text-left">
                                        <span class="tracking-tighter">ចំណូលចិត្ត</span>
                                    </v-list-item-title>
                                </v-btn>
                            </v-list-item>
                            <v-list-item v-if="!auth.isLoggedIn">
                                <v-btn elevation="0" class="w-fit flex justify-start" color="green" :append-icon="'mdi-login'">
                                    <v-list-item-title @click="clickCallback('login')" class="flex justify-start text-left">
                                        <span class="tracking-tighter">ចូលគណនី</span>
                                    </v-list-item-title>
                                </v-btn>
                            </v-list-item>
                            <v-list-item v-if="auth.isLoggedIn">
                                <v-btn elevation="0" class="flex justify-start w-fit" color="red" :append-icon="'mdi-logout'">
                                    <v-list-item-title @click="logoutCallback" class="flex justify-start text-left">
                                        <span class="tracking-tighter">ចាកចេញ</span>
                                    </v-list-item-title>
                                </v-btn>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>

            </v-dialog>
        </v-app-bar>
    </v-container>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useDisplay } from 'vuetify/lib/framework.mjs';
    import { useCartStore } from '@/stores/cart';
    import { useAuthStore } from '@/stores/auth';

    const dialog = ref(false);

    const router = useRouter();
    const display = useDisplay();
    const auth = useAuthStore();

    const isMobile = computed(() => display.width.value < 800);

    const cartStore = useCartStore();

    const cartItemCount = computed(() => cartStore.cart.length);


    const items = [
        {
            title: 'បន្ទប់គេង',
            to: "bedroom"
        },
        {
            title: 'បន្ទប់ទទួលភ្ញៀវ',
            to: "livingroom"
        },
        {
            title: 'ការិយាល័យ',
            to: "office"
        },
        {
            title: 'ផ្នែកខាងក្រៅ',
            to: "outdoor"
        },
        {
            title: 'អំពូលភ្លើង',
            to: "lighting"
        },
        {
            title: 'ផ្ទះបាយ',
            to: "kitchen"
        },
    ];

    const itemsMobile = [
        {
            title: 'ទំព័រដើម',
            to: 'home'
        },
        {
            title: 'អំពីយើង',
            to: "about"
        },
        {
            title: 'ទំនាក់ទំនង',
            to: "contact"
        },
        {
            title: 'បន្ទប់គេង',
            to: "bedroom"
        },
        {
            title: 'បន្ទប់ទទួលភ្ញៀវ',
            to: "livingroom"
        },
        {
            title: 'ការិយាល័យ',
            to: "office"
        },
        {
            title: 'ផ្នែកខាងក្រៅ',
            to: "outdoor"
        },
        {
            title: 'អំពូលភ្លើង',
            to: "lighting"
        },
        {
            title: 'ផ្ទះបាយ',
            to: "kitchen"
        },
    ];

    const logoutCallback = async () => {
        await auth.logout();
    }

    const clickCallback = async (name) => {
        await router.push({ name });
        dialog.value = false;
    }

</script>

<style scoped></style>
