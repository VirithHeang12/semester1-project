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
    href: "/Living room Category/Living room (Original)/Table/l-table1.jpg",
    title: "តុឈើ",
    price: 309.99,
    category: "table",
  },
  {
    href: "/Living room Category/Living room (Original)/Vase/d-vase9.jpg",
    title: "ថូផ្កា",
    price: 99.99,
    category: "vase",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-10.jpg",
    title: "ផ្ទាំងលំអ",
    price: 119.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Table/l-table2.jpg",
    title: "តុឈើ",
    price: 209.99,
    category: "table",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-1.jpg",
    title: "ផ្ទាំងលំអ",
    price: 120.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Vase/d-vase3.jpg",
    title: "ថូផ្កា",
    price: 89.99,
    category: "vase",
  },
  {
    href: "/Living room Category/Living room (Original)/Shelf/pic-2.jpg",
    title: "ធ្នើរជាប់ជញ្ជាំង",
    price: 105.99,
    category: "shelf",
  },
  {
    href: "/Living room Category/Living room (Original)/Table/l-table11.jpg",
    title: "តុឈើ",
    price: 339.99,
    category: "table",
  },
  {
    href: "/Living room Category/Living room (Original)/Shelf/pic-6.jpg",
    title: "ធ្នើរជាប់ជញ្ជាំង",
    price: 219.99,
    category: "shelf",
  },
  {
    href: "/Living room Category/Living room (Original)/Table/l-table3.jpg",
    title: "តុឈើ",
    price: 339.99,
    category: "table",
  },
  {
    href: "/Living room Category/Living room (Original)/Table/l-table4.jpg",
    title: "តុឈើ",
    price: 369.99,
    category: "table",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-2.jpg",
    title: "ផ្ទាំងលំអ",
    price: 160.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Vase/d-vase1.jpg",
    title: "ថូផ្កា",
    price: 59.99,
    category: "vase",
  },
  {
    href: "/Living room Category/Living room (Original)/Vase/d-vase2.jpg",
    title: "ថូផ្កា",
    price: 79.99,
    category: "vase",
  },
  {
    href: "/Living room Category/Living room (Original)/Shelf/pic-1.jpg",
    title: "ធ្នើរជាប់ជញ្ជាំង",
    price: 105.99,
    category: "shelf",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-3.jpg",
    title: "ផ្ទាំងលំអ",
    price: 130.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-4.jpg",
    title: "ផ្ទាំងលំអ",
    price: 166.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-5.jpg",
    title: "ផ្ទាំងលំអ",
    price: 126.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Vase/d-vase4.jpg",
    title: "ថូផ្កា",
    price: 69.99,
    category: "vase",
  },
  {
    href: "/Living room Category/Living room (Original)/Vase/d-vase5.jpg",
    title: "ថូផ្កា",
    price: 89.99,
    category: "vase",
  },
  {
    href: "/Living room Category/Living room (Original)/Shelf/pic-3.jpg",
    title: "ធ្នើរជាប់ជញ្ជាំង",
    price: 305.55,
    category: "shelf",
  },
  {
    href: "/Living room Category/Living room (Original)/Shelf/pic-4.jpg",
    title: "ធ្នើរជាប់ជញ្ជាំង",
    price: 205.98,
    category: "shelf",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-7.jpg",
    title: "ផ្ទាំងលំអ",
    price: 176.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-8.png",
    title: "ផ្ទាំងលំអ",
    price: 166.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-9.jpg",
    title: "ផ្ទាំងលំអ",
    price: 136.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Vase/d-vase7.jpg",
    title: "ថូផ្កា",
    price: 69.99,
    category: "vase",
  },
  {
    href: "/Living room Category/Living room (Original)/Vase/d-vase8.jpg",
    title: "ថូផ្កា",
    price: 79.99,
    category: "vase",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-11.jpg",
    title: "ផ្ទាំងលំអ",
    price: 176.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-14.jpg",
    title: "ផ្ទាំងលំអ",
    price: 226.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Wall/pic-15.jpg",
    title: "ផ្ទាំងលំអ",
    price: 236.99,
    category: "wall",
  },
  {
    href: "/Living room Category/Living room (Original)/Shelf/pic-4.jpg",
    title: "ធ្នើរជាប់ជញ្ជាំង",
    price: 205.98,
    category: "shelf",
  },
  {
    href: "/Living room Category/Living room (Original)/Vase/d-vase11.jpg",
    title: "ថូផ្កា",
    price: 69.99,
    category: "vase",
  },
  {
    href: "/Living room Category/Living room (Original)/Vase/d-vase12.jpg",
    title: "ថូផ្កា",
    price: 59.99,
    category: "vase",
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
