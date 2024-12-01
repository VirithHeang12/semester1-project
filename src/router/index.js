import { useAuthStore } from "@/stores/auth";
import HomeView from "@/views/page/home/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/page/about/AboutView.vue"),
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("../views/page/contact/ContactView.vue"),
        },
        {
            path: "/wishlist",
            name: "wishlist",
            component: () => import("../views/page/wishlist/WishListView.vue"),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/cart",
            name: "cart",
            component: () => import("../views/page/addToCart/AddToCartView.vue"),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: "/categories",
            name: "categories",
            children: [
                {
                    path: "kitchen",
                    name: "kitchen",
                    component: () => import("../views/page/kitchen/KitchenView.vue"),
                },
                {
                    path: "livingroom",
                    name: "livingroom",
                    component: () =>
                        import("../views/page/livingroom/LivingRoomView.vue"),
                },
                {
                    path: "bedroom",
                    name: "bedroom",
                    component: () => import("../views/page/bedroom/BedroomView.vue"),
                },
                {
                    path: "office",
                    name: "office",
                    component: () => import("../views/page/office/OfficeView.vue"),
                },
                {
                    path: "outdoor",
                    name: "outdoor",
                    component: () => import("../views/page/outdoor/OutdoorView.vue"),
                },
                {
                    path: "lighting",
                    name: "lighting",
                    component: () => import("../views/page/lighting/LightingView.vue"),
                },
            ],
        },
        {
            path: "/auth/login",
            name: "login",
            component: () => import("../views/page/authentication/LoginView.vue"),
        },
        {
            path: "/auth/register",
            name: "register",
            component: () => import("../views/page/authentication/RegisterView.vue"),
        },
        {
            path: "/details/:category/:id/:slug",
            name: "details",
            component: () => import("../views/page/details/DetailsView.vue"),
            meta: {
                requiresAuth: true,
            }
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },

});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    if (to.name === "register" && authStore.isLoggedIn) {
        next({ name: "home" });
        return;
    }

    if (to.name === "login" && authStore.isLoggedIn) {
        next({ name: "home" });
        return;
    }

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!authStore.isLoggedIn) {
            next({ name: "login" });
        } else {
            next();
        }
    } else {
        next();
    }
});




export default router;
