<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
    <Header />
    <main class="main">
        <router-view />
    </main>
</template>

<style scoped lang="css">
.main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 16px;
    align-items: center;
    @media (max-width: 340px) {
        padding: 0;
    }
}
</style>
