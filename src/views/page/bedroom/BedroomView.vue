<template>
    <v-container>
        <div class="bg-white" data-aos="fade-up">
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
                            <v-list-subheader>Product Category</v-list-subheader>
                            <v-list-item title="ទាំងអស់">
                                <v-list-item-action>
                                    <v-checkbox v-model="isAll" label="All"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item title="តុ">
                                <v-list-item-action>
                                    <v-checkbox v-model="isTable" label="Table"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-action title="កៅអី">
                                    <v-checkbox v-model="isChair" label="Chair"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-action title="តុការិយាល័យ">
                                    <v-checkbox v-model="isDesk" label="Desk"></v-checkbox>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                        <v-container>
                            <p class="mb-5">Filter By Price</p>
                            <v-range-slider thumb-label="always" :min="0" :max="2000" v-model="price"
                                class="w-full"></v-range-slider>
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
    const isDesk = ref(false);
    const price = ref([]);

    // Data for carousel
    const carouselItems = ref([
        {
            src: "/bedrooms/garden-room-bedroom-3-scaled.jpg",
            lazySrc: "/thumbnails/bedroom-6.jpg",
        },
        {
            src: "/bedrooms/badside table.jpg",
            lazySrc: "/thumbnails/bedroom-1.jpg",
        },
        {
            src: "/bedrooms/bedroom1.jpg",
            lazySrc: "/thumbnails/bedroom-2.jpg",
        },
        {
            src: "/bedrooms/Curise Headboard,Base.jpg",
            lazySrc: "/thumbnails/bedroom-2.jpg",
        },
    ]);

    // Product cards
    const productCards = ref([
        {
            href: "/slide-groups/bedrooms/bedroom-1.jpg",
            title: "បន្ទប់គេង",
            price: 109.99,
            category: 'table'
        },
        {
            href: "/slide-groups/bedrooms/bedroom-2.jpg",
            title: "បន្ទប់គេង",
            price: 119.99,
            category: 'chair'
        },
        {
            href: "/bedrooms/badside table.jpg",
            price: 30.99,
            title: "តុក្បែក្រេ",
            category: 'table'
        },
        {
            href: "/slide-groups/bedrooms/bedroom-3.jpg",
            title: "បន្ទប់គេង",
            price: 999.99,
            category: 'chair'
        },
        {
            href: "/bedrooms/badside table.jpg",
            price: 25.99,
            title: "តុក្បែក្រេ",
            category: 'table'
        },
        {
            href: "/slide-groups/bedrooms/bedroom-5.jpg",
            title: "បន្ទប់គេង",
            price: 999.99,
            category: 'desk'
        },
        {
            href: "/slide-groups/bedrooms/bedroom-5.jpg",
            title: "បន្ទប់គេង",
            price: 999.99,
            category: 'desk'
        },
        {
            href: "/slide-groups/bedrooms/bedroom-5.jpg",
            title: "បន្ទប់គេង",
            price: 999.99,
            category: 'desk'
        },
        {
            href: "/slide-groups/bedrooms/bedroom-5.jpg",
            title: "បន្ទប់គេង",
            price: 999.99,
            category: 'desk'
        },
        {
            href: "/slide-groups/bedrooms/bedroom-5.jpg",
            title: "បន្ទប់គេង",
            price: 999.99,
            category: 'desk'
        },
        {
            href: "/slide-groups/bedrooms/bedroom-5.jpg",
            title: "បន្ទប់គេង",
            price: 999.99,
            category: 'desk'
        },
        {
            href: "/slide-groups/bedrooms/bedroom-5.jpg",
            title: "បន្ទប់គេង",
            price: 999.99,
            category: 'desk'
        },
        {
            href: "/slide-groups/bedrooms/bedroom-5.jpg",
            title: "បន្ទប់គេង",
            price: 999.99,
            category: 'desk'
        },
    ]);

    watch(isAll, (newVal) => {
        if (newVal) {
            isTable.value = false;
            isChair.value = false;
            isDesk.value = false;
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

    watch(isDesk, (newVal) => {
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
            if (isDesk.value) {
                products.push(product.category === 'desk');
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
