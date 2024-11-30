<template>
  <v-container>
    <div class="bg-white" data-aos="fade-up">
      <v-container>
        <v-row class="mb-16" data-aos="fade-up">
          <v-col cols="12">
            <v-carousel
              :min-height="100"
              :max-height="100"
              hide-delimiters
              class="rounded-lg"
            >
              <v-carousel-item
                ass="item"
                v-for="(item, i) in carouselItems"
                :key="`carousel-item-${i}`"
                :src="item.src"
                :lazy-src="item.lazySrc"
                cover
              >
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3" data-aos="fade-right">
            <v-list lines="one" select-strategy="leaf">
              <v-list-subheader>Product Category</v-list-subheader>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="isAll" label="ទាំងអស់"></v-checkbox>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="isBed" label="គ្រែគេង"></v-checkbox>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="isCloset" label="ទូ"></v-checkbox>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="isDesk" label="តុ"></v-checkbox>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="isMirror" label="កញ្ចក់"></v-checkbox>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-container>
              <p class="mb-5">Filter By Price</p>
              <v-range-slider
                thumb-label="always"
                :min="0"
                :max="2000"
                v-model="price"
                class="w-full"
              ></v-range-slider>
            </v-container>
          </v-col>

          <v-col cols="12" md="9">
            <v-row>
              <v-col
                cols="12"
                md="4"
                v-for="(card, index) in computedProductCards"
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
      <h2
        class="text-lg font-bold min-[500px]:text-[1.5rem] min-[600px]:text-[2rem]"
      >
        អ្នកប្រហែលជាចូលចិត្ត
      </h2>
      <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item
          v-for="(cartrecom, n) in cartRecom"
          :key="`cart-recom-${n}`"
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

import { computed, ref, watch } from "vue";

const isAll = ref(true);
const isBed = ref(false);
const isCloset = ref(false);
const isDesk = ref(false);
const isMirror = ref(false);
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
    href: "/bedrooms/Bed/pic-5.png",
    title: "គ្រែគេង",
    price: 109.99,
    category: "bed",
  },
  {
    href: "/bedrooms/Closet/pic-5.png",
    title: "ទូ",
    price: 119.99,
    category: "closet",
  },
  {
    href: "/bedrooms/Bed/pic-3.png",
    price: "1000.99",
    title: "គ្រែគេង",
    category: "bed",
  },
  {
    href: "/bedrooms/Mirror/pic-5.png",
    title: "កញ្ចក់",
    price: 100.99,
    category: "mirror",
  },
  {
    href: "/bedrooms/Desk/pic-12.png",
    price: 250.99,
    title: "តុ",
    category: "desk",
  },
  {
    href: "/slide-groups/bedrooms/bedroom-1.jpg",
    title: "គ្រែគេង",
    price: 999.99,
    category: "bed",
  },
  {
    href: "/bedrooms/Mirror/pic-4.png",
    title: "កញ្ចក់",
    price: 99.99,
    category: "mirror",
  },
  {
    href: "/bedrooms/Desk/pic-1.png",
    price: 299.99,
    title: "តុ",
    category: "desk",
  },
  {
    href: "/bedrooms/Bed/pic-10.png",
    title: "គ្រែគេង",
    price: 599.99,
    category: "bed",
  },
]);

watch(isAll, (newVal) => {
  if (newVal) {
    isBed.value = false;
    isCloset.value = false;
    isDesk.value = false;
    isMirror.value = false;
  }
});

watch(isBed, (newVal) => {
  if (newVal) {
    isAll.value = false;
  }
});

watch(isCloset, (newVal) => {
  if (newVal) {
    isAll.value = false;
  }
});

watch(isDesk, (newVal) => {
  if (newVal) {
    isAll.value = false;
  }
});
watch(isMirror, (newVal) => {
  if (newVal) {
    isAll.value = false;
  }
});

const computedProductCards = computed(() => {
  return productCards.value.filter((product) => {
    const products = [];

    if (
      isAll.value == false &&
      isBed.value == false &&
      isDesk.value == false &&
      isMirror.value == false &&
      isCloset.value == false
    ) {
      isAll.value = true;
    }
    if (price.value.length > 0) {
      products.push(
        product.price >= price.value[0] && product.price <= price.value[1],
      );
    }

    if (isBed.value) {
      products.push(product.category === "bed");
    }

    if (isCloset.value) {
      products.push(product.category === "closet");
    }
    if (isDesk.value) {
      products.push(product.category === "desk");
    }
    if (isMirror.value) {
      products.push(product.category === "mirror");
    }
    return products.length === 0 || products.includes(true);
  });
});

// Recommendations
const cartRecom = ref([
  {
    src: "/slide-groups/bedrooms/bedroom-3.jpg",
    title: "គ្រែគេង",
  },
  {
    src: "/bedrooms/bedside table1.jpg",
    title: "តុ",
  },
  {
    src: "/bedrooms/Closet/pic-5.png",
    title: "ទូ",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-6.jpg",
    title: "គ្រែគេង",
  },
  {
    src: "/bedrooms/Desk/pic-1.png",
    title: "តុ",
  },
  {
    src: "/bedrooms/Closet/pic-8.png",
    title: "ទូ",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-4.jpg",
    title: "គ្រែគេង",
  },
  {
    src: "/bedrooms/Mirror/pic-5.png",
    title: "កញ្ចក់",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-1.jpg",
    title: "គ្រែគេង",
  },
  {
    src: "/bedrooms/Mirror/pic-9.png",
    title: "កញ្ចក់",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-5.jpg",
    title: "គ្រែងគេង",
  },
  {
    src: "/bedrooms/Desk/pic-5.png",
    title: "តុ",
  },
  {
    src: "/bedrooms/Closet/pic-4.png",
    title: "ទូ",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-6.jpg",
    title: "គ្រែងគេង",
  },
  {
    src: "/bedrooms/Mirror/pic-4.png",
    title: "កញ្ចក់",
  },
  {
    src: "/bedrooms/Desk/pic-10.png",
    title: "តុ",
  },
  {
    src: "/bedrooms/Closet/pic-7.png",
    title: "ទូ",
  },
  {
    src: "/bedrooms/Mirror/pic-8.png",
    title: "កញ្ចក់",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-5.jpg",
    title: "គ្រែងគេង",
  },
  {
    src: "/bedrooms/Desk/pic-6.png",
    title: "តុ",
  },
  {
    src: "/bedrooms/Closet/pic-5.png",
    title: "ទូ",
  },
  {
    src: "/bedrooms/Mirror/pic-6.png",
    title: "កញ្ចក់",
  },
  {
    src: "/slide-groups/bedrooms/bedroom-5.jpg",
    title: "គ្រែងគេង",
  },
  {
    src: "/bedrooms/Desk/pic-8.png",
    title: "តុ",
  },
  {
    src: "/bedrooms/Closet/pic-8.png",
    title: "ទូ",
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
