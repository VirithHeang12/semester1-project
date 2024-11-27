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
                                    <router-link to="#" class="relative">
                                        <p
                                            class="absolute text-[1rem] top-9 left-3 lg:top-6 lg:left-1 min-[1100px]:top-5 min-[1100px]:left-1 min-[1180px]:top-3 xl:top-2 xl:left-2 text-gray-700 lg:text-[1.3rem] min-[1180px]:text-[1.5rem] xl:text-[1.5rem] font-bold">
                                            បន្ទប់ទទួលទានអាហារ</p>
                                        <the-long-top-left-inverted-card></the-long-top-left-inverted-card>
                                        <the-detail-link
                                            class="absolute top-10 right-2 lg:top-7 lg:right-2 min-[1100px]:top-5 min-[1100px]:right-2 min-[1180px]:top-3 xl:top-2 xl:right-2"></the-detail-link>
                                    </router-link>
                                </v-card>
                                <v-card elevation="0" data-aos="fade-right">
                                    <router-link to="#" class="relative">
                                        <p
                                            class="absolute text-[1rem] bottom-12 left-3 lg:bottom-8 lg:left-1 min-[1100px]:bottom-6 min-[1100px]:left-2 min-[1180px]:bottom-3 xl:bottom-3 xl:left-2 text-gray-700 lg:text-[1.3rem] min-[1180px]:text-[1.4rem] xl:text-[1.5rem] font-bold">
                                            បន្ទប់ទទួលភ្ញៀវ</p>
                                        <the-long-bottom-right-inverted-card></the-long-bottom-right-inverted-card>
                                        <the-detail-link
                                            class="absolute top-14 right-2 lg:top-8 lg:right-2 min-[1100px]:top-6 min-[1100px]:right-2 xl:top-2 xl:right-2"></the-detail-link>
                                    </router-link>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4" class="-mb-20">
                                <v-card elevation="0" class="-mb-24 lg:-mb-24 xl:-mb-16 bg-transparent"
                                    data-aos="fade-down">
                                    <router-link to="#" class="relative">
                                        <p
                                            class="absolute text-[1rem] top-14 left-1 lg:top-11 lg:left-1 min-[1100px]:top-9 min-[1100px]:left-1 xl:top-7 xl:left-1 text-gray-700 lg:text-[1.2rem] xl:text-[1.4rem] font-bold">
                                            ការិយាល័យ</p>
                                        <the-top-left-bottom-right-inverted-card></the-top-left-bottom-right-inverted-card>
                                        <the-detail-link
                                            class="absolute top-16 right-2 lg:top-12 lg:right-2 min-[1100px]:top-10 min-[1100px]:right-2 xl:top-7 xl:right-2"></the-detail-link>
                                    </router-link>
                                </v-card>
                                <v-card elevation="0" class="bg-transparent" data-aos="fade-up">
                                    <router-link to="#" class="relative">
                                        <p
                                            class="absolute text-[1rem] bottom-14 left-1 lg:bottom-11 lg:left-1 min-[1100px]:bottom-9 min-[1100px]:left-1 xl:bottom-6 xl:left-2 text-gray-700 lg:text-[1.2rem] xl:text-[1.4rem] font-bold">
                                            បន្ទប់គេង</p>
                                        <the-top-right-bottom-left-inverted-card></the-top-right-bottom-left-inverted-card>
                                        <the-detail-link
                                            class="absolute top-16 right-2 lg:top-12 lg:right-2 min-[1100px]:top-11 min-[1100px]:right-2 xl:top-7 xl:right-2"></the-detail-link>
                                    </router-link>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-card elevation="0" class="-mb-8 lg:-mb-6 xl:mb-5" data-aos="fade-left">
                                    <router-link to="#" class="relative">
                                        <p
                                            class="absolute text-[1.1rem] top-12 left-2 lg:top-8 lg:left-2 min-[1100px]:top-6 min-[1100px]:left-2 xl:top-3 xl:left-4 text-gray-700 lg:text-[1.3rem] xl:text-[1.4rem] font-bold">
                                            ផ្ទះបាយ</p>
                                        <the-short-top-left-inverted-card></the-short-top-left-inverted-card>
                                        <the-detail-link
                                            class="absolute top-14 right-2 lg:top-9 lg:right-2 min-[1100px]:top-7 min-[1100px]:right-2 xl:top-3 xl:right-3"></the-detail-link>
                                    </router-link>
                                </v-card>
                                <v-card elevation="0" data-aos="fade-left">
                                    <router-link to="#" class="relative">
                                        <p
                                            class="absolute text-[1.1rem] bottom-10 left-1 lg:bottom-6 lg:left-1 xl:bottom-3 xl:left-3 text-gray-700 lg:text-[1.3rem] xl:text-[1.4rem] font-bold">
                                            អំពូលភ្លើង</p>
                                        <the-short-bottom-left-inverted-card></the-short-bottom-left-inverted-card>
                                        <the-detail-link
                                            class="absolute top-12 right-3 lg:top-8 lg:right-3 min-[1100px]:top-6 min-[1100px]:right-3 xl:top-3 xl:right-3"></the-detail-link>
                                    </router-link>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
                <div class="mb-28">
                    <v-col cols="12"
                        class="flex flex-col align-center gap-y-6 min-[600px]:flex min-[600px]:justify-between"
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
                <div class="mb-28">
                    <v-col cols="12">
                        <h2 data-aos="fade-down" class="font-bold text-gray-700 text-[2.5rem] mb-20">
                            ផលិតផលប្រចាំខែ</h2>
                        <the-slide-group :tab-items="tabItems"></the-slide-group>
                    </v-col>
                </div>

                <div style="margin-bottom: 8rem;">
                    <v-container>
                        <h2 data-aos="fade-down" data-aos-delay="300"
                            class="text-center font-bold text-gray-700 text-[2.5rem] mb-10">
                            សម្ភារៈពេញនិយម</h2>
                        <v-row>
                            <v-col cols="12" md="4" data-aos="fade-right">
                                <router-link :to="{ name: 'details' }" class="relative">
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
                            <v-col cols="12" md="4" data-aos="fade-down">
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
                            <v-col cols="12" md="4" data-aos="fade-left">
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
                </div>
                <div class="mb-28">
                    <v-container>
                        <v-row class="relative">
                            <p data-aos="fade-down"
                                class="absolute top-2 left-[27.5rem] text-gray-700 text-[2.5rem] font-bold">
                                Timeless Design</p>
                            <the-middle-top-inverted-card data-aos="fade-up"></the-middle-top-inverted-card>
                        </v-row>
                    </v-container>
                </div>
                <div class="mb-28">
                    <v-container>
                        <h2 data-aos="fade-down" data-aos-delay="300"
                            class="text-center font-bold text-gray-700 text-[2.5rem] mb-10">
                            សំណួរតែងត្រូវបានសួរ</h2>
                        <v-row class="flex">
                            <v-col cols="12" md="6" class="flex flex-col justify-center" data-aos="fade-right">
                                <v-expansion-panels :elevation="0">
                                    <v-expansion-panel v-for="(expansionItem, i) in expansionItems" :key="i"
                                        class="text-[2rem]">
                                        <v-expansion-panel-title class="py-4" :style="{ fontSize: '1.2rem' }">
                                            {{ expansionItem.title }}
                                        </v-expansion-panel-title>
                                        <v-expansion-panel-text class="text-[1rem]">
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
