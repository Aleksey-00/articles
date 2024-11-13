import {ref} from "vue";
import {getPartialArticlesData} from "@/api/client/articles/getPartialArticlesData.js";


export function useArticlesPartial() {
    const loading = ref(false);
    const isError = ref(false);
    const articles = ref([]);
    const linksResult = ref([])

    async function loadArticles(perPage = 10, page = 1) {
        try {
            loading.value = true
            isError.value = false
            const result = await getPartialArticlesData(perPage, page)
            if (result?.status === 200) {
                const { data, links } = result.data
                articles.value = data
                links.shift()
                links.pop()
                linksResult.value = links
            }
            loading.value = false
        } catch (e) {
            loading.value = false
            isError.value = true
            articles.value = []
            console.error(e)
        }
    }

    return {
        loading,
        isError,
        linksResult,
        articles,
        loadArticles
    }
}
