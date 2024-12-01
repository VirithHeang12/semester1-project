import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";

export const useWishListStore = defineStore("wishlist", () => {
  const wishlist = ref(JSON.parse(localStorage.getItem("wishlist") || "[]"));

  const total = computed(() => {
    return wishlist.value.reduce((acc, item) => acc + item.price, 0);
  });

  const add = (item) => {
    wishlist.value.push(item);
  };

  const remove = (index) => {
    wishlist.value.splice(index, 1);
  };

  // Watch for changes in the wishlist and update local storage
  watch(
    wishlist,
    (newwishlist) => {
      localStorage.setItem("wishlist", JSON.stringify(newwishlist));
    },
    { deep: true },
  );

  return { wishlist, total, add, remove };
});
