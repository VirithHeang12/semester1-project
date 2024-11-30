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
                    <v-col cols="12" md="3" data-aos="fade-right">
                        <v-list lines="one" select-strategy="leaf">

                            <v-list-item class="py-4 px-2">
                                <v-list-header class="px-3">ប្រភេទទំនិញ</v-list-header>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-action>
                                    <v-checkbox v-model="isAll" label="ទាំងអស់"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-action>
                                    <v-checkbox v-model="isTable" label="តុ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-action>
                                    <v-checkbox v-model="isChair" label="កៅអី"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-action>
                                    <v-checkbox v-model="isPlant" label="រុក្ខជាតិ"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                        <v-container>
                            <p class="mb-5">Filter By Price</p>
                            <v-range-slider :thumb-label="isDragging" :min="10" :max="2000" v-model="price"
                                class="fill-width" @mousedown="isDragging = true" @mouseup="isDragging = false"
                                @mouseleave="isDragging = false" />

                        </v-container>
                    </v-col>

                    <v-col cols="12" md="9">
                        <v-row>
                            <v-col cols="12" md="4" v-for="(card, index) in computedProductCards"
                                :key="`product-card-${index}`" data-aos="fade-up" :data-aos-delay="index * 100">
                                <a href="#">
                                    <the-category-card :title="card.title" :price="card.price"
                                        :href="card.href"></the-category-card>
                                </a>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-sheet class="mx-auto" elevation="0" data-aos="fade-in">
            <h2 class="text-lg font-bold min-[500px]:text-[1.5rem] min-[600px]:text-[2rem]">អ្នកប្រហែលជាចូលចិត្ត</h2>
            <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
                <v-slide-group-item v-for="(cartrecom, n) in cartRecom" :key="`cart-recom-${n}`">
                    <the-recommendation-card :src="cartrecom.src" :title="cartrecom.title"></the-recommendation-card>
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
    const price = ref([]);

    // Data for carousel
    const carouselItems = ref([
        {
            src: "/Slide Hero Banner/Outdoor/outdoor-6.jpg",
            lazySrc: "/thumbnails/outdoor-6.jpg",
        },
        {
            src: "/Slide Hero Banner/Outdoor/outdoor-7.jpg",
            lazySrc: "/thumbnails/bedroom-1.jpg",
        },
        {
            src: "/Slide Hero Banner/Outdoor/outdoor-5.jpg",
            lazySrc: "/thumbnails/bedroom-2.jpg",
        },
        {
            src: "/Slide Hero Banner/Outdoor/outdoor-4.jpg",
            lazySrc: "/thumbnails/bedroom-2.jpg",
        },
    ]);

    // Product cards
    const productCards = ref([
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
            href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (1).png",
            title: "តុ",
            price: 88.88,
            category: 'table'
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
    ]);

    watch(isAll, (newVal) => {
        if (newVal) {
            isTable.value = false;
            isChair.value = false;
            isPlant.value = false;
        }
    })

    watch(isChair, (newVal) => {
        if (newVal) {
            isAll.value = false;
        }
    })

    watch(isTable, (newVal) => {
        if (newVal) {
            isAll.value = false;
        }
    })

    watch(isPlant, (newVal) => {
        if (newVal) {
            isAll.value = false;
        }
    })

    const computedProductCards = computed(() => {
        return productCards.value.filter((product) => {
            const products = [];

            if (isAll.value) {
                return productCards;
            }

            if (price.value.length > 0) {
                products.push(product.price >= price.value[0] && product.price <= price.value[1]);
            }

            if (isTable.value) {
                products.push(product.category === 'table');
            }

            if (isChair.value) {
                products.push(product.category === 'chair');
            }
            if (isPlant.value) {
                products.push(product.category === 'plant');
            }
            return products.length === 0 || products.includes(true);
        });
    });

    // Recommendations
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
</script>

<style scoped>
    .bg-white {
        background-color: white;
    }

    .rounded-lg {
        border-radius: 1.2rem;
    }
    

</style>
