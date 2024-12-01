<template>
    <v-container>
        <div class="bg-white" data-aos="fade-up">
            <v-container>
                <v-row class="mb-16" data-aos="fade-up">
                    <v-col cols="12">
                        <v-carousel hide-delimiters class="rounded-lg">
                            <v-carousel-item v-for="(item, i) in carouselItems" :key="`carousel-item-${i}`"
                                :src="item.src" :lazy-src="item.lazySrc" cover></v-carousel-item>
                        </v-carousel>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="4" lg="3" data-aos="fade-right">
                        <v-list lines="one" select-strategy="leaf">
                            <v-list-subheader class="!text-[20px] !font-semibold mb-4">ប្រភេទសម្ភារៈ </v-list-subheader>
                            <v-list-item v-for="item in sidebarItems" :key="`sidebar-item-${item.id}`"
                                :title="item.title" @click="toggleCategory(item.id)">
                                <template v-slot:prepend>
                                    <v-checkbox-btn
                                        :model-value="selectedCategories.includes(item.id)"></v-checkbox-btn>
                                </template>
                            </v-list-item>
                        </v-list>
                        <v-container>
                            <p class="mt-[20px] mb-[30px] text-primary-800">Filter By Price</p>
                            <v-range-slider v-model="priceRange" class="w-full" thumb-label="always" :min="20"
                                :max="800"></v-range-slider>
                        </v-container>
                    </v-col>
                    <v-col cols="12" md="8" lg="9">
                        <v-row>
                            <v-col cols="12" sm="6" md="4" v-for="(card, index) in paginatedProductCards"
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
        <v-sheet class="mx-auto" elevation="0" data-aos="fade-in">
            <h2 class=" font-bold text-[32px] text-primary-700">អ្នកប្រហែលជាចូលចិត្ត</h2>
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

    import { ref, computed } from "vue";

    // Data for carousel
    const carouselItems = ref([
        {
            src: "/slide-groups/livingrooms/livingroom-10.png",
            lazySrc: "/thumbnails/bedroom-6.jpg",
        },
        {
            src: "/slide-groups/livingrooms/livingroom-11.png",
            lazySrc: "/thumbnails/bedroom-1.jpg",
        },
        {
            src: "/slide-groups/livingrooms/living-room-banner.png",
            lazySrc: "/thumbnails/bedroom-2.jpg",
        },
    ]);

    // Sidebar filter items
    const sidebarItems = ref([
        { id: 1, title: "ទាំងអស់", category: "all" },
        { id: 2, title: "តុឈើ", category: "table" },
        { id: 3, title: "ផ្ទាំងបិទជញ្ជាំង", category: "wall" },
        { id: 4, title: "ថូផ្កា", category: "vase" },
        { id: 5, title: "ធ្នើរជាប់ជញ្ជាំង", category: "shelf" },
    ]);

    // Recommendations
    const cartRecom = ref([
        {
            src: "/slide-groups/livingrooms/livingroom-1.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
        },
        {
            src: "/slide-groups/livingrooms/livingroom-2.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
        },
        {
            src: "/slide-groups/livingrooms/livingroom-4.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
        },
        {
            src: "/slide-groups/livingrooms/livingroom-5.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
        },
        {
            src: "/slide-groups/livingrooms/livingroom-6.jpg",
            title: "បន្ទប់ទទួលភ្ញៀវ",
        },
        {
            src: "/Living room Category/Living room (Original)/Table/l-table4.jpg",
            title: "តុឈើ",
        },
        {
            src: "/Living room Category/Living room (Original)/Table/l-table11.jpg",
            title: "តុឈើ",
        },
        {
            src: "/Living room Category/Living room (Original)/Wall/pic-3.jpg",
            title: "ផ្ទាំងលំអ",
        },
        {
            src: "/Living room Category/Living room (Original)/Wall/pic-14.jpg",
            title: "ផ្ទាំងលំអ",
        },
        {
            src: "/Living room Category/Living room (Original)/Vase/d-vase9.jpg",
            title: "ថូផ្កា",
        },
        {
            src: "/Living room Category/Living room (Original)/Vase/d-vase6.jpg",
            title: "ថូផ្កា",
        },
        {
            src: "/Living room Category/Living room (Original)/Shelf/pic-3.jpg",
            title: "ធ្នើរជាប់ជញ្ជាំង",
        },
        {
            src: "/Living room Category/Living room (Original)/Shelf/pic-4.jpg",
            title: "ធ្នើរជាប់ជញ្ជាំង",
        },

    ]);


    // Product cards
    const productCards = ref([
        {
            id: 1,
            href: "/Living room Category/Living room (Original)/Table/l-table1.jpg",
            title: "តុឈើ",
            price: 309.99,
            category: "table",
            slug: "slechts-een-proeftekst-uit-het",
            description: "Slechts een proeftekst uit het drukkerij en zetterij wezen. Slechts een proeftekst uit het drukkerij en zetterij wezen.",
        },
        {
            id: 2,
            href: "/Living room Category/Living room (Original)/Vase/d-vase9.jpg",
            title: "ថូផ្កា",
            price: 99.99,
            category: "vase",
            slug: " toen-een-onbekende-drukker-een-zethaak",
            description: "Toen een onbekende drukker een zethaak van letters nam en ze door elkaar husselde om een font-catalogus te maken.",
        },
        {
            id: 3,
            href: "/Living room Category/Living room (Original)/Wall/pic-10.jpg",
            title: "ផ្ទាំងលំអ",
            price: 119.99,
            category: "wall",
            slug: "het-heeft-survived-niet-alleen-vijf-eeuwen",
            description: "Het heeft survived niet alleen vijf eeuwen, maar ook de sprong naar elektronische letterzetting, remaining.",
        },
        {
            id: 4,
            href: "/Living room Category/Living room (Original)/Table/l-table2.jpg",
            title: "តុឈើ",
            price: 209.99,
            category: "table",
            slug: "het-heeft-ook-de-overgang-naar-elektronische-letterzetting-overleefd",
            description: "Het heeft ook de overgang naar elektronische letterzetting overleefd, zonder wezenlijke veranderingen.",
        },
        {
            id: 5,
            href: "/Living room Category/Living room (Original)/Wall/pic-1.jpg",
            title: "ផ្ទាំងលំអ",
            price: 120.99,
            category: "wall",
            slug: "het-is-een-lange-gevestigde-fact",
            description: "Het is een lange gevestigde fact dat een lezer zal worden afgeleid door de leesbare inhoud van een pagina.",
        },
        {
            id: 6,
            href: "/Living room Category/Living room (Original)/Vase/d-vase3.jpg",
            title: "ថូផ្កា",
            price: 89.99,
            category: "vase",
            slug: "als-u-zich-hierover-ongemakkelijk-voelt",
            description: "Als u zich hierover ongemakkelijk voelt, kijk dan naar de gebruikelijke variaties van dit.",
        },
        {
            id: 7,
            href: "/Living room Category/Living room (Original)/Shelf/pic-2.jpg",
            title: "ធ្នើរជាប់ជញ្ជាំង",
            price: 105.99,
            category: "shelf",
            slug: "er-zijn-vele-variaties-van-passages-van",
            description: "Er zijn vele variaties van passages van Lorem Ipsum beschikbaar, maar het merendeel heeft geleden.",
        },
        {
            id: 8,
            href: "/Living room Category/Living room (Original)/Table/l-table11.jpg",
            title: "តុឈើ",
            price: 339.99,
            category: "table",
            slug: "er-zijn-vele-variaties-van-ios-eeuwen",
            description: "Er zijn vele variaties van cc passages van Lorem Ipsum beschikbaar, maar het merendeel heeft geleden.",
        },
        {
            id: 9,
            href: "/Living room Category/Living room (Original)/Shelf/pic-6.jpg",
            title: "ធ្នើរជាប់ជញ្ជាំង",
            price: 219.99,
            category: "shelf",
            slug: "soms-per-ongeluk-soms-expres",
            description: "Soms per ongeluk, soms expres (ingevoegde humor en dergelijke).",
        },
        {
            id: 10,
            href: "/Living room Category/Living room (Original)/Table/l-table3.jpg",
            title: "តុឈើ",
            price: 339.99,
            category: "table",
            slug: "zijn-vele-variaties-van-passages-van",
            description: "Er zijn vele variaties van op passages van Lorem Ipsum beschikbaar, maar het merendeel heeft geleden.",
        },
        {
            id: 11,
            href: "/Living room Category/Living room (Original)/Table/l-table4.jpg",
            title: "តុឈើ",
            price: 369.99,
            category: "table",
            slug: "voorgedefinieerde-stukken-te-herhalen-waar",
            description: "Voorgedefinieerde stukken te herhalen waar nodig, waardoor dit het internet.",
        },
        {
            id: 12,
            href: "/Living room Category/Living room (Original)/Wall/pic-2.jpg",
            title: "ផ្ទាំងលំអ",
            price: 160.99,
            category: "wall",
            slug: "het-is-een-lang-lg-een-lezer",
            description: "Het is een lang lg een lezer zal worden afgeleid door de leesbare inhoud van een pagina.",
        },
        {
            id: 13,
            href: "/Living room Category/Living room (Original)/Vase/d-vase1.jpg",
            title: "ថូផ្កា",
            price: 59.99,
            category: "vase",
            slug: "als-u-zich-hierover-io-ongemakkelijk-voelt",
            description: "Als u zich hierover io ongemakkelijk voelt, kijk dan naar de gebruikelijke variaties van dit.",
        },
        {
            id: 14,
            href: "/Living room Category/Living room (Original)/Vase/d-vase2.jpg",
            title: "ថូផ្កា",
            price: 79.99,
            category: "vase",
            slug: "boek-is-een-verhandeling-over",
            description: "Boek is een verhandeling over de theorie van ethiek, erg populair tijdens de renaissance.",
        },
        {
            id: 15,
            href: "/Living room Category/Living room (Original)/Shelf/pic-1.jpg",
            title: "ធ្នើរជាប់ជញ្ជាំង",
            price: 105.99,
            category: "shelf",
            slug: "en-is-dus-meer-dan",
            description: "En is dus meer dan 2000 jaar oud. Richard McClintock, een professor in het Latijn aan.",
        },
        {
            id: 16,
            href: "/Living room Category/Living room (Original)/Wall/pic-3.jpg",
            title: "ផ្ទាំងលំអ",
            price: 130.99,
            category: "wall",
            slug: "het-heeft-survived-niet-lolo-alleen-vijf-eeuwen",
            description: "Het heeft survived lofa niet alleen vijf eeuwen, maar ook de sprong naar elektronische letterzetting, remaining.",
        },
        {
            id: 17,
            href: "/Living room Category/Living room (Original)/Wall/pic-4.jpg",
            title: "ផ្ទាំងលំអ",
            price: 166.99,
            category: "wall",
            slug: "handvol-zinsstructuur-modellen-om",
            description: "Handvol zinsstructuur modellen om de Lorem Ipsum te genereren die nodig is.",
        },
        {
            id: 18,
            href: "/Living room Category/Living room (Original)/Wall/pic-5.jpg",
            title: "ផ្ទាំងលំអ",
            price: 126.99,
            category: "wall",
            slug: "de-gegenereerde-re-lore-tekst-is-daarom",
            description: "De gegenereerde rr lore tekst is daarom altijd vrij van herhaling, ingevoegde humor en dergelijke.",
        },
        {
            id: 19,
            href: "/Living room Category/Living room (Original)/Vase/d-vase4.jpg",
            title: "ថូផ្កា",
            price: 69.99,
            category: "vase",
            slug: "te-herhalen-waar-nodig-zodat-dit",
            description: "Te herhalh waar nodig, zodat dit het internet standaard model over internet.",
        },
        {
            id: 20,
            href: "/Living room Category/Living room (Original)/Vase/d-vase5.jpg",
            title: "ថូផ្កា",
            price: 89.99,
            category: "vase",
            slug: "heeft-overleefd-er-niet-alleen-vijf-eeuwen",
            description: "Heeft overleefd er niet alleen vijf eeuwen, maar ook de sprong naar elektronische letterzetting, remaining.",
        },
        {
            id: 21,
            href: "/Living room Category/Living room (Original)/Shelf/pic-3.jpg",
            title: "ធ្នើរជាប់ជញ្ជាំង",
            price: 305.55,
            category: "shelf",
            slug: "desktop-publishing-software-zoals-ldus",
            description: "Desktop publishing software zoals ldus PageMaker waaronder versies van Lorem Ipsum.",
        },
        {
            id: 22,
            href: "/Living room Category/Living room (Original)/Shelf/pic-4.jpg",
            title: "ធ្នើរជាប់ជញ្ជាំង",
            price: 205.98,
            category: "shelf",
            slug: "de-gegenereerde-col-lorem-tekst-is-daarom",
            description: "De gegenereerde col lorem tekst is daarom altijd vrij van herhaling, ingevoegde humor en dergelijke.",
        },
        {
            id: 23,
            href: "/Living room Category/Living room (Original)/Wall/pic-7.jpg",
            title: "ផ្ទាំងលំអ",
            price: 176.99,
            category: "wall",
            slug: "dat-het-uit-een-min-of-meer",
            description: "Dat het uit een min of meer normale verdeling van letters bestaat.",
        },
        {
            id: 24,
            href: "/Living room Category/Living room (Original)/Wall/pic-8.png",
            title: "ផ្ទាំងលំអ",
            price: 166.99,
            category: "wall",
            slug: "het-gebruik-van-lorem-ipsum-als-row-model",
            description: "Het gebruik van Lorem Ipsum als row model heeft een redelijk normale verdeling van letters.",
        },
        {
            id: 25,
            href: "/Living room Category/Living room (Original)/Wall/pic-9.jpg",
            title: "ផ្ទាំងលំអ",
            price: 136.99,
            category: "wall",
            slug: "en-letters-in-saa-opposed-gebruik",
            description: "En letters in saa opposed gebruik van letters in saa opposed gebruik van letters in saa.",
        },
        {
            id: 26,
            href: "/Living room Category/Living room (Original)/Vase/d-vase7.jpg",
            title: "ថូផ្កា",
            price: 69.99,
            category: "vase",
            slug: "het-heeft-overleefd-boxi-niet-alleen-vijf-eeuwen",
            description: "Het heeft overleefd boxi niet alleen vijf eeuwen, maar ook de sprong naar elektronische letterzetting, remaining.",
        },
        {
            id: 27,
            href: "/Living room Category/Living room (Original)/Vase/d-vase8.jpg",
            title: "ថូផ្កា",
            price: 79.99,
            category: "vase",
            slug: "het-heeft-ook-paragon-de-overgang",
            description: "Het heeft ook paragon de overgang naar elektronische letterzetting overleefd, zonder wezenlijke veranderingen.",
        },
        {
            id: 28,
            href: "/Living room Category/Living room (Original)/Wall/pic-11.jpg",
            title: "ផ្ទាំងលំអ",
            price: 176.99,
            category: "wall",
            slug: "handvol-zinsstructuur-akai-modellen-om-de-lorem-ipsum",
            description: "Handvol zinsstructuur akai modellen om de Lorem Ipsum te genereren die nodig is.",
        },
        {
            id: 29,
            href: "/Living room Category/Living room (Original)/Wall/pic-14.jpg",
            title: "ផ្ទាំងលំអ",
            price: 226.99,
            category: "wall",
            slug: "de-gegenereerde-estees-lore-tekst-is-daarom",
            description: "De gegenereerde estees lore tekst is daarom altijd vrij van herhaling, ingevoegde humor en dergelijke.",
        },
        {
            id: 30,
            href: "/Living room Category/Living room (Original)/Wall/pic-15.jpg",
            title: "ផ្ទាំងលំអ",
            price: 236.99,
            category: "wall",
            slug: "te-herhalen-waar-bruno-nodig-zodat-dit",
            description: "Te herhalen waar bruno nodig, zodat dit het internet standaard model over internet.",
        },
        {
            id: 31,
            href: "/Living room Category/Living room (Original)/Shelf/pic-4.jpg",
            title: "ធ្នើរជាប់ជញ្ជាំង",
            price: 205.98,
            category: "shelf",
            slug: "desktop-publishing-ling-software-zoals-ldus",
            description: "Desktop publishing ling software zoals ldus PageMaker waaronder versies van Lorem Ipsum.",
        },
        {
            id: 32,
            href: "/Living room Category/Living room (Original)/Vase/d-vase11.jpg",
            title: "ថូផ្កា",
            price: 69.99,
            category: "vase",
            slug: "de-gegenereerde-aamon-col-lorem-tekst-is-daarom",
            description: "De gegenereerde aamon col lorem tekst is daarom altijd vrij van herhaling, ingevoegde humor en dergelijke.",
        },
        {
            id: 33,
            href: "/Living room Category/Living room (Original)/Vase/d-vase12.jpg",
            title: "ថូផ្កា",
            price: 59.99,
            category: "vase",
            slug: "te-herhalen-waar-aldous-nodig-zodat-dit",
            description: "Te herhallen waar aldous nodig, zodat dit het internet standaard model over internet.",
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
