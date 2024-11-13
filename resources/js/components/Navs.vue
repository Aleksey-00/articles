<script setup lang="js">
import {useRouter} from "vue-router";
import { navs } from "@/navs/index.js";
const router = useRouter()
function handleRoutes(link) {
    const currentNavIndex = navs.value.findIndex((el) => el.to === link)
    navs.value = navs.value.map((el) => ({
        ...el,
        active: false
    }))
    navs.value[currentNavIndex].active = true
    router.push(link)
}
</script>

<template>
    <div class="nav-links">
        <div class="nav-links__wrapper" v-if="navs.length">
            <a
                v-for="nav in navs"
                :href="nav.to"
                :key="nav.id"
                @click.prevent="handleRoutes(nav.to)"
                :class="{'router-link-active': nav.active}"
            >
                {{ nav.name }}
            </a>
        </div>
    </div>
</template>

<style scoped lang="css">
.nav-links {
    color: #5b6772;
}
.nav-links__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    @media (max-width: 340px) {
        flex-direction: column;
    }
}
.router-link-active {
    text-decoration: underline;
    text-decoration-color: #6969dd;
    text-underline-offset: 7px;
    color: #000000;
}
</style>
