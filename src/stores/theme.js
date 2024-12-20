import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    const theme = ref('light');

    function toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
    }
    
    return { theme, toggleTheme };
})
