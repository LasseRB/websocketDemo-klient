import {createRouter, createWebHistory} from 'vue-router'
import WelcomeScreen from "@/views/WelcomeScreen.vue";
import Krigszone from "@/views/Krigszone.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: WelcomeScreen
        },
        {
            path: '/krigszone',
            name: 'zone',
            component: Krigszone
        },
    ]
})

export default router
