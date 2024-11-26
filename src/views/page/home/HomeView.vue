<template>
    <v-container class="mt-5 px-0 py-0" :max-width="1200">
        <div class="bg-white">
            <v-container>
                <v-row class="mb-16" v-motion-slide-visible-top>
                    <v-col cols="12">
                        <the-inverted-card></the-inverted-card>
                    </v-col>
                </v-row>
                <v-row style="margin-bottom: 8rem;">
                    <v-container>
                        <h2 v-motion-slide-visible-top
                            class="text-center font-bold text-gray-700 text-[2.5rem] mb-16 mt-24">
                            ប្រភេទគ្រឿងសង្ហារឹម</h2>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-card elevation="0" class="mb-5" v-motion-slide-visible-left>
                                    <router-link to="#" class="relative">
                                        <p class="absolute top-1 left-2 text-gray-700 text-[1.5rem] font-bold">
                                            បន្ទប់ទទួលទានអាហារ</p>
                                        <the-long-top-left-inverted-card></the-long-top-left-inverted-card>
                                        <the-detail-link class="absolute top-2 right-2"></the-detail-link>
                                    </router-link>
                                </v-card>
                                <v-card elevation="0" v-motion-slide-visible-left>
                                    <router-link to="#" class="relative">
                                        <p class="absolute bottom-2 left-2 text-gray-700 text-[1.5rem] font-bold">
                                            បន្ទប់ទទួលភ្ញៀវ</p>
                                        <the-long-bottom-right-inverted-card></the-long-bottom-right-inverted-card>
                                        <the-detail-link class="absolute top-2 right-2"></the-detail-link>
                                    </router-link>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-card elevation="0" class="-mb-16 bg-transparent" v-motion-slide-visible-top>
                                    <router-link to="#" class="relative">
                                        <p class="absolute top-5 left-2 text-gray-700 text-[1.4rem] font-bold">
                                            ការិយាល័យ</p>
                                        <the-top-left-bottom-right-inverted-card></the-top-left-bottom-right-inverted-card>
                                        <the-detail-link class="absolute top-6 right-2"></the-detail-link>
                                    </router-link>
                                </v-card>
                                <v-card elevation="0" class="bg-transparent" v-motion-slide-visible-top>
                                    <router-link to="#" class="relative">
                                        <p class="absolute bottom-5 left-2 text-gray-700 text-[1.4rem] font-bold">
                                            បន្ទប់គេង</p>
                                        <the-top-right-bottom-left-inverted-card></the-top-right-bottom-left-inverted-card>
                                        <the-detail-link class="absolute top-6 right-2"></the-detail-link>
                                    </router-link>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-card elevation="0" class="mb-5" v-motion-slide-visible-right>
                                    <router-link to="#" class="relative">
                                        <p class="absolute top-2 left-2 text-gray-700 text-[1.4rem] font-bold">
                                            ផ្ទះបាយ</p>
                                        <the-short-top-left-inverted-card></the-short-top-left-inverted-card>
                                        <the-detail-link class="absolute bottom-3 left-3"></the-detail-link>
                                    </router-link>
                                </v-card>
                                <v-card elevation="0" v-motion-slide-visible-right>
                                    <router-link to="#" class="relative">
                                        <p class="absolute bottom-2 left-4 text-gray-700 text-[1.4rem] font-bold">
                                            អំពូលភ្លើង</p>
                                        <the-short-bottom-left-inverted-card></the-short-bottom-left-inverted-card>
                                        <the-detail-link class="absolute top-3 right-3"></the-detail-link>
                                    </router-link>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>
                <v-row class="mb-16">
                    <v-col cols="12" class="flex justify-between" v-motion-slide-visible-top>
                        <the-featured-in-card class="bg-gray-100" v-for="featuredInItem in featuredInItems"
                            :key="featuredInItem.title" :title="featuredInItem.title"
                            :description="featuredInItem.description">
                            <template v-slot:default>
                                <v-btn :size="75" :ripple="false" :elevation="0" :rounded="true">
                                    <v-icon size="50">{{ featuredInItem.icon }}</v-icon>
                                </v-btn>
                            </template>
                        </the-featured-in-card>
                    </v-col>
                </v-row>
                <v-row class="mb-16 mt-40">
                    <v-col cols="12">
                        <h2 v-motion-slide-visible-top class="font-bold text-gray-700 text-[2.5rem] mb-20">
                            ផលិតផលប្រចាំខែ</h2>
                        <the-slide-group :tab-items="tabItems"></the-slide-group>
                    </v-col>
                </v-row>

                <v-row style="margin-bottom: 8rem;">
                    <v-container>
                        <h2 v-motion-slide-visible-top class="text-center font-bold text-gray-700 text-[2.5rem] mb-10">
                            សម្ភារៈពេញនិយម</h2>
                        <v-row>
                            <v-col cols="12" md="4" v-motion-slide-visible-left>
                                <router-link to="#" class="relative">
                                    <the-short-bottom-right-inverted-card href="chair.png">
                                    </the-short-bottom-right-inverted-card>
                                    <heart-svg class="absolute top-3 right-5"></heart-svg>
                                    <p
                                        class="w-16 h-16 absolute bottom-[3.8rem] right-3 bg-stone-600 rounded-[1.2rem] flex justify-center align-center">
                                        <cart-svg></cart-svg>
                                    </p>
                                    <v-card class="flex justify-between px-5" :elevation="0">
                                        <v-row class="flex items-center justify-between bg-gray-100 p-2 rounded-3xl">
                                            <v-col cols="6">
                                                <h3 class="text-center font-medium text-gray-700 text-[1.2rem]">កៅអី
                                                    Tottori</h3>
                                            </v-col>
                                            <v-col cols="6">
                                                <h4 class="text-right font-medium text-gray-700 text-[1.2rem]">$79.99
                                                </h4>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </router-link>
                            </v-col>
                            <v-col cols="12" md="4" v-motion-slide-visible-top>
                                <router-link to="#" class="relative">
                                    <the-short-bottom-right-inverted-card href="lamp.png">
                                    </the-short-bottom-right-inverted-card>
                                    <heart-svg class="absolute top-3 right-5"></heart-svg>
                                    <p
                                        class="w-16 h-16 absolute bottom-[3.8rem] right-3 bg-stone-600 rounded-[1.2rem] flex justify-center align-center">
                                        <cart-svg></cart-svg>
                                    </p>
                                    <v-card class="flex justify-between px-5" :elevation="0">
                                        <v-row class="flex items-center justify-between bg-gray-100 p-2 rounded-3xl">
                                            <v-col cols="6">
                                                <h3 class="text-center font-medium text-gray-700 text-[1.2rem]">អំពូល
                                                    Edysse</h3>
                                            </v-col>
                                            <v-col cols="6">
                                                <h4 class="text-right font-medium text-gray-700 text-[1.2rem]">$49.99
                                                </h4>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </router-link>
                            </v-col>
                            <v-col cols="12" md="4" v-motion-slide-visible-right>
                                <router-link to="#" class="relative">
                                    <the-short-bottom-right-inverted-card href="small_chair.png">
                                    </the-short-bottom-right-inverted-card>
                                    <heart-svg class="absolute top-3 right-5"></heart-svg>
                                    <p
                                        class="w-16 h-16 absolute bottom-[3.8rem] right-3 bg-stone-600 rounded-[1.2rem] flex justify-center align-center">
                                        <cart-svg></cart-svg>
                                    </p>
                                    <v-card class="flex justify-between px-5" :elevation="0">
                                        <v-row class="flex items-center justify-between bg-gray-100 p-2 rounded-3xl">
                                            <v-col cols="6">
                                                <h3 class="text-center font-medium text-gray-700 text-[1.2rem]">
                                                    ឈុតតុកៅអីក្មេង</h3>
                                            </v-col>
                                            <v-col cols="6">
                                                <h4 class="text-right font-medium text-gray-700 text-[1.2rem]">$89.99
                                                </h4>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </router-link>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>
                <v-row class="mb-12">
                    <v-container>
                        <v-row class="relative">
                            <p v-motion-slide-visible-top
                                class="absolute top-2 left-[27.5rem] text-gray-700 text-[2.5rem] font-bold">
                                Timeless Design</p>
                            <the-middle-top-inverted-card v-motion-slide-visible-bottom></the-middle-top-inverted-card>
                        </v-row>
                    </v-container>
                </v-row>
                <v-row style="margin-bottom: 6rem;">
                    <v-container>
                        <v-row class="flex">
                            <v-col cols="12" md="6" class="relative">
                                <v-expansion-panels class="absolute top-0">
                                    <v-expansion-panel v-for="(expansionItem, i) in expansionItems" :key="i"
                                        class="text-[2rem]">
                                        <v-expansion-panel-title class="px-6 py-6" :style="{ fontSize: '1.2rem' }">
                                            {{ expansionItem.title }}
                                        </v-expansion-panel-title>
                                        <v-expansion-panel-text class="text-[1rem]">
                                            {{ expansionItem.text }}
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-col>
                            <v-col cols="12" md="6" class="align-self-start">
                                <v-img class="w-full h-full" src="desk.png" alt="Desk" />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>
            </v-container>
        </div>
    </v-container>
