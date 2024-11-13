import { ref } from "vue";
import { getArticleBySlug } from "@/api/client/articles/getArticleBySlug.js";


export default function useArticleFind() {
    const loading = ref(false);
    const isError = ref(false);
    const article = ref(null);

    async function getNewsBySlug(slug) {
        try {
            loading.value = true
            isError.value = false
            const result = await getArticleBySlug(slug)
            if (result?.status === 200) {
                article.value = result.data
            }
            loading.value = false
        } catch (e) {
            loading.value = false
            isError.value = true
            console.error(e)
        }
    }

    return {
        loading,
        isError,
        article,
        getNewsBySlug
    }
}
