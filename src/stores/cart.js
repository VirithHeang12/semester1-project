import { computed, ref, watch } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref(JSON.parse(localStorage.getItem("cart") || "[]"));

  const total = computed(() => {
    return cart.value.reduce((acc, item) => acc + item.price, 0);
  });

  const add = (item) => {
    cart.value.push(item);
  };

  const remove = (index) => {
    cart.value.splice(index, 1);
  };

  // Watch for changes in the cart and update local storage
  watch(
    cart,
    (newCart) => {
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    { deep: true },
  );

  return { cart, total, add, remove };
});
