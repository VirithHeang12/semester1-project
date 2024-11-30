<template>
  <v-container>
    <div class="bg-white" data-aos="fade-up">
      <v-container>
        <v-row class="mb-16" data-aos="fade-up">
          <v-col cols="12">
            <v-carousel hide-delimiters class="rounded-lg">
              <v-carousel-item v-for="(item, i) in carouselItems" :key="`carousel-item-${i}`" :src="item.src"
                :lazy-src="item.lazySrc" cover></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4" lg="3" data-aos="fade-right">
            <v-list lines="one" select-strategy="leaf">
              <v-list-subheader class="!text-[20px] !font-semibold mb-4">ប្រភេទសម្ភារៈ </v-list-subheader>
              <v-list-item v-for="item in sidebarItems" :key="`sidebar-item-${item.id}`" :title="item.title"
                @click="toggleCategory(item.id)">
                <template v-slot:prepend>
                  <v-checkbox-btn :model-value="selectedCategories.includes(item.id)"></v-checkbox-btn>
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
              <v-col cols="12" sm="6" md="4" v-for="(card, index) in paginatedProductCards" :key="`product-card-${index}`"
                data-aos="fade-up" :data-aos-delay="index * 100">
                <a href="#">
                  <the-category-card :title="card.title" :price="card.price" :href="card.href"></the-category-card>
                </a>
              </v-col>
            </v-row>
            <v-row class="justify-content-center">
              <!-- Pagination Controls -->
              <v-pagination v-model="currentPage" :length="totalPages" total-visible="5" color="primary-800"
                class="mt-4" />
            </v-row>
          </v-col>

        </v-row>
      </v-container>
    </div>
    <v-sheet class="mx-auto" elevation="0" data-aos="fade-in">
      <h2 class=" font-bold text-[32px] text-primary-700">អ្នកប្រហែលជាចូលចិត្ត</h2>
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


import { ref, computed } from "vue";

// Data for carousel
const carouselItems = ref([
  {
    src: "/slide-groups/kitchens/kitchen-1.png",
    lazySrc: "/thumbnails/bedroom-6.jpg",
  },
  {
    src: "/slide-groups/kitchens/kitchen-2.png",
    lazySrc: "/thumbnails/bedroom-1.jpg",
  },
  {
    src: "/slide-groups/kitchens/kitchen-3.png",
    lazySrc: "/thumbnails/bedroom-2.jpg",
  },
]);

// Sidebar filter items
const sidebarItems = ref([
  { id: 1, title: "ទាំងអស់", category: "all" },
  { id: 2, title: "ទូរ", category: "cabinet" },
  { id: 3, title: "តុ", category: "islandTable" },
  { id: 4, title: "ធ្នើរ", category: "shelf" },
  { id: 5, title: "តុបាយ", category: "table" },
]);

// Recommendations
const cartRecom = ref([
  {
    src: "/slide-groups/kitchens/diningroom-1.jpg",
    title: "តុបាយ",
  },
  {
    src: "/slide-groups/kitchens/diningroom-2.jpg",
    title: "តុបាយ",
  },
  {
    src: "/slide-groups/kitchens/diningroom-3.jpg",
    title: "តុបាយ",
  },
  {
    src: "/slide-groups/kitchens/diningroom-4.jpg",
    title: "តុបាយ",
  },
  {
    src: "/slide-groups/kitchens/diningroom-5.jpg",
    title: "តុបាយ",
  },
  {
    src: "/slide-groups/kitchens/diningroom-6.jpg",
    title: "តុបាយ",
  },
  {
    src: "/slide-groups/kitchens/diningroom-7.jpg",
    title: "តុបាយ",
  },
 
 

]);


// Product cards
const productCards = ref([
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Cabinet/cabinet1.png",
    title: "ទូរ",
    price: 309.99,
    category: "cabinet",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Island Table/pic2.png",
    title: "តុ",
    price: 99.99,
    category: "islandTable",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Shelf/pic1.png",
    title: "ធ្នើរ",
    price: 119.99,
    category: "shelf",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Table/d-table1.jpg",
    title: "តុបាយ",
    price: 209.99,
    category: "table",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Cabinet/cabinet2.png",
    title: "ទូរ",
    price: 409.99,
    category: "cabinet",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Island Table/pic3.png",
    title: "តុ",
    price: 359.99,
    category: "islandTable",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Shelf/pic2.png",
    title: "ធ្នើរ",
    price: 99.99,
    category: "shelf",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Table/d-table2.jpg",
    title: "តុបាយ",
    price: 259.99,
    category: "table",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Cabinet/cabinet3.png",
    title: "ទូរ",
    price: 409.99,
    category: "cabinet",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Island Table/pic4.png",
    title: "តុ",
    price: 699.99,
    category: "islandTable",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Shelf/pic3.png",
    title: "ធ្នើរ",
    price: 139.99,
    category: "shelf",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Table/d-table3.jpg",
    title: "តុបាយ",
    price: 449.99,
    category: "table",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Cabinet/cabinet4.png",
    title: "ទូរ",
    price: 339.99,
    category: "cabinet",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Island Table/pic5.png",
    title: "តុ",
    price: 499.99,
    category: "islandTable",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Shelf/pic4.png",
    title: "ធ្នើរ",
    price: 139.99,
    category: "shelf",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Table/d-table4.jpg",
    title: "តុបាយ",
    price: 239.99,
    category: "table",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Cabinet/cabinet5.png",
    title: "ទូរ",
    price: 109.99,
    category: "cabinet",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Island Table/pic6.png",
    title: "តុ",
    price: 299.99,
    category: "islandTable",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Shelf/pic5.png",
    title: "ធ្នើរ",
    price: 119.99,
    category: "shelf",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Table/d-table5.jpg",
    title: "តុបាយ",
    price: 209.99,
    category: "table",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Cabinet/cabinet6.png",
    title: "ទូរ",
    price: 309.99,
    category: "cabinet",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Island Table/pic7.png",
    title: "តុ",
    price: 99.99,
    category: "islandTable",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Shelf/pic6.png",
    title: "ធ្នើរ",
    price: 119.99,
    category: "shelf",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Table/d-table6.jpg",
    title: "តុបាយ",
    price: 209.99,
    category: "table",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Cabinet/cabinet7.png",
    title: "ទូរ",
    price: 309.99,
    category: "cabinet",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Island Table/pic8.png",
    title: "តុ",
    price: 99.99,
    category: "islandTable",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Shelf/pic7.png",
    title: "ធ្នើរ",
    price: 119.99,
    category: "shelf",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Table/d-table7.jpg",
    title: "តុបាយ",
    price: 209.99,
    category: "table",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Cabinet/cabinet8.png",
    title: "ទូរ",
    price: 309.99,
    category: "cabinet",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Island Table/pic9.png",
    title: "តុ",
    price: 99.99,
    category: "islandTable",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Shelf/pic8.png",
    title: "ធ្នើរ",
    price: 119.99,
    category: "shelf",
  },
  {
    href: "/Dining room & Kitchen Category/Dining room & Kitchen Category (Orignal)/Table/d-table8.jpg",
    title: "តុបាយ",
    price: 209.99,
    category: "table",
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
