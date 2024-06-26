import {createRouter, createWebHistory} from 'vue-router'
// import Home from "../views/HomeView.vue"
import About from "../views/AboutView.vue"
import Manage from "../views/ManageView.vue"
import useUserStore from "@/stores/user"
import Song from "@/views/Song.vue"

const Home=()=> import("@/views/HomeView.vue");

const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "about",
        path: "/about",
        component: About,
    },
    {
        path: '/manage-music',
        name: 'manage',
        component: Manage,
        beforeEnter(to, from, next) {
            console.log("Manage Route Guard");
            next();
        },
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/manage',
        redirect: {name: 'manage'}
    },
    {
        name: 'Song',
        path: '/song/:id',
        component: Song,
    },
    {
        path: '/:catchAll(.*)',
        redirect: {name: 'home'}
    }


]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass: 'text-yellow-400',
});
router.beforeEach((to, from, next) => {
    // console.log(to.meta);
    if (!to.meta.requiresAuth) {
        next();
        return
    }
    const store = useUserStore();
    if (store.userLoggedIn) {
        next();

    } else {
        next({name: "home"});
    }

});
export default router;
