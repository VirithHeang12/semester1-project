<template>
    <v-container>
        <div class="bg-white" data-aos="fade-up">
            <v-container>
                <v-row class="mb-16" data-aos="fade-up">
                    <v-col cols="12">
                        <v-carousel hide-delimiter-background show-arrows="hover" color="#c9c9c9" cycle interval="5000" class="rounded-lg">
                            <v-carousel-item v-for="(item, i) in carouselItems" :key="`carousel-item-${i}`" :src="item.src" :lazy-src="item.lazySrc" cover></v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" lg="3" data-aos="fade-right">
                        <v-list lines="one" select-strategy="leaf">
                            <v-list-subheader class="!text-[20px] !font-semibold mb-4">ប្រភេទសម្ភារៈ </v-list-subheader>
                            <v-list-item v-for="item in sidebarItems" :key="`sidebar-item-${item.id}`" :title="item.title" @click="toggleCategory(item.id)">
                                <template v-slot:prepend>
                                    <v-checkbox-btn :model-value="selectedCategories.includes(item.id)"></v-checkbox-btn>
                                </template>
                            </v-list-item>
                        </v-list>
                        <v-container>
                            <p class="mt-[20px] mb-[30px] text-primary-800">Filter By Price</p>
                            <v-range-slider v-model="priceRange" class="w-full" thumb-label="always" :min="20" :max="800"></v-range-slider>
                        </v-container>
                    </v-col>
                    <v-col cols="12" md="8" lg="9">
                        <v-row>
                            <v-col cols="12" sm="6" md="4" v-for="(card, index) in paginatedProductCards" :key="`product-card-${index}`" data-aos="fade-up" :data-aos-delay="index * 100">
                                <the-category-card :card="card"></the-category-card>
                            </v-col>
                        </v-row>
                        <v-row class="justify-content-center">
                            <!-- Pagination Controls -->
                            <v-pagination v-model="currentPage" :length="totalPages" total-visible="5" color="primary-800" class="mt-4" />
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-sheet class="mx-auto" elevation="0" data-aos="fade-in">
            <h2 class=" font-bold text-[32px] text-primary-700">អ្នកប្រហែលជាចូលចិត្ត</h2>
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

    import { ref, computed } from "vue";

    // Data for carousel
    const carouselItems = ref([
        {
            src: "/slide-groups/offices/office-8.png",
            lazySrc: "/thumbnails/bedroom-6.jpg",
        },
        {
            src: "/slide-groups/offices/office-12.png",
            lazySrc: "/thumbnails/bedroom-1.jpg",
        },
        {
            src: "/slide-groups/offices/office-9.png",
            lazySrc: "/thumbnails/bedroom-2.jpg",
        },
    ]);

    // Sidebar filter items
    const sidebarItems = ref([
        { id: 1, title: "ទាំងអស់", category: "all" },
        { id: 2, title: "កៅអី", category: "chair" },
        { id: 3, title: "សម្ភារៈដេគ័រ", category: "decorItem" },
        { id: 4, title: "អំពូលភ្លើង", category: "lamp" },
        { id: 5, title: "តុធ្វើការ", category: "desk" },
    ]);

    // Recommendations
    const cartRecom = ref([
    {
        id: 1,
        href: "/slide-groups/offices/office-1.jpg",
        title: "បន្ទប់ការិយាល័យ",
        price: 109.99,
        category: 'office',
        slug: 'office-1',
        description: 'Modern and functional office space with ergonomic furniture.',
    },
    {
        id: 2,
        href: "/slide-groups/offices/office-2.jpg",
        title: "បន្ទប់ការិយាល័យ",
        price: 109.99,
        category: 'office',
        slug: 'office-2',
        description: 'A stylish office layout with ample desk space.',
    },
    {
        id: 3,
        href: "/slide-groups/offices/office-3.jpg",
        title: "បន្ទប់ការិយាល័យ",
        price: 109.99,
        category: 'office',
        slug: 'office-3',
        description: 'Functional and sleek office environment for productivity.',
    },
    {
        id: 4,
        href: "/slide-groups/offices/office-4.jpg",
        title: "បន្ទប់ការិយាល័យ",
        price: 109.99,
        category: 'office',
        slug: 'office-4',
        description: 'Elegant office setup designed for efficiency and comfort.',
    },
    {
        id: 5,
        href: "/slide-groups/offices/office-5.jpg",
        title: "បន្ទប់ការិយាល័យ",
        price: 109.99,
        category: 'office',
        slug: 'office-5',
        description: 'Contemporary office design with a minimalist approach.',
    },
    {
        id: 6,
        href: "/slide-groups/offices/office-6.jpg",
        title: "បន្ទប់ការិយាល័យ",
        price: 109.99,
        category: 'office',
        slug: 'office-6',
        description: 'Spacious and well-lit office space for optimal workflow.',
    },
    {
        id: 7,
        href: "/slide-groups/offices/office-7.jpg",
        title: "បន្ទប់ការិយាល័យ",
        price: 109.99,
        category: 'office',
        slug: 'office-7',
        description: 'Bright and inspiring office with modern decor.',
    },
    {
        id: 8,
        href: "/Office Category/Office Category (Original)/Desks/office-desk-2.jpg",
        title: "បន្ទប់ការិយាល័យ",
        price: 89.99,
        category: 'furniture',
        slug: 'office-desk-2',
        description: 'Sleek office desk with ample storage and workspace.',
    },
    {
        id: 9,
        href: "/Office Category/Office Category (Original)/Desks/office-desk-3.jpg",
        title: "បន្ទប់ការិយាល័យ",
        price: 89.99,
        category: 'furniture',
        slug: 'office-desk-3',
        description: 'Ergonomic office desk designed for comfort and style.',
    },
]);
    // Product cards
    const productCards = ref([
    {
        id: 1,
        href: "/Office Category/Office Category (Original)/Decor Items/office-decor-1.jpg",
        title: "ម៉ោងលើតុ",
        price: 88.99,
        category: "decorItem",
        slug: "decoritem-one",
        description: "An elegant desk clock that adds a touch of sophistication to your office decor.",
    },
    {
        id: 2,
        href: "/Office Category/Office Category (Original)/Decor Items/office-decor-3.jpg",
        title: "ឈើដាក់សម្ភារៈ",
        price: 88.99,
        category: "decorItem",
        slug: "decoritem-two",
        description: "A sturdy wooden organizer, perfect for keeping your office supplies neatly arranged.",
    },
    {
        id: 3,
        href: "/Office Category/Office Category (Original)/Desk Lamps/desk-lamp-1.jpg",
        title: "អំពូលភ្លើង",
        price: 99.99,
        category: "lamp",
        slug: "lamp-one",
        description: "A sleek desk lamp that provides excellent lighting for reading or working.",
    },
    {
        id: 4,
        href: "/Office Category/Office Category (Original)/Desks/office-desk-3.jpg",
        title: "តុធ្វើការ",
        price: 405.99,
        category: "desk",
        slug: "desk-one",
        description: "A modern office desk designed with ample space and a clean aesthetic.",
    },
    {
        id: 5,
        href: "/Office Category/Office Category (Original)/Desk Lamps/desk-lamp-3.jpg",
        title: "អំពូលភ្លើង",
        price: 99.99,
        category: "lamp",
        slug: "lamp-two",
        description: "An energy-efficient desk lamp with adjustable brightness settings.",
    },
    {
        id: 6,
        href: "/Office Category/Office Category (Original)/Desks/office-desk-1.jpg",
        title: "តុធ្វើការ",
        price: 405.99,
        category: "desk",
        slug: "desk-two",
        description: "A compact and durable desk suitable for both home and office use.",
    },
    {
        id: 7,
        href: "/Office Category/Office Category (Original)/Desks/office-desk-2.jpg",
        title: "តុធ្វើការ",
        price: 455.99,
        category: "desk",
        slug: "desk-three",
        description: "A stylish desk with a large surface area and additional storage compartments.",
    },
    {
        id: 8,
        href: "/Office Category/Office Category (Original)/Chairs/office-chair-1.jpg",
        title: "កៅអី",
        price: 125.88,
        category: "chair",
        slug: "chair-one",
        description: "An ergonomic office chair that provides maximum comfort during long hours of work.",
    },
    {
        id: 9,
        href: "/Office Category/Office Category (Original)/Chairs/office-chair-6.jpg",
        title: "កៅអី",
        price: 109.99,
        category: "chair",
        slug: "chair-two",
        description: "A stylish and comfortable office chair with adjustable height and back support.",
    },
    {
        id: 10,
        href: "/Office Category/Office Category (Original)/Decor Items/office-decor-2.jpg",
        title: "សម្ភារៈដេគ័រ",
        price: 68.99,
        category: "decorItem",
        slug: "decoritem-three",
        description: "A decorative item that enhances the ambiance of your workspace.",
    },
    {
        id: 11,
        href: "/Office Category/Office Category (Original)/Decor Items/office-decor-4.jpg",
        title: "សម្ភារៈដេគ័រ",
        price: 58.99,
        category: "decorItem",
        slug: "decoritem-four",
        description: "A minimalistic decor piece that brings elegance and charm to your office.",
    },
    {
        id: 12,
        href: "/Office Category/Office Category (Original)/Decor Items/office-decor-5.jpg",
        title: "សម្ភារៈដេគ័រ",
        price: 88.99,
        category: "decorItem",
        slug: "decoritem-five",
        description: "A premium-quality decorative item that complements modern office interiors.",
    },
    {
        id: 13,
        href: "/Office Category/Office Category (Original)/Desks/office-desk-10.png",
        title: "តុធ្វើការ",
        price: 495.99,
        category: "desk",
        slug: "desk-four",
        description: "A spacious desk crafted with high-quality materials for durability and style.",
    },
    {
        id: 14,
        href: "/Office Category/Office Category (Original)/Desks/office-desk-4.jpg",
        title: "តុធ្វើការ",
        price: 395.99,
        category: "desk",
        slug: "desk-five",
        description: "An elegant desk with a sleek finish, ideal for professional or home offices.",
    },
    {
        id: 15,
        href: "/Office Category/Office Category (Original)/Decor Items/office-decor-6.jpg",
        title: "សម្ភារៈដេគ័រ",
        price: 58.99,
        category: "decorItem",
        slug: "decoritem-six",
        description: "A handcrafted decorative piece that adds personality to your workspace.",
    },
    {
        id: 16,
        href: "/Office Category/Office Category (Original)/Desk Lamps/desk-lamp-2.jpg",
        title: "អំពូលភ្លើង",
        price: 79.99,
        category: "lamp",
        slug: "lamp-three",
        description: "A modern desk lamp with a sleek design and adjustable lighting options.",
    },
    {
        id: 17,
        href: "/Office Category/Office Category (Original)/Desk Lamps/desk-lamp-4.jpg",
        title: "អំពូលភ្លើង",
        price: 69.99,
        category: "lamp",
        slug: "lamp-four",
        description: "A compact desk lamp with a stylish design, perfect for small spaces.",
    },
    {
        id: 18,
        href: "/Office Category/Office Category (Original)/Desks/office-desk-6.jpg",
        title: "តុធ្វើការ",
        price: 555.99,
        category: "desk",
        slug: "desk-six",
        description: "A premium desk designed for professionals seeking both form and function.",
    },
    {
        id: 19,
        href: "/Office Category/Office Category (Original)/Desks/office-desk-7.png",
        title: "តុធ្វើការ",
        price: 495.99,
        category: "desk",
        slug: "desk-seven",
        description: "A robust desk featuring a modern design with plenty of workspace.",
    },
    {
        id: 20,
        href: "/Office Category/Office Category (Original)/Desks/office-desk-8.jpg",
        title: "តុធ្វើការ",
        price: 675.99,
        category: "desk",
        slug: "desk-eight",
        description: "A luxurious desk that blends functionality and style, perfect for executives.",
    },
]);


    // State for selected categories and price range
    const selectedCategories = ref([1]);
    const priceRange = ref([20, 800]);


    const toggleCategory = (id) => {
        currentPage.value = 1;
        if (id === 1) {
            // If "All" is clicked, always select or deselect all
            if (selectedCategories.value.includes(1)) {
                selectedCategories.value = sidebarItems.value.map((item) => item.id); // Select all
            } else {
                selectedCategories.value = []; // Clear all selections
            }
        } else {
            // Handle individual category selection
            const index = selectedCategories.value.indexOf(id);
            if (index === -1) {
                selectedCategories.value.push(id);
            } else {
                selectedCategories.value.splice(index, 1);
            }

            // Automatically handle "All" selection or deselection
            if (
                selectedCategories.value.length === sidebarItems.value.length - 1 &&
                !selectedCategories.value.includes(1)
            ) {
                selectedCategories.value.push(1); // Select "All" when all other categories are selected
            } else if (selectedCategories.value.length < sidebarItems.value.length - 1) {
                selectedCategories.value = selectedCategories.value.filter((cat) => cat !== 1); // Deselect "All"
            }
        }
        // Ensure there’s always at least one category selected (default to "All")
        if (selectedCategories.value.length === 0) {
            selectedCategories.value = [1]; // Fallback to "All" if no category is selected
        }
    };

    // Filter on Category and Price

    const filteredProducts = computed(() => {
        let filtered = productCards.value;

        // Filter by selected categories if "All" is not selected
        if (!selectedCategories.value.includes(1)) {
            filtered = filtered.filter((card) =>
                selectedCategories.value.includes(
                    sidebarItems.value.find((item) => item.category === card.category)?.id
                )
            );
        }

        // Filter by price range
        if (priceRange.value && priceRange.value.length === 2) {
            filtered = filtered.filter(
                (card) =>
                    card.price >= priceRange.value[0] && card.price <= priceRange.value[1]
            );
        }

        return filtered;
    });

    const currentPage = ref(1);
    const itemsPerPage = 6;

    const paginatedProductCards = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredProducts.value.slice(start, end); // Use filteredProducts here
    });

    const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));


</script>



<style scoped>
    .bg-white {
        background-color: white;
    }

    .rounded-lg {
        border-radius: 1.2rem;
    }
</style>