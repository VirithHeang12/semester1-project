import { defineStore } from "pinia";
import { onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
    const router = useRouter();

    const isLoggedIn = ref(localStorage.getItem("user") !== null);

    const updateLoginState = () => {
        isLoggedIn.value = localStorage.getItem("user") !== null;
    };

    window.addEventListener('storage', updateLoginState);

    onUnmounted(() => {
        window.removeEventListener('storage', updateLoginState);
    });

    const login = async (email) => {
        const user = { email };
        localStorage.setItem("user", JSON.stringify(user));
        await router.push({ name: "home" });
        window.location.reload();
    };

    const register = async (email) => {
        const user = { email };
        localStorage.setItem("user", JSON.stringify(user));
        await router.push({ name: "home" });
    };

    const logout = async () => {
        localStorage.removeItem("user");
        await router.push({ name: "home" });
        window.location.reload();
    }

    return { login, isLoggedIn, logout, register };
});