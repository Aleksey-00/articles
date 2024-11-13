<script setup>
import Navs from "@/components/Navs.vue";
import {useRouter} from "vue-router";
import {navs} from "@/navs/index.js";
const router = useRouter()
function gotoHome() {
    navs.value =  navs.value.map(el => ({ ...el, active: false }))
    navs.value[0].active = true
    router.push('/')
}
</script>

<template>
    <div class="header">
        <div class="header__wrapper">
            <a class="header__title" :href="'/'" @click.prevent="gotoHome">
                Статейник
            </a>
            <div class="header__navs">
                <Navs />
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
.header {
    position: sticky;
    background: #fffefe;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
}
.header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px;
    @media (max-width: 600px) {
      flex-direction: column;
    }
}
</style>
