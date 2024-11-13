<script setup lang="js">
import EyeIcon from "@/components/icons/EyeIcon.vue";
import Heart from "@/components/icons/Heart.vue";

defineProps({
    article: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="article-card">
        <div class="article-card__wrapper">
            <img
                :src="article['img-src']"
                :alt="article.slug"
                class="article-card__img"
            />
            <div class="article-card__info">
                <div class="article-card__title">
                    {{article.title}}
                </div>
                <div class="article-card__description">
                    {{article.description}}
                </div>
                <div class="article-card__wrapper__forward">
                    <div class="article-card__review-count">
                        <EyeIcon class="article-card__icon" />
                        {{ article['review-count'] }}
                    </div>
                    <Heart
                        v-if="!!(article['is-favorites'])"
                        class="article-card__icon"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
.article-card {
    height: 100%;
    border: 1px solid lightgray;
    border-radius: 8px;
}
.article-card:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.76);
}
.article-card__info {
    display: flex;
    padding: 0 8px 8px 8px;
    height: 100%;
    flex-direction: column;
}
.article-card__icon {
    height: 20px;
    width: 20px;
}
.article-card__wrapper__forward {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
}
.article-card__review-count {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 12px;
    color: #b3a6a6;
}
.article-card__title {
    font-weight: bold;
}
.article-card__description {
    font-size: 14px;
}
.article-card__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    height: 100%;
}
.article-card__img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
</style>
