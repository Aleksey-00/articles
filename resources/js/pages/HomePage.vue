<script setup lang="js">
 import { onMounted } from 'vue'
 import {useMainArticles} from "@/composition/useMainArticles/index.js";
 import Loader from "@/components/Loader.vue";
 import ArticlesCard from "@/components/ArticlesCard.vue";
 const { loading, isError, articles, fetchMainArticles} = useMainArticles();

 onMounted(async () => {
     await fetchMainArticles();
 })
</script>

<template>
    <div class="home-page__flex" v-if="isError || loading">
        <Loader
            v-if="loading"
            :is-loading="loading"
        />
        <p v-if="isError" class="home-page__error">
            Не удалось получить данные с сервера
        </p>
    </div>
    <div class="home-page" v-else>
        <RouterLink
            v-for="article in articles"
            :key="article.id"
            :to="`/news/${article.slug}`"
        >
            <ArticlesCard
                :article="article"
            />
        </RouterLink>
    </div>
</template>

<style scoped lang="css">
.home-page {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, max-content));
    gap: 16px;
    width: 100%;
    margin-top: 20px;
}
.home-page__flex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
}
</style>
