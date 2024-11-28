<template>
    <v-container class="mt-5 px-0 py-0" :max-width="1200">
        <div class="bg-white">
            <v-container fluid>
                <div class="mb-4 xl:mb-12" data-aos="fade-down">
                    <v-col cols="12">
                        <the-inverted-card></the-inverted-card>
                    </v-col>
                </div>
                <div class="mb-10 xl:mb-28">
                    <v-container fluid>
                        <h2 data-aos="fade-down" data-aos-delay="300"
                            class="text-center mb-0 font-bold  text-gray-700 text-[1.5rem] lg:text-[2.2rem] xl:text-[2.5rem] lg:mb-8 xl:mb-16 lg:mt-20 xl:mt-24">
                            ប្រភេទគ្រឿងសង្ហារឹម</h2>
                        <v-row>
                            <v-col cols="12" md="4" class="-mb-20">
                                <v-card elevation="0" class="-mb-8 lg:-mb-6 min-[1180px]:mb-2 xl:mb-5"
                                    data-aos="fade-right">
                                    <router-link to="#">
                                        <the-long-top-left-inverted-card></the-long-top-left-inverted-card>
                                    </router-link>
                                </v-card>
                                <v-card elevation="0" data-aos="fade-right">
                                    <router-link to="#">
                                        <the-long-bottom-right-inverted-card></the-long-bottom-right-inverted-card>
                                    </router-link>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4" class="-mb-20 min-[350px]:-mb-16">
                                <v-card elevation="0" class="-mb-24 lg:-mb-24 xl:-mb-16 bg-transparent"
                                    data-aos="fade-down">
                                    <router-link to="#">
                                        <the-top-left-bottom-right-inverted-card></the-top-left-bottom-right-inverted-card>
                                    </router-link>
                                </v-card>
                                <v-card elevation="0" class="bg-transparent" data-aos="fade-up">
                                    <router-link to="#">
                                        <the-top-right-bottom-left-inverted-card></the-top-right-bottom-left-inverted-card>
                                    </router-link>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-card elevation="0" class="-mb-8 lg:-mb-6 xl:mb-5" data-aos="fade-left">
                                    <router-link to="#">
                                        <the-short-top-left-inverted-card></the-short-top-left-inverted-card>
                                    </router-link>
                                </v-card>
                                <v-card elevation="0" data-aos="fade-left">
                                    <router-link to="#">
                                        <the-short-bottom-left-inverted-card></the-short-bottom-left-inverted-card>
                                    </router-link>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
                <div class="mb-16">
                    <v-col cols="12"
                        class="flex flex-col align-center gap-y-6 min-[600px]:flex min-[600px]:flex-row min-[600px]:justify-between"
                        data-aos="fade-down">
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
                </div>
                <div class="mb-12">
                    <v-col cols="12">
                        <h2 data-aos="fade-down"
                            class="mb-4 font-bold text-center min-[600px]:text-left text-gray-700 text-[1.5rem] lg:text-[2.2rem] xl:text-[2.5rem]">
                            ផលិតផលប្រចាំខែ</h2>
                        <the-slide-group :tab-items="tabItems"></the-slide-group>
                    </v-col>
                </div>

                <div class="-mb-4">
                    <v-container fluid>
                        <h2 data-aos="fade-down" data-aos-delay="300"
                            class="text-center  text-gray-700 mb-2 font-bold text-[1.5rem] lg:text-[2.2rem] xl:text-[2.5rem]">
                            សម្ភារៈពេញនិយម</h2>
                        <v-row>
                            <v-col cols="12" md="4" data-aos="fade-right" class="-mb-10">
                                <v-card :elevation="0">
                                    <router-link :to="{ name: 'details' }">
                                        <the-short-bottom-right-inverted-card href="chair.png" title="Tottori"
                                            :price="79.99">
                                            <template #top-right>
                                                <heart-svg class="absolute top-10 right-2"></heart-svg>
                                            </template>

                                            <template #bottom-right>
                                                <cart-svg></cart-svg>
                                            </template>
                                        </the-short-bottom-right-inverted-card>
                                    </router-link>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4" data-aos="fade-down" class="-mb-10">
                                <v-card :elevation="0">
                                    <router-link to="#">
                                        <the-short-bottom-right-inverted-card href="lamp.png" title="អំពូល Edysse"
                                            :price="49.99">
                                            <template #top-right>
                                                <heart-svg class="absolute top-10 right-2"></heart-svg>
                                            </template>

                                            <template #bottom-right>
                                                <cart-svg></cart-svg>
                                            </template>
                                        </the-short-bottom-right-inverted-card>
                                    </router-link>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4" data-aos="fade-left">
                                <v-card :elevation="0">
                                    <router-link to="#" class="relative">
                                        <the-short-bottom-right-inverted-card href="small_chair.png"
                                            title="ឈុតតុកៅអីក្មេង" :price="89.99">
                                            <template #top-right>
                                                <heart-svg class="absolute top-10 right-2"></heart-svg>
                                            </template>

                                            <template #bottom-right>
                                                <cart-svg></cart-svg>
                                            </template>
                                        </the-short-bottom-right-inverted-card>
                                    </router-link>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
                <div class="-mb-10">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" md="12">
                                <v-card :elevation="0" class="-mt-10">
                                    <p data-aos="fade-down"
                                        class="absolute top-32 left-[4rem] text-gray-700 text-[1rem] font-bold">
                                        Timeless Design</p>
                                    <the-middle-top-inverted-card data-aos="fade-up"></the-middle-top-inverted-card>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
                <div class="mb-0">
                    <v-container>
                        <h2 data-aos="fade-down" data-aos-delay="300"
                            class="text-center font-bold text-gray-700 text-[1rem] mb-10">
                            សំណួរតែងត្រូវបានសួរ</h2>
                        <v-row class="flex">
                            <v-col cols="12" md="6" class="flex flex-col justify-center" data-aos="fade-right">
                                <v-expansion-panels :elevation="0">
                                    <v-expansion-panel v-for="(expansionItem, i) in expansionItems" :key="i">
                                        <v-expansion-panel-title class="py-4" :style="{ fontSize: '0.9rem' }">
                                            {{ expansionItem.title }}
                                        </v-expansion-panel-title>
                                        <v-expansion-panel-text class="text-[0.8rem]">
                                            {{ expansionItem.text }}
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-col>
                            <v-col cols="12" md="6" class="align-self-start" data-aos="fade-left">
                                <v-img class="w-full h-full" src="desk.png" alt="Desk" />
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
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
            title: 'តើគ្រឿងសង្ហារឹមរបស់អ្នកត្រូវបាននាំចូលពីប្រទេសណាខ្លះ?',
            text: 'ភាគច្រើនជាផលិតផលក្នុងស្រុក និងមួយចំនួនជាគ្រឿងមកពីប្រទេសផ្សេងៗដែលមានជាងជំនាញខាងផលិតគ្រឿងសង្ហារឹមដោយដៃ។'
        },
        {
            title: 'តើខ្ញុំអាចទៅមើលគ្រឿងសង្ហារឹមដោយផ្ទាល់នៅហាងបានឬទេ?',
            text: 'បាទ! បងអាចអញ្ជើញមកហាងរបស់ពួកយើងផ្ទាល់នៅផ្ទះលេខ៨២ ផ្លូវលេខ២០០៤ ក្រុមទី១ សង្កាត់កាកាប​ ខណ្ឌពោធិសែនជ័យ​ រាជធានីភ្នំពេញ។'
        },
        {
            title: 'តើមានសេវាដឹកជញ្ជូនដែរឬទេ?',
            text: 'បាទ! ពួកយើងផ្ដល់សេវាដឹកជញ្ជូនឥតគិតថ្លៃទៅគ្រប់២៥ខេត្ត/ក្រុង។'
        },
        {
            title: 'ក្នុងករណីមិនពេញចិត្ត តើអាចប្ដូរយកប្រាក់វិញបានទេ?',
            text: 'បាទ! ពួកយើងនឹងប្ដូរប្រាក់ជូនបងវិញក្នុងកំឡុងពេល១ខែ ក្នុងករណីដែលគ្រឿងសង្ហារឹមនៅសភាពល្អដូចដើម'
        },
        {
            title: 'តើមានសេវាកម្មតំឡើងដែរឬទេ?',
            text: 'បាទ! ពួកយើងផ្តល់សេវាកម្មតំឡើងទៅគ្រប់ខេត្ត/ក្រុង។ សេវាកម្មតំឡើងអាស្រ័យលើប្រភេទគ្រឿងសង្ហារឹមដែលអ្នកបានទិញ។'
        },
        {
            title: 'តើមានសេវាធានាគុណភាពគ្រឿងសង្ហារឹមដែរឬទេ?',
            text: 'បាទ! ពួកយើងផ្តល់សេវាធានាគុណភាពគ្រឿងសង្ហារឹមទៅទៅតាមប្រភេទនីមួយៗ ចាប់ពី២ឆ្នាំឡើងទៅ។'
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
