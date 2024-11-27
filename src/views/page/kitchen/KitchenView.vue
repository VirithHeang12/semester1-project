<template>
    <v-container>
      <div class="bg-white" data-aos="fade-up">
        <v-container>
          <v-row class="mb-16" data-aos="fade-up">
            <v-col cols="12">
              <v-carousel hide-delimiters class="rounded-lg">
                <v-carousel-item
                  v-for="(item, i) in carouselItems"
                  :key="`carousel-item-${i}`"
                  :src="item.src"
                  cover
                ></v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="3" data-aos="fade-right">
              <v-list lines="one" select-strategy="leaf">
                <v-list-subheader>Product Category</v-list-subheader>
                <v-list-item
                  v-for="item in sidebarItems"
                  :key="`sidebar-item-${item.id}`"
                  :title="item.title"
                >
                  <template v-slot:prepend="{ isSelected }">
                    <v-list-item-action start>
                      <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
                    </v-list-item-action>
                  </template>
                </v-list-item>
              </v-list>
              <v-container>
                <p class="mb-5">Filter By Price</p>
                <v-range-slider class="w-full"></v-range-slider>
              </v-container>
            </v-col>
  
            <v-col cols="12" md="9">
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                  v-for="(card, index) in productCards"
                  :key="`product-card-${index}`"
                  data-aos="fade-up"
                  :data-aos-delay="index * 100"
                >
                  <a href="#">
                    <the-category-card
                      :title="card.title"
                      :price="card.price"
                      :href="card.href"
                    ></the-category-card>
                  </a>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-sheet class="mx-auto" elevation="0" data-aos="fade-in">
        <h2 class="text-lg font-bold">អ្នកប្រហែលជាចូលចិត្ត</h2>
        <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item
            v-for="(cartrecom, n) in cartRecom"
            :key="`cart-recom-${n}`"
            data-aos="zoom-in"
          >
            <the-recommendation-card
              :src="cartrecom.src"
              :title="cartrecom.title"
            ></the-recommendation-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
  </template>
  
  <script setup>
  import TheCategoryCard from "@/components/cards/TheCategoryCard.vue";
  import TheRecommendationCard from "@/components/cards/TheRecommendationCard.vue";
  
  import { ref, onMounted, nextTick } from "vue";
  import AOS from "aos";
  import "aos/dist/aos.css";
  
  // Initialize AOS animations
  onMounted(() => {
    AOS.init({ duration: 1000 });
  });
  
  // Refresh AOS on DOM updates
  nextTick(() => {
    AOS.refresh();
  });
  
  // Data for carousel
  const carouselItems = ref([
    {
      src: "/slide-groups/kitchens/sunan1.jpg",
    },
    {
      src: "/slide-groups/kitchens/susan2.jpg",
    },
    {
      src: "/slide-groups/kitchens/susan3.jpg",
    },
    {
      src: "/slide-groups/kitchens/susan4.jpg",
    }
  ]);
  
  // Sidebar filter items
  const sidebarItems = ref([
    { id: 1, title: "All", checked: false },
    { id: 2, title: "Cookwave", checked: false },
    { id: 3, title: "Utensils", checked: false },
    { id: 3, title: "Appliances", checked: false },
    { id: 4, title: "Storage", checked: false},
    { id: 5, title: "Others", checked: false },
  ]);
  
  // Product cards
  const productCards = ref([
    {
      href: "/slide-groups/kitchens/pic1.png",
      title: "Modern Cabinet",
      price: "149.99$",
    },
    {
      href: "/slide-groups/kitchens/Maskgroup1.png",
      title: "Dinning Table",
      price: "109.99$",
    },
    {
      href: "/slide-groups/kitchens/maskgroup2.png",
      price: "129.99$",
      title: "Modern Dinning",
    },
    {
      href: "/slide-groups/kitchens/pic7.png",
      title: "Island Table",
      price: "159.99$",
    },
    {
      href: "/slide-groups/kitchens/pic1.png",
      price: "79.99$",
      title: "Shelf",
    },
    {
      href: "/slide-groups/kitchens/pic3.png",
      title: "Cart Table",
      price: "109.99$",
    },
  ]);
  
  // Recommendations
  const cartRecom = ref([
    {
      src: "/slide-groups/kitchens/show/Cozinha.jpg",
      title: "Cozinha",
    },
    {
      src: "/slide-groups/kitchens/show/diskrake.jpg",
      title: "Disk Rake",
    },
    {
      src: "/slide-groups/kitchens/show/fridege.jpg",
      title: "Fridege",
    },
    {
      src: "/slide-groups/kitchens/show/Fryer.jpg",
      title: "Fryer",
    },
    {
      src: "/slide-groups/kitchens/show/kitchensink.jpg",
      title: "Kitchen Sink",
    },
    {
      src: "/slide-groups/kitchens/show/knifeset.jpg",
      title: "Knife Set",
    },
    {
      src: "/slide-groups/kitchens/show/microwave.jpg",
      title: "Microwave",
    },
    {
      src: "/slide-groups/kitchens/show/mixer.jpg",
      title: "Mattresses",
    },
    {
      src: "/slide-groups/kitchens/show/Stove.jpg",
      title: "Stove",
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
  