</template>

<script setup>
    import TheInvertedCard from '@/components/cards/TheInvertedCard.vue';
    import TheTopLeftBottomRightInvertedCard from '@/components/cards/TheTopLeftBottomRightInvertedCard.vue';
    import TheLongTopLeftInvertedCard from '@/components/cards/TheLongTopLeftInvertedCard.vue';
    import TheShortTopLeftInvertedCard from '@/components/cards/TheShortTopLeftInvertedCard.vue';
    import TheLongBottomRightInvertedCard from '@/components/cards/TheLongBottomRightInvertedCard.vue';
    import TheTopRightBottomLeftInvertedCard from '@/components/cards/TheTopRightBottomLeftInvertedCard.vue';
    import TheShortBottomLeftInvertedCard from '@/components/cards/TheShortBottomLeftInvertedCard.vue';
    import TheShortBottomRightInvertedCard from '@/components/cards/TheShortBottomRightInvertedCard.vue';
    import TheMiddleTopInvertedCard from '@/components/cards/TheMiddleTopInvertedCard.vue';
    import TheSlideGroup from '@/components/slide-groups/TheSlideGroup.vue';
    import TheFeaturedInCard from '@/components/cards/TheFeaturedInCard.vue';


    import HeartSvg from '@/assets/svgs/general/heart.svg';
    import CartSvg from '@/assets/svgs/general/cart.svg';

    const expansionItems = [
        {
            title: 'តើគ្រឿងសង្ហារឹមរបស់អ្នកនាំចូលពីប្រទេសណាខ្លះ?',
            text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
        },
        {
            title: 'តើខ្ញុំអាចទៅមើលផ្ទាល់នៅហាងបានឬទេ?',
            text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
        },
        {
            title: 'តើខ្ញុំអាចទៅមើលផ្ទាល់នៅហាងបានឬទេ?',
            text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
        },
        {
            title: 'តើខ្ញុំអាចទៅមើលផ្ទាល់នៅហាងបានឬទេ?',
            text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
        },
        {
            title: 'តើខ្ញុំអាចទៅមើលផ្ទាល់នៅហាងបានឬទេ?',
            text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
        },
        {
            title: 'តើខ្ញុំអាចទៅមើលផ្ទាល់នៅហាងបានឬទេ?',
            text: 'បាទ បងអាចអញ្ជើញមកហាងពួកយើងផ្ទាល់បាន ទីតាំងរបស់ពួកយើងគឺស្ថិតនៅលើផ្លូវ ២០០៤ រាជធានីភ្នំពេញ'
        },
    ];

    const tabItems = [
        {
            title: 'បន្ទប់ទទួលភ្ញៀវ',
            value: 'livingroom',
            icon: 'mdi-sofa',
            images: [
                {
                    url: 'slide-groups/livingrooms/livingroom-1.jpg',
                    price: 79.99
                },
                {
                    url: 'slide-groups/livingrooms/livingroom-2.jpg',
                    price: 89.99
                },
                {
                    url: 'slide-groups/livingrooms/livingroom-3.jpg',
                    price: 99.99
                },
                {
                    url: 'slide-groups/livingrooms/livingroom-4.jpg',
                    price: 109.99
                },
                {
                    url: 'slide-groups/livingrooms/livingroom-5.jpg',
                    price: 119.99
                },
                {
                    url: 'slide-groups/livingrooms/livingroom-6.jpg',
                    price: 129.99
                },
                {
                    url: 'slide-groups/livingrooms/livingroom-7.jpg',
                    price: 139.99
                },
            ]
        },
        {
            title: 'បន្ទប់ទទួលទានអាហារ',
            value: 'diningroom',
            icon: 'mdi-silverware-fork-knife',
            images: [
                {
                    url: 'slide-groups/diningrooms/diningroom-1.jpg',
                    price: 79.99
                },
                {
                    url: 'slide-groups/diningrooms/diningroom-2.jpg',
                    price: 89.99
                },
                {
                    url: 'slide-groups/diningrooms/diningroom-3.jpg',
                    price: 99.99
                },
                {
                    url: 'slide-groups/diningrooms/diningroom-4.jpg',
                    price: 109.99
                },
                {
                    url: 'slide-groups/diningrooms/diningroom-5.jpg',
                    price: 119.99
                },
                {
                    url: 'slide-groups/diningrooms/diningroom-6.jpg',
                    price: 129.99
                },
                {
                    url: 'slide-groups/diningrooms/diningroom-7.jpg',
                    price: 139.99
                },
            ]
        },
        {
            title: 'បន្ទប់ការិយាល័យ',
            value: 'office',
            icon: 'mdi-chair-rolling',
            images: [
                {
                    url: 'slide-groups/offices/office-1.jpg',
                    price: 79.99
                },
                {
                    url: 'slide-groups/offices/office-2.jpg',
                    price: 89.99
                },
                {
                    url: 'slide-groups/offices/office-3.jpg',
                    price: 99.99
                },
                {
                    url: 'slide-groups/offices/office-4.jpg',
                    price: 109.99
                },
                {
                    url: 'slide-groups/offices/office-5.jpg',
                    price: 119.99
                },
                {
                    url: 'slide-groups/offices/office-6.jpg',
                    price: 129.99
                },
                {
                    url: 'slide-groups/offices/office-7.jpg',
                    price: 139.99
                }
            ]
        },
        {
            title: 'គ្រឿងតុបតែងខាងក្រៅ',
            value: 'outdoor',
            icon: 'mdi-bench',
            images: [
                {
                    url: 'slide-groups/outdoors/outdoor-1.jpg',
                    price: 79.99
                },
                {
                    url: 'slide-groups/outdoors/outdoor-2.jpg',
                    price: 89.99
                },
                {
                    url: 'slide-groups/outdoors/outdoor-3.jpg',
                    price: 99.99
                },
                {
                    url: 'slide-groups/outdoors/outdoor-4.jpg',
                    price: 109.99
                },
                {
                    url: 'slide-groups/outdoors/outdoor-5.jpg',
                    price: 119.99
                },
                {
                    url: 'slide-groups/outdoors/outdoor-6.jpg',
                    price: 129.99
                },
                {
                    url: 'slide-groups/outdoors/outdoor-7.jpg',
                    price: 139.99
                },
                {
                    url: 'slide-groups/outdoors/outdoor-8.jpg',
                    price: 149.99
                }
            ]
        },
        {
            title: 'អំពូលភ្លើង',
            value: 'lamp',
            icon: 'mdi-lamp',
            images: [
                {
                    url: 'slide-groups/lightings/lighting-1.jpg',
                    price: 79.99
                },
                {
                    url: 'slide-groups/lightings/lighting-2.jpg',
                    price: 89.99
                },
                {
                    url: 'slide-groups/lightings/lighting-3.jpg',
                    price: 99.99
                },
                {
                    url: 'slide-groups/lightings/lighting-4.jpg',
                    price: 109.99
                },
                {
                    url: 'slide-groups/lightings/lighting-5.jpg',
                    price: 119.99
                },
                {
                    url: 'slide-groups/lightings/lighting-6.jpg',
                    price: 129.99
                },
                {
                    url: 'slide-groups/lightings/lighting-7.jpg',
                    price: 139.99
                },
                {
                    url: 'slide-groups/lightings/lighting-8.jpg',
                    price: 149.99
                }
            ]
        },
        {
            title: 'បន្ទប់គេង',
            value: 'bedroom',
            icon: 'mdi-bed',
            images: [
                {
                    url: 'slide-groups/bedrooms/bedroom-1.jpg',
                    price: 79.99
                },
                {
                    url: 'slide-groups/bedrooms/bedroom-2.jpg',
                    price: 89.99
                },
                {
                    url: 'slide-groups/bedrooms/bedroom-3.jpg',
                    price: 99.99
                },
                {
                    url: 'slide-groups/bedrooms/bedroom-4.jpg',
                    price: 109.99
                },
                {
                    url: 'slide-groups/bedrooms/bedroom-5.jpg',
                    price: 119.99
                },
                {
                    url: 'slide-groups/bedrooms/bedroom-6.jpg',
                    price: 129.99
                },
            ]
        }
    ]

    const featuredInItems = [
        {
            title: 'រចនាស្របតាមតម្រូវការ',
            description: 'គ្រឿងសង្ហារឹមដែលស្របតាមតម្រូវការរបស់អ្នក',
            icon: 'mdi-table-furniture'
        },
        {
            title: 'ប្រើប្រាស់បានរយៈពេលយូរ',
            description: 'គ្រឿងសង្ហារឹមដែលមានវត្ថុធាតុដើមគុណភាពខ្ពស់',
            icon: 'mdi-all-inclusive'
        },
        {
            title: 'ស្នាដែកូនខ្មែរ',
            description: 'គ្រឿងសង្ហារឹមដែលកើតចេញពីស្នាដែកូនខ្មែរ១០០%',
            icon: 'mdi-account-group'
        }
    ]

</script>

<style scoped></style>
