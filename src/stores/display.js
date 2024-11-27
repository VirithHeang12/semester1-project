import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useDisplay } from 'vuetify/lib/framework.mjs';

export const useDisplayStore = defineStore('display', () => {
    const display = useDisplay();
    const isMobile = computed(() => display.xs.value);

    return { isMobile };
})
