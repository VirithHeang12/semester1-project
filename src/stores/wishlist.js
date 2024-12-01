import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useWishListStore = defineStore("wishlist", () => {
  const wishlist = ref(JSON.parse(localStorage.getItem("wishlist") || "[]"));

  const add = (item) => {
    wishlist.value.push(item);
  };

  const remove = (item) => {
    const index = wishlist.value.findIndex(
      (i) =>
        i.title === item.title &&
        i.price === item.price &&
        i.href === item.href,
    );
    if (index !== -1) {
      wishlist.value.splice(index, 1);
    }
  };

  const removeByIndex = (index) => {
    wishlist.value.splice(index, 1);
  };

  const productInWishlist = (item) => {
    return wishlist.value.some(
      (i) =>
        i.title === item.title &&
        i.price === item.price &&
        i.href === item.href,
    );
  };

  // Watch for changes in the wishlist and update local storage
  watch(
    wishlist,
    (newwishlist) => {
      localStorage.setItem("wishlist", JSON.stringify(newwishlist));
    },
    { deep: true },
  );

  return { wishlist, add, remove, productInWishlist, removeByIndex };
});
