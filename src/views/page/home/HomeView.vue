<template>
    <v-container fluid>
        <v-container fluid>
            <div class="row">
                <div class="col-12">
                    <the-inverted-card></the-inverted-card>
                </div>
            </div>
        </v-container>

        <v-container class="mt-5 px-0 py-0" :max-width="1200">
            <div class="mb-24 min-[350px]:mb-32 xl:mb-28">
                <h2 data-aos="fade-down" data-aos-delay="300"
                    class="text-center mb-0 font-bold  text-gray-700 text-[1.5rem] lg:text-[2.2rem] xl:text-[2.5rem] min-[380px]:mb-20 lg:mb-8 xl:mb-16 lg:mt-20 xl:mt-24">
                    ប្រភេទគ្រឿងសង្ហារឹម</h2>
                <v-container fluid>
                    <v-row>
                        <v-col cols="12" :md="4"
                            class="-mb-20 min-[350px]:-mb-10 min-[380px]:-mb-6 flex flex-col min-[350px]:gap-y-1 min-[380px]:gap-y-10 min-[960px]:gap-y-0 min-[1100px]:gap-y-14">
                            <v-card :elevation="0" class="bg-transparent -mb-8 min-[350px]:-mb-4" data-aos="fade-right">
                                <router-link :to="{ name: 'kitchen' }">
                                    <the-long-top-left-inverted-card class="mx-auto"></the-long-top-left-inverted-card>
                                </router-link>
                            </v-card>

                            <v-card elevation="0" class="bg-transparent" data-aos="fade-right">
                                <router-link :to="{ name: 'livingroom' }">
                                    <the-long-bottom-right-inverted-card
                                        class="mx-auto"></the-long-bottom-right-inverted-card>
                                </router-link>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="4" class="-mb-20 flex flex-col min-[350px]:-mb-16 min-[380px]:-mb-6">
                            <v-card elevation="0"
                                class="bg-transparent -mb-24 min-[350px]:-mb-20 min-[380px]:-mb-12 min-[960px]:-mb-24 min-[1100px]:-mb-12"
                                data-aos="fade-down">
                                <router-link :to="{ name: 'office' }">
                                    <the-top-left-bottom-right-inverted-card
                                        class="mx-auto"></the-top-left-bottom-right-inverted-card>
                                </router-link>
                            </v-card>
                            <v-card elevation="0" class="bg-transparent" data-aos="fade-up">
                                <router-link :to="{ name: 'bedroom' }">
                                    <the-top-right-bottom-left-inverted-card
                                        class="mx-auto"></the-top-right-bottom-left-inverted-card>
                                </router-link>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="4" class="-mb-20 flex flex-col">
                            <v-card elevation="0"
                                class="bg-transparent -mb-8 min-[380px]:mb-6 min-[960px]:-mb-6 min-[1100px]:mb-10"
                                data-aos="fade-left">
                                <router-link :to="{ name: 'kitchen' }">
                                    <the-short-top-left-inverted-card
                                        class="mx-auto"></the-short-top-left-inverted-card>
                                </router-link>
                            </v-card>
                            <v-card elevation="0" class="bg-transparent" data-aos="fade-left">
                                <router-link :to="{ name: 'lighting' }">
                                    <the-short-bottom-left-inverted-card
                                        class="mx-auto"></the-short-bottom-left-inverted-card>
                                </router-link>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>

            <div class="mb-16">
                <v-col cols="12"
                    class="grid grid-cols-1 justify-items-center gap-y-10 gap-x-5 min-[620px]:grid-cols-2 min-[870px]:grid-cols-3"
                    data-aos="fade-down">
                    <the-featured-in-card class="bg-gray-100" v-for="featuredInItem in featuredInItems"
                        :key="featuredInItem.title" :title="featuredInItem.title"
                        :description="featuredInItem.description" :class="featuredInItem.class">
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
                        class="mb-4 font-bold text-center min-[800px]:text-left text-gray-700 text-[1.5rem] lg:text-[2.2rem] xl:text-[2.5rem]">
                        ផលិតផលប្រចាំខែ</h2>
                    <the-slide-group :tab-items="tabItems"></the-slide-group>
                </v-col>
            </div>


            <div class="mb-4">
                <v-container fluid>
                    <h2 data-aos="fade-down" data-aos-delay="300"
                        class="text-center  text-gray-700 mb-2 font-bold text-[1.5rem] lg:text-[2.2rem] xl:text-[2.5rem]">
                        សម្ភារៈពេញនិយម</h2>
                    <v-row>
                        <v-col cols="12" md="4" data-aos="fade-right" class="-mb-10">
                            <v-card :elevation="0">
                                <div class="flex justify-center">
                                    <the-short-bottom-right-inverted-card href="chair.png" title="Tottori"
                                        :price="79.99">
                                    </the-short-bottom-right-inverted-card>
                                </div>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="4" data-aos="fade-down" class="-mb-10">
                            <v-card :elevation="0">
                                <div class="flex justify-center">
                                    <the-short-bottom-right-inverted-card href="lamp.png" title="អំពូល Edysse"
                                        :price="49.99">
                                    </the-short-bottom-right-inverted-card>
                                </div>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="4" data-aos="fade-left">
                            <v-card :elevation="0">
                                <div class="flex justify-center">
                                    <the-short-bottom-right-inverted-card href="small_chair.png" title="ឈុតតុកៅអីក្មេង"
                                        :price="89.99">
                                    </the-short-bottom-right-inverted-card>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <div class="mb-20">
                <v-container fluid>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-card :elevation="0">
                                <p data-aos="fade-down"
                                    class="flex justify-center text-gray-700 text-[1rem] min-[600px]:text-[1.3rem] min-[870px]:text-[1.8rem] min-[600px]:-mb-4 font-bold">
                                    Timeless Design</p>
                                <the-middle-top-inverted-card data-aos="fade-up"></the-middle-top-inverted-card>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <div class="mb-20">
                <v-card :elevation="0" class="mx-0">
                    <div class="grid grid-cols-1 justify-items-center gap-y-24 gap-x-4 min-[960px]:grid-cols-10">
                        <the-small-slide-group class="min-[960px]:col-span-7"></the-small-slide-group>
                        <v-img class="w-80 h-80 min-[960px]:col-span-3" src="lamp_with_flower.png"
                            alt="Lamp with flower"></v-img>
                    </div>
                </v-card>
            </div>
            <div class="mb-0">
                <v-container>
                    <h2 data-aos="fade-down" data-aos-delay="300"
                        class="text-center mb-10 font-bold  text-gray-700 text-[1.5rem] lg:text-[2.2rem] xl:text-[2.5rem] min-[380px]:mb-20 lg:mb-8 xl:mb-16 lg:mt-20 xl:mt-24">
                        សំណួរតែងត្រូវបានសួរ</h2>
                    <v-row class="flex">
                        <v-col cols="12" md="6" class="flex flex-col justify-center" data-aos="fade-right">
                            <v-expansion-panels :elevation="0">
                                <v-expansion-panel v-for="(expansionItem, i) in expansionItems" :key="i">
                                    <v-expansion-panel-title class="py-4 expansion-panel-title-style">
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
    import TheSmallSlideGroup from '@/components/slide-groups/TheSmallSlideGroup.vue';
    import TheSlideGroup from '@/components/slide-groups/TheSlideGroup.vue';
    import TheFeaturedInCard from '@/components/cards/TheFeaturedInCard.vue';

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
                    id: 1,
                    url: '/slide-groups/livingrooms/livingroom-1.jpg',
                    price: 79.99,
                    name: 'Amet Consectetur Adipiscing Elit',
                    slug: 'amet-consectetur-adipiscing-elit'
                },
                {
                    id: 2,
                    url: '/slide-groups/livingrooms/livingroom-2.jpg',
                    price: 89.99,
                    name: 'Pellentesque Habitant Morbi Tristique Senectus',
                    slug: 'pellentesque-habitant-morbi-tristique-senectus'
                },
                {
                    id: 3,
                    url: '/slide-groups/livingrooms/livingroom-3.jpg',
                    price: 99.99,
                    name: 'Duis Aute Irure Dolor In Reprehenderit',
                    slug: 'duis-aute-irure-dolor-in-reprehenderit'
                },
                {
                    id: 4,
                    url: '/slide-groups/livingrooms/livingroom-4.jpg',
                    price: 109.99,
                    name: 'Blandit Praesent Luptatum Zzril Delenit Augue',
                    slug: 'blandit-praesent-luptatum-zzril-delenit-augue'
                },
                {
                    id: 5,
                    url: '/slide-groups/livingrooms/livingroom-5.jpg',
                    price: 119.99,
                    name: 'Ridiculus Mus Donec Dignissim',
                    slug: 'ridiculus-mus-donec-dignissim'
                },
                {
                    id: 6,
                    url: '/slide-groups/livingrooms/livingroom-6.jpg',
                    price: 129.99,
                    name: 'Orci Luctus Et Ultrices Posuere Cubilia',
                    slug: 'orci-luctus-et-ultrices-posuere-cubilia'
                },
                {
                    id: 7,
                    url: '/slide-groups/livingrooms/livingroom-7.jpg',
                    price: 139.99,
                    name: 'Kurabitur Quis Nostrud Exercitation Ullamco',
                    slug: 'kurabitur-quis-nostrud-exercitation-ullamco'
                },
            ]
        },
        {
            title: 'បន្ទប់ទទួលទានអាហារ',
            value: 'diningroom',
            icon: 'mdi-silverware-fork-knife',
            images: [
                {
                    id: 1,
                    url: '/slide-groups/kitchens/diningroom-1.jpg',
                    price: 79.99,
                    name: 'Illum Dolore Eu Feugiat Nulla',
                    slug: 'illum-dolore-eu-feugiat-nulla'
                },
                {
                    id: 2,
                    url: '/slide-groups/kitchens/diningroom-2.jpg',
                    price: 89.99,
                    name: 'Lobortis Nisi Ut Aliquip Ex Ea Commodo',
                    slug: 'lobortis-nisi-ut-aliquip-ex-ea-commodo'
                },
                {
                    id: 3,
                    url: '/slide-groups/kitchens/diningroom-3.jpg',
                    price: 99.99,
                    name: 'Quis Nostrud Exercitation Ullamco',
                    slug: 'quis-nostrud-exercitation-ullamco'
                },
                {
                    id: 4,
                    url: '/slide-groups/kitchens/diningroom-4.jpg',
                    price: 109.99,
                    name: 'Fugiat Nulla Pariatur Excepteur Sint',
                    slug: 'fugiat-nulla-pariatur-excepteur-sint'
                },
                {
                    id: 5,
                    url: '/slide-groups/kitchens/diningroom-5.jpg',
                    price: 119.99,
                    name: 'Eiusmod Tempor Incididunt Ut Labore',
                    slug: 'eiusmod-tempor-incididunt-ut-labore'
                },
                {
                    id: 6,
                    url: '/slide-groups/kitchens/diningroom-6.jpg',
                    price: 129.99,
                    name: 'Habent Claritatem Insitam Est Usus Legentis',
                    slug: 'habent-claritatem-insitam-est-usus-legentis'
                },
                {
                    id: 7,
                    url: '/slide-groups/kitchens/diningroom-7.jpg',
                    price: 139.99,
                    name: 'Wisi Enim Ad Minim Veniam',
                    slug: 'wisi-enim-ad-minim-veniam'
                },
            ]
        },
        {
            title: 'បន្ទប់ការិយាល័យ',
            value: 'office',
            icon: 'mdi-chair-rolling',
            images: [
                {
                    id: 1,
                    url: '/slide-groups/offices/office-1.jpg',
                    price: 79.99,
                    name: 'Xerci Tation Ullamcorper Suscipit Lobortis',
                    slug: 'xerci-tation-ullamcorper-suscipit-lobortis'
                },
                {
                    id: 2,
                    url: '/slide-groups/offices/office-2.jpg',
                    price: 89.99,
                    name: 'Eodem Modo Typi Qui Nunc Nobis Videntur',
                    slug: 'eodem-modo-typi-qui-nunc-nobis-videntur'
                },
                {
                    id: 3,
                    url: '/slide-groups/offices/office-3.jpg',
                    price: 99.99,
                    name: 'Claritas Est Etiam Processus Dynamicus',
                    slug: 'claritas-est-etiam-processus-dynamicus'
                },
                {
                    id: 4,
                    url: '/slide-groups/offices/office-4.jpg',
                    price: 109.99,
                    name: 'Habent Claritatem Insitam Est Usus Legentis',
                    slug: 'habent-claritatem-insitam-est-usus-legentis'
                },
                {
                    id: 5,
                    url: '/slide-groups/offices/office-5.jpg',
                    price: 119.99,
                    name: 'Iriure Dolor In Hendrerit In Vulputate',
                    slug: 'iriure-dolor-in-hendrerit-in-vulputate'
                },
                {
                    id: 6,
                    url: '/slide-groups/offices/office-6.jpg',
                    price: 129.99,
                    name: 'Velit Esse Molestie Consequat Vel',
                    slug: 'velit-esse-molestie-consequat-vel'
                },
                {
                    id: 7,
                    url: '/slide-groups/offices/office-7.jpg',
                    price: 139.99,
                    name: 'Feugait Nulla Facilisi Nam Liber Tempor',
                    slug: 'feugait-nulla-facilisi-nam-liber-tempor'
                }
            ]
        },
        {
            title: 'គ្រឿងតុបតែងខាងក្រៅ',
            value: 'outdoor',
            icon: 'mdi-bench',
            images: [
                {
                    id: 1,
                    url: '/slide-groups/outdoors/outdoor-1.jpg',
                    price: 79.99,
                    name: 'Ridiculus Mus Donec Dignissim',
                    slug: 'ridiculus-mus-donec-dignissim'
                },
                {
                    id: 2,
                    url: '/slide-groups/outdoors/outdoor-2.jpg',
                    price: 89.99,
                    name: 'Eiusmod Tempor Incididunt Ut Labore',
                    slug: 'eiusmod-tempor-incididunt-ut-labore'
                },
                {
                    id: 3,
                    url: '/slide-groups/outdoors/outdoor-3.jpg',
                    price: 99.99,
                    name: 'Habent Claritatem Insitam Est Usus Legentis',
                    slug: 'habent-claritatem-insitam-est-usus-legentis'
                },
                {
                    id: 4,
                    url: '/slide-groups/outdoors/outdoor-4.jpg',
                    price: 109.99,
                    name: 'Wisi Enim Ad Minim Veniam Lorem',
                    slug: 'wisi-enim-ad-minim-veniam-lorem'
                },
                {
                    id: 5,
                    url: '/slide-groups/outdoors/outdoor-5.jpg',
                    price: 119.99,
                    name: 'Xerci Tation Ullamcorper Suscipit Lobortis',
                    slug: 'xerci-tation-ullamcorper-suscipit-lobortis'
                },
                {
                    id: 6,
                    url: '/slide-groups/outdoors/outdoor-6.jpg',
                    price: 129.99,
                    name: 'Eodem Modo Typi Qui Nunc Nobis Videntur',
                    slug: 'eodem-modo-typi-qui-nunc-nobis-videntur'
                },
                {
                    id: 7,
                    url: '/slide-groups/outdoors/outdoor-7.jpg',
                    price: 139.99,
                    name: 'Claritas Est Etiam Processus Dynamicus',
                    slug: 'claritas-est-etiam-processus-dynamicus'
                },
                {
                    id: 8,
                    url: '/slide-groups/outdoors/outdoor-8.jpg',
                    price: 149.99,
                    name: 'Habent Claritatem Insitam Est Usus Legentis',
                    slug: 'habent-claritatem-insitam-est-usus-legentis'
                }
            ]
        },
        {
            title: 'អំពូលភ្លើង',
            value: 'lamp',
            icon: 'mdi-lamp',
            images: [
                {
                    id: 1,
                    url: '/slide-groups/lightings/lighting-1.jpg',
                    price: 79.99,
                    name: 'Pellentesque Habitant Morbi Tristique Senectus',
                    slug: 'pellentesque-habitant-morbi-tristique-senectus'
                },
                {
                    id: 2,
                    url: '/slide-groups/lightings/lighting-2.jpg',
                    price: 89.99,
                    name: 'Duis Aute Irure Dolor In Reprehenderit',
                    slug: 'duis-aute-irure-dolor-in-reprehenderit'
                },
                {
                    id: 3,
                    url: '/slide-groups/lightings/lighting-3.jpg',
                    price: 99.99,
                    name: 'Blandit Praesent Luptatum Zzril Delenit Augue',
                    slug: 'blandit-praesent-luptatum-zzril-delenit-augue'
                },
                {
                    id: 4,
                    url: '/slide-groups/lightings/lighting-4.jpg',
                    price: 109.99,
                    name: 'Reprehenderit In Voluptate Velit Esse Cillum',
                    slug: 'reprehenderit-in-voluptate-velit-esse-cillum'
                },
                {
                    id: 5,
                    url: '/slide-groups/lightings/lighting-5.jpg',
                    price: 119.99,
                    name: 'Dolore Eu Fe ugiat Nulla Facilisi',
                    slug: 'dolore-eu-fe-ugiat-nulla-facilisi'
                },
                {
                    id: 6,
                    url: '/slide-groups/lightings/lighting-6.jpg',
                    price: 129.99,
                    name: 'Nam Liber Tempor Cum Soluta Nobis Eleifend',
                    slug: 'nam-liber-tempor-cum-soluta-nobis-eleifend'
                },
                {
                    id: 7,
                    url: '/slide-groups/lightings/lighting-7.jpg',
                    price: 139.99,
                    name: 'Option Conr Adipiscing Elit',
                    slug: 'option-conr-adipiscing-elit'
                },
                {
                    id: 8,
                    url: '/slide-groups/lightings/lighting-8.jpg',
                    price: 149.99,
                    name: 'Option Conr Adipiscing Elit et',
                    slug: 'option-conr-adipiscing-elit-et'
                }
            ]
        },
        {
            title: 'បន្ទប់គេង',
            value: 'bedroom',
            icon: 'mdi-bed',
            images: [
                {
                    id: 1,
                    url: '/slide-groups/bedrooms/bedroom-1.jpg',
                    price: 79.99,
                    name: 'Orci Luctus Et Ultrices Posuere Cubilia',
                    slug: 'orci-luctus-et-ultrices-posuere-cubilia'
                },
                {
                    id: 2,
                    url: '/slide-groups/bedrooms/bedroom-2.jpg',
                    price: 89.99,
                    name: 'Pellentesque Habitant Morbi Tristique Senectus',
                    slug: 'pellentesque-habitant-morbi-tristique-senectus'
                },
                {
                    id: 3,
                    url: '/slide-groups/bedrooms/bedroom-3.jpg',
                    price: 99.99,
                    name: 'Lobortis Nisi Ut Aliquip Ex Ea Commodo',
                    slug: 'lobortis-nisi-ut-aliquip-ex-ea-commodo'
                },
                {
                    id: 4,
                    url: '/slide-groups/bedrooms/bedroom-4.jpg',
                    price: 109.99,
                    name: 'Ridiculus Mus Donec Dignissim',
                    slug: 'ridiculus-mus-donec-dignissim'
                },
                {
                    id: 5,
                    url: '/slide-groups/bedrooms/bedroom-5.jpg',
                    price: 119.99,
                    name: 'Tottori Atque Corrupti Quos Dolores',
                    slug: 'tottori-atque-corrupti-quos-dolores'
                },
                {
                    id: 6,
                    url: '/slide-groups/bedrooms/bedroom-6.jpg',
                    price: 129.99,
                    name: 'Molestie Consequat Vel Illum Dolore Eu',
                    slug: 'molestie-consequat-vel-illum-dolore-eu'
                },
            ]
        }
    ];

    const featuredInItems = [
        {
            title: 'រចនាស្របតាមតម្រូវការ',
            description: 'គ្រឿងសង្ហារឹមដែលស្របតាមតម្រូវការរបស់អ្នក',
            icon: 'mdi-table-furniture',
            class: 'first'
        },
        {
            title: 'ប្រើប្រាស់បានរយៈពេលយូរ',
            description: 'គ្រឿងសង្ហារឹមដែលមានវត្ថុធាតុដើមគុណភាពខ្ពស់',
            icon: 'mdi-all-inclusive',
            class: 'second'
        },
        {
            title: 'ស្នាដែកូនខ្មែរ',
            description: 'គ្រឿងសង្ហារឹមដែលកើតចេញពីស្នាដែកូនខ្មែរ១០០%',
            icon: 'mdi-account-group',
            class: 'third'
        }
    ]

</script>

<style scoped>
    @media (min-width: 620px) {
        .third {
            grid-column: span 2;
            justify-self: center;
        }
    }

    @media (min-width: 870px) {
        .third {
            grid-column: span 1;
        }
    }

    @media (min-width: 620px) {
        .expansion-panel-title-style {
            font-size: 1rem;
            font-weight: 600;
        }
    }

    @media (min-width: 870px) {
        .expansion-panel-title-style {
            font-size: 1.1rem;
            font-weight: 600;
        }
    }


</style>
