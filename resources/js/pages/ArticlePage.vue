<script setup lang="js">
import { useRoute } from "vue-router"
import {onMounted, ref, onUnmounted} from 'vue'
import useArticleFind from "@/composition/useArticleFindBySlug/index.js"
import Loader from "@/components/Loader.vue";
import EyeIcon from "@/components/icons/EyeIcon.vue";
import Heart from "@/components/icons/Heart.vue";
import { navs } from "@/navs/index.js";
import useSendComment from "@/composition/useSendComment/index.js";

const route = useRoute()
const { loading, article, isError, getNewsBySlug } = useArticleFind()
const { isSendComment, handleSendComment } = useSendComment()
const comment = ref({
    theme: '',
    message: ''
})

const error = ref({
    theme: '',
    message: ''
})

function checkCurrentRoute() {
    const regexp = /news/gmi
    if (regexp.test(route.fullPath)) {
        navs.value =  navs.value.map(el => ({ ...el, active: false }))
        navs.value[1].active = true
    }
}

onMounted(async () => {
    await getNewsBySlug(route.params.slug)
    checkCurrentRoute()
})
onUnmounted(() => {
    navs.value =  navs.value.map((el) => ({...el, active: false}))
    navs.value[0].active = true
})

function validForm() {
    if (comment.value.theme.trim() === "") {
        error.value.theme = 'Заполните обязательное поле тема'
    } else  {
        error.value.theme = ''
    }
    if (comment.value.message.trim() === "") {
        error.value.message = 'Заполните обязательное поле сообщение'
    } else {
        error.value.message = ''
    }
    return !!(!error.value.theme && !error.value.message)
}
async function handleSubmitComment() {
    console.log(validForm())
    console.log(comment.value)
    if (validForm()) {
        await handleSendComment({
            theme: comment.value.theme.trim(),
            message: comment.value.message.trim()
        })
    }
}
</script>

<template>
    <div class="article-page__flex" v-if="isError || loading">
        <Loader
            v-if="loading"
            :is-loading="loading"
        />
        <p v-if="isError" class="article-page__error">
            Не удалось получить данные с сервера
        </p>
    </div>
    <div class="article-page" v-else>
        <div class="article-page__title">
            {{ article?.title }}
        </div>
        <div class="article-page__counter__favorites">
            <Heart class="article-page__icon" v-if="article && !!(article['is-favorites'])"/>
            <div class="article-page__reviews">
                <EyeIcon class="article-page__icon" />
                <div>{{ article && article['review-count'] }}</div>
            </div>
        </div>
        <div>Забыл про тэги, извиняюсь</div>
        <div class="article-page__description">
            {{ article?.description }}
        </div>
        <hr />
        <div class="article-page__block__comments">
            <h3>Оставить комментарий</h3>
            <form
                v-if="!isSendComment"
                @submit.prevent="handleSubmitComment"
                class="article-page__form__comment"
            >
                <input
                    type="text"
                    class="article-page__form__input"
                    v-model="comment.theme"
                    placeholder="Тема сообщения"
                    :class="{'article-page__form__field-error': error.theme}"
                >
                <p class="error" v-if="error.theme">
                    {{ error.theme }}
                </p>
                <textarea
                    class="article-page__form__area"
                    v-model="comment.message"
                    placeholder="Сообщения"
                    rows="5"
                    :class="{'article-page__form__field-error': error.message}"
                />
                <p class="error" v-if="error.message">
                    {{ error.message }}
                </p>
                <button type="submit" class="article-page__form__button">
                    Добавить комментарий
                </button>
            </form>
            <p v-if="isSendComment" class="article-page__form__success">
                Ваше сообщение успешно отправлено
            </p>
        </div>
    </div>
</template>

<style scoped lang="css">
.error {
    color: #b34146;
    font-size: 12px;
}
.article-page__form__success {
    background: #29b67a;
    color: #fff;
    font-size: 14px;
}
.article-page__form__field-error {
    border: 1px solid #b34146 !important;
}
.article-page__form__button {
    background: #0a53be;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
    padding: 8px;
    border-radius: 4px;
}
.article-page__form__input, .article-page__form__area {
    border: 1px solid lightgray;
    padding: 8px;
    border-radius: 8px;
    font-size: 13px;
    color: #a79191;
    resize: none;
}
.article-page__form__input:focus, .article-page__form__area:focus {
    outline: none;
}
.article-page__block__comments {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    h3 {
        font-size: 16px;
        font-weight: bold;
    }
}
.article-page__form__comment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
}
.article-page__flex {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
}
.article-page__title {
    font-size: 32px;
    font-weight: bold;
}
.article-page__description {
    font-size: 16px;
}
.article-page__reviews {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
.article-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 16px;
    max-width: 750px;
}
.article-page__counter__favorites {
    display: inline-flex;
    align-items: center;
    gap: 8px;
}
.article-page__icon {
    height: 20px;
    width: 20px;
}
</style>
