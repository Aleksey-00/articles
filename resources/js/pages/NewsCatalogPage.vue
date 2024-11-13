<script setup lang="js">
import Loader from "@/components/Loader.vue";
import ArticlesCard from "@/components/ArticlesCard.vue";
import { useArticlesPartial } from "@/composition/useArticlesPartial/index.js";
import { onMounted } from 'vue'
const { loading, isError, articles, linksResult, loadArticles } = useArticlesPartial()
onMounted(async () => {
    await loadArticles()
})
async function handleChangeRoute(label) {
    await loadArticles(10, +label)
}
</script>

<template>
    <div class="news-catalog-page__flex" v-if="isError || loading">
        <Loader
          v-if="loading"
          :is-loading="loading"
        />
        <p v-if="isError" class="news-catalog-page__error">
            Не удалось получить данные с сервера
        </p>
    </div>
    <div class="news-catalog-page" v-else>
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
    <div class="news-catalog-page__pagination">
        <button
            v-for="link in linksResult"
            :key="link.label"
            class="news-catalog-page__pagination__btn"
            @click="handleChangeRoute(link.label)"
            :class="{'news-catalog-page__pagination__btn-active': link.active}"
        >
            {{link.label}}
        </button>
    </div>
</template>

<style scoped lang="css">
.news-catalog-page {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, max-content));
    gap: 16px;
    width: 100%;
    margin-top: 20px;
}
.news-catalog-page__flex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
}
.news-catalog-page__pagination {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 16px;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;
}
.news-catalog-page__pagination__btn-active {
    background: #dcdce2 !important;
}
.news-catalog-page__pagination__btn {
    background: transparent;
    color: #000000;
    border: 1px solid lightgray;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
}
</style>
