<template>
    <v-container>
        <div class="bg-white" data-aos="fade-up" data-aos-duration="500">
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
                            <v-list-subheader class="!text-[20px] !font-semibold mb-4">ប្រភេទសម្ភារះ</v-list-subheader>


                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isAll" label="ទាំងអស់"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>


                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isTable" label="តុ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>

                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isChair" label="កៅអី"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item height="30px">
                                <v-list-item-action>
                                    <v-checkbox v-model="isPlant" label="ផើងរុក្ខជាតិ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>

                        <v-container>
                            <p class="mt-[20px] mb-[30px] text-primary-800">Filter By Price</p>
                            <v-range-slider thumb-label="always" :min="0" :max="1000" v-model="price"
                                class="w-full"></v-range-slider>
                        </v-container>
                    </v-col>

                    <v-col cols="12" md="8" lg="9">
                        <v-row>
                            <v-col cols="12" sm="6" md="4" v-for="(card, index) in paginatedProductCards"
                                :key="`product-card-${index}`" data-aos="fade-up" :data-aos-delay="index * 100">
                                <a href="#">
                                    <the-category-card :title="card.title" :price="card.price"
                                        :href="card.href"></the-category-card>
                                </a>
                            </v-col>
                        </v-row>
                        <!-- Pagination Controls -->
                        <v-row class="justify-content-center">
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

    import { computed, ref, watch } from "vue";

    const isAll = ref(true);
    const isTable = ref(false);
    const isChair = ref(false);
    const isPlant = ref(false);
    const price = ref([0, 1000]);

    // Data for carousel
    const carouselItems = ref([
        {
            src: "/slide-groups/outdoors/outdoor-slide-1.jpg",
            lazySrc: "/thumbnails/outdoor-6.jpg",
        },
        {
            src: "/slide-groups/outdoors/outdoor-slide-2.png",
            lazySrc: "/thumbnails/bedroom-1.jpg",
        },
        {
            src: "/slide-groups/outdoors/outdoor-slide-3.png",
            lazySrc: "/thumbnails/bedroom-2.jpg",
        },
    ]);

    // Product cards
    const productCards = ref([
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (8).png",
            title: "កៅអី",
            price: 50.50,
            category: 'chair'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (9).png",
            title: "កៅអី",
            price: 50.50,
            category: 'chair'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (10).png",
            title: "កៅអី",
            price: 50.50,
            category: 'chair'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Plant/plant-1.jpg",
            title: "រុក្ខជាតិ",
            price: 20.20,
            category: 'plant'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Plant/plant-2.jpg",
            title: "រុក្ខជាតិ",
            price: 20.20,
            category: 'plant'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-3.png",
            title: "រុក្ខជាតិ",
            price: 20.20,
            category: 'plant'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-4.png",
            title: "រុក្ខជាតិ",
            price: 20.20,
            category: 'plant'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-5.png",
            title: "រុក្ខជាតិ",
            price: 20.20,
            category: 'plant'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-10.png",
            title: "រុក្ខជាតិ",
            price: 20.20,
            category: 'plant'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-11.jpg",
            title: "រុក្ខជាតិ",
            price: 20.20,
            category: 'plant'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-8.png",
            title: "រុក្ខជាតិ",
            price: 20.20,
            category: 'plant'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-12.jpg",
            title: "រុក្ខជាតិ",
            price: 20.20,
            category: 'plant'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (8).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (9).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (10).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (1).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (1).png",
            title: "កៅអី",
            price: 50.50,
            category: 'chair'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (2).png",
            title: "កៅអី",
            price: 50.50,
            category: 'chair'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (3).png",
            title: "កៅអី",
            price: 50.50,
            category: 'chair'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (4).png",
            title: "កៅអី",
            price: 50.50,
            category: 'chair'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (5).png",
            title: "កៅអី",
            price: 50.50,
            category: 'chair'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (6).png",
            title: "កៅអី",
            price: 50.50,
            category: 'chair'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (7).png",
            title: "កៅអី",
            price: 50.50,
            category: 'chair'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (2).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (3).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (4).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (5).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (6).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
        },
        {
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (7).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
        },

    ]);

    // watch(isAll, (newVal) => {
    //     if (newVal) {
    //         isTable.value = false;
    //         isChair.value = false;
    //         isPlant.value = false;
    //     }
    // })

    // watch(isChair, (newVal) => {
    //     if (newVal) {
    //         isAll.value = false;
    //     }
    // })

    // watch(isTable, (newVal) => {
    //     if (newVal) {
    //         isAll.value = false;
    //     }
    // })

    // watch(isPlant, (newVal) => {
    //     if (newVal) {
    //         isAll.value = false;
    //     }
    // })

    watch([isChair, isTable, isPlant], () => {
        isAll.value = !isChair.value && !isTable.value && !isPlant.value;
        currentPage.value = 1;
    });

    const computedProductCards = computed(() => {
        return productCards.value.filter(product => {
            const matchesCategory = (
                isAll.value ||
                (isChair.value && product.category === 'chair') ||
                (isTable.value && product.category === 'table') ||
                (isPlant.value && product.category === 'plant')
            );
            const matchesPrice = product.price >= price.value[0] && product.price <= price.value[1];
            return matchesCategory && matchesPrice;
        });
    });


    const cartRecom = ref([
        {
            src: "/bedrooms/Headborad.jpg",
            title: "Headbord",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-3.jpg",
            title: "Mattresses",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-4.jpg",
            title: "Bedside Tables",
        },
        {
            src: "/bedrooms/Headborad.jpg",
            title: "Headbord",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-3.jpg",
            title: "Mattresses",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-4.jpg",
            title: "Bedside Tables",
        },
        {
            src: "/bedrooms/Headborad.jpg",
            title: "Headbord",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-3.jpg",
            title: "Mattresses",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-4.jpg",
            title: "Bedside Tables",
        },
        {
            src: "/bedrooms/Headborad.jpg",
            title: "Headbord",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-3.jpg",
            title: "Mattresses",
        },
        {
            src: "/slide-groups/bedrooms/bedroom-4.jpg",
            title: "Bedside Tables",
        },
    ]);


    const currentPage = ref(1);
    const itemsPerPage = 6;
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
