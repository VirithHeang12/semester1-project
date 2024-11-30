import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useDisplayStore = defineStore('cart', () => {
    const cart = ref([]);

    const total = computed(() => {
        return cart.value.reduce((acc, item) => acc + item.price, 0);
    });

    const add = (item) => {
        cart.value.push(item);
    };

    const remove = (index) => {
        cart.value.splice(index, 1);
    };

    return { cart, total, add, remove };
})
