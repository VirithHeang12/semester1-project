<template>
    <v-container>
        <v-app-bar :rounded="true" elevation="0" color="grey-lighten-3" absolute
            class="mt-4 rounded-lg flex justify-between">
            <v-app-bar-title v-if="!isMobile" class="mx-0">
                <v-container fluid class="flex justify-between text-primary-900">
                    <v-toolbar-items>
                        <v-app-bar-nav-icon :ripple="false" @click="clickCallback('home')">
                            <svg width="25" height="45" viewBox="0 0 25 45" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.465843 10.3828H0V18.7188H9.16149C10.0155 18.7188 10.3261 20.0078 9.54969 20.4375L7.76398 21.3828C5.35715 22.6719 2.95032 23.3594 0.465843 23.3594H0V31.6953H8.92858C9.78261 31.6953 10.0932 32.9844 9.31678 33.4141L7.45342 34.3594C5.20187 35.5625 2.79504 36.1641 0.465843 36.1641H0V44.5H8.92858L9.93788 43.125C14.2857 37.5391 19.3323 34.6172 24.6118 34.6172H25V26.2812H16.0714C15.2174 26.2812 14.9068 24.9922 15.6832 24.5625L17.5466 23.6172C19.7982 22.4141 22.205 21.8125 24.5342 21.8125H24.9224V13.4766H15.8385C14.9845 13.4766 14.6739 12.1875 15.4503 11.7578L17.236 10.8125C19.6429 9.52343 22.0497 8.83595 24.5342 8.83595H24.9224V0.5H15.9938L14.9845 1.875C10.7919 7.46094 5.66771 10.3828 0.465843 10.3828Z"
                                    fill="#505050" />
                            </svg>
                        </v-app-bar-nav-icon>
                    </v-toolbar-items>
                    <v-toolbar-items class="flex justify-center gap-x-1 ml-20">
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
                                    <v-btn @click="clickCallback(item.to)" elevation="0"
                                        class="w-full flex justify-start">
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
                        <v-btn variant="plain" :ripple="false">
                            <svg width="22" height="24" viewBox="0 0 22 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1.01585 7.37281L2.08545 19.9728C2.17687 21.3881 3.33727 22.4974 4.75524 22.525H16.8554C18.2729 22.4967 19.4325 21.3875 19.5238 19.9728L20.5934 7.37281C20.6759 6.60767 20.4344 5.84295 19.9274 5.26394C19.4205 4.68492 18.6943 4.34446 17.925 4.32501H3.68424C2.91492 4.34446 2.18884 4.68492 1.6819 5.26394C1.17495 5.84295 0.933441 6.60767 1.01585 7.37281Z"
                                    stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M16.6843 3.85116C16.4226 4.36866 16.63 5.00031 17.1474 5.26201C17.665 5.5237 18.2967 5.31635 18.5583 4.79885L16.6843 3.85116ZM16.0897 1.52501L16.1961 0.48041C16.1608 0.476812 16.1253 0.475006 16.0897 0.475006V1.52501ZM5.51971 1.52501V0.475006C5.48416 0.475006 5.44865 0.476812 5.4133 0.48041L5.51971 1.52501ZM3.0511 4.79885C3.31281 5.31635 3.94446 5.5237 4.46195 5.26201C4.97945 5.00031 5.1868 4.36866 4.92512 3.85116L3.0511 4.79885ZM8.35469 9.92501C8.35469 9.34513 7.88457 8.87501 7.30469 8.87501C6.72481 8.87501 6.25471 9.34513 6.25471 9.92501H8.35469ZM15.3547 9.92501C15.3547 9.34513 14.8846 8.87501 14.3047 8.87501C13.7248 8.87501 13.2547 9.34513 13.2547 9.92501H15.3547ZM18.5583 4.79885C19.0021 3.92112 18.9853 2.88109 18.5134 2.01817L16.671 3.02595C16.811 3.28203 16.816 3.59068 16.6843 3.85116L18.5583 4.79885ZM18.5134 2.01817C18.0413 1.15524 17.1747 0.580104 16.1961 0.48041L15.9833 2.5696C16.2737 2.59918 16.5308 2.76987 16.671 3.02595L18.5134 2.01817ZM16.0897 0.475006H5.51971V2.57501H16.0897V0.475006ZM5.4133 0.48041C4.43477 0.580104 3.5681 1.15524 3.09607 2.01817L4.93846 3.02595C5.07853 2.76987 5.33574 2.59918 5.62612 2.5696L5.4133 0.48041ZM3.09607 2.01817C2.62405 2.88109 2.60723 3.92112 3.0511 4.79885L4.92512 3.85116C4.79339 3.59068 4.79837 3.28203 4.93846 3.02595L3.09607 2.01817ZM6.25471 9.92501V10.625H8.35469V9.92501H6.25471ZM6.25471 10.625C6.25471 13.1379 8.29183 15.175 10.8047 15.175V13.075C9.45159 13.075 8.35469 11.9781 8.35469 10.625H6.25471ZM10.8047 15.175C13.3176 15.175 15.3547 13.1379 15.3547 10.625H13.2547C13.2547 11.9781 12.1578 13.075 10.8047 13.075V15.175ZM15.3547 10.625V9.92501H13.2547V10.625H15.3547Z"
                                    fill="#3D3D3D" />
                            </svg>
                        </v-btn>
                        <v-btn @click="toggleDarkMode" :ripple="false" variant="plain">
                            <svg class="hidden dark:block" width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.3655 1.12433C19.0384 0.29189 17.8624 0.29189 17.5353 1.12433L17.1073 2.21354L16.0227 2.6429C15.1933 2.97121 15.1933 4.14713 16.0227 4.47544L17.1073 4.90481L17.5353 5.99401C17.8624 6.82645 19.0384 6.82646 19.3655 5.99402L19.7935 4.90481L20.8781 4.47544C21.7075 4.14714 21.7075 2.97121 20.8781 2.6429L19.7935 2.21354L19.3655 1.12433ZM18.4504 1.52989L18.8651 2.58533C18.9648 2.83891 19.165 3.04027 19.4188 3.14073L20.4759 3.55917L19.4188 3.97762C19.165 4.07808 18.9648 4.27943 18.8651 4.53301L18.4504 5.58846L18.0357 4.53301C17.936 4.27943 17.7358 4.07808 17.482 3.97762L16.4249 3.55917L17.482 3.14073C17.7358 3.04027 17.936 2.83891 18.0357 2.58533L18.4504 1.52989ZM15.4981 6.94681C15.171 6.11437 13.9951 6.11437 13.668 6.94681L13.5134 7.34008L13.1222 7.49497C12.2928 7.82328 12.2928 8.9992 13.1222 9.3275L13.5134 9.4824L13.668 9.8757C13.9951 10.7081 15.171 10.7081 15.4981 9.8757L15.6526 9.4824L16.0439 9.3275C16.8733 8.9992 16.8733 7.82328 16.0439 7.49497L15.6526 7.34008L15.4981 6.94681ZM14.583 7.35237L14.7243 7.71188C14.824 7.96545 15.0242 8.16681 15.278 8.26727L15.6417 8.41124L15.278 8.55521C15.0242 8.65567 14.824 8.85703 14.7243 9.1106L14.583 9.4701L14.4418 9.1106C14.3421 8.85703 14.1419 8.65567 13.8881 8.55521L13.5244 8.41124L13.8881 8.26727C14.1419 8.16681 14.3421 7.96545 14.4418 7.71188L14.583 7.35237Z"
                                    fill="#FFFFFF" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10.0174 1.80157C5.37072 2.29221 1.75 6.22328 1.75 11C1.75 16.1086 5.89137 20.25 11 20.25C15.7767 20.25 19.7078 16.6293 20.1984 11.9826C18.8717 13.6669 16.8126 14.75 14.5 14.75C10.4959 14.75 7.25 11.5041 7.25 7.5C7.25 5.18738 8.33315 3.1283 10.0174 1.80157ZM0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C11.7166 0.25 12.0754 0.82126 12.1368 1.27627C12.196 1.71398 12.0342 2.27065 11.531 2.57467C9.8627 3.5828 8.75 5.41182 8.75 7.5C8.75 10.6756 11.3244 13.25 14.5 13.25C16.5882 13.25 18.4172 12.1373 19.4253 10.469C19.7293 9.9658 20.286 9.804 20.7237 9.8632C21.1787 9.9246 21.75 10.2834 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11Z"
                                    fill="#FFFFFF" />
                            </svg>
                            <svg class="block dark:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                                    stroke="#3D3D3D" stroke-width="1.5" />
                                <path d="M12 0V2.4" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M12 21.6V24" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M2.4 12H0" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M24 12H21.6" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" />
                                <path opacity="0.5" d="M21.3334 2.66719L18.667 5.10509" stroke="#3D3D3D"
                                    stroke-width="1.5" stroke-linecap="round" />
                                <path opacity="0.5" d="M2.66663 2.66719L5.33304 5.10509" stroke="#3D3D3D"
                                    stroke-width="1.5" stroke-linecap="round" />
                                <path opacity="0.5" d="M5.33318 18.6668L2.6665 21.3335" stroke="#3D3D3D"
                                    stroke-width="1.5" stroke-linecap="round" />
                                <path opacity="0.5" d="M21.3334 21.3328L18.667 18.6661" stroke="#3D3D3D"
                                    stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </v-btn>
                        <v-menu open-on-hover transition="slide-x-transition" :offset="[5, 50]">
                            <template v-slot:activator="{ props }">
                                <v-btn variant="plain" v-bind="props" :ripple="false">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16.5" cy="16.5" r="16.5" fill="#D9D9D9" fill-opacity="0.62" />
                                        <circle cx="16.5" cy="16.5" r="16.25" stroke="#B0B0B0" stroke-opacity="0.1"
                                            stroke-width="0.5" />
                                        <path
                                            d="M9.8961 25.4088C9.8961 25.4088 8.48584 25.4088 8.48584 23.9985C8.48584 22.5883 9.8961 18.3575 16.9474 18.3575C23.9987 18.3575 25.4089 22.5883 25.4089 23.9985C25.4089 25.4088 23.9987 25.4088 23.9987 25.4088H9.8961ZM16.9474 16.9473C18.0694 16.9473 19.1456 16.5015 19.939 15.7081C20.7324 14.9147 21.1781 13.8386 21.1781 12.7165C21.1781 11.5944 20.7324 10.5183 19.939 9.72488C19.1456 8.93146 18.0694 8.48572 16.9474 8.48572C15.8253 8.48572 14.7492 8.93146 13.9558 9.72488C13.1623 10.5183 12.7166 11.5944 12.7166 12.7165C12.7166 13.8386 13.1623 14.9147 13.9558 15.7081C14.7492 16.5015 15.8253 16.9473 16.9474 16.9473Z"
                                            fill="#3D3D3D" />
                                    </svg>
                                </v-btn>
                            </template>

                            <v-list elevation="3" class="rounded-lg flex flex-col py-0" variant="plain">
                                <v-list-item v-for="(item, i) in accountItems" :key="i"
                                    class="px-7 py-1 hover:bg-gray-100" @click="clickCallback(item.to)">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-toolbar-items>
                </v-container>
            </v-app-bar-title>

            <v-app-bar-nav-icon v-if="isMobile" :ripple="false" @click="clickCallback('home')">
                <svg width="25" height="45" viewBox="0 0 25 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.465843 10.3828H0V18.7188H9.16149C10.0155 18.7188 10.3261 20.0078 9.54969 20.4375L7.76398 21.3828C5.35715 22.6719 2.95032 23.3594 0.465843 23.3594H0V31.6953H8.92858C9.78261 31.6953 10.0932 32.9844 9.31678 33.4141L7.45342 34.3594C5.20187 35.5625 2.79504 36.1641 0.465843 36.1641H0V44.5H8.92858L9.93788 43.125C14.2857 37.5391 19.3323 34.6172 24.6118 34.6172H25V26.2812H16.0714C15.2174 26.2812 14.9068 24.9922 15.6832 24.5625L17.5466 23.6172C19.7982 22.4141 22.205 21.8125 24.5342 21.8125H24.9224V13.4766H15.8385C14.9845 13.4766 14.6739 12.1875 15.4503 11.7578L17.236 10.8125C19.6429 9.52343 22.0497 8.83595 24.5342 8.83595H24.9224V0.5H15.9938L14.9845 1.875C10.7919 7.46094 5.66771 10.3828 0.465843 10.3828Z"
                        fill="#505050" />
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
                            <v-list-item v-for="(item, i) in items" :key="i">
                                <v-btn @click="clickCallback(item.to)" elevation="0" class="w-full flex justify-start">
                                    <v-list-item-title class="flex justify-start text-left">
                                        <span class="tracking-tighter">{{ item.title }}</span>
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
    import { useThemeStore } from '@/stores/theme';
    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useDisplay } from 'vuetify/lib/framework.mjs';

    const dialog = ref(false);

    const router = useRouter();
    const display = useDisplay();

    const isMobile = computed(() => display.width.value < 800);

    const themeStore = useThemeStore();

    const items = [
        {
            title: 'ទំព័រដើម',
            to: 'home'
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
        {
            title: 'អំពីយើង',
            to: "about"
        },
        {
            title: 'ទំនាក់ទំនង',
            to: "contact"
        },
        {
            title: 'កន្ត្រក',
            to: "login"
        },
        {
            title: 'ចូលគណនី',
            to: "login"
        },
        {
            title: 'ចំណូលចិត្ត',
            to: "wishlist"
        }
    ];

    const accountItems = [
        {
            title: 'ចូលគណនី',
            to: 'login'
        },
        {
            title: 'ចំណូលចិត្ត',
            to: 'register'
        },
    ];

    const toggleDarkMode = () => {
        themeStore.toggleTheme()
    }

    const clickCallback = async (name) => {
        await router.push({ name });
        dialog.value = false;
    }

</script>

<style scoped></style>
