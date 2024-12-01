<template>
    <v-container fluid class="p-0">
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
                            <div class="border-1 bg-white p-3 rounded-full" v-html="featuredInItem.svg"></div>
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
                                    <the-short-bottom-right-inverted-card href="chair.png" title="កៅអី Tottori"
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
                                    <v-expansion-panel-title class="py-4 !text-primary-800 expansion-panel-title-style">
                                        {{ expansionItem.title }}
                                    </v-expansion-panel-title>
                                    <v-expansion-panel-text class="text-[1rem] text-primary-600">
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
                    slug: 'amet-consectetur-adipiscing-elit',
                    category: 'table',
                    description: 'Amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    id: 2,
                    url: '/slide-groups/livingrooms/livingroom-2.jpg',
                    price: 89.99,
                    name: 'Pellentesque Habitant Morbi Tristique Senectus',
                    slug: 'pellentesque-habitant-morbi-tristique-senectus',
                    category: 'chair',
                    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                },
                {
                    id: 3,
                    url: '/slide-groups/livingrooms/livingroom-3.jpg',
                    price: 99.99,
                    name: 'Duis Aute Irure Dolor In Reprehenderit',
                    slug: 'duis-aute-irure-dolor-in-reprehenderit',
                    category: 'sofa',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    id: 4,
                    url: '/slide-groups/livingrooms/livingroom-4.jpg',
                    price: 109.99,
                    name: 'Blandit Praesent Luptatum Zzril Delenit Augue',
                    slug: 'blandit-praesent-luptatum-zzril-delenit-augue',
                    category: 'sofa',
                    description: 'Blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
                },
                {
                    id: 5,
                    url: '/slide-groups/livingrooms/livingroom-5.jpg',
                    price: 119.99,
                    name: 'Ridiculus Mus Donec Dignissim',
                    slug: 'ridiculus-mus-donec-dignissim',
                    category: 'table',
                    description: 'Ridiculus mus donec dignissim, donec dignissim, donec dignissim, donec dignissim.'
                },
                {
                    id: 6,
                    url: '/slide-groups/livingrooms/livingroom-6.jpg',
                    price: 129.99,
                    name: 'Orci Luctus Et Ultrices Posuere Cubilia',
                    slug: 'orci-luctus-et-ultrices-posuere-cubilia',
                    category: 'sofa',
                    description: 'Orci luctus et ultrices posuere cubilia, luctus et ultrices posuere cubilia, luctus et ultrices posuere cubilia.'
                },
                {
                    id: 7,
                    url: '/slide-groups/livingrooms/livingroom-7.jpg',
                    price: 139.99,
                    name: 'Kurabitur Quis Nostrud Exercitation Ullamco',
                    slug: 'kurabitur-quis-nostrud-exercitation-ullamco',
                    category: 'chair',
                    description: 'Kurabitur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
                    slug: 'illum-dolore-eu-feugiat-nulla',
                    category: 'table',
                    description: 'Illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui bland'
                },
                {
                    id: 2,
                    url: '/slide-groups/kitchens/diningroom-2.jpg',
                    price: 89.99,
                    name: 'Lobortis Nisi Ut Aliquip Ex Ea Commodo',
                    slug: 'lobortis-nisi-ut-aliquip-ex-ea-commodo',
                    category: 'chair',
                    description: 'Lobortis nisi ut aliquip ex ea commodo consequat duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.'
                },
                {
                    id: 3,
                    url: '/slide-groups/kitchens/diningroom-3.jpg',
                    price: 99.99,
                    name: 'Quis Nostrud Exercitation Ullamco',
                    slug: 'quis-nostrud-exercitation-ullamco',
                    category: 'table',
                    description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    id: 4,
                    url: '/slide-groups/kitchens/diningroom-4.jpg',
                    price: 109.99,
                    name: 'Fugiat Nulla Pariatur Excepteur Sint',
                    slug: 'fugiat-nulla-pariatur-excepteur-sint',
                    category: 'table',
                    description: 'Fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 5,
                    url: '/slide-groups/kitchens/diningroom-5.jpg',
                    price: 119.99,
                    name: 'Eiusmod Tempor Incididunt Ut Labore',
                    slug: 'eiusmod-tempor-incididunt-ut-labore',
                    category: 'chair',
                    description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    id: 6,
                    url: '/slide-groups/kitchens/diningroom-6.jpg',
                    price: 129.99,
                    name: 'Habent Claritatem Insitam Est Usus Legentis',
                    slug: 'habent-claritatem-insitam-est-usus-legentis',
                    category: 'table',
                    description: 'Habent claritatem insitam est usus legentis in iis qui facit eorum claritatem.'
                },
                {
                    id: 7,
                    url: '/slide-groups/kitchens/diningroom-7.jpg',
                    price: 139.99,
                    name: 'Wisi Enim Ad Minim Veniam',
                    slug: 'wisi-enim-ad-minim-veniam',
                    category: 'chair',
                    description: 'Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
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
                    slug: 'xerci-tation-ullamcorper-suscipit-lobortis',
                    category: 'desk',
                    description: 'Xerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                },
                {
                    id: 2,
                    url: '/slide-groups/offices/office-2.jpg',
                    price: 89.99,
                    name: 'Eodem Modo Typi Qui Nunc Nobis Videntur',
                    slug: 'eodem-modo-typi-qui-nunc-nobis-videntur',
                    category: 'chair',
                    description: 'Eodem modo typi qui nunc nobis videntur parum clari fiant sollemnes in futurum.'
                },
                {
                    id: 3,
                    url: '/slide-groups/offices/office-3.jpg',
                    price: 99.99,
                    name: 'Claritas Est Etiam Processus Dynamicus',
                    slug: 'claritas-est-etiam-processus-dynamicus',
                    category: 'table',
                    description: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'
                },
                {
                    id: 4,
                    url: '/slide-groups/offices/office-4.jpg',
                    price: 109.99,
                    name: 'Habent Claritatem Insitam Est Usus Legentis',
                    slug: 'habent-claritatem-insitam-est-usus-legentis',
                    category: 'desk',
                    description: 'Habent claritatem insitam est usus legentis in iis qui facit eorum claritatem.'
                },
                {
                    id: 5,
                    url: '/slide-groups/offices/office-5.jpg',
                    price: 119.99,
                    name: 'Iriure Dolor In Hendrerit In Vulputate',
                    slug: 'iriure-dolor-in-hendrerit-in-vulputate',
                    category: 'chair',
                    description: 'Iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui bland'
                },
                {
                    id: 6,
                    url: '/slide-groups/offices/office-6.jpg',
                    price: 129.99,
                    name: 'Velit Esse Molestie Consequat Vel',
                    slug: 'velit-esse-molestie-consequat-vel',
                    category: 'table',
                    description: 'Velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui bland'
                },
                {
                    id: 7,
                    url: '/slide-groups/offices/office-7.jpg',
                    price: 139.99,
                    name: 'Feugait Nulla Facilisi Nam Liber Tempor',
                    slug: 'feugait-nulla-facilisi-nam-liber-tempor',
                    category: 'chair',
                    description: 'Feugait nulla facilisi nam liber tempor cum soluta nobis eleifend option con'
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
                    slug: 'ridiculus-mus-donec-dignissim',
                    category: 'chair',
                    description: 'Ridiculus mus donec dignissim, donec dignissim, donec dignissim, donec dignissim.'
                },
                {
                    id: 2,
                    url: '/slide-groups/outdoors/outdoor-2.jpg',
                    price: 89.99,
                    name: 'Eiusmod Tempor Incididunt Ut Labore',
                    slug: 'eiusmod-tempor-incididunt-ut-labore',
                    category: 'sofa',
                    description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                {
                    id: 3,
                    url: '/slide-groups/outdoors/outdoor-3.jpg',
                    price: 99.99,
                    name: 'Habent Claritatem Insitam Est Usus Legentis',
                    slug: 'habent-claritatem-insitam-est-usus-legentis',
                    category: 'table',
                    description: 'Habent claritatem insitam est usus legentis in iis qui facit eorum claritatem.'
                },
                {
                    id: 4,
                    url: '/slide-groups/outdoors/outdoor-4.jpg',
                    price: 109.99,
                    name: 'Wisi Enim Ad Minim Veniam Lorem',
                    slug: 'wisi-enim-ad-minim-veniam-lorem',
                    category: 'table',
                    description: 'Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                },
                {
                    id: 5,
                    url: '/slide-groups/outdoors/outdoor-5.jpg',
                    price: 119.99,
                    name: 'Xerci Tation Ullamcorper Suscipit Lobortis',
                    slug: 'xerci-tation-ullamcorper-suscipit-lobortis',
                    category: 'chair',
                    description: 'Xerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
                },
                {
                    id: 6,
                    url: '/slide-groups/outdoors/outdoor-6.jpg',
                    price: 129.99,
                    name: 'Eodem Modo Typi Qui Nunc Nobis Videntur',
                    slug: 'eodem-modo-typi-qui-nunc-nobis-videntur',
                    category: 'sofa',
                    description: 'Eodem modo typi qui nunc nobis videntur parum clari fiant sollemnes in futurum.'
                },
                {
                    id: 7,
                    url: '/slide-groups/outdoors/outdoor-7.jpg',
                    price: 139.99,
                    name: 'Claritas Est Etiam Processus Dynamicus',
                    slug: 'claritas-est-etiam-processus-dynamicus',
                    category: 'sofa',
                    description: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'
                },
                {
                    id: 8,
                    url: '/slide-groups/outdoors/outdoor-8.jpg',
                    price: 149.99,
                    name: 'Habent Claritatem Insitam Est Usus Legentis',
                    slug: 'habent-claritatem-insitam-est-usus-legentis',
                    category: 'sofa',
                    description: 'Habent claritatem insitam est usus legentis in iis qui facit eorum claritatem.'
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
                    slug: 'pellentesque-habitant-morbi-tristique-senectus',
                    category: 'lamp',
                    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                },
                {
                    id: 2,
                    url: '/slide-groups/lightings/lighting-2.jpg',
                    price: 89.99,
                    name: 'Duis Aute Irure Dolor In Reprehenderit',
                    slug: 'duis-aute-irure-dolor-in-reprehenderit',
                    category: 'lamp',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    id: 3,
                    url: '/slide-groups/lightings/lighting-3.jpg',
                    price: 99.99,
                    name: 'Blandit Praesent Luptatum Zzril Delenit Augue',
                    slug: 'blandit-praesent-luptatum-zzril-delenit-augue',
                    category: 'lamp',
                    description: 'Blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
                },
                {
                    id: 4,
                    url: '/slide-groups/lightings/lighting-4.jpg',
                    price: 109.99,
                    name: 'Reprehenderit In Voluptate Velit Esse Cillum',
                    slug: 'reprehenderit-in-voluptate-velit-esse-cillum',
                    category: 'lamp',
                    description: 'Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                },
                {
                    id: 5,
                    url: '/slide-groups/lightings/lighting-5.jpg',
                    price: 119.99,
                    name: 'Dolore Eu Fe ugiat Nulla Facilisi',
                    slug: 'dolore-eu-fe-ugiat-nulla-facilisi',
                    category: 'lamp',
                    description: 'Dolore eu feugiat nulla facilisi at vero eros et accumsan et iusto odio dignissim qui blandit pra'
                },
                {
                    id: 6,
                    url: '/slide-groups/lightings/lighting-6.jpg',
                    price: 129.99,
                    name: 'Nam Liber Tempor Cum Soluta Nobis Eleifend',
                    slug: 'nam-liber-tempor-cum-soluta-nobis-eleifend',
                    category: 'lamp',
                    description: 'Nam liber tempor cum soluta nobis eleifend option con'
                },
                {
                    id: 7,
                    url: '/slide-groups/lightings/lighting-7.jpg',
                    price: 139.99,
                    name: 'Option Conr Adipiscing Elit',
                    slug: 'option-conr-adipiscing-elit',
                    category: 'lamp',
                    description: 'Option congue nihil imperdiet doming id quod mazim placerat facer possim assum.'
                },
                {
                    id: 8,
                    url: '/slide-groups/lightings/lighting-8.jpg',
                    price: 149.99,
                    name: 'Option Conr Adipiscing Elit et',
                    slug: 'option-conr-adipiscing-elit-et',
                    category: 'lamp',
                    description: 'Option congue nihil imperdiet doming id quod mazim placerat facer possim assum.'
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
                    slug: 'orci-luctus-et-ultrices-posuere-cubilia',
                    category: 'bed',
                    description: 'Orci luctus et ultrices posuere cubilia, luctus et ultrices posuere cubilia, luctus et ultrices posuere cubilia.'
                },
                {
                    id: 2,
                    url: '/slide-groups/bedrooms/bedroom-2.jpg',
                    price: 89.99,
                    name: 'Pellentesque Habitant Morbi Tristique Senectus',
                    slug: 'pellentesque-habitant-morbi-tristique-senectus',
                    category: 'bed',
                    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
                },
                {
                    id: 3,
                    url: '/slide-groups/bedrooms/bedroom-3.jpg',
                    price: 99.99,
                    name: 'Lobortis Nisi Ut Aliquip Ex Ea Commodo',
                    slug: 'lobortis-nisi-ut-aliquip-ex-ea-commodo',
                    category: 'bed',
                    description: 'Lobortis nisi ut aliquip ex ea commodo consequat duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.'
                },
                {
                    id: 4,
                    url: '/slide-groups/bedrooms/bedroom-4.jpg',
                    price: 109.99,
                    name: 'Ridiculus Mus Donec Dignissim',
                    slug: 'ridiculus-mus-donec-dignissim',
                    category: 'bed',
                    description: 'Ridiculus mus donec dignissim, donec dignissim, donec dignissim, donec dignissim.'
                },
                {
                    id: 5,
                    url: '/slide-groups/bedrooms/bedroom-5.jpg',
                    price: 119.99,
                    name: 'Tottori Atque Corrupti Quos Dolores',
                    slug: 'tottori-atque-corrupti-quos-dolores',
                    category: 'bed',
                    description: 'Tottori atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.'
                },
                {
                    id: 6,
                    url: '/slide-groups/bedrooms/bedroom-6.jpg',
                    price: 129.99,
                    name: 'Molestie Consequat Vel Illum Dolore Eu',
                    slug: 'molestie-consequat-vel-illum-dolore-eu',
                    category: 'bed',
                    description: 'Molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui bland'
                },
            ]
        }
    ];

    const featuredInItems = [
        {
            title: 'រចនាស្របតាមតម្រូវការ',
            description: 'គ្រឿងសង្ហារឹមដែលស្របតាមតម្រូវការរបស់អ្នក',
            icon: 'mdi-table-furniture',
            svg: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px" viewBox="0 0 14 14" id="svg2" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <metadata id="metadata8"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title></dc:title> </cc:work> </rdf:rdf> </metadata> <defs id="defs6"></defs> <rect width="14" height="14" x="0" y="0" id="canvas" style="fill:none;stroke:none;visibility:hidden"></rect> <path d="M 3,2 C 2,2 1,3 1,4 3,4 4,5.5760463 4,7 l 6,0 C 10,5.4818344 11,4 13,4 13,3 12,2 11,2 z M 1,5 C 0,5 0,6 0,6 0,6.5181656 0.481834,7 1,7 l 0,3 c 0,0.645252 0.423351,1 1,1 l 0.5,0 c 0,0 0,1 1,1 1,0 1,-1 1,-1 l 5,0 c 0,0 0,1 1,1 1,0 1,-1 1,-1 l 0.5,0 c 0.509491,0 1,-0.48425 1,-1 l 0,-3 c 0.494613,0 1,-0.3876224 1,-1 0,0 0,-1 -1,-1 -1,0 -2,1 -2,3 L 3,8 C 3,6 2,5 1,5 z" id="furniture" style="fill:#4f4f4f;fill-opacity:1;stroke:none"></path> </g></svg>',
            class: 'first'
        },
        {
            title: 'ប្រើប្រាស់បានរយៈពេលយូរ',
            description: 'គ្រឿងសង្ហារឹមដែលមានវត្ថុធាតុដើមគុណភាពខ្ពស់',
            icon: 'mdi-all-inclusive',
            svg: '<svg width="50px" height="50px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <title>ic_fluent_bed_24_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_bed_24_filled" fill="#4f4f4f" fill-rule="nonzero"> <path d="M19.25,11 C20.7125318,11 21.9084043,12.1417046 21.9949812,13.5824777 L22,13.75 L22,20.25 C22,20.6642136 21.6642136,21 21.25,21 C20.8703042,21 20.556509,20.7178461 20.5068466,20.3517706 L20.5,20.25 L20.5,18 L3.5,18 L3.5,20.25 C3.5,20.6296958 3.21784612,20.943491 2.85177056,20.9931534 L2.75,21 C2.37030423,21 2.05650904,20.7178461 2.00684662,20.3517706 L2,20.25 L2,13.75 C2,12.2874682 3.1417046,11.0915957 4.58247767,11.0050188 L4.75,11 L19.25,11 Z M6.75,4 L17.25,4 C18.7125318,4 19.9084043,5.1417046 19.9949812,6.58247767 L20,6.75 L20,10 L17,10 L16.9932723,9.88337887 C16.9399506,9.42429701 16.575703,9.06004937 16.1166211,9.00672773 L16,9 L14,9 C13.4871642,9 13.0644928,9.38604019 13.0067277,9.88337887 L13,10 L11,10 L10.9932723,9.88337887 C10.9399506,9.42429701 10.575703,9.06004937 10.1166211,9.00672773 L10,9 L8,9 C7.48716416,9 7.06449284,9.38604019 7.00672773,9.88337887 L7,10 L4,10 L4,6.75 C4,5.28746816 5.1417046,4.09159572 6.58247767,4.00501879 L6.75,4 Z" id="🎨-Color"> </path> </g> </g> </g></svg>',
            class: 'second'
        },
        {
            title: 'រចនាប័ទ្មទាន់សម័យ',
            description: 'គ្រឿងសង្ហារឹមនាំចូលពីក្នុង និងក្រៅប្រទេស',
            icon: 'mdi-account-group',
            svg: '<svg fill="#4f4f4f" width="50px" height="50px" viewBox="-5.55 0 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 111.78 122.88" xml:space="preserve" stroke="#4f4f4f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M20.27,104.92c-1.86,0.9-4.09,0.12-4.98-1.74c-0.9-1.86-0.12-4.09,1.74-4.98c4.5-2.17,8.98-3.96,13.43-5.37 c4.48-1.42,8.99-2.46,13.53-3.12c2.31-0.34,4.62-0.57,6.93-0.71V85.3l-10.99-8.18c-0.4-0.53-0.69-1.13-0.86-1.76H21.68l0,0v-0.02 c-3.74,0-7.12-1.51-9.56-3.95c-2.44-2.44-3.95-5.82-3.95-9.56H8.15v0V45.47h-3.5h0v-0.02c-1.28,0-2.45-0.52-3.28-1.36 c-0.83-0.83-1.34-1.98-1.35-3.25L0,40.83v0h0.01v-3.82H0l0,0h0.01c0-1.29,0.52-2.45,1.36-3.28c0.83-0.83,1.98-1.34,3.25-1.35 l0.01-0.01h0h16.69h0v0.01c1.29,0,2.45,0.52,3.28,1.35v0.01c0.83,0.83,1.34,1.98,1.35,3.25l0.01,0.02v0h-0.01v3.82h0.01v0h-0.01 c0,1.29-0.52,2.46-1.35,3.28H24.6c-0.83,0.83-1.98,1.34-3.25,1.34l-0.02,0.02h0h-4.46v16.35v0h-0.02c0,1.3,0.55,2.5,1.43,3.39 c0.88,0.88,2.08,1.43,3.39,1.43v-0.02l0,0h2.86v-7.89c0-3.35,2.95-6.09,6.54-6.09H79.1c3.6,0,6.54,2.74,6.54,6.09v7.89h2.86h0v0.02 c1.3,0,2.51-0.55,3.39-1.43c0.88-0.88,1.43-2.09,1.43-3.39h-0.02v0V45.47h-2.86h0v-0.02c-1.28,0-2.44-0.52-3.28-1.36 c-0.83-0.83-1.34-1.98-1.35-3.25l-0.01-0.02v0h0.01v-3.82H85.8l0,0h0.01c0-1.29,0.53-2.45,1.36-3.28c0.83-0.83,1.98-1.34,3.25-1.35 l0.02-0.01h0h16.69h0v0.01c1.29,0,2.45,0.52,3.28,1.35v0.01c0.83,0.83,1.34,1.98,1.35,3.25l0.01,0.02v0h-0.01v3.82h0.01v0h-0.01 c0,1.28-0.52,2.45-1.36,3.28c-0.83,0.83-1.98,1.34-3.25,1.34l-0.01,0.02h0h-5.1v16.35v0h-0.02c0,3.74-1.51,7.12-3.95,9.56 c-2.44,2.44-5.82,3.95-9.56,3.95v0.02h0H71.56c-0.17,0.77-0.51,1.5-1,2.13l-10.92,7.45v4.05c3.02,0.16,6.03,0.5,9.05,1.02 c8.22,1.41,16.41,4.13,24.59,8.2c1.85,0.92,2.6,3.16,1.68,5.01c-0.92,1.85-3.16,2.6-5.01,1.68c-7.52-3.75-15.03-6.25-22.51-7.53 c-2.6-0.44-5.2-0.74-7.79-0.9v7.17c0,2.41-1.95,4.36-4.36,4.36c-2.41,0-4.36-1.95-4.36-4.36v-7.15c-1.96,0.12-3.92,0.33-5.88,0.61 c-4.08,0.59-8.2,1.55-12.33,2.86C28.54,101.28,24.39,102.93,20.27,104.92L20.27,104.92z M27.84,0h54.5c1.81,0,3.44,1.49,3.28,3.28 l-4.5,42.37c-0.19,1.79-1.48,3.28-3.28,3.28H32.56c-1.8,0-3.12-1.48-3.28-3.28L24.56,3.28C24.4,1.49,26.04,0,27.84,0L27.84,0z M50.22,75.36h10.15H50.22L50.22,75.36z M91.96,110.1c3.53,0,6.39,2.86,6.39,6.39c0,3.53-2.86,6.39-6.39,6.39 c-3.53,0-6.39-2.86-6.39-6.39C85.57,112.96,88.43,110.1,91.96,110.1L91.96,110.1z M55.48,110.1c3.53,0,6.39,2.86,6.39,6.39 c0,3.53-2.86,6.39-6.39,6.39s-6.39-2.86-6.39-6.39C49.09,112.96,51.95,110.1,55.48,110.1L55.48,110.1z M19,110.1 c3.53,0,6.39,2.86,6.39,6.39c0,3.53-2.86,6.39-6.39,6.39c-3.53,0-6.39-2.86-6.39-6.39C12.61,112.96,15.47,110.1,19,110.1L19,110.1z"></path> </g> </g></svg>',
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
