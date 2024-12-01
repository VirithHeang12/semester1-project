<template class="bg-primary-50">
    <v-container>
        <div data-aos="fade-up">
            <v-container>
                <v-row class="mb-16" data-aos="fade-up">
                    <v-col cols="12">
                        <v-carousel :min-height="100" :max-height="100" hide-delimiters class="rounded-lg">
                            <v-carousel-item ass="item" v-for="(item, i) in carouselItems" :key="`carousel-item-${i}`"
                                :src="item.src" cover>
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" lg="3" data-aos="fade-right">
                        <v-list lines="one" select-strategy="leaf" class="overflow-hidden">
                            <v-list-subheader class="mb-4 !text-[20px] !font-semibold">ប្រភេទសម្ភារៈ</v-list-subheader>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isAll" label="ទាំងអស់"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isBed" label="គ្រែគេង"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isCloset" label="ទូ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isDesk" label="តុ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isMirror" label="កញ្ចក់"></v-checkbox>
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
                                <the-category-card :card="card"></the-category-card>
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
        <v-sheet class="mx-auto !py-10" elevation="0" data-aos="fade-in">
            <h2 class="text-lg font-bold min-[500px]:text-[1.5rem] min-[600px]:text-[2rem]">
                អ្នកប្រហែលជាចូលចិត្ត
            </h2>
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

    import { computed, ref, watch } from "vue";

    const isAll = ref(true);
    const isBed = ref(false);
    const isCloset = ref(false);
    const isDesk = ref(false);
    const isMirror = ref(false);
    const price = ref([0, 1000]);

    // Data for carousel
    const carouselItems = ref([
        {
            src: "/slide-groups/bedrooms/bedroom-slide-1.jpg",
        },

        {
            src: "/slide-groups/bedrooms/bedroom-slide-2.jpg",
        },

        {
            src: "/slide-groups/bedrooms/bedroom-slide-3.png",
        },
    ]);

    // Product cards
    const productCards = ref([
        {
            id: 1,
            href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-1.jpg",
            title: "តុ",
            price: 199.99,
            category: "desk",
            slug: "desk",
            description: 'The desk is made of wood and has a modern design.',
        },
        {
            id: 2,
            href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-1.jpg",
            title: "ទូ",
            price: 100.99,
            category: "closet",
            slug: "closet",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 3,
            href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-2.jpg",
            title: "កញ្ចក់",
            price: 99.99,
            category: "mirror",
            slug: "mirror",
            description: 'The mirror is made of glass and has a modern design.',
        },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-2.jpg",
        //     title: "តុ",
        //     price: 299.99,
        //     category: "desk",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-2.jpg",
        //     title: "គ្រែគេង",
        //     price: 219.99,
        //     category: "bed",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-2.jpg",
        //     title: "ទូ",
        //     price: 99.99,
        //     category: "closet",
        // },

        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-3.jpg",
        //     title: "គ្រែគេង",
        //     price: 219.99,
        //     category: "bed",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-3.jpg",
        //     title: "តុ",
        //     price: 88.99,
        //     category: "desk",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-3.jpg",
        //     title: "ទូ",
        //     price: 199.99,
        //     category: "closet",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-2.jpg",
        //     title: "កញ្ចក់",
        //     price: 199.99,
        //     category: "mirror",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-4.jpg",
        //     title: "គ្រែគេង",
        //     price: 209.99,
        //     category: "bed",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-4.jpg",
        //     title: "តុ",
        //     price: 25.99,
        //     category: "desk",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-4.jpg",
        //     title: "ទូ",
        //     price: 99.99,
        //     category: "closet",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-3.jpg",
        //     title: "កញ្ចក់",
        //     price: 23.99,
        //     category: "mirror",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-5.jpg",
        //     title: "គ្រែគេង",
        //     price: 1000.99,
        //     category: "bed",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-5.jpg",
        //     title: "តុ",
        //     price: 233.99,
        //     category: "desk",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-5.jpg",
        //     title: "ទូ",
        //     price: 100.99,
        //     category: "closet",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-4.jpg",
        //     title: "កញ្ចក់",
        //     price: 45.99,
        //     category: "mirror",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-6.jpg",
        //     title: "គ្រែគេង",
        //     price: 555.99,
        //     category: "bed",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-6.jpg",
        //     title: "តុ",
        //     price: 64.99,
        //     category: "desk",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-6.jpg",
        //     title: "ទូ",
        //     price: 78.99,
        //     category: "closet",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-5.jpg",
        //     title: "កញ្ចក់",
        //     price: 87.99,
        //     category: "mirror",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-7.jpg",
        //     title: "គ្រែគេង",
        //     price: 535.99,
        //     category: "bed",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-7.jpg",
        //     title: "តុ",
        //     price: 342.99,
        //     category: "desk",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-7.jpg",
        //     title: "ទូ",
        //     price: 333.99,
        //     category: "closet",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-6.jpg",
        //     title: "កញ្ចក់",
        //     price: 222.99,
        //     category: "mirror",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-8.jpg",
        //     title: "គ្រែគេង",
        //     price: 888.99,
        //     category: "bed",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-8.jpg",
        //     title: "តុ",
        //     price: 66.99,
        //     category: "desk",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-8.jpg",
        //     title: "ទូ",
        //     price: 333.99,
        //     category: "closet",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-7.jpg",
        //     title: "កញ្ចក់",
        //     price: 111.99,
        //     category: "mirror",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-9.jpg",
        //     title: "គ្រែគេង",
        //     price: 124.99,
        //     category: "bed",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-9.jpg",
        //     title: "តុ",
        //     price: 77.99,
        //     category: "desk",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-9.jpg",
        //     title: "ទូ",
        //     price: 111.99,
        //     category: "closet",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-8.jpg",
        //     title: "កញ្ចក់",
        //     price: 333.99,
        //     category: "mirror",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-10.jpg",
        //     title: "គ្រែគេង",
        //     price: 352.99,
        //     category: "bed",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-10.jpg",
        //     title: "តុ",
        //     price: 62.99,
        //     category: "desk",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-10.jpg",
        //     title: "ទូ",
        //     price: 145.99,
        //     category: "closet",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-9.jpg",
        //     title: "កញ្ចក់",
        //     price: 123.99,
        //     category: "mirror",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Bed/pic-11.jpg",
        //     title: "គ្រែគេង",
        //     price: 345.99,
        //     category: "bed",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Desk/pic-11.jpg",
        //     title: "តុ",
        //     price: 111.99,
        //     category: "desk",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Closet/pic-11.jpg",
        //     title: "ទូ",
        //     price: 533.99,
        //     category: "closet",
        // },
        // {
        //     href: "/Bedroom Category/Bedroom ( Orignal)/Mirror/pic-10.jpg",
        //     title: "កញ្ចក់",
        //     price: 233.99,
        //     category: "mirror",
        // },
    ]);

    watch([isBed, isCloset, isDesk, isMirror], () => {
        isAll.value =
            !isBed.value && !isCloset.value && !isDesk.value && !isMirror.value;
        currentPage.value = 1;
    });
    const computedProductCards = computed(() => {
        return productCards.value.filter((product) => {
            const matchesCategory =
                isAll.value ||
                (isBed.value && product.category === "bed") ||
                (isCloset.value && product.category === "closet") ||
                (isDesk.value && product.category === "desk") ||
                (isMirror.value && product.category === "mirror");
            const matchesPrice =
                product.price >= price.value[0] && product.price <= price.value[1];
            return matchesCategory && matchesPrice;
        });
    });
    // Recommendations
    const cartRecom = ref([
        {
            src: "/slide-groups/bedrooms/bedroom-1.jpg",
            title: "គ្រែគេង",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-2.jpg",
            title: "គ្រែគេង",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-3.jpg",
            title: "គ្រែគេង",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-4.jpg",
            title: "គ្រែគេង",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-5.jpg",
            title: "គ្រែគេង",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-6.jpg",
            title: "គ្រែគេង",
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
    const totalPages = computed(() =>
        Math.ceil(computedProductCards.value.length / itemsPerPage),
    );
</script>

<style scoped>
    .bg-white {
        background-color: white;
    }

    .rounded-lg {
        border-radius: 1.2rem;
    }
</style>
