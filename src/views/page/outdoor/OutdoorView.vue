<template>
    <v-container>
        <div class="bg-white" data-aos="fade-up" data-aos-duration="500">
            <v-container>
                <v-row class="mb-16" data-aos="fade-up">
                    <v-col cols="12">
                        <v-carousel :min-height="100" :max-height="100" hide-delimiter-background show-arrows="hover" color="#c9c9c9" cycle interval="5000" class="rounded-lg">
                            <v-carousel-item ass="item" v-for="(item, i) in carouselItems" :key="`carousel-item-${i}`" :src="item.src" :lazy-src="item.lazySrc" cover>
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
                            <v-range-slider thumb-label="always" :min="0" :max="1000" v-model="price" class="w-full"></v-range-slider>
                        </v-container>
                    </v-col>

                    <v-col cols="12" md="8" lg="9">
                        <v-row>
                            <v-col cols="12" sm="6" md="4" v-for="(card, index) in paginatedProductCards" :key="`product-card-${index}`" data-aos="fade-up" :data-aos-delay="index * 100">
                                <the-category-card :card="card"></the-category-card>
                            </v-col>
                        </v-row>
                        <!-- Pagination Controls -->
                        <v-row class="justify-content-center">
                            <v-pagination v-model="currentPage" :length="totalPages" total-visible="5" color="primary-800" class="mt-4" />
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-sheet class="!py-10 mx-auto" elevation="0" data-aos="fade-in">
            <h2 class="text-lg font-bold min-[500px]:text-[1.5rem] min-[600px]:text-[2rem]">អ្នកប្រហែលជាចូលចិត្ត</h2>
            <v-slide-group class="py-4" selected-class="bg-success">
                <v-slide-group-item v-for="(cartrecom, n) in cartRecom" :key="`cart-recom-${n}`">
                    <the-recommendation-card data-aos="zoom-in" :src="cartrecom.href" :title="cartrecom.title" :cartrecom="cartrecom"></the-recommendation-card>
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
        id: 1,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (8).png",
        title: "កៅអី",
        price: 60.00,
        category: 'chair',
        slug: "chair-1",
        description: 'This chair is designed for comfort with a sleek modern finish, perfect for any outdoor setting.',
    },
    {
        id: 2,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (9).png",
        title: "កៅអី",
        price: 55.75,
        category: 'chair',
        slug: "chair-2",
        description: 'Stylish chair made of premium wood, ideal for patio or garden spaces.',
    },
    {
        id: 3,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (10).png",
        title: "កៅអី",
        price: 70.25,
        category: 'chair',
        slug: "chair-3",
        description: 'A luxurious chair crafted with wood, offering both comfort and elegance for your outdoor area.',
    },
    {
        id: 4,
        href: "/Outdoor Cateogry/Outdoor (Original)/Plant/plant-1.jpg",
        title: "ផើងរុក្ខជាតិ",
        price: 25.30,
        category: 'plant',
        slug: "plant-1",
        description: 'This elegant vase, made of stone, complements any garden with its unique design.',
    },
    {
        id: 5,
        href: "/Outdoor Cateogry/Outdoor (Original)/Plant/plant-2.jpg",
        title: "ផើងរុក្ខជាតិ",
        price: 22.40,
        category: 'plant',
        slug: "plant-2",
        description: 'A modern stone vase that brings a touch of nature and style to your outdoor decor.',
    },
    {
        id: 6,
        href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-3.png",
        title: "ផើងរុក្ខជាតិ",
        price: 28.00,
        category: 'plant',
        slug: "plant-3",
        description: 'Beautiful stone vase with a contemporary design, perfect for all types of plants.',
    },
    {
        id: 7,
        href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-4.png",
        title: "ផើងរុក្ខជាតិ",
        price: 23.50,
        category: 'plant',
        slug: "plant-4",
        description: 'Decorative stone vase with a clean design that enhances your garden or balcony.',
    },
    {
        id: 8,
        href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-5.png",
        title: "ផើងរុក្ខជាតិ",
        price: 26.10,
        category: 'plant',
        slug: "plant-5",
        description: 'Elegant stone vase with a minimalist design, perfect for adding greenery to your space.',
    },
    {
        id: 9,
        href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-10.png",
        title: "ផើងរុក្ខជាតិ",
        price: 24.50,
        category: 'plant',
        slug: "plant-6",
        description: 'A stylish stone vase to brighten up your outdoor spaces with vibrant plants.',
    },
    {
        id: 10,
        href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-11.jpg",
        title: "ផើងរុក្ខជាតិ",
        price: 27.00,
        category: 'plant',
        slug: "plant-7",
        description: 'This stone vase will complement your garden with its simple yet sophisticated design.',
    },
    {
        id: 11,
        href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-8.png",
        title: "ផើងរុក្ខជាតិ",
        price: 22.80,
        category: 'plant',
        slug: "plant-8",
        description: 'Stone vase with a chic design, great for all your favorite plants.',
    },
    {
        id: 12,
        href: "/Outdoor Cateogry/Outdoor (Original)/Plant/pic-12.jpg",
        title: "ផើងរុក្ខជាតិ",
        price: 21.90,
        category: 'plant',
        slug: "plant-9",
        description: 'A stone vase with an elegant appearance, ideal for decorating your balcony or garden.',
    },
    {
        id: 13,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (8).png",
        title: "តុ",
        price: 98.75,
        category: 'table',
        slug: "table-1",
        description: 'A modern wooden table, designed for both style and functionality, perfect for outdoor dining.',
    },
    {
        id: 14,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (9).png",
        title: "តុ",
        price: 93.50,
        category: 'table',
        slug: "table-2",
        description: 'Elegant wooden table, ideal for family gatherings or outdoor events.',
    },
    {
        id: 15,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (10).png",
        title: "តុ",
        price: 105.60,
        category: 'table',
        slug: "table-3",
        description: 'This wooden table offers both a functional and fashionable design for your garden.',
    },
    {
        id: 16,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (1).png",
        title: "តុ",
        price: 100.20,
        category: 'table',
        slug: "table-4",
        description: 'Sophisticated wooden table, perfect for a wide range of outdoor settings.',
    },
    {
        id: 17,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (1).png",
        title: "កៅអី",
        price: 60.00,
        category: 'chair',
        slug: "chair-4",
        description: 'A modern chair with a strong wooden frame and comfortable seating.',
    },
    {
        id: 18,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (2).png",
        title: "កៅអី",
        price: 55.00,
        category: 'chair',
        slug: "chair-5",
        description: 'A sturdy wooden chair designed to add elegance to any outdoor area.',
    },
    {
        id: 19,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (3).png",
        title: "កៅអី",
        price: 62.50,
        category: 'chair',
        slug: "chair-6",
        description: 'Comfortable wooden chair, crafted to offer relaxation and style.',
    },
    {
        id: 20,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (4).png",
        title: "កៅអី",
        price: 58.00,
        category: 'chair',
        slug: "chair-7",
        description: 'Beautifully crafted wooden chair that combines elegance with comfort.',
    },
    {
        id: 21,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (5).png",
        title: "កៅអី",
        price: 65.00,
        category: 'chair',
        slug: "chair-8",
        description: 'Stylish and durable wooden chair, designed for long-lasting comfort.',
    },
    {
        id: 22,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (6).png",
        title: "កៅអី",
        price: 66.00,
        category: 'chair',
        slug: "chair-9",
        description: 'Wooden chair that features a modern design, perfect for any outdoor area.',
    },
    {
        id: 23,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (7).png",
        title: "កៅអី",
        price: 67.50,
        category: 'chair',
        slug: "chair-10",
        description: 'Comfortable outdoor chair made of premium wood, designed for relaxation.',
    },
    {
        id: 24,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (2).png",
        title: "តុ",
        price: 101.50,
        category: 'table',
        slug: "table-5",
        description: 'Sturdy wooden table for your patio, combining functionality and design.',
    },
    {
        id: 25,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (3).png",
        title: "តុ",
        price: 104.00,
        category: 'table',
        slug: "table-6",
        description: 'Wooden table designed to enhance your outdoor dining experience.',
    },
    {
        id: 26,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (4).png",
        title: "តុ",
        price: 110.00,
        category: 'table',
        slug: "table-7",
        description: 'Elegant wooden table designed for modern outdoor spaces.',
    },
    {
        id: 27,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (5).png",
        title: "តុ",
        price: 107.00,
        category: 'table',
        slug: "table-8",
        description: 'Modern outdoor table, perfect for family gatherings and outdoor events.',
    },
    {
        id: 28,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (6).png",
        title: "តុ",
        price: 99.00,
        category: 'table',
        slug: "table-9",
        description: 'Wooden table with a simple design, perfect for outdoor spaces.',
    },
    {
        id: 29,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (7).png",
        title: "តុ",
        price: 102.50,
        category: 'table',
        slug: "table-10",
        description: 'Wooden table designed for outdoor dining, combining elegance and durability.',
    },
]);



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
        id: 1,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (15).png",
        title: "Table",
        price: 129.99,
        category: 'outdoor',
        slug: 'table-15',
        description: 'Stylish outdoor table perfect for your garden or patio.',
    },
    {
        id: 2,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (16).png",
        title: "Table",
        price: 139.99,
        category: 'outdoor',
        slug: 'table-16',
        description: 'Modern outdoor table with a sleek design for any space.',
    },
    {
        id: 3,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (17).png",
        title: "Table",
        price: 119.99,
        category: 'outdoor',
        slug: 'table-17',
        description: 'Durable outdoor table built for comfort and style.',
    },
    {
        id: 4,
        href: "/Outdoor Cateogry/Outdoor (Original)/Table/Tables (18).png",
        title: "Table",
        price: 149.99,
        category: 'outdoor',
        slug: 'table-18',
        description: 'Spacious outdoor table with a robust design.',
    },
    {
        id: 5,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (30).png",
        title: "Chair",
        price: 79.99,
        category: 'outdoor',
        slug: 'chair-30',
        description: 'Comfortable and stylish outdoor chair for relaxation.',
    },
    {
        id: 6,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (32).png",
        title: "Chair",
        price: 89.99,
        category: 'outdoor',
        slug: 'chair-32',
        description: 'Ergonomically designed outdoor chair with a modern feel.',
    },
    {
        id: 7,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (33).png",
        title: "Chair",
        price: 99.99,
        category: 'outdoor',
        slug: 'chair-33',
        description: 'Stylish outdoor chair with sturdy construction and comfort.',
    },
    {
        id: 8,
        href: "/Outdoor Cateogry/Outdoor (Original)/Chair/Chair (34).png",
        title: "Chair",
        price: 89.99,
        category: 'outdoor',
        slug: 'chair-34',
        description: 'Modern outdoor chair perfect for your garden or patio.',
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
