<template class="bg-primary-50">
    <!-- Link to payment modal -->
    <!-- <div class="row">
        <div>
            <a role="button" href="#payModal" data-bs-toggle="modal" @click.prevent="openPaymentModal">ទិញឥឡូវនេះ</a>
            <ThePaymentForm ref="paymentModalRef" />
        </div>
    </div> -->
    <v-container>
        <div data-aos="fade-up">
            <v-container>
                <v-row class="mb-16" data-aos="fade-up">
                    <v-col cols="12">
                        <v-carousel :min-height="100" :max-height="100" hide-delimiters class="rounded-lg">
                            <v-carousel-item ass="item" v-for="(item, i) in carouselItems" :key="`carousel-item-${i}`"
                                :src="item.src" :lazy-src="item.lazySrc" cover>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" lg="3" data-aos="fade-right">
                        <v-list lines="one" select-strategy="leaf" class="overflow-hidden">
                            <v-list-subheader class="!text-[20px] !font-semibold mb-4">ប្រភេទអំពូល</v-list-subheader>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isAll" label="ទាំងអស់"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isKitchen" label="អំពូលផ្ទះបាយ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isLivingRoom" label="អំពូលបន្ទប់ទទួលភ្ញៀវ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isTableLighting" label="អំពូលលើតុ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isWallLighting" label="អំពូលតាមជញ្ជាំង"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                        <v-container>
                            <p class="mb-5">Filter By Price</p>
                            <v-range-slider thumb-label="always" :min="0" :max="1000" v-model="price"
                                class="w-full"></v-range-slider>
                        </v-container>
                    </v-col>
                    <v-col cols="12" md="8" lg="9">
                        <v-row>
                            <v-col cols="12" sm="6" lg="4" v-for="(card, index) in paginatedProductCards"
                                :key="`product-card-${index}`" data-aos="fade-up" :data-aos-delay="index * 100">
                                <a href="#">
                                    <the-category-card :title="card.title" :price="card.price"
                                        :href="card.href"></the-category-card>
                                </a>
                            </v-col>
                        </v-row>
                        <v-row class="justify-content-center">
                            <!-- Pagination Controls -->
                            <v-pagination v-model="currentPage" :length="totalPages" total-visible="5"
                                color="primary-800" class="mt-4" />
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-sheet class="!py-10 mx-auto" elevation="0" data-aos="fade-in">
            <h2 class="text-lg font-bold min-[500px]:text-[1.5rem] min-[600px]:text-[2rem]">អ្នកប្រហែលជាចូលចិត្ត</h2>
            <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="(cartrecom, n) in cartRecom" :key="`cart-recom-${n}`">
                    <the-recommendation-card data-aos="zoom-in" :src="cartrecom.src"
                        :title="cartrecom.title"></the-recommendation-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </v-container>


</template>

<script setup>
    import TheCategoryCard from "@/components/cards/TheCategoryCard.vue";
    import TheRecommendationCard from "@/components/cards/TheRecommendationCard.vue";
    import ThePaymentForm from "@/components/modals/ThePaymentForm.vue";

    import { computed, ref, watch } from "vue";

    const isAll = ref(true);
    const isKitchen = ref(false);
    const isLivingRoom = ref(false);
    const isTableLighting = ref(false);
    const isWallLighting = ref(false);
    const price = ref([0, 1000]);

    // Call modal to use
    // const paymentModalRef = ref(null);

    // const openPaymentModal = () => {
    //     paymentModalRef.value.openModal();
    // };

    // Data for carousel
    const carouselItems = ref([
        {
            src: "/Slide Hero Banner/Lighting/lighting1.png",
            lazySrc: "/thumbnails/lighting-1.png",
        },
        {
            src: "/Slide Hero Banner/Lighting/lighting2.png",
            lazySrc: "/thumbnails/lighting-2.png",
        },
        {
            src: "/Slide Hero Banner/Lighting/lighting3.png",
            lazySrc: "/thumbnails/lighting-3.png",
        },
    ]);

    // Product cards
    const productCards = ref([
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen1.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Shape)/Living room/Mask group (4).png",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 159.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Shape)/On Table/Mask group (12).png",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Shape)/Wall/Mask group (1).png",
            title: "អំពូលតាមជញ្ជាំង",
            price: 99.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Shape)/Living room/Mask group (5).png",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen2.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Shape)/On Table/Mask group (10).png",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Shape)/Wall/Mask group (10).png",
            title: "អំពូលតាមជញ្ជាំង",
            price: 99.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen3.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen4.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen5.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen6.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen7.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen8.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen9.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen10.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen12.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Kitchen/l-kitchen14.jpg",
            title: "អំពូលផ្ទះបាយ",
            price: 19.99,
            category: 'kitchenLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Living room/l-livingroom1.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Living room/l-livingroom2.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Living room/l-livingroom3.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Living room/l-livingroom4.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Living room/l-livingroom5.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Living room/l-livingroom6.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Living room/l-livingroom7.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Living room/l-livingroom8.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Living room/l-livingroom9.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Living room/l-livingroom10.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
            price: 99.99,
            category: 'LivingLighting'
        },
        {
            href: "/Lighting Category/Lighting (Shape)/On Table/Mask group (1).png",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table1.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table2.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table3.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table4.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table5.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table6.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table7.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table8.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table9.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table10.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table11.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table12.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/On Table/l-table13.jpg",
            title: "អំពូលលើតុ",
            price: 100.99,
            category: 'TableLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 99.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall1.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 99.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall2.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 99.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall3.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall4.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall5.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall6.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall7.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall8.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall9.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall10.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall11.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall12.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall13.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
        {
            href: "/Lighting Category/Lighting (Orignal)/Wall/l-wall14.jpg",
            title: "អំពូលតាមជញ្ជាំង",
            price: 159.99,
            category: 'WallLighting'
        },
    ]);

    watch([isKitchen, isLivingRoom, isTableLighting, isWallLighting], () => {
        isAll.value = !isKitchen.value && !isLivingRoom.value && !isTableLighting.value && !isWallLighting.value;
        currentPage.value = 1;
    });

    const computedProductCards = computed(() => {
        return productCards.value.filter(product => {
            const matchesCategory = (
                isAll.value ||
                (isKitchen.value && product.category === 'kitchenLighting') ||
                (isLivingRoom.value && product.category === 'LivingLighting') ||
                (isTableLighting.value && product.category === 'TableLighting') ||
                (isWallLighting.value && product.category === 'WallLighting')
            );
            const matchesPrice = product.price >= price.value[0] && product.price <= price.value[1];
            return matchesCategory && matchesPrice;
        });
    });

    // Recommendations
    const cartRecom = ref([
        {
            src: "/slide-groups/lightings/lighting-1.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/lightings/lighting-2.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/lightings/lighting-3.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/lightings/lighting-4.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/lightings/lighting-5.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-6.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/lightings/lighting-7.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/lightings/lighting-8.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/lightings/lighting-2.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/lightings/lighting-5.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/lightings/lighting-7.jpg",
            title: "អំពូល",
        },
        {
            src: "/slide-groups/lightings/lighting-1.jpg",
            title: "អំពូល",
        },
    ]);

    // Pagination state
    const currentPage = ref(1);
    const itemsPerPage = 6; // Number of items to display per page
    // Calculating paginated items
    const paginatedProductCards = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return computedProductCards.value.slice(start, end);
    });
    const totalPages = computed(() => Math.ceil(computedProductCards.value.length / itemsPerPage));

</script>

<style scoped>
    .bg-white {
        background-color: white;
    }

    .rounded-lg {
        border-radius: 1.2rem;
    }

</style>
