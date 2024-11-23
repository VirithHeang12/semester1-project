<template>
    <v-container class="px-0 py-0">
        <div class="bg-white">
            <v-container>
                <v-row class="mb-16">
                    <v-col cols="12">
                        <the-inverted-card></the-inverted-card>
                    </v-col>
                </v-row>
                <v-row class="mb-16">
                    <v-col cols="12">
                        <h2 class="font-bold text-gray-700 text-[2rem] mb-10">ផលិតផលប្រចាំខែ</h2>
                        <the-slide-group :tab-items="tabItems"></the-slide-group>
                    </v-col>
                </v-row>
                <v-row>
                    <v-container>
                        <h2 class="text-center font-bold text-gray-700 text-[2rem] mb-10">ប្រភេទគ្រឿងសង្ហារឹម</h2>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-card elevation="0" class="mb-5">
                                    <a href="#">
                                        <the-long-top-left-inverted-card></the-long-top-left-inverted-card>
                                    </a>
                                </v-card>
                                <v-card elevation="0">
                                    <a href="#">
                                        <the-long-bottom-right-inverted-card></the-long-bottom-right-inverted-card>
                                    </a>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-card elevation="0" class="-mb-16 bg-transparent">
                                    <a href="#">
                                        <the-top-left-bottom-right-inverted-card></the-top-left-bottom-right-inverted-card>
                                    </a>
                                </v-card>
                                <v-card elevation="0" class="bg-transparent">
                                    <a href="#">
                                        <the-top-right-bottom-left-inverted-card></the-top-right-bottom-left-inverted-card>
                                    </a>
                                </v-card>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-card elevation="0" class="mb-5">
                                    <a href="#">
                                        <the-short-top-left-inverted-card></the-short-top-left-inverted-card>
                                    </a>
                                </v-card>
                                <v-card elevation="0">
                                    <a href="#">
                                        <the-short-bottom-left-inverted-card></the-short-bottom-left-inverted-card>
                                    </a>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>
                <v-row class="mb-16">
                    <v-container>
                        <h2 class="text-center font-bold text-gray-700 text-[2rem] mb-10">សម្ភារៈពេញនិយម</h2>
                        <v-row>
                            <v-col cols="12" md="4">
                                <a href="#">
                                    <the-short-bottom-right-inverted-card
                                        :price="79.99"></the-short-bottom-right-inverted-card>
                                </a>
                            </v-col>
                            <v-col cols="12" md="4">
                                <a href="#">
                                    <the-short-bottom-right-inverted-card href="lamp.png" :price="49.99"
                                        title="Edysse Lamps"></the-short-bottom-right-inverted-card>
                                </a>
                            </v-col>
                            <v-col cols="12" md="4">
                                <a href="#">
                                    <the-short-bottom-right-inverted-card href="small_chair.png" :price="89.99"
                                        title="ឈុតតុកៅអីក្មេង"></the-short-bottom-right-inverted-card>
                                </a>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>
                <v-row class="mb-12">
                    <v-container>
                        <v-row>
                            <the-middle-top-inverted-card></the-middle-top-inverted-card>
                        </v-row>
                    </v-container>
                </v-row>
                <v-row>
                    <v-container>
                        <v-row class="flex">
                            <v-col cols="12" md="6">
                                <v-expansion-panels>
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
                'slide-groups/livingrooms/livingroom-1.jpg',
                'slide-groups/livingrooms/livingroom-2.jpg',
                'slide-groups/livingrooms/livingroom-3.jpg',
                'slide-groups/livingrooms/livingroom-4.jpg',
                'slide-groups/livingrooms/livingroom-5.jpg',
                'slide-groups/livingrooms/livingroom-6.jpg',
                'slide-groups/livingrooms/livingroom-7.jpg',
            ]
        },
        {
            title: 'បន្ទប់ទទួលទានអាហារ',
            value: 'diningroom',
            icon: 'mdi-silverware-fork-knife',
            images: [
                'slide-groups/diningrooms/diningroom-1.jpg',
                'slide-groups/diningrooms/diningroom-2.jpg',
                'slide-groups/diningrooms/diningroom-3.jpg',
                'slide-groups/diningrooms/diningroom-4.jpg',
                'slide-groups/diningrooms/diningroom-5.jpg',
                'slide-groups/diningrooms/diningroom-6.jpg',
                'slide-groups/diningrooms/diningroom-7.jpg',
            ]
        },
        {
            title: 'បន្ទប់ការិយាល័យ',
            value: 'office',
            icon: 'mdi-chair-rolling',
            images: [
                'slide-groups/offices/office-1.jpg',
                'slide-groups/offices/office-2.jpg',
                'slide-groups/offices/office-3.jpg',
                'slide-groups/offices/office-4.jpg',
                'slide-groups/offices/office-5.jpg',
                'slide-groups/offices/office-6.jpg',
                'slide-groups/offices/office-7.jpg',
            ]
        },
        {
            title: 'គ្រឿងតុបតែងខាងក្រៅ',
            value: 'outdoor',
            icon: 'mdi-bench',
            images: [
                'slide-groups/outdoors/outdoor-1.jpg',
                'slide-groups/outdoors/outdoor-2.jpg',
                'slide-groups/outdoors/outdoor-3.jpg',
                'slide-groups/outdoors/outdoor-4.jpg',
                'slide-groups/outdoors/outdoor-5.jpg',
                'slide-groups/outdoors/outdoor-6.jpg',
                'slide-groups/outdoors/outdoor-7.jpg',
            ]
        },
        {
            title: 'អំពូលភ្លើង',
            value: 'lamp',
            icon: 'mdi-lamp',
            images: [
                'slide-groups/lightings/lighting-1.jpg',
                'slide-groups/lightings/lighting-2.jpg',
                'slide-groups/lightings/lighting-3.jpg',
                'slide-groups/lightings/lighting-4.jpg',
                'slide-groups/lightings/lighting-5.jpg',
                'slide-groups/lightings/lighting-6.jpg',
                'slide-groups/lightings/lighting-7.jpg',
                'slide-groups/lightings/lighting-8.jpg',
            ]
        },
        {
            title: 'បន្ទប់គេង',
            value: 'bedroom',
            icon: 'mdi-bed',
            images: [
                'slide-groups/bedrooms/bedroom-1.jpg',
                'slide-groups/bedrooms/bedroom-2.jpg',
                'slide-groups/bedrooms/bedroom-3.jpg',
                'slide-groups/bedrooms/bedroom-4.jpg',
                'slide-groups/bedrooms/bedroom-5.jpg',
                'slide-groups/bedrooms/bedroom-6.jpg',
                'slide-groups/bedrooms/bedroom-7.jpg',
            ]
        }
    ]

</script>

<style scoped></style>
